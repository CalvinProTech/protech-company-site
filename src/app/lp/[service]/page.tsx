import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import LandingPageForm from '@/components/forms/LandingPageForm';
import { FAQSection } from '@/components/sections/FAQSection';

const SERVICES: Record<
  string,
  {
    headline: string;
    subheadline: string;
    bullets: string[];
    defaultService: string;
    badges?: string[];
    costSection?: { heading: string; body: string };
    stormSection?: { heading: string; body: string };
    financingSection?: { heading: string; body: string };
    faqs?: { question: string; answer: string }[];
  }
> = {
  'roof-replacement': {
    headline: 'Roof Replacement — Free Quote in 60 Seconds',
    subheadline:
      'Master Elite Certified. Licensed in 9 states. 5-star rated on Google.',
    bullets: [
      '25-year manufacturer warranty included',
      '$0 down financing available',
      'Free satellite roof measurement',
    ],
    defaultService: 'roof-replacement',
  },
  'roof-replacement-baltimore': {
    headline: 'Maryland Roof Replacement — Free, No-Pressure Inspection',
    subheadline:
      'Maryland licensed & insured — MHIC No. 168264. Serving Baltimore, Annapolis, Columbia, Towson, Bel Air, Westminster & communities across Maryland.',
    bullets: [
      'Free, no-pressure roof inspection — see your exact price',
      '$0 down financing available',
      'Storm or hail damage? We document it for your insurance claim',
      '25-year manufacturer warranty included',
      'Maryland licensed & insured — MHIC No. 168264',
    ],
    defaultService: 'roof-replacement',
    badges: ['500+ Roofs Completed', 'Licensed & Insured'],
    costSection: {
      heading: 'What Does a Roof Replacement Cost in Maryland?',
      body: 'Every roof is different — price depends on your roof size, pitch, materials, and access. The only honest number comes from seeing yours. Get your exact price with a free, no-obligation inspection, and ask about $0-down financing.',
    },
    stormSection: {
      heading: 'Storm or Hail Damage? We Handle the Paperwork.',
      body: 'Maryland hail and wind can damage a roof without obvious signs. We inspect for free, document any damage in detail, and work directly with your insurance company on your claim. No pressure — just an honest assessment.',
    },
    financingSection: {
      // Lender ad-compliant language (Sunlight Do's & Don'ts): no "fast/instant
      // approval", no "as low as $X/mo", no "same-as-cash".
      heading: 'Roof Financing Available — $0 Down',
      body: 'Spread the cost of your new roof with flexible financing through our lending partners. $0 down with multiple repayment options may be available, and pre-qualification uses no hard credit pull. Ask about your options during your free inspection.',
    },
    faqs: [
      {
        question: 'How much does a new roof cost in Maryland?',
        answer:
          'Every roof is different — cost depends on size, pitch, materials, and access. A free, no-obligation inspection gives you your exact price, and $0-down financing options may be available.',
      },
      {
        question: 'Does homeowners insurance cover roof replacement?',
        answer:
          'Often, when the damage is storm- or hail-related. We inspect for free, document the damage in detail, and work directly with your insurance company. Your insurer makes the final coverage decision.',
      },
      {
        question: 'Do you offer roof financing?',
        answer:
          'Yes — flexible financing is available through our lending partners, with $0-down repayment options and pre-qualification that uses no hard credit pull. Ask during your inspection.',
      },
      {
        question: 'How long does a roof last?',
        answer:
          'Most asphalt-shingle roofs last about 20–30 years depending on material, ventilation, and weather. During your free inspection we’ll tell you honestly where yours stands.',
      },
      {
        question: 'When should I replace my roof?',
        answer:
          'Common signs include missing or curling shingles, granule loss in your gutters, active leaks, and age beyond about 20 years. A free inspection settles whether repair or replacement makes more sense.',
      },
      {
        question: 'Are you licensed in Maryland?',
        answer:
          'Yes — ProTech is Maryland licensed and insured, MHIC No. 168264. You can verify our license anytime with the Maryland Home Improvement Commission.',
      },
    ],
  },
  'roof-repair': {
    headline: 'Roof Repair — Fast, Reliable Service',
    subheadline:
      'Licensed & insured pros. Same-day estimates. 5-star Google rating.',
    bullets: [
      'Emergency and scheduled repairs',
      'Storm damage specialists',
      'Free inspection with every repair quote',
    ],
    defaultService: 'roof-repair',
  },
  'storm-damage': {
    headline: 'Storm Damage? We Handle Everything',
    subheadline:
      'Insurance claim experts. Free damage assessment. Licensed in 9 states.',
    bullets: [
      'We work directly with your insurance',
      'Free storm damage inspection',
      '$0 out-of-pocket if covered',
    ],
    defaultService: 'storm-damage',
  },
  'free-estimate': {
    headline: 'Free Roof Estimate — No Obligation',
    subheadline:
      'Master Elite Certified. 500+ roofs completed. Financing available.',
    bullets: [
      'Satellite-powered instant measurement',
      'Licensed & insured in 9 states',
      'Call back within 5 minutes',
    ],
    defaultService: '',
  },
  financing: {
    // Language constrained by lender ad-compliance (Sunlight Do's & Don'ts) —
    // no "fast/instant approval", no "as low as $X/mo", no "same-as-cash".
    headline: '$0 Down Roof Financing Available',
    subheadline:
      'Replace your roof with no down payment required. Licensed in 9 states. 5-star rated on Google.',
    bullets: [
      '$0 down — multiple repayment options may be available',
      'Pre-qualification with no hard credit pull',
      '25-year manufacturer warranty included',
    ],
    defaultService: 'roof-replacement',
  },
  'emergency-repair': {
    headline: 'Emergency Roof Repair — Same-Day Service',
    subheadline:
      'Leaks, storm damage, missing shingles — we respond fast. Licensed & insured.',
    bullets: [
      'Same-day emergency response',
      'Free damage assessment',
      'Storm & insurance claim specialists',
    ],
    defaultService: 'roof-repair',
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  if (service === 'roof-replacement-baltimore') {
    return {
      title: 'Maryland Roof Replacement — Free Estimate',
      description:
        'Get a free roof replacement estimate across Maryland — Baltimore, Annapolis, Columbia & nearby. Maryland licensed & insured — MHIC No. 168264.',
      robots: { index: false, follow: false },
    };
  }
  return {
    title: 'Free Roof Estimate',
    description:
      'Get a free roofing estimate in 60 seconds. Licensed, insured, 5-star rated. Serving TX, KY, MO, OH, PA, MD, WV, SC & IN.',
    robots: { index: false, follow: false },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const config = SERVICES[service];
  if (!config) notFound();

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero + Form Section */}
      <section className="from-primary-900 to-primary-800 bg-gradient-to-br px-4 py-12 lg:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Headline + Bullets */}
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-3xl leading-tight font-bold lg:text-4xl xl:text-5xl">
              {config.headline}
            </h1>
            <p className="text-primary-200 mt-4 text-lg">
              {config.subheadline}
            </p>
            <ul className="mt-6 space-y-3">
              {config.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <svg
                    className="text-accent-400 mt-0.5 h-5 w-5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-primary-100">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white">
                <span className="text-yellow-400">★★★★★</span>
                <span>5.0 on Google</span>
              </div>
              {(config.badges ?? [
                '500+ Roofs Completed',
                'Master Elite Certified',
              ]).map((badge) => (
                <div
                  key={badge}
                  className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div id="lead-form" className="scroll-mt-4">
            <LandingPageForm defaultService={config.defaultService} />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-primary-900 text-center text-2xl font-bold">
            What Our Customers Say
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: 'Maria O.',
                location: 'Tampa, FL',
                text: 'ProTech replaced our entire roof in one day. Professional crew, great communication, and the financing made it affordable. Highly recommend!',
              },
              {
                name: 'James R.',
                location: 'Charlotte, NC',
                text: 'They handled our insurance claim from start to finish. We paid nothing out of pocket. Roof looks amazing and they cleaned up everything.',
              },
              {
                name: 'Georgia W.',
                location: 'Philadelphia, PA',
                text: 'Got quotes from 4 companies. ProTech had the best price AND the best warranty. The satellite estimate was spot-on accurate.',
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-neutral-700">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-primary-900 mt-3 text-sm font-semibold">
                  {review.name}
                </p>
                <p className="text-xs text-neutral-500">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost transparency — answers the #1 buyer question */}
      {config.costSection && (
        <section className="bg-neutral-50 px-4 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-primary-900 text-2xl font-bold">
              {config.costSection.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              {config.costSection.body}
            </p>
            <a
              href="#lead-form"
              className="bg-accent-500 hover:bg-accent-600 mt-6 inline-flex h-12 items-center justify-center rounded-xl px-8 font-bold text-white shadow-sm transition-all"
            >
              See My Price
            </a>
          </div>
        </section>
      )}

      {/* Financing — competitor-beating wedge (lender ad-compliant copy) */}
      {config.financingSection && (
        <section className="bg-white px-4 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-primary-900 text-2xl font-bold">
              {config.financingSection.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              {config.financingSection.body}
            </p>
          </div>
        </section>
      )}

      {/* Storm / insurance — unclaimed angle in the Baltimore market */}
      {config.stormSection && (
        <section className="bg-neutral-50 px-4 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-primary-900 text-2xl font-bold">
              {config.stormSection.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              {config.stormSection.body}
            </p>
            <a
              href="#lead-form"
              className="bg-accent-500 hover:bg-accent-600 mt-6 inline-flex h-12 items-center justify-center rounded-xl px-8 font-bold text-white shadow-sm transition-all"
            >
              Book My Free Storm Inspection
            </a>
          </div>
        </section>
      )}

      {/* What's Included */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-primary-900 text-center text-2xl font-bold">
            What&apos;s Included With Every Project
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Free Inspection',
                desc: 'Complete roof assessment at no cost',
              },
              {
                title: 'Written Estimate',
                desc: 'Transparent pricing, no hidden fees',
              },
              {
                title: 'Manufacturer Warranty',
                desc: 'Up to 25 years of coverage',
              },
              {
                title: 'Full Cleanup',
                desc: 'Property left cleaner than we found it',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-5 shadow-sm"
              >
                <h3 className="text-primary-900 font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — buyer-question relevance lifts landing-page quality score */}
      {config.faqs && config.faqs.length > 0 && (
        <FAQSection
          heading="Maryland Roofing — Frequently Asked Questions"
          faqs={config.faqs}
        />
      )}

      {/* Final CTA */}
      <section className="bg-primary-900 px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold">Ready to Get Your Free Quote?</h2>
          <p className="text-primary-300 mt-3">
            Call now and speak with a roofing specialist, or scroll up to fill
            out the form.
          </p>
          <a
            href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
            className="bg-accent-500 hover:bg-accent-600 mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-xl px-10 text-lg font-bold text-white shadow-md transition-all"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Call {SITE_CONFIG.defaultPhone}
          </a>
          <p className="text-primary-400 mt-3 text-sm">
            Mon–Fri 9AM–5PM ET &middot; Sat 9AM–2PM
          </p>
        </div>
      </section>
    </div>
  );
}
