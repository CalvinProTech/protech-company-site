import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, DollarSign, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

import { SITE_CONFIG } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

// Tier 2 — record-scoped quote viewer. The token IS the auth; no session
// required. Customer receives the URL via SMS/email when an Opp moves to
// the "Quote Sent" stage in Salesforce.
//
// Plan: ../../../../../Calvin General Workspace/plans/active/2026-05-18-portal-foundation.md

export const metadata: Metadata = {
  title: 'Your ProTech Quote',
  robots: { index: false, follow: false, nocache: true },
};

const LEAD_API_BASE =
  process.env.PORTAL_LEAD_API_BASE || 'https://ptr-lead-api.onrender.com';

interface Account {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
}

interface LineItem {
  id: string;
  name: string;
  quantity: number | null;
  unitPrice: number | null;
  totalPrice: number | null;
  description: string | null;
}

interface Opportunity {
  id: string;
  name: string;
  stage: string;
  amount: number | null;
  closeDate: string | null;
  description: string | null;
  isActive: boolean;
  account: Account | null;
  lineItems: LineItem[];
}

interface ApiResponse {
  ok: boolean;
  error?: string;
  surface?: string;
  opportunity?: Opportunity;
}

async function fetchQuote(token: string): Promise<ApiResponse | null> {
  try {
    const res = await fetch(
      `${LEAD_API_BASE}/portal/auth/records/quote/${encodeURIComponent(token)}`,
      { cache: 'no-store' }
    );
    return (await res.json()) as ApiResponse;
  } catch {
    return null;
  }
}

function formatCurrency(n: number | null | undefined) {
  if (typeof n !== 'number') return '—';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

function formatAddress(a: Account | null) {
  if (!a) return null;
  const parts = [a.street, [a.city, a.state].filter(Boolean).join(', '), a.postalCode].filter(
    Boolean
  );
  return parts.length > 0 ? parts.join(' · ') : null;
}

function ErrorState({ message, sub }: { message: string; sub?: string }) {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
          <AlertCircle className="h-6 w-6 text-amber-600" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-primary-900">{message}</h1>
        {sub && <p className="mt-3 text-sm leading-relaxed text-neutral-600">{sub}</p>}
        <a
          href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-accent-500 px-6 font-semibold text-white transition-colors hover:bg-accent-600"
        >
          <Phone className="h-4 w-4" />
          Call {SITE_CONFIG.defaultPhone}
        </a>
      </div>
    </section>
  );
}

