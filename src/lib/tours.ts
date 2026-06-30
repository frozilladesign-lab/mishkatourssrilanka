export type Region =
'South Coast' |
'Hill Country' |
'Cultural Triangle' |
'East Coast' |
'Multiple Regions';
export type Activity =
'Cultural' |
'Wildlife' |
'Beach' |
'Adventure' |
'Luxury' |
'Honeymoon' |
'Family';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image?: string;
}

export interface Hotel {
  name: string;
  image: string;
  rating: number;
  amenities: string[];
  location: string;
}

export interface Tour {
  slug: string;
  title: string;
  subtitle?: string;
  durationDays: number;
  price: number;
  rating: number;
  reviewCount: number;
  heroImage: string;
  galleryImages: string[];
  region: Region;
  activityTags: Activity[];
  shortDescription: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  hotels: Hotel[];
}

// Local tour photos (provided by Mishka Tours)
const PEARL_HERO = '/images/tours/pearl-of-sri-lanka/hero.jpg';
const PEARL_G1 = '/images/tours/pearl-of-sri-lanka/gallery-1.jpg';
const PEARL_G2 = '/images/tours/pearl-of-sri-lanka/gallery-2.jpg';
const PEARL_G3 = '/images/tours/pearl-of-sri-lanka/gallery-3.jpg';
const PEARL_G4 = '/images/tours/pearl-of-sri-lanka/gallery-4.jpg';
const PEARL_G5 = '/images/tours/pearl-of-sri-lanka/gallery-5.jpg';

const MAJESTIC_HERO = '/images/tours/majestic-island/hero.jpg';
const MAJESTIC_G1 = '/images/tours/majestic-island/gallery-1.jpg';
const MAJESTIC_G2 = '/images/tours/majestic-island/gallery-2.jpg';
const MAJESTIC_G3 = '/images/tours/majestic-island/gallery-3.jpg';
const MAJESTIC_G4 = '/images/tours/majestic-island/gallery-4.jpg';
const MAJESTIC_G5 = '/images/tours/majestic-island/gallery-5.jpg';

const MISTY_HERO = '/images/tours/misty-mountains/hero.jpg';
const MISTY_G1 = '/images/tours/misty-mountains/gallery-1.jpg';
const MISTY_G2 = '/images/tours/misty-mountains/gallery-2.jpg';
const MISTY_G3 = '/images/tours/misty-mountains/gallery-3.jpg';
const MISTY_G4 = '/images/tours/misty-mountains/gallery-4.jpg';

const WONDER_HERO = '/images/tours/wonder-of-sri-lanka/hero.jpg';
const WONDER_G1 = '/images/tours/wonder-of-sri-lanka/gallery-1.jpg';
const WONDER_G2 = '/images/tours/wonder-of-sri-lanka/gallery-2.jpg';
const WONDER_G3 = '/images/tours/wonder-of-sri-lanka/gallery-3.jpg';

const MISTY_YALA_HERO = '/images/tours/misty-mountains-yala-safari/hero.jpg';
const MISTY_YALA_G1 = '/images/tours/misty-mountains-yala-safari/gallery-1.jpg';
const MISTY_YALA_G2 = '/images/tours/misty-mountains-yala-safari/gallery-2.jpg';
const MISTY_YALA_G3 = '/images/tours/misty-mountains-yala-safari/gallery-3.jpg';
const MISTY_YALA_G4 = '/images/tours/misty-mountains-yala-safari/gallery-4.jpg';

const KINGDOM_HERO = '/images/tours/the-last-kingdom/hero.jpg';
const KINGDOM_G1 = '/images/tours/the-last-kingdom/gallery-1.jpg';
const KINGDOM_G2 = '/images/tours/the-last-kingdom/gallery-2.jpg';
const KINGDOM_G3 = '/images/tours/the-last-kingdom/gallery-3.jpg';
const KINGDOM_G4 = '/images/tours/the-last-kingdom/gallery-4.jpg';

const YALA_HERO = '/images/tours/yala-safari/hero.jpg';
const YALA_G1 = '/images/tours/yala-safari/gallery-1.jpg';
const YALA_G2 = '/images/tours/yala-safari/gallery-2.jpg';
const YALA_G3 = '/images/tours/yala-safari/gallery-3.jpg';

const GALLE_HERO = '/images/tours/charm-of-southern-coast/hero.avif';
const GALLE_G1 = '/images/tours/charm-of-southern-coast/gallery-1.jpg';
const GALLE_G2 = '/images/tours/charm-of-southern-coast/gallery-2.jpeg';
const GALLE_G3 = '/images/tours/charm-of-southern-coast/gallery-3.avif';

