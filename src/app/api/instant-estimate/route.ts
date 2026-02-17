import { NextResponse, after } from 'next/server';
import { instantEstimateSchema } from '@/lib/schemas';
import { geocodeAddress, getBuildingInsights } from '@/lib/roof-estimate/google-apis';
import { calculateCustomerEstimate } from '@/lib/roof-estimate/pricing';
import { sendEstimateConfirmation } from '@/lib/email';

// ---------------------------------------------------------------------------
// POST /api/instant-estimate
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
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
    // Step 2: Get roof measurements from Solar API
    // ------------------------------------------------------------------

    const roofData = await getBuildingInsights(geocode.latitude, geocode.longitude);

    // ------------------------------------------------------------------
    // Step 3: Forward lead to PTR Lead API (before returning result)
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
        });

        if (!apiResponse.ok) {
          console.error(
            '[instant-estimate] PTR Lead API error:',
            apiResponse.status,
            await apiResponse.text(),
          );
        }
      } catch (apiError) {
        console.error('[instant-estimate] PTR Lead API forwarding failed:', apiError);
      }
    }

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
    // Non-blocking: log + send confirmation email
    // ------------------------------------------------------------------

    after(async () => {
      console.log('[instant-estimate] Submission received:', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        roofAreaSqFt: roofData.roofAreaSqFt,
        estimatePrice,
        timestamp: new Date().toISOString(),
      });

      if (data.email) {
        try {
          await sendEstimateConfirmation({
            firstName: data.firstName,
            email: data.email,
          });
          console.log('[instant-estimate] Confirmation email sent to:', data.email);
        } catch (emailError) {
          console.error(
            '[instant-estimate] Failed to send confirmation email:',
            emailError,
          );
        }
      }
    });

    // ------------------------------------------------------------------
    // Return success with estimate data
    // ------------------------------------------------------------------

    return NextResponse.json({
      success: true,
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
