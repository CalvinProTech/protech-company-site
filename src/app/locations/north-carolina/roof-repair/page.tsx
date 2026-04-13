import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('north-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in North Carolina | ProTech Roofing',
    description:
      'Fast, reliable roof repair in North Carolina. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Charlotte, Raleigh, and Greensboro. Free inspection.',
    path: '/locations/north-carolina/roof-repair',
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
