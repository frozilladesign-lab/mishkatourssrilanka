import React from 'react';
import { LanguagesIcon, BanknoteIcon, CarIcon, ClockIcon } from 'lucide-react';
export function DestinationInsights() {
  const insights = [
  {
    icon: LanguagesIcon,
    title: 'Language',
    desc: 'Sinhala & Tamil. English is widely spoken in tourist areas.'
  },
  {
    icon: BanknoteIcon,
    title: 'Currency',
    desc: 'Sri Lankan Rupee (LKR). Cards accepted at most hotels.'
  },
  {
    icon: CarIcon,
    title: 'Getting Around',
    desc: 'Private chauffeur, scenic trains, or local tuk-tuks.'
  },
  {
    icon: ClockIcon,
    title: 'Time Zone',
    desc: 'GMT+5:30. No daylight saving time observed.'
  }];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 py-12 border-y border-primary/10">
      {insights.map((item, idx) =>
      <div key={idx} className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
            <item.icon className="w-5 h-5" />
          </div>
          <h4 className="font-heading text-lg font-semibold text-primary">
            {item.title}
          </h4>
          <p className="text-dark/70 text-sm leading-relaxed">{item.desc}</p>
        </div>
      )}
    </div>);

}