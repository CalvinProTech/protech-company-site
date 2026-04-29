#!/usr/bin/env node
/**
 * Fetch ProTech Roofing's Google reviews via the Places API (New) and
 * write them to src/data/google-reviews.json. Runs at build time (or
 * whenever you want to refresh the testimonials section).
 *
 * Why this script exists: previously the site shipped with 27 fabricated
 * testimonials, 15 of which were placed in states ProTech doesn't service.
 * This script replaces them with real Google reviews — capped at the 5
 * most-relevant returns from Places Details (the Places API limit).
 *
 * Usage:
 *   GOOGLE_MAPS_API_KEY="AIzaSy..." node scripts/fetch-google-reviews.mjs
 *
 * Or just run it; it falls back to NEXT_PUBLIC_GOOGLE_MAPS_API_KEY from
 * .env.local automatically (read manually below — no dotenv dependency).
 *
 * Re-run cadence: monthly is plenty. The 5 returned reviews are Google's
 * "most relevant" picks, which only shift when significant new reviews land.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENV_FILE = path.join(ROOT, '.env.local');
const OUT_DIR = path.join(ROOT, 'src/data');
const OUT_FILE = path.join(OUT_DIR, 'google-reviews.json');

// Load NEXT_PUBLIC_GOOGLE_MAPS_API_KEY from .env.local without pulling in
// dotenv as a dependency (one less thing to install).
function loadEnvKey() {
  if (process.env.GOOGLE_MAPS_API_KEY) return process.env.GOOGLE_MAPS_API_KEY;
  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!fs.existsSync(ENV_FILE)) return null;
  const text = fs.readFileSync(ENV_FILE, 'utf8');
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*(NEXT_PUBLIC_GOOGLE_MAPS_API_KEY|GOOGLE_MAPS_API_KEY)\s*=\s*"?([^"\s]+)"?/);
    if (m) return m[2];
  }
  return null;
}

const KEY = loadEnvKey();
if (!KEY) {
  console.error('No GOOGLE_MAPS_API_KEY found. Set GOOGLE_MAPS_API_KEY env var or NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local.');
  process.exit(1);
}

// Step 1 — Find ProTech's place_id by text search. The verified business
// address is the most specific signal and avoids false positives from
// similarly-named contractors (e.g. Hernando "Pro Tech" Roofing).
async function findPlaceId() {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': KEY,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount',
    },
    body: JSON.stringify({
      textQuery: 'ProTech Roofing 4950 W Kennedy Blvd Tampa FL 33609',
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`searchText failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  if (!data.places || data.places.length === 0) {
    throw new Error('No place candidates returned for ProTech Roofing.');
  }
  const top = data.places[0];
  console.log(`Matched: ${top.displayName?.text} — ${top.formattedAddress}`);
  console.log(`Rating ${top.rating} from ${top.userRatingCount} reviews · place_id ${top.id}`);
  return top.id;
}

// Step 2 — Pull Place Details with the reviews field. Returns up to 5
// most-relevant reviews per Place. (For all reviews, we'd need GBP API
// + OAuth — separate task.)
async function fetchReviews(placeId) {
  const fields = 'id,displayName,rating,userRatingCount,reviews';
  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      'X-Goog-Api-Key': KEY,
      'X-Goog-FieldMask': fields,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`places/${placeId} failed (${res.status}): ${body}`);
  }
  return res.json();
}

// Map Google's review schema to the testimonial schema our components
// already expect. Google review.publishTime is ISO-8601; reviewers come
// with first+last name (we keep first + last initial only for
// privacy + display tightness).
function transformReviews(googleReviews) {
  if (!Array.isArray(googleReviews)) return [];
  return googleReviews.map((r, i) => {
    const fullName = r.authorAttribution?.displayName ?? 'ProTech customer';
    const parts = fullName.split(/\s+/);
    const displayName = parts.length > 1
      ? `${parts[0]} ${parts[parts.length - 1][0]}.`
      : parts[0];
    return {
      id: i + 1,
      name: displayName,
      // Google doesn't expose city per review. Default to Tampa (HQ).
      city: 'Tampa',
      state: 'FL',
      rating: r.rating ?? 5,
      quote: r.text?.text ?? r.originalText?.text ?? '',
      // No service-type metadata in Google reviews. Default to a neutral tag.
      serviceType: 'roof-replacement',
      date: r.publishTime?.slice(0, 10) ?? new Date().toISOString().slice(0, 10),
      // Source link so the UI can link "Verified Google review" → real review.
      googleAuthorUrl: r.authorAttribution?.uri ?? null,
    };
  });
}

async function main() {
  console.log('Looking up ProTech Roofing place_id...');
  const placeId = await findPlaceId();
  console.log('Fetching place details + reviews...');
  const place = await fetchReviews(placeId);
  const transformed = transformReviews(place.reviews);
  const payload = {
    placeId: place.id,
    displayName: place.displayName?.text,
    rating: place.rating,
    userRatingCount: place.userRatingCount,
    fetchedAt: new Date().toISOString(),
    reviews: transformed,
  };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${transformed.length} reviews to ${path.relative(ROOT, OUT_FILE)}`);
}

main().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
