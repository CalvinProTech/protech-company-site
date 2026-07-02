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
      // ── /locations redirect map (rebuilt 2026-07-02, Semrush QS cleanup) ──
      // Three URL classes. `:path*` matches zero-or-more segments, so each
      // rule covers the state hub AND every sub-path.
      //
      // 1. HIDDEN own-license states — pages exist in the codebase but the
      //    whole subtree stays 308 → /locations until the visibility
      //    decision (B11) lands. MUST stay in sync with
      //    HIDDEN_LOCATION_STATE_SLUGS in src/lib/constants.ts. Their
      //    legacy flat city aliases go to the same place.
      {
        source: '/locations/texas/:path*',
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
        source: '/locations/west-virginia/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/houston-tx/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/louisville-ky/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/columbus-oh/:path*',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/charleston-wv/:path*',
        destination: '/locations',
        permanent: true,
      },
      //
      // 2. RETIRED states — dropped from the public footprint (GA/TN on
      //    2026-04-29; FL/NC/VA/DE/CT with the 2026-05-29 own-license trim).
      //    Routes are deleted; everything 308s to the homepage (NOT to
      //    /locations — the hub is noindexed and shouldn't accumulate
      //    redirect equity). /locations/florida previously hard-404'd (home
      //    market!) because no rule covered it. Flat legacy pilot aliases
      //    for retired states (tampa-fl, charlotte-nc, jacksonville-fl,
      //    atlanta-ga, nashville-tn) go to the homepage too.
      {
        source: '/locations/florida/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/north-carolina/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/virginia/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/delaware/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/connecticut/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/georgia/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/tennessee/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/tampa-fl/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/jacksonville-fl/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/charlotte-nc/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/atlanta-ga/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/nashville-tn/:path*',
        destination: '/',
        permanent: true,
      },
      //
      // 3. LEGACY FLAT city slugs for LIVE states — the old
      //    /locations/{city}-{st} pilot URLs were linked from state pages
      //    and picked up external links; 308 them to the nested canonical
      //    page that actually serves 200.
      {
        source: '/locations/philadelphia-pa/:path*',
        destination: '/locations/pennsylvania/philadelphia',
        permanent: true,
      },
      {
        source: '/locations/kansas-city-mo/:path*',
        destination: '/locations/missouri/kansas-city',
        permanent: true,
      },
      {
        source: '/locations/baltimore-md/:path*',
        destination: '/locations/maryland/baltimore',
        permanent: true,
      },
      //
      // Missing state-service bounces (2026-04-30 Semrush 4xx fix, regex
      // updated 2026-07-02 to the CURRENTLY LIVE states): each state ships
      // only 4 of 7 services as per-state pages (roof-replacement,
      // roof-repair, storm-damage, gutters-siding) — bounce the other 3 to
      // the state hub so inbound links don't 404. Hidden/retired states are
      // already caught by the catch-alls above.
      {
        source: '/locations/:state(missouri|pennsylvania|maryland|south-carolina|indiana)/roof-inspection',
        destination: '/locations/:state',
        permanent: true,
      },
      {
        source: '/locations/:state(missouri|pennsylvania|maryland|south-carolina|indiana)/insurance-claims',
        destination: '/locations/:state',
        permanent: true,
      },
      {
        source: '/locations/:state(missouri|pennsylvania|maryland|south-carolina|indiana)/commercial-roofing',
        destination: '/locations/:state',
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
