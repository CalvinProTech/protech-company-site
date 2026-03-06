import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/metadata';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import { getAllProjects } from '@/lib/projects';
import { getAllPosts } from '@/lib/blog';

import { Hero } from '@/components/sections/Hero';
import InstantEstimateWidget from '@/components/forms/InstantEstimateWidget';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ProjectGalleryPreview } from '@/components/sections/ProjectGalleryPreview';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
import { PrimaryMarkets } from '@/components/sections/PrimaryMarkets';
import { LocationMap } from '@/components/sections/LocationMap';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { CTABanner } from '@/components/sections/CTABanner';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'ProTech Roofing | Licensed Roofing Contractor',
    description:
      'Expert roofing services across 14 states including FL, GA, TX, TN, WV, VA, PA, NC, SC, and more. Licensed, insured, and rated 5.0 stars. Roof replacement, repair, storm damage, and more. Get your free estimate today.',
    path: '/',
  });
}

export default function HomePage() {
  const featuredTestimonials = getFeaturedTestimonials(5);
  const allProjects = getAllProjects();
  const recentPosts = getAllPosts()
    .slice(0, 3)
    .map((post) => ({
      slug: post.frontmatter.slug,
      title: post.frontmatter.title,
      excerpt: post.frontmatter.excerpt,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      featuredImage: post.frontmatter.featuredImage,
    }));

  return (
    <>
      {/* Structured Data */}
      <LocalBusinessSchema type="homepage" />
      <OrganizationSchema />

      {/* Hero Section */}
      <Hero
        heading="Protect Your Home with America's Most Trusted Roofers"
        subtitle="Get your instant roof estimate in 60 seconds — powered by satellite technology."
        showTrustBadges={true}
      >
        <InstantEstimateWidget />
      </Hero>

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

      {/* Primary Markets */}
      <PrimaryMarkets />

      {/* Location Map */}
      <LocationMap />

      {/* Blog Preview */}
      <BlogPreview posts={recentPosts} />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
