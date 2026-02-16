import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';

import type { Location } from '@/lib/locations';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Hero } from '@/components/sections/Hero';
import { CTABanner } from '@/components/sections/CTABanner';

interface StatePageTemplateProps {
  state: string;
  stateSlug: string;
  cities: Location[];
}

export default function StatePageTemplate({
  state,
  stateSlug,
  cities,
}: StatePageTemplateProps) {
  const stateAbbr = cities.length > 0 ? cities[0].stateAbbr : '';

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: state, href: `/locations/${stateSlug}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <Hero
        heading={`Roofing Services in ${state}`}
        subtitle={`ProTech Roofing is a licensed and insured roofing contractor serving homeowners and businesses across ${state}. ${stateAbbr ? `Licensed in ${stateAbbr}.` : ''} Find your city below to get started.`}
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: `Call ${SITE_CONFIG.defaultPhone}`,
          href: `tel:${SITE_CONFIG.defaultPhoneRaw}`,
        }}
        backgroundImage={`/images/hero/${stateSlug}.jpg`}
        showTrustBadges={true}
      />

      {/* Cities Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Our {state} Service Areas
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Select your city to learn more about our local roofing services,
              pricing, and availability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/locations/${stateSlug}/${city.citySlug}`}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 group-hover:text-accent-500">
                      {city.city}, {city.stateAbbr}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Service radius: {city.serviceRadius}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-accent-500" />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Phone className="h-4 w-4 shrink-0 text-primary-600" />
                    <span>{city.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    <span>
                      Also serving{' '}
                      {city.surroundingCities.slice(0, 3).join(', ')}
                      {city.surroundingCities.length > 3 && ' and more'}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-neutral-500">
                  License: {city.licenseNumber}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available in State */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Roofing Services Available in {state}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Every ProTech Roofing location in {state} offers our full range of
              residential and commercial roofing services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between rounded-xl border border-primary-100 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 group-hover:text-accent-500">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Available in all {state} locations
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-accent-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading={`Need a Roofer in ${state}?`}
        subtext={`ProTech Roofing is licensed and insured in ${state}. Get a free estimate from your local team today.`}
      />
    </>
  );
}
