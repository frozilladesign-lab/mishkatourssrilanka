import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, PlayCircleIcon } from 'lucide-react';
const testimonials = [
{
  id: 1,
  name: 'Sarah & James',
  country: 'United Kingdom',
  image:
  'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=500&auto=format&fit=crop',
  thumbnail:
  'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=800&auto=format&fit=crop',
  quote:
  'The attention to detail was incredible. Our guide knew exactly when to visit the popular spots to avoid crowds. A truly luxury experience.',
  isVideo: true
},
{
  id: 2,
  name: 'Michael Weber',
  country: 'Germany',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
  quote:
  'From the boutique hotels in the tea country to the private safari in Yala, everything exceeded our expectations. Highly recommended.',
  isVideo: false
},
{
  id: 3,
  name: 'Elena Rossi',
  country: 'Italy',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop',
  quote:
  'Ceylon Escapes planned the perfect honeymoon for us. The balance of adventure and relaxation was exactly what we asked for.',
  isVideo: false
}];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-4">
            Guest Experiences
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from travelers who have
            experienced the magic of Sri Lanka with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.id}
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
            className="bg-white rounded-2xl overflow-hidden shadow-soft flex flex-col">
            
              {testimonial.isVideo ?
            <div className="relative h-48 bg-gray-900 group cursor-pointer">
                  <img
                src={testimonial.thumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
              
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircleIcon className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" />
                  </div>
                </div> :

            <div className="h-4 bg-primary/5"></div>
            }

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) =>
                <StarIcon
                  key={i}
                  className="w-4 h-4 text-accent fill-accent" />

                )}
                </div>

                <p className="text-dark/80 italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover" />
                
                  <div>
                    <h4 className="font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-dark/50">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}