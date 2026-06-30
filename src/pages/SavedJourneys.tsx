import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon, ArrowRightIcon } from 'lucide-react';
import { usePersonalization } from '../components/personalization/PersonalizationContext';
import { getTourBySlug } from '../lib/tours';
import { TourCard } from '../components/tours/TourCard';
export function SavedJourneys() {
  const { savedSlugs } = usePersonalization();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const savedTours = savedSlugs.
  map((slug) => getTourBySlug(slug)).
  filter((tour): tour is NonNullable<typeof tour> => tour !== undefined);
  return (
    <div className="min-h-screen bg-light pb-20 pt-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-12">
          <h1 className="font-heading text-4xl md:text-5xl text-primary font-medium mb-4">
            Saved Journeys
          </h1>
          <p className="text-dark/70 text-lg font-light">
            Your curated collection of dream Sri Lankan experiences.
          </p>
        </div>

        {savedTours.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedTours.map((tour) =>
          <TourCard key={tour.slug} tour={tour} />
          )}
          </div> :

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="bg-white rounded-3xl p-12 text-center shadow-soft border border-gray-100 max-w-2xl mx-auto mt-12 relative overflow-hidden">
          
            <div className="absolute inset-0 bg-leaf-outline opacity-5 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-10 h-10 text-primary/40" />
              </div>
              <h2 className="font-heading text-3xl text-primary font-medium mb-4">
                Your collection is empty
              </h2>
              <p className="text-dark/70 text-lg font-light mb-8">
                Explore our curated journeys and save your favorites to start
                planning your perfect Sri Lankan escape.
              </p>
              <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
              
                Discover Journeys <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        }
      </div>
    </div>);

}