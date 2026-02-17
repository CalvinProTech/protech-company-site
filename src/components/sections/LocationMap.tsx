import Link from 'next/link';
import { MapPin } from 'lucide-react';

const locationsByState = [
  {
    state: 'Florida',
    stateSlug: 'florida',
    cities: [
      { name: 'Tampa', slug: 'tampa' },
      { name: 'Orlando', slug: 'orlando' },
      { name: 'Miami', slug: 'miami' },
      { name: 'Jacksonville', slug: 'jacksonville' },
      { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
    ],
  },
  {
    state: 'Texas',
    stateSlug: 'texas',
    cities: [
      { name: 'Dallas', slug: 'dallas' },
      { name: 'Houston', slug: 'houston' },
      { name: 'San Antonio', slug: 'san-antonio' },
      { name: 'Austin', slug: 'austin' },
      { name: 'Fort Worth', slug: 'fort-worth' },
    ],
  },
  {
    state: 'Kentucky',
    stateSlug: 'kentucky',
    cities: [
      { name: 'Louisville', slug: 'louisville' },
      { name: 'Lexington', slug: 'lexington' },
    ],
  },
  {
    state: 'Ohio',
    stateSlug: 'ohio',
    cities: [
      { name: 'Columbus', slug: 'columbus' },
      { name: 'Cincinnati', slug: 'cincinnati' },
      { name: 'Cleveland', slug: 'cleveland' },
    ],
  },
];

export function LocationMap() {
  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Service Areas Across America
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Licensed and insured in {locationsByState.length} states with 15+
            local service areas
          </p>
        </div>

        {/* Google Maps Embed */}
        {process.env.GOOGLE_MAPS_API_KEY ? (
          <div className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-xl">
            <iframe
              title="ProTech Roofing service areas"
              src={`https://www.google.com/maps/embed/v1/view?key=${process.env.GOOGLE_MAPS_API_KEY}&center=33,-87&zoom=5&maptype=roadmap`}
              className="h-64 w-full md:h-80"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <div className="mx-auto mb-12 flex h-64 max-w-4xl items-center justify-center rounded-xl bg-primary-100 md:h-80">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-primary-400" />
              <p className="mt-2 text-primary-600">
                Interactive map coming soon
              </p>
            </div>
          </div>
        )}

        {/* City links grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {locationsByState.map((stateGroup) => (
            <div key={stateGroup.state}>
              <h3 className="mb-3 text-lg font-semibold text-primary-900">
                <Link
                  href={`/locations/${stateGroup.stateSlug}`}
                  className="hover:text-accent-500"
                >
                  {stateGroup.state}
                </Link>
              </h3>
              <ul className="space-y-2">
                {stateGroup.cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/locations/${stateGroup.stateSlug}/${city.slug}`}
                      className="inline-flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-accent-500"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
