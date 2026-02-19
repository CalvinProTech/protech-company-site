import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import {
  PILOT_CITY_STATE_SLUGS,
  getLocationByCityStateSlug,
} from '@/lib/locations';

export function PrimaryMarkets() {
  const markets = PILOT_CITY_STATE_SLUGS.map((slug) => {
    const location = getLocationByCityStateSlug(slug);
    return location ? { slug: slug as string, location } : null;
  }).filter(
    (m): m is { slug: string; location: NonNullable<ReturnType<typeof getLocationByCityStateSlug>> } =>
      m !== null
  );

  if (markets.length === 0) return null;

  return (
    <section className="bg-primary-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Our Primary Service Markets
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Serving homeowners in major metro areas across the country
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {markets.map(({ location }) => (
            <Link
              key={location.citySlug}
              href={`/locations/${location.stateSlug}/${location.citySlug}`}
              className="group flex gap-4 rounded-xl border border-primary-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 transition-colors group-hover:bg-primary-200">
                <MapPin className="h-6 w-6 text-primary-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-900">
                  {location.city}, {location.stateAbbr}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
                  {location.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-base font-semibold text-accent-500 transition-colors hover:text-accent-600"
          >
            View all service areas
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
