import { SITE_CONFIG } from '@/lib/constants';
import JsonLd from './JsonLd';

interface LocationData {
  city: string;
  state: string;
  stateAbbr: string;
  lat: number;
  lng: number;
  phone: string;
  licenseNumber: string;
  citySlug: string;
}

interface LocalBusinessSchemaProps {
  type: 'homepage' | 'location';
  location?: LocationData;
}

export default function LocalBusinessSchema({
  type,
  location,
}: LocalBusinessSchemaProps) {
  if (type === 'homepage') {
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      areaServed: [
        { '@type': 'State', name: 'Florida', abbreviation: 'FL' },
        { '@type': 'State', name: 'Georgia', abbreviation: 'GA' },
        { '@type': 'State', name: 'Delaware', abbreviation: 'DE' },
        { '@type': 'State', name: 'Maryland', abbreviation: 'MD' },
        { '@type': 'State', name: 'Virginia', abbreviation: 'VA' },
        { '@type': 'State', name: 'Connecticut', abbreviation: 'CT' },
        { '@type': 'State', name: 'Pennsylvania', abbreviation: 'PA' },
        { '@type': 'State', name: 'North Carolina', abbreviation: 'NC' },
        { '@type': 'State', name: 'South Carolina', abbreviation: 'SC' },
        { '@type': 'State', name: 'Texas', abbreviation: 'TX' },
        { '@type': 'State', name: 'Kentucky', abbreviation: 'KY' },
        { '@type': 'State', name: 'Ohio', abbreviation: 'OH' },
        { '@type': 'State', name: 'West Virginia', abbreviation: 'WV' },
        { '@type': 'State', name: 'Tennessee', abbreviation: 'TN' },
      ],
      sameAs: [
        'https://www.facebook.com/protechroofing',
        'https://www.instagram.com/protechroofing',
        'https://www.youtube.com/@protechroofing',
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
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
    const locationSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_CONFIG.url}/locations/${location.citySlug}`,
      name: 'ProTech Roofing',
      url: `${SITE_CONFIG.url}/locations/${location.citySlug}`,
      logo: `${SITE_CONFIG.url}/images/logo.png`,
      image: `${SITE_CONFIG.url}/images/locations/${location.citySlug}.jpg`,
      description: `ProTech Roofing provides expert roofing services in ${location.city}, ${location.stateAbbr}. Licensed, insured, and rated 4.9 stars.`,
      telephone: location.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.city,
        addressRegion: location.stateAbbr,
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
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
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
              name: 'Commercial Roofing',
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
