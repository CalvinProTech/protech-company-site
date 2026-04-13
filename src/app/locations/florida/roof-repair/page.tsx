import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('florida');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in Florida | ProTech Roofing',
    description:
      'Fast, reliable roof repair in Florida. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Tampa, Orlando, Miami, Jacksonville, and Fort Lauderdale. Free inspection.',
    path: '/locations/florida/roof-repair',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Florida"
      stateSlug="florida"
      stateAbbr="FL"
      service={service}
      cities={locations}
      weatherContext="hurricanes, tropical storms, and intense UV"
    />
  );
}
