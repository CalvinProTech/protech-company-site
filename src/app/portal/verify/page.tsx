import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

// Magic-link verify handler.
//
// Reads ?token= from the URL, calls Lead API to validate + create a session,
// sets the session cookie, redirects to /portal/dashboard.
//
// On invalid/expired token: redirect back to /portal?reason=invalid so the
// entry page surfaces the right error state.
//
// Server component on purpose — cookies() and redirect() work server-side
// and the token never touches the client.

export const metadata: Metadata = {
  title: 'Signing you in...',
  robots: { index: false, follow: false, nocache: true },
};

const LEAD_API_BASE =
  process.env.PORTAL_LEAD_API_BASE || 'https://ptr-lead-api.onrender.com';
const SESSION_TTL_HOURS = parseInt(
  process.env.PORTAL_SESSION_TTL_HOURS || '4',
  10
);

export default async function PortalVerifyPage({
  searchParams,
}: {
  searchParams?: { token?: string };
}) {
  const token = searchParams?.token?.trim();
  if (!token) {
    redirect('/portal?reason=invalid');
  }

  let resJson: {
    ok?: boolean;
    sessionId?: string;
    email?: string;
    expiresAt?: string;
    error?: string;
  } = {};

  try {
    const res = await fetch(
      `${LEAD_API_BASE}/portal/auth/verify?token=${encodeURIComponent(token!)}`,
      { method: 'GET', cache: 'no-store' }
    );
    resJson = await res.json();
    if (!res.ok || !resJson.ok || !resJson.sessionId) {
      redirect('/portal?reason=invalid');
    }
  } catch {
    redirect('/portal?reason=invalid');
  }

  // Set the session cookie. HttpOnly + Secure + SameSite=Strict locks it to
  // first-party navigation. maxAge matches the server-side session TTL so
  // the cookie expires naturally even if the user never logs out.
  (await cookies()).set('portal_session', resJson.sessionId!, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_TTL_HOURS * 60 * 60,
  });

  redirect('/portal/dashboard');
}
