import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Cloud, Droplets, Wind } from 'lucide-react';
const seasons = [
{
  id: 1,
  season: 'December - March',
  title: 'Peak Season',
  description:
  'Perfect weather for beaches, wildlife safaris, and cultural exploration. Ideal for first-time visitors.',
  icon: Sun,
  color: 'from-orange-400 to-amber-500',
  image:
  '/images/tours/yala-safari/hero.jpg'
},
{
  id: 2,
  season: 'April - May',
  title: 'Shoulder Season',
  description:
  'Fewer crowds, lush landscapes, and great value. Perfect for tea country and hill stations.',
  icon: Cloud,
  color: 'from-teal-400 to-cyan-500',
  image:
  '/images/tours/pearl-of-sri-lanka/gallery-2.jpg'
},
{
  id: 3,
  season: 'June - September',
  title: 'East Coast Season',
  description:
  'Pristine beaches on the east coast, calm seas, and excellent diving conditions.',
  icon: Wind,
  color: 'from-blue-400 to-indigo-500',
  image:
  '/images/tours/surfing/hero.avif'
},
{
  id: 4,
  season: 'October - November',
  title: 'Green Season',
  description:
  'Dramatic landscapes, waterfalls at full flow, and incredible photography opportunities.',
  icon: Droplets,
  color: 'from-green-400 to-emerald-500',
  image:
  '/images/tours/misty-mountains/gallery-2.jpg'
}];

export function SeasonalInspirations() {
  return (
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
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
          className="text-center mb-16">
          
          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">
            When to Visit
          </span>
          <h2 className="font-heading text-display-sm font-bold text-primary mb-6">
            Seasonal Inspirations
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Sri Lanka is a year-round destination. Discover the best time to
            visit based on your interests and travel style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasons.map((season, index) => {
            const Icon = season.icon;
            return (
              <motion.div
                key={season.id}
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
                  delay: index * 0.1
                }}
                className="group">
                
                <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={season.image}
                      alt={season.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${season.color} flex items-center justify-center shadow-lift`}>
                      
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-accent text-sm font-semibold mb-2 tracking-luxury uppercase">
                      {season.season}
                    </p>
                    <h3 className="font-heading text-3xl font-bold mb-3">
                      {season.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {season.description}
                    </p>
                  </div>
                </div>
              </motion.div>);

          })}
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
          className="text-center mt-12">
          
          <Link
            to="/travel-guide"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-card hover:shadow-lift">
            
            Complete Travel Guide
          </Link>
        </motion.div>
      </div>
    </section>);

}