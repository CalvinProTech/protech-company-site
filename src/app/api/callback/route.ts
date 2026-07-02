import { NextResponse, after } from 'next/server';
import {
  callbackRequestSchema,
  type CallbackRequestData,
} from '@/lib/schemas';
import { rateLimit } from '@/lib/rate-limit';
import { isSpam } from '@/lib/spam-detection';

// ---------------------------------------------------------------------------
// POST /api/callback
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    // ------------------------------------------------------------------
    // Rate limiting — 5 req/min per IP
    // ------------------------------------------------------------------

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      'unknown';
    const { allowed } = rateLimit(ip, { limit: 5, windowMs: 60_000 });

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 },
      );
    }

    const body = await request.json() as Record<string, unknown>;

    // ------------------------------------------------------------------
    // Spam detection (check before validation — return fake 200 for bots)
    // ------------------------------------------------------------------

    if (
      isSpam({
        honeypot: (body._hp as string) || '',
        formLoadedAt: (body._t as number) || 0,
        name: body.name as string,
      })
    ) {
      console.log('[callback] Spam blocked:', body.phone);
      // Fake 200 keeps the bot-deception contract, but tracked:false tells the
      // client NOT to fire ad conversions — spam fires were a root cause of the
      // April ghost-conversion overcount that paused all Google Ads spend.
      return NextResponse.json({ success: true, tracked: false }, { status: 200 });
    }

    // ------------------------------------------------------------------
    // Validate input
    // ------------------------------------------------------------------

    const result = callbackRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data: CallbackRequestData = result.data;

    // ------------------------------------------------------------------
    // Forward to PTR Lead API
    // ------------------------------------------------------------------

    const apiUrl = process.env.PTR_LEAD_API_URL;
    const apiKey = process.env.PTR_LEAD_API_KEY;

    if (!apiUrl || !apiKey) {
      console.error('[callback] PTR Lead API env vars not configured.');
      return NextResponse.json(
        { success: false, message: 'Service temporarily unavailable.' },
        { status: 503 },
      );
    }

    // Lead API requires non-empty firstName + lastName. Split the single name field.
    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '—';

    try {
      const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: data.phone,
          email: data.email,
          streetAddress: data.streetAddress || undefined,
          city: data.city || undefined,
          state: data.state || undefined,
          zip: data.zip || undefined,
          serviceType: data.serviceType || undefined,
          timeframe: data.timeframe || undefined,
          smsConsent: data.smsConsent,
          smsConsentPromo: data.smsConsentPromo,
          source: data.source,
          utm_source: (body._utm as Record<string, string>)?.utm_source || undefined,
          utm_medium: (body._utm as Record<string, string>)?.utm_medium || undefined,
          utm_campaign: (body._utm as Record<string, string>)?.utm_campaign || undefined,
          gclid: (body._utm as Record<string, string>)?.gclid || undefined,
        }),
      });

      if (!apiResponse.ok) {
        const detail = await apiResponse.text().catch(() => '');
        console.error(
          '[callback] PTR Lead API error:',
          apiResponse.status,
          detail,
        );
        return NextResponse.json(
          { success: false, message: 'Unable to process request. Please try again.' },
          { status: 502 },
        );
      }
    } catch (apiError) {
      console.error('[callback] PTR Lead API forwarding failed:', apiError);
      return NextResponse.json(
        { success: false, message: 'Unable to process request. Please try again.' },
        { status: 502 },
      );
    }

    // ------------------------------------------------------------------
    // Non-blocking analytics logging via after()
    // ------------------------------------------------------------------

    after(() => {
      console.log('[callback] Submission received:', {
        name: data.name,
        source: data.source,
        zip: data.zip || 'n/a',
        timestamp: new Date().toISOString(),
      });
    });

    // ------------------------------------------------------------------
    // Return success (no email confirmation — no email collected)
    // ------------------------------------------------------------------

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[callback] Unexpected error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 },
    );
  }
}
