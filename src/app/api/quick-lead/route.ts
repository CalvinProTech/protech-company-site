import { NextResponse, after } from 'next/server';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';
import { isSpam, isFakePhoneNumber } from '@/lib/spam-detection';

// ---------------------------------------------------------------------------
// POST /api/quick-lead
//
// Server-side proxy for the two phone-only callback widgets (InstantPriceEstimate,
// /quote) that previously POSTed straight to the PTR Lead API from the browser:
// that path had NO spam gates (bots fired ad conversions unchecked — a ghost-
// conversion source) and shipped the Lead API key in the public JS bundle.
// This route applies the same gates as /api/callback but without requiring an
// email, keeps the key in server env, and returns tracked:false on spam so the
// client never fires conversions for blocked submissions.
// ---------------------------------------------------------------------------

const quickLeadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(
      /^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid US phone number'
    )
    .refine(
      (val) => !isFakePhoneNumber(val),
      'Please enter a real phone number'
    ),
  streetAddress: z.string().optional().or(z.literal('')),
  serviceType: z.string().optional().or(z.literal('')),
  source: z.string().min(1),
  smsConsent: z.boolean().optional(),
  smsConsentPromo: z.boolean().optional(),
});

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      'unknown';
    const { allowed } = rateLimit(ip, { limit: 5, windowMs: 60_000 });

    if (!allowed) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;

    if (
      isSpam({
        honeypot: (body._hp as string) || '',
        formLoadedAt: (body._t as number) || 0,
        name: body.name as string,
        phone: body.phone as string,
      })
    ) {
      console.log('[quick-lead] Spam blocked:', body.phone);
      // Fake 200 keeps the bot-deception contract; tracked:false suppresses
      // client-side ad conversions.
      return NextResponse.json({ success: true, tracked: false }, { status: 200 });
    }

    const result = quickLeadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const data = result.data;

    const apiUrl = process.env.PTR_LEAD_API_URL;
    const apiKey = process.env.PTR_LEAD_API_KEY;

    if (!apiUrl || !apiKey) {
      console.error('[quick-lead] PTR Lead API env vars not configured.');
      return NextResponse.json(
        { success: false, message: 'Service temporarily unavailable.' },
        { status: 503 },
      );
    }

    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '—';
    const utm = (body._utm as Record<string, string>) || {};

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
          streetAddress: data.streetAddress || undefined,
          serviceType: data.serviceType || undefined,
          smsConsent: data.smsConsent,
          smsConsentPromo: data.smsConsentPromo,
          source: data.source,
          utm_source: utm.utm_source || undefined,
          utm_medium: utm.utm_medium || undefined,
          utm_campaign: utm.utm_campaign || undefined,
          gclid: utm.gclid || undefined,
        }),
      });

      if (!apiResponse.ok) {
        const detail = await apiResponse.text().catch(() => '');
        console.error('[quick-lead] PTR Lead API error:', apiResponse.status, detail);
        return NextResponse.json(
          { success: false, message: 'Unable to process request. Please try again.' },
          { status: 502 },
        );
      }
    } catch (apiError) {
      console.error('[quick-lead] PTR Lead API forwarding failed:', apiError);
      return NextResponse.json(
        { success: false, message: 'Unable to process request. Please try again.' },
        { status: 502 },
      );
    }

    after(() => {
      console.log('[quick-lead] Submission received:', {
        name: data.name,
        source: data.source,
        timestamp: new Date().toISOString(),
      });
    });

    return NextResponse.json({ success: true, tracked: true }, { status: 200 });
  } catch (error) {
    console.error('[quick-lead] Unexpected error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
