import {
  getLocationsByState,
  getLocationBySlug,
  getStateProfile,
} from '@/lib/locations';
import { getServiceBySlug } from '@/lib/services';
import { createPageMetadata, createLocationMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import CityPageTemplate from '@/components/templates/CityPageTemplate';
import { CITY_DATA } from '@/lib/city-data';
import { notFound } from 'next/navigation';

// The [slug] segment is either a state-level SERVICE or a CITY. Services are a
// fixed allowlist; anything else is resolved as a city (or 404). No city slug
// collides with a service slug.
const LOCATION_SERVICES = [
  'roof-replacement',
  'roof-repair',
  'storm-damage',
  'gutters-siding',
] as const;

const SERVICE_TITLE: Record<string, string> = {
  'roof-replacement': 'Roof Replacement',
  'roof-repair': 'Roof Repair',
  'storm-damage': 'Storm Damage Restoration',
  'gutters-siding': 'Gutters & Siding',
};

function isService(slug: string): boolean {
  return (LOCATION_SERVICES as readonly string[]).includes(slug);
}

export function generateStaticParams() {
  const params: { state: string; slug: string }[] = [];
  for (const stateSlug of Object.keys(CITY_DATA)) {
    for (const svc of LOCATION_SERVICES) {
      params.push({ state: stateSlug, slug: svc });
    }
    for (const f of CITY_DATA[stateSlug]) {
      params.push({ state: stateSlug, slug: f.citySlug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;
  const profile = getStateProfile(state);
  if (!profile) return {};

  if (isService(slug)) {
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return createPageMetadata({
      title: `${SERVICE_TITLE[slug]} in ${profile.state}`,
      description: `Professional ${service.name.toLowerCase()} across ${profile.state}. Licensed & insured, serving homeowners statewide. Free inspection and estimate.`,
      path: `/locations/${state}/${slug}`,
    });
  }

  const location = getLocationBySlug(state, slug);
  if (!location) return {};
  return createLocationMetadata(location);
}

export default async function Page({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;
  const profile = getStateProfile(state);
  if (!profile) notFound();

  if (isService(slug)) {
    const service = getServiceBySlug(slug);
    const cities = getLocationsByState(state);
    if (!service || cities.length === 0) notFound();
    return (
      <StateServicePageTemplate
        state={profile.state}
        stateSlug={state}
        stateAbbr={profile.stateAbbr}
        service={service}
        cities={cities}
        weatherContext={profile.weatherContext}
      />
    );
  }

  const location = getLocationBySlug(state, slug);
  if (!location) notFound();
  return <CityPageTemplate location={location} />;
}
