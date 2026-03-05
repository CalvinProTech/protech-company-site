'use client';

import Script from 'next/script';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(
    new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export function CustomersAI() {
  const pixelId = process.env.NEXT_PUBLIC_CUSTOMERS_AI_PIXEL_ID;
  if (!pixelId) return null;

  // Respect opt-out cookie
  if (getCookie('protech_optout') === '1') return null;

  return (
    <Script
      id="customers-ai-pixel"
      strategy="afterInteractive"
      src={`https://cdn.customers.ai/xray/pixel/${pixelId}.js`}
    />
  );
}
