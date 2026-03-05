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
      return NextResponse.json({ success: true }, { status: 200 });
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

    if (apiUrl && apiKey) {
      try {
        const apiResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey,
          },
          body: JSON.stringify({
            firstName: data.name,
            lastName: '',
            phone: data.phone,
            zip: data.zip || undefined,
            source: data.source,
          }),
        });

        if (!apiResponse.ok) {
          const detail =
            process.env.NODE_ENV === 'development'
              ? await apiResponse.text()
              : '';
          console.error(
            '[callback] PTR Lead API error:',
            apiResponse.status,
            detail,
          );
        }
      } catch (apiError) {
        console.error(
          '[callback] PTR Lead API forwarding failed:',
          apiError,
        );
      }
    } else {
      console.log(
        '[callback] PTR Lead API env vars not configured. Skipping lead forwarding.',
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
