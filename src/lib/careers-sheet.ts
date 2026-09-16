// ---------------------------------------------------------------------------
// Careers sheet client
//
// Applications land in a Google Sheet and resumes land in a Drive folder next
// to it. Both go through a single Apps Script web app that Calvin owns, rather
// than the Sheets/Drive APIs directly: the protechroof GCP org policy
// (iam.disableServiceAccountKeyCreation) blocks the service-account key this
// runtime would otherwise need, and an Apps Script deployment needs no key at
// all — just a URL and a shared secret.
//
// Deploy steps + the script itself: protech/scripts/careers-sheet/ in the
// workspace repo.
//
// Every call here fails SOFT. The notification email is the system of record
// for "did we hear about this applicant"; the sheet is the convenience copy.
// A sheet outage must never cost us an application.
// ---------------------------------------------------------------------------

const TIMEOUT_MS = 10_000;

export function isSheetConfigured(): boolean {
  return Boolean(
    process.env.CAREERS_SHEET_URL && process.env.CAREERS_SHEET_SECRET
  );
}

type SheetAction = 'application' | 'resume' | 'crew';

type SheetResponse = {
  ok: boolean;
  rowId?: string;
  fileUrl?: string;
  error?: string;
};

async function callSheet(
  action: SheetAction,
  payload: Record<string, unknown>
): Promise<SheetResponse> {
  if (!isSheetConfigured()) {
    console.warn(`[careers] sheet not configured — skipped ${action}`);
    return { ok: false, error: 'not-configured' };
  }

  try {
    const response = await fetch(process.env.CAREERS_SHEET_URL as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.CAREERS_SHEET_SECRET,
        action,
        payload,
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      // Apps Script answers /exec with a 302 to script.googleusercontent.com.
      redirect: 'follow',
    });

    if (!response.ok) {
      console.error(`[careers] sheet ${action} HTTP ${response.status}`);
      return { ok: false, error: `http-${response.status}` };
    }

    const result = (await response.json()) as SheetResponse;

    if (!result.ok) {
      console.error(`[careers] sheet ${action} rejected:`, result.error);
    }

    return result;
  } catch (error) {
    // Timeout, DNS, malformed JSON — all non-fatal for the applicant.
    console.error(`[careers] sheet ${action} failed:`, error);
    return { ok: false, error: 'request-failed' };
  }
}

export type ApplicationRow = {
  applicationId: string;
  submittedAt: string;
  role: string;
  roleTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  smsConsent: boolean;
  source: string;
  utm: Record<string, string>;
};

export function appendApplication(row: ApplicationRow) {
  return callSheet('application', row);
}

export function attachResume(file: {
  applicationId: string;
  filename: string;
  mimeType: string;
  /** Base64 WITHOUT the data: prefix. */
  contentBase64: string;
}) {
  return callSheet('resume', file);
}

export function appendCrewDetails(details: {
  applicationId: string;
  companyName: string;
  statesCovered: string[];
  crewSize: string;
  insured: boolean;
  notes?: string;
}) {
  return callSheet('crew', details);
}
