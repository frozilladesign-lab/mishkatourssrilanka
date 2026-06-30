import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Parallax } from '../common/Parallax';
import { Counter } from '../common/Counter';
import { FloatingDecor } from '../common/FloatingDecor';
import { Star, Award, Users } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';
export function CinematicHero() {
  const { t } = usePreferences();
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Parallax offset={150} className="w-full h-[130%] -top-[15%] relative">
          <img src="/images/tours/majestic-island/hero.jpg" alt="Sigiriya Rock Fortress" className="w-full h-full object-cover object-center" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80"></div>
      </div>
      <Parallax offset={80} className="absolute inset-0 z-[1]">
        <FloatingDecor variant="lotus" className="top-[15%] left-[10%] text-white" size={100} />
        <FloatingDecor variant="geometric" className="top-[60%] right-[8%] text-accent" size={120} />
        <FloatingDecor variant="leaf" className="bottom-[20%] left-[15%] text-white" size={90} />
      </Parallax>
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-5xl mx-auto">
          <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block py-2 px-4 rounded-full glass-panel-dark text-white text-sm font-medium tracking-luxury uppercase mb-8">
            {t('heroTag')}
          </motion.span>
          <h1 className="font-heading text-display font-bold text-white leading-[1.1] mb-8 text-balance tracking-tight">
            {t('heroHeading')}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-light leading-relaxed text-balance">
            {t('heroSub')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <Link to="/tours" className="group w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lift hover:-translate-y-1">
              {t('heroExplore')}
            </Link>
            <Link to="/trip-planner" className="group w-full sm:w-auto px-10 py-5 glass-panel-dark text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              {t('heroPlan')}
            </Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 glass-subtle rounded-2xl py-6 px-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-white">
              <Users className="w-6 h-6 text-accent" />
              <div className="text-left">
                <div className="text-2xl font-bold font-heading"><Counter end={40} suffix="+" /></div>
                <div className="text-sm text-white/80">{t('heroCountriesServed')}</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-3 text-white">
              <Star className="w-6 h-6 text-accent" />
              <div className="text-left">
                <div className="text-2xl font-bold font-heading"><Counter end={5000} suffix="+" /></div>
                <div className="text-sm text-white/80">{t('heroFiveStarReviews')}</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-3 text-white">
              <Award className="w-6 h-6 text-accent" />
              <div className="text-left">
                <div className="text-2xl font-bold font-heading"><Counter end={15} suffix="+" /></div>
                <div className="text-sm text-white/80">{t('heroYearsExcellence')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
