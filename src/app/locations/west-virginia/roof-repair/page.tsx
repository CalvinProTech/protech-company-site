import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('west-virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in West Virginia | ProTech Roofing',
    description:
      'Fast, reliable roof repair in West Virginia. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Charleston, Huntington, and Morgantown. Free inspection.',
    path: '/locations/west-virginia/roof-repair',
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
