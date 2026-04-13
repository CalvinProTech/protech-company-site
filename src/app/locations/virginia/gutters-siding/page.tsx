import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in Virginia | ProTech Roofing',
    description:
      'Gutter installation and siding services in Virginia. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Virginia Beach, Richmond, and Norfolk. Free estimate.',
    path: '/locations/virginia/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Virginia"
      stateSlug="virginia"
      stateAbbr="VA"
      service={service}
      cities={locations}
      weatherContext="nor'easters, ice storms, and heavy rain"
    />
  );
}
