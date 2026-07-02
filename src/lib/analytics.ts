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

function fireGoogleAdsConversion(conversionLabel?: string) {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
  if (typeof window !== 'undefined' && window.gtag && conversionId) {
    window.gtag('event', 'conversion', {
      send_to: conversionLabel
        ? `${conversionId}/${conversionLabel}`
        : conversionId,
      // Unique per fire so Google dedupes re-fires (the exit-intent popup and
      // floating widget are both mounted globally — one household could
      // otherwise register multiple identical conversions).
      transaction_id:
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    });
  }
}

export function trackFormSubmit(
  formType: 'estimate' | 'contact' | 'instant-estimate' | 'callback',
  data: Record<string, unknown>
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
  fireGoogleAdsConversion(label);

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
