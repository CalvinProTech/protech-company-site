import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('georgia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Georgia | ProTech Roofing',
    description:
      'ProTech Roofing serves Atlanta, Savannah, and Augusta with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Georgia.',
    path: '/locations/georgia',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Georgia"
      stateSlug="georgia"
      cities={locations}
    />
  );
}
