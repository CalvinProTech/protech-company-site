import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('south-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in South Carolina | ProTech Roofing',
    description:
      'Gutter installation and siding services in South Carolina. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Charleston, Columbia, and Greenville. Free estimate.',
    path: '/locations/south-carolina/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="South Carolina"
      stateSlug="south-carolina"
      stateAbbr="SC"
      service={service}
      cities={locations}
      weatherContext="hurricanes, high humidity, and severe storms"
    />
  );
}
