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
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Service Areas Across America
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Licensed and insured in {states.length} states with{' '}
            {SITE_CONFIG.serviceAreaCount} local service areas
          </p>
        </div>

        {/* Google Maps Embed */}
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
          <div className={`mx-auto max-w-4xl overflow-hidden rounded-xl${showCityLinks ? ' mb-12' : ''}`}>
            <iframe
              title="ProTech Roofing service areas"
              src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&center=35.5,-82&zoom=5&maptype=roadmap`}
              className="h-64 w-full md:h-80"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <div className={`mx-auto flex h-64 max-w-4xl items-center justify-center rounded-xl bg-primary-100 md:h-80${showCityLinks ? ' mb-12' : ''}`}>
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-primary-400" />
              <p className="mt-2 text-primary-600">
                Interactive map coming soon
              </p>
            </div>
          </div>
        )}

        {/* City links grid */}
        {showCityLinks && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((stateInfo) => {
              const cities = getLocationsByState(stateInfo.stateSlug);
              return (
                <div key={stateInfo.stateSlug}>
                  <h3 className="mb-3 text-lg font-semibold text-primary-900">
                    <Link
                      href={`/locations/${stateInfo.stateSlug}`}
                      className="hover:text-accent-500"
                    >
                      {stateInfo.state}
                    </Link>
                  </h3>
                  <ul className="space-y-2">
                    {cities.map((city) => (
                      <li key={city.citySlug}>
                        <Link
                          href={`/locations/${stateInfo.stateSlug}/${city.citySlug}`}
                          className="inline-flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-accent-500"
                        >
                          <MapPin className="h-3.5 w-3.5" />
                          {city.city}
                        </Link>
                      </li>
                    ))}
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
