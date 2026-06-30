import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobeIcon, DollarSignIcon } from 'lucide-react';
import {
  usePreferences,
  CURRENCIES,
  LANGUAGES,
  CurrencyCode,
  LanguageCode
} from './PreferencesContext';

export function WelcomeModal() {
  const {
    hasChosenPreferences,
    setHasChosenPreferences,
    currency,
    setCurrency,
    language,
    setLanguage,
    t
  } = usePreferences();
  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyCode>(currency);
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageCode>(language);

  if (hasChosenPreferences) return null;

  const handleContinue = () => {
    setCurrency(selectedCurrency);
    setLanguage(selectedLanguage);
    setHasChosenPreferences(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[100] bg-dark/70 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="bg-white rounded-3xl shadow-lift max-w-md w-full p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-luxury uppercase mb-4">
              Mishka Tours Sri Lanka
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
              {t('welcomeTitle')}
            </h2>
            <p className="text-dark/70 text-sm">{t('welcomeSubtitle')}</p>
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm font-semibold text-dark mb-3">
              <DollarSignIcon className="w-4 h-4 text-secondary" />
              {t('selectCurrency')}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {Object.values(CURRENCIES).map((c) => (
                <button
                  key={c.code}
                  onClick={() => setSelectedCurrency(c.code)}
                  className={`flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-xl border-2 transition-all ${
                    selectedCurrency === c.code
                      ? 'border-secondary bg-secondary/10 text-secondary'
                      : 'border-gray-200 text-dark/70 hover:border-gray-300'
                  }`}
                >
                  <span className="text-lg font-bold">{c.symbol}</span>
                  <span className="text-xs font-medium">{c.code}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="flex items-center gap-2 text-sm font-semibold text-dark mb-3">
              <GlobeIcon className="w-4 h-4 text-secondary" />
              {t('selectLanguage')}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(LANGUAGES).map((l) => (
                <button
                  key={l.code}
                  onClick={() => setSelectedLanguage(l.code)}
                  className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all ${
                    selectedLanguage === l.code
                      ? 'border-secondary bg-secondary/10 text-secondary'
                      : 'border-gray-200 text-dark/70 hover:border-gray-300'
                  }`}
                >
                  {l.nativeLabel}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            {LANGUAGES[selectedLanguage].code === 'ru'
              ? 'Продолжить'
              : 'Continue'}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
