import { NextResponse, type NextRequest } from 'next/server';

// Protect /portal/dashboard/* — require the portal_session cookie.
// Page-level server components re-validate the session against Lead API on
// every render, so middleware only does the cheap cookie-presence check.

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/portal/dashboard')) {
    const sessionCookie = req.cookies.get('portal_session')?.value;
    if (!sessionCookie) {
      const url = req.nextUrl.clone();
      url.pathname = '/portal';
      url.searchParams.set('reason', 'unauthenticated');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/dashboard/:path*'],
};
