import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('north-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in North Carolina | ProTech Roofing',
    description:
      'ProTech Roofing serves Charlotte, Raleigh, and Greensboro with expert roof replacement, repair, and storm damage restoration. Licensed and insured in North Carolina.',
    path: '/locations/north-carolina',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="North Carolina"
      stateSlug="north-carolina"
      cities={locations}
    />
  );
}
