import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('pennsylvania');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in Pennsylvania | ProTech Roofing',
    description:
      'Gutter installation and siding services in Pennsylvania. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Philadelphia, Pittsburgh, and Allentown. Free estimate.',
    path: '/locations/pennsylvania/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Pennsylvania"
      stateSlug="pennsylvania"
      stateAbbr="PA"
      service={service}
      cities={locations}
      weatherContext="harsh winters, ice dams, and heavy snowfall"
    />
  );
}