const WHALE_HERO = '/images/tours/whale-watching/hero.avif';
const WHALE_G1 = '/images/tours/whale-watching/gallery-1.avif';
const WHALE_G2 = '/images/tours/whale-watching/gallery-2.avif';
const WHALE_G3 = '/images/tours/whale-watching/gallery-3.avif';

const COLOMBO_HERO = '/images/tours/colombo-city-tour/hero.jpg';
const COLOMBO_G1 = '/images/tours/colombo-city-tour/gallery-1.jpg';
const COLOMBO_G2 = '/images/tours/colombo-city-tour/gallery-2.jpg';
const COLOMBO_G3 = '/images/tours/colombo-city-tour/gallery-3.jpg';
const COLOMBO_G4 = '/images/tours/colombo-city-tour/gallery-4.jpeg';

const SINHARAJA_HERO = '/images/tours/sinharaja-rainforest/hero.jpg';
const SINHARAJA_G1 = '/images/tours/sinharaja-rainforest/gallery-1.jpg';

const FISHING_HERO = '/images/tours/ocean-fishing/hero.jpg';
const FISHING_G1 = '/images/tours/ocean-fishing/gallery-1.jpg';
const FISHING_G2 = '/images/tours/ocean-fishing/gallery-2.jpg';
const FISHING_G3 = '/images/tours/ocean-fishing/gallery-3.jpg';

const SURF_HERO = '/images/tours/surfing/hero.avif';
const SURF_G1 = '/images/tours/surfing/gallery-1.avif';
const SURF_G2 = '/images/tours/surfing/gallery-2.avif';
const SURF_G3 = '/images/tours/surfing/gallery-3.avif';

