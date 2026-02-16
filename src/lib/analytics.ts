declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
}

export function trackFormSubmit(
  formType: 'estimate' | 'contact',
  data: Record<string, unknown>
) {
  pushEvent(`form_submit_${formType}`, {
    form_type: formType,
    ...data,
  });
}

export function trackPhoneClick(location: string, page: string) {
  pushEvent('click_phone', { location, page });
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
