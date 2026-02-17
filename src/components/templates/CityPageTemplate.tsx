import Link from 'next/link';
import { MapPin, Phone, Shield } from 'lucide-react';

import type { Location } from '@/lib/locations';
import { getTestimonialsByCity } from '@/lib/testimonials';
import { getProjectsByCity } from '@/lib/projects';
import { formatPhoneNumber } from '@/lib/utils';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { Hero } from '@/components/sections/Hero';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { ProjectGalleryPreview } from '@/components/sections/ProjectGalleryPreview';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { LocationMap } from '@/components/sections/LocationMap';

interface CityPageTemplateProps {
  location: Location;
}

function buildCityFaqs(location: Location) {
  return [
    {
      question: `How much does a new roof cost in ${location.city}, ${location.stateAbbr}?`,
      answer: `The cost of a new roof in ${location.city} depends on the size of your home, the materials you choose, and the complexity of the installation. On average, homeowners in ${location.city} pay between $8,000 and $25,000 for a full roof replacement. ProTech Roofing provides free, detailed estimates so you know exactly what to expect before any work begins.`,
    },
    {
      question: `Is ProTech Roofing licensed in ${location.state}?`,
      answer: `Yes, ProTech Roofing is fully licensed and insured in ${location.state}. Our license number is ${location.licenseNumber}. We carry comprehensive general liability and workers' compensation insurance to protect our customers and crew members on every project.`,
    },
    {
      question: `How quickly can you start a roofing project in ${location.city}?`,
      answer: `In most cases, we can schedule your free inspection within a few days of your call and begin work within 1 to 3 weeks after approval. Emergency repairs and storm damage tarping are available within 24 hours. Our local ${location.city} team stays responsive to keep your project on track.`,
    },
    {
      question: `What areas around ${location.city} do you serve?`,
      answer: `We serve ${location.city} and surrounding communities within a ${location.serviceRadius} radius, including ${location.surroundingCities.join(', ')}. Contact us to confirm service availability in your specific area.`,
    },
    {
      question: `Does ProTech Roofing help with insurance claims in ${location.city}?`,
      answer: `Yes, our dedicated insurance specialists handle the entire claims process for ${location.city} homeowners. We document storm damage with drone photography and detailed reports, meet with your adjuster on-site, and advocate for a fair settlement. You pay only your deductible while we manage the paperwork and restoration timeline.`,
    },
  ];
}

export default function CityPageTemplate({ location }: CityPageTemplateProps) {
  const testimonials = getTestimonialsByCity(location.city);
  const projects = getProjectsByCity(location.city);
  const cityFaqs = buildCityFaqs(location);
  const phoneDigits = location.phone.replace(/\D/g, '');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: location.state, href: `/locations/${location.stateSlug}` },
    {
      label: location.city,
      href: `/locations/${location.stateSlug}/${location.citySlug}`,
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema type="location" location={location} />
      <FAQSchema faqs={cityFaqs} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <Hero
        heading={location.headline}
        subtitle={`Licensed roofing contractor serving ${location.city}, ${location.stateAbbr} and surrounding areas within ${location.serviceRadius}. ${location.licenseNumber ? `License #${location.licenseNumber}.` : ''}`}
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: `Call ${formatPhoneNumber(phoneDigits)}`,
          href: `tel:${phoneDigits}`,
        }}
        backgroundImage={location.heroImage}
        showTrustBadges={true}
      />

      {/* City Intro Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Intro Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
                Expert Roofing Services in {location.city},{' '}
                {location.stateAbbr}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                {location.intro}
              </p>

              {/* Surrounding Cities */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary-900">
                  Areas We Serve Near {location.city}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {location.surroundingCities.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      <MapPin className="h-3.5 w-3.5 text-primary-600" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6 lg:self-start">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-semibold text-primary-900">
                  {location.city} Office
                </h3>
                <div className="mt-4 space-y-3">
                  <a
                    href={`tel:${phoneDigits}`}
                    className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-accent-500"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-primary-700" />
                    <span>{formatPhoneNumber(phoneDigits)}</span>
                  </a>
                  <div className="flex items-center gap-2 text-neutral-700">
                    <MapPin className="h-5 w-5 shrink-0 text-primary-700" />
                    <span>
                      {location.city}, {location.stateAbbr}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Shield className="h-5 w-5 shrink-0 text-primary-700" />
                    <span>License: {location.licenseNumber}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-500">
                  Service radius: {location.serviceRadius}
                </p>
                <Link
                  href="/free-estimate"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
                >
                  Get a Free Estimate
                </Link>
              </div>

              {/* City Map */}
              {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    title={`Map of ${location.city}, ${location.stateAbbr}`}
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=roofing+${encodeURIComponent(location.city)}+${encodeURIComponent(location.stateAbbr)}&zoom=11`}
                    className="h-48 w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <ServiceCards cityContext={location.city} />

      {/* Recent Projects */}
      {projects.length > 0 && <ProjectGalleryPreview projects={projects} />}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} />
      )}

      {/* FAQ Section */}
      <FAQSection
        heading={`Roofing FAQ for ${location.city}, ${location.stateAbbr}`}
        subtitle={`Common questions from ${location.city} homeowners`}
        faqs={cityFaqs}
      />

      {/* CTA Banner */}
      <CTABanner
        heading={`Ready to Protect Your ${location.city} Home?`}
        subtext={`Get a free, no-obligation roofing estimate from our ${location.city} team. We respond within 24 hours.`}
        phone={phoneDigits}
      />

      {/* Location Map */}
      <LocationMap />
    </>
  );
}
