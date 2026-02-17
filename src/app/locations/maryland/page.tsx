import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('maryland');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Maryland | ProTech Roofing',
    description:
      'ProTech Roofing serves Baltimore, Frederick, and Annapolis with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Maryland.',
    path: '/locations/maryland',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Maryland"
      stateSlug="maryland"
      cities={locations}
    />
  );
}
