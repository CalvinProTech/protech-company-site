import Link from 'next/link';
import { CheckCircle, Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

import type { Service } from '@/lib/services';
import type { Location } from '@/lib/locations';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { Hero } from '@/components/sections/Hero';
import { FAQSection } from '@/components/sections/FAQSection';
import QuickQuoteForm from '@/components/forms/QuickQuoteForm';
import { CTABanner } from '@/components/sections/CTABanner';

interface StateServicePageTemplateProps {
  state: string;
  stateSlug: string;
  stateAbbr: string;
  service: Service;
  cities: Location[];
  weatherContext: string;
}

export default function StateServicePageTemplate({
  state,
  stateSlug,
  stateAbbr,
  service,
  cities,
  weatherContext,
}: StateServicePageTemplateProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: state, href: `/locations/${stateSlug}` },
    {
      label: service.name,
      href: `/locations/${stateSlug}/${service.slug}`,
    },
  ];

  // Only services that have per-state pages — prevents 404s on
  // /locations/{state}/roof-inspection, /insurance-claims, /commercial-roofing
  // which are not built per-state.
  const STATE_SERVICE_SLUGS = ['roof-replacement', 'roof-repair', 'storm-damage', 'gutters-siding'];
  const otherServices = SERVICES.filter(
    (s) => s.slug !== service.slug && STATE_SERVICE_SLUGS.includes(s.slug)
  );

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema service={service} />
      <FAQSchema faqs={service.faqs} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <Hero
        heading={`${service.name} in ${state}`}
        subtitle={`Licensed ${service.name.toLowerCase()} services for ${state} homeowners. GAF Master Elite certified. Free inspections and $0 down financing available.`}
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: `Call ${SITE_CONFIG.defaultPhone}`,
          href: `tel:${SITE_CONFIG.defaultPhoneRaw}`,
        }}
        backgroundImage={`/images/services/${service.slug}-hero.jpg`}
        showTrustBadges={true}
      />

      {/* State-Specific Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Why {state} Homeowners Choose ProTech for {service.name}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              {state} homes face unique challenges from {weatherContext}. These
              conditions accelerate roof deterioration and can cause hidden
              damage that goes unnoticed for months. ProTech Roofing serves
              homeowners across {state} with professional {service.name.toLowerCase()}{' '}
              backed by a lifetime workmanship warranty.
            </p>
            <p>
              As a GAF Master Elite certified contractor — a distinction held by
              only 2% of roofers nationwide — we deliver the highest quality
              materials and installation standards available. Every{' '}
              {service.name.toLowerCase()} project includes a thorough
              inspection, transparent written estimate, and dedicated project
              management from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              What You Get with ProTech {service.name}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-accent-500" />
                <p className="text-neutral-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <QuickQuoteForm
            source="quick-quote-state-service"
            heading={`Get a Free ${service.name} Quote in ${state}`}
            subtext="Enter your info and a specialist will call you within the hour."
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Our {service.name} Process in {state}
            </h2>
          </div>
          <div className="space-y-8">
            {service.processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  {index < service.processSteps.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-primary-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-primary-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      {service.warrantyInfo && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-primary-200 bg-primary-50 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-700">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-900">
                    Our Warranty for {state} Homeowners
                  </h2>
                  <p className="mt-3 text-lg text-neutral-700">
                    {service.warrantyInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        heading={`${service.name} in ${state} — FAQ`}
        subtitle={`Common questions about ${service.name.toLowerCase()} for ${state} homeowners`}
        faqs={service.faqs}
      />

      {/* Cities We Serve */}
      {cities.length > 0 && (
        <section className="bg-neutral-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-primary-900 md:text-3xl">
                {service.name} in {state} Cities
              </h2>
              <p className="mt-3 text-neutral-600">
                We serve these {state} communities and surrounding areas
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cities.map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/locations/${city.stateSlug}/${city.citySlug}`}
                  className="group flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary-600 transition-colors group-hover:text-accent-500" />
                  <span className="font-medium text-primary-900">
                    {city.city}, {city.stateAbbr}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services in This State */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Other Roofing Services in {state}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/locations/${stateSlug}/${svc.slug}`}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-primary-900">
                  {svc.name} in {state}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition-colors group-hover:text-accent-600">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready for {service.name} in {state}?
          </h2>
          <p className="mt-4 text-lg text-primary-200">
            Get a free, no-obligation estimate. We respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/free-estimate"
              className="inline-flex h-14 items-center justify-center rounded-lg bg-accent-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Get Your Free Estimate
            </Link>
            <a
              href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-white px-8 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.defaultPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
