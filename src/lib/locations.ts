import { CITY_DATA, STATE_PROFILES, type StateProfile } from './city-data';
import { HIDDEN_LOCATION_STATE_SLUGS } from './constants';

export interface Location {
  state: string;
  stateSlug: string;
  stateAbbr: string;
  city: string;
  citySlug: string;
  lat: number;
  lng: number;
  phone: string;
  serviceRadius: string;
  surroundingCities: string[];
  licenseNumber: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;

  // Optional hyper-local content. When present, the city template renders a
  // dedicated "Roofing in [City]" section after the intro. Pages without these
  // fields render the generic layout — no breaking change.
  localContent?: {
    countyName?: string;
    metroArea?: string;
    climateChallenges?: string;
    commonIssues?: string[];
    localCodes?: string;
    neighborhoods?: string[];
    seasonalConsiderations?: string;
  };
  localFaqs?: Array<{ question: string; answer: string }>;
}

const PHONE = '1-866-308-2640';
const SERVICE_RADIUS = '50 miles';
const HERO_IMAGE = '/images/hero/default.jpg';

// Real contractor license number per state. Blank = not yet supplied; license
// rendering across the templates is guarded so a blank value shows NOTHING
// (never a fabricated number). Drop the verified numbers in here and they
// appear automatically on every city/service page + LocalBusiness schema.
// MD / PA / WV filled 2026-07-02 (D10) with verified on-file numbers.
// MD format: Md. Bus. Reg. §8-615 mandates the exact form "MHIC No. ___" in
// anything that advertises as licensed — keep the "No." in the string.
export const STATE_LICENSE: Record<string, string> = {
  texas: '',
  ohio: '',
  missouri: '',
  kentucky: '',
  pennsylvania: 'PA212435',
  maryland: 'MHIC No. 168264',
  'west-virginia': 'WV066231',
  'south-carolina': '',
  indiana: '',
};

// ─── Deterministic copy generation ──────────────────────────────────────────
// Copy is templated (not hand-authored per city) but seeded off the city slug
// so each page renders a stable, varied combination — avoiding duplicate-content
// penalties while scaling to full-state coverage.

