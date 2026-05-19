import { NextResponse } from 'next/server';

// Server-side proxy for portal magic-link requests. Keeps Lead API as a
// server-to-server contact only — no browser CORS dependency.

const LEAD_API_BASE =
  process.env.PORTAL_LEAD_API_BASE || 'https://ptr-lead-api.onrender.com';

export async function POST(req: Request) {
  let payload: { email?: string } = {};
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: true }); // mask parse errors to client
  }

  const email = (payload.email || '').toString().trim().toLowerCase();
  if (!email) {
    return NextResponse.json({ ok: true });
  }

  // Forward IP + UA so Lead API can record them in the audit log.
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '';
  const userAgent = req.headers.get('user-agent') || '';

  try {
    await fetch(`${LEAD_API_BASE}/portal/auth/request-link`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(ip ? { 'x-forwarded-for': ip } : {}),
        ...(userAgent ? { 'user-agent': userAgent } : {}),
      },
      body: JSON.stringify({ email }),
      cache: 'no-store',
    });
  } catch (err) {
    // Log server-side; client always gets ok:true (anti-enumeration).
    console.error('[portal/request-link] proxy error:', err);
  }

  return NextResponse.json({ ok: true });
}
