'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { trackFormSubmit } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import AddressAutocomplete, { type ParsedAddress } from './AddressAutocomplete';

// All US states + DC. Form accepts submissions from any US state so
// out-of-area leads aren't silently rejected at validation (finance-partner
// match requirement). Visible licensed footprint is enforced via copy
// elsewhere, not by form gating.
const SERVICE_AREAS: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DC: 'Washington, D.C.', DE: 'Delaware',
  FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois',
  IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
  ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan',
  MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri', MT: 'Montana',
  NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota',
  OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania',
  RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee',
  TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
  WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
};

const SERVICE_STATES = Object.keys(SERVICE_AREAS);

const SERVICE_OPTIONS = [
  { value: 'roof-replacement', label: 'Roof Replacement', icon: '🏠' },
  { value: 'roof-repair', label: 'Roof Repair', icon: '🔧' },
  { value: 'storm-damage', label: 'Storm Damage', icon: '⛈️' },
  { value: 'roof-inspection', label: 'Free Inspection', icon: '🔍' },
];

const TIMEFRAME_OPTIONS = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-3months', label: 'Within 1-3 months' },
  { value: 'planning', label: 'Just getting quotes' },
];

interface LandingPageFormProps {
  defaultService?: string;
}

export default function LandingPageForm({
  defaultService,
}: LandingPageFormProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form data
  const [zip, setZip] = useState('');
  const [zipState, setZipState] = useState(''); // derived from zip geocode in step 1
  const [service, setService] = useState(defaultService || '');
  const [timeframe, setTimeframe] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [addressPicked, setAddressPicked] = useState(false);

  // Anti-spam: honeypot field + form mount timestamp (mirrors ContactForm)
  const [honeypot, setHoneypot] = useState('');
  const formLoadedAt = useRef(0);

  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  // Step 1: Zip code validation
  const handleZipSubmit = useCallback(async () => {
    if (!/^\d{5}$/.test(zip)) {
      setError('Please enter a valid 5-digit zip code.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Validate zip is in service area via geocoding
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = await res.json();

      if (data.status === 'OK' && data.results?.[0]) {
        const components = data.results[0].address_components || [];
        const stateComp = components.find((c: { types: string[] }) =>
          c.types.includes('administrative_area_level_1')
        );
        const stateAbbr = stateComp?.short_name;

        if (stateAbbr && SERVICE_STATES.includes(stateAbbr)) {
          setZipState(stateAbbr);
          // Prefill city/state from zip geocode — user can overwrite via autocomplete on step 3
          const cityComp = components.find(
            (c: { types: string[] }) =>
              c.types.includes('locality') || c.types.includes('postal_town')
          );
          if (cityComp) setCity(cityComp.long_name || '');
          setStateCode(stateAbbr);
          setStep(2);
          if (defaultService) {
            setService(defaultService);
          }
        } else {
          setError(
            `We currently serve ${Object.values(SERVICE_AREAS).join(', ')}. We don't cover your area yet.`
          );
        }
      } else {
        setError('Could not verify that zip code. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [zip, defaultService]);

  // Step 3: Submit lead. Only name + phone are required — every extra
  // required field measurably cuts conversion (3-field forms ~11.5% vs
  // 5-field ~8.1%). Email + address are optional; consent is collected via
  // the conspicuous disclosure above the submit button (TCPA E-SIGN express
  // written consent pattern) instead of a mandatory checkbox.
  const handleSubmit = useCallback(async () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address, or leave it blank.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const utm = getUtmParams();
      const apiUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

      const res = await fetch(`${apiUrl}/api/callback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: phone.replace(/\D/g, ''),
          email,
          streetAddress,
          city,
          state: stateCode || zipState,
          zip,
          serviceType: service,
          timeframe,
          // Express written consent is collected via the conspicuous
          // disclosure rendered directly above the submit button — the act of
          // submitting constitutes consent (TCPA E-SIGN pattern), so
          // informational consent is always true on submit. Promotional
          // consent is NOT collected by the disclosure and is sent false.
          smsConsent: true,
          smsConsentPromo: false,
          source: `lp-${service || 'general'}`,
          _utm: utm,
          _hp: honeypot,
          _t: formLoadedAt.current,
        }),
      });

      if (!res.ok) {
        throw new Error(`Submission failed with status ${res.status}`);
      }

      const result = await res.json();

      setSubmitted(true);
      // Spam-blocked submissions come back success:true (bot deception) with
      // tracked:false — never fire ad conversions for those.
      if (result.tracked !== false) {
        trackFormSubmit(
          'callback',
          {
            name,
            source: `lp-${service || 'general'}`,
            zip,
            service,
            timeframe,
          },
          phone,
        );
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [
    name,
    phone,
    email,
    streetAddress,
    city,
    stateCode,
    zipState,
    zip,
    service,
    timeframe,
    honeypot,
  ]);

  const handleAddressPicked = useCallback(
    (formatted: string, parsed?: ParsedAddress) => {
      if (parsed) {
        setStreetAddress(parsed.street || formatted);
        if (parsed.city) setCity(parsed.city);
        if (parsed.state) setStateCode(parsed.state);
        if (parsed.zip && !zip) setZip(parsed.zip);
      } else {
        // Enter pressed without picking from dropdown — save raw typed text
        setStreetAddress(formatted);
      }
      setAddressPicked(true);
    },
    [zip]
  );

  // Inline disabled-button reasons — a disabled button must always say WHY
  // (silently dead buttons were killing paid-traffic conversions).
  const zipDisabledReason =
    zip.length < 5 ? 'Enter your 5-digit zip code to continue.' : null;
  const step2DisabledReason = !service
    ? 'Select a service to continue.'
    : !timeframe
      ? 'Select a timeframe to continue.'
      : null;
  const submitDisabledReason = !name.trim()
    ? 'Enter your name to continue.'
    : !phone.trim()
      ? 'Enter your phone number to continue.'
      : null;

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-2xl font-bold text-green-900">
          We&apos;ll Call You Shortly!
        </h3>
        <p className="mt-2 text-green-700">
          A roofing specialist will reach out within 5 minutes during business
          hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      {/* Progress bar — shown on steps 2-3 only */}
      {step > 1 && (
        <div className="mb-6">
          <div className="mb-1 flex justify-between text-xs text-neutral-500">
            <span>Step {step} of 3</span>
            <span>{step === 2 ? 'Almost there' : 'Final step'}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="bg-accent-500 h-full rounded-full transition-all duration-300"
              style={{ width: step === 2 ? '66%' : '100%' }}
            />
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Step 1: Zip Code */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-primary-900 text-lg font-bold">
              Check if we serve your area
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Enter your zip code to get started
            </p>
          </div>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
            onKeyDown={(e) => e.key === 'Enter' && handleZipSubmit()}
            placeholder="Enter zip code"
            className="focus:border-accent-500 focus:ring-accent-500/20 h-14 w-full rounded-xl border border-neutral-300 px-4 text-center text-2xl font-semibold tracking-widest focus:ring-2 focus:outline-none"
            autoFocus
          />
          {zipDisabledReason && zip.length > 0 && (
            <p className="text-sm font-medium text-red-600">
              {zipDisabledReason}
            </p>
          )}
          <button
            onClick={handleZipSubmit}
            disabled={isLoading || zip.length < 5}
            className="bg-accent-500 hover:bg-accent-600 flex h-14 w-full items-center justify-center rounded-xl text-lg font-bold text-white shadow-md transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Check My Area'
            )}
          </button>
        </div>
      )}

      {/* Step 2: Service Type + Timeframe */}
      {step === 2 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-primary-900 text-lg font-bold">
              What do you need?
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setService(opt.value)}
                className={`rounded-xl border-2 p-4 text-left transition-all ${
                  service === opt.value
                    ? 'border-accent-500 bg-accent-50 ring-accent-500/20 ring-2'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <span className="text-2xl">{opt.icon}</span>
                <p className="text-primary-900 mt-1 text-sm font-semibold">
                  {opt.label}
                </p>
              </button>
            ))}
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-neutral-700">
              When do you need this done?
            </p>
            <div className="space-y-2">
              {TIMEFRAME_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTimeframe(opt.value)}
                  className={`w-full rounded-lg border-2 px-4 py-3 text-left text-sm transition-all ${
                    timeframe === opt.value
                      ? 'border-accent-500 bg-accent-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {step2DisabledReason && (
            <p className="text-sm font-medium text-red-600">
              {step2DisabledReason}
            </p>
          )}
          <button
            onClick={() => setStep(3)}
            disabled={!service || !timeframe}
            className="bg-accent-500 hover:bg-accent-600 flex h-14 w-full items-center justify-center rounded-xl text-lg font-bold text-white shadow-md transition-all disabled:opacity-50"
          >
            Next Step
          </button>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-primary-900 text-lg font-bold">
              Get your free quote
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              A roofing specialist will call you within 5 minutes
            </p>
          </div>

          {/* Honeypot — hidden from real users, bots fill it */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] -top-[9999px]"
          >
            <label htmlFor="lp-website">Website</label>
            <input
              id="lp-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="focus:border-accent-500 focus:ring-accent-500/20 h-14 w-full rounded-xl border border-neutral-300 px-4 text-base focus:ring-2 focus:outline-none"
            autoFocus
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="focus:border-accent-500 focus:ring-accent-500/20 h-14 w-full rounded-xl border border-neutral-300 px-4 text-base focus:ring-2 focus:outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (optional)"
            className="focus:border-accent-500 focus:ring-accent-500/20 h-14 w-full rounded-xl border border-neutral-300 px-4 text-base focus:ring-2 focus:outline-none"
          />
          {/* Address is optional and never gates submit. Raw typed input is
              captured on every keystroke; the Google autocomplete dropdown is
              a progressive enhancement that overwrites with parsed components
              when the visitor picks a suggestion. */}
          <AddressAutocomplete
            onAddressSelect={handleAddressPicked}
            onInputChange={(v) => {
              setStreetAddress(v);
              setAddressPicked(false);
            }}
            placeholder="Street address (optional)"
          />
          {addressPicked && city && stateCode && (
            <p className="text-xs text-neutral-500">
              📍 {city}, {stateCode} {zip}
            </p>
          )}

          {/* Conspicuous TCPA/E-SIGN consent disclosure — submitting the form
              constitutes express written consent (replaces the former
              mandatory checkbox; same legal substance, incl. MD Stop the Spam
              Calls Act coverage). */}
          <p className="rounded-lg bg-neutral-50 p-3 text-[13px] leading-relaxed text-neutral-600">
            By clicking &ldquo;Get My Free Quote,&rdquo; I give my express
            written consent for <strong>ProTech Roofing</strong> to call and
            text me at the number provided about my request (appointment
            reminders, quote updates), including via autodialer or other
            automated dialing/texting technology and prerecorded or
            artificial-voice messages. Message frequency varies. Msg &amp;
            data rates may apply. Consent is not a condition of purchase.
            Reply <strong>STOP</strong> to opt out or <strong>HELP</strong>{' '}
            for help. See our{' '}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-accent-700 underline"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-accent-700 underline"
            >
              Terms of Service
            </a>
            .
          </p>

          {submitDisabledReason && (
            <p className="text-sm font-medium text-red-600">
              {submitDisabledReason}
            </p>
          )}
          <button
            onClick={handleSubmit}
            disabled={isLoading || !!submitDisabledReason}
            className="bg-accent-500 hover:bg-accent-600 flex h-14 w-full items-center justify-center rounded-xl text-lg font-bold text-white shadow-md transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Get My Free Quote'
            )}
          </button>
          <p className="text-center text-xs text-neutral-400">
            No spam. We only contact you about your roofing project.
          </p>
        </div>
      )}
    </div>
  );
}
