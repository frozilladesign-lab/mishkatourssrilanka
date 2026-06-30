import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPinIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const regions = [
{
  id: 'cultural-triangle',
  name: 'Cultural Triangle',
  description:
  'Ancient cities, magnificent temples, and the iconic Sigiriya Rock Fortress.',
  packages: 12,
  cx: '45%',
  cy: '35%'
},
{
  id: 'hill-country',
  name: 'Hill Country',
  description:
  'Misty mountains, endless tea plantations, and spectacular train journeys.',
  packages: 8,
  cx: '55%',
  cy: '65%'
},
{
  id: 'south-coast',
  name: 'South Coast',
  description:
  'Golden beaches, whale watching, surfing, and colonial Galle Fort.',
  packages: 15,
  cx: '40%',
  cy: '85%'
},
{
  id: 'east-coast',
  name: 'East Coast',
  description:
  'Pristine untouched beaches, perfect for diving and summer relaxation.',
  packages: 6,
  cx: '75%',
  cy: '45%'
}];

export function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
              Explore By Region
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
              Discover the Diversity of Sri Lanka
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-lg">
              Click on the map to explore different regions and find curated
              packages tailored to each unique landscape.
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRegion.id}
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -10
                  }}
                  transition={{
                    duration: 0.3
                  }}>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <MapPinIcon className="w-6 h-6 text-accent" />
                    <h3 className="font-heading text-3xl font-semibold">
                      {activeRegion.name}
                    </h3>
                  </div>
                  <p className="text-white/80 text-lg mb-8 leading-relaxed">
                    {activeRegion.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 font-medium">
                      {activeRegion.packages} Curated Packages
                    </span>
                    <Link
                      to={`/destinations?region=${activeRegion.id}`}
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors group">
                      
                      View Packages
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Map Visualization */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Abstract SVG Map of Sri Lanka */}
            <svg
              viewBox="0 0 400 600"
              className="w-full h-full max-w-[400px] drop-shadow-xl">
              
              {/* Base Island Shape (Simplified) */}
              <path
                d="M180 50 C220 40, 250 80, 260 120 C280 180, 320 250, 330 300 C340 350, 320 450, 280 500 C240 550, 180 580, 140 550 C100 520, 80 450, 70 400 C60 350, 80 250, 100 200 C120 150, 140 80, 180 50 Z"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2" />
              

              {/* Region Markers */}
              {regions.map((region) => {
                const isActive = activeRegion.id === region.id;
                return (
                  <g
                    key={region.id}
                    className="cursor-pointer group"
                    onClick={() => setActiveRegion(region)}>
                    
                    {/* Pulse effect for active */}
                    {isActive &&
                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r="20"
                      fill="rgba(217, 164, 65, 0.2)"
                      className="animate-ping" />

                    }

                    {/* Marker */}
                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r={isActive ? '12' : '8'}
                      fill={isActive ? '#D9A441' : 'rgba(255,255,255,0.5)'}
                      className="transition-all duration-300 group-hover:fill-accent" />
                    

                    {/* Label */}
                    <text
                      x={region.cx}
                      y={`calc(${region.cy} - 20px)`}
                      textAnchor="middle"
                      fill={isActive ? '#fff' : 'rgba(255,255,255,0.7)'}
                      className={`font-medium text-sm transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      
                      {region.name}
                    </text>
                  </g>);

              })}
            </svg>
          </div>
        </div>
      </div>
    </section>);

}