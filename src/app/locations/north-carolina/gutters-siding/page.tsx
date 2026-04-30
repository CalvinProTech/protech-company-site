import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('north-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in North Carolina',
    description:
      'Gutter installation and siding services in North Carolina. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Charlotte, Raleigh, and Greensboro. Free estimate.',
    path: '/locations/north-carolina/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="North Carolina"
      stateSlug="north-carolina"
      stateAbbr="NC"
      service={service}
      cities={locations}
      weatherContext="hurricanes, severe thunderstorms, and hail"
    />
  );
}
