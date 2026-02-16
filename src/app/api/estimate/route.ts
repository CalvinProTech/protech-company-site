import { NextResponse, after } from 'next/server';
import { estimateFormSchema, type EstimateFormData } from '@/lib/schemas';

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
    // Forward to Salesforce Web-to-Lead (placeholder)
    // ------------------------------------------------------------------

    const salesforceEndpoint = process.env.SALESFORCE_ENDPOINT;
    const salesforceOid = process.env.SALESFORCE_OID;

    if (salesforceEndpoint && salesforceOid) {
      try {
        await fetch(salesforceEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            oid: salesforceOid,
            first_name: data.fullName.split(' ')[0] ?? '',
            last_name: data.fullName.split(' ').slice(1).join(' ') || data.fullName,
            phone: data.phone,
            email: data.email,
            street: data.streetAddress,
            city: data.city,
            state: data.state,
            description: [
              `Service: ${data.serviceNeeded}`,
              data.howDidYouHear
                ? `Referral Source: ${data.howDidYouHear}`
                : '',
              data.additionalDetails
                ? `Details: ${data.additionalDetails}`
                : '',
            ]
              .filter(Boolean)
              .join('\n'),
          }),
        });
      } catch (sfError) {
        // Log but do not fail the user request if Salesforce is unreachable
        console.error('[estimate] Salesforce forwarding failed:', sfError);
      }
    } else {
      console.log(
        '[estimate] Salesforce env vars not configured. Skipping CRM forwarding.'
      );
    }

    // ------------------------------------------------------------------
    // Non-blocking analytics logging via after()
    // ------------------------------------------------------------------

    after(() => {
      console.log('[estimate] Submission received:', {
        fullName: data.fullName,
        email: data.email,
        state: data.state,
        serviceNeeded: data.serviceNeeded,
        timestamp: new Date().toISOString(),
      });
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
