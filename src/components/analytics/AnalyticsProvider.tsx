'use client';

import dynamic from 'next/dynamic';
import { useScrollDepth } from '@/hooks/useScrollDepth';

const GoogleAnalytics = dynamic(
  () =>
    import('@/components/analytics/GoogleAnalytics').then(
      (mod) => mod.GoogleAnalytics
    ),
  { ssr: false }
);

const CallRail = dynamic(
  () =>
    import('@/components/analytics/CallRail').then((mod) => mod.CallRail),
  { ssr: false }
);

export default function AnalyticsProvider() {
  useScrollDepth();

  return (
    <>
      <GoogleAnalytics />
      <CallRail />
    </>
  );
}
