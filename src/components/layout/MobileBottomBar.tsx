'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics';

export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex h-14 items-stretch">
        <a
          href={`tel:${SITE_CONFIG.defaultPhoneRaw}`}
          className="flex flex-1 items-center justify-center gap-2 bg-primary-700 font-semibold text-white transition-colors hover:bg-primary-800"
          aria-label="Call ProTech Roofing"
          onClick={() => trackPhoneClick('mobile-bar', pathname)}
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
        <Link
          href="/free-estimate"
          className="flex flex-1 items-center justify-center bg-accent-500 font-semibold text-white transition-colors hover:bg-accent-600"
          onClick={() =>
            trackCTAClick('Free Estimate', pathname, 'mobile-bar')
          }
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
