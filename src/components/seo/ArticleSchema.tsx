import { SITE_CONFIG } from '@/lib/constants';
import JsonLd from './JsonLd';

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image: string;
  slug: string;
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  slug,
}: ArticleSchemaProps) {
  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`,
    url: `${SITE_CONFIG.url}/blog/${slug}`,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProTech Roofing',
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${slug}`,
    },
  };

  return <JsonLd data={articleSchema} />;
}
