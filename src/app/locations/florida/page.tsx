import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('florida');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Florida | ProTech Roofing',
    description:
      'ProTech Roofing serves Tampa, Orlando, Miami, Jacksonville, and Fort Lauderdale with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Florida.',
    path: '/locations/florida',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Florida"
      stateSlug="florida"
      cities={locations}
    />
  );
}
