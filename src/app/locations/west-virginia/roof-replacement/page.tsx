import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('west-virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in West Virginia | ProTech Roofing',
    description:
      'Professional roof replacement in West Virginia. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Charleston, Huntington, and Morgantown. Free estimate — call (866) 308-2640.',
    path: '/locations/west-virginia/roof-replacement',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="West Virginia"
      stateSlug="west-virginia"
      stateAbbr="WV"
      service={service}
      cities={locations}
      weatherContext="heavy snowfall, ice storms, and severe thunderstorms"
    />
  );
}
