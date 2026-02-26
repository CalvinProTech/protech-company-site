import type { Metadata } from 'next';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { CTABanner } from '@/components/sections/CTABanner';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'About ProTech Roofing | Our Story, Team & Values',
    description:
      'Learn about ProTech Roofing — 20+ years of quality roofing across 14 states. Meet our team, certifications, and why 1,000+ homeowners trust us.',
    path: '/about',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '1,000+', label: 'Roofs Completed' },
  { value: '14', label: 'States Served' },
  { value: String(SITE_CONFIG.googleRating), label: 'Google Rating' },
];

const certifications = [
  {
    icon: Shield,
    title: 'GAF Master Elite',
    description:
      'Top 2% of roofers nationwide, certified to offer the best warranties in the industry.',
  },
  {
    icon: Award,
    title: 'Owens Corning Preferred',
    description:
      'Preferred contractor for Owens Corning, offering premium roofing products with enhanced warranties.',
  },
  {
    icon: CheckCircle,
    title: 'NRCA Member',
    description:
      'Active member of the National Roofing Contractors Association, committed to industry best practices.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed in every state we operate and carrying comprehensive liability and workers\u2019 comp coverage.',
  },
];


export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative flex min-h-[400px] items-center bg-primary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              About ProTech Roofing
            </h1>
            <p className="mt-4 text-lg text-primary-200 sm:text-xl md:mt-6 md:text-2xl">
              Protecting homes and families since day one. Honest work, fair
              prices, and craftsmanship you can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Founder Story Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-left text-lg leading-relaxed text-neutral-700">
              <p>
                ProTech Roofing was founded on a simple belief: every homeowner
                deserves honest, quality roofing work at a fair price. After
                years of watching homeowners get overcharged for subpar work or
                pressured into unnecessary replacements, our founder decided
                there had to be a better way. He assembled a team of
                experienced, like-minded professionals and built a company where
                integrity comes first and every customer is treated like a
                neighbor.
              </p>
              <p>
                Over the past two decades, that founding principle has guided
                every decision we make. We started as a small crew in a single
                city and grew through word of mouth, one satisfied homeowner at a
                time. Today, ProTech Roofing operates across 14 states with a
                team of certified professionals who share the same commitment to
                doing things right. We never cut corners on materials, we never
                skip steps in installation, and we never walk away from a project
                until the homeowner is completely satisfied.
              </p>
              <p>
                What sets us apart is not just our technical skill, but our
                approach to communication. We explain every finding during
                inspections in plain language. We provide detailed, line-item
                estimates so there are no surprises. We handle insurance claims
                from start to finish. And we back every project with the
                strongest warranties in the industry because we are confident in
                the work we deliver. When you choose ProTech Roofing, you are
                choosing a partner who will be there long after the last shingle
                is nailed down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-primary-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary-900 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-600 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Certifications & Credentials
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Industry-recognized credentials that back up our commitment to
              excellence.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <cert.icon className="h-7 w-7 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
