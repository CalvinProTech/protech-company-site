import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in Virginia | ProTech Roofing',
    description:
      'Storm damage roof repair in Virginia. Insurance claim assistance included. Free inspection and documentation. Serving Virginia Beach, Richmond, and Norfolk. Call (866) 308-2640.',
    path: '/locations/virginia/storm-damage',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="Virginia"
      stateSlug="virginia"
      stateAbbr="VA"
      service={service}
      cities={locations}
      weatherContext="nor'easters, ice storms, and heavy rain"
    />
  );
}
