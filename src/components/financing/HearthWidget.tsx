'use client';

import { useEffect, useRef } from 'react';

export default function HearthWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any existing script to allow re-init
    const existing = document.getElementById('hearth-script');
    if (existing) existing.remove();

    // Create the iframe element Hearth expects
    const iframe = document.createElement('iframe');
    iframe.id = 'hearth-widget_calculator_v1';
    iframe.title = 'Hearth Financing Calculator';
    iframe.style.width = '100%';
    iframe.style.minHeight = '500px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '12px';
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(iframe);

    // Load the Hearth script which populates the iframe
    const script = document.createElement('script');
    script.id = 'hearth-script';
    script.src = 'https://widget.gethearth.com/script.js';
    script.setAttribute('data-orgid', '58594');
    script.setAttribute('data-partner', 'protech-roofing-llc');
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-neutral-200">
      <div ref={containerRef} />
    </div>
  );
}
