import type { Metadata } from 'next';
import {
  Phone,
  Shield,
  Clock,
  ClipboardCheck,
  Star,
  CheckCircle,
} from 'lucide-react';

import { createPageMetadata } from '@/lib/metadata';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import EstimateForm from '@/components/forms/EstimateForm';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Free Roofing Estimate | ProTech Roofing',
    description:
      'Get a free, no-obligation roofing estimate from ProTech Roofing. Licensed in FL, TX, KY, and OH. We respond within 24 hours. Fill out our form or call today.',
    path: '/free-estimate',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Free Estimate', href: '/free-estimate' },
];

const whatToExpectSteps = [
  {
    icon: ClipboardCheck,
    title: 'Submit Your Request',
    description:
      'Fill out the form with your contact info and project details. It takes less than 2 minutes.',
  },
  {
    icon: Phone,
    title: 'We Call Within 24 Hours',
    description:
      'A project manager contacts you to discuss your needs and schedule a convenient inspection time.',
  },
  {
    icon: Shield,
    title: 'Free On-Site Inspection',
    description:
      'We inspect your roof, document its condition with photos, and answer your questions on the spot.',
  },
  {
    icon: Clock,
    title: 'Receive Your Detailed Estimate',
    description:
      'You get a transparent, itemized estimate with material options, pricing tiers, and timeline. No pressure, no obligation.',
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

      {/* Page Header */}
      <section className="bg-primary-800 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Get Your Free Roofing Estimate
            </h1>
            <p className="mt-4 text-lg text-primary-200">
              No obligation, no pressure. Just honest answers and transparent
              pricing from a licensed roofing contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Two-Column Layout */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left Column: Form (takes 3 of 5 columns on desktop) */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-primary-900">
                  Request Your Free Estimate
                </h2>
                <p className="mt-2 text-neutral-600">
                  Fill out the form below and a project manager will contact you
                  within 24 hours to schedule your free inspection.
                </p>
                <div className="mt-6">
                  <EstimateForm />
                </div>
              </div>
            </div>

            {/* Right Column: Trust Signals (takes 2 of 5 columns on desktop) */}
            <div className="space-y-8 lg:col-span-2">
              {/* What to Expect */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-semibold text-primary-900">
                  What to Expect
                </h3>
                <div className="mt-4 space-y-5">
                  {whatToExpectSteps.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100">
                        <step.icon className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <p className="font-medium text-primary-900">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-sm text-neutral-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Testimonials */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-semibold text-primary-900">
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

              {/* Phone CTA */}
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6 text-center">
                <h3 className="text-lg font-semibold text-primary-900">
                  Prefer to Talk?
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Call us directly and speak with a roofing expert. We are
                  available Monday through Friday 7am to 6pm and Saturday 8am to
                  2pm.
                </p>
                <a
                  href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
                >
                  <Phone className="h-5 w-5" />
                  {formatPhoneNumber(SITE_CONFIG.defaultPhoneRaw)}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-semibold text-primary-900">
                  Why Choose ProTech
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent-500" />
                    {SITE_CONFIG.yearsExperience} years of experience
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent-500" />
                    {SITE_CONFIG.roofsInstalled} roofs installed
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent-500" />
                    {SITE_CONFIG.googleRating}-star Google rating (
                    {SITE_CONFIG.reviewCount}+ reviews)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent-500" />
                    Licensed in {SITE_CONFIG.statesLicensed} states
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent-500" />
                    Lifetime workmanship warranty
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent-500" />
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
