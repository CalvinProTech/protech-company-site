import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('pennsylvania');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in Pennsylvania',
    description:
      'Professional roof replacement in Pennsylvania. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Philadelphia, Pittsburgh, and Allentown. Free estimate — call (866) 308-2640.',
    path: '/locations/pennsylvania/roof-replacement',
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
