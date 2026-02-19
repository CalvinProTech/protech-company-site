import { getLocationByCityStateSlug } from '@/lib/locations';
import { getServiceBySlug } from '@/lib/services';
import { getCityServiceData, CITY_SERVICE_SLUGS } from '@/lib/city-services';
import { createCityServiceMetadata } from '@/lib/metadata';
import CityServicePageTemplate from '@/components/templates/CityServicePageTemplate';
import { notFound } from 'next/navigation';

const location = getLocationByCityStateSlug('houston-tx');
const service = getServiceBySlug('storm-damage');
const cityService = getCityServiceData('houston-tx', 'storm-damage');

export function generateMetadata() {
  if (!cityService) return {};
  return createCityServiceMetadata(cityService);
}

export default function Page() {
  if (!location || !service || !cityService) notFound();
  const siblingServices = CITY_SERVICE_SLUGS
    .filter((s) => s !== 'storm-damage')
    .map((s) => {
      const svc = getServiceBySlug(s);
      return svc ? { name: svc.name, slug: svc.slug, cityStateSlug: 'houston-tx' } : null;
    })
    .filter(Boolean) as { name: string; slug: string; cityStateSlug: string }[];

  return (
    <CityServicePageTemplate
      location={location}
      service={service}
      cityServiceData={cityService}
      siblingServices={siblingServices}
    />
  );
}
