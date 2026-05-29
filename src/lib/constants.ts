// States where ProTech holds its own contractor license.
// Used as the canonical service-area list across the site and schema.
// (Other states are serviced via Installation Services partnership and
// are NOT listed publicly — finance partner approvals require the
// website footprint to match the licensed-entity record.)
export const LICENSED_STATES = [
  { abbr: 'TX', name: 'Texas' },
  { abbr: 'KY', name: 'Kentucky' },
  { abbr: 'MO', name: 'Missouri' },
  { abbr: 'OH', name: 'Ohio' },
  { abbr: 'PA', name: 'Pennsylvania' },
  { abbr: 'MD', name: 'Maryland' },
  { abbr: 'WV', name: 'West Virginia' },
] as const;

export const SITE_CONFIG = {
  name: 'ProTech Roofing',
  url: 'https://www.protechroof.net',
  description:
    'Expert roof replacement, insurance-claim help, and in-house financing across seven states — TX, KY, MO, OH, PA, MD, WV. Tampa-headquartered, GAF Master Elite certified.',
  defaultPhone: '1-866-308-2640',
  defaultPhoneRaw: '18663082640',
  email: 'sales@protechroof.net',
  // Operational HQ — used by LocalBusiness schema. Verified 2026-04-29
  // against the FL Sunbiz principal-address record.
  hq: {
    streetAddress: '4950 W Kennedy Blvd Suite 210',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33609',
    addressCountry: 'US',
  },
  // Google Business Profile rating — pulled live from Places API 2026-04-29.
  // Refresh with `npm run fetch-reviews` (also rewrites google-reviews.json).
  googleRating: 5.0,
  reviewCount: 21,
  // Conservative truth: ProTech Roofing LLC established Sep 2024.
  // The previous "20+ years" claim was inflated. Keeping the field name
  // so existing components don't break, but using "Est. 2024" as the
  // truthful display value, plus a separate trust headline.
  foundedYear: 2024,
  yearsExperience: 'Est. 2024',
  certificationHeadline: 'GAF Master Elite — top 2% nationwide',
  // Approximate based on funded-deal velocity (~15/qtr) over operating life.
  // Adjust upward as the actual count grows.
  roofsInstalled: '100+',
  statesLicensed: '7',
  cityCount: '25+',
  serviceAreaCount: '7 states',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Financing', href: '/financing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  { name: 'Roof Replacement', slug: 'roof-replacement', icon: 'Home' },
  { name: 'Roof Repair', slug: 'roof-repair', icon: 'Wrench' },
  { name: 'Storm Damage', slug: 'storm-damage', icon: 'CloudLightning' },
  { name: 'Roof Inspection', slug: 'roof-inspection', icon: 'Search' },
  { name: 'Gutters & Siding', slug: 'gutters-siding', icon: 'Droplets' },
  { name: 'Insurance Claims', slug: 'insurance-claims', icon: 'FileCheck' },
] as const;
