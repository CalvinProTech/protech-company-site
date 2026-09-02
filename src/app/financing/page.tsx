import type { Metadata } from 'next';
import Link from 'next/link';
import {
  DollarSign,
  ClipboardCheck,
  CreditCard,
  Hammer,
  Phone,
  CheckCircle,
  ShieldCheck,
  Banknote,
  BadgeCheck,
} from 'lucide-react';
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
//      CTA is the first thing in the hero, not three scrolls down;
//   2. an organic visitor researching "roof financing" — they get the same
//      door plus the estimate CTA at the bottom.
// One application (Enhancify, co-branded) shops multiple lenders off a soft
// pull, which is why there is deliberately NO menu of lender links: a lender
// menu makes homeowners choose blind, and each direct application is a hard
// pull. Every apply CTA renders through FinancingApplyLink — one URL, one
// analytics event, one data-finance-link marker the liveness monitor probes.

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

const applyButtonClass =
  'inline-flex h-14 items-center justify-center rounded-lg bg-accent-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-accent-600';

const steps = [
  {
    icon: ClipboardCheck,
    step: '1',
    title: 'Apply in Minutes',
    description:
      'Start the short online application from this page or during your free estimate. Pre-qualification does not affect your credit score.',
  },
  {
    icon: CreditCard,
    step: '2',
    title: 'See Your Options',
    description:
      'One application reaches multiple lending partners, so you see the options you qualify for without applying to lenders one by one. Our partners work with a wide range of credit profiles.',
  },
  {
    icon: Hammer,
    step: '3',
    title: 'Roof Gets Done',
    description:
      'Once approved, we schedule your project. Payments do not begin until the work is completed and you are fully satisfied with the results.',
  },
];

const otherWays = [
  {
    icon: ShieldCheck,
    title: 'Insurance proceeds',
    description:
      'Storm or hail damage? Many homeowners pay for most of the roof through their claim and finance only the deductible or an upgrade. We work with your adjuster directly.',
    link: { label: 'How insurance claims work', href: '/services/insurance-claims' },
  },
  {
    icon: Banknote,
    title: 'Cash or check',
    description:
      'Prefer to pay outright? Tell your ProTech representative and we will set up the payment schedule in your project agreement — no application needed.',
  },
  {
    icon: BadgeCheck,
    title: 'Already approved with one of our lending partners?',
    description:
      'If you have an approval in hand from a lender we work with, let your ProTech representative know and we will apply it to your project. No need to apply again.',
  },
];

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={financingFaqs} />

      {/* Hero — the apply door comes first for the rep-sent homeowner */}
      <section className="relative flex min-h-[400px] items-center bg-primary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/20">
              <DollarSign className="h-8 w-8 text-accent-400" />
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Affordable Roofing with Flexible Financing
            </h1>
            <p className="mt-4 text-lg text-primary-200 sm:text-xl md:mt-6 md:text-2xl">
              Protect your home now and pay over time — no down payment
              required, subject to credit approval.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <FinancingApplyLink section="hero" className={applyButtonClass}>
                Apply for Financing →
              </FinancingApplyLink>
              <a
                href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-white px-8 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {SITE_CONFIG.defaultPhone}
              </a>
            </div>
            <p className="mt-6 max-w-2xl text-sm text-primary-300">
              Have a quote from ProTech? This is the page your representative
              sent you to. The application takes a few minutes, and checking
              your options does not affect your credit score.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* How It Works */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              One short application. Multiple lending partners. No guessing
              which lender to pick.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-lg bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment estimator + the apply door again */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Estimate Your Monthly Payment
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Adjust the numbers to see an estimate, then apply to see the
              options you actually qualify for.
            </p>
          </div>
          <FinancingCalculator />
          <p className="mt-6 text-center">
            <FinancingApplyLink
              section="calculator-below"
              label="Apply for Financing Now"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Apply for Financing Now →
            </FinancingApplyLink>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-neutral-500">
            Representative example: the monthly payment for a 15-year home
            improvement installment loan of $10,000 with an APR of 10.99% would be
            $113, for a total of approximately $20,340 over the 15-year term. No
            down payment required. Not all loan products will be available to all
            partners or all consumers.
          </p>
        </div>
      </section>

      {/* Other ways to pay — deliberately no lender-link menu */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Other Ways to Pay
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Financing is one option. These work too — on their own or
              combined with it.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {otherWays.map((way) => (
              <div key={way.title} className="rounded-lg bg-white p-8 shadow-sm">
                <way.icon className="mb-4 h-10 w-10 text-primary-600" />
                <h3 className="text-xl font-semibold text-primary-900">
                  {way.title}
                </h3>
                <p className="mt-3 text-neutral-600">{way.description}</p>
                {way.link && (
                  <Link
                    href={way.link.href}
                    className="mt-4 inline-block font-medium text-accent-600 hover:text-accent-700"
                  >
                    {way.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary-900 md:text-4xl">
            Who Qualifies for Financing?
          </h2>
          <p className="mt-4 text-center text-lg text-neutral-600">
            Most homeowners qualify. Here is what you need to get started.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              'You are the homeowner or authorized property owner',
              'Valid government-issued photo ID',
              'Proof of income (pay stubs, tax returns, or bank statements)',
              'Credit score of 580 or higher (options available for most credit profiles)',
              `Property located in one of our ${SITE_CONFIG.statesLicensed} service states`,
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-success" />
                <span className="text-lg text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lender compliance disclosure */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FinancingDisclosure />
        </div>
      </section>

      {/* Financing FAQ */}
      <FAQSection
        heading="Financing Questions"
        subtitle="Common questions about our roofing financing options."
        faqs={financingFaqs}
      />

      {/* Organic visitors without a quote yet */}
      <CTABanner
        heading="Don't Have a Quote Yet?"
        subtext="Start with a free, no-obligation estimate — financing is arranged as part of your project, and you can apply from this page any time."
      />
    </>
  );
}
