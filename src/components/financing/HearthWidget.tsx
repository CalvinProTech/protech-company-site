'use client';

import { useEffect, useState } from 'react';

export default function HearthWidget() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Remove any previous Hearth script
    const existing = document.getElementById('hearth-script');
    if (existing) existing.remove();

    // Add the script — it looks for iframes with id starting with "hearth-widget_"
    // and writes content into them when DOMContentLoaded fires (or immediately if already loaded)
    const script = document.createElement('script');
    script.id = 'hearth-script';
    script.src = 'https://widget.gethearth.com/script.js';
    script.setAttribute('data-orgid', '58594');
    script.setAttribute('data-partner', 'protech-roofing-llc');
    script.onload = () => {
      // Hearth script checks for iframes on load. Since our iframe exists
      // in the DOM already (rendered below), it should find it.
      // But it may have already run its init. Force re-run by dispatching DOMContentLoaded.
      setTimeout(() => {
        // Re-query and populate — Hearth's init function looks for hearth-widget_ iframes
        const iframes = document.querySelectorAll('[id^=hearth-widget_]');
        if (iframes.length > 0 && !(iframes[0] as HTMLIFrameElement).contentDocument?.body?.innerHTML) {
          // Script loaded but didn't populate — reload
          window.dispatchEvent(new Event('DOMContentLoaded'));
        }
        setLoaded(true);
      }, 500);
    };
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('hearth-script');
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-md justify-center">
      <iframe
        id="hearth-widget_calculator_v1"
        title="Hearth Financing Calculator"
        width="320"
        height="771"
        scrolling="no"
        style={{
          border: 'none',
          borderRadius: 12,
          opacity: loaded ? 1 : 0.5,
          transition: 'opacity 0.3s',
        }}
      />
    </div>
  );
}
