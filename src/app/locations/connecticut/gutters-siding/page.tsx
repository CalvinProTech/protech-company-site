import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('connecticut');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in Connecticut',
    description:
      'Gutter installation and siding services in Connecticut. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Hartford, New Haven, and Stamford. Free estimate.',
    path: '/locations/connecticut/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Connecticut"
      stateSlug="connecticut"
      stateAbbr="CT"
      service={service}
      cities={locations}
      weatherContext="nor'easters, ice storms, and heavy snowfall"
    />
  );
}
