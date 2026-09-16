'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { FINANCING_APPLY_URL } from '@/lib/constants';
import { trackCTAClick } from '@/lib/analytics';

interface FinancingApplyLinkProps {
  /** Where on the page this CTA sits — lands in the click_cta event. */
  section: string;
  /** Analytics label; also the default visible text. */
  label?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * THE way out of the financing funnel. Every apply CTA on the site renders
 * through here so there is one URL (FINANCING_APPLY_URL), one analytics event,
 * and one `data-finance-link="apply"` marker.
 *
 * That marker is a monitoring contract: the lead-api liveness monitor reads
 * the LIVE /financing page every 30 min, probes every anchor carrying
 * data-finance-link, and pages Telegram if one 404s, times out, or (for
 * "apply") comes back as a page that no longer mentions ProTech — the
 * soft-404 a dead partner slug produces. A /financing with ZERO marked anchors
 * pages as a regression. Don't hand-roll an apply <a> elsewhere; if you add a
 * direct-lender link, mark it data-finance-link="lender" and it's watched too.
 */
export default function FinancingApplyLink({
  section,
  label = 'Apply for Financing',
  className = '',
  children,
}: FinancingApplyLinkProps) {
  const pathname = usePathname();
  return (
    <a
      href={FINANCING_APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-finance-link="apply"
      className={className}
      onClick={() => trackCTAClick(label, pathname, section)}
    >
      {children ?? label}
    </a>
  );
}
