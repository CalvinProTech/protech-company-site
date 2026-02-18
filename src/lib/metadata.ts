import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url || 'https://protechroof.net';

interface CreatePageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: CreatePageMetadataOptions): Metadata {
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${BASE_URL}${image}`
    : `${BASE_URL}/images/og-default.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'ProTech Roofing',
      locale: 'en_US',
      type: 'website',
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
}

export function createLocationMetadata(location: LocationForMetadata): Metadata {
  const title = `Roofing Services ${location.city}, ${location.stateAbbr} | ProTech Roofing`;
  const description = `Top-rated roofing contractor in ${location.city}, ${location.stateAbbr}. Roof replacement, repair & storm damage restoration. Licensed & insured. Get your free estimate today!`;

  return createPageMetadata({
    title,
    description,
    path: `/locations/${location.stateSlug}/${location.citySlug}`,
    image: `/images/locations/${location.citySlug}-og.jpg`,
  });
}

interface CityLandingForMetadata {
  city: string;
  stateAbbr: string;
  citySlug: string;
}

export function createCityLandingMetadata(location: CityLandingForMetadata): Metadata {
  const cityStateSlug = `${location.citySlug}-${location.stateAbbr.toLowerCase()}`;
  const title = `Roofing Services in ${location.city}, ${location.stateAbbr} | ProTech Roofing`;
  const description = `Top-rated roofing contractor in ${location.city}, ${location.stateAbbr}. Roof replacement, repair, storm damage & insurance claims. Licensed & insured. Get your free estimate today!`;

  return createPageMetadata({
    title,
    description,
    path: `/locations/${cityStateSlug}`,
    image: `/images/locations/${location.citySlug}-og.jpg`,
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
  const title = `${service.name} Services | ProTech Roofing`;
  const description = `${service.shortDescription.slice(0, 120).trim()}. Licensed & insured. Get your free estimate from ProTech Roofing today!`.slice(
    0,
    160
  );

  return createPageMetadata({
    title,
    description,
    path: `/services/${service.slug}`,
    image: `/images/services/${service.slug}-og.jpg`,
  });
}
