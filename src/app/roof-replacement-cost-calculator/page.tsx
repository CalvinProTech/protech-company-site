import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, DollarSign, Home, Shield, ArrowRight } from 'lucide-react';

import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';
import InstantPriceEstimate from '@/components/forms/InstantPriceEstimate';

// Semrush data (May 2026, US database) drove this page's existence and structure:
//   - "how much does it cost to replace a roof": 4,400/mo
//   - "how much does a roof replacement cost":   1,900/mo
//   - "roof replacement cost calculator":         1,600/mo
//   - "how much does roof replacement cost":        590/mo
//   - "how much cost to replace roof":              480/mo
//   - "what is the average cost to replace a roof": 390/mo
// Total addressable: ~9,000+ monthly searches at ~$7 CPC.
// Page mixes the existing satellite-measurement widget with cost-guide copy
// to capture both tool-intent and informational-intent queries.

export const metadata: Metadata = createPageMetadata({
  title: 'Roof Replacement Cost Calculator — Free Instant Estimate',
  description:
    'Free roof replacement cost calculator. Get a satellite-powered estimate in seconds plus a full 2026 cost guide covering shingle, metal, and tile pricing across seven states.',
  path: '/roof-replacement-cost-calculator',
  absolute: true,
});

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Roof Replacement Cost Calculator',
    href: '/roof-replacement-cost-calculator',
  },
];

const costFaqs = [
  {
    question: 'How much does it cost to replace a roof?',
    answer:
      'In 2026, a full roof replacement on a typical 2,000 sq ft home costs $9,000 to $25,000 depending on materials and complexity. Asphalt shingle is the most affordable at $3.50 to $7.00 per square foot installed. Concrete tile runs $9 to $15 per square foot. Standing-seam metal is $10 to $18 per square foot. Coastal homes, steep pitches, and complex roof geometries add 10 to 30 percent. Insurance claims often cover most of the cost when damage is documented properly.',
  },
  {
    question: 'How much does a roof replacement cost in Tampa Bay, Florida?',
    answer:
      'Tampa Bay roof replacement costs are slightly above the national average due to coastal building-code requirements and salt-air-rated materials. Typical pricing in 2026: asphalt shingle $9,000 to $18,000 on a 2,000 sq ft home, concrete tile $20,000 to $35,000, standing-seam metal $22,000 to $40,000. Florida wind-mitigation requirements (secondary water barrier, ring-shank nails, enhanced fastening) add roughly $1,500 to a shingle install but qualify most homeowners for 25 to 45 percent off windstorm insurance — usually paying for itself within 5 years.',
  },
  {
    question: 'What factors affect roof replacement cost the most?',
    answer:
      'Square footage drives the headline number, but the cost-per-square-foot multiplier moves significantly based on: material choice (asphalt vs tile vs metal), roof pitch (steeper roofs cost 15 to 30 percent more to install safely), number of facets and valleys (more cuts and flashing = more labor), tear-off layers (one layer is standard, two layers adds disposal and labor), and code upgrades like decking replacement, hurricane straps, or secondary water barrier in high-velocity wind zones like coastal Florida.',
  },
  {
    question: 'What is the average cost to replace a roof?',
    answer:
      'The national average roof replacement in 2026 is approximately $11,500 for a single-family home (about $5.50 per square foot installed for asphalt shingle on a 2,000 sq ft house). Regional variation is significant: coastal Florida and the Northeast cost 15 to 25 percent above the average, while the Midwest and parts of the South run 5 to 15 percent below. Material upgrades to metal or tile push the total to $18,000 to $40,000 on the same home.',
  },
  {
    question: 'How accurate is an instant roof replacement cost calculator?',
    answer:
      'Our calculator uses satellite-measured roof area, pitch, and complexity from Google Maps imagery to produce a price range that is typically within 10 to 15 percent of the final quote on a standard asphalt shingle replacement. Variables we cannot see from above — like decking condition, attic ventilation, existing layers, and HOA material requirements — adjust the final number during the on-site inspection. The estimate is a strong starting point for budgeting and financing conversations.',
  },
  {
    question: 'Can I get financing for a roof replacement?',
    answer:
      'Yes. ProTech Roofing partners with Hearth and GreenSky for $0-down financing on roof replacements, with terms up to 15 years and monthly payments starting around 0.6 percent of the project total. Soft-credit pre-qualification does not impact your credit score. Many homeowners pair financing with insurance proceeds when storm damage covers part of the project — we coordinate both at no charge.',
  },
];

