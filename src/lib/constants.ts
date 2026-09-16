// States where ProTech holds its own contractor license.
// Used as the canonical service-area list across the site and schema.
// (Other states are serviced via Installation Services partnership and
// are NOT listed publicly — finance partner approvals require the
// website footprint to match the licensed-entity record.)
export const LICENSED_STATES = [
  { abbr: 'TX', name: 'Texas', slug: 'texas' },
  { abbr: 'KY', name: 'Kentucky', slug: 'kentucky' },
  { abbr: 'MO', name: 'Missouri', slug: 'missouri' },
  { abbr: 'OH', name: 'Ohio', slug: 'ohio' },
  { abbr: 'PA', name: 'Pennsylvania', slug: 'pennsylvania' },
  { abbr: 'MD', name: 'Maryland', slug: 'maryland' },
  { abbr: 'WV', name: 'West Virginia', slug: 'west-virginia' },
  { abbr: 'SC', name: 'South Carolina', slug: 'south-carolina' },
  { abbr: 'IN', name: 'Indiana', slug: 'indiana' },
] as const;

// ─── /locations visibility (pending business decision B11) ──────────────────
// These own-license states have their ENTIRE /locations/{state}/** subtree
// 308-redirected to /locations by next.config.ts (leftover catch-alls from the
// 2026-04-29 IS-era cleanup, kept until the un-hide decision lands). Until
// then, NOTHING may link to or sitemap these subtrees — every such URL is a
// permanent redirect. The states remain part of the licensed footprint
// (LICENSED_STATES, schema areaServed, footer copy); only their location
// PAGES are hidden.
//
// To un-hide a state (B11): remove its slug here AND remove its
// /locations/{state}/:path* redirect in next.config.ts.
// 2026-07-02 (Calvin): full 9-state ProTech footprint restored — TX/KY/OH/WV
// had been hidden by stale April-era redirects, not policy. Add a slug here
// (AND the matching redirect class in next.config.ts) to hide a state again.
export const HIDDEN_LOCATION_STATE_SLUGS = [] as const;

// Licensed states whose /locations pages are live (safe to link / sitemap).
export const LINKABLE_LOCATION_STATES = LICENSED_STATES.filter(
  (s) =>
    !(HIDDEN_LOCATION_STATE_SLUGS as readonly string[]).includes(s.slug)
);

export const SITE_CONFIG = {
  name: 'ProTech Roofing',
  url: 'https://www.protechroof.net',
  description:
    'Expert roof replacement, insurance-claim help, and flexible financing across nine states — TX, KY, MO, OH, IN, PA, MD, WV, SC. Tampa-headquartered, licensed and insured.',
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
  // 2026-08-07 (Calvin): ProTech holds NO manufacturer or trade-body
  // certifications — GAF Master Elite, Owens Corning Preferred, NRCA
  // membership and BBB accreditation were all claimed site-wide and none
  // are held. Same correction class as the inflated "20+ years" above.
  // Only state contractor licensure is claimable. Do not reintroduce a
  // certification claim here without a verifiable credential.
  certificationHeadline: 'Licensed & insured in all 9 states we serve',
  // Approximate based on funded-deal velocity (~15/qtr) over operating life.
  // Adjust upward as the actual count grows.
  roofsInstalled: '100+',
  statesLicensed: '9',
  cityCount: '350+',
  serviceAreaCount: '9 states',
} as const;

// 2026-09-02: single source of truth for the financing application link.
//
// It was previously hard-coded in BOTH /financing and HearthWidget, and when
// the Hearth partner URL died it 404'd in both places at once with nothing
// catching it — the page CTA and the calculator CTA are the only two ways out
// of the financing funnel, so the whole funnel dead-ended silently.
//
// Points at ProTech's co-branded Enhancify application: one soft-pull
// prequalification that shops multiple lenders, so the homeowner never has to
// pick a lender (and never eats multiple hard pulls shotgunning applications).
// This is the SAME destination the rep's "Send Finance App" button uses via
// lead-api FINANCE_APP_URL — website and sales floor now agree on one door.
export const FINANCING_APPLY_URL = 'https://www.enhancify.com/protechroof';

// 2026-08-10: "Roof Cost" added. /roof-replacement-cost-calculator had ZERO
// inbound internal links anywhere on the site — a fully orphaned page carrying
// our single best keyword opportunity ("roof replacement cost" 22,200/mo at
// KD 25, plus a ~52,000/mo cluster at KD 17-33). Orphan pages accumulate no
// internal link equity and get crawled rarely. It also converts: the tool
// captures an address, which is the top of the estimate funnel.
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Roof Cost', href: '/roof-replacement-cost-calculator' },
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
