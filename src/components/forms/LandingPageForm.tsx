'use client';

import { useState, useCallback } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { trackFormSubmit } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import AddressAutocomplete, { type ParsedAddress } from './AddressAutocomplete';
import SMSConsentCheckbox from './SMSConsentCheckbox';

const SERVICE_STATES = [
  'FL',
  'GA',
  'TX',
  'NC',
  'SC',
  'VA',
  'MD',
  'PA',
  'CT',
  'DE',
  'WV',
  'TN',
  'KY',
  'OH',
];

const SERVICE_AREAS: Record<string, string> = {
  FL: 'Florida',
  GA: 'Georgia',
  TX: 'Texas',
  NC: 'North Carolina',
  SC: 'South Carolina',
  VA: 'Virginia',
  MD: 'Maryland',
  PA: 'Pennsylvania',
  CT: 'Connecticut',
  DE: 'Delaware',
  WV: 'West Virginia',
  TN: 'Tennessee',
  KY: 'Kentucky',
  OH: 'Ohio',
};

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
  const [smsConsent, setSmsConsent] = useState(false);

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

  // Step 3: Submit lead
  const handleSubmit = useCallback(async () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!streetAddress.trim()) {
      setError('Please enter your home address.');
      return;
    }
    if (!smsConsent) {
      setError('Please agree to receive text messages to continue.');
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
          smsConsent,
          source: `lp-${service || 'general'}`,
          _utm: utm,
        }),
      });

      if (!res.ok) {
        throw new Error(`Submission failed with status ${res.status}`);
      }

      setSubmitted(true);
      trackFormSubmit('callback', {
        name,
        source: `lp-${service || 'general'}`,
        zip,
        service,
        timeframe,
      });
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
    smsConsent,
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
            placeholder="Email"
            className="focus:border-accent-500 focus:ring-accent-500/20 h-14 w-full rounded-xl border border-neutral-300 px-4 text-base focus:ring-2 focus:outline-none"
          />
          <AddressAutocomplete
            onAddressSelect={handleAddressPicked}
            placeholder="Home address"
          />
          {addressPicked && city && stateCode && (
            <p className="text-xs text-neutral-500">
              📍 {city}, {stateCode} {zip}
            </p>
          )}
          <SMSConsentCheckbox checked={smsConsent} onChange={setSmsConsent} />
          <button
            onClick={handleSubmit}
            disabled={
              isLoading ||
              !name.trim() ||
              !phone.trim() ||
              !email.trim() ||
              !streetAddress.trim() ||
              !smsConsent
            }
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
