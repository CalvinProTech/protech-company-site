import Link from 'next/link';
import { CheckCircle, Layers, ArrowRight } from 'lucide-react';

import { type Service, getRelatedServices } from '@/lib/services';
import { getTestimonialsByService } from '@/lib/testimonials';
import { SITE_CONFIG } from '@/lib/constants';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { Hero } from '@/components/sections/Hero';
import { FAQSection } from '@/components/sections/FAQSection';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { CTABanner } from '@/components/sections/CTABanner';

interface ServicePageTemplateProps {
  service: Service;
}

export default function ServicePageTemplate({
  service,
}: ServicePageTemplateProps) {
  const testimonials = getTestimonialsByService(service.slug);
  const relatedServices = getRelatedServices(service.slug, 3);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.name, href: `/services/${service.slug}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema service={service} />
      <FAQSchema faqs={service.faqs} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <Hero
        heading={service.name}
        subtitle={service.shortDescription}
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: `Call ${SITE_CONFIG.defaultPhone}`,
          href: `tel:${SITE_CONFIG.defaultPhoneRaw}`,
        }}
        backgroundImage={`/images/services/${service.slug}-hero.jpg`}
        showTrustBadges={true}
      />

      {/* Long Description Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            About Our {service.name} Services
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-700">
            {service.longDescription
              .split('. ')
              .reduce<string[][]>(
                (paragraphs, sentence, index, array) => {
                  const sentencesPerParagraph = Math.ceil(array.length / 2);
                  const paragraphIndex = Math.floor(
                    index / sentencesPerParagraph
                  );
                  if (!paragraphs[paragraphIndex]) {
                    paragraphs[paragraphIndex] = [];
                  }
                  paragraphs[paragraphIndex].push(
                    index < array.length - 1 ? sentence + '.' : sentence
                  );
                  return paragraphs;
                },
                []
              )
              .map((sentences, i) => (
                <p key={i}>{sentences.join(' ')}</p>
              ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Benefits of Our {service.name}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Why homeowners trust ProTech Roofing for their{' '}
              {service.name.toLowerCase()} needs
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-accent-500" />
                <p className="text-neutral-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Our {service.name} Process
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              A clear, step-by-step approach from start to finish
            </p>
          </div>

          <div className="space-y-8">
            {service.processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  {index < service.processSteps.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-primary-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-primary-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Materials We Use
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Premium products from trusted manufacturers
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <Layers className="h-5 w-5 shrink-0 text-primary-600" />
                <span className="text-neutral-700">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        heading={`${service.name} FAQ`}
        subtitle={`Common questions about our ${service.name.toLowerCase()} services`}
        faqs={service.faqs}
      />

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} />
      )}

      {/* CTA Banner */}
      <CTABanner
        heading={`Ready for ${service.name}?`}
        subtext={`Get a free, no-obligation estimate for your ${service.name.toLowerCase()} project. We respond within 24 hours.`}
      />

      {/* Related Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Related Services
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Explore other ways ProTech Roofing can protect your property
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-primary-900">
                  {related.name}
                </h3>
                <p className="mt-2 text-neutral-600">
                  {related.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition-colors group-hover:text-accent-600">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
