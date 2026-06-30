import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const experiences = [
{
  id: 'wildlife',
  title: 'Wildlife Safari',
  description:
  'Encounter leopards, elephants, and exotic birds in their natural habitat.',
  image:
  '/images/tours/yala-safari/hero.jpg'
},
{
  id: 'train',
  title: 'Scenic Train Journeys',
  description:
  "Ride through misty mountains and lush tea plantations on one of the world's most beautiful train routes.",
  image:
  '/images/tours/misty-mountains/hero.jpg'
},
{
  id: 'beach',
  title: 'Pristine Beach Escapes',
  description:
  'Relax on golden sands, surf world-class waves, and watch breathtaking sunsets over the Indian Ocean.',
  image:
  '/images/tours/surfing/hero.avif'
},
{
  id: 'tea',
  title: 'Tea Country Heritage',
  description:
  'Step back in time in colonial bungalows and learn the art of Ceylon tea making.',
  image:
  '/images/tours/the-last-kingdom/gallery-3.jpg'
},
{
  id: 'culture',
  title: 'Ancient Culture & Heritage',
  description:
  'Explore UNESCO World Heritage sites, ancient ruins, and sacred temples.',
  image:
  '/images/tours/wonder-of-sri-lanka/hero.jpg'
},
{
  id: 'luxury',
  title: 'Luxury & Wellness',
  description:
  'Rejuvenate with Ayurvedic treatments and stay in world-class boutique resorts.',
  image:
  '/images/tours/the-last-kingdom/gallery-4.jpg'
}];

export function Experiences() {
  return (
    <div className="min-h-screen bg-light pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tours/colombo-city-tour/hero.jpg"
            alt="Sri Lanka Travel Experiences"
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
            
            Travel Experiences
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
            
            Curated moments that turn a simple holiday into an unforgettable
            journey.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {experiences.map((exp, index) =>
            <motion.div
              key={exp.id}
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
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300">
              
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl text-primary font-semibold mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-dark/70 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                    to="/tours"
                    className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                    
                      View Related Tours
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
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}