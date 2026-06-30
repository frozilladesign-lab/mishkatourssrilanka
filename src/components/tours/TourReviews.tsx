import React from 'react';
import { StarIcon } from 'lucide-react';
import { Counter } from '../common/Counter';
interface Props {
  rating: number;
  reviewCount: number;
}
export function TourReviews({ rating, reviewCount }: Props) {
  return (
    <section className="py-16 my-12 bg-[#0A2F47] rounded-3xl relative overflow-hidden text-center px-6">
      <div className="absolute inset-0 bg-wave-lines opacity-10"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) =>
          <StarIcon key={i} className="w-8 h-8 fill-accent text-accent" />
          )}
        </div>
        <h2 className="font-heading text-3xl md:text-5xl text-white font-medium mb-6 leading-tight">
          "The most incredible journey of our lives. Every detail was handled
          flawlessly."
        </h2>
        <div className="flex items-center justify-center gap-4 text-white/80 font-light">
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl text-accent">{rating}</span>
            <span>Average Rating</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/30"></span>
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl text-accent">
              <Counter end={reviewCount} />+
            </span>
            <span>Verified Reviews</span>
          </div>
        </div>
      </div>
    </section>);

}