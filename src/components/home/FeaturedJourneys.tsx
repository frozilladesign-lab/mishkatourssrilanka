import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { tours } from '../../lib/tours';
import { usePreferences } from '../personalization/PreferencesContext';
export function FeaturedJourneys() {
  const featured = tours.slice(0, 3);
  const { formatPrice } = usePreferences();
  return (
    <section className="py-16 md:py-20 bg-cream relative overflow-hidden">
      <div className="bg-topographic absolute inset-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
            duration: 0.6
          }}
          className="text-center mb-12">

          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">
            Signature Experiences
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
            Featured Journeys
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Handpicked adventures that showcase the very best of Sri Lanka's
            culture, nature, and luxury.
          </p>
        </motion.div>

        {/* Asymmetric editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large featured tour */}
          {featured[0] &&
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="lg:row-span-2 group">
            
              <Link to={`/tours/${featured[0].slug}`} className="block h-full">
                <div className="relative h-[280px] lg:h-full lg:min-h-[440px] rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500">
                  <img
                  src={featured[0].heroImage}
                  alt={featured[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featured[0].durationDays} Days
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {featured[0].itinerary.length} Stops
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {featured[0].title}
                    </h3>
                    <p className="text-white/90 mb-3 line-clamp-2 text-sm">
                      {featured[0].shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-accent">
                        {formatPrice(featured[0].price)}
                      </span>
                      <span className="flex items-center gap-2 text-white group-hover:gap-3 transition-all text-sm">
                        Explore Journey <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          }

          {/* Two smaller featured tours */}
          {featured.slice(1, 3).map((tour, index) =>
          <motion.div
            key={tour.slug}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.1
            }}
            className="group">
            
              <Link to={`/tours/${tour.slug}`} className="block h-full">
                <div className="relative h-[204px] rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500">
                  <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex items-center gap-3 mb-2 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {tour.durationDays} Days
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {tour.itinerary.length} Stops
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-1.5 group-hover:text-accent transition-colors line-clamp-1">
                      {tour.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-accent">
                        {formatPrice(tour.price)}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.5
          }}
          className="text-center mt-10">

          <Link
            to="/tours"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift hover:-translate-y-0.5">

            View All Journeys <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>);

}