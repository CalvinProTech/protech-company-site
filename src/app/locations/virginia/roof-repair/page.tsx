import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('virginia');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in Virginia | ProTech Roofing',
    description:
      'Fast, reliable roof repair in Virginia. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Virginia Beach, Richmond, and Norfolk. Free inspection.',
    path: '/locations/virginia/roof-repair',
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
