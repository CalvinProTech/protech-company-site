import Link from 'next/link';
import { DollarSign } from 'lucide-react';

export function FinancingCTA() {
  return (
    <section className="bg-primary-50 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-100">
          <DollarSign className="h-8 w-8 text-accent-600" />
        </div>
        <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
          Affordable Roofing with Flexible Financing
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Roof replacement starting from{' '}
          <span className="font-bold text-primary-900">$89/month</span> with
          approved credit. Multiple financing options available.
        </p>
        <Link
          href="/financing"
          className="mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-accent-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-accent-600"
        >
          Check Your Rate
        </Link>
      </div>
    </section>
  );
}
