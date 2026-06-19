import { SITE_CONFIG, LICENSED_STATES } from '@/lib/constants';
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
      // Required for valid LocalBusiness rich-results — Tampa-metro HQ.
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.hq.streetAddress,
        addressLocality: SITE_CONFIG.hq.addressLocality,
        addressRegion: SITE_CONFIG.hq.addressRegion,
        postalCode: SITE_CONFIG.hq.postalCode,
        addressCountry: SITE_CONFIG.hq.addressCountry,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(SITE_CONFIG.googleRating),
        reviewCount: String(SITE_CONFIG.reviewCount),
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: LICENSED_STATES.map((s) => ({
      '@type': 'State',
      name: s.name,
      abbreviation: s.abbr,
    })),
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
