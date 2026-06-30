import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClockIcon, StarIcon, MapPinIcon } from 'lucide-react';
const tours = [
{
  id: 'cultural-discovery',
  title: '7 Days Cultural Discovery',
  image:
  'https://images.unsplash.com/photo-1620813444062-8758832a8931?q=80&w=1000&auto=format&fit=crop',
  duration: '7 Days / 6 Nights',
  rating: 4.9,
  reviews: 128,
  price: 1250,
  highlights: ['Sigiriya Rock', 'Kandy Temple', 'Dambulla Caves']
},
{
  id: 'south-coast-escape',
  title: '8 Days South Coast Escape',
  image:
  'https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=1000&auto=format&fit=crop',
  duration: '8 Days / 7 Nights',
  rating: 4.8,
  reviews: 94,
  price: 1450,
  highlights: ['Galle Fort', 'Mirissa Whale Watching', 'Yala Safari']
},
{
  id: 'complete-sri-lanka',
  title: '12 Days Complete Sri Lanka',
  image:
  'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1000&auto=format&fit=crop',
  duration: '12 Days / 11 Nights',
  rating: 5.0,
  reviews: 215,
  price: 2100,
  highlights: ['Cultural Triangle', 'Tea Country Train', 'South Coast']
}];

export function FeaturedTours() {
  return (
    <section className="py-20 bg-light bg-watermark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            Carefully crafted itineraries that showcase the absolute best of Sri
            Lanka, balancing adventure, culture, and luxury relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) =>
          <motion.div
            key={tour.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 group flex flex-col">
            
              <div className="relative h-64 overflow-hidden">
                <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold text-dark shadow-sm">
                  <StarIcon className="w-4 h-4 text-accent fill-accent" />
                  {tour.rating}{' '}
                  <span className="text-dark/50 font-normal">
                    ({tour.reviews})
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-sm text-dark/60 mb-3">
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="w-4 h-4 text-secondary" />
                    {tour.duration}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-primary mb-4 line-clamp-2">
                  <Link
                  to={`/tours/${tour.id}`}
                  className="hover:text-secondary transition-colors">
                  
                    {tour.title}
                  </Link>
                </h3>

                <div className="mb-6 flex-grow">
                  <p className="text-sm font-medium text-dark/80 mb-2">
                    Highlights:
                  </p>
                  <ul className="space-y-1.5">
                    {tour.highlights.map((highlight, i) =>
                  <li
                    key={i}
                    className="text-sm text-dark/60 flex items-start gap-2">
                    
                        <MapPinIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                  )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-dark/50 uppercase tracking-wider block mb-0.5">
                      From
                    </span>
                    <span className="text-xl font-semibold text-primary">
                      ${tour.price}
                    </span>
                  </div>
                  <Link
                  to={`/tours/${tour.id}`}
                  className="px-5 py-2.5 bg-primary/5 text-primary hover:bg-primary hover:text-white rounded-full text-sm font-semibold transition-colors">
                  
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tours"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors">
            
            Explore All Packages
          </Link>
        </div>
      </div>
    </section>);

}