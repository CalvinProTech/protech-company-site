export const SITE_CONFIG = {
  name: 'ProTech Roofing',
  url: 'https://protechroof.net',
  description:
    'Expert roofing services across 14 states on the East Coast and beyond. Licensed, insured, and rated 4.9 stars.',
  defaultPhone: '1-866-308-2640',
  defaultPhoneRaw: '18663082640',
  email: 'sales@protechroof.net',
  googleRating: 5.0,
  reviewCount: 100,
  yearsExperience: '20+',
  roofsInstalled: '1,000+',
  statesLicensed: '14',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  { name: 'Roof Replacement', slug: 'roof-replacement', icon: 'Home' },
  { name: 'Roof Repair', slug: 'roof-repair', icon: 'Wrench' },
  { name: 'Storm Damage', slug: 'storm-damage', icon: 'CloudLightning' },
  {
    name: 'Commercial Roofing',
    slug: 'commercial-roofing',
    icon: 'Building2',
  },
  { name: 'Roof Inspection', slug: 'roof-inspection', icon: 'Search' },
  { name: 'Gutters & Siding', slug: 'gutters-siding', icon: 'Droplets' },
  { name: 'Insurance Claims', slug: 'insurance-claims', icon: 'FileCheck' },
] as const;
