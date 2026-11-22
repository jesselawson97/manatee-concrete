// Residential concrete & paver pages: services x cities.
// Each page = one service (shared copy) + one city (local notes).

export interface City {
  name: string;
  slug: string;
  county: string;
  permitOffice: string;
  neighborhoods: string;
  localNote: string;
}

export interface Faq { q: string; a: string; }

export interface ResService {
  name: string;          // "Stamped Concrete"
  slug: string;          // "stamped-concrete"
  short: string;         // one-line card description
  heroImage: string;     // '' = text-only header
  gallery?: { src: string; alt: string }[];
  intro: (c: City) => string;
  body: string[];
  bullets: string[];
  cost: string;          // typical price range, plain text
  faqs: Faq[];
  cities?: string[];     // limit to these city slugs (default: all)
}

export const cities: City[] = [
  {
    name: 'Bradenton',
    slug: 'bradenton',
    county: 'Manatee County',
    permitOffice: 'Manatee County (or the City of Bradenton inside city limits)',
    neighborhoods: 'West Bradenton, Palma Sola, Cortez Road, Northwest Bradenton and the neighborhoods along the Manatee River',
    localNote: "A lot of Bradenton homes were built in the '70s, '80s and '90s, and many still have the original driveway and pool deck: cracked, stained, heaved by tree roots, or just worn out. Tearing out and replacing, or upgrading to pavers, is usually the most cost-effective fix at that age.",
  },
  {
    name: 'Lakewood Ranch',
    slug: 'lakewood-ranch',
    county: 'Manatee & Sarasota County',
    permitOffice: 'Manatee County or Sarasota County, depending on which side of the county line you are on',
    neighborhoods: 'Waterside, Country Club, Esplanade, Central Park, Greenbrook and Lakewood National',
    localNote: "Most Lakewood Ranch neighborhoods require architectural review approval before you change a driveway, pool deck or paver color. We put together the site sketch, product specs and color samples your HOA asks for, so approval isn't what holds up your project.",
  },
  {
    name: 'Sarasota',
    slug: 'sarasota',
    county: 'Sarasota County',
    permitOffice: 'Sarasota County or the City of Sarasota',
    neighborhoods: 'Palmer Ranch, Gulf Gate, Southgate, Siesta Key and the Bee Ridge and Fruitville corridors',
    localNote: 'Close to the water, salt air and all-day sun are hard on sealers and finishes. Ask for UV-stable sealers and a resealing schedule that fits a coastal home, so the color and finish hold up.',
  },
  {
    name: 'Parrish',
    slug: 'parrish',
    county: 'Manatee County',
    permitOffice: 'Manatee County',
    neighborhoods: 'North River Ranch, Silverleaf, Crosswind Point, Copperstone and the newer communities along US-301',
    localNote: 'Most Parrish homes are new construction with a builder-grade broom-finish driveway and a small lanai. Upgrading to pavers, widening the driveway or extending the pool deck are some of the most common projects here, and most of them need HOA approval first.',
  },
];

