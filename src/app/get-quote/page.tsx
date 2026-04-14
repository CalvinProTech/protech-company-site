import type { Metadata } from 'next';
import { Phone, Shield, Star, Clock, CheckCircle } from 'lucide-react';

import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import EstimateForm from '@/components/forms/EstimateForm';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Get a Free Roofing Quote | ProTech Roofing',
    description:
      'Request your free roofing quote from ProTech Roofing. Licensed in 9 states + D.C. Roof replacement, repair, storm damage, and insurance claims. $0 down financing. Call (866) 308-2640.',
    path: '/get-quote',
  });
}

const trustPoints = [
  { icon: Shield, text: 'GAF Master Elite — Top 2% of Roofers' },
  { icon: Star, text: '5-Star Rated · 1,000+ Roofs Completed' },
  { icon: Clock, text: 'We Respond Within 5 Minutes' },
  { icon: CheckCircle, text: '$0 Down Financing Available' },
];

export default function GetQuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Get Your Free Roofing Quote
          </h1>
          <p className="mt-4 text-lg text-primary-200">
            Tell us about your project and a roofing specialist will call you
            within minutes. No obligation, no pressure.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-primary-300"
              >
                <point.icon className="h-4 w-4 text-accent-400" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Social Proof */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form — takes more space */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-neutral-200/50 md:p-8">
                <EstimateForm />
              </div>
            </div>

            {/* Sidebar — trust builders */}
            <div className="space-y-6 lg:col-span-2">
              {/* Phone CTA */}
              <div className="rounded-xl bg-primary-800 p-6 text-center text-white">
                <p className="text-sm font-medium text-primary-300">
                  Prefer to talk?
                </p>
                <a
                  href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                  className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-accent-400"
                >
                  <Phone className="h-6 w-6" />
                  {SITE_CONFIG.defaultPhone}
                </a>
                <p className="mt-2 text-xs text-primary-400">
                  Mon–Fri 9AM–5PM ET · Sat 9AM–2PM
                </p>
              </div>

              {/* What Happens Next */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-primary-900">
                  What Happens Next?
                </h3>
                <ol className="mt-4 space-y-3">
                  <li className="flex gap-3 text-sm text-neutral-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                      1
                    </span>
                    A roofing specialist calls you within 5 minutes
                  </li>
                  <li className="flex gap-3 text-sm text-neutral-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                      2
                    </span>
                    We schedule a free roof inspection at your convenience
                  </li>
                  <li className="flex gap-3 text-sm text-neutral-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                      3
                    </span>
                    You receive a detailed written estimate — no obligation
                  </li>
                  <li className="flex gap-3 text-sm text-neutral-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                      4
                    </span>
                    If you proceed, we handle everything from permits to install
                  </li>
                </ol>
              </div>

              {/* Testimonial */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm italic text-neutral-600">
                  &quot;They found damage I didn&apos;t even know about.
                  Insurance covered the whole thing. ProTech handled everything
                  from the inspection to the install.&quot;
                </blockquote>
                <p className="mt-2 text-xs font-medium text-neutral-500">
                  — Verified Customer
                </p>
              </div>

              {/* Certifications */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-primary-900">
                  Why ProTech?
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    'GAF Master Elite Certified (top 2%)',
                    'Licensed & insured in 9 states + D.C.',
                    '1,000+ roofs completed',
                    'Lifetime workmanship warranty',
                    '$0 down financing options',
                    'Insurance claims assistance',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
