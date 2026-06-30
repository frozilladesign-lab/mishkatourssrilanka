import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function LuxuryStays() {
  const { t } = usePreferences();

  const hotels = [
    { id: 1, name: 'Amanwella', location: 'Tangalle', categoryKey: 'staysBeachResort', image: '/images/tours/charm-of-southern-coast/hero.avif', rating: 5 },
    { id: 2, name: 'Ceylon Tea Trails', location: 'Hatton', categoryKey: 'staysHeritageBungalow', image: '/images/tours/the-last-kingdom/gallery-3.jpg', rating: 5 },
    { id: 3, name: 'Wild Coast Tented Lodge', location: 'Yala', categoryKey: 'staysSafariLodge', image: '/images/tours/yala-safari/hero.jpg', rating: 5 },
    { id: 4, name: 'Ulagalla by Uga Escapes', location: 'Anuradhapura', categoryKey: 'staysBoutiqueResort', image: '/images/tours/wonder-of-sri-lanka/hero.jpg', rating: 5 },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="bg-wave-lines absolute inset-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">{t('staysTag')}</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-display-sm font-semibold text-primary mb-6">{t('staysHeading')}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">{t('staysSub')}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel, index) => (
            <motion.div key={hotel.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(hotel.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-accent text-xs font-semibold mb-2 tracking-luxury uppercase">{t(hotel.categoryKey)}</p>
                  <h3 className="font-heading text-xl font-semibold mb-2">{hotel.name}</h3>
                  <p className="flex items-center gap-1 text-sm text-white/90"><MapPin className="w-4 h-4" />{hotel.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-12">
          <Link to="/hotels" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift">
            {t('staysExploreAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
