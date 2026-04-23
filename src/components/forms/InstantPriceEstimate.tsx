'use client';

import { useState, useCallback } from 'react';
import { Phone, MapPin, Loader2, ArrowRight, Home } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackFormSubmit } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import SMSConsentCheckbox from './SMSConsentCheckbox';

interface RoofEstimate {
  roofAreaSqFt: number;
  predominantPitch: string;
  roofFacets: number;
  dataQuality: string;
  priceLow: number;
  priceHigh: number;
  lowPitch?: boolean;
}

export default function InstantPriceEstimate() {
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<RoofEstimate | null>(null);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSmsConsent, setCallbackSmsConsent] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);
  const [callbackError, setCallbackError] = useState<string | null>(null);
  const [callbackSubmitting, setCallbackSubmitting] = useState(false);

  const handleEstimate = useCallback(async () => {
    if (!address.trim()) return;
    setIsLoading(true);
    setError(null);
    setEstimate(null);

    try {
      // Geocode
      const geoRes = await fetch('/api/roof-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });
      const data = await geoRes.json();

      if (!data.success) {
        setError(data.error || 'Could not estimate this address. Try entering the full address with city and state.');
        return;
      }

      setEstimate(data.data);
      // Don't fire Google Ads conversion here — user only entered an address,
      // no contact info captured yet. Conversion fires on callback request.
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  const handleCallback = useCallback(async () => {
    if (!callbackName.trim() || !callbackPhone.trim() || !callbackSmsConsent) return;

    setCallbackSubmitting(true);
    setCallbackError(null);

    try {
      const utm = getUtmParams();
      const res = await fetch(
        process.env.NEXT_PUBLIC_LEAD_API_URL || 'https://ptr-lead-api.onrender.com/api/leads',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.NEXT_PUBLIC_LEAD_API_KEY || 'website-9c7895c50cb2996fd014980643d5038c',
          },
          body: JSON.stringify({
            firstName: callbackName.split(' ')[0],
            lastName: callbackName.split(' ').slice(1).join(' ') || '(Callback)',
            phone: callbackPhone,
            streetAddress: address,
            serviceType: 'Roof Replacement',
            smsConsent: callbackSmsConsent,
            utm_source: utm.utm_source,
            utm_medium: utm.utm_medium,
            utm_campaign: utm.utm_campaign,
            gclid: utm.gclid,
          }),
        }
      );

      if (!res.ok) {
        setCallbackError('Something went wrong. Please try again or call us directly.');
        return;
      }

      setCallbackSent(true);
      trackFormSubmit('callback', { name: callbackName });
    } catch {
      setCallbackError('Something went wrong. Please try again or call us directly.');
    } finally {
      setCallbackSubmitting(false);
    }
  }, [callbackName, callbackPhone, callbackSmsConsent, address]);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat('en-US').format(Math.round(n));

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <div className="mx-auto w-full max-w-xl">
      {!estimate ? (
        // Step 1: Address Input
        <div className="space-y-4">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEstimate()}
              placeholder="Enter your full home address..."
              className="h-14 w-full rounded-xl border border-neutral-300 bg-white pl-12 pr-4 text-base shadow-sm transition-all focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
          <button
            onClick={handleEstimate}
            disabled={isLoading || !address.trim()}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent-500 text-lg font-semibold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Measuring Your Roof...
              </>
            ) : (
              <>
                Get Instant Price Range
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}
        </div>
      ) : (
        // Step 2: Results
        <div className="space-y-6">
          {/* Price Range Hero */}
          {estimate.lowPitch ? (
            <div className="rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 p-6 text-center text-white shadow-xl">
              <p className="text-sm font-medium text-amber-200">
                Low-Slope Roof Detected
              </p>
              <p className="mt-2 text-2xl font-bold">
                Your roof pitch is {estimate.predominantPitch}
              </p>
              <div className="mt-3 flex items-center justify-center gap-4 text-sm text-amber-200">
                <span>{formatNumber(estimate.roofAreaSqFt)} sq ft</span>
                <span>•</span>
                <span>{estimate.roofFacets} facets</span>
              </div>
              <p className="mt-3 text-sm text-amber-200">
                Roofs below 3/12 pitch require flat roof materials (TPO, EPDM,
                or modified bitumen) and need a custom quote. Call us for a free
                assessment.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 text-center text-white shadow-xl">
              <p className="text-sm font-medium text-primary-300">
                Estimated Roof Replacement Cost
              </p>
              <p className="mt-2 text-4xl font-bold md:text-5xl">
                {formatCurrency(estimate.priceLow)} – {formatCurrency(estimate.priceHigh)}
              </p>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-primary-300">
                <span className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  {formatNumber(estimate.roofAreaSqFt)} sq ft
                </span>
                <span>•</span>
                <span>{estimate.predominantPitch} pitch</span>
                <span>•</span>
                <span>{estimate.roofFacets} facets</span>
              </div>
              <p className="mt-3 text-xs text-primary-400">
                Based on satellite measurement · Final price depends on materials and roof condition
              </p>
            </div>
          )}

          {/* Call CTA */}
          <div className="rounded-xl border-2 border-accent-500 bg-accent-50 p-6 text-center">
            <p className="font-semibold text-primary-900">
              Ready for your exact quote?
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              A roofing specialist can give you a precise estimate in minutes
            </p>
            <a
              href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
              className="mt-4 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 text-lg font-bold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call {SITE_CONFIG.defaultPhone}
            </a>
            <p className="mt-2 text-xs text-neutral-500">
              Mon–Fri 9AM–5PM ET · Sat 9AM–2PM
            </p>
          </div>

          {/* Or Request Callback */}
          {!showCallbackForm && !callbackSent && (
            <button
              onClick={() => setShowCallbackForm(true)}
              className="w-full rounded-lg border border-neutral-300 bg-white py-3 text-sm font-medium text-primary-700 transition-all hover:bg-neutral-50"
            >
              Can&apos;t call right now? Request a callback →
            </button>
          )}

          {showCallbackForm && !callbackSent && (
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-primary-900">
                We&apos;ll call you within 5 minutes
              </p>
              <div className="mt-3 space-y-3">
                <input
                  type="text"
                  value={callbackName}
                  onChange={(e) => setCallbackName(e.target.value)}
                  placeholder="Your name"
                  className="h-12 w-full rounded-lg border border-neutral-300 px-4 text-base focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                />
                <input
                  type="tel"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="h-12 w-full rounded-lg border border-neutral-300 px-4 text-base focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                />
                <SMSConsentCheckbox
                  id="callback-sms-consent"
                  checked={callbackSmsConsent}
                  onChange={setCallbackSmsConsent}
                />
                {callbackError && (
                  <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
                    {callbackError}
                  </p>
                )}
                <button
                  onClick={handleCallback}
                  disabled={callbackSubmitting || !callbackName.trim() || !callbackPhone.trim() || !callbackSmsConsent}
                  className="flex h-12 w-full items-center justify-center rounded-lg bg-primary-700 font-semibold text-white transition-all hover:bg-primary-800 disabled:opacity-50"
                >
                  {callbackSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    'Request Callback'
                  )}
                </button>
              </div>
            </div>
          )}

          {callbackSent && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center">
              <p className="font-semibold text-green-800">
                ✓ We&apos;ll call you within 5 minutes!
              </p>
            </div>
          )}

          {/* Try Another Address */}
          <button
            onClick={() => {
              setEstimate(null);
              setAddress('');
              setShowCallbackForm(false);
              setCallbackSent(false);
              setCallbackSmsConsent(false);
              setCallbackError(null);
            }}
            className="w-full text-center text-sm text-neutral-500 hover:text-primary-700"
          >
            ← Try a different address
          </button>
        </div>
      )}
    </div>
  );
}
