'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useScrollDepth } from '@/hooks/useScrollDepth';
import { captureUtmParams } from '@/lib/utm';

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

const CustomersAI = dynamic(
  () =>
    import('@/components/analytics/CustomersAI').then(
      (mod) => mod.CustomersAI
    ),
  { ssr: false }
);

export default function AnalyticsProvider() {
  useScrollDepth();

  useEffect(() => {
    captureUtmParams();
  }, []);

  return (
    <>
      <GoogleAnalytics />
      <CallRail />
      <CustomersAI />
    </>
  );
}
