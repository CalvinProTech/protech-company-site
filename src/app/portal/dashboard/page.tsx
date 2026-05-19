import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FileText, HardHat, MessageSquare, Shield, ArrowRight } from 'lucide-react';

import Breadcrumbs from '@/components/layout/Breadcrumbs';

// Authenticated landing. Middleware checks for cookie presence; this page
// re-validates the session server-side every render so revoked / expired
// sessions are caught immediately.

export const metadata: Metadata = {
  title: 'Your ProTech Portal',
  robots: { index: false, follow: false, nocache: true },
};

const LEAD_API_BASE =
  process.env.PORTAL_LEAD_API_BASE || 'https://ptr-lead-api.onrender.com';

interface Session {
  ok: boolean;
  email?: string;
  sfAccountId?: string | null;
  sfContactId?: string | null;
  expiresAt?: string;
  error?: string;
}

async function getSession(sessionId: string): Promise<Session | null> {
  try {
    const res = await fetch(`${LEAD_API_BASE}/portal/auth/session`, {
      method: 'GET',
      headers: { 'x-portal-session': sessionId },
      cache: 'no-store',
    });
    const json = (await res.json()) as Session;
    if (!res.ok || !json.ok) return null;
    return json;
  } catch {
    return null;
  }
}

export default async function PortalDashboardPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('portal_session')?.value;

  if (!sessionId) {
    redirect('/portal?reason=unauthenticated');
  }

  const session = await getSession(sessionId!);
  if (!session) {
    redirect('/portal?reason=expired');
  }

  // Placeholder feature cards. Actual surfaces (quote view / job tracker /
  // survey / warranty) ship in Stream 3 batches 2-6 — each will become a
  // working route under /portal/dashboard/* with its own data fetching.
  const cards: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    href: string;
    status: 'coming' | 'live';
  }> = [
    {
      icon: FileText,
      title: 'Your Quote',
      description:
        'Review your roofing quote, compare financing options, and accept when ready.',
      href: '/portal/dashboard/quote',
      status: 'coming',
    },
    {
      icon: HardHat,
      title: 'Job Tracker',
      description:
        'Live status of your install — from permit submission through final inspection.',
      href: '/portal/dashboard/job',
      status: 'coming',
    },
    {
      icon: MessageSquare,
      title: 'Post-Install Survey',
      description:
        'Tell us how we did. High scores get a quick Google review prompt; everything else routes to ProTech management.',
      href: '/portal/dashboard/survey',
      status: 'coming',
    },
    {
      icon: Shield,
      title: 'Warranty Claim',
      description:
        'Submit a new warranty claim or check status on an existing one.',
      href: '/portal/dashboard/warranty',
      status: 'coming',
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Customer Portal', href: '/portal/dashboard' },
          ]}
        />
      </div>

      <section className="bg-primary-900 py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-primary-200">
            Signed in as <span className="font-medium text-white">{session.email}</span>
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;
              const isDisabled = card.status === 'coming';
              const inner = (
                <div
                  className={`flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all ${
                    isDisabled
                      ? 'opacity-70'
                      : 'hover:-translate-y-0.5 hover:border-accent-500 hover:shadow-md'
                  }`}
                >
                  <Icon className="h-7 w-7 text-accent-500" />
                  <h2 className="mt-4 text-lg font-semibold text-primary-900">
                    {card.title}
                    {isDisabled && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                        Coming soon
                      </span>
                    )}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {card.description}
                  </p>
                  {!isDisabled && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-500">
                      Open
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              );

              return isDisabled ? (
                <div key={card.title} aria-disabled className="cursor-not-allowed">
                  {inner}
                </div>
              ) : (
                <Link key={card.title} href={card.href} className="group">
                  {inner}
                </Link>
              );
            })}
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-6 text-center">
            <form action="/api/portal/logout" method="POST" className="inline-block">
              <button
                type="submit"
                className="text-sm text-neutral-500 underline transition-colors hover:text-primary-900"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
