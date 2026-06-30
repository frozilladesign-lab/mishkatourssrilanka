import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Parallax } from '../common/Parallax';
import { MessageCircle, Calendar } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function ClosingCTA() {
  const { t } = usePreferences();
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Parallax offset={100}>
          <img src="/images/tours/misty-mountains/hero.jpg" alt="Nine Arch Bridge" className="w-full h-full object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/80"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight text-balance">{t('closingHeading')}</h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">{t('closingSub')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact" className="group w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lift hover:-translate-y-1 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />{t('closingStartPlanning')}
            </Link>
            <Link to="/trip-planner" className="group w-full sm:w-auto px-10 py-5 glass-panel-dark border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />{t('closingAIPlanner')}
            </Link>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10 text-white/80 text-sm">
            {t('closingTrust')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
