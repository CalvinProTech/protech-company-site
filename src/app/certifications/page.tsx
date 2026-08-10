import type { Metadata } from 'next';
import {
  Shield,
  Award,
  FileText,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import { LICENSED_STATES, SITE_CONFIG } from '@/lib/constants';
import { STATE_LICENSE } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { Hero } from '@/components/sections/Hero';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';

// ─── 2026-08-07 rebuild (Calvin) ────────────────────────────────────────────
// This page previously claimed GAF Master Elite, Owens Corning Preferred,
// NRCA membership and BBB A+ accreditation, and invited homeowners to verify
// those on the manufacturers' own locators. ProTech holds NONE of them, so
// every one of those verification paths would have failed.
//
// The page is now built exclusively on things a homeowner can independently
// confirm. Do not add a credential here without a number, registry entry, or
// public record backing it.

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Licensing & Credentials — Verify Before You Sign',
    description:
      'ProTech Roofing is licensed and insured across the nine states we serve. See how roofing licensing works in your state, look up our license number, and verify us before you sign anything.',
    path: '/certifications',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Licensing & Credentials', href: '/certifications' },
];

// How roofing is regulated in each state we serve. Sourced from ProTech's
// 50-state licensing tracker (2026-08). 'state' = a state-level credential is
// required; 'local' = no state roofing license exists and work is authorized
// through city/county permits.
const LICENSING_MODEL: Record<string, 'state' | 'local'> = {
  pennsylvania: 'state',
  maryland: 'state',
  'west-virginia': 'state',
  missouri: 'state',
  'south-carolina': 'state',
  texas: 'local',
  ohio: 'local',
  kentucky: 'local',
  indiana: 'local',
};

const credentials = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'ProTech Roofing carries commercial general liability coverage and workers’ compensation on every job, in every state we serve. That protects you if something goes wrong on your property — not just us. Ask any contractor for a certificate of insurance before work begins; we will send ours without being chased.',
    benefits: [
      'General liability coverage',
      'Workers’ compensation on every crew',
      'Certificate of insurance on request',
      'Coverage verified before each project',
    ],
    bg: 'bg-white',
  },
  {
    icon: FileText,
    title: 'License Numbers You Can Look Up',
    description:
      'Where a state issues a roofing or home-improvement credential, we publish the number on that state’s page — not just a badge image. Take the number to the issuing board and confirm it is current and in good standing. If a contractor will not give you a number to check, that itself is the answer.',
    benefits: [
      'Numbers published, not just claimed',
      'Verifiable with the issuing state board',
      'Maryland: MHIC No. 168264',
      'Displayed on every local page',
    ],
    bg: 'bg-primary-50',
  },
  {
    icon: Award,
    title: `${SITE_CONFIG.googleRating}★ from Verified Homeowners`,
    description: `We hold a ${SITE_CONFIG.googleRating}-star Google rating across ${SITE_CONFIG.reviewCount}+ reviews from homeowners in the states we serve. Google reviews cannot be edited or removed by us, which is precisely why they are worth more than a badge we could design ourselves. Read them in full before you call.`,
    benefits: [
      `${SITE_CONFIG.googleRating} average rating`,
      `${SITE_CONFIG.reviewCount}+ verified reviews`,
      'Published on Google, not our own site',
      'Real homeowners, real projects',
    ],
    bg: 'bg-white',
  },
  {
    icon: CheckCircle,
    title: 'Written Scope Before You Sign',
    description:
      'Every ProTech estimate is a written, line-item scope of work: what is being torn off, what is going back on, what happens if we find rotten decking, and what it costs. Free inspection, no obligation, and no number that changes after the contract is signed. Our workmanship is guaranteed, and the shingles carry the manufacturer’s own limited warranty, which we register on your behalf.',
    benefits: [
      'Free inspection, no obligation',
      'Line-item written estimate',
      'Rotten-decking pricing agreed up front',
      'Workmanship guarantee in writing',
    ],
    bg: 'bg-primary-50',
  },
];

