import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('maryland');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in Maryland | ProTech Roofing',
    description:
      'Fast, reliable roof repair in Maryland. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Baltimore, Frederick, and Annapolis. Free inspection.',
    path: '/locations/maryland/roof-repair',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Maryland"
      stateSlug="maryland"
      stateAbbr="MD"
      service={service}
      cities={locations}
      weatherContext="nor'easters, severe thunderstorms, and humid summers"
    />
  );
}
