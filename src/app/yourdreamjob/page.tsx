import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { COMP_DISCLAIMER } from '@/lib/careers';
import ApplicationForm from '@/components/careers/ApplicationForm';

// Paid-social application funnel. Same form as /careers, stripped of every
// other decision: no nav, no roofing CTAs, no popups (see SiteChrome and
// BARE_PATHS), nothing below the fold on a phone.
//
// noindex on purpose. /careers is the page that should rank for roofing-job
// searches; this URL exists to receive ad traffic, and letting both compete
// for the same queries would split the signal and surface a page with no
// context to organic visitors.

export function generateMetadata(): Metadata {
  return {
    ...createPageMetadata({
      title: 'Apply Now | ProTech Roofing Careers',
      description:
        'Apply to ProTech Roofing. Share your details, then your resume — about two minutes.',
      path: '/yourdreamjob',
    }),
    robots: { index: false, follow: true },
  };
}

const TRUST_CHIPS = [
  'Licensed in 9 states',
  'Tampa HQ',
  'Leads provided',
] as const;

export default function YourDreamJobPage() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-900 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <header className="mx-auto w-full max-w-lg px-4 pt-8 sm:px-6">
        <Link href="/" aria-label={`${SITE_CONFIG.name} home`}>
          <Image
            src="/images/logo.png"
            alt={SITE_CONFIG.name}
            width={866}
            height={290}
            priority
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Where should we reach you?
        </h1>
        <p className="mt-3 text-lg text-primary-200">
          Apply for a remote roofing sales seat with ProTech. Share your
          details, then your resume.
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-xl md:p-8">
          <ApplicationForm defaultRole="inside-sales" />
        </div>

        <p className="mt-6 text-sm text-primary-300">{COMP_DISCLAIMER}</p>
      </main>

      <footer className="mx-auto w-full max-w-lg px-4 pb-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold tracking-widest text-primary-300 uppercase">
          {TRUST_CHIPS.map((chip) => (
            <span key={chip}>· {chip}</span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-primary-200">
          <span>Have your resume ready</span>
          <a
            href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
            className="font-semibold text-white hover:underline"
          >
            Or call {SITE_CONFIG.defaultPhone}
          </a>
        </div>
      </footer>
    </div>
  );
}
