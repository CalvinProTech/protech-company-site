import type { Metadata } from 'next';

// /locations/* is the own-license service-area tree (TX/KY/MO/OH/PA/MD/WV) and
// is fully indexable. Per-page titles/canonicals come from each route's
// generateMetadata; this layout just allows crawling/indexing of the subtree.
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
