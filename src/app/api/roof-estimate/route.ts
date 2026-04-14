import { NextResponse } from 'next/server';

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const SOLAR_API_BASE = 'https://solar.googleapis.com/v1';
const GEOCODE_API_BASE = 'https://maps.googleapis.com/maps/api/geocode/json';

// Pricing constants for customer-facing estimate range
const LOW_PRICE_PER_SQFT = 3.5;  // Budget materials, simple roof
const HIGH_PRICE_PER_SQFT = 7.0; // Premium materials, complex roof

function slopeCorrectionFactor(pitchDegrees: number): number {
  if (pitchDegrees <= 0) return 1;
  return 1 / Math.cos((pitchDegrees * Math.PI) / 180);
}

function pitchDegreesToRatio(degrees: number): string {
  const rise = Math.round(Math.tan((degrees * Math.PI) / 180) * 12);
  return `${rise}/12`;
}

export async function POST(request: Request) {
  try {
    const { address } = await request.json();
    if (!address || !GOOGLE_API_KEY) {
      return NextResponse.json({ success: false, error: 'Address is required' }, { status: 400 });
    }

    // 1. Geocode
    const geoUrl = `${GEOCODE_API_BASE}?address=${encodeURIComponent(address)}&key=${GOOGLE_API_KEY}`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    if (geoData.status !== 'OK' || !geoData.results?.length) {
      return NextResponse.json({
        success: false,
        error: 'Could not find the address. Please enter your full address with city and state.',
      });
    }

    const { lat, lng } = geoData.results[0].geometry.location;

    // 2. Solar API
    type RoofSegment = { pitchDegrees?: number; stats: { areaMeters2: number } };
    let segments: RoofSegment[] = [];
    let dataQuality = 'LOW';

    for (const quality of ['HIGH', 'MEDIUM', 'LOW']) {
      const solarUrl = `${SOLAR_API_BASE}/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=${quality}&key=${GOOGLE_API_KEY}`;
      const solarRes = await fetch(solarUrl);
      if (solarRes.ok) {
        const solarData = await solarRes.json();
        if (solarData.solarPotential?.roofSegmentStats) {
          segments = solarData.solarPotential.roofSegmentStats;
          dataQuality = quality;
          break;
        }
      }
    }

    if (segments.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Satellite data is not available for this address. Please call us for a manual estimate.',
      });
    }

    // 3. Calculate area with per-segment slope correction
    const roofAreaSqFt = Math.round(
      segments.reduce((sum, seg) => {
        const planSqFt = seg.stats.areaMeters2 * 10.7639;
        const pitchDeg = seg.pitchDegrees ?? 0;
        return sum + planSqFt * slopeCorrectionFactor(pitchDeg);
      }, 0)
    );

    // Predominant pitch
    const largest = segments.reduce((prev, curr) =>
      curr.stats.areaMeters2 > prev.stats.areaMeters2 ? curr : prev
    );
    const pitchDeg = largest.pitchDegrees ?? 0;

    // Check if pitch is too low for shingles (below 3/12 ≈ 14°)
    const pitchRatio = pitchDegreesToRatio(pitchDeg);
    const pitchRise = parseInt(pitchRatio.split('/')[0]) || 0;
    const lowPitch = pitchRise < 3;

    // 4. Price range (only for standard pitch roofs)
    const priceLow = lowPitch ? 0 : Math.round(roofAreaSqFt * LOW_PRICE_PER_SQFT / 100) * 100;
    const priceHigh = lowPitch ? 0 : Math.round(roofAreaSqFt * HIGH_PRICE_PER_SQFT / 100) * 100;

    return NextResponse.json({
      success: true,
      data: {
        roofAreaSqFt,
        predominantPitch: pitchRatio,
        roofFacets: segments.length,
        dataQuality,
        priceLow,
        priceHigh,
        lowPitch,
      },
    });
  } catch (error) {
    console.error('[roof-estimate] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
