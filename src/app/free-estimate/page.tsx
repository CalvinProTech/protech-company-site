import type { Metadata } from 'next';
import {
  Phone,
  MapPin,
  UserCheck,
  Satellite,
  Star,
  CheckCircle,
} from 'lucide-react';

import { createPageMetadata } from '@/lib/metadata';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import InstantPriceEstimate from '@/components/forms/InstantPriceEstimate';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Free Roof Estimate — No Obligation',
    description:
      'Get a free satellite-powered roof estimate in minutes. No obligation, no pressure. Serving FL, GA, TX, NC, SC, VA, MD, PA, CT, DE, WV, TN, KY & OH. $0 down financing available. Call (866) 308-2640 or fill out our form.',
    path: '/free-estimate',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Free Estimate', href: '/free-estimate' },
];

const whatToExpectSteps = [
  {
    icon: MapPin,
    title: 'Enter Your Address',
    description:
      'Type your full home address. Our satellite technology measures your roof in seconds.',
  },
  {
    icon: Satellite,
    title: 'See Your Price Range',
    description:
      'Get an instant estimated cost range based on your roof size and pitch — no appointment needed.',
  },
  {
    icon: Phone,
    title: 'Call for Your Exact Quote',
    description:
      'Speak with a roofing specialist to get your precise quote, discuss materials, and ask about $0 down financing.',
  },
];

export default function FreeEstimatePage() {
  const testimonials = getFeaturedTestimonials(3);

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero + Instant Estimate Widget */}
      <section className="bg-primary-800 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Get Your Free Roofing Estimate
            </h1>
            <p className="text-primary-200 mt-4 text-lg">
              Enter your address for an instant price range — powered by
              satellite roof measurement. No obligation, no pressure.
            </p>
            <div className="mt-8 w-full">
              <InstantPriceEstimate />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column: How It Works */}
            <div>
              <h2 className="text-primary-900 text-2xl font-bold">
                How It Works
              </h2>
              <div className="mt-6 space-y-5">
                {whatToExpectSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <step.icon className="text-primary-700 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-primary-900 font-medium">
                        {index + 1}. {step.title}
                      </p>
                      <p className="mt-0.5 text-sm text-neutral-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <div className="border-accent-200 bg-accent-50 mt-8 rounded-xl border p-6 text-center">
                <h3 className="text-primary-900 text-lg font-semibold">
                  Prefer to Talk?
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Call us directly and speak with a roofing expert. We are
                  available Monday through Friday 7am to 6pm and Saturday 8am to
                  2pm.
                </p>
                <a
                  href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                  className="bg-accent-500 hover:bg-accent-600 mt-4 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  {formatPhoneNumber(SITE_CONFIG.defaultPhoneRaw)}
                </a>
              </div>
            </div>

            {/* Right Column: Testimonials + Trust Badges */}
            <div className="space-y-8">
              {/* Compact Testimonials */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-primary-900 text-lg font-semibold">
                  What Our Customers Say
                </h3>
                <div className="mt-4 space-y-4">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="rounded-lg bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(testimonial.rating)
                                ? 'fill-warning text-warning'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                        &ldquo;
                        {testimonial.quote.length > 150
                          ? testimonial.quote.slice(0, 150).trim() + '...'
                          : testimonial.quote}
                        &rdquo;
                      </p>
                      <p className="mt-2 text-xs font-medium text-neutral-500">
                        {testimonial.name} &mdash; {testimonial.city},{' '}
                        {testimonial.state}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-primary-900 text-lg font-semibold">
                  Why Choose ProTech
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="text-accent-500 h-4 w-4 shrink-0" />
                    {SITE_CONFIG.yearsExperience} years of experience
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="text-accent-500 h-4 w-4 shrink-0" />
                    {SITE_CONFIG.roofsInstalled} roofs installed
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="text-accent-500 h-4 w-4 shrink-0" />
                    {SITE_CONFIG.googleRating}-star Google rating (
                    {SITE_CONFIG.reviewCount}+ reviews)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="text-accent-500 h-4 w-4 shrink-0" />
                    Licensed in {SITE_CONFIG.statesLicensed} states
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="text-accent-500 h-4 w-4 shrink-0" />
                    Lifetime workmanship warranty
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="text-accent-500 h-4 w-4 shrink-0" />
                    Flexible financing available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
