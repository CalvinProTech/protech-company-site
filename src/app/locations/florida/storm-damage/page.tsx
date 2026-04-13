import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('florida');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in Florida | ProTech Roofing',
    description:
      'Storm damage roof repair in Florida. Insurance claim assistance included. Free inspection and documentation. Serving Tampa, Orlando, Miami, Jacksonville, and Fort Lauderdale. Call (866) 308-2640.',
    path: '/locations/florida/storm-damage',
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
