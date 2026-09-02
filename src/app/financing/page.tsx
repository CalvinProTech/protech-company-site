import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { financingFaqs } from '@/lib/faqs';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { FAQSection } from '@/components/sections/FAQSection';
import FAQSchema from '@/components/seo/FAQSchema';
import { CTABanner } from '@/components/sections/CTABanner';
import FinancingCalculator from '@/components/financing/FinancingCalculator';
import FinancingApplyLink from '@/components/financing/FinancingApplyLink';
import FinancingDisclosure from '@/components/financing/FinancingDisclosure';

// This page is the ONE door into financing, for two audiences at once:
//   1. a homeowner a ProTech rep just sent here from a quote call ("go to
//      protechroof.net/financing") — they want to APPLY, now, so the apply
//      CTA is the first button on the page;
//   2. an organic visitor researching "roof financing" — same door, plus the
//      estimate CTA at the bottom.
// One application (Enhancify, co-branded) shops multiple lenders off a soft
// pull, which is why there is deliberately NO menu of lender links: a lender
// menu makes homeowners choose blind, and each direct application is a hard
// pull. Every apply CTA renders through FinancingApplyLink — one URL, one
// analytics event, one data-finance-link marker the liveness monitor probes.
// Layout follows the house pattern (see /about): hero = H1 + one paragraph +
// buttons, no icon badge; sections alternate white / neutral-50 at py-16/24.

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Roofing Financing Options | Affordable Monthly Payments',
    description:
      'Affordable roofing with flexible financing from ProTech Roofing. Multiple loan options and repayment terms available. Apply online in minutes — checking your options does not affect your credit score.',
    path: '/financing',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Financing', href: '/financing' },
];

const steps = [
  {
    title: 'Apply in minutes',
    description:
      'Start the short online application from this page or during your free estimate. Pre-qualification does not affect your credit score.',
  },
  {
    title: 'See your options',
    description:
      'One application reaches multiple lending partners, so you see what you qualify for without applying to lenders one at a time. Our partners work with a wide range of credit profiles.',
  },
  {
    title: 'Roof gets done',
    description:
      'Once approved, we schedule your project. Payments do not begin until the work is completed and you are fully satisfied with the results.',
  },
];

const otherWays = [
  {
    title: 'Insurance proceeds',
    description:
      'After storm or hail damage, many homeowners pay for most of the roof through their claim and finance only the deductible or an upgrade. We work with your adjuster directly.',
    link: { label: 'How insurance claims work', href: '/services/insurance-claims' },
  },
  {
    title: 'Cash or check',
    description:
      'Prefer to pay outright? Tell your ProTech representative and the payment schedule goes into your project agreement. No application needed.',
  },
  {
    title: 'Already have an approval?',
    description:
      'If you hold an approval from a lender we work with, let your ProTech representative know and we will apply it to your project. There is no need to apply again.',
  },
];

const qualifications = [
  'You are the homeowner or authorized property owner',
  'Valid government-issued photo ID',
  'Proof of income (pay stubs, tax returns, or bank statements)',
  'Credit score of 580 or higher (options available for most credit profiles)',
  `Property located in one of our ${SITE_CONFIG.statesLicensed} service states`,
];

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={financingFaqs} />

      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center bg-primary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Affordable Roofing with Flexible Financing
            </h1>
            <p className="mt-4 text-lg text-primary-200 sm:text-xl md:mt-6 md:text-2xl">
              One short application reaches multiple lending partners. No down
              payment required, subject to credit approval. If your ProTech
              representative sent you here, this is where to apply.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <FinancingApplyLink
                section="hero"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-accent-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-accent-600"
              />
              <a
                href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-white px-8 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {SITE_CONFIG.defaultPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* How it works */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary-900 md:text-4xl">
            How It Works
          </h2>
          <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-12">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-primary-900 pt-6">
                <span className="text-sm font-semibold tracking-wide text-accent-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-primary-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Estimate Your Monthly Payment
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Adjust the numbers for an estimate, then apply to see the options
              you actually qualify for.
            </p>
          </div>
          <div className="mt-12">
            <FinancingCalculator />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
            Representative example: the monthly payment for a 15-year home
            improvement installment loan of $10,000 with an APR of 10.99% would be
            $113, for a total of approximately $20,340 over the 15-year term. No
            down payment required. Not all loan products will be available to all
            partners or all consumers.
          </p>
        </div>
      </section>

      {/* Other ways to pay */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary-900 md:text-4xl">
            Other Ways to Pay
          </h2>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-12">
            {otherWays.map((way) => (
              <div key={way.title} className="border-l-2 border-accent-500 pl-6">
                <h3 className="text-xl font-semibold text-primary-900">
                  {way.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {way.description}
                </p>
                {way.link && (
                  <Link
                    href={way.link.href}
                    className="mt-4 inline-block font-medium text-accent-600 underline-offset-4 hover:underline"
                  >
                    {way.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary-900 md:text-4xl">
            Who Qualifies for Financing?
          </h2>
          <p className="mt-4 text-center text-lg text-neutral-600">
            Most homeowners qualify. Here is what you need to get started.
          </p>
          <ul className="mt-10 space-y-4">
            {qualifications.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-success" />
                <span className="text-lg text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lender compliance disclosure */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FinancingDisclosure />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        heading="Financing Questions"
        subtitle="Common questions about our roofing financing options."
        faqs={financingFaqs}
      />

      {/* Organic visitors without a quote yet */}
      <CTABanner
        heading="Don't Have a Quote Yet?"
        subtext="Start with a free, no-obligation estimate. Financing is arranged as part of your project."
      />
    </>
  );
}
