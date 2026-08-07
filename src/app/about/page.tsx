import type { Metadata } from 'next';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { CTABanner } from '@/components/sections/CTABanner';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'About — Licensed in 9 States, Tampa-HQ',
    description:
      'ProTech Roofing — Tampa-headquartered, licensed and insured across nine states, with flexible financing and full insurance-claim assistance. Meet our team and verify our licenses.',
    path: '/about',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

const stats = [
  { value: SITE_CONFIG.statesLicensed, label: 'States Licensed' },
  { value: String(SITE_CONFIG.googleRating), label: 'Google Rating' },
  { value: SITE_CONFIG.yearsExperience, label: 'Tampa-Headquartered' },
  { value: '$0', label: 'Down Financing' },
];

// 2026-08-07 (Calvin): the previous four cards claimed GAF Master Elite,
// Owens Corning Preferred and NRCA membership. ProTech holds none of them.
// Everything below is verifiable by a homeowner from an independent source.
const certifications = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed in every state we operate, carrying general liability and workers\u2019 compensation coverage.',
  },
  {
    icon: CheckCircle,
    title: 'Verifiable License Numbers',
    description:
      'Our license number for each state is published on that state\u2019s page \u2014 check any of them with the issuing board before you sign.',
  },
  {
    icon: Award,
    title: `${SITE_CONFIG.googleRating}\u2605 on Google`,
    description: `Rated ${SITE_CONFIG.googleRating} stars across ${SITE_CONFIG.reviewCount}+ verified homeowner reviews.`,
  },
  {
    icon: Shield,
    title: 'Written, Itemized Estimates',
    description:
      'Free inspection and a written scope of work before anything is signed \u2014 no obligation, no pressure.',
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
                Too many roofers in our markets sell pressure tactics, quote a
                number they never put in writing, and disappear after the
                deposit clears. We built ProTech to be the opposite — a
                Tampa-headquartered contractor with transparent, line-item
                pricing and a real claim-assistance practice that homeowners can
                actually rely on when a storm hits.
              </p>
              <p>
                We&apos;re a young company that grew quickly because the model
                works. We install through vetted local crews in each state we
                serve, so the team that shows up to your home is from your area
                — not flown in from out of state. Every crew works under our
                license, our insurance, and our workmanship standards, and we
                stay the single point of accountability from first inspection to
                final invoice. We pull the permits, manage the insurance-claim
                file end-to-end, and back every install with our workmanship
                guarantee. The shingles we install carry the manufacturer&apos;s
                own limited warranty, which we register for you.
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
