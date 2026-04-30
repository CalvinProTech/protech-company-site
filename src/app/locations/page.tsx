import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { getAllStates, getLocationsByState } from '@/lib/locations';
import { SITE_CONFIG } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Hero } from '@/components/sections/Hero';
import { LocationMap } from '@/components/sections/LocationMap';
import { CTABanner } from '@/components/sections/CTABanner';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Locations', href: '/locations' },
];

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Service Areas & Locations',
    description:
      'ProTech Roofing serves homeowners and businesses across FL, GA, TX, NC, SC, VA, MD, PA, CT, DE, WV, TN, KY & OH. Find your local roofing experts and schedule a free inspection today.',
    path: '/locations',
  });
}

export default function LocationsPage() {
  const states = getAllStates();

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        heading="Find Your Local ProTech Roofers"
        subtitle="Tampa-headquartered roofing professionals serving communities across nine states + D.C. Select your area to get started."
        primaryCTA={{ text: 'Get a Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: 'Call Now',
          href: `tel:${SITE_CONFIG.defaultPhoneRaw}`,
        }}
        backgroundImage="/images/hero/locations.jpg"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Location Map */}
      <LocationMap showCityLinks={false} />

      {/* All States & Cities Listing */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
            All Service Areas
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Browse our complete list of service areas organized by state. Each
            location is staffed with local roofing experts who know your area.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((stateInfo) => {
              const cities = getLocationsByState(stateInfo.stateSlug);
              return (
                <div key={stateInfo.stateSlug}>
                  <h3 className="text-primary-900 text-xl font-bold">
                    <Link
                      href={`/locations/${stateInfo.stateSlug}`}
                      className="hover:text-accent-500 transition-colors"
                    >
                      {stateInfo.state}
                    </Link>
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {cities.map((city) => (
                      <li key={city.citySlug}>
                        <Link
                          href={`/locations/${stateInfo.stateSlug}/${city.citySlug}`}
                          className="hover:text-accent-500 inline-flex items-center gap-2 text-neutral-700 transition-colors"
                        >
                          <MapPin className="text-primary-600 h-4 w-4 shrink-0" />
                          {city.city}, {city.stateAbbr}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/locations/${stateInfo.stateSlug}`}
                    className="text-accent-500 hover:text-accent-600 mt-4 inline-block text-sm font-medium transition-colors"
                  >
                    View all {stateInfo.state} locations
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Don't See Your City?"
        subtext="We may still serve your area. Contact us to check availability and schedule your free roofing inspection."
      />
    </>
  );
}
