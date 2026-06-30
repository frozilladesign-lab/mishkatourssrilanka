import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Users } from 'lucide-react';
import { Parallax } from '../common/Parallax';
export function JourneyBuilderTeaser() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Parallax offset={80}>
          <img
            src="/images/tours/pearl-of-sri-lanka/gallery-1.jpg"
            alt="Scenic train journey through Sri Lanka"
            className="w-full h-full object-cover" />
          
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
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
              duration: 0.8
            }}>
            
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-accent" />
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Design Your Perfect Journey
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our AI-powered trip planner and expert travel consultants work
              together to craft a bespoke itinerary tailored to your dreams,
              budget, and travel style.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-panel-dark rounded-2xl p-6">
                <Calendar className="w-10 h-10 text-accent mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold mb-2">
                  Flexible Dates
                </h3>
                <p className="text-white/80 text-sm">
                  Choose your ideal travel window
                </p>
              </div>
              <div className="glass-panel-dark rounded-2xl p-6">
                <MapPin className="w-10 h-10 text-accent mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold mb-2">
                  Custom Routes
                </h3>
                <p className="text-white/80 text-sm">
                  Explore at your own pace
                </p>
              </div>
              <div className="glass-panel-dark rounded-2xl p-6">
                <Users className="w-10 h-10 text-accent mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold mb-2">
                  Expert Guidance
                </h3>
                <p className="text-white/80 text-sm">
                  Personal travel consultants
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/trip-planner"
                className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lift hover:shadow-glass-strong hover:-translate-y-1">
                
                Start Planning
              </Link>
              <Link
                to="/custom-tour-builder"
                className="w-full sm:w-auto px-10 py-5 glass-panel-dark border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                
                Custom Tour Builder
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}