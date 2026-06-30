import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const experiences = [
{
  id: 1,
  title: 'Safari in Yala',
  subtitle: 'Wildlife Encounters',
  image:
  '/images/tours/yala-safari/gallery-2.jpg',
  link: '/experiences'
},
{
  id: 2,
  title: 'Tea Plantation Tour',
  subtitle: 'Hill Country Heritage',
  image:
  '/images/tours/the-last-kingdom/gallery-3.jpg',
  link: '/experiences'
},
{
  id: 3,
  title: 'Temple of the Tooth',
  subtitle: 'Sacred Traditions',
  image:
  '/images/tours/the-last-kingdom/hero.jpg',
  link: '/experiences'
},
{
  id: 4,
  title: 'Ocean Fishing',
  subtitle: 'Coastal Traditions',
  image:
  '/images/tours/ocean-fishing/hero.jpg',
  link: '/experiences'
}];

export function SignatureExperiences() {
  return (
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      <div className="bg-leaf-outline absolute inset-0"></div>

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
            Unforgettable Moments
          </span>
          <h2 className="font-heading text-display-sm font-bold text-primary mb-6">
            Signature Experiences
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Immerse yourself in the authentic culture, wildlife, and traditions
            that make Sri Lanka extraordinary.
          </p>
        </motion.div>

        {/* Horizontal overlapping cards */}
        <div className="relative h-[500px] md:h-[600px] mb-8">
          {experiences.map((exp, index) =>
          <motion.div
            key={exp.id}
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className="absolute group"
            style={{
              left: `${index * 18}%`,
              top: `${index * 8}%`,
              zIndex: experiences.length - index
            }}>
            
              <Link to={exp.link}>
                <div className="w-[280px] md:w-[360px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lift hover:shadow-glass-strong transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-accent text-sm font-semibold mb-2 tracking-luxury uppercase">
                      {exp.subtitle}
                    </p>
                    <h3 className="font-heading text-3xl font-bold">
                      {exp.title}
                    </h3>
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
          className="text-center mt-32 md:mt-24">
          
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift">
            
            Discover All Experiences
          </Link>
        </motion.div>
      </div>
    </section>);

}