import React from 'react';
import { motion } from 'framer-motion';
import {
  CameraIcon,
  TrainIcon,
  UmbrellaIcon,
  LeafIcon,
  MountainIcon,
  LandmarkIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
const experiences = [
{
  icon: CameraIcon,
  title: 'Wildlife Safari',
  desc: 'Leopards & elephants'
},
{
  icon: TrainIcon,
  title: 'Train Journeys',
  desc: 'Scenic hill country'
},
{
  icon: UmbrellaIcon,
  title: 'Beach Escapes',
  desc: 'Pristine coastline'
},
{
  icon: LeafIcon,
  title: 'Tea Country',
  desc: 'Lush plantations'
},
{
  icon: MountainIcon,
  title: 'Hiking',
  desc: 'Peaks & waterfalls'
},
{
  icon: LandmarkIcon,
  title: 'Cultural Heritage',
  desc: 'Ancient ruins'
}];

export function ExperiencesSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-semibold mb-4">
            Curated Experiences
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            Discover Sri Lanka through specialized experiences tailored to your
            interests.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {experiences.map((exp, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05
            }}>
            
              <Link
              to={`/experiences`}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-light hover:bg-white hover:shadow-soft border border-transparent hover:border-gray-100 transition-all duration-300 group h-full">
              
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <exp.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                  {exp.title}
                </h3>
                <p className="text-xs text-dark/60">{exp.desc}</p>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}