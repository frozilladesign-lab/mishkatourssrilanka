import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { destinations, Region } from '../lib/destinations';
import { cn } from '../lib/utils';
export function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const regions: (Region | 'All')[] = [
  'All',
  'South Coast',
  'Hill Country',
  'Cultural Triangle',
  'East Coast'];

  const filteredDestinations = destinations.filter(
    (d) => selectedRegion === 'All' || d.region === selectedRegion
  );
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tours/majestic-island/hero.jpg"
            alt="Sri Lanka Destinations"
            className="w-full h-full object-cover object-center" />
          
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center mt-16">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="font-heading text-5xl md:text-6xl text-white font-semibold mb-4">
            
            Explore Destinations
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="text-lg text-white/90 max-w-2xl mx-auto font-light">
            
            Discover the diverse landscapes, ancient cities, and pristine
            beaches of Sri Lanka.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {regions.map((region) =>
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                selectedRegion === region ?
                'bg-primary text-white shadow-md' :
                'bg-white text-dark/70 hover:bg-gray-50 hover:text-primary border border-gray-200'
              )}>
              
                {region}
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, index) =>
            <motion.div
              key={dest.slug}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-lift transition-all duration-300">
              
                <Link
                to={`/destinations/${dest.slug}`}
                className="block h-full">
                
                  <div className="relative h-64 overflow-hidden">
                    <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-sm">
                        {dest.region}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-primary font-semibold mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-4">
                      {dest.tagline}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:text-accent transition-colors">
                      Explore Destination
                      <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {filteredDestinations.length === 0 &&
          <div className="text-center py-20">
              <p className="text-dark/60 text-lg">
                No destinations found for this region yet.
              </p>
            </div>
          }
        </div>
      </section>
    </div>);

}