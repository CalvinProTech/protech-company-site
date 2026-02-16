import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('ohio');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Ohio | ProTech Roofing',
    description:
      'ProTech Roofing serves Columbus, Cincinnati, and Cleveland with expert roof replacement, repair, and snow damage restoration. Licensed and insured in Ohio.',
    path: '/locations/ohio',
  });
}

export default function Page() {
  return (
    <StatePageTemplate state="Ohio" stateSlug="ohio" cities={locations} />
  );
}
