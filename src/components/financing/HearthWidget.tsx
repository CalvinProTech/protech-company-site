'use client';

import { useEffect } from 'react';

export default function HearthWidget() {
  useEffect(() => {
    // Load Hearth script
    if (document.getElementById('hearth-script')) return;

    const script = document.createElement('script');
    script.id = 'hearth-script';
    script.src = 'https://widget.gethearth.com/script.js';
    script.setAttribute('data-orgid', '58594');
    script.setAttribute('data-partner', 'protech-roofing-llc');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById('hearth-script');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      <iframe
        id="hearth-widget_calculator_v1"
        title="Hearth Financing Calculator"
        className="w-full rounded-xl border-0"
        style={{ minHeight: 600 }}
      />
    </div>
  );
}
