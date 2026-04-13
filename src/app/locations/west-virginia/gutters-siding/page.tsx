import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('gutters-siding');
const locations = getLocationsByState('west-virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Gutters & Siding in West Virginia | ProTech Roofing',
    description:
      'Gutter installation and siding services in West Virginia. Seamless gutters, vinyl and fiber cement siding. Licensed & insured. Serving Charleston, Huntington, and Morgantown. Free estimate.',
    path: '/locations/west-virginia/gutters-siding',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="West Virginia"
      stateSlug="west-virginia"
      stateAbbr="WV"
      service={service}
      cities={locations}
      weatherContext="heavy snowfall, ice storms, and severe thunderstorms"
    />
  );
}
