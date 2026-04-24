import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { getAllStates, getLocationsByState } from '@/lib/locations';
import { SITE_CONFIG } from '@/lib/constants';
import { STATE_PATHS, DC_CIRCLE } from '@/lib/state-paths';

interface LocationMapProps {
  showCityLinks?: boolean;
}

// Slug used by getLocationsByState for our 9 IS service-area states.
// Note: DC has no city pages, so it's reported via SITE_CONFIG only.
const STATE_LABELS: Array<{ x: number; y: number; abbr: string; slug: string }> = [
  { x: 786, y: 207, abbr: 'PA', slug: 'pennsylvania' },
  { x: 866, y: 178, abbr: 'CT', slug: 'connecticut' },
  { x: 815, y: 245, abbr: 'MD', slug: 'maryland' },
  { x: 838, y: 240, abbr: 'DE', slug: 'delaware' },
  { x: 768, y: 275, abbr: 'VA', slug: 'virginia' },
  { x: 778, y: 335, abbr: 'NC', slug: 'north-carolina' },
  { x: 752, y: 376, abbr: 'SC', slug: 'south-carolina' },
  { x: 720, y: 480, abbr: 'FL', slug: 'florida' },
];

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

        {/* Branded SVG service area map — IS states highlighted, DC marker, click-to-navigate */}
        <div className={`mx-auto max-w-3xl${showCityLinks ? ' mb-12' : ''}`}>
          <svg
            viewBox="640 130 320 470"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="ProTech Roofing service area map: Pennsylvania, Connecticut, Maryland, Delaware, Virginia, North Carolina, South Carolina, Florida, and Washington D.C."
            className="h-auto w-full"
          >
            <g stroke="white" strokeWidth="1.5" strokeLinejoin="round">
              {STATE_PATHS.map((state) => {
                const cityCount = getLocationsByState(state.slug).length;
                return (
                  <Link key={state.abbr} href={`/locations/${state.slug}`}>
                    <path
                      d={state.d}
                      className="fill-accent-500 transition-colors hover:fill-accent-600"
                    >
                      <title>
                        {state.name} — {cityCount} service area{cityCount === 1 ? '' : 's'}
                      </title>
                    </path>
                  </Link>
                );
              })}
              {/* DC — too small for a path; rendered as a circle marker */}
              <circle
                cx={DC_CIRCLE.cx}
                cy={DC_CIRCLE.cy}
                r={DC_CIRCLE.r}
                className="fill-accent-500"
              >
                <title>Washington, D.C.</title>
              </circle>
            </g>
            {/* State abbreviation labels — pure presentational */}
            <g
              fontFamily="system-ui, sans-serif"
              fontSize="12"
              fontWeight="600"
              fill="white"
              textAnchor="middle"
              pointerEvents="none"
            >
              {STATE_LABELS.map((l) => (
                <text key={l.abbr} x={l.x} y={l.y} dy=".35em">
                  {l.abbr}
                </text>
              ))}
              <text
                x={DC_CIRCLE.cx + 9}
                y={DC_CIRCLE.cy + 1}
                dy=".35em"
                textAnchor="start"
                fill="#1F2937"
                fontSize="11"
              >
                DC
              </text>
            </g>
          </svg>
        </div>

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
