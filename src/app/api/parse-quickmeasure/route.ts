import { NextResponse } from 'next/server';

interface QuickMeasureData {
  address: string;
  roofArea: number;
  roofFacets: number;
  predominantPitch: string;
  ridgesHips: number;
  rakes: number;
  eaves: number;
  valleys: number;
  bends: number;
  date: string;
  priceLow: number;
  priceHigh: number;
  priceMid: number;
}

// Pricing per sqft tiers
const PRICE_LOW_PER_SQFT = 3.5;
const PRICE_MID_PER_SQFT = 5.25;
const PRICE_HIGH_PER_SQFT = 7.0;

function parseNumber(text: string): number {
  const match = text.replace(/,/g, '').match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function extractField(text: string, label: string): string {
  // Look for "Label\nValue" pattern in the extracted text
  const lines = text.split('\n').map((l) => l.trim());
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes(label.toLowerCase())) {
      // Value is on the same line after the label, or the next line
      const sameLine = lines[i].replace(new RegExp(label, 'i'), '').trim();
      if (sameLine && sameLine.match(/[\d/]/)) return sameLine;
      if (i + 1 < lines.length) return lines[i + 1].trim();
    }
  }
  return '';
}

function extractAddress(text: string): string {
  // First line of page 2 is usually the address
  const lines = text.split('\n').map((l) => l.trim()).filter((l) => l);
  // Look for a line that looks like an address (has a number and state abbreviation)
  for (const line of lines.slice(0, 5)) {
    if (line.match(/\d+.*[A-Z]{2}\s+\d{5}/)) {
      return line.replace(/\s*\(\d+\)\s*$/, '').trim();
    }
  }
  return lines[0] || 'Unknown Address';
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file || !file.name.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json(
        { success: false, error: 'Please upload a GAF QuickMeasure PDF report.' },
        { status: 400 }
      );
    }

    // Convert to buffer and extract text
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Use pdf-parse or similar — for now we'll use a simple approach
    // Since we're server-side Next.js, we can use dynamic import
    let text = '';
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { PDFParse } = require('pdf-parse');
      const uint8 = new Uint8Array(bytes);
      const parser = new PDFParse(uint8);
      const result = await parser.getText();
      // result.pages is an array of { text, num }
      text = result.pages.map((p: { text: string }) => p.text).join('\n');
    } catch {
      return NextResponse.json(
        { success: false, error: 'Could not read the PDF. Please make sure it is a valid GAF QuickMeasure report.' },
        { status: 400 }
      );
    }

    // Validate it's a QuickMeasure report
    if (!text.includes('Roof Area') || !text.includes('sq ft')) {
      return NextResponse.json(
        { success: false, error: 'This doesn\'t appear to be a GAF QuickMeasure report. Please upload the correct PDF.' },
        { status: 400 }
      );
    }

    // Extract measurements
    const address = extractAddress(text);
    const roofArea = parseNumber(extractField(text, 'Roof Area'));
    const roofFacets = parseNumber(extractField(text, 'Roof Facets'));
    const predominantPitch = extractField(text, 'Predominant Pitch') || 'Unknown';
    const ridgesHips = parseNumber(extractField(text, 'Ridges/Hips'));
    const rakes = parseNumber(extractField(text, 'Rakes'));
    const eaves = parseNumber(extractField(text, 'Eaves'));
    const valleys = parseNumber(extractField(text, 'Valleys'));
    const bends = parseNumber(extractField(text, 'Bends'));

    // Extract date
    const dateMatch = text.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}/);
    const date = dateMatch ? dateMatch[0] : '';

    if (roofArea < 100) {
      return NextResponse.json(
        { success: false, error: 'Could not extract roof measurements from this PDF. Please make sure it is a GAF QuickMeasure Full Report.' },
        { status: 400 }
      );
    }

    // Check if pitch is too low for shingles (less than 2/12)
    const pitchMatch = predominantPitch.match(/(\d+)\s*\/\s*12/);
    const pitchRise = pitchMatch ? parseInt(pitchMatch[1]) : 99;
    const lowPitch = pitchRise < 3;

    // Calculate pricing
    const priceLow = Math.round(roofArea * PRICE_LOW_PER_SQFT / 100) * 100;
    const priceMid = Math.round(roofArea * PRICE_MID_PER_SQFT / 100) * 100;
    const priceHigh = Math.round(roofArea * PRICE_HIGH_PER_SQFT / 100) * 100;

    const data: QuickMeasureData & { lowPitch: boolean } = {
      address,
      roofArea,
      roofFacets,
      predominantPitch,
      ridgesHips,
      rakes,
      eaves,
      valleys,
      bends,
      date,
      priceLow: lowPitch ? 0 : priceLow,
      priceHigh: lowPitch ? 0 : priceHigh,
      priceMid: lowPitch ? 0 : priceMid,
      lowPitch,
    };

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('[parse-quickmeasure] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong processing the report. Please try again.' },
      { status: 500 }
    );
  }
}
