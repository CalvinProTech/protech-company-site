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
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Florida',
        abbreviation: 'FL',
      },
      {
        '@type': 'State',
        name: 'Texas',
        abbreviation: 'TX',
      },
      {
        '@type': 'State',
        name: 'Kentucky',
        abbreviation: 'KY',
      },
      {
        '@type': 'State',
        name: 'Ohio',
        abbreviation: 'OH',
      },
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
