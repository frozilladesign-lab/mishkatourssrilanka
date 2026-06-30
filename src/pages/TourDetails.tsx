import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckIcon, XIcon, ArrowRightIcon } from 'lucide-react';
import { getTourBySlug } from '../lib/tours';
import { TourHero } from '../components/tours/TourHero';
import { TourBookingPanel } from '../components/tours/TourBookingPanel';
import { TourTimeline } from '../components/tours/TourTimeline';
import { TourMap } from '../components/tours/TourMap';
import { TourGallery } from '../components/tours/TourGallery';
import { TourHotels } from '../components/tours/TourHotels';
import { TourReviews } from '../components/tours/TourReviews';
import { TourFAQ } from '../components/tours/TourFAQ';
import { usePersonalization } from '../components/personalization/PersonalizationContext';
export function TourDetails() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const tour = getTourBySlug(slug || '');
  const { addRecentlyViewed } = usePersonalization();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (tour) {
      addRecentlyViewed(tour.slug);
    }
  }, [slug, tour]);
  if (!tour) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-32 px-4 text-center bg-light">
        <h1 className="font-heading text-5xl text-primary mb-4 font-medium">
          Journey Not Found
        </h1>
        <p className="text-dark/70 mb-8 max-w-md text-lg">
          We couldn't find the package you're looking for. It may have been
          removed or the link is incorrect.
        </p>
        <Link
          to="/tours"
          className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
          
          Browse All Journeys
        </Link>
      </div>);

  }
  return (
    <div className="min-h-screen bg-light pb-20">
      <TourHero tour={tour} />

      <div className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <section className="py-8">
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-medium leading-relaxed mb-12 text-balance">
                "{tour.shortDescription}"
              </h2>

              <div className="space-y-8">
                <h3 className="font-heading text-2xl text-primary font-medium border-b border-primary/10 pb-4">
                  Signature Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {tour.highlights.map((highlight, idx) =>
                  <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover:scale-150 transition-transform"></div>
                      <span className="text-dark/80 text-lg font-light leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <TourTimeline itinerary={tour.itinerary} />

            <TourMap tour={tour} />

            <TourGallery
              images={tour.galleryImages}
              heroImage={tour.heroImage} />
            

            <TourHotels hotels={tour.hotels} />

            {/* Included / Excluded */}
            <section className="py-12">
              <h2 className="font-heading text-4xl text-primary font-medium mb-8">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h3 className="font-heading text-xl text-primary mb-6 flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-[#0F766E]" /> Included
                  </h3>
                  <ul className="space-y-4">
                    {tour.included.map((item, idx) =>
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-dark/70 font-light">
                      
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-primary mb-6 flex items-center gap-2">
                    <XIcon className="w-5 h-5 text-red-400" /> Not Included
                  </h3>
                  <ul className="space-y-4">
                    {tour.excluded.map((item, idx) =>
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-dark/70 font-light">
                      
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </section>

            <TourReviews rating={tour.rating} reviewCount={tour.reviewCount} />

            <TourFAQ />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <TourBookingPanel price={tour.price} />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="mt-24 py-24 bg-[#0A2F47] text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-topographic opacity-5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
            Ready to Explore?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white font-medium mb-6">
            Begin Your Journey
          </h2>
          <p className="text-white/70 font-light text-lg mb-10">
            Contact our travel designers today to start customizing this
            itinerary to your exact preferences.
          </p>
          <button
            onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            }
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-primary transition-colors">
            
            Request a Proposal <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>);

}