export const services: ResService[] = [
  {
    name: 'Driveway Replacement',
    slug: 'driveway-replacement',
    short: 'Tear-out and replacement of cracked or sunken residential concrete driveways, including widening and new aprons.',
    heroImage: '',
    intro: (c) => `Cracked, sunken or stained driveway? Get matched with a local contractor who tears out and replaces residential concrete driveways in ${c.name}, including widening for an extra car and a new apron at the street.`,
    body: [
      'A driveway that lasts starts underneath it. A proper replacement removes the old slab, re-grades and compacts the base, then pours 4 to 5 inches of fiber-reinforced concrete with properly spaced control joints, so cracking happens at the joints instead of across the middle of your driveway.',
      'You can keep it simple with a clean broom finish, or upgrade to exposed aggregate, a decorative border, or stamped concrete. If you are on the fence between concrete and pavers, ask for both to be priced so you can compare.',
    ],
    bullets: [
      'Demolition and haul-off of the old driveway',
      'Base re-grading and compaction',
      'Fiber-reinforced concrete, 4 to 5 inches thick',
      'Control joints laid out to manage cracking',
      'Broom, exposed aggregate or decorative borders',
      'Widening and new street aprons',
      'Right-of-way and driveway permits',
    ],
    cost: 'Most residential driveway replacements in the area run roughly $8 to $14 per square foot including demo, depending on size, thickness, finish and access. A typical two-car driveway lands in the $6,000 to $12,000 range.',
    faqs: [
      { q: 'How long before I can drive on a new concrete driveway?', a: 'You can walk on it after a day or two, but plan on keeping cars off it for about 7 days. Concrete keeps gaining strength for roughly 28 days, so avoid heavy trucks or trailers until then.' },
      { q: 'Should I replace my driveway or just repair it?', a: 'Hairline cracks and surface staining can usually be cleaned, sealed or patched. If sections have sunk, heaved from tree roots, or broken into pieces, replacement is usually the better long-term value. A good contractor will tell you honestly which one you need.' },
      { q: 'Is concrete or pavers better for a Florida driveway?', a: 'Both work well. Concrete costs less up front and has a clean, simple look. Pavers cost more but flex instead of cracking, and individual pavers can be lifted and reset if something settles. Ask for both to be priced.' },
    ],
  },
  {
    name: 'Stamped Concrete',
    slug: 'stamped-concrete',
    short: 'Decorative stamped concrete for patios, pool decks, walkways and driveways, in slate, stone and wood-plank patterns.',
    heroImage: '',
    intro: (c) => `Stamped concrete gives you the look of stone, slate or brick at a lower cost than pavers. Get matched with a local contractor for stamped patios, pool decks, walkways and driveways across ${c.name}.`,
    body: [
      'The concrete is colored with an integral color or color hardener, stamped while it is still workable, then finished with a release color to bring out the texture and depth. Common patterns include ashlar slate, random stone, cobblestone and wood plank.',
      'Around pools, a non-slip additive goes into to the sealer so the surface stays safe for wet feet. Stamped concrete should be resealed every two to three years in Florida sun to keep the color rich.',
    ],
    bullets: [
      'Patios, lanais, pool decks, walkways and driveways',
      'Slate, stone, cobblestone and wood-plank patterns',
      'Integral color or color hardener plus release',
      'Non-slip sealer for pool areas',
      'Decorative borders and bands',
      'Removal of existing concrete if needed',
    ],
    cost: 'Stamped concrete in the area typically runs about $12 to $20 per square foot depending on pattern, colors, prep and whether old concrete has to be removed first.',
    faqs: [
      { q: 'Is stamped concrete slippery around a pool?', a: 'It can be if it is sealed with a plain glossy sealer. A non-slip grit can be added to the sealer on pool decks and other wet areas so it stays safe barefoot.' },
      { q: 'Stamped concrete or pavers: which is better?', a: 'Stamped concrete usually costs less and has no joints for weeds. Pavers cost more but are easier to repair, since single pavers can be swapped out. Stamped concrete needs resealing every few years to look its best.' },
      { q: 'Will stamped concrete crack?', a: 'All concrete can crack. Control joints are cut into the pattern so cracks follow the joints instead of running across the design, which keeps them hard to see.' },
    ],
  },
  {
    name: 'Concrete Pool Decks',
    slug: 'concrete-pool-deck',
    short: 'New and replacement concrete pool decks with cool-touch knockdown, spray texture or stamped finishes.',
    heroImage: '',
    intro: (c) => `Get matched with a local contractor for new concrete pool decks and replacement of old, cracked ones throughout ${c.name}, with finishes that stay cooler underfoot in the Florida sun.`,
    body: [
      'The most important part of a pool deck is the part you cannot see: proper slope so water drains away from the pool and the house, and an expansion joint at the coping so the deck and pool can move separately without cracking.',
      'For the surface, most homeowners choose a cool-touch knockdown or spray-texture finish, or stamped concrete. If you are planning a pool resurfacing, doing the deck at the same time usually saves money and gives everything a matched look.',
    ],
    bullets: [
      'Tear-out of old, cracked or sunken decks',
      'Slope and drainage away from pool and home',
      'Expansion joint at the coping',
      'Cool-touch knockdown or spray texture',
      'Stamped and colored options',
      'Deck extensions and new lanai areas',
    ],
    cost: 'Pool deck replacement typically runs about $10 to $18 per square foot depending on removal, finish and access. Extensions and new decks are quoted on site.',
    faqs: [
      { q: 'Can you resurface my existing pool deck instead of replacing it?', a: 'If the slab is solid and not heaving or sinking, a spray-texture overlay or travertine over the existing deck can save the cost of tear-out. If it has settled or cracked through, replacement is the better fix.' },
      { q: 'Which pool deck finish stays coolest?', a: 'Light-colored knockdown or spray-texture finishes stay noticeably cooler than plain gray concrete. Travertine pavers are also very comfortable barefoot.' },
      { q: 'How long does a pool deck replacement take?', a: 'Most decks take one to two weeks from demo to final sealing, depending on size and weather. You can usually use the pool during most of the project.' },
    ],
  },
  {
    name: 'Paver Driveways',
    slug: 'paver-driveway',
    short: 'Concrete, brick and travertine paver driveways built on a compacted base with edge restraint and polymeric sand.',
    heroImage: '/images/work/paver-driveway-street.jpg',
    gallery: [{ src: '/images/work/paver-driveway-garage.jpg', alt: 'Herringbone paver driveway with soldier-course border' }, { src: '/images/work/paver-driveway-herringbone.jpg', alt: 'New herringbone paver driveway at garage' }, { src: '/images/work/paver-entry-steps-driveway.jpg', alt: 'Paver driveway, entry and steps' }],
    intro: (c) => `A paver driveway is one of the biggest curb-appeal upgrades you can make. Get matched with a local paver contractor for concrete, brick and travertine paver driveways across ${c.name}.`,
    body: [
      'Paver driveways only last if the base is right. A proper install excavates, then installs and compacts a crushed base in lifts, sets the pavers on bedding sand, locks the edges with a concrete or plastic restraint, and finishes with polymeric sand that hardens to keep weeds and ants out.',
      'Pavers can go right over an existing concrete driveway in some cases, which saves on demolition. Your contractor can tell you on site whether your slab is a good candidate.',
    ],
    bullets: [
      'Excavation and compacted crushed base',
      'Concrete, brick and travertine pavers',
      'Edge restraint so pavers stay put',
      'Polymeric sand joints',
      'Borders, inlays and contrasting bands',
      'Optional install over existing concrete',
      'Sealing after installation',
    ],
    cost: 'Paver driveways in the area commonly run about $15 to $30 per square foot depending on paver style, demolition and base work. Travertine sits at the higher end.',
    faqs: [
      { q: 'Do paver driveways sink over time?', a: 'Sinking almost always comes from a thin or poorly compacted base. A driveway base should be built in compacted layers sized for vehicle traffic. If an area ever settles, individual pavers can be lifted and reset without tearing out the driveway.' },
      { q: 'Do pavers need to be sealed?', a: 'Sealing is optional but recommended. It protects the color from Florida sun, locks the joint sand in, and makes stains easier to clean. Most homeowners reseal every two to three years.' },
      { q: 'Can you install pavers over my concrete driveway?', a: 'Often, yes, if the slab is solid and the extra height works with your garage and street apron. It saves demolition cost. Your contractor checks this on site.' },
    ],
  },
  {
    name: 'Paver Patios & Walkways',
    slug: 'paver-patio',
    short: 'Paver patios, lanai extensions, walkways and fire-pit areas with borders and sealed finishes.',
    heroImage: '/images/work/paver-courtyard-patio.jpg',
    gallery: [{ src: '/images/work/paver-walkway-curved.jpg', alt: 'Curved paver walkway along side yard' }, { src: '/images/work/paver-courtyard-table.jpg', alt: 'Paver courtyard patio' }, { src: '/images/work/paver-front-steps.jpg', alt: 'Paver front entry steps' }],
    intro: (c) => `Extend your lanai, add a patio for the grill and fire pit, or connect it all with a paver walkway. Get matched with a local contractor who designs and builds paver patios and walkways in ${c.name}.`,
    body: [
      'Patios and walkways get the same base preparation as a driveway, scaled to foot traffic: excavation, compacted base, bedding sand, edge restraint and polymeric sand. That is what keeps them flat for years instead of a season.',
      'Your contractor can match your existing driveway or pool deck pavers, or mix colors and borders to define spaces for dining, a fire pit, or an outdoor kitchen.',
    ],
    bullets: [
      'Patios and lanai extensions',
      'Front and side walkways',
      'Fire-pit and outdoor kitchen pads',
      'Matching existing pavers when possible',
      'Borders, soldier courses and inlays',
      'Polymeric sand and sealing',
    ],
    cost: 'Paver patios and walkways typically run about $15 to $28 per square foot depending on paver choice, layout and site prep.',
    faqs: [
      { q: 'Can you match the pavers I already have?', a: 'Often, yes. Many common paver lines are still made, and your contractor can bring samples to compare. If an exact match is discontinued, a contrasting border can make the new area look intentional.' },
      { q: 'Do I need a permit for a paver patio?', a: 'Many simple patios do not need a building permit, but HOAs almost always want to approve the plan. Your contractor can confirm what applies at your address.' },
      { q: 'How long does a paver patio take?', a: 'Most patios and walkways take two to five days once materials arrive, depending on size and weather.' },
    ],
  },
  {
    name: 'Travertine Pool Decks',
    slug: 'travertine-pool-deck',
    short: 'Natural travertine pool decks and patios, installed over existing concrete or on a new sand-set base.',
    heroImage: '',
    intro: (c) => `Travertine stays comfortable barefoot, looks high-end and handles Florida weather well. Get matched with a local contractor for travertine pool decks and patios across ${c.name}.`,
    body: [
      'There are two common ways to install travertine. Thin 1.25-inch pavers can be bonded over a sound existing concrete deck, which avoids demolition. Thicker 3 cm pavers can be sand-set on a compacted base like a standard paver job. The right choice depends on your existing deck and budget.',
      'Popular choices include ivory and walnut tones in a French pattern, with bullnose or matching coping pieces around the pool. A penetrating sealer protects the stone without making it slippery.',
    ],
    bullets: [
      'Install over existing concrete or sand-set',
      'French pattern and other layouts',
      'Matching coping and bullnose edges',
      'Ivory, walnut, silver and blended tones',
      'Penetrating, non-slip sealer',
      'Pool deck, patio and lanai areas',
    ],
    cost: 'Travertine pool decks commonly run about $20 to $40 per square foot depending on stone grade, thickness, coping and whether demo is needed.',
    faqs: [
      { q: 'Does travertine get hot in the sun?', a: 'Travertine stays noticeably cooler than concrete or most concrete pavers, which is why it is so popular for pool decks in Florida.' },
      { q: 'Can travertine go over my existing pool deck?', a: 'If your deck is solid and not cracked through or sinking, thin travertine pavers can be installed directly over it. If not, the old deck is removed and thicker pavers are sand-set.' },
      { q: 'Is travertine slippery when wet?', a: 'Tumbled travertine has a textured surface that grips well when wet. A penetrating sealer protects the stone without adding a slick, glossy film.' },
    ],
  },
  {
    name: 'Paver Repair & Releveling',
    slug: 'paver-repair',
    short: 'Repair of sinking, uneven or root-damaged pavers, plus re-sanding and sealing of existing paver areas.',
    heroImage: '/images/work/paver-driveway-herringbone.jpg',
    gallery: [{ src: '/images/work/paver-courtyard-steps.jpg', alt: 'Paver courtyard after install' }, { src: '/images/work/paver-driveway-entry.jpg', alt: 'Paver driveway after install' }, { src: '/images/work/paver-courtyard-statue.jpg', alt: 'Paver courtyard detail' }],
    intro: (c) => `Sinking pavers, trip hazards, weeds in the joints, or a pool deck that has started to dip? Get matched with a local contractor who repairs, relevels and reseals paver driveways, patios and pool decks in ${c.name}.`,
    body: [
      'Most paver problems come from below: a washed-out base near a downspout, a tree root, a settling pool deck, or a broken edge restraint. A proper repair lifts the affected pavers, fixes the cause, rebuilds and compacts the base, and resets the pavers so the repair blends in.',
      'If the whole area just looks tired, a deep clean, fresh polymeric sand and a new coat of sealer can make a 10-year-old paver job look close to new for a fraction of the cost of replacing it.',
    ],
    bullets: [
      'Lifting and releveling sunken areas',
      'Base repair and re-compaction',
      'Tree-root and washout repairs',
      'Edge restraint replacement',
      'Broken paver replacement',
      'Cleaning, re-sanding and sealing',
    ],
    cost: 'Small releveling repairs often start in the low hundreds of dollars. Larger areas are priced by the square foot. Cleaning, re-sanding and sealing typically runs a few dollars per square foot.',
    faqs: [
      { q: 'Why are my pavers sinking?', a: 'Usually because the base underneath has washed out or was never compacted well. Common causes are downspouts, irrigation, tree roots and pool deck settlement. Fixing the cause matters, or the pavers will sink again.' },
      { q: 'Can you match my existing pavers?', a: 'Most repairs reuse your existing pavers. If some are broken, the closest available match is sourced.' },
      { q: 'How often should pavers be sealed?', a: 'In Florida sun, every two to three years keeps the color rich and the joint sand locked in place.' },
    ],
  },
  {
    name: 'Glass Railings',
    slug: 'glass-railings',
    short: 'Structural glass railings for balconies, decks and staircases, indoors or out, with optional low-voltage LED lighting.',
    heroImage: '',
    cities: ['sarasota'],
    intro: () => 'Structural glass railings give you an unobstructed view and a clean, modern look. Get matched with a local contractor who designs and installs glass railings for balconies, decks, pool areas and staircases, inside and out, across Sarasota, Bradenton and Lakewood Ranch.',
    body: [
      'Options include frameless glass set in a base shoe, glass held with stainless standoffs, and glass panels with a slim top rail. All systems use tempered or laminated safety glass and are installed to meet the Florida Building Code requirements for guards.',
      'For a finishing touch, low-voltage LED lighting can be integrated into the base channel or handrail. It lights stairs and balcony edges at night and makes the glass glow.',
    ],
    bullets: [
      'Balconies, decks and lanais',
      'Interior and exterior staircases',
      'Frameless base-shoe and standoff systems',
      'Tempered and laminated safety glass',
      'Stainless and aluminum hardware for coastal homes',
      'Low-voltage LED lighting in rail or base',
      'Code-compliant guard heights and loads',
    ],
    cost: 'Glass railings are priced by the linear foot and vary with the system, glass type and mounting. Most residential projects fall somewhere between a few hundred and several hundred dollars per linear foot installed.',
    faqs: [
      { q: 'Are glass railings safe for kids and pets?', a: 'Yes. Code-compliant glass railings use tempered or laminated safety glass and have no gaps for small kids or pets to slip through, which makes them safer than many picket railings.' },
      { q: 'Do glass railings hold up near the water?', a: 'With marine-grade stainless or powder-coated aluminum hardware, yes. Salt air is hard on cheaper hardware, so look for components made for coastal homes.' },
      { q: 'Can you add lighting to the railing?', a: 'Yes. Low-voltage LED strips can be built into the base channel or top rail to light stairs and balcony edges at night.' },
    ],
  },
];

export function servicesForCity(citySlug: string) {
  return services.filter(s => !s.cities || s.cities.includes(citySlug));
}

export function pages() {
  const out: { service: ResService; city: City; slug: string }[] = [];
  for (const s of services) {
    for (const c of cities) {
      if (s.cities && !s.cities.includes(c.slug)) continue;
      out.push({ service: s, city: c, slug: `${s.slug}-${c.slug}` });
    }
  }
  return out;
}
