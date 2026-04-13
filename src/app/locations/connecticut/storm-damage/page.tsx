import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('connecticut');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in Connecticut | ProTech Roofing',
    description:
      'Storm damage roof repair in Connecticut. Insurance claim assistance included. Free inspection and documentation. Serving Hartford, New Haven, and Stamford. Call (866) 308-2640.',
    path: '/locations/connecticut/storm-damage',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Connecticut"
      stateSlug="connecticut"
      stateAbbr="CT"
      service={service}
      cities={locations}
      weatherContext="nor'easters, ice storms, and heavy snowfall"
    />
  );
}
