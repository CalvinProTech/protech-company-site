import type { NextConfig } from 'next';

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://maps.googleapis.com https://cdn.customers.ai",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://www.google.co.in",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://maps.googleapis.com https://region1.google-analytics.com https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://*.customers.ai",
  "frame-src https://www.google.com https://maps.google.com https://td.doubleclick.net https://googleads.g.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
  },
  async redirects() {
    return [
      // Canonical host enforcement: apex → www. Vercel domain config
      // handles this at the edge; this is a belt-and-suspenders backup
      // so the app stays canonical even if the Vercel domain config is
      // ever reverted, and works in local/non-Vercel environments.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'protechroof.net' }],
        destination: 'https://www.protechroof.net/:path*',
        permanent: true,
      },
      {
        source: '/offerings',
        destination: '/services',
        permanent: true,
      },
      // Commercial roofing service retired 2026-05-18 (residential focus).
      {
        source: '/services/commercial-roofing',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/locations/:state/:city/commercial-roofing',
        destination: '/services',
        permanent: true,
      },
      // In-scope alias redirects (these targets still exist).
      {
        source: '/locations/florida/tampa',
        destination: '/locations/tampa-fl',
        permanent: true,
      },
      {
        source: '/locations/north-carolina/charlotte',
        destination: '/locations/charlotte-nc',
        permanent: true,
      },
      {
        source: '/locations/florida/jacksonville',
        destination: '/locations/jacksonville-fl',
        permanent: true,
      },
      // Out-of-scope state cleanup (2026-04-29). The state hubs and
      // city-state aliases for GA / KY / OH / TN / TX / WV were removed
      // because ProTech does not service those areas. Catch-all redirects
      // send any inbound link to the canonical /locations index so users
      // and crawlers don't hit 404s.
      {
        source: '/locations/georgia/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/kentucky/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/ohio/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/tennessee/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/texas/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/west-virginia/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/atlanta-ga',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/atlanta-ga/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/columbus-oh',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/columbus-oh/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/houston-tx',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/houston-tx/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/louisville-ky',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/louisville-ky/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/nashville-tn',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/nashville-tn/:path*',
        destination: '/locations',
        permanent: true,
      },
      // 2026-04-30 — fix Semrush 4xx findings.
      // Each state has only 4 of 7 services available as per-state pages
      // (roof-replacement, roof-repair, storm-damage, gutters-siding).
      // Bounce the missing 3 to the state hub so inbound links don't 404.
      {
        source: '/locations/:state(florida|north-carolina|south-carolina|virginia|maryland|pennsylvania|delaware|connecticut)/roof-inspection',
        destination: '/locations/:state',
        permanent: true,
      },
      {
        source: '/locations/:state(florida|north-carolina|south-carolina|virginia|maryland|pennsylvania|delaware|connecticut)/insurance-claims',
        destination: '/locations/:state',
        permanent: true,
      },
      {
        source: '/locations/:state(florida|north-carolina|south-carolina|virginia|maryland|pennsylvania|delaware|connecticut)/commercial-roofing',
        destination: '/locations/:state',
        permanent: true,
      },
      // tampa-fl/gutters-siding has no city-service data. Route deleted.
      {
        source: '/locations/tampa-fl/gutters-siding',
        destination: '/locations/tampa-fl',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
