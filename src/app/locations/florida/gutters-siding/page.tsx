import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('florida');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in Florida',
    description:
      'Gutter installation and siding services in Florida. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Tampa, Orlando, Miami, Jacksonville, and Fort Lauderdale. Free estimate.',
    path: '/locations/florida/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Florida"
      stateSlug="florida"
      stateAbbr="FL"
      service={service}
      cities={locations}
      weatherContext="hurricanes, tropical storms, and intense UV"
    />
  );
}
