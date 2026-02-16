import { SITE_CONFIG } from '@/lib/constants';
import JsonLd from './JsonLd';

interface BreadcrumbSchemaProps {
  items: { label: string; href: string }[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };

  return <JsonLd data={breadcrumbSchema} />;
}
