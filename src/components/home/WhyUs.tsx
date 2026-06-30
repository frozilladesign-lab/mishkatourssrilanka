import React from 'react';
import { motion } from 'framer-motion';
import { MapIcon, CompassIcon, CarIcon, MessageCircleIcon, SunIcon, ShieldCheckIcon } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function WhyUs() {
  const { t } = usePreferences();

  const features = [
    { icon: CompassIcon, titleKey: 'whyPrivateTitle', descKey: 'whyPrivateDesc' },
    { icon: MapIcon, titleKey: 'whyLocalTitle', descKey: 'whyLocalDesc' },
    { icon: CarIcon, titleKey: 'whyComfortTitle', descKey: 'whyComfortDesc' },
    { icon: SunIcon, titleKey: 'whyMemTitle', descKey: 'whyMemDesc' },
    { icon: MessageCircleIcon, titleKey: 'whyEasyTitle', descKey: 'whyEasyDesc' },
    { icon: ShieldCheckIcon, titleKey: 'whySafeTitle', descKey: 'whySafeDesc' },
  ];

  return (
    <section className="py-20 bg-light bg-watermark">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">{t('whyTag')}</span>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-4">{t('whyHeading')}</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">{t('whySub')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-card border border-gray-50 text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">{t(feature.titleKey)}</h3>
              <p className="text-dark/70 text-sm leading-relaxed">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
