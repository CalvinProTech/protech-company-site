'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddressAutocompleteProps {
  onAddressSelect: (address: string) => void;
  disabled?: boolean;
}

declare global {
  interface Window {
    __googleMapsCallback?: () => void;
  }
}

let googleMapsLoaded = false;
let googleMapsLoading = false;

function loadGoogleMaps(): Promise<void> {
  if (googleMapsLoaded) return Promise.resolve();

  return new Promise((resolve, reject) => {
    if (googleMapsLoading) {
      // Another instance is already loading — wait for it
      const check = setInterval(() => {
        if (googleMapsLoaded) {
          clearInterval(check);
          resolve();
        }
      }, 100);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      // No key configured — silently fall back to plain text input
      resolve();
      return;
    }

    googleMapsLoading = true;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=__googleMapsCallback`;
    script.async = true;
    script.defer = true;

    window.__googleMapsCallback = () => {
      googleMapsLoaded = true;
      googleMapsLoading = false;
      delete window.__googleMapsCallback;
      resolve();
    };

    script.onerror = () => {
      googleMapsLoading = false;
      reject(new Error('Failed to load Google Maps'));
    };

    document.head.appendChild(script);
  });
}

export default function AddressAutocomplete({
  onAddressSelect,
  disabled = false,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    loadGoogleMaps()
      .then(() => setSdkReady(true))
      .catch((err) => {
        console.error('[AddressAutocomplete]', err);
        // Fallback: plain text input works fine without SDK
      });
  }, []);

  const initAutocomplete = useCallback(() => {
    if (!sdkReady || !inputRef.current || autocompleteRef.current) return;

    const ac = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: 'us' },
      types: ['address'],
      fields: ['formatted_address'],
    });

    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (place?.formatted_address) {
        setValue(place.formatted_address);
        onAddressSelect(place.formatted_address);
      }
    });

    autocompleteRef.current = ac;
  }, [sdkReady, onAddressSelect]);

  useEffect(() => {
    initAutocomplete();
  }, [initAutocomplete]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // If user hits Enter without picking from dropdown, use typed value
    if (e.key === 'Enter') {
      e.preventDefault();
      if (value.length >= 5) {
        onAddressSelect(value);
      }
    }
  }

  return (
    <div className="relative">
      <MapPin
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
        aria-hidden="true"
      />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your home address for a free instant estimate"
        disabled={disabled}
        autoComplete="off"
        className={cn(
          'h-14 w-full rounded-lg border-2 border-neutral-300 bg-white pl-12 pr-4 text-base text-neutral-900 sm:text-lg',
          'placeholder:text-neutral-400',
          'transition-colors duration-200',
          'focus:border-primary-500 focus:outline-none focus:ring-0',
          'disabled:cursor-not-allowed disabled:opacity-60',
        )}
      />
    </div>
  );
}
