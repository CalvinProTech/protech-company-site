import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('delaware');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in Delaware',
    description:
      'Gutter installation and siding services in Delaware. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Wilmington and Dover. Free estimate.',
    path: '/locations/delaware/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Delaware"
      stateSlug="delaware"
      stateAbbr="DE"
      service={service}
      cities={locations}
      weatherContext="coastal storms, high winds, and heavy rain"
    />
  );
}
