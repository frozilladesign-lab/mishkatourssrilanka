import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export function TourFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
  {
    q: 'Can this itinerary be customized?',
    a: 'Absolutely. All our journeys are fully customizable. Our travel designers will work with you to adjust the pace, accommodations, and activities to perfectly match your preferences.'
  },
  {
    q: 'What is the booking and cancellation policy?',
    a: 'We require a 20% deposit to secure your booking. The remaining balance is due 30 days before arrival. We offer flexible rescheduling up to 14 days prior to your trip.'
  },
  {
    q: 'Are flights included in the price?',
    a: 'International flights are not included, allowing you the flexibility to choose your preferred airline and routing. We do include all domestic transport (private chauffeur, domestic flights, or scenic trains) as specified in the itinerary.'
  },
  {
    q: 'What type of vehicle will we travel in?',
    a: 'You will travel in a premium, air-conditioned vehicle (luxury sedan or spacious SUV depending on group size) driven by one of our expert English-speaking chauffeur-guides.'
  }];

  return (
    <section className="py-12">
      <h2 className="font-heading text-4xl text-primary font-medium mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) =>
        <div
          key={idx}
          className="bg-white border border-primary/10 rounded-2xl overflow-hidden">
          
            <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
            
              <span className="font-heading text-xl text-primary font-medium">
                {faq.q}
              </span>
              <ChevronDownIcon
              className={`w-5 h-5 text-primary transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
            
            </button>
            <div
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
            
              <p className="text-dark/70 font-light leading-relaxed">{faq.a}</p>
            </div>
          </div>
        )}
      </div>
    </section>);

}