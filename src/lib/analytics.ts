declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function pushEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
}

// FNV-1a hash — Google dedupes conversions that share the SAME transaction_id,
// so the id must be STABLE per lead (derived from their phone digits), not
// unique per fire. A double-submit or the same household converting through
// both the exit-intent popup and the floating widget then collides into one
// counted conversion instead of two.
function stableDedupeId(key: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return `lead-${(h >>> 0).toString(36)}`;
}

function fireGoogleAdsConversion(conversionLabel?: string, dedupeKey?: string) {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
  if (typeof window !== 'undefined' && window.gtag && conversionId) {
    const normalizedKey = dedupeKey?.replace(/\D/g, '') || dedupeKey;
    window.gtag('event', 'conversion', {
      send_to: conversionLabel
        ? `${conversionId}/${conversionLabel}`
        : conversionId,
      transaction_id: normalizedKey
        ? stableDedupeId(normalizedKey)
        : typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    });
  }
}

export function trackFormSubmit(
  formType: 'estimate' | 'contact' | 'instant-estimate' | 'callback',
  data: Record<string, unknown>,
  /** Stable per-lead key (their phone number) so duplicate fires dedupe. */
  dedupeKey?: string
) {
  pushEvent(`form_submit_${formType}`, {
    form_type: formType,
    ...data,
  });

  // Fire Google Ads conversion
  const label =
    formType === 'callback'
      ? process.env.NEXT_PUBLIC_GOOGLE_ADS_CALLBACK_LABEL
      : formType === 'estimate'
        ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL
        : formType === 'contact'
          ? process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL
          : process.env.NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL;
  fireGoogleAdsConversion(label, dedupeKey);

  // Fire Meta Pixel Lead event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formType,
      ...data,
    });
  }
}

export function trackLeadWidgetEvent(
  action:
    | 'popup_shown'
    | 'popup_dismissed'
    | 'widget_opened'
    | 'widget_closed',
  page: string
) {
  pushEvent('lead_widget', { action, page });
}

export function trackPhoneClick(location: string, page: string) {
  pushEvent('click_phone', { location, page });

  // Don't fire Google Ads conversion on phone clicks — phone calls to 866
  // don't create Salesforce leads, so counting them inflates conversion numbers.
  // Only form submissions should count as conversions.
}

export function trackCTAClick(
  buttonText: string,
  page: string,
  section: string
) {
  pushEvent('click_cta', {
    button_text: buttonText,
    page,
    section,
  });
}

export function trackScrollDepth(page: string, depth: number) {
  pushEvent('scroll_depth', { page, depth_percent: depth });
}

export function trackProjectView(projectId: string, city: string) {
  pushEvent('view_project', { project_id: projectId, city });
}
