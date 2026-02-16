import { getLocationBySlug } from '@/lib/locations';
import { createLocationMetadata } from '@/lib/metadata';
import CityPageTemplate from '@/components/templates/CityPageTemplate';
import { notFound } from 'next/navigation';

const location = getLocationBySlug('florida', 'miami');

export function generateMetadata() {
  if (!location) return {};
  return createLocationMetadata(location);
}

export default function Page() {
  if (!location) notFound();
  return <CityPageTemplate location={location} />;
}