const howToSteps = [
  {
    title: 'Enter your home address',
    description:
      'We use Google satellite imagery to pull your roof square footage, pitch, number of facets, and overall complexity in seconds. No physical measurement required.',
  },
  {
    title: 'See your instant price range',
    description:
      'Our calculator returns a low / mid / high price estimate based on 2026 materials and labor for your region. You see the math: square footage × material cost-per-foot, adjusted for pitch and complexity.',
  },
  {
    title: 'Compare financing options',
    description:
      'See your estimated monthly payment with Hearth and GreenSky financing. Soft-credit pre-qualification takes 60 seconds and does not affect your credit score.',
  },
  {
    title: 'Schedule a free on-site inspection',
    description:
      'A roofing specialist visits to verify the satellite data, evaluate decking condition, check for existing damage, and lock in your final quote. Inspection is free with no obligation to proceed.',
  },
];

const materialPricing = [
  {
    material: 'Asphalt Shingle',
    perSqFt: '$3.50 – $7.00',
    typicalHome: '$9,000 – $18,000',
    lifespan: '15 – 25 years',
    notes: 'Most common in Tampa Bay and across all nine ProTech states. GAF Timberline HDZ is the architectural-grade default.',
  },
  {
    material: 'Concrete Tile',
    perSqFt: '$9.00 – $15.00',
    typicalHome: '$20,000 – $35,000',
    lifespan: '30 – 50 years',
    notes: 'Heavy and beautiful — but requires reinforced framing on most homes. Common on older South Tampa, Snell Isle, and historic-district properties.',
  },
  {
    material: 'Standing-Seam Metal',
    perSqFt: '$10.00 – $18.00',
    typicalHome: '$22,000 – $40,000',
    lifespan: '40+ years',
    notes: 'Excellent for hurricane wind resistance and lowest lifetime cost-per-year. Premium aesthetic on modern and coastal homes.',
  },
  {
    material: 'Clay Tile',
    perSqFt: '$12.00 – $22.00',
    typicalHome: '$26,000 – $48,000',
    lifespan: '50 – 100 years',
    notes: 'Authentic Mediterranean / Spanish look common on older Florida homes. Highest upfront cost; longest lifespan.',
  },
  {
    material: 'TPO Flat Roof',
    perSqFt: '$5.50 – $10.00',
    typicalHome: '$11,000 – $22,000',
    lifespan: '20 – 25 years',
    notes: 'For low-slope (<3/12) roofs. Reflective white membrane reduces cooling costs in Florida summers.',
  },
];

const costFactors = [
  {
    icon: Home,
    title: 'Roof size and pitch',
    description:
      'Larger and steeper roofs cost more — both for material and for the safety equipment needed to install them. A steep 12/12 pitch can add 25 to 40 percent vs a standard 4/12 pitch.',
  },
  {
    icon: Calculator,
    title: 'Material choice',
    description:
      'Asphalt shingle is the affordable workhorse; metal and tile cost 2 to 4 times more but last 2 to 3 times longer. Coastal homes should upgrade fasteners and flashing to corrosion-resistant grade regardless of primary material.',
  },
  {
    icon: Shield,
    title: 'Code requirements',
    description:
      'Florida high-velocity wind zones require secondary water barrier, ring-shank nails, and enhanced edge fastening. These add roughly $1,500 to a shingle install but unlock 25 to 45 percent off windstorm insurance — usually paying for itself in 3 to 5 years.',
  },
  {
    icon: DollarSign,
    title: 'Existing condition',
    description:
      'Deteriorated decking, multiple existing layers, damaged flashing, or compromised attic ventilation all add to the final number. We document all of this during the free on-site inspection so there are no mid-job surprises.',
  },
];

