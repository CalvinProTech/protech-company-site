'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics';

export default function MobileBottomBar() {
  const pathname = usePathname();

  // On /careers the second button must not be "Free Estimate": most applicant
  // traffic is mobile, this bar sits pinned over the page, and a job applicant
  // tapping it would create a junk Salesforce lead and fire an ad conversion.
  // Same reasoning as the popup suppression — point it at the form instead.
  const isCareers = pathname === '/careers';

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
          href={isCareers ? '/careers#apply' : '/free-estimate'}
          className="flex flex-1 items-center justify-center bg-accent-500 font-semibold text-white transition-colors hover:bg-accent-600"
          onClick={() =>
            trackCTAClick(
              isCareers ? 'Apply Now' : 'Free Estimate',
              pathname,
              'mobile-bar'
            )
          }
        >
          {isCareers ? 'Apply Now' : 'Free Estimate'}
        </Link>
      </div>
    </div>
  );
}
