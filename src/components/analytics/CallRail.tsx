'use client';

import Script from 'next/script';

const CALLRAIL_ID = process.env.NEXT_PUBLIC_CALLRAIL_ACCOUNT_ID;

export function CallRail() {
  if (!CALLRAIL_ID || CALLRAIL_ID === 'PLACEHOLDER') return null;

  return (
    <Script
      src={`//cdn.callrail.com/companies/${CALLRAIL_ID}/hash/swap.js`}
      strategy="lazyOnload"
    />
  );
}
