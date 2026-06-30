import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  FileTextIcon,
  BriefcaseIcon,
  BanknotesIcon } from
'@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
const articles = [
{
  title: 'Best Time To Visit Sri Lanka',
  category: 'Planning',
  image:
  '/images/tours/yala-safari/gallery-3.jpg',
  desc: "A comprehensive guide to Sri Lanka's two monsoons and when to visit different regions for the perfect weather.",
  readTime: '5 min read'
},
{
  title: 'Sri Lanka Visa Guide',
  category: 'Essentials',
  image:
  '/images/tours/colombo-city-tour/hero.jpg',
  desc: 'Everything you need to know about the ETA process, requirements, and how to get your tourist visa hassle-free.',
  readTime: '3 min read'
},
{
  title: 'What To Pack for Sri Lanka',
  category: 'Preparation',
  image:
  '/images/tours/surfing/gallery-2.avif',
  desc: 'From temple-appropriate clothing to safari gear. The ultimate packing list for a diverse tropical holiday.',
  readTime: '6 min read'
},
{
  title: 'Currency & Tipping Guide',
  category: 'Money',
  image:
  '/images/tours/colombo-city-tour/gallery-3.jpg',
  desc: 'Understanding the Sri Lankan Rupee, ATM availability, and the etiquette of tipping guides and hotel staff.',
  readTime: '4 min read'
},
{
  title: 'Navigating Local Transport',
  category: 'Getting Around',
  image:
  '/images/tours/misty-mountains/hero.jpg',
  desc: 'While we provide private transport, here is what you need to know about scenic trains and local tuk-tuks.',
  readTime: '4 min read'
},
{
  title: 'Sri Lankan Food Guide',
  category: 'Culture',
  image:
  '/images/tours/colombo-city-tour/gallery-4.jpeg',
  desc: 'A culinary journey through hoppers, kottu, and the famous rice and curry. What to eat and where to find it.',
  readTime: '7 min read'
}];

export function TravelGuide() {
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Travel Guide"
        subtitle="Essential information and expert tips for planning your perfect Sri Lankan holiday."
        image="/images/tours/pearl-of-sri-lanka/hero.jpg"
        breadcrumbs={[
        {
          label: 'Travel Guide'
        }]
        } />
      

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Featured Article */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="mb-16">
            
            <Link
              to="#"
              className="group block relative rounded-2xl overflow-hidden shadow-card h-[400px] md:h-[500px]">
              
              <img
                src="/images/tours/majestic-island/hero.jpg"
                alt="Featured Guide"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block py-1 px-3 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wider mb-4">
                  Featured Guide
                </span>
                <h2 className="font-heading text-3xl md:text-5xl text-white font-semibold mb-4 drop-shadow-md">
                  The Ultimate First-Timer's Guide to Sri Lanka
                </h2>
                <p className="text-white/90 text-lg max-w-2xl hidden md:block">
                  Everything you need to know before you land in Colombo. From
                  cultural etiquette to must-see destinations, start your
                  planning here.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) =>
            <motion.div
              key={index}
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
                delay: index * 0.1
              }}>
              
                <Link
                to="#"
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-all duration-300 border border-gray-100">
                
                  <div className="relative h-56 overflow-hidden">
                    <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                    <div className="absolute top-4 left-4">
                      <span className="py-1 px-3 rounded-full bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-dark/70 text-sm leading-relaxed mb-4 flex-grow">
                      {article.desc}
                    </p>
                    <div className="flex items-center text-xs text-dark/50 font-medium mt-auto pt-4 border-t border-gray-50">
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}