import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-replacement');
const locations = getLocationsByState('virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Replacement in Virginia',
    description:
      'Professional roof replacement in Virginia. GAF Master Elite certified, $0 down financing, lifetime warranty. Serving Virginia Beach, Richmond, and Norfolk. Free estimate — call (866) 308-2640.',
    path: '/locations/virginia/roof-replacement',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Virginia"
      stateSlug="virginia"
      stateAbbr="VA"
      service={service}
      cities={locations}
      weatherContext="nor'easters, ice storms, and heavy rain"
    />
  );
}
