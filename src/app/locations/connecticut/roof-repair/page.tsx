import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('connecticut');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in Connecticut | ProTech Roofing',
    description:
      'Fast, reliable roof repair in Connecticut. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Hartford, New Haven, and Stamford. Free inspection.',
    path: '/locations/connecticut/roof-repair',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Connecticut"
      stateSlug="connecticut"
      stateAbbr="CT"
      service={service}
      cities={locations}
      weatherContext="nor'easters, ice storms, and heavy snowfall"
    />
  );
}
