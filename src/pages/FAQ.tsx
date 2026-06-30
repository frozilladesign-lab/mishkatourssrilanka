import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
const faqs = [
{
  category: 'Tours & Booking',
  items: [
  {
    q: 'Do you offer private tours?',
    a: 'Yes. Mishka Tours Sri Lanka offers private and flexible tour options for individuals, couples, families, and small groups.'
  },
  {
    q: 'Can I customize my excursion?',
    a: 'Yes. Routes and activities can be adjusted depending on your time, hotel location, and availability. Contact us through WhatsApp to plan your custom tour.'
  },
  {
    q: 'How can I book a tour?',
    a: 'You can contact Mishka Tours Sri Lanka through WhatsApp, TikTok, Facebook, or Instagram. Share your travel date, pickup location, number of travelers, and preferred tour, and we will confirm your plan.'
  },
  {
    q: 'Is hotel pickup available?',
    a: 'Yes. Hotel pickup can be arranged depending on your location anywhere in Sri Lanka.'
  }]
},
{
  category: 'Activities & Experiences',
  items: [
  {
    q: 'Can you arrange safari tours?',
    a: 'Yes. Yala National Park jeep safari and other wildlife experiences including elephant encounters can be arranged as part of your tour.'
  },
  {
    q: 'Can you arrange ocean activities?',
    a: 'Yes. Whale watching, snorkeling, diving, ocean fishing, surfing, and yacht trips can be arranged depending on weather and seasonal availability.'
  },
  {
    q: 'Do you offer airport pickup?',
    a: 'Yes. Airport pickup and drop-off can be arranged from any Sri Lanka airport to your hotel or destination.'
  }]
},
{
  category: 'Pricing & Inclusions',
  items: [
  {
    q: 'Are entrance tickets included in the tour price?',
    a: 'Entrance tickets, activity fees, safari jeep fees, and boat charges depend on the selected package and final quotation. Please confirm with us when booking.'
  },
  {
    q: 'What transport options are available?',
    a: 'We offer private car, SUV, van, and mini coach options depending on group size. All vehicles come with a private driver for your comfort and convenience.'
  },
  {
    q: 'Can you arrange a fully custom tour?',
    a: "Yes. If you can't find the exact tour you want, we can create a fully custom travel plan based on your arrival date, hotel location, travel duration, and preferred experiences."
  }]
}];

export function FAQ() {
  const [open, setOpen] = useState<string | null>('0-0');
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your Sri Lankan journey."
        image="/images/tours/yala-safari/hero.jpg"
        breadcrumbs={[
        {
          label: 'FAQ'
        }]
        } />
      

      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {faqs.map((group, gi) =>
          <div key={gi} className="mb-12 last:mb-0">
              <h2 className="font-heading text-2xl text-primary font-semibold mb-6">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.items.map((item, ii) => {
                const id = `${gi}-${ii}`;
                const isOpen = open === id;
                return (
                  <div
                    key={id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
                    
                      <button
                      onClick={() => setOpen(isOpen ? null : id)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                      aria-expanded={isOpen}>
                      
                        <span className="font-medium text-dark">{item.q}</span>
                        <ChevronDownIcon
                        className={cn(
                          'w-5 h-5 text-secondary shrink-0 transition-transform duration-300',
                          isOpen && 'rotate-180'
                        )} />
                      
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen &&
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1
                        }}
                        exit={{
                          height: 0,
                          opacity: 0
                        }}
                        transition={{
                          duration: 0.3
                        }}>
                        
                            <p className="px-6 pb-6 text-dark/70 leading-relaxed">
                              {item.a}
                            </p>
                          </motion.div>
                      }
                      </AnimatePresence>
                    </div>);

              })}
              </div>
            </div>
          )}

          <div className="mt-14 bg-primary rounded-2xl p-8 text-center text-white">
            <h3 className="font-heading text-2xl font-semibold mb-3">
              Still have questions?
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Our travel experts are here to help 24/7. Reach out and we'll get
              back to you within hours.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-accent text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
              
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>);

}