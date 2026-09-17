import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { CTABanner } from '@/components/sections/CTABanner';
import ReviewsContent from './ReviewsContent';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Customer Reviews | 5.0 Star Rating',
    description:
      'Verified Google reviews for ProTech Roofing. Rated 5.0 stars by Tampa-area homeowners. See what customers say about our roof replacement, insurance-claim, and financing services.',
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

      {/* Hero — house pattern: navy gradient, left-aligned, H1 + one paragraph.
          Same wrapper as /about, /financing, /careers and the shared <Hero>. */}
      <section className="relative flex min-h-[400px] items-center bg-primary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Customer Reviews
            </h1>
            <p className="mt-4 text-lg text-primary-200 sm:text-xl md:mt-6 md:text-2xl">
              Read what our customers say about their experience with ProTech
              Roofing. Real reviews from real homeowners.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbItems} />

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
