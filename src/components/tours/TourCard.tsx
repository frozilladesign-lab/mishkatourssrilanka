import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  StarIcon,
  ClockIcon,
  MapPinIcon,
  PlusIcon,
  CheckIcon } from
'lucide-react';
import { Tour } from '../../lib/tours';
import { cn } from '../../lib/utils';
import { usePersonalization } from '../personalization/PersonalizationContext';
import { usePreferences } from '../personalization/PreferencesContext';
interface TourCardProps {
  tour: Tour;
}
export function TourCard({ tour }: TourCardProps) {
  const { isSaved, toggleSaved, isComparing, toggleCompare } =
  usePersonalization();
  const { formatPrice } = usePreferences();
  const saved = isSaved(tour.slug);
  const comparing = isComparing(tour.slug);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5
      }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full flex items-center gap-1">
            <ClockIcon className="w-3 h-3" />
            {tour.durationDays} Days
          </span>
        </div>

        {/* Wishlist Toggle */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSaved(tour.slug);
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:text-red-500 transition-all z-10 shadow-sm hover:scale-110"
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}>
          
          <HeartIcon
            className={cn(
              'w-5 h-5 transition-colors',
              saved ? 'fill-red-500 text-red-500' : ''
            )} />
          
        </button>

        {/* Bottom Info in Image */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="flex items-center gap-1 text-white text-sm font-medium">
            <MapPinIcon className="w-4 h-4 text-accent" />
            {tour.region}
          </div>
          <div className="flex items-center gap-1 text-white text-sm font-medium bg-dark/40 px-2 py-1 rounded-md backdrop-blur-sm">
            <StarIcon className="w-4 h-4 fill-accent text-accent" />
            {tour.rating}{' '}
            <span className="text-white/80 text-xs">({tour.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-semibold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
          {tour.title}
        </h3>

        <p className="text-dark/70 text-sm mb-4 line-clamp-2 flex-grow">
          {tour.shortDescription}
        </p>

        {/* Highlights Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tour.highlights.slice(0, 3).map((highlight, idx) =>
          <span
            key={idx}
            className="text-xs px-2 py-1 bg-light text-dark/70 rounded-md border border-gray-100">
            
              {highlight}
            </span>
          )}
          {tour.highlights.length > 3 &&
          <span className="text-xs px-2 py-1 bg-light text-dark/70 rounded-md border border-gray-100">
              +{tour.highlights.length - 3}
            </span>
          }
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div>
            <span className="text-xs text-dark/60 block mb-0.5">From</span>
            <div className="font-heading text-xl font-semibold text-primary">
              {formatPrice(tour.price)}{' '}
              <span className="text-sm font-body font-normal text-dark/60">
                / pp
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleCompare(tour.slug);
              }}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center transition-all border',
                comparing ?
                'bg-secondary text-white border-secondary' :
                'bg-white text-dark/60 border-gray-200 hover:border-secondary hover:text-secondary'
              )}
              title={comparing ? 'Remove from compare' : 'Add to compare'}>
              
              {comparing ?
              <CheckIcon className="w-4 h-4" /> :

              <PlusIcon className="w-4 h-4" />
              }
            </button>
            <Link
              to={`/tours/${tour.slug}`}
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
              
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>);

}