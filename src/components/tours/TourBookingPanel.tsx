import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckIcon,
  CalendarIcon,
  UsersIcon,
  MessageCircleIcon } from
'lucide-react';
import { usePreferences } from '../personalization/PreferencesContext';
interface Props {
  price: number;
}
export function TourBookingPanel({ price }: Props) {
  const { formatPrice } = usePreferences();
  const [travelers, setTravelers] = useState(2);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-32 bg-white rounded-3xl shadow-subtle border border-primary/5 overflow-hidden">
        <div className="bg-[#0A2F47] p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-geometric-motif opacity-10"></div>
          <div className="relative z-10">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest block mb-2">
              Starting From
            </span>
            <div className="font-heading text-5xl font-medium mb-2">
              {formatPrice(price)}{' '}
              <span className="text-lg font-body font-light text-white/70">
                / person
              </span>
            </div>
            <p className="text-white/60 text-sm font-light">
              Best price guarantee • Fully customizable
            </p>
          </div>
        </div>

        <div className="p-8">
          {isSubmitted ?
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="text-center py-12">
            
              <div className="w-20 h-20 bg-[#0F766E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-10 h-10 text-[#0F766E]" />
              </div>
              <h3 className="font-heading text-3xl font-medium text-primary mb-3">
                Inquiry Sent
              </h3>
              <p className="text-dark/70 font-light leading-relaxed">
                Our travel designers will contact you within 24 hours with a
                bespoke proposal.
              </p>
            </motion.div> :

          <form onSubmit={handleInquirySubmit} className="space-y-5">
              <div className="bg-light p-5 rounded-2xl border border-primary/5 mb-8 flex justify-between items-center">
                <span className="text-dark/70 font-medium text-sm uppercase tracking-wide">
                  Estimated Total
                </span>
                <span className="font-heading text-2xl font-medium text-primary">
                  {formatPrice(price * travelers)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider flex items-center gap-2">
                    <UsersIcon className="w-3.5 h-3.5" /> Travelers
                  </label>
                  <div className="flex items-center border border-primary/10 rounded-xl overflow-hidden bg-light">
                    <button
                    type="button"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="px-4 py-3 hover:bg-primary/5 transition-colors text-primary">
                    
                      -
                    </button>
                    <input
                    type="number"
                    readOnly
                    value={travelers}
                    className="w-full text-center font-medium bg-transparent outline-none" />
                  
                    <button
                    type="button"
                    onClick={() => setTravelers(travelers + 1)}
                    className="px-4 py-3 hover:bg-primary/5 transition-colors text-primary">
                    
                      +
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-dark/60 uppercase tracking-wider flex items-center gap-2">
                    <CalendarIcon className="w-3.5 h-3.5" /> Date
                  </label>
                  <input
                  type="date"
                  required
                  className="w-full px-4 py-3 border border-primary/10 rounded-xl text-sm outline-none focus:border-primary/30 bg-light" />
                
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-5 py-3.5 border border-primary/10 rounded-xl text-sm outline-none focus:border-primary/30 bg-light" />
              
                <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-5 py-3.5 border border-primary/10 rounded-xl text-sm outline-none focus:border-primary/30 bg-light" />
              
                <input
                type="tel"
                required
                placeholder="WhatsApp / Phone"
                className="w-full px-5 py-3.5 border border-primary/10 rounded-xl text-sm outline-none focus:border-primary/30 bg-light" />
              
                <textarea
                rows={3}
                placeholder="Any special requirements or occasions?"
                className="w-full px-5 py-3.5 border border-primary/10 rounded-xl text-sm outline-none focus:border-primary/30 bg-light resize-none">
              </textarea>
              </div>

              <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors mt-4">
              
                Request Proposal
              </button>

              <button
              type="button"
              className="w-full py-4 bg-white text-[#25D366] border border-[#25D366]/30 rounded-xl font-medium hover:bg-[#25D366]/5 transition-colors flex items-center justify-center gap-2">
              
                <MessageCircleIcon className="w-5 h-5" /> Chat on WhatsApp
              </button>
            </form>
          }
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-primary/10 p-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex items-center justify-between">
        <div>
          <span className="text-xs text-dark/60 uppercase tracking-wider font-semibold block mb-0.5">
            From
          </span>
          <div className="font-heading text-2xl font-medium text-primary">
            {formatPrice(price)}
          </div>
        </div>
        <button
          onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          })
          }
          className="px-8 py-3.5 bg-primary text-white rounded-full font-medium">
          
          Inquire Now
        </button>
      </div>
    </>);

}