import { NextResponse, after } from 'next/server';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas';
import { sendContactConfirmation } from '@/lib/email';

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    // ------------------------------------------------------------------
    // Validate input
    // ------------------------------------------------------------------

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data: ContactFormData = result.data;

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
          }),
        });

        if (!apiResponse.ok) {
          console.error(
            '[contact] PTR Lead API error:',
            apiResponse.status,
            await apiResponse.text()
          );
        }
      } catch (apiError) {
        console.error('[contact] PTR Lead API forwarding failed:', apiError);
      }
    } else {
      console.log(
        '[contact] PTR Lead API env vars not configured. Skipping lead forwarding.'
      );
    }

    // ------------------------------------------------------------------
    // Non-blocking analytics logging via after()
    // ------------------------------------------------------------------

    after(async () => {
      console.log('[contact] Submission received:', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        timestamp: new Date().toISOString(),
      });

      try {
        await sendContactConfirmation({
          firstName: data.firstName,
          email: data.email,
        });
        console.log('[contact] Confirmation email sent to:', data.email);
      } catch (emailError) {
        console.error('[contact] Failed to send confirmation email:', emailError);
      }
    });

    // ------------------------------------------------------------------
    // Return success
    // ------------------------------------------------------------------

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[contact] Unexpected error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}
