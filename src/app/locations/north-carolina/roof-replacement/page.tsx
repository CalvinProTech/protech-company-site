import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('north-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in North Carolina | ProTech Roofing',
    description:
      'Professional roof replacement in North Carolina. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Charlotte, Raleigh, and Greensboro. Free estimate — call (866) 308-2640.',
    path: '/locations/north-carolina/roof-replacement',
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
