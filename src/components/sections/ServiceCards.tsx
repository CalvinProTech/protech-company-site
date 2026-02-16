import Link from 'next/link';
import {
  Home,
  Wrench,
  CloudLightning,
  Building2,
  Search,
  Droplets,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Wrench,
  CloudLightning,
  Building2,
  Search,
  Droplets,
};

const serviceDescriptions: Record<string, string> = {
  'roof-replacement':
    'Get a roof that lasts 30+ years with premium materials and expert installation backed by manufacturer warranties.',
  'roof-repair':
    'Stop leaks before they become costly water damage. Fast, reliable repairs that restore your roof to peak condition.',
  'storm-damage':
    'We handle your insurance claim from start to finish so you can focus on what matters most — your family.',
  'commercial-roofing':
    'Minimize downtime with expert commercial roofing solutions designed for businesses of all sizes.',
  'roof-inspection':
    'Know your roof\'s condition before problems start. Comprehensive inspections with detailed written reports.',
  'gutters-siding':
    'Complete exterior protection for your home with seamless gutters and durable siding installation.',
};

interface ServiceCardsProps {
  cityContext?: string;
}

export function ServiceCards({ cityContext }: ServiceCardsProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            {cityContext
              ? `Roofing Services in ${cityContext}`
              : 'Our Roofing Services'}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Professional roofing solutions for every need
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  {Icon && (
                    <Icon className="h-6 w-6 text-primary-700" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-neutral-600">
                  {serviceDescriptions[service.slug]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition-colors group-hover:text-accent-600">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
