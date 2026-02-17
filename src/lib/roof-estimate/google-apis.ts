// ---------------------------------------------------------------------------
// Instant Roof Estimate — Google APIs (Geocoding + Solar)
// ---------------------------------------------------------------------------

import type { GeocodeResult, RoofData } from './types';

const GEOCODING_API_BASE = 'https://maps.googleapis.com/maps/api/geocode/json';
const SOLAR_API_BASE = 'https://solar.googleapis.com/v1';

function getApiKey(): string {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) {
    throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not configured');
  }
  return key;
}

function sqMetersToSqFeet(meters: number): number {
  return meters * 10.7639;
}

// ---------------------------------------------------------------------------
// Geocode an address → lat/lng + city/state/zip
// ---------------------------------------------------------------------------

export async function geocodeAddress(
  address: string,
): Promise<GeocodeResult | null> {
  const key = getApiKey();

  const url = new URL(GEOCODING_API_BASE);
  url.searchParams.set('address', address);
  url.searchParams.set('key', key);

  const response = await fetch(url.toString(), { signal: AbortSignal.timeout(10_000) });

  if (!response.ok) {
    throw new Error(`Geocoding API error: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.status !== 'OK' || !data.results?.length) {
    return null;
  }

  const result = data.results[0];
  const location = result.geometry.location;

  const components: { types: string[]; long_name: string; short_name: string }[] =
    result.address_components || [];

  let city = '';
  let state = '';
  let zipCode = '';

  for (const component of components) {
    const types = component.types || [];
    if (types.includes('locality')) {
      city = component.long_name;
    } else if (types.includes('administrative_area_level_1')) {
      state = component.short_name;
    } else if (types.includes('postal_code')) {
      zipCode = component.long_name;
    }
  }

  return {
    formattedAddress: result.formatted_address,
    latitude: location.lat,
    longitude: location.lng,
    city,
    state,
    zipCode,
  };
}

// ---------------------------------------------------------------------------
// Get building insights from Google Solar API → roof area in sqft
// ---------------------------------------------------------------------------

export async function getBuildingInsights(
  lat: number,
  lng: number,
): Promise<RoofData | null> {
  const key = getApiKey();

  const qualityLevels = ['HIGH', 'MEDIUM', 'LOW'] as const;

  for (const quality of qualityLevels) {
    const url = `${SOLAR_API_BASE}/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=${quality}&key=${key}`;

    const response = await fetch(url, { signal: AbortSignal.timeout(15_000) });

    if (response.ok) {
      const data = await response.json();

      const solarPotential = data.solarPotential;
      if (!solarPotential) {
        continue;
      }

      const wholeRoofStats = solarPotential.wholeRoofStats;
      const segments: { areaMeters2: number }[] =
        solarPotential.roofSegmentStats || [];

      const roofAreaSqFt = wholeRoofStats?.areaMeters2
        ? sqMetersToSqFeet(wholeRoofStats.areaMeters2)
        : segments.reduce(
            (sum, seg) => sum + sqMetersToSqFeet(seg.areaMeters2),
            0,
          );

      return { roofAreaSqFt: Math.round(roofAreaSqFt) };
    }

    // 404 = no coverage at this quality level, try next
    if (response.status === 404) {
      continue;
    }

    throw new Error(`Solar API error: ${response.statusText}`);
  }

  // No data at any quality level
  return null;
}
