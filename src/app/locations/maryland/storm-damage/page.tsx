import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('maryland');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in Maryland | ProTech Roofing',
    description:
      'Storm damage roof repair in Maryland. Insurance claim assistance included. Free inspection and documentation. Serving Baltimore, Frederick, and Annapolis. Call (866) 308-2640.',
    path: '/locations/maryland/storm-damage',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Maryland"
      stateSlug="maryland"
      stateAbbr="MD"
      service={service}
      cities={locations}
      weatherContext="nor'easters, severe thunderstorms, and humid summers"
    />
  );
}
