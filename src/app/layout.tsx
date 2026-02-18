import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import SkipToContent from '@/components/layout/SkipToContent';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://protechroof.net'
  ),
  title: {
    default: 'ProTech Roofing | Licensed Roofing Contractor',
    template: '%s | ProTech Roofing',
  },
  description:
    'Expert roof replacement, repair, and storm damage restoration across 14 states. Licensed, insured, and rated 4.9 stars. Get your free estimate today.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ProTech Roofing',
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
        <main id="main-content" className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
