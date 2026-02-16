import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/metadata';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import { getAllProjects } from '@/lib/projects';

import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ProjectGalleryPreview } from '@/components/sections/ProjectGalleryPreview';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { LocationMap } from '@/components/sections/LocationMap';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { CTABanner } from '@/components/sections/CTABanner';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'ProTech Roofing | Licensed Roofing Contractor',
    description:
      'Expert roofing services across Florida, Texas, Kentucky, and Ohio. Licensed, insured, and rated 4.9 stars. Roof replacement, repair, storm damage, and more. Get your free estimate today.',
    path: '/',
  });
}

const placeholderBlogPosts = [
  {
    slug: '5-signs-you-need-a-new-roof',
    title: '5 Warning Signs You Need a New Roof Before It Is Too Late',
    excerpt:
      'Missing shingles, granule buildup in your gutters, and sagging spots can all indicate your roof is past its prime. Learn the five critical signs that mean it is time to call a professional.',
    date: '2025-11-15',
    category: 'Roof Maintenance',
    featuredImage: '/images/blog/5-signs-new-roof.jpg',
  },
  {
    slug: 'how-to-file-roof-insurance-claim',
    title: 'How to File a Roof Insurance Claim: A Step-by-Step Guide',
    excerpt:
      'Navigating the insurance claims process after storm damage can feel overwhelming. This guide walks you through every step from documentation to final payment.',
    date: '2025-10-28',
    category: 'Insurance',
    featuredImage: '/images/blog/insurance-claim-guide.jpg',
  },
  {
    slug: 'metal-vs-shingle-roof-comparison',
    title: 'Metal Roof vs. Shingles: Which Is Right for Your Home?',
    excerpt:
      'Comparing lifespan, cost, energy efficiency, and curb appeal between metal roofing and architectural shingles to help you make the best investment for your home.',
    date: '2025-10-10',
    category: 'Roofing Materials',
    featuredImage: '/images/blog/metal-vs-shingles.jpg',
  },
];

export default function HomePage() {
  const featuredTestimonials = getFeaturedTestimonials(5);
  const allProjects = getAllProjects();

  return (
    <>
      {/* Structured Data */}
      <LocalBusinessSchema type="homepage" />

      {/* Hero Section */}
      <Hero
        heading="Protect Your Home with America's Most Trusted Roofers"
        subtitle="Licensed roofing contractor serving FL, TX, KY & OH. 20+ years experience, 1,000+ roofs installed, 4.9-star rating."
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: 'Call (800) 555-ROOF',
          href: 'tel:18005557663',
        }}
        showTrustBadges={true}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Service Cards */}
      <ServiceCards />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Project Gallery Preview */}
      <ProjectGalleryPreview projects={allProjects} />

      {/* Testimonial Carousel */}
      <TestimonialCarousel testimonials={featuredTestimonials} />

      {/* Location Map */}
      <LocationMap />

      {/* Blog Preview */}
      <BlogPreview posts={placeholderBlogPosts} />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
