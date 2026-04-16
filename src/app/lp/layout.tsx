import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnalyticsProvider />
      {/* Minimal header — logo + phone only */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <a href="/" className="text-xl font-bold text-primary-900">
            ProTech Roofing
          </a>
          <a
            href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
            className="flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-600"
          >
            <svg
              className="h-4 w-4"
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
            {SITE_CONFIG.defaultPhone}
          </a>
        </div>
      </header>

      <main>{children}</main>

      {/* Minimal footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50 py-6 text-center text-xs text-neutral-500">
        <div className="mx-auto max-w-5xl px-4">
          <p>
            &copy; {new Date().getFullYear()} ProTech Roofing LLC. Licensed &
            Insured.
          </p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <a href="/privacy-policy" className="hover:text-neutral-700">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-neutral-700">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile call bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-2 shadow-lg lg:hidden">
        <a
          href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent-500 text-base font-bold text-white"
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
          Call Now — Free Estimate
        </a>
      </div>
    </>
  );
}
