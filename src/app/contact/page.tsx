import type { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import { getAllStates, getLocationsByState } from '@/lib/locations';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ContactForm from '@/components/forms/ContactForm';
import { TrustBar } from '@/components/sections/TrustBar';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { CTABanner } from '@/components/sections/CTABanner';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Contact Us | ProTech Roofing',
    description:
      'Contact ProTech Roofing by phone, email, or online form. Licensed roofing contractor serving FL, GA, TX, NC, SC, VA, MD, PA, CT, DE, WV, TN, KY & OH. We respond within 24 hours.',
    path: '/contact',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
];

const officeHours = [
  { days: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
  { days: 'Saturday', hours: '8:00 AM - 2:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
];

const serviceStates = getAllStates().map(({ state, stateSlug }) => ({
  name: state,
  cities: getLocationsByState(stateSlug)
    .map((loc) => loc.city)
    .join(', '),
}));

export default function ContactPage() {
  const testimonials = getFeaturedTestimonials();

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Trust Bar */}
      <TrustBar />

      {/* Page Header */}
      <section className="bg-primary-800 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Contact ProTech Roofing
            </h1>
            <p className="text-primary-200 mt-4 text-lg">
              Have a question or need help with a roofing project? Reach out by
              phone, email, or the form below. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column: Contact Form */}
            <div>
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-primary-900 text-2xl font-bold">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-neutral-600">
                  Fill out the form and a member of our team will get back to
                  you within 24 hours.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Right Column: Contact Info */}
            <div className="space-y-8">
              {/* Phone and Email */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-primary-900 text-lg font-semibold">
                  Get in Touch
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                    className="hover:text-accent-500 flex items-center gap-3 text-neutral-700 transition-colors"
                  >
                    <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Phone className="text-primary-700 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Phone</p>
                      <p className="font-medium">
                        {formatPhoneNumber(SITE_CONFIG.defaultPhoneRaw)}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-accent-500 flex items-center gap-3 text-neutral-700 transition-colors"
                  >
                    <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Mail className="text-primary-700 h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <p className="font-medium">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-primary-900 flex items-center gap-2 text-lg font-semibold">
                  <Clock className="text-primary-700 h-5 w-5" />
                  Office Hours
                </h3>
                <div className="mt-4 space-y-2">
                  {officeHours.map((schedule) => (
                    <div
                      key={schedule.days}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-medium text-neutral-700">
                        {schedule.days}
                      </span>
                      <span className="text-neutral-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-neutral-500">
                  Emergency storm damage response is available 24/7. Call our
                  main number and select the emergency option.
                </p>
              </div>

              {/* Service Areas */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-primary-900 flex items-center gap-2 text-lg font-semibold">
                  <MapPin className="text-primary-700 h-5 w-5" />
                  Service Areas
                </h3>
                <div className="mt-4 space-y-3">
                  {serviceStates.map((state) => (
                    <div key={state.name}>
                      <p className="text-primary-900 text-sm font-medium">
                        {state.name}
                      </p>
                      <p className="text-sm text-neutral-600">{state.cities}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Don&rsquo;t just take our word for it. Hear from homeowners
              who&rsquo;ve trusted ProTech with their roofing projects.
            </p>
          </div>
          <div className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Need a Faster Response?"
        subtext="For urgent roofing needs, call us directly. We prioritize emergency storm damage calls and respond within hours."
      />
    </>
  );
}