function seedFrom(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function countyDisplay(county: string): string {
  return /county$|city$/i.test(county) ? county : `${county} County`;
}

function listJoin(items: string[]): string {
  if (items.length <= 1) return items[0] ?? '';
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

function buildHeadline(city: string): string {
  const s = seedFrom('h' + city);
  return pick(
    [
      `Licensed, Insured Roofing for ${city} Homeowners`,
      `${city}'s Roof Replacement & Repair Experts`,
      `Expert Roofing Contractor Serving ${city}`,
      `Quality Roofing for ${city} Homeowners`,
    ],
    s
  );
}

function buildMetaTitle(city: string, abbr: string): string {
  const s = seedFrom('t' + city);
  return pick(
    [
      `${city}, ${abbr} Roofing Contractor`,
      `Roofing Services in ${city}, ${abbr}`,
      `${city} Roof Replacement & Repair`,
      `Roofing Contractor in ${city}, ${abbr}`,
    ],
    s
  );
}

function buildMetaDescription(city: string, abbr: string, county: string, near: string): string {
  const s = seedFrom('d' + city);
  return pick(
    [
      `Trusted ${city}, ${abbr} roofing contractor for roof replacement, repair, and storm-damage restoration. Serving ${county}. Licensed, insured, free estimates.`,
      `${city}'s roofing experts for replacement, leak repair, and insurance claims. Serving ${county} and ${near}. Free inspection from ProTech Roofing.`,
      `Roof replacement, repair, and storm-damage help in ${city}, ${abbr}. Local crews across ${county}. Financing available — get your free ProTech estimate.`,
    ],
    s
  );
}

function buildIntro(
  city: string,
  county: string,
  near: string,
  profile: StateProfile
): string {
  const s = seedFrom(city + profile.stateSlug);
  const opener = pick(
    [
      `In ${city}, roofs take a beating from ${profile.climate} — which is exactly what ProTech Roofing builds for.`,
      `${city}'s ${profile.climate} put real, year-round stress on a roof.`,
      `Homeowners across ${county} know that ${profile.climate} can shorten the life of an aging roof.`,
    ],
    s
  );
  const body = pick(
    [
      `ProTech Roofing serves ${city} and the surrounding ${county} communities — including ${near} — with full roof replacements, fast leak and storm-damage repair, and complete insurance-claim support. We install ${profile.materials} suited to ${profile.state}'s climate.`,
      `Our local crews cover ${city} and nearby ${near}, handling everything from complete roof replacements to emergency leak repair. We use ${profile.materials} chosen for ${profile.state}'s weather and manage permits and inspections from start to finish.`,
      `From ${city} to ${near}, ProTech Roofing delivers roof replacement, repair, storm restoration, and insurance-claim help. Our installations pair ${profile.materials} with manufacturer-certified workmanship.`,
    ],
    s >> 3
  );
  const closer = pick(
    [
      `Every job is backed by our lifetime workmanship warranty, and your free inspection comes with a clear, written estimate — no pressure, no surprises.`,
      `From the first inspection to the final magnetic nail sweep, you get transparent pricing, certified installation, and a lifetime workmanship warranty.`,
      `Schedule a free inspection and get an honest, itemized estimate — plus financing options and a lifetime workmanship guarantee on every roof we install.`,
    ],
    s >> 6
  );
  return `${opener} ${body} ${closer}`;
}

function buildLocations(): Location[] {
  const out: Location[] = [];
  for (const stateSlug of Object.keys(CITY_DATA)) {
    const profile = STATE_PROFILES[stateSlug];
    if (!profile) continue;
    for (const f of CITY_DATA[stateSlug]) {
      const county = countyDisplay(f.county);
      const near = listJoin(f.surroundingCities.slice(0, 3));
      const near1 = f.surroundingCities[0] ?? profile.state;
      out.push({
        state: profile.state,
        stateSlug: profile.stateSlug,
        stateAbbr: profile.stateAbbr,
        city: f.city,
        citySlug: f.citySlug,
        lat: f.lat,
        lng: f.lng,
        phone: PHONE,
        serviceRadius: SERVICE_RADIUS,
        surroundingCities: f.surroundingCities,
        licenseNumber: STATE_LICENSE[stateSlug] ?? '',
        heroImage: HERO_IMAGE,
        metaTitle: buildMetaTitle(f.city, profile.stateAbbr),
        metaDescription: buildMetaDescription(f.city, profile.stateAbbr, county, near1),
        headline: buildHeadline(f.city),
        intro: buildIntro(f.city, county, near, profile),
      });
    }
  }
  return out;
}

const locations: Location[] = buildLocations();

// ─── Public API (unchanged signatures — templates/pages depend on these) ─────

export function getLocationBySlug(
  stateSlug: string,
  citySlug: string
): Location | undefined {
  return locations.find(
    (loc) => loc.stateSlug === stateSlug && loc.citySlug === citySlug
  );
}

export function getLocationsByState(stateSlug: string): Location[] {
  return locations.filter((loc) => loc.stateSlug === stateSlug);
}

export function getAllStates(): {
  state: string;
  stateSlug: string;
  stateAbbr: string;
}[] {
  const seen = new Set<string>();
  const states: { state: string; stateSlug: string; stateAbbr: string }[] = [];

  for (const loc of locations) {
    if (!seen.has(loc.stateSlug)) {
      seen.add(loc.stateSlug);
      states.push({
        state: loc.state,
        stateSlug: loc.stateSlug,
        stateAbbr: loc.stateAbbr,
      });
    }
  }

  return states;
}

export function getAllLocations(): Location[] {
  return locations;
}

// ─── /locations visibility (pending business decision B11) ──────────────────
// Some own-license states have their /locations/{state}/** subtree
// 308-redirected to /locations by next.config.ts (see
// HIDDEN_LOCATION_STATE_SLUGS in constants.ts). Link-emitting components and
// the sitemap must use these visible-only variants so nothing points at a
// permanent redirect. getAllStates()/getAllLocations() stay unfiltered — they
// back footprint COPY (e.g. faqs.ts "we serve N states"), which is a
// compliance claim independent of page visibility.

export function isLocationStateVisible(stateSlug: string): boolean {
  return !(HIDDEN_LOCATION_STATE_SLUGS as readonly string[]).includes(
    stateSlug
  );
}

export function getVisibleStates(): {
  state: string;
  stateSlug: string;
  stateAbbr: string;
}[] {
  return getAllStates().filter((s) => isLocationStateVisible(s.stateSlug));
}

export function getVisibleLocations(): Location[] {
  return locations.filter((loc) => isLocationStateVisible(loc.stateSlug));
}

export function getStateProfile(stateSlug: string): StateProfile | undefined {
  return STATE_PROFILES[stateSlug];
}

export function getCityStateSlug(location: Location): string {
  return `${location.citySlug}-${location.stateAbbr.toLowerCase()}`;
}

export function getLocationByCityStateSlug(slug: string): Location | undefined {
  return locations.find(
    (loc) => `${loc.citySlug}-${loc.stateAbbr.toLowerCase()}` === slug
  );
}

// Featured markets surfaced in the homepage "PrimaryMarkets" section — one
// marquee metro per own-license state. (Formerly the hyper-local pilot cities.)
export const PILOT_CITY_STATE_SLUGS = [
  'houston-tx',
  'philadelphia-pa',
  'columbus-oh',
  'baltimore-md',
  'kansas-city-mo',
  'louisville-ky',
  'charleston-wv',
] as const;
