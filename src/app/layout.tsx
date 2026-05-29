import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import SkipToContent from '@/components/layout/SkipToContent';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';
import ExitIntentPopup from '@/components/forms/ExitIntentPopup';
import SmsConsentBanner from '@/components/consent/SmsConsentBanner';
import FloatingCallbackWidget from '@/components/forms/FloatingCallbackWidget';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.protechroof.net'
  ),
  title: {
    default: 'ProTech Roofing | Licensed Roofing Contractor',
    template: '%s | ProTech Roofing',
  },
  description:
    'Expert roof replacement, insurance-claim help, and in-house financing across seven states. Tampa-headquartered, GAF Master Elite certified, rated 5.0 stars on Google. Get your free estimate today.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ProTech Roofing',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <SkipToContent />
        <Header />
        <main id="main-content" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <SmsConsentBanner />
        <ExitIntentPopup />
        <FloatingCallbackWidget />
        <AnalyticsProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
