import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('north-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in North Carolina | ProTech Roofing',
    description:
      'Storm damage roof repair in North Carolina. Insurance claim assistance included. Free inspection and documentation. Serving Charlotte, Raleigh, and Greensboro. Call (866) 308-2640.',
    path: '/locations/north-carolina/storm-damage',
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
