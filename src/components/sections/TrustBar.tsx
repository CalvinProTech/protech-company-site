import { Shield, Award, Star, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const stats = [
  {
    icon: Shield,
    value: SITE_CONFIG.yearsExperience,
    label: 'Years Experience',
  },
  {
    icon: Award,
    value: SITE_CONFIG.roofsInstalled,
    label: 'Roofs Installed',
  },
  {
    icon: Star,
    value: `${SITE_CONFIG.googleRating}`,
    label: `Star Rating (${SITE_CONFIG.reviewCount}+ Reviews)`,
  },
  {
    icon: MapPin,
    value: SITE_CONFIG.statesLicensed,
    label: 'States Licensed',
  },
];

export function TrustBar() {
  return (
    <section className="bg-primary-50 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100">
                <stat.icon className="h-6 w-6 text-primary-700" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-900">
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
