import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('maryland');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in Maryland | ProTech Roofing',
    description:
      'Professional roof replacement in Maryland. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Baltimore, Frederick, and Annapolis. Free estimate — call (866) 308-2640.',
    path: '/locations/maryland/roof-replacement',
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
