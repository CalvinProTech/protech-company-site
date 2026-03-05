import type { Metadata } from 'next';
import {
  Shield,
  Award,
  Building2,
  BadgeCheck,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import { getAllLocations } from '@/lib/locations';
import { createPageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { Hero } from '@/components/sections/Hero';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'GAF Master Elite Certified Roofing Contractor | ProTech Roofing',
    description:
      'ProTech Roofing is a GAF Master Elite certified contractor, Owens Corning Preferred, and NRCA member. Licensed in 14 states with lifetime warranties.',
    path: '/certifications',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Certifications', href: '/certifications' },
];

const certifications = [
  {
    icon: Shield,
    title: 'GAF Master Elite Contractor',
    description:
      'GAF Master Elite is the highest certification awarded by North America\'s largest roofing manufacturer. Only 2% of roofing contractors nationwide qualify for this distinction. Earning it requires a proven track record of quality installations, proper licensing, adequate insurance coverage, and a commitment to ongoing professional training. GAF Master Elite status unlocks the Golden Pledge warranty — a 50-year non-prorated material warranty plus 25 years of workmanship coverage — giving homeowners the strongest protection available in the roofing industry.',
    benefits: [
      '50-Year Golden Pledge warranty',
      'Factory-certified installation crews',
      'Priority access to new GAF products',
      'Annual recertification required',
    ],
    bg: 'bg-white',
  },
  {
    icon: Award,
    title: 'Owens Corning Preferred Contractor',
    description:
      'As an Owens Corning Preferred Contractor, ProTech Roofing is authorized to offer the Owens Corning Platinum Protection limited warranty. This designation is awarded only to contractors who have been verified for installation quality, sound business practices, and consistently high customer satisfaction scores. It ensures that every Owens Corning roof we install meets the manufacturer\'s exacting standards.',
    benefits: [
      'Platinum Protection warranty available',
      'Duration series shingle specialist',
      'Verified customer satisfaction standards',
      'Manufacturer-backed quality guarantee',
    ],
    bg: 'bg-primary-50',
  },
  {
    icon: Building2,
    title: 'NRCA Member',
    description:
      'ProTech Roofing is a proud member of the National Roofing Contractors Association, the leading trade association for roofing professionals in the United States. NRCA membership reflects our commitment to industry best practices, workplace safety standards, and continuing education for every member of our team.',
    benefits: [
      'Industry best practices commitment',
      'Continuing education requirements',
      'Safety-first workplace standards',
      'Code compliance expertise',
    ],
    bg: 'bg-white',
  },
  {
    icon: BadgeCheck,
    title: 'BBB Accredited Business',
    description:
      'ProTech Roofing holds an A+ rating from the Better Business Bureau. BBB accreditation means we meet their rigorous standards for trust, including honest advertising, transparent business practices, and responsive complaint resolution. Our A+ rating reflects our ongoing dedication to customer satisfaction and ethical business conduct.',
    benefits: [
      'A+ BBB rating',
      'Transparent business practices',
      'Responsive customer service',
      'Commitment to ethical standards',
    ],
    bg: 'bg-primary-50',
  },
];

const faqs = [
  {
    question: 'What is a GAF Master Elite contractor?',
    answer:
      'A GAF Master Elite contractor is a roofing professional who has earned the highest certification from GAF, North America\'s largest roofing manufacturer. Only 2% of all roofing contractors in the country qualify. To earn the designation, a contractor must demonstrate a proven installation track record, maintain proper state licensing and insurance, and commit to ongoing factory training. GAF Master Elite contractors are the only ones authorized to offer GAF\'s Golden Pledge warranty, which provides 50 years of non-prorated material coverage and 25 years of workmanship protection.',
  },
  {
    question: 'Why do certifications matter when choosing a roofer?',
    answer:
      'Certifications provide independent, third-party verification that a roofing contractor meets rigorous quality and professionalism standards. They ensure your contractor has been vetted for proper licensing, insurance, and installation training. Certified contractors also unlock extended manufacturer warranties that are not available through uncertified installers. In short, certifications give you quality assurance, access to the best warranty programs, and accountability backed by major manufacturers and industry associations.',
  },
  {
    question: 'What warranty do I get with a certified contractor?',
    answer:
      'With ProTech Roofing, you gain access to the strongest warranties in the industry. Our GAF Master Elite certification qualifies you for the Golden Pledge warranty, which includes 50 years of non-prorated material coverage and 25 years of workmanship coverage — backed directly by GAF, not just by the contractor. Our Owens Corning Preferred status unlocks the Platinum Protection limited warranty with similar extended coverage. These warranties far exceed what standard, non-certified contractors can offer.',
  },
  {
    question: 'Is ProTech Roofing licensed in my state?',
    answer:
      'ProTech Roofing is licensed and insured in 14 states: Florida, Georgia, Texas, Kentucky, Ohio, Delaware, Maryland, Virginia, Connecticut, Pennsylvania, North Carolina, South Carolina, West Virginia, and Tennessee. Each state license is current and verifiable through the respective state licensing board. If you are located in one of these states, we are ready to serve you.',
  },
  {
    question: 'How do I verify ProTech\'s certifications?',
    answer:
      'You can verify our certifications through several independent sources. Our GAF Master Elite status can be confirmed on the GAF website\'s contractor locator. Our BBB accreditation and A+ rating are listed on bbb.org. Our NRCA membership can be checked through the NRCA member directory. For state licensing, you can contact the relevant state licensing board using the license numbers listed on our website. We encourage homeowners to verify any contractor\'s credentials before signing a contract.',
  },
];

const benefitCards = [
  {
    icon: Shield,
    title: 'Extended Warranties',
    description:
      'Our certifications unlock manufacturer warranties up to 50 years non-prorated, far exceeding standard contractor warranties.',
  },
  {
    icon: CheckCircle,
    title: 'Verified Quality',
    description:
      'Every crew member is factory-trained and certified. Our work meets the highest manufacturer installation standards.',
  },
  {
    icon: Award,
    title: 'Peace of Mind',
    description:
      'Licensed, insured, and independently verified. Your investment is protected by both our warranty and manufacturer backing.',
  },
];

function getStateLicenses() {
  const locations = getAllLocations();
  const stateMap = new Map<
    string,
    { state: string; stateAbbr: string; licenseNumber: string }
  >();

  for (const loc of locations) {
    if (!stateMap.has(loc.stateAbbr)) {
      stateMap.set(loc.stateAbbr, {
        state: loc.state,
        stateAbbr: loc.stateAbbr,
        licenseNumber: loc.licenseNumber,
      });
    }
  }

  return Array.from(stateMap.values());
}

export default function CertificationsPage() {
  const stateLicenses = getStateLicenses();

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <Hero
        heading="GAF Master Elite Certified Roofing Contractor"
        subtitle="Only 2% of roofing contractors earn GAF Master Elite status. ProTech Roofing is licensed in 14 states and backed by industry-leading certifications."
        primaryCTA={{ text: 'Get Your Free Estimate', href: '/free-estimate' }}
        secondaryCTA={{ text: 'Call 1-866-308-2640', href: 'tel:18663082640' }}
        showTrustBadges
      />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Certifications Detail Sections */}
      {certifications.map((cert) => (
        <section key={cert.title} className={`${cert.bg} py-16 md:py-24`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <cert.icon className="h-8 w-8 text-accent-500" />
                </div>
                <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
                  {cert.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                  {cert.description}
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-8">
                <h3 className="mb-6 text-lg font-semibold text-primary-900">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {cert.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Licensed in 14 States */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              Licensed &amp; Insured in 14 States
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Every state license is current and verifiable through the
              respective licensing board.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {stateLicenses.map((entry) => (
              <div
                key={entry.stateAbbr}
                className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100">
                  <MapPin className="h-5 w-5 text-accent-500" />
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {entry.state}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {entry.licenseNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Certifications Mean for You */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              What Our Certifications Mean for You
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-neutral-200 bg-white p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <card.icon className="h-7 w-7 text-accent-500" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-neutral-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        heading="Certifications FAQ"
        subtitle="Common questions about our certifications and what they mean for your project"
        faqs={faqs}
      />

      {/* CTA Banner */}
      <CTABanner
        heading="Work with a Certified Roofing Contractor"
        subtext="Get a free, no-obligation estimate backed by industry-leading certifications and warranties."
        phone="18663082640"
      />
    </>
  );
}
