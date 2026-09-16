import { getAllStates, getLocationsByState } from './locations';

export interface FAQItem {
  question: string;
  answer: string;
}

const serviceAreaStates = getAllStates();
const serviceAreaSummary = serviceAreaStates
  .map(({ state, stateSlug }) => {
    const cities = getLocationsByState(stateSlug)
      .map((c) => c.city)
      .join(', ');
    return `${state} (${cities})`;
  })
  .join('; ');

export const generalFaqs: FAQItem[] = [
  {
    question: 'How long does it take to replace a roof?',
    answer:
      'Most residential roof replacements are completed in 1 to 2 days. The timeline depends on the size of the roof, the materials being installed, and whether structural repairs are needed during tear-off. Larger homes or complex roof designs with multiple valleys, dormers, or steep pitches may require up to 3 days. ProTech Roofing provides a specific timeline estimate after your free inspection so you can plan accordingly.',
  },
  {
    question: 'How do I know if my roof needs to be repaired or replaced?',
    answer:
      'A roof typically needs replacement when it is over 20 years old, has widespread shingle deterioration, or shows signs of structural sagging. Repairs are appropriate when damage is isolated to a small area and the rest of the roof is in solid condition. Key warning signs that indicate replacement include granule buildup in gutters, multiple active leaks, daylight visible through the attic, and curling or buckling shingles across large sections.',
  },
  {
    question: 'What roofing materials last the longest?',
    answer:
      'Metal roofing lasts 50 to 70 years, making it the longest-lasting mainstream residential option. Concrete and clay tile roofs last 40 to 60 years, while architectural asphalt shingles last 25 to 35 years. Material longevity also depends on proper installation, attic ventilation, and regional climate conditions. ProTech Roofing helps you balance lifespan, aesthetics, and budget to choose the best material for your home.',
  },
  {
    question: 'Does ProTech Roofing offer financing for roof replacement?',
    answer:
      'Yes, ProTech Roofing offers flexible financing options through multiple lending partners. Qualified homeowners can access plans with competitive fixed interest rates and multiple repayment terms. Promotional financing may be available for qualified borrowers. Financing applications take about 10 minutes, and you receive a decision within 24 hours, subject to credit approval.',
  },
  {
    question: 'Is ProTech Roofing licensed and insured?',
    answer:
      "Yes, ProTech Roofing is fully licensed in every state where we operate and carries comprehensive general liability insurance and workers' compensation coverage. Our license numbers are displayed on our state-specific service pages, and you can verify any of them directly with the issuing state board.",
  },
  {
    question: 'What areas does ProTech Roofing serve?',
    answer: `ProTech Roofing serves major metropolitan areas across ${serviceAreaStates.length} states nationwide. Our service areas include ${serviceAreaSummary}. Each location covers a 50-mile service radius.`,
  },
  {
    question: 'What warranty does ProTech Roofing provide?',
    answer:
      'ProTech Roofing provides a lifetime workmanship warranty on all full roof replacements, meaning if any installation defect causes a problem, we fix it at no cost for as long as you own the home. This is in addition to manufacturer material warranties that range from 25 to 50 years depending on the product line. Repairs carry a 5-year workmanship warranty. All warranty details are provided in writing at project completion.',
  },
  {
    question: 'How much does a new roof cost?',
    answer:
      'A new roof typically costs between $8,000 and $25,000 for a residential home, depending on the size, materials, and complexity of the project. Asphalt shingle roofs fall on the lower end while metal and tile roofs cost more upfront but deliver longer lifespans. ProTech Roofing provides free, detailed estimates with transparent line-item pricing so you know exactly what you are paying for before any work begins.',
  },
];

export const financingFaqs: FAQItem[] = [
  {
    question: 'What financing options are available for a new roof?',
    answer:
      'ProTech Roofing partners with multiple lending institutions to offer personal loans, home improvement loans, and promotional financing plans for roof replacement and repair. Fixed interest rates and multiple repayment terms are available. Approval amounts vary based on credit profile, but we work with borrowers across the credit spectrum to find a solution that fits their financial situation.',
  },
  {
    question: 'Can I finance a roof replacement with bad credit?',
    answer:
      'Yes, options exist for homeowners with less-than-perfect credit. ProTech Roofing works with lending partners that consider factors beyond credit score alone, including income stability and home equity. While interest rates may be higher for lower credit profiles, many homeowners still qualify. We encourage every homeowner to apply because pre-qualification does not affect your credit score.',
  },
  {
    question: 'How do I apply for roofing financing?',
    answer:
      'You can apply for financing during your free estimate appointment or online from our financing page. The application takes a few minutes, requires basic personal and financial information, and reaches multiple lending partners at once so you are not applying to lenders one by one. Once approved, financing terms are incorporated into your project agreement and payments begin after the work is completed to your satisfaction.',
  },
  {
    question: 'Does ProTech Roofing offer promotional financing?',
    answer:
      'Promotional financing options, including deferred-interest plans, may be available for qualified borrowers. Availability and terms depend on your credit profile and loan amount, and all financing is subject to credit approval. Ask your ProTech representative for the current offers and full terms and conditions.',
  },
  {
    question: 'Can I use insurance money and financing together for my roof?',
    answer:
      "Yes, many homeowners combine insurance claim proceeds with financing to cover their deductible or to upgrade materials beyond what insurance covers. For example, if your claim covers a standard shingle roof but you want to upgrade to metal, financing can cover the difference. ProTech Roofing's team coordinates with both your insurance company and lending partner to make the process seamless.",
  },
];
