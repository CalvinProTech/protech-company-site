declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
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
    });
  }
}

export function trackFormSubmit(
  formType: 'estimate' | 'contact' | 'instant-estimate',
  data: Record<string, unknown>
) {
  pushEvent(`form_submit_${formType}`, {
    form_type: formType,
    ...data,
  });

  // Fire Google Ads conversion
  const label =
    formType === 'estimate'
      ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL
      : formType === 'contact'
        ? process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL
        : process.env.NEXT_PUBLIC_GOOGLE_ADS_ESTIMATE_LABEL;
  fireGoogleAdsConversion(label);
}

export function trackPhoneClick(location: string, page: string) {
  pushEvent('click_phone', { location, page });

  // Fire Google Ads phone conversion
  fireGoogleAdsConversion(
    process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL,
  );
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
