import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

import type { Location } from '@/lib/locations';
import type { Service } from '@/lib/services';
import type { CityServiceData } from '@/lib/city-services';
import { formatPhoneNumber } from '@/lib/utils';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import CityServiceSchema from '@/components/seo/CityServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { Hero } from '@/components/sections/Hero';
import { ServiceTrustStrip } from '@/components/sections/ServiceTrustStrip';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';

interface CityServicePageTemplateProps {
  location: Location;
  service: Service;
  cityServiceData: CityServiceData;
  siblingServices: { name: string; slug: string; cityStateSlug: string }[];
}

export default function CityServicePageTemplate({
  location,
  service,
  cityServiceData,
  siblingServices,
}: CityServicePageTemplateProps) {
  const cityStateSlug = cityServiceData.cityStateSlug;
  const phoneDigits = location.phone.replace(/\D/g, '');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    {
      label: `${location.city}, ${location.stateAbbr}`,
      href: `/locations/${cityStateSlug}`,
    },
    {
      label: service.name,
      href: `/locations/${cityStateSlug}/${service.slug}`,
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        type="location"
        location={location}
        canonicalPath={`/locations/${cityStateSlug}`}
      />
      <CityServiceSchema
        service={service}
        location={location}
        cityStateSlug={cityStateSlug}
      />
      <FAQSchema faqs={cityServiceData.faqs} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <Hero
        heading={cityServiceData.h1}
        subtitle={`Licensed ${service.name.toLowerCase()} contractor serving ${location.city}, ${location.stateAbbr} and surrounding areas. License #${location.licenseNumber}.`}
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: `Call ${formatPhoneNumber(phoneDigits)}`,
          href: `tel:${phoneDigits}`,
        }}
        backgroundImage={`/images/services/${service.slug}-hero.jpg`}
        showTrustBadges={true}
      />

      {/* Service Trust Strip */}
      <ServiceTrustStrip />

      {/* Intro Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Expert {service.name} in {location.city}, {location.stateAbbr}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            {cityServiceData.intro}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Benefits of Our {service.name}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Why {location.city} homeowners trust ProTech Roofing
            </p>
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

      {/* Process Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Our {service.name} Process
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              A clear, step-by-step approach from start to finish
            </p>
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

      {/* FAQ Section */}
      <FAQSection
        heading={`${service.name} FAQ for ${location.city}, ${location.stateAbbr}`}
        subtitle={`Common questions from ${location.city} homeowners`}
        faqs={cityServiceData.faqs}
      />

      {/* Internal Links Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              More Roofing Services in {location.city}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Explore our full range of services available in{' '}
              {location.city}, {location.stateAbbr}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siblingServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/locations/${svc.cityStateSlug}/${svc.slug}`}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-primary-900">
                  {svc.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  {svc.name} in {location.city}, {location.stateAbbr}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition-colors group-hover:text-accent-600">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}

            <Link
              href={`/locations/${cityStateSlug}`}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary-900">
                All Services
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                View all roofing services in {location.city},{' '}
                {location.stateAbbr}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition-colors group-hover:text-accent-600">
                View All
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading={`Ready for ${service.name} in ${location.city}?`}
        subtext={`Get a free, no-obligation estimate from our ${location.city} team. We respond within 24 hours.`}
        phone={phoneDigits}
      />
    </>
  );
}
