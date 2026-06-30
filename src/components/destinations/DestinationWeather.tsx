import React from 'react';
import { SunIcon, CloudRainIcon, CloudIcon } from 'lucide-react';
interface Props {
  bestTimeToVisit: string;
}
export function DestinationWeather({ bestTimeToVisit }: Props) {
  // Synthesized weather data for editorial display
  const seasons = [
  {
    name: 'Peak Season',
    months: 'Dec - Mar',
    temp: '28°C',
    icon: SunIcon,
    desc: 'Dry & Sunny'
  },
  {
    name: 'Shoulder',
    months: 'Apr - Jun',
    temp: '30°C',
    icon: CloudIcon,
    desc: 'Mixed Weather'
  },
  {
    name: 'Monsoon',
    months: 'Jul - Nov',
    temp: '27°C',
    icon: CloudRainIcon,
    desc: 'Tropical Showers'
  }];

  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-medium mb-4">
            When to Visit
          </h2>
          <p className="text-xl text-dark/70 font-light max-w-2xl">
            {bestTimeToVisit}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {seasons.map((season, idx) =>
        <div
          key={idx}
          className="bg-white p-8 rounded-2xl shadow-subtle border border-primary/5 relative overflow-hidden group">
          
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <season.icon className="w-24 h-24 text-primary" />
            </div>
            <div className="relative z-10">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-2 block">
                {season.name}
              </span>
              <h4 className="font-heading text-2xl text-primary font-medium mb-1">
                {season.months}
              </h4>
              <div className="flex items-center gap-3 mt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary font-semibold">
                  {season.temp}
                </div>
                <span className="text-dark/70 font-medium">{season.desc}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}