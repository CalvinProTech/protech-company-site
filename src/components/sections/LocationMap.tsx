import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { getAllStates, getLocationsByState } from '@/lib/locations';
import { SITE_CONFIG } from '@/lib/constants';
import { STATE_PATHS } from '@/lib/state-paths';

interface LocationMapProps {
  showCityLinks?: boolean;
}

// Label positions on the Wikipedia Blank US Map viewBox (0 0 959 593) — eyeballed centers per state.
const STATE_LABELS: Array<{
  x: number;
  y: number;
  abbr: string;
  slug: string;
}> = [
  { x: 786, y: 207, abbr: 'PA', slug: 'pennsylvania' },
  { x: 866, y: 178, abbr: 'CT', slug: 'connecticut' },
  { x: 815, y: 245, abbr: 'MD', slug: 'maryland' },
  { x: 838, y: 240, abbr: 'DE', slug: 'delaware' },
  { x: 800, y: 240, abbr: 'DC', slug: 'dc' },
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
          <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
            Service Areas Across the Eastern Seaboard
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Tampa-headquartered, with crews running roof replacements, insurance
            claim work, and financing across {SITE_CONFIG.serviceAreaCount}.
          </p>
        </div>

        {/* Branded SVG service area map — 8 IS states + DC highlighted, click-to-navigate */}
        <div className={`mx-auto max-w-3xl${showCityLinks ? 'mb-12' : ''}`}>
          <svg
            viewBox="0 0 959 593"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="ProTech Roofing service area map: Florida, South Carolina, North Carolina, Virginia, Maryland, Washington D.C., Delaware, Pennsylvania, and Connecticut."
            className="h-auto w-full"
          >
            <g stroke="white" strokeWidth="1.5" strokeLinejoin="round">
              {STATE_PATHS.map((state) => {
                const cityCount = getLocationsByState(state.slug).length;
                return (
                  <Link key={state.abbr} href={`/locations/${state.slug}`}>
                    <path
                      d={state.d}
                      className="fill-accent-500 hover:fill-accent-600 transition-colors"
                    >
                      <title>
                        {`${state.name} - ${cityCount} service area${cityCount === 1 ? '' : 's'}`}
                      </title>
                    </path>
                  </Link>
                );
              })}
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
                  <h3 className="text-primary-900 mb-3 text-lg font-semibold">
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
                          className="hover:text-accent-500 inline-flex items-center gap-1.5 text-neutral-600 transition-colors"
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
