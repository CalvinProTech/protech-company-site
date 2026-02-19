import { Shield, Award, Clock, CreditCard } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    label: 'Lifetime Warranty',
    detail: 'Full coverage on materials & labor',
  },
  {
    icon: Award,
    label: 'GAF Certified',
    detail: 'Master Elite installer',
  },
  {
    icon: Clock,
    label: '24hr Response',
    detail: 'Emergency service available',
  },
  {
    icon: CreditCard,
    label: 'Financing Available',
    detail: '$0 down, flexible plans',
  },
];

export function ServiceTrustStrip() {
  return (
    <section className="bg-primary-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              <item.icon className="h-6 w-6 shrink-0 text-primary-700" />
              <div>
                <p className="text-sm font-semibold text-primary-900">
                  {item.label}
                </p>
                <p className="text-xs text-neutral-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
