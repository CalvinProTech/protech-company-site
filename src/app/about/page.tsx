import type { Metadata } from 'next';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { CTABanner } from '@/components/sections/CTABanner';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'About ProTech Roofing | GAF Master Elite, Tampa-Headquartered',
    description:
      'ProTech Roofing — Tampa-headquartered, GAF Master Elite certified, serving nine states with in-house financing and full insurance-claim assistance. Meet our team and certifications.',
    path: '/about',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

const stats = [
  { value: 'Master', label: 'GAF Certified Elite' },
  { value: SITE_CONFIG.statesLicensed, label: 'States Served' },
  { value: 'In-House', label: 'Financing & Crews' },
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
      <section className="bg-primary-900 relative flex min-h-[400px] items-center">
        <div className="from-primary-900 via-primary-800 to-primary-700 absolute inset-0 bg-gradient-to-br" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
              About ProTech Roofing
            </h1>
            <p className="text-primary-200 mt-4 text-lg sm:text-xl md:mt-6 md:text-2xl">
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
            <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-left text-lg leading-relaxed text-neutral-700">
              <p>
                ProTech Roofing was founded in Tampa on a simple belief: every
                homeowner deserves honest, quality roofing work at a fair price.
                Too many roofers in our markets sell pressure tactics, hide
                behind subcontractors, and disappear after the deposit clears.
                We built ProTech to be the opposite — a Tampa-headquartered
                contractor with in-house crews, transparent pricing, and a real
                claim-assistance practice that homeowners can actually rely on
                when a storm hits.
              </p>
              <p>
                We&apos;re a young company that grew quickly because the model
                works. Our crews live and work locally in each state we serve,
                so the team that shows up to your home is from your area — not
                flown in from out of state. We pull our own permits, manage the
                full insurance-claim file end-to-end, and back every install
                with the GAF Golden Pledge warranty (50 years on materials, 25
                years on workmanship) plus our own workmanship guarantee.
              </p>
              <p>
                What sets us apart is communication. We explain every finding
                during inspections in plain language. We provide detailed,
                line-item estimates so there are no surprises. We handle
                insurance claims from documentation through supplement to final
                check. And we offer in-house financing — soft-pull
                pre-qualification, deferred-interest options, no prepayment
                penalty — so the right roof is never out of reach. When you
                choose ProTech, you&apos;re choosing a partner who will be there
                long after the last shingle is nailed down.
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
                <p className="text-primary-900 text-4xl font-bold md:text-5xl">
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
            <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
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
                <div className="bg-primary-100 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <cert.icon className="text-primary-700 h-7 w-7" />
                </div>
                <h3 className="text-primary-900 text-lg font-semibold">
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
