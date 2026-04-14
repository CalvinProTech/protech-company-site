'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Upload,
  FileText,
  Phone,
  CheckCircle,
  Loader2,
  ArrowRight,
  ExternalLink,
  Home,
  Ruler,
  DollarSign,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackFormSubmit } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';

interface QuoteData {
  address: string;
  roofArea: number;
  roofFacets: number;
  predominantPitch: string;
  ridgesHips: number;
  rakes: number;
  eaves: number;
  valleys: number;
  bends: number;
  date: string;
  priceLow: number;
  priceHigh: number;
  priceMid: number;
}

const formatCurrency = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);

const formatNumber = (n: number) =>
  new Intl.NumberFormat('en-US').format(n);

export default function QuotePage() {
  const [step, setStep] = useState<'upload' | 'processing' | 'quote' | 'callback'>('upload');
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSent, setCallbackSent] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback(async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setError('Please upload a PDF file.');
      return;
    }

    setStep('processing');
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/parse-quickmeasure', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success && data.data) {
        setQuote(data.data);
        setStep('quote');
        trackFormSubmit('estimate', { source: 'quickmeasure-upload' });
      } else {
        setError(data.error || 'Could not process the report.');
        setStep('upload');
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setStep('upload');
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleCallback = useCallback(async () => {
    if (!callbackName.trim() || !callbackPhone.trim() || !quote) return;

    try {
      const utm = getUtmParams();
      await fetch(
        'https://ptr-lead-api.onrender.com/api/leads',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'website-9c7895c50cb2996fd014980643d5038c',
          },
          body: JSON.stringify({
            firstName: callbackName.split(' ')[0],
            lastName: callbackName.split(' ').slice(1).join(' ') || '(Quote Request)',
            phone: callbackPhone,
            streetAddress: quote.address,
            serviceType: 'Roof Replacement',
            utm_source: utm.utm_source || 'website',
            utm_medium: utm.utm_medium || 'quote-upload',
            utm_campaign: utm.utm_campaign || 'self-quote',
          }),
        }
      );
      setCallbackSent(true);
    } catch {
      // Non-blocking
      setCallbackSent(true);
    }
  }, [callbackName, callbackPhone, quote]);

  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Get Your Exact Roofing Quote
          </h1>
          <p className="mt-3 text-lg text-primary-200">
            Upload your GAF QuickMeasure report and get an instant detailed quote.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          {/* Step 1: Upload or order QuickMeasure */}
          {step === 'upload' && (
            <div className="space-y-8">
              {/* Upload zone */}
              <div
                className={`rounded-2xl border-2 border-dashed p-10 text-center transition-colors ${
                  dragOver
                    ? 'border-accent-500 bg-accent-50'
                    : 'border-neutral-300 bg-white'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                <p className="mt-4 text-lg font-semibold text-primary-900">
                  Upload Your GAF QuickMeasure Report
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  Drag and drop your PDF here, or click to browse
                </p>
                <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600">
                  <FileText className="h-5 w-5" />
                  Choose PDF File
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFile(file);
                    }}
                  />
                </label>

                {error && (
                  <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}
              </div>

              {/* Don't have a report? */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-primary-900">
                  Don&apos;t have a QuickMeasure report yet?
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  GAF QuickMeasure provides professional satellite roof
                  measurements for $20. It takes about an hour to receive your
                  report.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://quickmeasure.gaf.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
                  >
                    Order QuickMeasure Report
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    href="/free-estimate"
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-neutral-50"
                  >
                    Get a Free Instant Estimate Instead
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* How it works */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-primary-900">How It Works</h3>
                <div className="mt-4 space-y-3">
                  {[
                    'Order a GAF QuickMeasure report for your address ($20)',
                    'Download the PDF when it arrives (usually under 1 hour)',
                    'Upload it here — we generate your quote instantly',
                    'Call us or request a callback to finalize and schedule',
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 text-sm text-neutral-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Processing */}
          {step === 'processing' && (
            <div className="py-20 text-center">
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-accent-500" />
              <p className="mt-4 text-lg font-semibold text-primary-900">
                Analyzing Your Roof Measurements...
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Extracting data from your QuickMeasure report
              </p>
            </div>
          )}

          {/* Quote Result */}
          {step === 'quote' && quote && (
            <div className="space-y-6">
              {/* Price Hero */}
              <div className="rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 text-center text-white shadow-xl">
                <p className="text-sm font-medium text-primary-300">
                  Your Roof Replacement Quote
                </p>
                <p className="mt-3 text-5xl font-bold md:text-6xl">
                  {formatCurrency(quote.priceMid)}
                </p>
                <p className="mt-2 text-sm text-primary-300">
                  Range: {formatCurrency(quote.priceLow)} – {formatCurrency(quote.priceHigh)}
                </p>
                <p className="mt-4 text-xs text-primary-400">
                  Based on GAF QuickMeasure professional satellite measurement
                </p>
              </div>

              {/* Measurement Details */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-primary-900">
                  Roof Measurements
                </h3>
                <p className="mt-1 text-xs text-neutral-400">{quote.address}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { icon: Home, label: 'Roof Area', value: `${formatNumber(quote.roofArea)} sq ft` },
                    { icon: Ruler, label: 'Pitch', value: quote.predominantPitch },
                    { icon: Ruler, label: 'Facets', value: quote.roofFacets.toString() },
                    { icon: Ruler, label: 'Ridges/Hips', value: `${formatNumber(quote.ridgesHips)} ft` },
                    { icon: Ruler, label: 'Rakes', value: `${formatNumber(quote.rakes)} ft` },
                    { icon: Ruler, label: 'Eaves', value: `${formatNumber(quote.eaves)} ft` },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg bg-neutral-50 p-3">
                      <p className="text-xs text-neutral-500">{item.label}</p>
                      <p className="mt-1 text-lg font-bold text-primary-900">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-primary-900">
                  What&apos;s Included
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    'Complete tear-off of existing roof',
                    'New synthetic underlayment',
                    'GAF Timberline HDZ architectural shingles',
                    'New drip edge and flashing',
                    'Ridge vent ventilation system',
                    'Full cleanup with magnetic nail sweep',
                    'Lifetime workmanship warranty',
                    'GAF manufacturer warranty',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Financing */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="mt-0.5 h-5 w-5 text-accent-500" />
                  <div>
                    <h3 className="font-semibold text-primary-900">
                      $0 Down Financing Available
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      As low as {formatCurrency(Math.round(quote.priceMid / 180))}/mo
                      with approved credit (180 months).{' '}
                      <Link href="/financing" className="text-accent-500 underline">
                        See financing options
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Call CTA */}
              <div className="rounded-xl border-2 border-accent-500 bg-accent-50 p-6 text-center">
                <p className="text-lg font-bold text-primary-900">
                  Ready to move forward?
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Call us to finalize your quote, choose materials, and schedule
                  your installation.
                </p>
                <a
                  href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                  className="mt-4 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 text-lg font-bold text-white shadow-md transition-all hover:bg-accent-600"
                >
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.defaultPhone}
                </a>
                <p className="mt-2 text-xs text-neutral-500">
                  Mon–Fri 9AM–5PM ET · Sat 9AM–2PM
                </p>
              </div>

              {/* Or request callback */}
              {!callbackSent ? (
                <div className="rounded-xl border border-neutral-200 bg-white p-6">
                  <p className="text-sm font-medium text-primary-900">
                    Can&apos;t call right now? We&apos;ll reach out to you.
                  </p>
                  <div className="mt-3 flex gap-3">
                    <input
                      type="text"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      placeholder="Your name"
                      className="h-11 flex-1 rounded-lg border border-neutral-300 px-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                    />
                    <input
                      type="tel"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      placeholder="Phone number"
                      className="h-11 flex-1 rounded-lg border border-neutral-300 px-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                    />
                    <button
                      onClick={handleCallback}
                      disabled={!callbackName.trim() || !callbackPhone.trim()}
                      className="h-11 rounded-lg bg-primary-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 disabled:opacity-50"
                    >
                      Call Me
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center">
                  <p className="font-semibold text-green-800">
                    ✓ We&apos;ll call you within 5 minutes!
                  </p>
                </div>
              )}

              {/* Upload another */}
              <button
                onClick={() => {
                  setStep('upload');
                  setQuote(null);
                  setCallbackSent(false);
                }}
                className="w-full text-center text-sm text-neutral-500 hover:text-primary-700"
              >
                ← Upload a different report
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
