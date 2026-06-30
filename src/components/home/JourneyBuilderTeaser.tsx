import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Users } from 'lucide-react';
import { Parallax } from '../common/Parallax';
import { usePreferences } from '../personalization/PreferencesContext';

export function JourneyBuilderTeaser() {
  const { t } = usePreferences();
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Parallax offset={80}>
          <img src="/images/tours/pearl-of-sri-lanka/gallery-1.jpg" alt="Scenic train journey" className="w-full h-full object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-accent" />
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">{t('builderHeading')}</h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">{t('builderSub')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-panel-dark rounded-2xl p-6">
                <Calendar className="w-10 h-10 text-accent mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold mb-2">{t('builderFlexDates')}</h3>
                <p className="text-white/80 text-sm">{t('builderFlexDatesSub')}</p>
              </div>
              <div className="glass-panel-dark rounded-2xl p-6">
                <MapPin className="w-10 h-10 text-accent mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold mb-2">{t('builderCustomRoutes')}</h3>
                <p className="text-white/80 text-sm">{t('builderCustomRoutesSub')}</p>
              </div>
              <div className="glass-panel-dark rounded-2xl p-6">
                <Users className="w-10 h-10 text-accent mb-4 mx-auto" />
                <h3 className="font-heading text-lg font-bold mb-2">{t('builderExpertGuidance')}</h3>
                <p className="text-white/80 text-sm">{t('builderExpertGuidanceSub')}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/trip-planner" className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lift hover:-translate-y-1">
                {t('builderStartPlanning')}
              </Link>
              <Link to="/custom-tour" className="w-full sm:w-auto px-10 py-5 glass-panel-dark border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                {t('builderCustomTour')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
