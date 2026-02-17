import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('delaware');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Delaware | ProTech Roofing',
    description:
      'ProTech Roofing serves Wilmington and Dover with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Delaware.',
    path: '/locations/delaware',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Delaware"
      stateSlug="delaware"
      cities={locations}
    />
  );
}
