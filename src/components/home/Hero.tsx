import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Parallax } from '../common/Parallax';
export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Parallax offset={100} className="w-full h-[120%] -top-[10%] relative">
          <img
            src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=2961&auto=format&fit=crop"
            alt="Sigiriya Rock Fortress, Sri Lanka"
            className="w-full h-full object-cover object-center" />
          
        </Parallax>
        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-16">
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
          className="max-w-4xl mx-auto">
          
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium tracking-wider uppercase mb-6 border border-white/30">
            Local Sri Lanka Travel Service
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-semibold leading-tight mb-6 text-balance drop-shadow-lg">
            Explore the Beauty of Sri Lanka with Mishka Tours
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light text-balance drop-shadow-md">
            Private excursions, wildlife safaris, cultural journeys, beach adventures, and custom tours across Sri Lanka with trusted local travel support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/tours"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">

              View Tours
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">

              Plan My Trip
            </Link>
            <a
              href="https://wa.me/94XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:bg-[#1ebe5d] transition-all duration-300">
              Contact on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}