import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('pennsylvania');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in Pennsylvania',
    description:
      'Fast, reliable roof repair in Pennsylvania. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Philadelphia, Pittsburgh, and Allentown. Free inspection.',
    path: '/locations/pennsylvania/roof-repair',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Pennsylvania"
      stateSlug="pennsylvania"
      stateAbbr="PA"
      service={service}
      cities={locations}
      weatherContext="harsh winters, ice dams, and heavy snowfall"
    />
  );
}
