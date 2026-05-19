import type { Metadata } from 'next';

import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PortalLoginForm from './PortalLoginForm';

// Portal entry: email → "we sent you a link".
// noindex/nofollow at metadata level + robots.ts disallow + sitemap excludes
// /portal/* — three layers of "do not index" since portal is private surface.

export const metadata: Metadata = {
  title: 'Customer Portal — Sign In',
  description: 'Sign in to your ProTech Roofing customer portal.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Customer Portal', href: '/portal' },
];

export default function PortalEntryPage({
  searchParams,
}: {
  searchParams?: { reason?: string };
}) {
  const reason = searchParams?.reason;
  const banner =
    reason === 'unauthenticated'
      ? 'Please sign in to continue.'
      : reason === 'expired'
      ? 'Your session expired. Please sign in again.'
      : reason === 'invalid'
      ? "That link is invalid or expired. Request a new one below."
      : null;

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            ProTech Customer Portal
          </h1>
          <p className="mt-3 text-base text-primary-200">
            Enter the email address you used with ProTech and we&rsquo;ll send
            you a one-click sign-in link.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          {banner && (
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              {banner}
            </div>
          )}

          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-neutral-200/50 md:p-8">
            <PortalLoginForm />
          </div>

          <p className="mt-6 text-center text-xs text-neutral-500">
            No password needed. Sign-in links expire after 15 minutes and can
            only be used once. If you don&rsquo;t have an active project with
            ProTech, you won&rsquo;t receive an email — that&rsquo;s expected.
          </p>
        </div>
      </section>
    </>
  );
}
