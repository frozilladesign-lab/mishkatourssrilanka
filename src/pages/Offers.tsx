import React, { Children } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TagIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
const offers = [
{
  title: 'Early Bird 2026',
  discount: '15% Off',
  desc: 'Book any tour for 2026 travel before the end of this season and save 15% on the total package price.',
  valid: 'Valid until 31 March',
  image:
  '/images/tours/wonder-of-sri-lanka/hero.jpg',
  tag: 'Limited Time'
},
{
  title: 'Honeymoon Bliss',
  discount: 'Free Upgrade',
  desc: 'Complimentary room upgrade and a romantic candlelit dinner for couples booking our honeymoon collection.',
  valid: 'Year-round',
  image:
  '/images/tours/whale-watching/hero.avif',
  tag: 'Couples'
},
{
  title: 'Family Summer Escape',
  discount: 'Kids Stay Free',
  desc: 'Children under 12 stay and travel free on selected family tours during the summer months.',
  valid: 'Jun – Aug',
  image:
  '/images/tours/surfing/hero.avif',
  tag: 'Family'
},
{
  title: 'Extended Stay Saver',
  discount: 'Save 20%',
  desc: 'Stay 12 nights or more and enjoy 20% off, plus a complimentary spa day in the tea country.',
  valid: 'Year-round',
  image:
  '/images/tours/the-last-kingdom/gallery-3.jpg',
  tag: 'Long Stay'
}];

export function Offers() {
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Offers & Seasonal Deals"
        subtitle="Exclusive savings on curated journeys — for a limited time only."
        image="/images/tours/pearl-of-sri-lanka/gallery-2.jpg"
        breadcrumbs={[
        {
          label: 'Offers'
        }]
        } />
      

      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((o, i) =>
            <motion.div
              key={o.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 group flex flex-col">
              
                <div className="h-48 overflow-hidden relative">
                  <img
                  src={o.image}
                  alt={o.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <TagIcon className="w-3 h-3" /> {o.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 font-heading text-3xl text-white font-bold drop-shadow">
                    {o.discount}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    {o.title}
                  </h3>
                  <p className="text-dark/70 text-sm leading-relaxed mb-4 flex-grow">
                    {o.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-xs text-dark/50 font-medium">
                      <ClockIcon className="w-4 h-4" /> {o.valid}
                    </span>
                    <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-secondary font-semibold text-sm hover:text-primary transition-colors">
                    
                      Claim Offer <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-14 bg-primary rounded-2xl p-8 text-center text-white">
            <h3 className="font-heading text-2xl font-semibold mb-3">
              Never Miss a Deal
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Subscribe and be the first to hear about exclusive seasonal offers
              and flash sales.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-accent text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
              
              Get Exclusive Offers
            </Link>
          </div>
        </div>
      </section>
    </div>);

}