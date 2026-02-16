import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StatePageTemplate from '@/components/templates/StatePageTemplate';

const locations = getLocationsByState('texas');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roofing Services in Texas | ProTech Roofing',
    description:
      'ProTech Roofing serves Dallas, Houston, San Antonio, Austin, and Fort Worth with expert roof replacement, hail damage repair, and commercial roofing. Licensed and insured in Texas.',
    path: '/locations/texas',
  });
}

export default function Page() {
  return (
    <StatePageTemplate state="Texas" stateSlug="texas" cities={locations} />
  );
}
