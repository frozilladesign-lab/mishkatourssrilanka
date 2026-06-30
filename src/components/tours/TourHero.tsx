import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ClockIcon, MapPinIcon, StarIcon } from 'lucide-react';
import { Parallax } from '../common/Parallax';
import { Tour } from '../../lib/tours';
interface Props {
  tour: Tour;
}
export function TourHero({ tour }: Props) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-end pb-24 pt-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Parallax offset={60} className="w-full h-[115%] -top-[5%] relative">
          <img
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover object-center" />
          
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F47] via-[#0A2F47]/60 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="max-w-5xl">
          
          <div className="flex items-center gap-2 text-white/80 text-sm mb-8 font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="w-4 h-4" />
            <Link to="/tours" className="hover:text-white transition-colors">
              Journeys
            </Link>
            <ChevronRightIcon className="w-4 h-4" />
            <span className="text-white truncate max-w-[200px] sm:max-w-none">
              {tour.title}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {tour.activityTags.map((tag) =>
            <span
              key={tag}
              className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase rounded-full">
              
                {tag}
              </span>
            )}
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-white font-medium mb-10 leading-[1.1] drop-shadow-lg text-balance">
            {tour.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 md:gap-12 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <ClockIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="block text-xs text-white/60 uppercase tracking-wider font-semibold mb-0.5">
                  Duration
                </span>
                <span className="font-heading text-xl font-medium">
                  {tour.durationDays} Days
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <MapPinIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="block text-xs text-white/60 uppercase tracking-wider font-semibold mb-0.5">
                  Region
                </span>
                <span className="font-heading text-xl font-medium">
                  {tour.region}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <StarIcon className="w-5 h-5 text-accent fill-accent" />
              </div>
              <div>
                <span className="block text-xs text-white/60 uppercase tracking-wider font-semibold mb-0.5">
                  Reviews
                </span>
                <span className="font-heading text-xl font-medium">
                  {tour.rating}{' '}
                  <span className="text-white/60 text-sm font-body">
                    ({tour.reviewCount})
                  </span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}