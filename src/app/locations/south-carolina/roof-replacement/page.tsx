import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('south-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in South Carolina | ProTech Roofing',
    description:
      'Professional roof replacement in South Carolina. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Charleston, Columbia, and Greenville. Free estimate — call (866) 308-2640.',
    path: '/locations/south-carolina/roof-replacement',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="South Carolina"
      stateSlug="south-carolina"
      stateAbbr="SC"
      service={service}
      cities={locations}
      weatherContext="hurricanes, high humidity, and severe storms"
    />
  );
}
