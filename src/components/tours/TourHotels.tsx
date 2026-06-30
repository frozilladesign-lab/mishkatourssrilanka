import React from 'react';
import { StarIcon, MapPinIcon } from 'lucide-react';
import { Hotel } from '../../lib/tours';
interface Props {
  hotels: Hotel[];
}
export function TourHotels({ hotels }: Props) {
  if (!hotels || hotels.length === 0) return null;
  return (
    <section className="py-12">
      <h2 className="font-heading text-4xl text-primary font-medium mb-8">
        Featured Accommodation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hotels.map((hotel, idx) =>
        <div
          key={idx}
          className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-subtle border border-primary/5">
          
            <div className="h-64 overflow-hidden relative">
              <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-medium text-primary shadow-sm">
                <StarIcon className="w-4 h-4 fill-accent text-accent" />{' '}
                {hotel.rating} Star
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h4 className="font-heading text-2xl font-medium text-primary mb-2">
                {hotel.name}
              </h4>
              <div className="flex items-center gap-2 text-dark/60 text-sm mb-6 font-light">
                <MapPinIcon className="w-4 h-4" /> {hotel.location}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {hotel.amenities.map((amenity, i) =>
              <span
                key={i}
                className="text-xs px-3 py-1.5 bg-primary/5 text-primary rounded-full font-medium tracking-wide">
                
                    {amenity}
                  </span>
              )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}