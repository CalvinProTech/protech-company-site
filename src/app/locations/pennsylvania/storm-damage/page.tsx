import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('pennsylvania');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in Pennsylvania | ProTech Roofing',
    description:
      'Storm damage roof repair in Pennsylvania. Insurance claim assistance included. Free inspection and documentation. Serving Philadelphia, Pittsburgh, and Allentown. Call (866) 308-2640.',
    path: '/locations/pennsylvania/storm-damage',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Pennsylvania"
      stateSlug="pennsylvania"
      stateAbbr="PA"
      service={service}
      cities={locations}
      weatherContext="harsh winters, ice dams, and heavy snowfall"
    />
  );
}
