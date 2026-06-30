import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { Parallax } from '../common/Parallax';
import { FloatingDecor } from '../common/FloatingDecor';
import { Destination } from '../../lib/destinations';
interface Props {
  destination: Destination;
}
export function DestinationHero({ destination }: Props) {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-end pb-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Parallax offset={50} className="w-full h-[110%] -top-[5%] relative">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover object-center" />
          
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F47] via-[#0A2F47]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-topographic opacity-20 mix-blend-overlay"></div>
      </div>

      <FloatingDecor />

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
          className="max-w-4xl">
          
          <div className="flex items-center gap-2 text-white/80 text-sm mb-8 font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="w-4 h-4" />
            <Link
              to="/destinations"
              className="hover:text-white transition-colors">
              
              Destinations
            </Link>
            <ChevronRightIcon className="w-4 h-4" />
            <span className="text-white">{destination.name}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-accent/90 backdrop-blur-sm text-white text-sm font-semibold tracking-widest uppercase rounded-full shadow-sm">
              {destination.region}
            </span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-white font-medium leading-[0.9] mb-6 drop-shadow-lg">
            {destination.name}
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 font-light font-heading italic max-w-2xl drop-shadow-md">
            {destination.tagline}
          </p>
        </motion.div>
      </div>
    </section>);

}