import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import {
  CheckIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  SparklesIcon } from
'lucide-react';
import { cn } from '../lib/utils';
const interests = [
'Cultural Heritage',
'Wildlife Safari',
'Beaches',
'Tea Country',
'Adventure & Hiking',
'Luxury & Wellness',
'Honeymoon',
'Family Fun'];

const regions = [
'Cultural Triangle',
'Hill Country',
'South Coast',
'East Coast'];

const paces = ['Relaxed', 'Balanced', 'Active'];
export function CustomTourBuilder() {
  const [duration, setDuration] = useState(10);
  const [travelers, setTravelers] = useState(2);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
  'Cultural Heritage',
  'Beaches']
  );
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [pace, setPace] = useState('Balanced');
  const [submitted, setSubmitted] = useState(false);
  const toggle = (
  val: string,
  list: string[],
  setList: (v: string[]) => void) =>
  {
    setList(list.includes(val) ? list.filter((x) => x !== val) : [...list, val]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Custom Tour Builder"
        subtitle="Design your dream Sri Lankan journey, exactly the way you imagine it."
        image="/images/tours/pearl-of-sri-lanka/gallery-2.jpg"
        breadcrumbs={[
        {
          label: 'Custom Tour Builder'
        }]
        } />
      

      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {submitted ?
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="bg-white rounded-3xl p-10 shadow-card border border-gray-100 text-center">
            
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-success" />
              </div>
              <h2 className="font-heading text-3xl text-primary font-semibold mb-3">
                Your Request is In!
              </h2>
              <p className="text-dark/70 max-w-md mx-auto mb-8">
                Thank you. One of our travel designers will craft a personalized{' '}
                {duration}-day itinerary for {travelers} traveler
                {travelers > 1 ? 's' : ''} and send it to you within 24 hours.
              </p>
              <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors">
              
                Build Another Trip
              </button>
            </motion.div> :

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gray-100 space-y-10">
            
              {/* Duration & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-4">
                    <CalendarIcon className="w-5 h-5 text-secondary" /> Trip
                    Length
                  </label>
                  <input
                  type="range"
                  min={3}
                  max={21}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full accent-secondary" />
                
                  <div className="text-center mt-2 font-heading text-2xl text-primary font-semibold">
                    {duration} Days
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-4">
                    <UsersIcon className="w-5 h-5 text-secondary" /> Travelers
                  </label>
                  <div className="flex items-center justify-center gap-4">
                    <button
                    type="button"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-10 h-10 rounded-full bg-light border border-gray-200 text-primary text-xl hover:bg-gray-100">
                    
                      -
                    </button>
                    <span className="font-heading text-2xl text-primary font-semibold w-10 text-center">
                      {travelers}
                    </span>
                    <button
                    type="button"
                    onClick={() => setTravelers(travelers + 1)}
                    className="w-10 h-10 rounded-full bg-light border border-gray-200 text-primary text-xl hover:bg-gray-100">
                    
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="flex items-center gap-2 font-semibold text-primary mb-4">
                  <SparklesIcon className="w-5 h-5 text-secondary" /> Your
                  Interests
                </label>
                <div className="flex flex-wrap gap-3">
                  {interests.map((it) =>
                <button
                  key={it}
                  type="button"
                  onClick={() =>
                  toggle(it, selectedInterests, setSelectedInterests)
                  }
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                    selectedInterests.includes(it) ?
                    'bg-secondary text-white border-secondary' :
                    'bg-white text-dark/70 border-gray-200 hover:border-secondary'
                  )}>
                  
                      {it}
                    </button>
                )}
                </div>
              </div>

              {/* Regions */}
              <div>
                <label className="flex items-center gap-2 font-semibold text-primary mb-4">
                  <MapPinIcon className="w-5 h-5 text-secondary" /> Regions to
                  Explore
                </label>
                <div className="flex flex-wrap gap-3">
                  {regions.map((r) =>
                <button
                  key={r}
                  type="button"
                  onClick={() =>
                  toggle(r, selectedRegions, setSelectedRegions)
                  }
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                    selectedRegions.includes(r) ?
                    'bg-primary text-white border-primary' :
                    'bg-white text-dark/70 border-gray-200 hover:border-primary'
                  )}>
                  
                      {r}
                    </button>
                )}
                </div>
              </div>

              {/* Pace */}
              <div>
                <label className="font-semibold text-primary mb-4 block">
                  Travel Pace
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {paces.map((p) =>
                <button
                  key={p}
                  type="button"
                  onClick={() => setPace(p)}
                  className={cn(
                    'py-3 rounded-xl text-sm font-medium border transition-colors',
                    pace === p ?
                    'bg-secondary text-white border-secondary' :
                    'bg-white text-dark/70 border-gray-200 hover:border-secondary'
                  )}>
                  
                      {p}
                    </button>
                )}
                </div>
              </div>

              <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-soft">
              
                Send My Custom Itinerary Request
              </button>
            </form>
          }
        </div>
      </section>
    </div>);

}