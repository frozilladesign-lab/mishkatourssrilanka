import React from 'react';
import { motion } from 'framer-motion';
import { ItineraryDay } from '../../lib/tours';
interface Props {
  itinerary: ItineraryDay[];
}
export function TourTimeline({ itinerary }: Props) {
  return (
    <section className="py-12">
      <h2 className="font-heading text-4xl text-primary font-medium mb-12">
        The Journey
      </h2>

      <div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 md:before:ml-[50%] md:before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-primary/5 before:via-primary/20 before:to-primary/5">
        {itinerary.map((day, idx) =>
        <motion.div
          key={idx}
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
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}
          className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group">
          
            {/* Timeline Marker */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-primary/10 shadow-sm z-10 text-primary font-heading font-medium text-lg">
              {day.day}
            </div>

            {/* Content */}
            <div className="w-full pl-20 md:pl-0 md:w-[calc(50%-4rem)]">
              <div className="bg-white p-8 rounded-3xl shadow-subtle border border-primary/5 hover:border-primary/10 transition-colors">
                <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
                  Day {day.day}
                </span>
                <h4 className="font-heading text-2xl font-medium text-primary mb-4">
                  {day.title}
                </h4>
                <p className="text-dark/70 leading-relaxed font-light mb-6">
                  {day.description}
                </p>

                {day.image &&
              <div className="w-full h-48 rounded-xl overflow-hidden">
                    <img
                  src={day.image}
                  alt={day.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                
                  </div>
              }
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}