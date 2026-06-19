import { SITE_CONFIG, LICENSED_STATES } from '@/lib/constants';
import JsonLd from './JsonLd';

interface LocationData {
  city: string;
  state: string;
  stateAbbr: string;
  stateSlug: string;
  lat: number;
  lng: number;
  phone: string;
  licenseNumber: string;
  citySlug: string;
}

interface LocalBusinessSchemaProps {
  type: 'homepage' | 'location';
  location?: LocationData;
  canonicalPath?: string;
}

export default function LocalBusinessSchema({
  type,
  location,
  canonicalPath,
}: LocalBusinessSchemaProps) {
  if (type === 'homepage') {
    // PostalAddress block. Street and zip pull from SITE_CONFIG.hq —
    // populated values produce a fully valid LocalBusiness schema.
    // If street/zip are blank, omit those fields to avoid emitting empty
    // strings (Google's Rich Results validator flags those as errors).
    const hq = SITE_CONFIG.hq;
    const address: Record<string, string> = {
      '@type': 'PostalAddress',
      addressLocality: hq.addressLocality,
      addressRegion: hq.addressRegion,
      addressCountry: hq.addressCountry,
    };
    if (hq.streetAddress) address.streetAddress = hq.streetAddress;
    if (hq.postalCode) address.postalCode = hq.postalCode;

    const homepageSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      name: 'ProTech Roofing',
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/images/logo.png`,
      image: `${SITE_CONFIG.url}/images/og-default.jpg`,
      description: SITE_CONFIG.description,
      telephone: SITE_CONFIG.defaultPhone,
      email: SITE_CONFIG.email,
      // REQUIRED for valid LocalBusiness rich-results — Tampa-metro HQ.
      address,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(SITE_CONFIG.googleRating),
        reviewCount: String(SITE_CONFIG.reviewCount),
        bestRating: '5',
        worstRating: '1',
      },
      // States where ProTech holds its own contractor license (single source:
      // LICENSED_STATES). Finance-partner approvals require the schema footprint
      // to match the licensed-entity record — non-licensed IS-partnership states
      // (FL, NC, VA, DE, CT, DC) are intentionally excluded.
      areaServed: LICENSED_STATES.map((s) => ({
        '@type': 'State',
        name: s.name,
        abbreviation: s.abbr,
      })),
      sameAs: [
        'https://www.facebook.com/protechroofing',
        'https://www.instagram.com/protechroofing',
        'https://www.youtube.com/@protechroofing',
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '14:00',
        },
      ],
    };

    return <JsonLd data={homepageSchema} />;
  }

  if (type === 'location' && location) {
    const locationUrl = canonicalPath
      ? `${SITE_CONFIG.url}${canonicalPath}`
      : `${SITE_CONFIG.url}/locations/${location.stateSlug}/${location.citySlug}`;
    const locationSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': locationUrl,
      name: 'ProTech Roofing',
      url: locationUrl,
      logo: `${SITE_CONFIG.url}/images/logo.png`,
      image: `${SITE_CONFIG.url}/images/locations/${location.citySlug}.jpg`,
      description: `ProTech Roofing provides expert roofing services in ${location.city}, ${location.stateAbbr}. Licensed, insured, and rated ${SITE_CONFIG.googleRating} stars.`,
      telephone: location.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.hq.streetAddress,
        addressLocality: location.city,
        addressRegion: location.stateAbbr,
        postalCode: SITE_CONFIG.hq.postalCode,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng,
      },
      areaServed: {
        '@type': 'City',
        name: location.city,
        containedInPlace: {
          '@type': 'State',
          name: location.state,
          abbreviation: location.stateAbbr,
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(SITE_CONFIG.googleRating),
        reviewCount: String(SITE_CONFIG.reviewCount),
        bestRating: '5',
        worstRating: '1',
      },
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '14:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Roofing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Roof Replacement',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Roof Repair',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Storm Damage Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Roof Inspection',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Gutters & Siding',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Insurance Claims',
            },
          },
        ],
      },
    };

    if (location.licenseNumber) {
      (locationSchema as Record<string, unknown>).hasCredential = {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Roofing License',
        recognizedBy: {
          '@type': 'State',
          name: location.state,
        },
        identifier: location.licenseNumber,
      };
    }

    return <JsonLd data={locationSchema} />;
  }

  return null;
}
