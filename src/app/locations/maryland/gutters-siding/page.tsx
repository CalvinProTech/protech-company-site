import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('maryland');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in Maryland | ProTech Roofing',
    description:
      'Gutter installation and siding services in Maryland. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Baltimore, Frederick, and Annapolis. Free estimate.',
    path: '/locations/maryland/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Maryland"
      stateSlug="maryland"
      stateAbbr="MD"
      service={service}
      cities={locations}
      weatherContext="nor'easters, severe thunderstorms, and humid summers"
    />
  );
}
