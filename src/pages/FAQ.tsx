import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { usePreferences } from '../components/personalization/PreferencesContext';

export function FAQ() {
  const [open, setOpen] = useState<string | null>('0-0');
  const { t } = usePreferences();

  const faqs = [
    {
      categoryKey: 'faqCat1',
      items: [
        { q: 'faqQ1', a: 'faqA1' },
        { q: 'faqQ2', a: 'faqA2' },
        { q: 'faqQ3', a: 'faqA3' },
        { q: 'faqQ4', a: 'faqA4' },
      ]
    },
    {
      categoryKey: 'faqCat2',
      items: [
        { q: 'faqQ5', a: 'faqA5' },
        { q: 'faqQ6', a: 'faqA6' },
        { q: 'faqQ7', a: 'faqA7' },
      ]
    },
    {
      categoryKey: 'faqCat3',
      items: [
        { q: 'faqQ8', a: 'faqA8' },
        { q: 'faqQ9', a: 'faqA9' },
        { q: 'faqQ10', a: 'faqA10' },
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title={t('faqTitle')}
        subtitle={t('faqSubtitle')}
        image="/images/tours/yala-safari/hero.jpg"
        breadcrumbs={[{ label: t('faq') }]}
      />
      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {faqs.map((group, gi) => (
            <div key={gi} className="mb-12 last:mb-0">
              <h2 className="font-heading text-2xl text-primary font-semibold mb-6">{t(group.categoryKey)}</h2>
              <div className="space-y-4">
                {group.items.map((item, ii) => {
                  const id = `${gi}-${ii}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
                      <button onClick={() => setOpen(isOpen ? null : id)} className="w-full flex items-center justify-between gap-4 p-6 text-left" aria-expanded={isOpen}>
                        <span className="font-medium text-dark">{t(item.q)}</span>
                        <ChevronDownIcon className={cn('w-5 h-5 text-secondary shrink-0 transition-transform duration-300', isOpen && 'rotate-180')} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                            <p className="px-6 pb-6 text-dark/70 leading-relaxed">{t(item.a)}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="mt-14 bg-primary rounded-2xl p-8 text-center text-white">
            <h3 className="font-heading text-2xl font-semibold mb-3">{t('faqStillQuestion')}</h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">{t('faqStillSub')}</p>
            <Link to="/contact" className="inline-block px-8 py-3.5 bg-accent text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
              {t('faqContactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
