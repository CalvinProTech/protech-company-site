import JsonLd from './JsonLd';
import { SITE_CONFIG, LICENSED_STATES } from '@/lib/constants';

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
        foundingDate: '2024',
        // Tampa HQ — same SITE_CONFIG.hq source as LocalBusinessSchema
        // (verified against the FL Sunbiz principal-address record).
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_CONFIG.hq.streetAddress,
          addressLocality: SITE_CONFIG.hq.addressLocality,
          addressRegion: SITE_CONFIG.hq.addressRegion,
          postalCode: SITE_CONFIG.hq.postalCode,
          addressCountry: SITE_CONFIG.hq.addressCountry,
        },
        areaServed: LICENSED_STATES.map((s) => s.name),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE_CONFIG.defaultPhone,
          contactType: 'sales',
          areaServed: 'US',
          availableLanguage: 'English',
        },
        sameAs: [
          // LinkedIn company page launched 2026-06-15 (ID 105521611).
          'https://www.linkedin.com/company/105521611',
          'https://www.facebook.com/protechroofing',
          'https://www.instagram.com/protechroofing',
        ],
      }}
    />
  );
}
