import React, { useEffect, useState, createContext, useContext } from 'react';

export type CurrencyCode = 'USD' | 'RUB' | 'LKR';
export type LanguageCode = 'en' | 'ru';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  label: string;
  rateFromUsd: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', label: 'US Dollar', rateFromUsd: 1 },
  RUB: { code: 'RUB', symbol: '₽', label: 'Russian Ruble', rateFromUsd: 95 },
  LKR: { code: 'LKR', symbol: 'Rs', label: 'Sri Lankan Rupee', rateFromUsd: 300 }
};

export interface LanguageInfo {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

export const LANGUAGES: Record<LanguageCode, LanguageInfo> = {
  en: { code: 'en', label: 'English', nativeLabel: 'English' },
  ru: { code: 'ru', label: 'Russian', nativeLabel: 'Русский' }
};

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    home: 'Home',
    tours: 'Tours',
    destinations: 'Destinations',
    experiences: 'Experiences',
    tripPlanner: 'Trip Planner',
    offers: 'Offers',
    hotelsStays: 'Hotels & Stays',
    travelGuide: 'Travel Guide',
    aboutUs: 'About Us',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    planMyTrip: 'Plan My Trip',
    currency: 'Currency',
    language: 'Language',
    welcomeTitle: 'Welcome to Mishka Tours',
    welcomeSubtitle: 'Choose your currency and language to get started',
    selectCurrency: 'Select your currency',
    selectLanguage: 'Select your language',
    continue: 'Continue'
  },
  ru: {
    home: 'Главная',
    tours: 'Туры',
    destinations: 'Направления',
    experiences: 'Впечатления',
    tripPlanner: 'Планировщик',
    offers: 'Предложения',
    hotelsStays: 'Отели',
    travelGuide: 'Путеводитель',
    aboutUs: 'О нас',
    testimonials: 'Отзывы',
    faq: 'Вопросы и ответы',
    planMyTrip: 'Спланировать поездку',
    currency: 'Валюта',
    language: 'Язык',
    welcomeTitle: 'Добро пожаловать в Mishka Tours',
    welcomeSubtitle: 'Выберите валюту и язык, чтобы начать',
    selectCurrency: 'Выберите валюту',
    selectLanguage: 'Выберите язык',
    continue: 'Продолжить'
  }
};

interface PreferencesContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  language: LanguageCode;
  setLanguage: (l: LanguageCode) => void;
  hasChosenPreferences: boolean;
  setHasChosenPreferences: (v: boolean) => void;
  formatPrice: (usdAmount: number) => string;
  t: (key: string) => string;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(
  undefined
);

export function PreferencesProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD');
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [hasChosenPreferences, setHasChosenPreferencesState] =
    useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCurrency = localStorage.getItem(
        'mishka_currency'
      ) as CurrencyCode | null;
      const storedLanguage = localStorage.getItem(
        'mishka_language'
      ) as LanguageCode | null;
      const storedChosen = localStorage.getItem('mishka_prefs_chosen');
      if (storedCurrency && CURRENCIES[storedCurrency]) {
        setCurrencyState(storedCurrency);
      }
      if (storedLanguage && LANGUAGES[storedLanguage]) {
        setLanguageState(storedLanguage);
      }
      setHasChosenPreferencesState(storedChosen === 'true');
    } catch (e) {
      console.error('Failed to load preferences', e);
    } finally {
      setLoaded(true);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem('mishka_currency', c);
  };

  const setLanguage = (l: LanguageCode) => {
    setLanguageState(l);
    localStorage.setItem('mishka_language', l);
  };

  const setHasChosenPreferences = (v: boolean) => {
    setHasChosenPreferencesState(v);
    localStorage.setItem('mishka_prefs_chosen', String(v));
  };

  const formatPrice = (usdAmount: number) => {
    const info = CURRENCIES[currency];
    const converted = Math.round(usdAmount * info.rateFromUsd);
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  const t = (key: string) => translations[language][key] ?? key;

  if (!loaded) return null;

  return (
    <PreferencesContext.Provider
      value={{
        currency,
        setCurrency,
        language,
        setLanguage,
        hasChosenPreferences,
        setHasChosenPreferences,
        formatPrice,
        t
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error(
      'usePreferences must be used within a PreferencesProvider'
    );
  }
  return context;
}
