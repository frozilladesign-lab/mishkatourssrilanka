import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Mountain, Palmtree, Sparkles, Waves, Coffee, Compass, Gem } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function MoodExplorer() {
  const { t } = usePreferences();

  const moods = [
    { id: 'romance', labelKey: 'moodRomance', icon: Heart, color: 'from-pink-500 to-rose-500', category: 'honeymoon' },
    { id: 'adventure', labelKey: 'moodAdventure', icon: Mountain, color: 'from-orange-500 to-red-500', category: 'adventure' },
    { id: 'beach', labelKey: 'moodBeach', icon: Waves, color: 'from-cyan-500 to-blue-500', category: 'beach' },
    { id: 'culture', labelKey: 'moodCulture', icon: Sparkles, color: 'from-purple-500 to-indigo-500', category: 'cultural' },
    { id: 'wildlife', labelKey: 'moodWildlife', icon: Palmtree, color: 'from-green-500 to-emerald-500', category: 'wildlife' },
    { id: 'tea', labelKey: 'moodTea', icon: Coffee, color: 'from-amber-600 to-yellow-600', category: 'tea-country' },
    { id: 'wellness', labelKey: 'moodWellness', icon: Sparkles, color: 'from-teal-500 to-cyan-500', category: 'wellness' },
    { id: 'hidden', labelKey: 'moodHidden', icon: Gem, color: 'from-violet-500 to-purple-500', category: 'luxury' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="bg-geometric-motif absolute inset-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">{t('moodTag')}</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-display-sm font-semibold text-primary mb-6">{t('moodHeading')}</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">{t('moodSub')}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {moods.map((mood, index) => {
            const Icon = mood.icon;
            return (
              <motion.div key={mood.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                <Link to={`/tours/category/${mood.category}`} className="group block relative rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500 aspect-square">
                  <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                    <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-center">{t(mood.labelKey)}</h3>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-12">
          <Link to="/trip-planner" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
            <Compass className="w-5 h-5" />
            {t('moodCustom')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
