import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [
{
  id: 1,
  quote:
  "Ceylon Escapes transformed our honeymoon into a once-in-a-lifetime journey. Every detail was perfection, from the boutique hotels to the private safari. We'll treasure these memories forever.",
  author: 'Sarah & Michael',
  location: 'London, UK',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  rating: 5
},
{
  id: 2,
  quote:
  'The attention to detail and local knowledge made all the difference. Our guide felt like family, and the experiences were authentic and deeply moving. This is luxury travel done right.',
  author: 'Emma Thompson',
  location: 'Sydney, Australia',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  rating: 5
},
{
  id: 3,
  quote:
  'From the tea plantations to the ancient temples, every moment exceeded our expectations. The seamless planning and genuine hospitality made this our best family vacation ever.',
  author: 'David Chen',
  location: 'Singapore',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  rating: 5
}];

export function TravellerStories() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      <div className="bg-watermark absolute inset-0"></div>

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
          className="text-center mb-20">
          
          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">
            Guest Experiences
          </span>
          <h2 className="font-heading text-display-sm font-bold text-primary mb-6">
            Traveller Stories
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Hear from the travellers who've experienced the magic of Sri Lanka
            with Ceylon Escapes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.id}
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
              duration: 0.6,
              delay: index * 0.1
            }}
            className="group">
            
              <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-lift transition-all duration-500 h-full flex flex-col">
                <Quote className="w-12 h-12 text-accent/20 mb-6" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) =>
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                )}
                </div>

                <blockquote className="text-lg text-dark/90 mb-8 flex-grow leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-sand">
                  <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover" />
                
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
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
          className="text-center mt-12">
          
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            
            Read More Stories
            <Star className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>);

}