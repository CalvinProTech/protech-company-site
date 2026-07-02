import type { Metadata } from 'next';

// /locations/* is the own-license service-area tree. Visible-state pages
// (see LINKABLE_LOCATION_STATES in lib/constants.ts) are fully indexable.
// Hidden states (HIDDEN_LOCATION_STATE_SLUGS, pending B11) never render —
// next.config.ts 308s their whole subtree to /locations — so this robots
// value only ever applies to live pages. The /locations hub itself overrides
// this with noindex in its own generateMetadata (brand-equity split with /).
// Per-page titles/canonicals come from each route's generateMetadata.
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
