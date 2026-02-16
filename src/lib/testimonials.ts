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

const testimonials: Testimonial[] = [
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
    name: "James Richardson",
    city: "Dallas",
    state: "TX",
    rating: 5.0,
    quote:
      "We had significant hail damage after the spring storms and ProTech was the only company that did not try to upsell us on unnecessary work. They documented every dent with their drone, met our adjuster on-site, and handled the entire claim. Before their inspection, we thought we only needed a few shingles replaced. Turns out the entire north-facing slope was compromised. They replaced it all with Class 4 impact-resistant shingles and our insurance covered the full cost minus the deductible. Great experience from start to finish.",
    serviceType: "storm-damage",
    date: "2025-06-22",
  },
  {
    id: 4,
    name: "Linda Park",
    city: "Houston",
    state: "TX",
    rating: 4.5,
    quote:
      "Our flat commercial roof on our retail building had been leaking for months, causing ceiling tile damage and disrupting our tenants. ProTech installed a new TPO membrane system over a long weekend to minimize business disruption. Before the new roof, we were spending $500 a month on temporary patches. Now the building is watertight, energy costs dropped by 18 percent, and we have a 25-year manufacturer warranty. The project manager kept us informed every step of the way.",
    serviceType: "commercial-roofing",
    date: "2025-08-10",
  },
  {
    id: 5,
    name: "David Kowalski",
    city: "Louisville",
    state: "KY",
    rating: 5.0,
    quote:
      "We bought a 1920s craftsman home in the Highlands and knew the roof was old but had no idea how bad it was until ProTech did their thermal scan. They found moisture trapped in the decking that would have caused major structural damage within another year. Before the replacement, we were quoted $15,000 by another company for just a shingle overlay. ProTech tore it all off, replaced 12 sheets of rotted decking, and installed a beautiful new roof for a fair price. The attention to detail on our historic home was impressive.",
    serviceType: "roof-replacement",
    date: "2025-10-18",
  },
  {
    id: 6,
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
    id: 7,
    name: "Robert Chen",
    city: "Columbus",
    state: "OH",
    rating: 4.5,
    quote:
      "Our gutters were overflowing during every rain, causing foundation erosion along the back of our house. ProTech installed seamless 6-inch gutters with gutter guards and regraded the downspout drainage. Before the project, we had standing water within two feet of our foundation after every storm. Now the water channels away properly and we no longer worry about basement flooding. The crew was neat, efficient, and completed the job in one day.",
    serviceType: "gutters-and-siding",
    date: "2025-05-30",
  },
  {
    id: 8,
    name: "Patricia Nguyen",
    city: "San Antonio",
    state: "TX",
    rating: 5.0,
    quote:
      "We were skeptical about switching to a metal roof but ProTech walked us through the benefits for our San Antonio home. Our old shingle roof was 22 years old and our summer electric bills were over $400 a month. After the standing seam metal installation, our cooling costs dropped by nearly 25 percent. The crew completed the entire project in 3 days and left our yard cleaner than they found it. Two years in and the roof still looks brand new with zero maintenance.",
    serviceType: "roof-replacement",
    date: "2025-04-12",
  },
  {
    id: 9,
    name: "Thomas Bradley",
    city: "Cleveland",
    state: "OH",
    rating: 5.0,
    quote:
      "Cleveland winters are brutal on roofs, and ours was showing it with ice dams forming along the entire front edge. ProTech did a full inspection that revealed inadequate attic ventilation and missing ice-and-water shield. Before the fix, we had icicles hanging three feet off the eaves and water dripping inside the walls. They replaced the roof, added proper ventilation, and installed ice-and-water shield on all eaves. This past winter was the first in five years without a single ice dam. Worth every penny.",
    serviceType: "roof-repair",
    date: "2025-12-01",
  },
  {
    id: 10,
    name: "Jennifer Lawson",
    city: "Austin",
    state: "TX",
    rating: 4.5,
    quote:
      "We hired ProTech for a pre-sale roof inspection before listing our home. Their detailed 42-point report identified minor flashing issues and a few cracked shingles that we had not noticed. Before the inspection, we assumed the roof was fine since we had no leaks. The $350 inspection saved us from a buyer demanding a $10,000 credit during negotiations. ProTech fixed the issues for under $800 and we sold the house at full asking price. Smart investment for anyone selling a home.",
    serviceType: "roof-inspection",
    date: "2025-03-28",
  },
  {
    id: 11,
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
    id: 12,
    name: "Karen Sullivan",
    city: "Fort Worth",
    state: "TX",
    rating: 5.0,
    quote:
      "Our 15-year-old roof had been patched three times by different companies, and it was still leaking around the chimney. ProTech did a thermal scan and found that every previous repair had been a bandage over a much larger flashing problem. They removed the old flashing, rebuilt the cricket behind the chimney, and installed new step and counter flashing. Before ProTech, we had a bucket in the attic for two years. After their repair, we went through an entire hail season with zero leaks. Finally done right.",
    serviceType: "roof-repair",
    date: "2025-07-19",
  },
  {
    id: 13,
    name: "Brian Hoffman",
    city: "Cincinnati",
    state: "OH",
    rating: 4.5,
    quote:
      "We manage a 24-unit apartment complex in West Chester and needed the entire flat roof replaced without displacing tenants. ProTech completed the EPDM membrane replacement in sections over 10 days, working around tenant schedules and keeping noise to reasonable hours. Before the project, we had six units reporting ceiling leaks and our maintenance costs were spiraling. Since the new roof went on, we have had zero leak complaints and reduced our maintenance budget by $12,000 annually.",
    serviceType: "commercial-roofing",
    date: "2025-09-05",
  },
  {
    id: 14,
    name: "Diana Vasquez",
    city: "Jacksonville",
    state: "FL",
    rating: 5.0,
    quote:
      "ProTech replaced the aging vinyl siding and gutters on our riverside home at the same time as our roof replacement. Before the project, the old siding was warped and faded, and the gutters were pulling away from the fascia. The transformation was remarkable. They installed James Hardie fiber cement siding and 6-inch seamless gutters with leaf guards. Our home looks brand new and we saved about 12 percent by bundling everything together. The whole project took 5 days and the crew was courteous and thorough.",
    serviceType: "gutters-and-siding",
    date: "2025-10-30",
  },
  {
    id: 15,
    name: "Kevin Brennan",
    city: "Lexington",
    state: "KY",
    rating: 5.0,
    quote:
      "We bought a fixer-upper in the Chevy Chase neighborhood and needed a roof inspection before finalizing financing. ProTech's inspector spent over an hour on the property and delivered a 15-page report the next day. Before the inspection, the seller claimed the roof was only five years old, but ProTech identified it as closer to 15 years with significant wear. That report gave us the leverage to negotiate $8,500 off the purchase price. We then hired ProTech for the replacement and they did exceptional work matching the neighborhood's historic character.",
    serviceType: "roof-inspection",
    date: "2025-11-15",
  },
];

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
