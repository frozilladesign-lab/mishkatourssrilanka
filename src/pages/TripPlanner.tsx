import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  DollarSignIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import { Parallax } from '../components/common/Parallax';
export function TripPlanner() {
  const [prompt, setPrompt] = useState('');
  const [budget, setBudget] = useState<number>(3000);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null | any>(null);
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setResult({
        title: 'Your Curated Beach & Wildlife Escape',
        days: 10,
        regions: ['South Coast', 'Yala'],
        estimatedCost: budget,
        highlights: [
        'Mirissa Whale Watching',
        'Yala Leopard Safari',
        'Galle Fort Tour'],

        itinerary: [
        {
          day: '1-3',
          title: 'Arrival & Galle Fort',
          desc: 'Settle into your boutique hotel in Galle. Explore the historic fort and enjoy sunset walks on the ramparts.'
        },
        {
          day: '4-6',
          title: 'Mirissa Beaches & Whales',
          desc: 'Relax on pristine beaches and take an early morning private boat trip to spot magnificent blue whales.'
        },
        {
          day: '7-9',
          title: 'Yala Safari Adventure',
          desc: 'Head east to Yala National Park. Stay in a luxury tented camp and embark on thrilling leopard safaris with an expert naturalist.'
        },
        {
          day: '10',
          title: 'Departure',
          desc: 'Scenic private transfer back to Colombo for your flight home.'
        }]

      });
    }, 3000);
  };
  return (
    <div className="flex flex-col w-full bg-light min-h-screen pb-20">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Parallax offset={50} className="w-full h-[120%] -top-[10%] relative">
            <img
              src="/images/tours/majestic-island/hero.jpg"
              alt="AI Trip Planner"
              className="w-full h-full object-cover object-center" />
            
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-light"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="max-w-3xl mx-auto">
            
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRightIcon className="w-4 h-4" />
              <span className="text-white font-medium">AI Concierge</span>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium tracking-wider uppercase mb-6 border border-white/20">
              <SparklesIcon className="w-4 h-4" /> Smart Itinerary Builder
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6 text-balance">
              Design Your Perfect Journey
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light text-balance">
              Describe your dream Sri Lankan holiday, and our AI travel
              designers will craft a bespoke itinerary tailored to your desires
              and budget.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Form */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-lift border border-gray-100 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <h2 className="font-heading text-3xl text-primary font-medium mb-8">
                Tell us your vision
              </h2>

              <form
                onSubmit={handleGenerate}
                className="space-y-8 relative z-10">
                
                <div>
                  <label className="block text-dark/80 font-medium mb-3">
                    What kind of experience are you looking for?
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A 10-day romantic honeymoon focusing on luxury boutique hotels, private beach dinners, and a gentle wildlife safari. We prefer a relaxed pace."
                    className="w-full h-40 p-5 rounded-2xl bg-light border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none text-dark transition-all font-light"
                    required />
                  
                </div>

                <div className="bg-light/50 p-6 rounded-2xl border border-gray-100">
                  <label className="flex items-center justify-between text-dark/80 font-medium mb-4">
                    <span className="flex items-center gap-2">
                      <DollarSignIcon className="w-5 h-5 text-accent" />{' '}
                      Estimated Budget (per person)
                    </span>
                    <span className="font-heading text-xl text-primary font-bold">
                      ${budget}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-primary" />
                  
                  <div className="flex justify-between text-xs text-dark/50 mt-2 font-medium">
                    <span>$1,000</span>
                    <span>$10,000+</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-md disabled:opacity-70 flex items-center justify-center gap-2 text-lg">
                  
                  {isGenerating ?
                  <>
                      <SparklesIcon className="w-5 h-5 animate-spin" /> Our AI
                      Designers are crafting...
                    </> :

                  <>
                      <SparklesIcon className="w-5 h-5" /> Generate Bespoke
                      Itinerary
                    </>
                  }
                </button>
              </form>
            </motion.div>

            {/* Side Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-primary text-white rounded-3xl p-8 shadow-card relative overflow-hidden">
                <div className="absolute inset-0 bg-topographic opacity-10 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl font-medium mb-4">
                    How it works
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Share your vision</h4>
                        <p className="text-white/70 text-sm font-light">
                          Tell us your preferences, pace, and must-haves.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">AI Curation</h4>
                        <p className="text-white/70 text-sm font-light">
                          Our engine matches your desires with our premium
                          portfolio.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Expert Refinement</h4>
                        <p className="text-white/70 text-sm font-light">
                          Review the draft and connect with a human expert to
                          finalize.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {result &&
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="mt-16 bg-white rounded-3xl p-8 md:p-16 shadow-lift border border-gray-100 relative overflow-hidden">
            
              <div className="absolute inset-0 bg-leaf-outline opacity-5 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase rounded-full mb-4">
                    Your Bespoke Itinerary
                  </span>
                  <h3 className="font-heading text-4xl md:text-5xl text-primary font-medium mb-6">
                    {result.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-8 text-dark/80 font-medium">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-accent" />{' '}
                      {result.days} Days
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-5 h-5 text-accent" />{' '}
                      {result.regions.join(', ')}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSignIcon className="w-5 h-5 text-accent" /> Est. $
                      {result.estimatedCost} / pp
                    </div>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-primary/20 before:via-primary/20 before:to-transparent">
                    {result.itinerary.map((day: any, idx: number) =>
                  <div
                    key={idx}
                    className="relative flex items-start gap-8 group">
                    
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold text-sm shrink-0 shadow-sm z-10 mt-1 transition-transform group-hover:scale-110">
                          {idx + 1}
                        </div>
                        <div className="bg-light/50 p-8 rounded-2xl flex-grow border border-transparent group-hover:border-gray-200 transition-colors">
                          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                            Day {day.day}
                          </div>
                          <h4 className="font-heading text-2xl font-medium text-primary mb-3">
                            {day.title}
                          </h4>
                          <p className="text-dark/70 leading-relaxed font-light text-lg">
                            {day.desc}
                          </p>
                        </div>
                      </div>
                  )}
                  </div>

                  <div className="mt-16 bg-primary text-white rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-wave-lines opacity-10 pointer-events-none"></div>
                    <div className="relative z-10">
                      <h4 className="font-heading text-3xl font-medium mb-4">
                        Bring this journey to life
                      </h4>
                      <p className="text-white/80 mb-8 text-lg font-light max-w-lg mx-auto">
                        Our travel designers are ready to refine this AI
                        suggestion into a bookable, flawless reality.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                        to="/contact"
                        className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-primary transition-colors">
                        
                          Request a Proposal
                        </Link>
                        <Link
                        to="/tours"
                        className="px-8 py-4 bg-white/10 border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors">
                        
                          Browse Similar Tours
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          }
        </div>
      </section>
    </div>);

}