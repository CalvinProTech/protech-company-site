import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('connecticut');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Connecticut | ProTech Roofing',
    description:
      'ProTech Roofing serves Hartford, New Haven, and Stamford with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Connecticut.',
    path: '/locations/connecticut',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Connecticut"
      stateSlug="connecticut"
      cities={locations}
    />
  );
}
