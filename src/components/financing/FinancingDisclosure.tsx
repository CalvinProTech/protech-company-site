import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';

interface FinancingDisclosureProps {
  /** 'dark' for dark backgrounds (e.g. the footer); 'light' for light sections. */
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Lender-compliance block: the Equal Housing Opportunity logo (rendered at ~1 inch,
 * the minimum Sunlight requires) plus the Sunlight Financial / Cross River Bank
 * disclosure that must appear on any page referencing financing.
 *
 * Required by Sunlight Financial "Partner Website Compliance" (items 1 & 2). The
 * logo file is HUD's Equal Housing Opportunity graphic (public domain).
 */
export default function FinancingDisclosure({
  variant = 'light',
  className = '',
}: FinancingDisclosureProps) {
  const dark = variant === 'dark';
  return (
    <div
      className={`flex flex-col items-center gap-4 sm:flex-row sm:items-start ${className}`}
    >
      <Image
        src="/images/equal-housing-opportunity.png"
        alt="Equal Housing Opportunity"
        width={288}
        height={305}
        className="h-24 w-auto shrink-0 rounded bg-white p-1"
      />
      <div
        className={`space-y-2 text-center text-xs leading-relaxed sm:text-left ${
          dark ? 'text-neutral-300' : 'text-neutral-500'
        }`}
      >
        <p>
          Certain Sunlight Financial LLC loans through Cross River Bank, Equal
          Housing Lender, a New Jersey state-chartered bank, Member FDIC. This is
          not a deposit product.
        </p>
        <p>
          Financing is provided by third-party lenders, including Hearth,
          GreenSky, Pure Finance Group, and Sunlight Financial. {SITE_CONFIG.name}{' '}
          is not a lender and does not make credit decisions. All financing is
          subject to credit approval; not all applicants will qualify. Terms and
          conditions apply.
        </p>
      </div>
    </div>
  );
}
