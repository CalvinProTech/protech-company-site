import { NextResponse, after } from 'next/server';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas';

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
            first_name: data.name.split(' ')[0] ?? '',
            last_name: data.name.split(' ').slice(1).join(' ') || data.name,
            phone: data.phone,
            email: data.email,
            description: data.message,
          }),
        });
      } catch (sfError) {
        // Log but do not fail the user request if Salesforce is unreachable
        console.error('[contact] Salesforce forwarding failed:', sfError);
      }
    } else {
      console.log(
        '[contact] Salesforce env vars not configured. Skipping CRM forwarding.'
      );
    }

    // ------------------------------------------------------------------
    // Non-blocking analytics logging via after()
    // ------------------------------------------------------------------

    after(() => {
      console.log('[contact] Submission received:', {
        name: data.name,
        email: data.email,
        timestamp: new Date().toISOString(),
      });
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
