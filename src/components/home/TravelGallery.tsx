import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon } from 'lucide-react';
const photos = [
{
  id: 1,
  url: '/images/tours/yala-safari/gallery-3.jpg',
  aspect: 'aspect-[4/5]'
},
{
  id: 2,
  url: '/images/tours/misty-mountains/hero.jpg',
  aspect: 'aspect-square'
},
{
  id: 3,
  url: '/images/tours/pearl-of-sri-lanka/gallery-2.jpg',
  aspect: 'aspect-[4/3]'
},
{
  id: 4,
  url: '/images/tours/the-last-kingdom/gallery-2.jpg',
  aspect: 'aspect-square'
},
{
  id: 5,
  url: '/images/tours/majestic-island/hero.jpg',
  aspect: 'aspect-[4/5]'
}];

export function TravelGallery() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
        <div className="inline-flex items-center justify-center gap-2 text-secondary font-medium mb-4">
          <InstagramIcon className="w-5 h-5" />
          <span>@ceylonescapes</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold">
          Traveler Moments
        </h2>
      </div>

      {/* Simple Masonry-style layout using flex/grid */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 px-4 md:px-8 max-w-[1600px] mx-auto">
        {photos.map((photo, index) =>
        <motion.div
          key={photo.id}
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}
          className={`relative group overflow-hidden rounded-xl flex-grow md:flex-1 min-w-[150px] ${photo.aspect}`}>
          
            <img
            src={photo.url}
            alt="Travel moment"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <InstagramIcon className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}