import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Logout: revoke server-side session + clear the cookie + redirect to /portal.

const LEAD_API_BASE =
  process.env.PORTAL_LEAD_API_BASE || 'https://ptr-lead-api.onrender.com';

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('portal_session')?.value;

  if (sessionId) {
    try {
      await fetch(`${LEAD_API_BASE}/portal/auth/logout`, {
        method: 'POST',
        headers: { 'x-portal-session': sessionId },
        cache: 'no-store',
      });
    } catch (err) {
      console.error('[portal/logout] proxy error:', err);
    }
  }

  cookieStore.delete('portal_session');

  // Form-POST friendly: 303 redirect back to entry page.
  const origin = new URL(req.url).origin;
  return NextResponse.redirect(`${origin}/portal`, 303);
}
