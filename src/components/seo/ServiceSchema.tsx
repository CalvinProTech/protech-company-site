import { SITE_CONFIG } from '@/lib/constants';
import JsonLd from './JsonLd';

interface ServiceSchemaProps {
  service: {
    name: string;
    slug: string;
    shortDescription: string;
  };
}

export default function ServiceSchema({ service }: ServiceSchemaProps) {
  const serviceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/services/${service.slug}`,
    name: service.name,
    description: service.shortDescription,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    provider: {
      '@type': 'RoofingContractor',
      name: 'ProTech Roofing',
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.defaultPhone,
      email: SITE_CONFIG.email,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(SITE_CONFIG.googleRating),
        reviewCount: String(SITE_CONFIG.reviewCount),
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: [
      { '@type': 'State', name: 'Florida', abbreviation: 'FL' },
      { '@type': 'State', name: 'South Carolina', abbreviation: 'SC' },
      { '@type': 'State', name: 'North Carolina', abbreviation: 'NC' },
      { '@type': 'State', name: 'Virginia', abbreviation: 'VA' },
      { '@type': 'State', name: 'Maryland', abbreviation: 'MD' },
      { '@type': 'AdministrativeArea', name: 'Washington, D.C.', abbreviation: 'DC' },
      { '@type': 'State', name: 'Delaware', abbreviation: 'DE' },
      { '@type': 'State', name: 'Pennsylvania', abbreviation: 'PA' },
      { '@type': 'State', name: 'Connecticut', abbreviation: 'CT' },
    ],
    serviceType: service.name,
    termsOfService: `${SITE_CONFIG.url}/terms`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
  };

  return <JsonLd data={serviceSchema} />;
}
