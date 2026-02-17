import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('pennsylvania');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Pennsylvania | ProTech Roofing',
    description:
      'ProTech Roofing serves Philadelphia, Pittsburgh, and Allentown with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Pennsylvania.',
    path: '/locations/pennsylvania',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Pennsylvania"
      stateSlug="pennsylvania"
      cities={locations}
    />
  );
}
