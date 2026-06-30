import React from 'react';
import { motion } from 'framer-motion';
import { MapIcon, CompassIcon, CarIcon, MessageCircleIcon, SunIcon, ShieldCheckIcon } from 'lucide-react';
const features = [
{
  icon: CompassIcon,
  title: 'Private & Flexible Tours',
  description:
  'Travel at your own pace with flexible routes and personalized planning.'
},
{
  icon: MapIcon,
  title: 'Local Travel Experience',
  description:
  'Explore Sri Lanka with support from people who know the island, routes, attractions, and hidden places.'
},
{
  icon: CarIcon,
  title: 'Comfortable Transport',
  description:
  'Enjoy private transport options suitable for couples, families, and small groups.'
},
{
  icon: SunIcon,
  title: 'Cultural, Nature & Beach',
  description:
  'From temples and mountains to safaris, waterfalls, beaches, and ocean activities — we cover every side of Sri Lanka.'
},
{
  icon: MessageCircleIcon,
  title: 'Easy Communication',
  description:
  'Contact us through WhatsApp or social media for quick tour planning and trip support.'
},
{
  icon: ShieldCheckIcon,
  title: 'Safe & Reliable',
  description:
  'Travel with confidence — safe transport, reliable local knowledge, and friendly support throughout your trip.'
}];

export function WhyUs() {
  return (
    <section className="py-20 bg-light bg-watermark">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-4">
            Why Travel With Us
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            We combine luxury comfort with authentic local experiences to create
            unforgettable Sri Lankan journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={index}
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
            className="bg-white p-8 rounded-2xl shadow-card border border-gray-50 text-center group hover:-translate-y-1 transition-transform duration-300">
            
              <div className="w-14 h-14 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-dark/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}