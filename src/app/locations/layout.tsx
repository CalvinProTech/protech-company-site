import type { Metadata } from 'next';

// Hide all /locations/* routes (including pilot hyper-local pages
// like /locations/tampa-fl) from indexing and crawling. Files are
// retained for future use — visible footprint is finance-partner-gated.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
