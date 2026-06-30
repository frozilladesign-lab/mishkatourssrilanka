import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const destinations = [
{
  id: 'sigiriya',
  name: 'Sigiriya',
  label: 'Cultural Triangle',
  image:
  'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=1000&auto=format&fit=crop',
  colSpan: 'md:col-span-2 lg:col-span-2',
  rowSpan: 'md:row-span-2'
},
{
  id: 'ella',
  name: 'Ella',
  label: 'Hill Country',
  image:
  'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1000&auto=format&fit=crop',
  colSpan: 'col-span-1',
  rowSpan: 'row-span-1'
},
{
  id: 'yala',
  name: 'Yala',
  label: 'Wildlife Safari',
  image:
  'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?q=80&w=1000&auto=format&fit=crop',
  colSpan: 'col-span-1',
  rowSpan: 'row-span-1'
},
{
  id: 'mirissa',
  name: 'Mirissa',
  label: 'South Coast',
  image:
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop',
  colSpan: 'col-span-1',
  rowSpan: 'row-span-1'
},
{
  id: 'nuwara-eliya',
  name: 'Nuwara Eliya',
  label: 'Tea Country',
  image:
  'https://images.unsplash.com/photo-1625736300986-6e534181a1f9?q=80&w=1000&auto=format&fit=crop',
  colSpan: 'col-span-1',
  rowSpan: 'row-span-1'
}];

export function PopularDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-4">
              Popular Destinations
            </h2>
            <p className="text-dark/70">
              From ancient rock fortresses to pristine beaches and misty tea
              plantations, explore the diverse landscapes of Sri Lanka.
            </p>
          </div>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors group">
            
            View All Destinations
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {destinations.map((dest, index) =>
          <motion.div
            key={dest.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`relative rounded-2xl overflow-hidden group ${dest.colSpan} ${dest.rowSpan}`}>
            
              <Link
              to={`/destinations/${dest.id}`}
              className="block w-full h-full">
              
                <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1 block">
                    {dest.label}
                  </span>
                  <h3 className="font-heading text-2xl text-white font-semibold">
                    {dest.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}