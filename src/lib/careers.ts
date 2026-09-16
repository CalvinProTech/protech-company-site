import { LICENSED_STATES } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Careers content
//
// One source of truth for the careers page. The role catalog is
// deliberately small: ProTech hires for the Tampa-run sales floor (remote
// seats) and for install crews, and nothing else is worth listing as an open
// position. Crews are NOT a resume hire — they route into the existing
// subcontractor onboarding flow (Subcontractor__c -> "Send Onboarding Form"
// -> eSignatures), which is started by hand in Salesforce.
// ---------------------------------------------------------------------------

export const CAREER_ROLES = ['inside-sales', 'install-crew'] as const;

export type CareerRoleSlug = (typeof CAREER_ROLES)[number];

/** How step 2 of the application behaves for a given role. */
export type ApplyKind = 'resume' | 'crew';

export type CareerRole = {
  slug: CareerRoleSlug;
  title: string;
  /** Short chip under the title — the single biggest qualifier. */
  qualifier: string;
  status: 'hiring-now' | 'always-open';
  employmentType: string;
  location: string;
  summary: string;
  looking: readonly string[];
  offer: readonly string[];
  applyKind: ApplyKind;
};

export const ROLES: readonly CareerRole[] = [
  {
    slug: 'inside-sales',
    title: 'Inside Sales Representative',
    qualifier: 'No roofing experience required',
    status: 'hiring-now',
    employmentType: 'Full-time',
    location: 'Remote (US)',
    summary:
      'You work homeowner leads by phone — quoting roof replacements, walking people through financing, and closing. We run the dialer and supply the leads; you run the conversation.',
    looking: [
      'Comfortable spending the day on the phone, and coachable on the call',
      'Full-time availability on Eastern-time floor hours',
      'A quiet workspace and dependable high-speed internet — this is a remote seat',
      'Clear, professional communication: you listen more than you pitch',
      'No roofing background needed. We teach the product and the process',
    ],
    offer: [
      'Company-provided leads through our dialer — no buying lists, no cold knocking',
      'One-call-close training and daily coaching from the sales manager',
      'Uncapped commission',
      'In-house financing options and insurance-claim support that take price off the table',
      'A nine-state footprint, so your territory does not run dry',
    ],
    applyKind: 'resume',
  },
  {
    slug: 'install-crew',
    title: 'Install Crew / Subcontractor',
    qualifier: 'Licensed & insured crews',
    status: 'always-open',
    employmentType: 'Per-job subcontract',
    location: `${LICENSED_STATES.length}-state service area`,
    summary:
      'Every ProTech install goes to a local crew. If you run a licensed, insured crew in one of the states we serve, we want you on the list. This is a subcontract, not a payroll job.',
    looking: [
      'A licensed crew carrying general liability and workers’ compensation',
      'Tear-off and install experience on residential roofs',
      'Your own equipment and transport, plus a foreman we can reach during the job',
      'Willing to complete onboarding: W-9, certificate of insurance, and a signed subcontractor agreement',
    ],
    offer: [
      'Work in your area with the scope agreed in writing before you start',
      'Per-square rates set up front',
      'One point of contact for scheduling and inspections',
    ],
    applyKind: 'crew',
  },
] as const;

export function getRole(slug: string): CareerRole | undefined {
  return ROLES.find((role) => role.slug === slug);
}

/** Options for the role <select> — same order as the catalog. */
export const ROLE_OPTIONS = ROLES.map((role) => ({
  value: role.slug,
  label: role.title,
}));

// ---------------------------------------------------------------------------
// Supporting content
// ---------------------------------------------------------------------------

export const WHY_WORK_HERE = [
  {
    title: 'The leads are provided',
    body: 'Our dialer puts homeowners who already asked about a roof in front of you. You are not buying lists or prospecting your own pipeline.',
  },
  {
    title: 'Remote seat, real floor',
    body: 'Sell from anywhere in the US on Eastern-time hours, with a sales manager coaching the floor every day — not a job where you are left alone with a phone.',
  },
  {
    title: 'Tools that close',
    body: 'In-house financing options and insurance-claim support mean the money conversation has somewhere to go besides "let me think about it".',
  },
  {
    title: 'Nine states of territory',
    body: `Licensed in ${LICENSED_STATES.map((state) => state.abbr).join(', ')} — headquartered in Tampa, selling across the footprint.`,
  },
] as const;

export const HIRING_PROCESS = [
  {
    title: 'Submit your application',
    body: 'Two minutes: your details, then your resume.',
  },
  {
    title: 'Phone screen',
    body: 'A short call to hear how you sound and what you are looking for.',
  },
  {
    title: 'Interview with the sales manager',
    body: 'The person who will actually coach you, talking through the role and the numbers.',
  },
  {
    title: 'Offer and onboarding',
    body: 'Paperwork, systems access, product training, and your first day on the dialer.',
  },
] as const;

/**
 * Shown under any mention of pay. Recruiting pages that imply earnings invite
 * complaints, so the page names no figures anywhere and carries this line.
 */
export const COMP_DISCLAIMER =
  'Compensation varies by role, experience, and individual performance. Nothing on this page is a guarantee of earnings.';

export const CREW_STATE_OPTIONS = LICENSED_STATES.map((state) => ({
  value: state.abbr,
  label: state.name,
}));
