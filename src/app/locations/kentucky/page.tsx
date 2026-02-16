import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('kentucky');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Kentucky | ProTech Roofing',
    description:
      'ProTech Roofing serves Louisville and Lexington with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Kentucky.',
    path: '/locations/kentucky',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Kentucky"
      stateSlug="kentucky"
      cities={locations}
    />
  );
}
