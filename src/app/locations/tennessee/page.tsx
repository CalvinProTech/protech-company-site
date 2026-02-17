import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('tennessee');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Tennessee | ProTech Roofing',
    description:
      'ProTech Roofing serves Nashville, Memphis, Knoxville, and Chattanooga with expert roof replacement, repair, and storm damage restoration. Licensed and insured in Tennessee.',
    path: '/locations/tennessee',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="Tennessee"
      stateSlug="tennessee"
      cities={locations}
    />
  );
}
