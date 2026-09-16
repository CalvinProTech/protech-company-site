import type { Metadata } from 'next';
import { CheckCircle, Phone } from 'lucide-react';

import { createPageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import {
  ROLES,
  WHY_WORK_HERE,
  HIRING_PROCESS,
  COMP_DISCLAIMER,
} from '@/lib/careers';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import JsonLd from '@/components/seo/JsonLd';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import ApplicationForm from '@/components/careers/ApplicationForm';

// Careers follows the house pattern (see /about, /financing): hero = H1 + one
// paragraph + buttons, no icon badge; sections alternate white / neutral-50 at
// py-16/24; one CTA per section.
//
// One page for both audiences: someone who found us organically and wants to
// know what the job is, and someone who arrived from an ad and just wants the
// form — which is why the form sits at #apply with every role card linking
// straight to it.
//
// Deliberately absent: any earnings figure. Recruiting pages that imply income
// draw FTC complaints, so pay is described qualitatively and COMP_DISCLAIMER
// sits under the catalog.

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Careers | Roofing Sales Jobs & Install Crew Opportunities',
    description:
      'Join ProTech Roofing. Remote inside-sales seats with company-provided leads, plus subcontract work for licensed install crews across our nine-state footprint. Apply in two minutes.',
    path: '/careers',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Careers', href: '/careers' },
];

/**
 * Google Jobs wants a real posting date and drops listings that look stale.
 * Bump this whenever the catalog is genuinely refreshed.
 */
const POSTED_DATE = '2026-09-15';
const VALID_THROUGH = '2026-12-31';

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Inside Sales Representative',
  description:
    'Remote inside-sales role selling residential roof replacements by phone for ProTech Roofing. Company-provided leads through our dialer, one-call-close training, daily coaching, and in-house financing tools. No roofing experience required.',
  datePosted: POSTED_DATE,
  validThrough: VALID_THROUGH,
  employmentType: 'FULL_TIME',
  directApply: true,
  hiringOrganization: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    sameAs: SITE_CONFIG.url,
  },
  jobLocationType: 'TELECOMMUTE',
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'USA',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.hq.addressLocality,
      addressRegion: SITE_CONFIG.hq.addressRegion,
      addressCountry: SITE_CONFIG.hq.addressCountry,
    },
  },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={jobPostingSchema} />

      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center bg-primary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-accent-400 uppercase">
              Join our team
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Build a career in roofing.
            </h1>
            <p className="mt-4 text-lg text-primary-200 sm:text-xl md:mt-6 md:text-2xl">
              ProTech Roofing is a Tampa-headquartered contractor licensed in{' '}
              {SITE_CONFIG.statesLicensed} states. We provide the leads, the
              training, and the financing tools that close deals — you bring
              the work ethic.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#positions" variant="cta" size="md">
                Explore positions
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                variant="outline"
                size="md"
                icon={<Phone className="h-5 w-5" />}
                className="border-white text-white hover:bg-white/10"
              >
                {SITE_CONFIG.defaultPhone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbItems} />

      {/* Why work here */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-accent-600 uppercase">
              Why work here
            </p>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
              What you actually get on day one.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {WHY_WORK_HERE.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="bg-neutral-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-accent-600 uppercase">
              Open positions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
              Where you fit.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Two ways to work with ProTech: on the phones selling roofs, or on
              a roof installing them.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            {ROLES.map((role) => (
              <article
                key={role.slug}
                className="rounded-xl border border-neutral-200 bg-white p-6 md:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-neutral-900">
                        {role.title}
                      </h3>
                      <Badge
                        variant={
                          role.status === 'hiring-now' ? 'success' : 'default'
                        }
                      >
                        {role.status === 'hiring-now'
                          ? 'Hiring now'
                          : 'Always accepting'}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm font-semibold tracking-wide text-accent-600 uppercase">
                      {role.qualifier}
                    </p>
                    <p className="mt-1 text-neutral-500">
                      {role.employmentType} · {role.location}
                    </p>
                  </div>
                  <Button
                    href={`/careers?role=${role.slug}#apply`}
                    variant="cta"
                    size="sm"
                    className="shrink-0"
                  >
                    Apply for this role
                  </Button>
                </div>

                <p className="mt-6 text-lg text-neutral-700">{role.summary}</p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase">
                      What we&rsquo;re looking for
                    </h4>
                    <ul className="mt-4 flex flex-col gap-3">
                      {role.looking.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle
                            className="mt-1 h-5 w-5 shrink-0 text-primary-500"
                            aria-hidden="true"
                          />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase">
                      What you get
                    </h4>
                    <ul className="mt-4 flex flex-col gap-3">
                      {role.offer.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle
                            className="mt-1 h-5 w-5 shrink-0 text-accent-500"
                            aria-hidden="true"
                          />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-neutral-500">
            {COMP_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-accent-600 uppercase">
              How hiring works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
              Four steps, no mystery.
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {HIRING_PROCESS.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="bg-neutral-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent-600 uppercase">
              Apply now
            </p>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
              Ready to join us?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Share your details and we&rsquo;ll reach out within 1&ndash;2
              business days. Have your resume ready — it&rsquo;s the second
              step, and it takes about two minutes end to end.
            </p>
            <p className="mt-6 text-neutral-600">
              Questions first?{' '}
              <a
                href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
                className="font-semibold text-primary-700 hover:underline"
              >
                {SITE_CONFIG.defaultPhone}
              </a>
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
