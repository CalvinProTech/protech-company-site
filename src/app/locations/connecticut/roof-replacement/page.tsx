import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('connecticut');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in Connecticut | ProTech Roofing',
    description:
      'Professional roof replacement in Connecticut. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Hartford, New Haven, and Stamford. Free estimate — call (866) 308-2640.',
    path: '/locations/connecticut/roof-replacement',
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
