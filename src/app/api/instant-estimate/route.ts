import { NextResponse, after } from 'next/server';
import { instantEstimateSchema } from '@/lib/schemas';
import { geocodeAddress, getBuildingInsights } from '@/lib/roof-estimate/google-apis';
import { calculateCustomerEstimate } from '@/lib/roof-estimate/pricing';
import { sendEstimateConfirmation, isEmailConfigured } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

// ---------------------------------------------------------------------------
// POST /api/instant-estimate
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    // ------------------------------------------------------------------
    // Rate limiting (stricter — Google API costs)
    // ------------------------------------------------------------------

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

    const body: unknown = await request.json();

    // ------------------------------------------------------------------
    // Validate input
    // ------------------------------------------------------------------

    const result = instantEstimateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = result.data;

    // ------------------------------------------------------------------
    // Step 1: Geocode address
    // ------------------------------------------------------------------

    const geocode = await geocodeAddress(data.address);

    if (!geocode) {
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't find that address. Please try a full street address.",
        },
        { status: 404 },
      );
    }

    // ------------------------------------------------------------------
    // Step 2 & 3: Get roof measurements + forward lead in parallel
    // ------------------------------------------------------------------

    const apiUrl = process.env.PTR_LEAD_API_URL;
    const apiKey = process.env.PTR_LEAD_API_KEY;

    const roofPromise = getBuildingInsights(geocode.latitude, geocode.longitude);

    const leadPromise =
      apiUrl && apiKey
        ? fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': apiKey,
            },
            body: JSON.stringify({
              firstName: data.firstName,
              lastName: data.lastName,
              phone: data.phone,
              email: data.email || '',
              streetAddress: data.address,
              city: geocode.city,
              state: geocode.state,
              zip: geocode.zipCode,
              serviceType: 'roof-replacement',
              source: 'instant-estimate',
            }),
          })
        : Promise.resolve(null);

    const [roofResult, leadResult] = await Promise.allSettled([
      roofPromise,
      leadPromise,
    ]);

    // Log PTR Lead API errors
    if (leadResult.status === 'rejected') {
      console.error('[instant-estimate] PTR Lead API forwarding failed:', leadResult.reason);
    } else if (leadResult.value && !leadResult.value.ok) {
      const detail =
        process.env.NODE_ENV === 'development'
          ? await leadResult.value.text()
          : '';
      console.error(
        '[instant-estimate] PTR Lead API error:',
        leadResult.value.status,
        detail,
      );
    }

    const roofData = roofResult.status === 'fulfilled' ? roofResult.value : null;

    // ------------------------------------------------------------------
    // If Solar API has no coverage, return error (lead is already captured)
    // ------------------------------------------------------------------

    if (!roofData) {
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't measure your roof remotely. Call us for a free in-person estimate!",
        },
        { status: 404 },
      );
    }

    // ------------------------------------------------------------------
    // Step 4: Calculate estimate price
    // ------------------------------------------------------------------

    const estimatePrice = calculateCustomerEstimate(roofData.roofAreaSqFt);

    // ------------------------------------------------------------------
    // Send confirmation email (before response so it completes on Vercel)
    // ------------------------------------------------------------------

    let emailSent = false;

    if (data.email && isEmailConfigured()) {
      try {
        await sendEstimateConfirmation({
          firstName: data.firstName,
          email: data.email,
        });
        emailSent = true;
        console.log('[instant-estimate] Confirmation email sent to:', data.email);
      } catch (emailError) {
        console.error(
          '[instant-estimate] Failed to send confirmation email:',
          emailError,
        );
      }
    }

    // ------------------------------------------------------------------
    // Non-blocking analytics logging via after()
    // ------------------------------------------------------------------

    after(() => {
      console.log('[instant-estimate] Submission received:', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        roofAreaSqFt: roofData.roofAreaSqFt,
        estimatePrice,
        emailSent,
        timestamp: new Date().toISOString(),
      });
    });

    // ------------------------------------------------------------------
    // Return success with estimate data
    // ------------------------------------------------------------------

    return NextResponse.json({
      success: true,
      emailSent,
      data: {
        roofAreaSqFt: roofData.roofAreaSqFt,
        estimatePrice,
        formattedAddress: geocode.formattedAddress,
        city: geocode.city,
        state: geocode.state,
        zip: geocode.zipCode,
      },
    });
  } catch (error) {
    console.error('[instant-estimate] Unexpected error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again or call us.',
      },
      { status: 500 },
    );
  }
}
