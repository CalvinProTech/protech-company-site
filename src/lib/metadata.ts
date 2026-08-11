import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url || 'https://www.protechroof.net';

interface CreatePageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  /** When true, do NOT apply the layout's "%s | ProTech Roofing" template.
   *  Use for the homepage where Next.js root-page-template behavior is inconsistent. */
  absolute?: boolean;
  /** When true, emit robots noindex,follow. Used for off-footprint content
   *  (state guides for states ProTech doesn't service) — keeps the URL live
   *  (no 404) but pulls it from the index so it stops drawing out-of-area leads. */
  noindex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  absolute = false,
  noindex = false,
}: CreatePageMetadataOptions): Metadata {
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${BASE_URL}${image}`
    : `${BASE_URL}/images/og-default.jpg`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'ProTech Roofing',
      locale: 'en_US',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

interface LocationForMetadata {
  city: string;
  state: string;
  stateAbbr: string;
  stateSlug: string;
  citySlug: string;
  // When present on the Location record, these win over the generic
  // template — used for cities with hyper-local keyword-targeted titles
  // surfaced from Semrush research.
  metaTitle?: string;
  metaDescription?: string;
}

export function createLocationMetadata(location: LocationForMetadata): Metadata {
  const title =
    location.metaTitle ??
    `Roofing Services ${location.city}, ${location.stateAbbr}`;
  const description =
    location.metaDescription ??
    `Top-rated roofing contractor in ${location.city}, ${location.stateAbbr}. Roof replacement, repair & storm damage restoration. Licensed & insured. Get your free estimate today!`;

  return createPageMetadata({
    title,
    description,
    path: `/locations/${location.stateSlug}/${location.citySlug}`,
  });
}

interface CityLandingForMetadata {
  city: string;
  stateAbbr: string;
  citySlug: string;
  metaTitle?: string;
  metaDescription?: string;
}

export function createCityLandingMetadata(location: CityLandingForMetadata): Metadata {
  const cityStateSlug = `${location.citySlug}-${location.stateAbbr.toLowerCase()}`;
  const title =
    location.metaTitle ??
    `Roofing Services in ${location.city}, ${location.stateAbbr}`;
  const description =
    location.metaDescription ??
    `Top-rated roofing contractor in ${location.city}, ${location.stateAbbr}. Roof replacement, repair, storm damage & insurance claims. Licensed & insured. Get your free estimate today!`;

  return createPageMetadata({
    title,
    description,
    path: `/locations/${cityStateSlug}`,
  });
}

interface CityServiceForMetadata {
  cityStateSlug: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
}

export function createCityServiceMetadata(data: CityServiceForMetadata): Metadata {
  return createPageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/locations/${data.cityStateSlug}/${data.serviceSlug}`,
  });
}

interface ServiceForMetadata {
  name: string;
  slug: string;
  shortDescription: string;
}

export function createServiceMetadata(service: ServiceForMetadata): Metadata {
  const title = `${service.name} Services`;
  const description = `${service.shortDescription.slice(0, 120).trim()}. Licensed & insured. Get your free estimate from ProTech Roofing today!`.slice(
    0,
    160
  );

  return createPageMetadata({
    title,
    description,
    path: `/services/${service.slug}`,
  });
}
