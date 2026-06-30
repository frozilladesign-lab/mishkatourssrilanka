import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  SearchIcon } from
'lucide-react';
export function QuickSearch() {
  return (
    <div className="relative z-20 -mt-24 px-4 md:px-8 container mx-auto">
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
          duration: 0.6,
          delay: 0.4
        }}
        className="glass-panel rounded-2xl p-4 md:p-6 shadow-glass max-w-6xl mx-auto">
        
        <form
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
          onSubmit={(e) => e.preventDefault()}>
          
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-dark/70 uppercase tracking-wider flex items-center gap-1.5">
              <MapPinIcon className="w-3.5 h-3.5" /> Destination
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-white/50 border border-gray-200 rounded-xl px-4 py-3.5 text-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                <option value="">Anywhere in Sri Lanka</option>
                <option value="cultural-triangle">Cultural Triangle</option>
                <option value="south-coast">South Coast</option>
                <option value="hill-country">Hill Country</option>
                <option value="east-coast">East Coast</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  
                </svg>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-dark/70 uppercase tracking-wider flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5" /> Duration
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-white/50 border border-gray-200 rounded-xl px-4 py-3.5 text-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                <option value="">Any Duration</option>
                <option value="1-3">1-3 Days</option>
                <option value="4-7">4-7 Days</option>
                <option value="8-14">8-14 Days</option>
                <option value="15+">15+ Days</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  
                </svg>
              </div>
            </div>
          </div>

          {/* Travel Month */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-dark/70 uppercase tracking-wider flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5" /> Travel Month
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-white/50 border border-gray-200 rounded-xl px-4 py-3.5 text-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                <option value="">Any Month</option>
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  
                </svg>
              </div>
            </div>
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-dark/70 uppercase tracking-wider flex items-center gap-1.5">
              <UsersIcon className="w-3.5 h-3.5" /> Travelers
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-white/50 border border-gray-200 rounded-xl px-4 py-3.5 text-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  
                </svg>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-xl px-4 py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-md">
            
            <SearchIcon className="w-5 h-5" />
            Search Tours
          </button>
        </form>
      </motion.div>
    </div>);

}