export default function RoofReplacementCostCalculatorPage() {
  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={costFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Get a Roof Replacement Cost Estimate',
            description:
              'Get an accurate roof replacement cost estimate using satellite measurement and compare financing options before scheduling an on-site inspection.',
            totalTime: 'PT5M',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: '0',
            },
            step: howToSteps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.description,
            })),
          }),
        }}
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero + Calculator */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Roof Replacement Cost Calculator
            </h1>
            <p className="mt-4 text-lg text-primary-200">
              Free instant estimate powered by satellite roof measurement.
              Get your price range in seconds, then compare 2026 material
              costs and financing options below.
            </p>
            <div className="mt-8">
              <InstantPriceEstimate />
            </div>
          </div>
        </div>
      </section>

      {/* Average Cost Section — targets "average cost to replace a roof" intent */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              How Much Does a Roof Replacement Cost?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              In 2026, a full roof replacement on a typical 2,000 square foot
              single-family home costs between{' '}
              <strong>$9,000 and $25,000</strong> depending on materials,
              complexity, and region. Asphalt shingle — the most common
              residential roofing material — runs $3.50 to $7.00 per square foot
              installed. Premium materials like standing-seam metal and concrete
              tile push costs into the $20,000 to $40,000 range on the same
              home.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              Tampa Bay and coastal Florida pricing typically runs 10 to 20
              percent above the national average because of high-velocity wind
              zone code requirements, salt-air-rated materials, and the longer
              install windows hurricane season forces. Most homeowners offset
              this with the 25 to 45 percent windstorm insurance discount that
              comes with a Florida wind-mitigation inspection on a
              code-compliant new roof.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {costFactors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div
                    key={factor.title}
                    className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
                  >
                    <Icon className="h-8 w-8 text-accent-500" />
                    <h3 className="mt-4 text-lg font-semibold text-primary-900">
                      {factor.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                      {factor.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Material Pricing Table */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              2026 Roof Replacement Cost by Material
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Pricing reflects ProTech Roofing&apos;s typical 2026 install
              costs across Florida and our other eight service states. Final
              quote depends on roof complexity, decking condition, and local
              code requirements.
            </p>

            <div className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Material</th>
                    <th className="px-6 py-4 font-semibold">Cost / Sq Ft</th>
                    <th className="px-6 py-4 font-semibold">
                      Typical 2,000 sq ft Home
                    </th>
                    <th className="px-6 py-4 font-semibold">Lifespan</th>
                  </tr>
                </thead>
                <tbody>
                  {materialPricing.map((row, i) => (
                    <tr
                      key={row.material}
                      className={
                        i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                      }
                    >
                      <td className="px-6 py-4 font-semibold text-primary-900">
                        {row.material}
                      </td>
                      <td className="px-6 py-4 text-neutral-700">
                        {row.perSqFt}
                      </td>
                      <td className="px-6 py-4 text-neutral-700">
                        {row.typicalHome}
                      </td>
                      <td className="px-6 py-4 text-neutral-700">
                        {row.lifespan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {materialPricing.map((row) => (
                <div
                  key={`${row.material}-note`}
                  className="rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <h3 className="text-sm font-semibold text-primary-900">
                    {row.material}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    {row.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section — links out to Hearth + GreenSky per strategy */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              $0 Down Roof Replacement Financing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Roof replacement is one of the largest home-maintenance costs a
              homeowner faces — and the one with the shortest decision window
              once leaks start. ProTech partners with two industry-leading
              financing platforms so most projects can move forward without
              upfront cash:
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-accent-500 bg-accent-50 p-6">
                <h3 className="text-xl font-semibold text-primary-900">
                  Hearth Financing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  Soft-pull pre-qualification in 60 seconds. Terms up to 15
                  years. Loans from $1,000 to $250,000. No prepayment
                  penalties. Approved homeowners typically pay 0.6 to 1.2
                  percent of project cost per month.
                </p>
                <Link
                  href="/financing"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-700 transition-colors hover:text-accent-800"
                >
                  See Hearth options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl border-2 border-primary-700 bg-primary-50 p-6">
                <h3 className="text-xl font-semibold text-primary-900">
                  GreenSky Financing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  Promotional 0 percent intro APR options available on
                  qualifying terms. Loans up to $65,000. Decisions in minutes.
                  Popular for storm-damage repairs not fully covered by
                  insurance.
                </p>
                <Link
                  href="/financing"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
                >
                  See GreenSky options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              Both lenders use soft-credit pre-qualification that does not
              affect your credit score. Calling ProTech first lets us
              coordinate financing with insurance proceeds if your project
              involves storm damage.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Pricing — Tampa Bay focus */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Roof Replacement Cost in Tampa Bay
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Tampa Bay roof replacement costs run slightly above the national
              average. The Florida Building Code high-velocity wind zone
              requirements — secondary water barrier, ring-shank nails,
              enhanced edge fastening — add roughly $1,500 to a standard
              asphalt shingle install but unlock 25 to 45 percent off
              windstorm insurance for most homeowners after a wind-mitigation
              inspection. Coastal homes within 5 miles of the bay or Gulf
              should also upgrade to corrosion-resistant fasteners and metal
              flashing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { city: 'Tampa', slug: '/locations/tampa-fl' },
                { city: 'St. Petersburg', slug: '/locations/florida/st-petersburg' },
                { city: 'Clearwater', slug: '/locations/florida/clearwater' },
                { city: 'Brandon', slug: '/locations/florida/brandon' },
              ].map((c) => (
                <Link
                  key={c.city}
                  href={c.slug}
                  className="group rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-primary-900">
                    Roofing in {c.city}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500">
                    Local pricing, codes, and neighborhoods
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent-500 transition-colors group-hover:text-accent-600">
                    View {c.city} page
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        heading="Roof Replacement Cost — Frequently Asked Questions"
        subtitle="The questions Tampa Bay and nine-state homeowners ask most often"
        faqs={costFaqs}
      />

      {/* CTA Banner */}
      <CTABanner
        heading="Ready for Your Free On-Site Estimate?"
        subtext="The calculator is a strong starting point. A free on-site inspection locks in your exact quote, accounting for decking condition and code requirements."
        phone={SITE_CONFIG.defaultPhoneRaw}
      />
    </>
  );
}

