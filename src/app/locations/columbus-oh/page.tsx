import { getLocationByCityStateSlug } from '@/lib/locations';
import { createCityLandingMetadata } from '@/lib/metadata';
import CityLandingTemplate from '@/components/templates/CityLandingTemplate';
import { notFound } from 'next/navigation';

const location = getLocationByCityStateSlug('columbus-oh');

export function generateMetadata() {
  if (!location) return {};
  return createCityLandingMetadata(location);
}

export default function Page() {
  if (!location) notFound();
  return <CityLandingTemplate location={location} />;
}
