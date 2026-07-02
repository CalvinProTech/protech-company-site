const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
] as const;

const STORAGE_KEY = 'protech_utm';

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
}

// Google Ads click lookback is 30 days; 90 gives margin for long roofing
// decision cycles while still expiring stale attribution.
const TTL_MS = 90 * 24 * 60 * 60 * 1000;

/**
 * Reads UTM / gclid params from the current URL and stores them in
 * localStorage with a 90-day expiry. Call once on page load (e.g. in
 * AnalyticsProvider). localStorage (not sessionStorage) so a visitor who
 * clicks an ad today and submits from a new tab next week still carries
 * their gclid — sessionStorage was silently dropping returning-visitor
 * attribution (leads landed in SF as "Website" instead of "Google Ads").
 */
export function captureUtmParams(): void {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  let hasAny = false;

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
      hasAny = true;
    }
  }

  if (hasAny) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...utm, _exp: Date.now() + TTL_MS }),
      );
    } catch {
      // localStorage unavailable (private browsing, etc.)
    }
  }
}

/**
 * Returns stored UTM params, or an empty object if none exist.
 */
export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const stored = JSON.parse(raw) as UtmParams & { _exp?: number };
    const { _exp, ...utm } = stored;
    if (_exp && Date.now() > _exp) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return utm;
  } catch {
    return {};
  }
}
