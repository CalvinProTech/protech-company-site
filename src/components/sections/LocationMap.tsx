import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { getAllStates, getLocationsByState } from '@/lib/locations';
import { SITE_CONFIG } from '@/lib/constants';

interface LocationMapProps {
  showCityLinks?: boolean;
}

export function LocationMap({ showCityLinks = true }: LocationMapProps) {
  const states = getAllStates();

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
            Roofing Across {SITE_CONFIG.serviceAreaCount}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Tampa-headquartered, with crews running roof replacements, insurance
            claim work, and financing across the {SITE_CONFIG.statesLicensed}{' '}
            states where ProTech holds its own contractor license.
          </p>
        </div>

        {/* State cards — click through to each state's service area */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((stateInfo) => {
            const count = getLocationsByState(stateInfo.stateSlug).length;
            return (
              <Link
                key={stateInfo.stateSlug}
                href={`/locations/${stateInfo.stateSlug}`}
                className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-md"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-accent-500" />
                  <span className="font-semibold text-primary-900">
                    {stateInfo.state}
                  </span>
                </span>
                <span className="text-sm text-neutral-500">
                  {count} {count === 1 ? 'city' : 'cities'}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Optional per-state city links (capped per state) */}
        {showCityLinks && (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((stateInfo) => {
              const cities = getLocationsByState(stateInfo.stateSlug);
              const shown = cities.slice(0, 6);
              return (
                <div key={stateInfo.stateSlug}>
                  <h3 className="text-primary-900 mb-3 text-lg font-semibold">
                    <Link
                      href={`/locations/${stateInfo.stateSlug}`}
                      className="hover:text-accent-500"
                    >
                      {stateInfo.state}
                    </Link>
                  </h3>
                  <ul className="space-y-2">
                    {shown.map((city) => (
                      <li key={city.citySlug}>
                        <Link
                          href={`/locations/${stateInfo.stateSlug}/${city.citySlug}`}
                          className="hover:text-accent-500 inline-flex items-center gap-1.5 text-neutral-600 transition-colors"
                        >
                          <MapPin className="h-3.5 w-3.5" />
                          {city.city}
                        </Link>
                      </li>
                    ))}
                    {cities.length > shown.length && (
                      <li>
                        <Link
                          href={`/locations/${stateInfo.stateSlug}`}
                          className="text-accent-500 hover:text-accent-600 text-sm font-medium"
                        >
                          + {cities.length - shown.length} more
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
