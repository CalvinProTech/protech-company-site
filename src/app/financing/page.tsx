import type { Metadata } from 'next';
import Link from 'next/link';
import {
  DollarSign,
  ClipboardCheck,
  CreditCard,
  Hammer,
  Phone,
  CheckCircle,
} from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { financingFaqs } from '@/lib/faqs';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { FAQSection } from '@/components/sections/FAQSection';
import FAQSchema from '@/components/seo/FAQSchema';
import { CTABanner } from '@/components/sections/CTABanner';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Roofing Financing Options | Affordable Monthly Payments | ProTech Roofing',
    description:
      'Affordable roofing with flexible financing from ProTech Roofing. Roof replacement starting at $89/month. Apply in 10 minutes. Multiple loan options available.',
    path: '/financing',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Financing', href: '/financing' },
];

const paymentPlans = [
  {
    name: 'Roof Repair',
    monthlyPayment: '$49',
    description: 'Minor to moderate repairs, flashing, and leak fixes.',
    features: [
      'Loans from $1,000 to $10,000',
      'Terms up to 5 years',
      'Fast approval in 24 hours',
      '5-year workmanship warranty',
    ],
  },
  {
    name: 'Roof Replacement',
    monthlyPayment: '$89',
    description: 'Standard asphalt shingle replacement for most homes.',
    popular: true,
    features: [
      'Loans from $8,000 to $25,000',
      'Terms up to 12 years',
      'Same-as-cash options available',
      'Lifetime workmanship warranty',
    ],
  },
  {
    name: 'Premium Replacement',
    monthlyPayment: '$129',
    description: 'Metal, tile, or luxury shingle upgrades and large projects.',
    features: [
      'Loans from $15,000 to $50,000',
      'Terms up to 15 years',
      'Competitive fixed rates',
      'Lifetime workmanship warranty',
    ],
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    step: '1',
    title: 'Apply in Minutes',
    description:
      'Fill out a short application online or during your free estimate appointment. Pre-qualification does not affect your credit score.',
  },
  {
    icon: CreditCard,
    step: '2',
    title: 'Get Approved',
    description:
      'Receive a financing decision within 24 hours. Our lending partners work with all credit profiles to find a solution that fits your budget.',
  },
  {
    icon: Hammer,
    step: '3',
    title: 'Roof Gets Done',
    description:
      'Once approved, we schedule your project. Payments do not begin until the work is completed and you are fully satisfied with the results.',
  },
];

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={financingFaqs} />

      {/* Hero Section */}
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
              Protect your home now and pay over time. Monthly payments starting
              as low as $49/month with approved credit.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/free-estimate"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-accent-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-accent-600"
              >
                Get Your Free Estimate
              </Link>
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

      {/* Payment Plans */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Payment Examples
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Estimated monthly payments based on approved credit. Actual rates
              and terms may vary.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {paymentPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-lg border-2 p-8 ${
                  plan.popular
                    ? 'border-accent-500 bg-white shadow-xl'
                    : 'border-neutral-200 bg-white shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-lg bg-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-primary-900">
                    {plan.monthlyPayment}
                  </span>
                  <span className="text-lg text-neutral-500">/mo</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-neutral-700"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-estimate"
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-base font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-accent-500 text-white hover:bg-accent-600'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Check Your Rate
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Getting financing for your roof is simple and straightforward.
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

      {/* Financing FAQ */}
      <FAQSection
        heading="Financing Questions"
        subtitle="Common questions about our roofing financing options."
        faqs={financingFaqs}
      />

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Get Started?"
        subtext="Apply for financing during your free estimate or call us to discuss your options."
      />
    </>
  );
}
