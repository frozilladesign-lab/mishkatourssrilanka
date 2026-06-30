import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export const TravellerStories = memo(function TravellerStories() {
  const { t } = usePreferences();
  const testimonials = [
    { id: 1, quoteKey: 'testimonial1', authorKey: 'testimonial1Author', locationKey: 'testimonial1Location', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', rating: 5 },
    { id: 2, quoteKey: 'testimonial2', authorKey: 'testimonial2Author', locationKey: 'testimonial2Location', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', rating: 5 },
    { id: 3, quoteKey: 'testimonial3', authorKey: 'testimonial3Author', locationKey: 'testimonial3Location', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', rating: 5 },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory relative overflow-hidden">
      <div className="bg-watermark absolute inset-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">{t('storiesTag')}</span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-display-sm font-semibold text-primary mb-4">{t('storiesHeading')}</h2>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">{t('storiesSub')}</p>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:hidden px-4 md:px-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="snap-start shrink-0 w-[80vw] max-w-sm">
              <div className="bg-white rounded-2xl p-5 shadow-card h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <blockquote className="text-sm text-dark/80 mb-4 flex-grow leading-relaxed italic">"{t(testimonial.quoteKey)}"</blockquote>
                <div className="flex items-center gap-3 pt-3 border-t border-sand">
                  <img src={testimonial.image} alt={t(testimonial.authorKey)} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-primary text-sm">{t(testimonial.authorKey)}</div>
                    <div className="text-xs text-muted">{t(testimonial.locationKey)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 container mx-auto px-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-lift transition-all duration-500 h-full flex flex-col">
                <Quote className="w-12 h-12 text-accent/20 mb-6" />
                <div className="flex gap-1 mb-6">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}</div>
                <blockquote className="text-lg text-dark/90 mb-8 flex-grow leading-relaxed italic">"{t(testimonial.quoteKey)}"</blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-sand">
                  <img src={testimonial.image} alt={t(testimonial.authorKey)} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-primary">{t(testimonial.authorKey)}</div>
                    <div className="text-sm text-muted">{t(testimonial.locationKey)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center mt-8">
          <a href="/testimonials" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm">
            {t('storiesReadMore')} <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
});