export default async function QuoteTokenPage({
  params,
}: {
  params: { token: string };
}) {
  const data = await fetchQuote(params.token);

  if (!data || !data.ok) {
    const err = data?.error || 'unknown';
    if (err === 'invalid_or_expired') {
      return (
        <ErrorState
          message="This quote link has expired"
          sub="Quote links are valid for 7 days. Please contact us for an updated link."
        />
      );
    }
    if (err === 'record_missing') {
      return (
        <ErrorState
          message="This quote is no longer available"
          sub="Please contact us — we'll send you a fresh copy."
        />
      );
    }
    return (
      <ErrorState
        message="We couldn't load this quote"
        sub="Something went wrong. Please call us and we'll send a fresh copy."
      />
    );
  }

  const opp = data.opportunity!;
  const phoneDigits = SITE_CONFIG.defaultPhoneRaw;

  if (!opp.isActive) {
    return (
      <ErrorState
        message="This quote is no longer active"
        sub={`Status: ${opp.stage}. Please contact us if you'd like to revisit this project.`}
      />
    );
  }

  const customerName = opp.account?.name || 'Valued Customer';
  const address = formatAddress(opp.account);
  const hasLineItems = opp.lineItems.length > 0;

  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-primary-300">
                Your ProTech Roofing Quote
              </p>
              <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {customerName}
              </h1>
              {address && (
                <p className="mt-1 flex items-center gap-1.5 text-sm text-primary-200">
                  <MapPin className="h-4 w-4" />
                  {address}
                </p>
              )}
            </div>
            <div className="text-left md:text-right">
              <p className="text-xs uppercase tracking-wide text-primary-300">
                Total
              </p>
              <p className="mt-1 text-3xl font-bold text-white md:text-4xl">
                {formatCurrency(opp.amount)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <FileText className="h-4 w-4" />
              <span>Project: {opp.name}</span>
            </div>

            {opp.description && (
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-neutral-700">
                {opp.description}
              </p>
            )}

            {hasLineItems && (
              <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-primary-900">
                        Item
                      </th>
                      <th className="px-4 py-3 text-right font-semibold text-primary-900">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-right font-semibold text-primary-900">
                        Unit
                      </th>
                      <th className="px-4 py-3 text-right font-semibold text-primary-900">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {opp.lineItems.map((li, i) => (
                      <tr
                        key={li.id}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}
                      >
                        <td className="px-4 py-3 text-neutral-700">
                          <div className="font-medium text-primary-900">
                            {li.name}
                          </div>
                          {li.description && (
                            <div className="mt-1 text-xs text-neutral-500">
                              {li.description}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right text-neutral-700">
                          {li.quantity ?? '—'}
                        </td>
                        <td className="px-4 py-3 text-right text-neutral-700">
                          {formatCurrency(li.unitPrice)}
                        </td>
                        <td className="px-4 py-3 text-right font-semibold text-primary-900">
                          {formatCurrency(li.totalPrice)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-8 rounded-xl bg-primary-50 p-5">
              <h2 className="text-base font-semibold text-primary-900">
                What&rsquo;s typically included
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {[
                  'Complete tear-off of existing roof (or layover if approved)',
                  'New synthetic underlayment + drip edge + flashing',
                  'GAF Timberline HDZ architectural shingles (or specified material)',
                  'Ridge vent ventilation system',
                  'Full cleanup with magnetic nail sweep',
                  'Lifetime workmanship warranty + GAF manufacturer warranty',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-neutral-500">
                See your project description above for exact scope. Anything
                you don&rsquo;t see? Call us before signing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-neutral-50 py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={`tel:${phoneDigits}`}
              className="flex h-full flex-col rounded-xl border-2 border-accent-500 bg-accent-50 p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Phone className="h-7 w-7 text-accent-600" />
              <h3 className="mt-3 text-lg font-semibold text-primary-900">
                Accept &amp; Sign
              </h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-neutral-700">
                Call us to walk through the quote and we&rsquo;ll send the
                eSign contract right away.
              </p>
              <span className="mt-3 text-sm font-semibold text-accent-600">
                {formatPhoneNumber(phoneDigits)}
              </span>
            </a>

            <Link
              href="/financing"
              className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-primary-700 hover:shadow-md"
            >
              <DollarSign className="h-7 w-7 text-primary-700" />
              <h3 className="mt-3 text-lg font-semibold text-primary-900">
                Compare Financing
              </h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-neutral-700">
                Hearth and GreenSky options. Soft pre-qualification doesn&rsquo;t
                affect your credit score.
              </p>
              <span className="mt-3 text-sm font-semibold text-primary-700">
                See options →
              </span>
            </Link>

            <a
              href={`tel:${phoneDigits}`}
              className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-primary-700 hover:shadow-md"
            >
              <FileText className="h-7 w-7 text-primary-700" />
              <h3 className="mt-3 text-lg font-semibold text-primary-900">
                Request Changes
              </h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-neutral-700">
                Want different materials, scope changes, or have questions?
                Call us and we&rsquo;ll send an updated quote.
              </p>
              <span className="mt-3 text-sm font-semibold text-primary-700">
                {formatPhoneNumber(phoneDigits)}
              </span>
            </a>
          </div>

          <p className="mt-8 text-center text-xs text-neutral-500">
            This quote link is valid for 7 days. Save this page or contact us
            if you need a fresh copy. License #{SITE_CONFIG.hq ? 'CCC-1332871' : ''} ·
            ProTech Roofing &middot; 4950 W Kennedy Blvd Suite 210, Tampa, FL 33609
          </p>
        </div>
      </section>
    </>
  );
}
