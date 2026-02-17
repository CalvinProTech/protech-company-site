import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('west-virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in West Virginia | ProTech Roofing',
    description:
      'ProTech Roofing serves Charleston, Huntington, and Morgantown with expert roof replacement, repair, and storm damage restoration. Licensed and insured in West Virginia.',
    path: '/locations/west-virginia',
  });
}

export default function Page() {
  return (
    <StatePageTemplate
      state="West Virginia"
      stateSlug="west-virginia"
      cities={locations}
    />
  );
}