const faqs = [
  {
    question: 'Is ProTech Roofing licensed in my state?',
    answer:
      'ProTech Roofing serves Texas, Kentucky, Missouri, Ohio, Indiana, Pennsylvania, Maryland, West Virginia and South Carolina. How roofing is licensed varies a great deal between them: Maryland, West Virginia, Missouri and South Carolina issue state-level credentials, while Texas, Ohio, Kentucky and Indiana have no state roofing license at all and authorize work through city or county permits instead. Where a state issues a number, we publish it on that state’s page so you can check it with the issuing board yourself.',
  },
  {
    question: 'Does ProTech hold manufacturer certifications like GAF Master Elite?',
    answer:
      'No. ProTech Roofing is not currently a GAF Master Elite, Owens Corning Preferred, or similarly badged manufacturer-certified contractor, and we do not claim to be. Those programs are marketing tiers that manufacturers sell access to; they are not a license, and they are not a measure of installation quality. What matters for your roof is that the installer is licensed where licensing exists, properly insured, follows the manufacturer’s written installation instructions so your material warranty stays valid, and puts the scope in writing. We do all four, and you can verify each one.',
  },
  {
    question: 'What warranty do I actually get?',
    answer:
      'Two separate things, and it is worth knowing the difference. First, the shingles carry the manufacturer’s own limited warranty — a standard limited lifetime warranty on most architectural shingles — which covers defects in the material itself and which we register for you after installation. Second, ProTech guarantees its own workmanship: if the failure is down to how it was installed, we come back and fix it. Be cautious with any contractor advertising a 50-year non-prorated warranty as though it were standard; those enhanced programs carry conditions, and they are only worth what the company backing them is worth.',
  },
  {
    question: 'Why do certifications matter when choosing a roofer?',
    answer:
      'Less than the industry would like you to believe. A manufacturer badge tells you a contractor met that manufacturer’s volume and paperwork requirements — useful, but it is not independent verification of workmanship. The checks that actually protect you are cheaper and faster: confirm the state license number where one exists, ask for a current certificate of insurance naming your address, read the Google reviews, and insist on a written line-item scope before any deposit changes hands. A contractor who passes those four is a safer bet than one with a badge and none of them.',
  },
  {
    question: 'How do I verify ProTech before signing anything?',
    answer:
      'Please do, and here is exactly how. Take the license number from your state’s page to that state’s licensing board and confirm it is active. Ask us for a certificate of insurance and check the policy dates. Look up ProTech Roofing on Google and read the reviews, including any negative ones. Confirm the written estimate matches what the salesperson told you. We would rather you check all of it up front than have doubts halfway through a tear-off.',
  },
];

const benefitCards = [
  {
    icon: FileText,
    title: 'Nothing You Cannot Check',
    description:
      'Every credential on this page points at an independent source — a state board, an insurer, or Google. No badges you would have to take our word for.',
  },
  {
    icon: CheckCircle,
    title: 'Priced in Writing',
    description:
      'A line-item scope before any deposit, including what happens if we open the roof and find rotten decking. The number does not move after signing.',
  },
  {
    icon: Shield,
    title: 'Covered While We Work',
    description:
      'General liability and workers’ compensation on every crew, so an accident on your property does not become your problem.',
  },
];

export default function CertificationsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <Hero
        heading="Licensed, Insured, and Easy to Verify"
        subtitle="Most roofing sites lead with badges. This one leads with numbers you can look up before you sign anything — because that is what actually protects you."
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{
          text: `Call ${SITE_CONFIG.defaultPhone}`,
          href: `tel:${SITE_CONFIG.defaultPhoneRaw}`,
        }}
        showTrustBadges
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Credential detail sections */}
      {credentials.map((cred) => (
        <section key={cred.title} className={`${cred.bg} py-16 md:py-24`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div className="bg-primary-100 mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <cred.icon className="text-accent-500 h-8 w-8" />
                </div>
                <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
                  {cred.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                  {cred.description}
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-8">
                <h3 className="text-primary-900 mb-6 text-lg font-semibold">
                  What That Means
                </h3>
                <ul className="space-y-4">
                  {cred.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="text-accent-500 mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* State-by-state licensing */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
              How Roofing Licensing Works in Each State We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600">
              Roofing licensing is not national, and it is not consistent. Four
              of the nine states we serve issue no roofing license at all — work
              there is authorized through city and county permits. Here is the
              honest picture, state by state.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LICENSED_STATES.map((entry) => {
              const licenseNumber = STATE_LICENSE[entry.slug] ?? '';
              const model = LICENSING_MODEL[entry.slug];
              return (
                <div
                  key={entry.abbr}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <MapPin className="text-accent-500 h-5 w-5" />
                    </div>
                    <p className="text-primary-900 font-semibold">
                      {entry.name}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {licenseNumber ? (
                      <>
                        State credential:{' '}
                        <span className="text-primary-900 font-medium">
                          {licenseNumber}
                        </span>
                        {' — '}verify with the {entry.name} licensing board.
                      </>
                    ) : model === 'local' ? (
                      <>
                        {entry.name} issues no state roofing license. Work is
                        authorized through city and county permits, which we
                        pull for every job.
                      </>
                    ) : (
                      <>
                        State credential on file — request the number and we
                        will send it before you sign.
                      </>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What this means for you */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-primary-900 text-3xl font-bold md:text-4xl">
              What This Means for You
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-neutral-200 bg-white p-8 text-center"
              >
                <div className="bg-primary-100 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <card.icon className="text-accent-500 h-7 w-7" />
                </div>
                <h3 className="text-primary-900 text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="mt-3 text-neutral-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        heading="Licensing & Credentials FAQ"
        subtitle="Straight answers about licenses, warranties, and what certifications are actually worth"
        faqs={faqs}
      />

      {/* CTA */}
      <CTABanner
        heading="Check Us Out, Then Get Your Estimate"
        subtext="Free inspection, written line-item scope, and no obligation. Verify everything on this page first — we would rather you did."
        phone={SITE_CONFIG.defaultPhoneRaw}
      />
    </>
  );
}
