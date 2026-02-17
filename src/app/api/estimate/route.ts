import { NextResponse, after } from 'next/server';
import { estimateFormSchema, type EstimateFormData } from '@/lib/schemas';
import { sendEstimateConfirmation } from '@/lib/email';

// ---------------------------------------------------------------------------
// POST /api/estimate
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    // ------------------------------------------------------------------
    // Validate input
    // ------------------------------------------------------------------

    const result = estimateFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data: EstimateFormData = result.data;

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
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            streetAddress: data.streetAddress,
            city: data.city,
            state: data.state,
            zip: data.zip,
            serviceType: data.serviceNeeded,
          }),
        });

        if (!apiResponse.ok) {
          console.error(
            '[estimate] PTR Lead API error:',
            apiResponse.status,
            await apiResponse.text()
          );
        }
      } catch (apiError) {
        console.error('[estimate] PTR Lead API forwarding failed:', apiError);
      }
    } else {
      console.log(
        '[estimate] PTR Lead API env vars not configured. Skipping lead forwarding.'
      );
    }

    // ------------------------------------------------------------------
    // Non-blocking analytics logging via after()
    // ------------------------------------------------------------------

    after(async () => {
      console.log('[estimate] Submission received:', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        state: data.state,
        serviceNeeded: data.serviceNeeded,
        timestamp: new Date().toISOString(),
      });

      try {
        await sendEstimateConfirmation({
          firstName: data.firstName,
          email: data.email,
        });
        console.log('[estimate] Confirmation email sent to:', data.email);
      } catch (emailError) {
        console.error('[estimate] Failed to send confirmation email:', emailError);
      }
    });

    // ------------------------------------------------------------------
    // Return success
    // ------------------------------------------------------------------

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[estimate] Unexpected error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}
