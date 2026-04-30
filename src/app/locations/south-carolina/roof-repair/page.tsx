import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('south-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in South Carolina',
    description:
      'Fast, reliable roof repair in South Carolina. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Charleston, Columbia, and Greenville. Free inspection.',
    path: '/locations/south-carolina/roof-repair',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="South Carolina"
      stateSlug="south-carolina"
      stateAbbr="SC"
      service={service}
      cities={locations}
      weatherContext="hurricanes, high humidity, and severe storms"
    />
  );
}
