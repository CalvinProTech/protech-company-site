import { getServiceBySlug } from '@/lib/services';
import { createServiceMetadata } from '@/lib/metadata';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('commercial-roofing');

export function generateMetadata() {
  if (!service) return {};
  return createServiceMetadata(service);
}

export default function Page() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
