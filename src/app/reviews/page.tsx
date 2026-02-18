import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { CTABanner } from '@/components/sections/CTABanner';
import ReviewsContent from './ReviewsContent';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Customer Reviews | 4.9 Star Rating | ProTech Roofing',
    description:
      'Read verified customer reviews for ProTech Roofing. Rated 4.9 stars with 500+ reviews. See what homeowners say about our roofing services across 14 states.',
    path: '/reviews',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Reviews', href: '/reviews' },
];

export default function ReviewsPage() {
  const testimonials = getFeaturedTestimonials(15);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Customer Reviews
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-200">
            Read what our customers say about their experience with ProTech
            Roofing. Real reviews from real homeowners.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Client interactive content */}
      <ReviewsContent testimonials={testimonials} />

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Join Our Happy Customers?"
        subtext="Get a free, no-obligation estimate and see why over 1,000 homeowners trust ProTech Roofing."
      />
    </>
  );
}
