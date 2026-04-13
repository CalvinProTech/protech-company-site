import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('storm-damage');
const locations = getLocationsByState('west-virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Storm Damage in West Virginia | ProTech Roofing',
    description:
      'Storm damage roof repair in West Virginia. Insurance claim assistance included. Free inspection and documentation. Serving Charleston, Huntington, and Morgantown. Call (866) 308-2640.',
    path: '/locations/west-virginia/storm-damage',
  });
}

export default function Page() {
  if (!service) notFound();
  return (
    <StateServicePageTemplate
      state="West Virginia"
      stateSlug="west-virginia"
      stateAbbr="WV"
      service={service}
      cities={locations}
      weatherContext="heavy snowfall, ice storms, and severe thunderstorms"
    />
  );
}
