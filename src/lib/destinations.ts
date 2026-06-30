export type Region =
'South Coast' |
'Hill Country' |
'Cultural Triangle' |
'East Coast';

export interface Destination {
  slug: string;
  name: string;
  region: Region;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  longDescription: string[];
  highlights: string[];
  bestTimeToVisit: string;
  howToGetThere: string;
  relatedTourSlugs: string[];
}

export const destinations: Destination[] = [
{
  slug: 'sigiriya',
  name: 'Sigiriya',
  region: 'Cultural Triangle',
  tagline: 'The Ancient Rock Fortress',
  heroImage:
  '/images/tours/wonder-of-sri-lanka/hero.jpg',
  galleryImages: [
  '/images/tours/majestic-island/hero.jpg',
  '/images/tours/wonder-of-sri-lanka/gallery-2.jpg'],

  longDescription: [
  "Rising dramatically from the central plains, the enigmatic rocky outcrop of Sigiriya is perhaps Sri Lanka's single most dramatic sight. Near-vertical walls soar to a flat-topped summit that contains the ruins of an ancient civilization, thought to be once the epicenter of the short-lived kingdom of Kassapa.",
  'Beyond the rock itself, the surrounding landscape is a testament to ancient urban planning, featuring symmetrical water gardens, boulder gardens, and terraced gardens that showcase an advanced understanding of hydraulics and aesthetics.'],

  highlights: [
  'Climb the Lion Rock',
  'View the ancient frescoes',
  'Explore the Water Gardens',
  'Hike Pidurangala Rock for sunset views'],

  bestTimeToVisit: 'January to April, and mid-July to September',
  howToGetThere:
  'About 4 hours drive from Colombo. Often visited as part of a Cultural Triangle tour.',
  relatedTourSlugs: [
  '7-days-cultural-discovery',
  '12-days-complete-sri-lanka',
  '9-days-family-adventure']

},
{
  slug: 'kandy',
  name: 'Kandy',
  region: 'Hill Country',
  tagline: 'The Cultural Capital',
  heroImage:
  '/images/tours/the-last-kingdom/hero.jpg',
  galleryImages: [
  '/images/tours/the-last-kingdom/gallery-3.jpg',
  '/images/tours/the-last-kingdom/gallery-2.jpg'],

  longDescription: [
  "Set around an attractive man-made lake in scenic hill country, Kandy is Sri Lanka's second city and the undisputed cultural capital of the island. It was the last capital of the ancient kings' era of Sri Lanka.",
  'The city is most famous for the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), one of the most sacred places of worship in the Buddhist world. The cool climate and rich history make it a must-visit destination.'],

  highlights: [
  'Temple of the Sacred Tooth Relic',
  'Royal Botanical Gardens, Peradeniya',
  'Kandy Lake walk',
  'Traditional Kandyan Dance performance'],

  bestTimeToVisit: 'December to April',
  howToGetThere:
  '3 hours drive from Colombo, or a scenic 2.5 hour train ride.',
  relatedTourSlugs: [
  '7-days-cultural-discovery',
  '12-days-complete-sri-lanka',
  '14-days-ultimate-honeymoon']

},
{
  slug: 'ella',
  name: 'Ella',
  region: 'Hill Country',
  tagline: 'Lush Green Hills & Waterfalls',
  heroImage:
  '/images/tours/misty-mountains/hero.jpg',
  galleryImages: [
  '/images/tours/misty-mountains/gallery-1.jpg',
  '/images/tours/misty-mountains/gallery-2.jpg'],

  longDescription: [
  'Ella is a small town in the Badulla District of Uva Province, situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna.',
  'Famous for its breathtaking views, tea plantations, and the iconic Nine Arch Bridge, Ella offers a cooler climate and a laid-back atmosphere perfect for hiking and relaxation.'],

  highlights: [
  'Nine Arch Bridge',
  "Hike Little Adam's Peak",
  'Ella Rock hike',
  'Ravana Falls'],

  bestTimeToVisit: 'January to May',
  howToGetThere:
  'Best reached by the famous scenic train ride from Kandy (approx. 6-7 hours).',
  relatedTourSlugs: [
  '12-days-complete-sri-lanka',
  '5-days-luxury-tea-country',
  '14-days-ultimate-honeymoon']

},
{
  slug: 'yala',
  name: 'Yala',
  region: 'South Coast',
  tagline: 'Leopard Country',
  heroImage:
  '/images/tours/yala-safari/hero.jpg',
  galleryImages: [
  '/images/tours/yala-safari/gallery-1.jpg',
  '/images/tours/yala-safari/gallery-2.jpg'],

  longDescription: [
  'Yala National Park is the most visited and second largest national park in Sri Lanka. It is situated in the southeast region of the country, and lies in Southern Province and Uva Province.',
  'The park is best known for its variety of wild animals and is important for the conservation of Sri Lankan elephants, Sri Lankan leopards and aquatic birds. It boasts one of the highest leopard densities in the world.'],

  highlights: [
  'Morning Leopard Safari',
  'Spotting wild elephants',
  'Bird watching at the lagoons',
  'Luxury tented camp experience'],

  bestTimeToVisit: 'February to July (Park often closes in September)',
  howToGetThere: 'About 5-6 hours drive from Colombo, or 4 hours from Ella.',
  relatedTourSlugs: [
  '10-days-wildlife-nature-safari',
  '12-days-complete-sri-lanka',
  '9-days-family-adventure']

},
{
  slug: 'mirissa',
  name: 'Mirissa',
  region: 'South Coast',
  tagline: 'Whales & Pristine Beaches',
  heroImage:
  '/images/tours/whale-watching/hero.avif',
  galleryImages: [
  '/images/tours/whale-watching/gallery-1.avif',
  '/images/tours/surfing/hero.avif'],

  longDescription: [
  "Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. Mirissa's beach and nightlife make it a popular tourist destination.",
  "It is also a fishing port and one of the island's main whale and dolphin watching locations. The crescent-shaped beach is fringed with palm trees and offers excellent surfing spots."],

  highlights: [
  'Whale & Dolphin watching',
  'Relax at Secret Beach',
  'Surf at Mirissa Beach',
  'Visit Coconut Tree Hill'],

  bestTimeToVisit: 'November to April',
  howToGetThere:
  'About 2.5 hours drive from Colombo via the Southern Expressway.',
  relatedTourSlugs: [
  '8-days-south-coast-escape',
  '14-days-ultimate-honeymoon',
  '12-days-complete-sri-lanka']

},
{
  slug: 'nuwara-eliya',
  name: 'Nuwara Eliya',
  region: 'Hill Country',
  tagline: 'Little England',
  heroImage:
  '/images/tours/majestic-island/gallery-2.jpg',
  galleryImages: [
  '/images/tours/pearl-of-sri-lanka/gallery-2.jpg',
  '/images/tours/the-last-kingdom/gallery-3.jpg'],

  longDescription: [
  'Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Gregory Lake is a popular spot for water sports. The city is known for its temperate, cool climate – the coolest area in Sri Lanka.',
  'Often referred to as "Little England", it features colonial-era bungalows, Tudor-style hotels, well-tended hedgerows and pretty gardens. It is the heart of Sri Lanka\'s tea production.'],

  highlights: [
  'Visit a Tea Factory & Estate',
  'Stroll around Gregory Lake',
  'Hike in Horton Plains National Park',
  'High tea at a colonial hotel'],

  bestTimeToVisit: 'February to May',
  howToGetThere:
  'About 5 hours drive from Colombo, or via scenic train to Nanu Oya.',
  relatedTourSlugs: [
  '5-days-luxury-tea-country',
  '12-days-complete-sri-lanka',
  '14-days-ultimate-honeymoon']

}];


export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}