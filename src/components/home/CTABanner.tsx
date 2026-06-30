import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from '../common/Parallax';
export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Parallax offset={80} className="w-full h-[120%] -top-[10%] relative">
          <img
            src="/images/tours/charm-of-southern-coast/hero.avif"
            alt="Sri Lanka Coast"
            className="w-full h-full object-cover object-center" />
          
        </Parallax>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-white font-semibold mb-6">
          Ready for Your Sri Lankan Adventure?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Let our local experts craft the perfect itinerary for you. Get a free,
          no-obligation travel consultation and quote today.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-300 shadow-lg">
          
          Get Free Travel Consultation
        </Link>
      </div>
    </section>);

}