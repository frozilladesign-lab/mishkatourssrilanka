import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import { StarIcon, MapPinIcon } from 'lucide-react';
import { cn } from '../lib/utils';
const categories = [
'All',
'Luxury Resort',
'Boutique',
'Tea Bungalow',
'Beachfront',
'Tented Camp'];

const hotels = [
{
  name: 'Heritance Kandalama',
  type: 'Luxury Resort',
  location: 'Dambulla',
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop',
  desc: 'An iconic eco-luxury resort built into a cliffside overlooking ancient Sigiriya.'
},
{
  name: 'Cape Weligama',
  type: 'Beachfront',
  location: 'Weligama',
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop',
  desc: 'Clifftop villas with a crescent ocean pool on the stunning south coast.'
},
{
  name: 'Ceylon Tea Trails',
  type: 'Tea Bungalow',
  location: 'Hatton',
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?q=80&w=2835&auto=format&fit=crop',
  desc: 'Restored colonial planter bungalows amid emerald tea estates.'
},
{
  name: 'Wild Coast Tented Lodge',
  type: 'Tented Camp',
  location: 'Yala',
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1544006658-89bde88e87c6?q=80&w=2940&auto=format&fit=crop',
  desc: 'Luxury cocoon tents on the edge of Yala National Park.'
},
{
  name: 'The Fort Bazaar',
  type: 'Boutique',
  location: 'Galle',
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop',
  desc: 'An intimate boutique retreat within the historic Galle Fort walls.'
},
{
  name: '98 Acres Resort',
  type: 'Boutique',
  location: 'Ella',
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2880&auto=format&fit=crop',
  desc: "Stylish chalets with sweeping views of Little Adam's Peak."
}];

export function Hotels() {
  const [filter, setFilter] = useState('All');
  const filtered = hotels.filter((h) => filter === 'All' || h.type === filter);
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Hotels & Stays"
        subtitle="Hand-picked luxury resorts, boutique hideaways and unique stays across Sri Lanka."
        image="/images/tours/majestic-island/hero.jpg"
        breadcrumbs={[
        {
          label: 'Hotels & Stays'
        }]
        } />
      

      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((c) =>
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                filter === c ?
                'bg-primary text-white' :
                'bg-white text-dark/70 hover:text-primary border border-gray-200'
              )}>
              
                {c}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((h, i) =>
            <motion.div
              key={h.name}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.08
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 group">
              
                <div className="h-56 overflow-hidden relative">
                  <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full">
                    {h.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-accent mb-2">
                    {[...Array(h.rating)].map((_, s) =>
                  <StarIcon key={s} className="w-4 h-4 fill-current" />
                  )}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                    {h.name}
                  </h3>
                  <div className="flex items-center gap-1 text-dark/60 text-sm mb-3">
                    <MapPinIcon className="w-4 h-4" /> {h.location}
                  </div>
                  <p className="text-dark/70 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}