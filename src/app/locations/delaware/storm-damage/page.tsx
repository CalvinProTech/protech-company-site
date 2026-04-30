import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('delaware');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in Delaware',
    description:
      'Storm damage roof repair in Delaware. Insurance claim assistance included. Free inspection and documentation. Serving Wilmington and Dover. Call (866) 308-2640.',
    path: '/locations/delaware/storm-damage',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Delaware"
      stateSlug="delaware"
      stateAbbr="DE"
      service={service}
      cities={locations}
      weatherContext="coastal storms, high winds, and heavy rain"
    />
  );
}
