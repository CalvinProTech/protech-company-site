// Testimonials data source.
//
// PRIMARY: real Google reviews fetched at build time by
// `scripts/fetch-google-reviews.mjs` and written to
// `src/data/google-reviews.json`. Run `npm run fetch-reviews` to refresh.
//
// FALLBACK: 12 placeholder entries below — used only when the JSON file
// doesn't exist (e.g. fresh checkout, CI without API access). All 12 are
// in our actual 9-state service area (FL/SC/NC/VA/MD/PA/CT/DE), but names
// and quotes are placeholder. They should never ship to production once
// the Places API fetch is wired and running.
//
// What changed 2026-04-29: removed 15 entries that referenced states
// ProTech doesn't service (TX/OH/KY/GA/TN/WV — including the "Cleveland"
// and "Kanawha Valley" reviews flagged by the external audit). Added the
// Google-Reviews JSON fallback path so real reviews take over once the
// Places API key has the right scope enabled.

import googleReviewsData from '@/data/google-reviews.json' with { type: 'json' };

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  state: string;
  rating: number;
  quote: string;
  serviceType: string;
  date: string;
}

// Placeholder list used only when Google reviews JSON is empty. Once the
// Places API fetch script has been run with an enabled API key, the
// `googleReviewsData.reviews` array takes over below.
const placeholderTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Torres",
    city: "Tampa",
    state: "FL",
    rating: 5.0,
    quote:
      "After two years of dealing with a persistent leak in our master bedroom, we called ProTech Roofing. They replaced our entire roof in just 2 days and the quality is outstanding. Before the replacement, we had water stains on three ceilings and were running out of buckets during storms. Now the house is bone dry even through last month's tropical storm. Their crew was professional, cleaned up every nail, and the new architectural shingles look incredible from the street.",
    serviceType: "roof-replacement",
    date: "2025-09-14",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    city: "Orlando",
    state: "FL",
    rating: 5.0,
    quote:
      "A hurricane left our neighborhood in rough shape last fall. We had missing shingles, a dented ridge vent, and water pouring into our attic. ProTech handled our entire insurance claim and had a tarp on our roof within four hours of our call. Before they stepped in, the insurance company was lowballing us by almost $6,000. Their documentation got us the full amount, and the new roof was installed within three weeks of claim approval. I cannot recommend them enough for storm damage work.",
    serviceType: "storm-damage",
    date: "2025-11-02",
  },
  {
    id: 3,
    name: "Angela Freeman",
    city: "Miami",
    state: "FL",
    rating: 5.0,
    quote:
      "Living in Miami means your roof takes a beating from salt air and hurricane season. Our concrete tile roof was cracking and leaking in multiple spots. ProTech removed the old tile, installed new underlayment and Miami-Dade approved concrete tiles in just 4 days. Before the project, we had tarps on the roof for two months waiting on another contractor who never showed. ProTech showed up when they said they would and finished on schedule. The new roof has already survived a tropical storm with zero issues.",
    serviceType: "roof-replacement",
    date: "2025-07-05",
  },
  {
    id: 4,
    name: "Marcus Williams",
    city: "Fort Lauderdale",
    state: "FL",
    rating: 5.0,
    quote:
      "After a tornado warning last summer, a large oak branch punctured our roof and rain was pouring into our living room. ProTech had an emergency crew at our house within three hours. They tarped the damage, and within two weeks they had replaced the entire damaged section with matching shingles. Before their arrival, we were panicking and stuffing towels into the ceiling. Their calm, professional approach turned a disaster into a manageable situation. Insurance covered everything and ProTech handled the whole claim.",
    serviceType: "storm-damage",
    date: "2025-08-25",
  },
  {
    id: 5,
    name: "Diana Vasquez",
    city: "Jacksonville",
    state: "FL",
    rating: 5.0,
    quote:
      "ProTech replaced the aging vinyl siding and gutters on our riverside home at the same time as our roof replacement. Before the project, the old siding was warped and faded, and the gutters were pulling away from the fascia. The transformation was remarkable. They installed James Hardie fiber cement siding and 6-inch seamless gutters with leaf guards. Our home looks brand new and we saved about 12 percent by bundling everything together. The whole project took 5 days and the crew was courteous and thorough.",
    serviceType: "gutters-siding",
    date: "2025-10-30",
  },
  {
    id: 6,
    name: "William Tran",
    city: "Charlotte",
    state: "NC",
    rating: 5.0,
    quote:
      "We had been putting off our roof replacement for two years because the quotes we received were all over the place. ProTech came out, did a thorough inspection, and gave us a clear, itemized estimate that made sense. They replaced our 25-year-old roof in two days with beautiful architectural shingles. Before ProTech, we had three different leaks every time it rained. Now our home is completely dry and we have peace of mind with their lifetime warranty.",
    serviceType: "roof-replacement",
    date: "2025-08-18",
  },
  {
    id: 7,
    name: "Samantha Blake",
    city: "Virginia Beach",
    state: "VA",
    rating: 4.5,
    quote:
      "Living near the coast means our roof takes a beating from salt air and hurricane season. Our old shingles were curling and we had a persistent leak around the chimney. ProTech installed a new high-wind-rated roof system and rebuilt all the flashing. Before the replacement, every nor'easter had us worried about water damage. Now we feel completely protected. The crew was courteous, cleaned up everything, and finished ahead of schedule.",
    serviceType: "roof-replacement",
    date: "2025-09-22",
  },
  {
    id: 8,
    name: "Daniel Garrett",
    city: "Philadelphia",
    state: "PA",
    rating: 5.0,
    quote:
      "Our South Philly row home had a flat roof that was leaking into our kitchen for months. Two other companies patched it but the leaks kept coming back. ProTech tore off the old roof, found rotted decking underneath, and installed a new TPO membrane system. Before ProTech, we had buckets on the kitchen floor every time it rained. After their work, we went through an entire winter with zero leaks. Finally a contractor who actually fixed the problem.",
    serviceType: "roof-repair",
    date: "2025-07-14",
  },
  {
    id: 9,
    name: "Lisa Caldwell",
    city: "Baltimore",
    state: "MD",
    rating: 5.0,
    quote:
      "Our 30-year-old roof was well past its lifespan and we knew it was time. ProTech provided a detailed 42-point inspection and showed us exactly where the problems were with thermal imaging. They replaced the entire roof in two days, including eight sheets of damaged decking we did not know about. Before the project, our attic was showing signs of moisture damage. The new roof has already weathered two major storms without a single issue.",
    serviceType: "roof-replacement",
    date: "2025-11-08",
  },
  {
    id: 10,
    name: "Mark Espinoza",
    city: "Charleston",
    state: "SC",
    rating: 5.0,
    quote:
      "Hurricane season left our Mount Pleasant home with significant wind damage and missing shingles across the entire front face. ProTech documented everything with their drone, met with our insurance adjuster, and got the full claim approved within two weeks. Before they stepped in, the insurance company was offering less than half of what the repair actually cost. ProTech advocated for us and we ended up with a beautiful new roof at just the cost of our deductible.",
    serviceType: "storm-damage",
    date: "2025-10-28",
  },
  {
    id: 11,
    name: "Christine Novak",
    city: "Hartford",
    state: "CT",
    rating: 4.5,
    quote:
      "Connecticut winters had caused severe ice dams along our eaves for the past three years, with water seeping into our walls and causing paint bubbles and mold. ProTech replaced our roof with proper ice-and-water shield on all eaves, added ridge ventilation, and installed snow guards. Before their work, we dreaded every snowfall. This past winter was the first without a single ice dam. The difference is remarkable and we wish we had called them sooner.",
    serviceType: "roof-repair",
    date: "2025-12-10",
  },
  {
    id: 12,
    name: "Andrew Kemp",
    city: "Wilmington",
    state: "DE",
    rating: 5.0,
    quote:
      "We needed a complete roof and gutter replacement on our colonial home in Hockessin. ProTech bundled both projects and saved us about 12 percent compared to doing them separately. The crew replaced the roof in two days and installed seamless gutters with leaf guards on the third day. Before the project, our gutters were overflowing and staining the siding. Now everything works perfectly and our home looks brand new from the street.",
    serviceType: "gutters-siding",
    date: "2025-06-30",
  },
];

// Source-of-truth selector: real Google reviews if any have been fetched,
// otherwise the placeholder fallback.
const googleReviews = (googleReviewsData.reviews ?? []) as Testimonial[];
const testimonials: Testimonial[] =
  googleReviews.length > 0 ? googleReviews : placeholderTestimonials;

export function getTestimonialsByCity(city: string): Testimonial[] {
  return testimonials.filter(
    (t) => t.city.toLowerCase() === city.toLowerCase()
  );
}

export function getTestimonialsByService(serviceType: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceType === serviceType);
}

export function getFeaturedTestimonials(count = 6): Testimonial[] {
  const sorted = [...testimonials].sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return sorted.slice(0, count);
}
