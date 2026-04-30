import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('south-carolina');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in South Carolina',
    description:
      'Storm damage roof repair in South Carolina. Insurance claim assistance included. Free inspection and documentation. Serving Charleston, Columbia, and Greenville. Call (866) 308-2640.',
    path: '/locations/south-carolina/storm-damage',
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
