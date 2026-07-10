'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ParsedAddress {
  formatted: string;
  street: string;
  city: string;
  state: string; // 2-letter short_name
  zip: string;
}

interface AddressAutocompleteProps {
  onAddressSelect: (address: string, parsed?: ParsedAddress) => void;
  /**
   * Fires on every keystroke with the raw typed value. Lets parents capture
   * the address even when the visitor never picks a Google suggestion or
   * presses Enter (the old behavior silently dropped typed-but-unpicked
   * addresses — a documented mobile form-killer).
   */
  onInputChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

declare global {
  interface Window {
    __googleMapsCallback?: () => void;
  }
}

let loadPromise: Promise<void> | null = null;

function loadGoogleMaps(): Promise<void> {
  if (loadPromise) return loadPromise;

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    // No key configured — silently fall back to plain text input
    loadPromise = Promise.resolve();
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=__googleMapsCallback`;
    script.async = true;
    script.defer = true;

    window.__googleMapsCallback = () => {
      delete window.__googleMapsCallback;
      resolve();
    };

    script.onerror = () => {
      loadPromise = null; // Allow retry on failure
      reject(new Error('Failed to load Google Maps'));
    };

    document.head.appendChild(script);
  });

  return loadPromise;
}

function parseAddressComponents(
  place: google.maps.places.PlaceResult,
): ParsedAddress {
  const comps = place.address_components || [];
  const get = (type: string, useShort = false) => {
    const c = comps.find((x) => x.types.includes(type));
    return c ? (useShort ? c.short_name : c.long_name) : '';
  };
  const streetNumber = get('street_number');
  const route = get('route');
  const street = [streetNumber, route].filter(Boolean).join(' ');
  const city =
    get('locality') || get('sublocality') || get('postal_town') || get('neighborhood');
  const state = get('administrative_area_level_1', true);
  const zip = get('postal_code');
  return {
    formatted: place.formatted_address || '',
    street,
    city,
    state,
    zip,
  };
}

export default function AddressAutocomplete({
  onAddressSelect,
  onInputChange,
  disabled = false,
  placeholder = 'Enter your home address for a free instant estimate',
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
      fields: ['formatted_address', 'address_components'],
    });

    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (place?.formatted_address) {
        const parsed = parseAddressComponents(place);
        setValue(parsed.formatted);
        onAddressSelect(parsed.formatted, parsed);
      }
    });

    autocompleteRef.current = ac;
  }, [sdkReady, onAddressSelect]);

  useEffect(() => {
    initAutocomplete();

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
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
        onChange={(e) => {
          setValue(e.target.value);
          onInputChange?.(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
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
