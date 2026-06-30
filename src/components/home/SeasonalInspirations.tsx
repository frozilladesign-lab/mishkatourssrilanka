import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Cloud, Droplets, Wind } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function SeasonalInspirations() {
  const { t } = usePreferences();

  const seasons = [
    { id: 1, periodKey: 'season1Period', titleKey: 'season1Title', descKey: 'season1Desc', icon: Sun, color: 'from-orange-400 to-amber-500', image: '/images/tours/yala-safari/hero.jpg' },
    { id: 2, periodKey: 'season2Period', titleKey: 'season2Title', descKey: 'season2Desc', icon: Cloud, color: 'from-teal-400 to-cyan-500', image: '/images/tours/pearl-of-sri-lanka/gallery-2.jpg' },
    { id: 3, periodKey: 'season3Period', titleKey: 'season3Title', descKey: 'season3Desc', icon: Wind, color: 'from-blue-400 to-indigo-500', image: '/images/tours/surfing/hero.avif' },
    { id: 4, periodKey: 'season4Period', titleKey: 'season4Title', descKey: 'season4Desc', icon: Droplets, color: 'from-green-400 to-emerald-500', image: '/images/tours/misty-mountains/gallery-2.jpg' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-sand relative overflow-hidden">
      <div className="bg-topographic absolute inset-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">{t('seasonTag')}</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-display-sm font-semibold text-primary mb-6">{t('seasonHeading')}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">{t('seasonSub')}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasons.map((season, index) => {
            const Icon = season.icon;
            return (
              <motion.div key={season.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
                <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={season.image} alt={t(season.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${season.color} flex items-center justify-center shadow-lift`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-accent text-sm font-semibold mb-2 tracking-luxury uppercase">{t(season.periodKey)}</p>
                    <h3 className="font-heading text-3xl font-semibold mb-3">{t(season.titleKey)}</h3>
                    <p className="text-white/90 leading-relaxed">{t(season.descKey)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-12">
          <Link to="/travel-guide" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-card hover:shadow-lift">
            {t('seasonGuide')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
