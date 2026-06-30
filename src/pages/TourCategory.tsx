import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { TourCard } from '../components/tours/TourCard';
import { tours, Activity } from '../lib/tours';
interface CategoryConfig {
  label: string;
  tag: Activity;
  subtitle: string;
  image: string;
  intro: string;
}
const CATEGORIES: Record<string, CategoryConfig> = {
  luxury: {
    label: 'Luxury Tours',
    tag: 'Luxury',
    subtitle: 'Indulgent journeys with the finest stays and service',
    image:
    '/images/tours/charm-of-southern-coast/hero.avif',
    intro:
    'Experience Sri Lanka in absolute comfort. Our luxury collection pairs five-star resorts and boutique villas with private guides, seamless transfers, and exclusive moments crafted just for you.'
  },
  family: {
    label: 'Family Tours',
    tag: 'Family',
    subtitle: 'Adventures the whole family will treasure',
    image:
    '/images/tours/surfing/hero.avif',
    intro:
    'Thoughtfully paced itineraries with engaging activities for every age — gentle wildlife encounters, cultural fun, and plenty of beach time, all with family-friendly stays.'
  },
  honeymoon: {
    label: 'Honeymoon Tours',
    tag: 'Honeymoon',
    subtitle: 'Romantic escapes for two',
    image:
    '/images/tours/whale-watching/hero.avif',
    intro:
    'Celebrate your love with private dinners, couples spa rituals, and intimate luxury villas in Sri Lanka’s most breathtaking settings.'
  },
  adventure: {
    label: 'Adventure Tours',
    tag: 'Adventure',
    subtitle: 'For the thrill-seekers and explorers',
    image:
    '/images/tours/misty-mountains/hero.jpg',
    intro:
    'Hike misty peaks, surf golden coastlines, and trek through ancient rainforests. Our adventure journeys bring you closer to Sri Lanka’s wild heart.'
  },
  wildlife: {
    label: 'Wildlife Tours',
    tag: 'Wildlife',
    subtitle: 'Track leopards, elephants and exotic birds',
    image:
    '/images/tours/yala-safari/hero.jpg',
    intro:
    'Get up close with Sri Lanka’s incredible biodiversity. Expert naturalists guide you through the island’s finest national parks for unforgettable safari moments.'
  }
};
export function TourCategory() {
  const { category } = useParams<{
    category: string;
  }>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
  const config = category ? CATEGORIES[category] : undefined;
  if (!config) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="font-heading text-4xl text-primary mb-4">
          Collection Not Found
        </h1>
        <p className="text-dark/70 mb-8">
          We couldn't find the collection you're looking for.
        </p>
        <Link
          to="/tours"
          className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors">
          
          Browse All Tours
        </Link>
      </div>);

  }
  const matchingTours = tours.filter((tour) =>
  tour.activityTags.includes(config.tag)
  );
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title={config.label}
        subtitle={config.subtitle}
        image={config.image}
        breadcrumbs={[
        {
          label: 'Tours',
          path: '/tours'
        },
        {
          label: config.label
        }]
        } />
      

      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-dark/70 text-lg leading-relaxed font-light">
              {config.intro}
            </p>
          </div>

          {matchingTours.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchingTours.map((tour) =>
            <TourCard key={tour.slug} tour={tour} />
            )}
            </div> :

          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-12 text-center max-w-xl mx-auto">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                No tours in this collection yet
              </h3>
              <p className="text-dark/70 mb-6">
                We're curating new {config.label.toLowerCase()} — check back
                soon or explore our full range.
              </p>
              <Link
              to="/tours"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors">
              
                Browse All Tours
              </Link>
            </div>
          }

          <div className="text-center mt-14">
            <Link
              to="/tours"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors">
              
              View All Tour Packages
            </Link>
          </div>
        </div>
      </section>
    </div>);

}