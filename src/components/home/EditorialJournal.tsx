import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';

export function EditorialJournal() {
  const { t } = usePreferences();
  const articles = [
    { id: 1, titleKey: 'article1Title', categoryKey: 'article1Category', timeKey: 'article1Time', excerptKey: 'article1Excerpt', image: '/images/tours/the-last-kingdom/hero.jpg' },
    { id: 2, titleKey: 'article2Title', categoryKey: 'article2Category', timeKey: 'article2Time', excerptKey: 'article2Excerpt', image: '/images/tours/colombo-city-tour/gallery-3.jpg' },
    { id: 3, titleKey: 'article3Title', categoryKey: 'article3Category', timeKey: 'article3Time', excerptKey: 'article3Excerpt', image: '/images/tours/yala-safari/hero.jpg' },
  ];
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="bg-leaf-outline absolute inset-0"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">{t('journalTag')}</span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-display-sm font-semibold text-primary mb-4">{t('journalHeading')}</h2>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">{t('journalSub')}</p>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:hidden px-4 md:px-8">
          {articles.map((article) => (
            <Link key={article.id} to="/travel-guide" className="snap-start shrink-0 w-[75vw] max-w-xs block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="h-40 overflow-hidden">
                  <img src={article.image} alt={t(article.titleKey)} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-accent font-semibold tracking-luxury uppercase">{t(article.categoryKey)}</span>
                    <span className="text-muted flex items-center gap-1"><Clock className="w-3 h-3" />{t(article.timeKey)}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-primary mb-1 line-clamp-2">{t(article.titleKey)}</h3>
                  <p className="text-muted text-xs leading-relaxed line-clamp-2">{t(article.excerptKey)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 container mx-auto px-8">
          {articles.map((article, index) => (
            <motion.article key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <Link to="/travel-guide" className="block">
                <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={article.image} alt={t(article.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4 text-sm">
                      <span className="text-accent font-semibold tracking-luxury uppercase">{t(article.categoryKey)}</span>
                      <span className="text-muted flex items-center gap-1"><Clock className="w-4 h-4" />{t(article.timeKey)}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">{t(article.titleKey)}</h3>
                    <p className="text-muted mb-4 leading-relaxed">{t(article.excerptKey)}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">{t('journalReadArticle')} <ArrowRight className="w-5 h-5" /></span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center mt-10">
          <Link to="/travel-guide" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift">
            {t('journalExplore')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
