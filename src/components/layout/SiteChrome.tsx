'use client';

import { type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { BARE_PATHS } from '@/lib/constants';

/**
 * Hides the site chrome (header, footer, mobile CTA bar) on bare landing
 * pages.
 *
 * /yourdreamjob is a paid-social application funnel: a job applicant landing
 * there should see the form and nothing else. The roofing nav, the "Free
 * Estimate" buttons and the mobile call bar all push the wrong action, and the
 * header alone costs a viewport of scroll on a phone.
 *
 * Server components (Footer) can pass straight through as children — only the
 * pathname check needs the client.
 */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (BARE_PATHS.includes(pathname)) return null;

  return <>{children}</>;
}
