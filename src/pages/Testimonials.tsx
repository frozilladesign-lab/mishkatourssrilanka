import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import { StarIcon, PlayIcon, QuoteIcon } from 'lucide-react';
const reviews = [
{
  id: 1,
  type: 'video',
  name: 'Sarah & James',
  country: 'United Kingdom',
  rating: 5,
  thumbnail:
  'https://images.unsplash.com/photo-1516483638261-f40af5ba3227?q=80&w=800&auto=format&fit=crop',
  quote:
  'The honeymoon of our dreams. Ceylon Escapes handled everything perfectly, from the boutique hotels to the private safari.'
},
{
  id: 2,
  type: 'text',
  name: 'The Müller Family',
  country: 'Germany',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop',
  quote:
  'Traveling with two teenagers can be challenging, but our guide made it effortless. The mix of culture, hiking, and beach time was exactly what we needed. Highly recommend their tailored approach.',
  date: 'October 2023'
},
{
  id: 3,
  type: 'text',
  name: 'Elena Rostova',
  country: 'Russia',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  quote:
  'A truly premium experience. The attention to detail was incredible. Our driver was so professional and knowledgeable.',
  date: 'January 2024'
},
{
  id: 4,
  type: 'video',
  name: 'David Chen',
  country: 'Australia',
  rating: 5,
  thumbnail:
  'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800&auto=format&fit=crop',
  quote:
  'The scenic train ride and the tea country were breathtaking. Having everything organized meant we could just relax and enjoy.'
},
{
  id: 5,
  type: 'text',
  name: 'Sophie Laurent',
  country: 'France',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  quote:
  'I wanted a mix of luxury and authentic local experiences. Ceylon Escapes delivered beyond my expectations. The village cooking class was a highlight!',
  date: 'November 2023'
},
{
  id: 6,
  type: 'text',
  name: 'Mark & Lisa',
  country: 'USA',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1559548331-6fca8e7d7e63?q=80&w=200&auto=format&fit=crop',
  quote:
  'We felt so safe and well-cared for. The hotels selected were stunning, especially the one in Sigiriya with the rock view.',
  date: 'February 2024'
}];

export function Testimonials() {
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Guest Stories"
        subtitle="Don't just take our word for it. Hear from travelers who have experienced the magic of Sri Lanka with us."
        image="/images/tours/charm-of-southern-coast/hero.avif"
        breadcrumbs={[
        {
          label: 'Testimonials'
        }]
        } />
      

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Summary Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center md:border-r md:border-gray-100 md:pr-8">
              <div className="text-5xl font-heading font-semibold text-primary mb-2">
                4.9
              </div>
              <div className="flex items-center justify-center gap-1 text-accent mb-2">
                {[...Array(5)].map((_, i) =>
                <StarIcon key={i} className="w-5 h-5 fill-current" />
                )}
              </div>
              <div className="text-sm text-dark/60 font-medium">
                Based on 250+ reviews
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl text-primary font-semibold mb-2">
                Excellence in Travel
              </h3>
              <p className="text-dark/70 text-sm max-w-md">
                We pride ourselves on delivering flawless, premium experiences.
                Our guests consistently rate us highly for our expert guides,
                curated itineraries, and 24/7 support.
              </p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) =>
            <motion.div
              key={review.id}
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
              className="h-full">
              
                {review.type === 'video' ?
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow duration-300 h-full flex flex-col border border-gray-100">
                    <div className="relative h-48 group cursor-pointer">
                      <img
                    src={review.thumbnail}
                    alt={`Video review by ${review.name}`}
                    className="w-full h-full object-cover" />
                  
                      <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
                          <PlayIcon className="w-6 h-6 ml-1 fill-current" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-1 text-accent mb-3">
                        {[...Array(review.rating)].map((_, i) =>
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                    )}
                      </div>
                      <p className="text-dark/80 italic text-sm mb-4 flex-grow">
                        "{review.quote}"
                      </p>
                      <div className="mt-auto">
                        <div className="font-semibold text-primary">
                          {review.name}
                        </div>
                        <div className="text-xs text-dark/50">
                          {review.country}
                        </div>
                      </div>
                    </div>
                  </div> :

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow duration-300 h-full flex flex-col border border-gray-100 relative">
                    <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-gray-100" />
                    <div className="flex items-center gap-1 text-accent mb-4">
                      {[...Array(review.rating)].map((_, i) =>
                  <StarIcon key={i} className="w-4 h-4 fill-current" />
                  )}
                    </div>
                    <p className="text-dark/80 italic text-sm mb-6 flex-grow relative z-10">
                      "{review.quote}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-light" />
                  
                      <div>
                        <div className="font-semibold text-primary text-sm">
                          {review.name}
                        </div>
                        <div className="text-xs text-dark/50">
                          {review.country} • {review.date}
                        </div>
                      </div>
                    </div>
                  </div>
              }
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}