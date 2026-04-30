import { getServiceBySlug } from '@/lib/services';
import { getLocationsByState } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import StateServicePageTemplate from '@/components/templates/StateServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('roof-repair');
const locations = getLocationsByState('delaware');

export function generateMetadata() {
  return createPageMetadata({
    title: 'Roof Repair in Delaware',
    description:
      'Fast, reliable roof repair in Delaware. Storm damage, leaks, missing shingles — we fix it all. Licensed & insured. Serving Wilmington and Dover. Free inspection.',
    path: '/locations/delaware/roof-repair',
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
