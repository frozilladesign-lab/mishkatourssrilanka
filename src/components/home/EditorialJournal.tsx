import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
const articles = [
{
  id: 1,
  title: '10 Hidden Temples You Must Visit',
  category: 'Culture',
  readTime: '8 min read',
  image:
  '/images/tours/the-last-kingdom/hero.jpg',
  excerpt:
  'Discover ancient sacred sites beyond the tourist trail, where spirituality and history converge.'
},
{
  id: 2,
  title: 'The Ultimate Sri Lankan Food Guide',
  category: 'Cuisine',
  readTime: '12 min read',
  image:
  '/images/tours/colombo-city-tour/gallery-3.jpg',
  excerpt:
  'From street food to fine dining, explore the flavors that make Sri Lankan cuisine unforgettable.'
},
{
  id: 3,
  title: 'Leopard Spotting in Yala National Park',
  category: 'Wildlife',
  readTime: '6 min read',
  image:
  '/images/tours/yala-safari/hero.jpg',
  excerpt:
  'Expert tips for maximizing your chances of encountering the elusive Sri Lankan leopard.'
}];

export function EditorialJournal() {
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="bg-leaf-outline absolute inset-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
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
            duration: 0.6
          }}
          className="text-center mb-16">
          
          <span className="text-accent font-semibold tracking-luxury uppercase text-sm mb-4 block">
            Stories & Insights
          </span>
          <h2 className="font-heading text-display-sm font-bold text-primary mb-6">
            Travel Journal
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Insider guides, cultural insights, and travel inspiration from our
            team of Sri Lanka experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) =>
          <motion.article
            key={article.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className="group">
            
              <Link to="/travel-guide" className="block">
                <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4 text-sm">
                      <span className="text-accent font-semibold tracking-luxury uppercase">
                        {article.category}
                      </span>
                      <span className="text-muted flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.5
          }}
          className="text-center mt-12">
          
          <Link
            to="/travel-guide"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-card hover:shadow-lift">
            
            Explore Travel Guide <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>);

}