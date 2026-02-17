import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('south-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in South Carolina | ProTech Roofing',
    description:
      'ProTech Roofing serves Charleston, Columbia, and Greenville with expert roof replacement, repair, and storm damage restoration. Licensed and insured in South Carolina.',
    path: '/locations/south-carolina',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="South Carolina"
      stateSlug="south-carolina"
      cities={locations}
    />
  );
}