export const tours: Tour[] = [
{
  slug: 'pearl-of-sri-lanka',
  title: 'Pearl of Sri Lanka',
  subtitle: 'Жемчужина Шри-Ланки',
  durationDays: 2,
  price: 0,
  rating: 4.9,
  reviewCount: 0,
  heroImage: PEARL_HERO,
  galleryImages: [PEARL_G1, PEARL_G2, PEARL_G3, PEARL_G4, PEARL_G5],
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Adventure', 'Family'],
  shortDescription:
  'A two-day journey through the heart of Sri Lanka — elephant riding, spice gardens, tea plantations, the scenic mountain train, and the iconic Nine Arch Bridge in Ella.',
  highlights: [
  'Elephant riding',
  'Ayurvedic center & spice garden',
  'Royal Botanical Garden Peradeniya',
  'Ambuluwawa Tower & Temple of Four Religions',
  'Tea factory & plantation',
  'Waterfall visit',
  'Nine Arch Bridge in Ella',
  'Mountain train ride',
  "Little Adam's Peak",
  ],
  included: [
  'Private transport with driver',
  'Hotel pickup and drop-off',
  'Flexible itinerary planning',
  ],
  excluded: [
  'Entrance tickets (quoted separately)',
  'Accommodation (arranged on request)',
  'Meals',
  ],
  itinerary: [
  {
    day: 1,
    title: 'Kandy & Hill Country',
    description:
    'Start with elephant riding and an Ayurvedic center and spice garden visit. Explore the Royal Botanical Garden Peradeniya and Ambuluwawa Tower with its Temple of Four Religions. Visit a tea factory and plantation, and discover a beautiful waterfall.',
    image: PEARL_HERO,
  },
  {
    day: 2,
    title: 'Ella & Mountain Train',
    description:
    "Board the scenic mountain train and ride through stunning tea country landscapes. Visit the Nine Arch Bridge in Ella, one of Sri Lanka's most iconic sights, and hike Little Adam's Peak for panoramic views.",
    image: PEARL_G1,
  },
  ],
  hotels: [],
},
{
  slug: 'majestic-island',
  title: 'Majestic Island',
  subtitle: 'Величественный остров',
  durationDays: 2,
  price: 0,
  rating: 4.9,
  reviewCount: 0,
  heroImage: MAJESTIC_HERO,
  galleryImages: [MAJESTIC_G1, MAJESTIC_G2, MAJESTIC_G3, MAJESTIC_G4, MAJESTIC_G5],
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Wildlife', 'Adventure'],
  shortDescription:
  'Discover Ella, Nuwara Eliya, ancient temples, Sigiriya Rock Fortress, and elephant encounters — an epic two-day Sri Lanka experience.',
  highlights: [
  'Ravana Waterfall',
  'Train ride',
  'Nine Arch Bridge in Ella',
  "Little Adam's Peak",
  'Nuwara Eliya "Little England"',
  'Tea factory & plantation',
  'Ambuluwawa Tower & Temple of Four Religions',
  'Ayurvedic center & spice garden',
  'Golden Buddha Statue at Dambulla Temple',
  'Elephant photo & feeding',
  'Sigiriya Ancient Rock Fortress',
  ],
  included: [
  'Private transport with driver',
  'Hotel pickup and drop-off',
  'Flexible itinerary planning',
  ],
  excluded: [
  'Entrance tickets (quoted separately)',
  'Accommodation (arranged on request)',
  'Meals',
  ],
  itinerary: [
  {
    day: 1,
    title: 'Ella & Nuwara Eliya',
    description:
    "Visit Ravana Waterfall, then enjoy a train ride through tea country. Explore the Nine Arch Bridge and hike Little Adam's Peak. Drive to Nuwara Eliya, Sri Lanka's 'Little England', and visit a tea factory and plantation.",
    image: MAJESTIC_G1,
  },
  {
    day: 2,
    title: 'Dambulla & Sigiriya',
    description:
    'Visit the Ambuluwawa Tower and Temple of Four Religions, stop at an Ayurvedic center and spice garden. See the Golden Buddha Statue at Dambulla Cave Temple, enjoy elephant photo and feeding, then climb the ancient Sigiriya Rock Fortress.',
    image: MAJESTIC_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'misty-mountains',
  title: 'Misty Mountains',
  subtitle: 'Туманные горы',
  durationDays: 1,
  price: 0,
  rating: 4.8,
  reviewCount: 0,
  heroImage: MISTY_HERO,
  galleryImages: [MISTY_G1, MISTY_G2, MISTY_G3, MISTY_G4],
  region: 'Hill Country',
  activityTags: ['Adventure', 'Cultural'],
  shortDescription:
  "A full day in Ella — the Nine Arch Bridge, mountain train, Little Adam's Peak, Ravana Waterfall, tea plantations, and an Ayurvedic garden.",
  highlights: [
  'Nine Arch Bridge in Ella',
  'Mountain train ride',
  "Little Adam's Peak",
  'Ravana Waterfall',
  'Tea plantation',
  'Ayurvedic garden',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Entrance tickets (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Ella & Hill Country',
    description:
    "Start the day at the iconic Nine Arch Bridge, then board the scenic mountain train. Hike Little Adam's Peak for breathtaking views, visit Ravana Waterfall, stroll through a tea plantation, and explore a beautiful Ayurvedic garden.",
    image: MISTY_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'wonder-of-sri-lanka',
  title: 'Wonder of Sri Lanka',
  subtitle: 'Очарование Шри-Ланки',
  durationDays: 1,
  price: 0,
  rating: 4.9,
  reviewCount: 0,
  heroImage: WONDER_HERO,
  galleryImages: [WONDER_G1, WONDER_G2, WONDER_G3],
  region: 'Cultural Triangle',
  activityTags: ['Cultural', 'Wildlife'],
  shortDescription:
  'Visit the Dambulla Cave Temple, the Golden Buddha Statue, Sigiriya Ancient Rock Fortress, elephant encounters, and an Ayurvedic garden — all in one day.',
  highlights: [
  'Dambulla Cave Temple & Golden Buddha Statue',
  'Sigiriya Ancient Rock Fortress',
  'Elephant photo & feeding',
  'Ayurvedic garden',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Entrance tickets (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Cultural Triangle',
    description:
    'Visit the Dambulla Royal Cave Temple and its impressive Golden Buddha Statue, then climb the ancient Sigiriya Rock Fortress — a UNESCO World Heritage Site. Enjoy elephant photo and feeding, and relax in a fragrant Ayurvedic garden.',
    image: WONDER_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'misty-mountains-yala-safari',
  title: 'Misty Mountains with Yala Safari',
  subtitle: 'Туманные горы с Сафари',
  durationDays: 1,
  price: 0,
  rating: 4.9,
  reviewCount: 0,
  heroImage: MISTY_YALA_HERO,
  galleryImages: [MISTY_YALA_G1, MISTY_YALA_G2, MISTY_YALA_G3, MISTY_YALA_G4],
  region: 'Multiple Regions',
  activityTags: ['Adventure', 'Wildlife'],
  shortDescription:
  'Combine the highlights of Ella with an exciting Yala National Park jeep safari — mountain scenery and wild leopards in one unforgettable day.',
  highlights: [
  'Nine Arch Bridge in Ella',
  'Mountain train ride',
  'Ravana Waterfall',
  'Tea plantation',
  'Yala National Park jeep safari',
  'Wildlife watching',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Entrance tickets & safari jeep fees (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Ella & Yala',
    description:
    'Visit the Nine Arch Bridge and take the mountain train through tea country. Stop at Ravana Waterfall and a tea plantation. Then head to Yala National Park for an open jeep safari — watching elephants, leopards, crocodiles, and other wildlife in their natural habitat.',
    image: MISTY_YALA_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'the-last-kingdom',
  title: 'The Last Kingdom',
  subtitle: 'Последнее Королевство',
  durationDays: 1,
  price: 0,
  rating: 4.8,
  reviewCount: 0,
  heroImage: KINGDOM_HERO,
  galleryImages: [KINGDOM_G1, KINGDOM_G2, KINGDOM_G3, KINGDOM_G4],
  region: 'Hill Country',
  activityTags: ['Cultural', 'Family'],
  shortDescription:
  'Experience the cultural heart of Kandy — elephant riding, the Temple of the Tooth Relic, Peradeniya Botanical Garden, gem museum, Ayurvedic garden, and tea factory.',
  highlights: [
  'Elephant riding',
  'Temple of the Tooth Relic',
  'Royal Botanical Garden Peradeniya',
  'Gem Museum',
  'Ayurvedic garden',
  'Tea factory & plantation',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Entrance tickets (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Kandy Cultural Day',
    description:
    "Start with elephant riding, then visit the sacred Temple of the Tooth Relic in Kandy. Stroll through the Royal Botanical Garden Peradeniya, explore the Gem Museum, relax in an Ayurvedic garden, and end the day with a tea factory and plantation tour.",
    image: KINGDOM_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'yala-safari',
  title: 'Yala Safari',
  subtitle: 'Сафари',
  durationDays: 1,
  price: 0,
  rating: 5.0,
  reviewCount: 0,
  heroImage: YALA_HERO,
  galleryImages: [YALA_G1, YALA_G2, YALA_G3],
  region: 'South Coast',
  activityTags: ['Wildlife', 'Adventure', 'Family'],
  shortDescription:
  'An open jeep safari through Yala National Park — one of the best places in the world to spot leopards, elephants, crocodiles, peacocks, and dozens of other species.',
  highlights: [
  'Open jeep safari in Yala National Park',
  'Leopards, elephants & deer',
  'Buffaloes & crocodiles',
  'Monkeys & peacocks',
  'Flamingos & mongooses',
  'Diverse wildlife in natural habitat',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Safari jeep fees & park entrance (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Yala National Park',
    description:
    'Board an open jeep and head into Yala National Park for a thrilling wildlife safari. Watch elephants, leopards, deer, buffaloes, crocodiles, monkeys, peacocks, flamingos, and mongooses roam freely in their natural environment.',
    image: YALA_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'charm-of-southern-coast',
  title: 'Charm of the Southern Coast',
  subtitle: 'Очарование южного побережья',
  durationDays: 1,
  price: 0,
  rating: 4.8,
  reviewCount: 0,
  heroImage: GALLE_HERO,
  galleryImages: [GALLE_G1, GALLE_G2, GALLE_G3],
  region: 'South Coast',
  activityTags: ['Cultural', 'Beach', 'Adventure'],
  shortDescription:
  'Explore the historic Galle Fort, cruise the river through mangroves, visit a turtle farm and moonstone mine, and relax in an Ayurvedic garden — all along the beautiful south coast.',
  highlights: [
  'Galle Fort',
  'River safari',
  'Turtle farm',
  'Moonstone mine',
  'Ayurvedic garden',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Entrance tickets (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'South Coast Discovery',
    description:
    'Explore the UNESCO-listed Galle Fort with its Dutch colonial architecture. Take a river safari through mangrove forests, visit a turtle farm conservation project, discover the moonstone mine, and end with a relaxing stop at an Ayurvedic garden.',
    image: GALLE_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'whale-watching',
  title: 'Whale Watching',
  subtitle: 'Наблюдение за китами',
  durationDays: 1,
  price: 0,
  rating: 4.9,
  reviewCount: 0,
  heroImage: WHALE_HERO,
  galleryImages: [WHALE_G1, WHALE_G2, WHALE_G3],
  region: 'South Coast',
  activityTags: ['Adventure', 'Beach'],
  shortDescription:
  'Head out into the Indian Ocean by boat to watch blue whales and dolphins in their natural ocean environment off the coast of Sri Lanka.',
  highlights: [
  'Boat trip into the Indian Ocean',
  'Blue whale watching',
  'Dolphin watching',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Boat fees (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Indian Ocean Whale Watching',
    description:
    "Board a small boat and head out into the Indian Ocean to spot magnificent blue whales and playful dolphins. One of Sri Lanka's most unique natural experiences, best between November and April.",
    image: WHALE_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'colombo-city-tour',
  title: 'Colombo City Tour',
  subtitle: 'Обзорная экскурсия по Коломбо',
  durationDays: 1,
  price: 0,
  rating: 4.7,
  reviewCount: 0,
  heroImage: COLOMBO_HERO,
  galleryImages: [COLOMBO_G1, COLOMBO_G2, COLOMBO_G3, COLOMBO_G4],
  region: 'Multiple Regions',
  activityTags: ['Cultural', 'Family'],
  shortDescription:
  "Explore Sri Lanka's vibrant capital — the Galle Face Green promenade, Gangaramaya Temple, Independence Square, Pettah Market, and more in one comfortable city day.",
  highlights: [
  'Galle Face Green promenade',
  'Gangaramaya Buddhist Temple',
  'Hindu Temple',
  'Independence Square',
  'Old Parliament Building',
  'Pettah Market',
  'Shopping mall',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Entrance tickets (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Colombo City Highlights',
    description:
    'Walk along the Galle Face Green promenade by the ocean, visit the atmospheric Gangaramaya Buddhist Temple and a Hindu Temple, explore Independence Square and the Old Parliament Building, browse the colourful Pettah Market, and finish at a modern shopping mall.',
    image: COLOMBO_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'sinharaja-rainforest',
  title: 'Sinharaja Tropical Rainforest',
  subtitle: 'Тропический древний лес Синхараджа',
  durationDays: 1,
  price: 0,
  rating: 4.9,
  reviewCount: 0,
  heroImage: SINHARAJA_HERO,
  galleryImages: [SINHARAJA_G1],
  region: 'Multiple Regions',
  activityTags: ['Adventure', 'Wildlife'],
  shortDescription:
  "Trek deep into the UNESCO-protected Sinharaja Rainforest — one of Sri Lanka's last primary tropical forests — and swim in natural jungle waterfalls.",
  highlights: [
  'Jungle trekking in Sinharaja',
  'Swimming in natural waterfalls',
  'UNESCO World Heritage rainforest',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Park entrance fees (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Sinharaja Rainforest Trek',
    description:
    'Enter the ancient Sinharaja Tropical Rainforest, a UNESCO World Heritage site and one of the last remaining primary rainforests in Sri Lanka. Trek through dense jungle trails and cool off with a swim in natural waterfall pools.',
    image: SINHARAJA_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'ocean-fishing',
  title: 'Ocean Fishing',
  subtitle: 'Рыбалка в океане',
  durationDays: 1,
  price: 0,
  rating: 4.8,
  reviewCount: 0,
  heroImage: FISHING_HERO,
  galleryImages: [FISHING_G1, FISHING_G2, FISHING_G3],
  region: 'South Coast',
  activityTags: ['Adventure', 'Beach'],
  shortDescription:
  'Head out into the open Indian Ocean for a deep-sea fishing experience — with the chance to catch tuna, barracuda, swordfish, marlin, shark, and more.',
  highlights: [
  'Open ocean fishing trip',
  'Deep sea fishing experience',
  'Possible catch: tuna, barracuda, swordfish, marlin, shark',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Boat fees (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Deep-Sea Fishing',
    description:
    'Set out into the Indian Ocean for an exciting deep-sea fishing adventure. Try your luck catching perch, tuna, barracuda, swordfish, marlin, shark, and other ocean species with local fishing expertise.',
    image: FISHING_HERO,
  },
  ],
  hotels: [],
},
{
  slug: 'surfing',
  title: 'Surfing',
  subtitle: 'Серфинг',
  durationDays: 1,
  price: 0,
  rating: 4.8,
  reviewCount: 0,
  heroImage: SURF_HERO,
  galleryImages: [SURF_G1, SURF_G2, SURF_G3],
  region: 'South Coast',
  activityTags: ['Adventure', 'Beach'],
  shortDescription:
  "Learn to surf on Sri Lanka's beautiful coastline with an experienced instructor — from beach practice to riding waves in the Indian Ocean.",
  highlights: [
  'Instructor lesson',
  'Beach practice',
  'Ocean training',
  'Safety rules briefing',
  ],
  included: ['Private transport with driver', 'Hotel pickup and drop-off'],
  excluded: ['Surfing lesson & equipment fees (quoted separately)', 'Meals'],
  itinerary: [
  {
    day: 1,
    title: 'Surf Lesson',
    description:
    'Start with a safety rules briefing and beach practice with your instructor, then head into the Indian Ocean for ocean training. Suitable for complete beginners and those looking to improve their skills.',
    image: SURF_HERO,
  },
  ],
  hotels: [],
},
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}
