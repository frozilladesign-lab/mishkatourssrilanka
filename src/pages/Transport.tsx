import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import {
  CarIcon,
  ShieldCheckIcon,
  MapIcon,
  LanguagesIcon,
  WifiIcon,
  SnowflakeIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
const fleet = [
{
  name: 'Luxury Sedan',
  desc: 'Ideal for couples and solo travelers seeking comfort.',
  capacity: '1–2 guests',
  image:
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'
},
{
  name: 'Premium SUV',
  desc: 'Spacious and smooth for families and small groups.',
  capacity: '3–4 guests',
  image:
  'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop'
},
{
  name: 'Luxury Van',
  desc: 'Room for larger families with ample luggage space.',
  capacity: '5–8 guests',
  image:
  'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2074&auto=format&fit=crop'
}];

const features = [
{
  icon: ShieldCheckIcon,
  title: 'Vetted Chauffeur Guides',
  desc: 'Professional, licensed, and trained in hospitality.'
},
{
  icon: LanguagesIcon,
  title: 'Multilingual Drivers',
  desc: 'English, German, French and more on request.'
},
{
  icon: SnowflakeIcon,
  title: 'Air Conditioned',
  desc: 'Cool, comfortable vehicles for tropical weather.'
},
{
  icon: WifiIcon,
  title: 'Onboard Wi-Fi',
  desc: 'Stay connected throughout your journey.'
},
{
  icon: MapIcon,
  title: 'Flexible Routing',
  desc: 'Stop wherever you like — the day is yours.'
},
{
  icon: CarIcon,
  title: 'Modern Fleet',
  desc: 'Well-maintained, immaculate vehicles.'
}];

export function Transport() {
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Transport & Private Driver"
        subtitle="Travel Sri Lanka in comfort with your own private chauffeur guide."
        image="/images/tours/misty-mountains/hero.jpg"
        breadcrumbs={[
        {
          label: 'Transport'
        }]
        } />
      

      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-heading text-3xl text-primary font-semibold mb-4">
              Your Personal Chauffeur Guide
            </h2>
            <p className="text-dark/70 text-lg font-light leading-relaxed">
              Forget crowded buses and unreliable schedules. Every Ceylon
              Escapes journey includes a private, air-conditioned vehicle and a
              knowledgeable chauffeur guide — part driver, part storyteller,
              entirely dedicated to your comfort.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {features.map((f, i) =>
            <motion.div
              key={i}
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
                delay: i * 0.05
              }}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                  {f.title}
                </h3>
                <p className="text-dark/70 text-sm">{f.desc}</p>
              </motion.div>
            )}
          </div>

          {/* Fleet */}
          <h2 className="font-heading text-3xl text-primary font-semibold mb-8 text-center">
            Our Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((v, i) =>
            <motion.div
              key={i}
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
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 group">
              
                <div className="h-52 overflow-hidden">
                  <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {v.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-light text-dark/70 rounded-md border border-gray-100">
                      {v.capacity}
                    </span>
                  </div>
                  <p className="text-dark/70 text-sm">{v.desc}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-secondary transition-colors">
              
              Request a Private Driver
            </Link>
          </div>
        </div>
      </section>
    </div>);

}