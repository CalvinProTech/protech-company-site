import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Hero } from '@/components/sections/Hero';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTABanner } from '@/components/sections/CTABanner';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
];

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Roofing Services | ProTech Roofing',
    description:
      'Explore our full range of roofing services including roof replacement, repair, storm damage restoration, commercial roofing, inspections, gutters, and siding. Licensed and insured.',
    path: '/services',
  });
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <Hero
        heading="Professional Roofing Services"
        subtitle="From roof replacement and repair to storm damage restoration and commercial roofing, ProTech Roofing delivers expert solutions backed by a lifetime workmanship warranty."
        primaryCTA={{ text: 'Get a Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{ text: 'Call Now', href: `tel:${SITE_CONFIG.defaultPhoneRaw}` }}
        backgroundImage="/images/hero/services.jpg"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Intro Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Comprehensive Roofing Solutions
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              ProTech Roofing provides a complete range of residential and
              commercial roofing services across 14 states on the East Coast
              and beyond. Every project is backed by our lifetime workmanship warranty,
              premium materials from manufacturers like GAF, Owens Corning, and
              CertainTeed, and a team of factory-trained installers who treat
              your property like their own. Whether you need a full roof
              replacement, emergency leak repair, or a proactive inspection, we
              deliver the quality, transparency, and speed you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <ServiceCards />

      {/* CTA */}
      <CTABanner
        heading="Not Sure Which Service You Need?"
        subtext="Schedule a free inspection and our experts will recommend the right solution for your home or business."
      />
    </>
  );
}
