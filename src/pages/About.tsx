import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import { HeartIcon, ShieldCheckIcon, LeafIcon, GlobeIcon } from 'lucide-react';
const values = [
{
  icon: HeartIcon,
  title: 'Private & Flexible',
  desc: 'Travel at your own pace with flexible routes and personalized planning for your unique trip.'
},
{
  icon: GlobeIcon,
  title: 'Local Knowledge',
  desc: 'We know the island — the routes, the hidden spots, the best time to visit each destination.'
},
{
  icon: ShieldCheckIcon,
  title: 'Safe & Reliable',
  desc: 'Comfortable private transport, friendly local support, and easy WhatsApp communication throughout your journey.'
},
{
  icon: LeafIcon,
  title: 'Memorable Experiences',
  desc: 'From arrival to departure, we help you experience the best of Sri Lanka in a comfortable and meaningful way.'
}];


export function About() {
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="About Mishka Tours Sri Lanka"
        subtitle="Discover Sri Lanka with Comfort, Care &amp; Local Experience."
        image="/images/tours/colombo-city-tour/hero.jpg"
        breadcrumbs={[
        {
          label: 'About Us'
        }]
        } />
      

      {/* Story Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>
              
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-6">
                A Local Travel Service You Can Trust
              </h2>
              <div className="space-y-4 text-dark/80 leading-relaxed">
                <p>
                  Mishka Tours Sri Lanka is a local travel service offering carefully planned excursions and private tour experiences around the island. From ancient temples and mountain landscapes to wildlife parks, beaches, waterfalls, tea plantations, and ocean adventures, we help travelers experience the best of Sri Lanka in a comfortable and memorable way.
                </p>
                <p>
                  Whether you want a short one-day trip, a two-day island adventure, a private city tour, or a fully customized experience, Mishka Tours Sri Lanka can help you plan the right journey based on your time, travel style, and interests.
                </p>
                <p>
                  We offer private tours, one-day excursions, two-day excursions, individual custom tours, airport transfers, wildlife safaris, whale watching, surfing, cultural and heritage tours, nature and rainforest tours, and private transport with driver support across Sri Lanka.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="relative h-64 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-card">
              
              <img
                src="/images/tours/pearl-of-sri-lanka/gallery-2.jpg"
                alt="Tea plantation in Sri Lanka"
                className="w-full h-full object-cover" />
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-4">
              Our Core Values
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto">
              The principles that guide every journey we curate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) =>
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
              }}
              className="p-8 rounded-2xl bg-light border border-transparent hover:border-gray-100 hover:shadow-soft transition-all duration-300 text-center">
              
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-secondary mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

    </div>);

}