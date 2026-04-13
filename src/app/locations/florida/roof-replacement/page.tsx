import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('florida');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in Florida | ProTech Roofing',
    description:
      'Professional roof replacement in Florida. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Tampa, Orlando, Miami, Jacksonville, and Fort Lauderdale. Free estimate — call (866) 308-2640.',
    path: '/locations/florida/roof-replacement',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Florida"
      stateSlug="florida"
      stateAbbr="FL"
      service={service}
      cities={locations}
      weatherContext="hurricanes, tropical storms, and intense UV"
    />
  );
}
