import JsonLd from './JsonLd';
import { SITE_CONFIG } from '@/lib/constants';

export default function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        description: SITE_CONFIG.description,
        telephone: SITE_CONFIG.defaultPhone,
        email: SITE_CONFIG.email,
        foundingDate: '2004',
        areaServed: [
          'Florida',
          'Georgia',
          'Texas',
          'Kentucky',
          'Ohio',
          'Delaware',
          'Maryland',
          'Virginia',
          'Connecticut',
          'Pennsylvania',
          'North Carolina',
          'South Carolina',
          'West Virginia',
          'Tennessee',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE_CONFIG.defaultPhone,
          contactType: 'sales',
          areaServed: 'US',
          availableLanguage: 'English',
        },
        sameAs: [
          'https://www.facebook.com/protechroofing',
          'https://www.instagram.com/protechroofing',
        ],
      }}
    />
  );
}
