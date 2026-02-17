import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Virginia | ProTech Roofing',
    description:
      'ProTech Roofing serves Virginia Beach, Richmond, and Norfolk with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Virginia.',
    path: '/locations/virginia',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Virginia"
      stateSlug="virginia"
      cities={locations}
    />
  );
}
