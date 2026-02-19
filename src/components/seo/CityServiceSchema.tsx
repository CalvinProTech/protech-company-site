import { SITE_CONFIG } from '@/lib/constants';
import JsonLd from './JsonLd';

interface CityServiceSchemaProps {
  service: {
    name: string;
    slug: string;
    shortDescription: string;
  };
  location: {
    city: string;
    state: string;
    stateAbbr: string;
    lat: number;
    lng: number;
    phone: string;
  };
  cityStateSlug: string;
}

export default function CityServiceSchema({
  service,
  location,
  cityStateSlug,
}: CityServiceSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/locations/${cityStateSlug}/${service.slug}`,
    serviceType: service.name,
    name: `${service.name} in ${location.city}, ${location.stateAbbr}`,
    description: service.shortDescription,
    url: `${SITE_CONFIG.url}/locations/${cityStateSlug}/${service.slug}`,
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: location.state,
        abbreviation: location.stateAbbr,
      },
    },
    provider: {
      '@type': 'RoofingContractor',
      name: 'ProTech Roofing',
      url: SITE_CONFIG.url,
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(SITE_CONFIG.googleRating),
        reviewCount: String(SITE_CONFIG.reviewCount),
        bestRating: '5',
        worstRating: '1',
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
  };

  return <JsonLd data={schema} />;
}
