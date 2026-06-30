import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPinIcon, CalendarIcon, ArrowRightIcon } from 'lucide-react';
import { getDestinationBySlug } from '../lib/destinations';
import { getTourBySlug } from '../lib/tours';
import { TourCard } from '../components/tours/TourCard';
import { DestinationHero } from '../components/destinations/DestinationHero';
import { DestinationInsights } from '../components/destinations/DestinationInsights';
import { DestinationWeather } from '../components/destinations/DestinationWeather';
import { DestinationMap } from '../components/destinations/DestinationMap';
import { DestinationGallery } from '../components/destinations/DestinationGallery';
export function DestinationDetails() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const destination = getDestinationBySlug(slug || '');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!destination) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 bg-light">
        <h1 className="font-heading text-3xl md:text-5xl text-primary mb-4 font-medium">
          Destination Not Found
        </h1>
        <p className="text-dark/70 mb-8 text-lg">
          We couldn't find the destination you're looking for.
        </p>
        <Link
          to="/destinations"
          className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
          
          Back to Destinations
        </Link>
      </div>);

  }
  const relatedTours = destination.relatedTourSlugs.
  map((tourSlug) => getTourBySlug(tourSlug)).
  filter((tour): tour is NonNullable<typeof tour> => tour !== undefined);
  return (
    <div className="min-h-screen bg-light pb-20">
      <DestinationHero destination={destination} />

      <div className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Lede / Intro */}
            <section>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-medium leading-relaxed mb-8 text-balance">
                "{destination.longDescription[0]}"
              </h2>
              <div className="space-y-6 text-dark/70 leading-loose text-lg font-light">
                {destination.longDescription.slice(1).map((para, idx) =>
                <p key={idx}>{para}</p>
                )}
              </div>
            </section>

            <DestinationInsights />

            {/* Highlights Editorial List */}
            <section className="py-8">
              <h2 className="font-heading text-4xl text-primary font-medium mb-10">
                Curated Highlights
              </h2>
              <div className="space-y-8">
                {destination.highlights.map((highlight, idx) =>
                <div key={idx} className="flex items-start gap-6 group">
                    <div className="font-heading text-4xl text-accent/30 font-light group-hover:text-accent transition-colors">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-heading text-2xl text-primary font-medium mb-2">
                        {highlight}
                      </h3>
                      <p className="text-dark/60 font-light">
                        Experience the magic of {destination.name} through this
                        signature activity, carefully selected by our travel
                        experts.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <DestinationGallery
              images={destination.galleryImages}
              heroImage={destination.heroImage} />
            

            <DestinationWeather bestTimeToVisit={destination.bestTimeToVisit} />

            <DestinationMap
              name={destination.name}
              region={destination.region} />
            
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Premium Info Card */}
              <div className="bg-white rounded-3xl p-8 shadow-subtle border border-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-topographic opacity-5 pointer-events-none"></div>
                <h3 className="font-heading text-2xl text-primary font-medium mb-8">
                  Essential Info
                </h3>

                <div className="space-y-8 relative z-10">
                  <div>
                    <div className="flex items-center gap-3 text-primary mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold tracking-wide uppercase text-sm">
                        Best Time
                      </span>
                    </div>
                    <p className="text-dark/70 leading-relaxed pl-13">
                      {destination.bestTimeToVisit}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-primary mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold tracking-wide uppercase text-sm">
                        Getting There
                      </span>
                    </div>
                    <p className="text-dark/70 leading-relaxed pl-13">
                      {destination.howToGetThere}
                    </p>
                  </div>
                </div>
              </div>

              {/* Editorial CTA */}
              <div className="bg-[#0A2F47] rounded-3xl p-8 text-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-wave-lines opacity-10 transition-opacity group-hover:opacity-20"></div>
                <div className="relative z-10">
                  <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
                    Design Your Journey
                  </span>
                  <h3 className="font-heading text-3xl font-medium mb-4">
                    Experience {destination.name}
                  </h3>
                  <p className="text-white/70 font-light mb-8">
                    Let our travel designers craft a bespoke itinerary featuring
                    the very best of this region.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-primary transition-colors">
                    
                    Inquire Now <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours Editorial Block */}
        {relatedTours.length > 0 &&
        <section className="mt-32 pt-20 border-t border-primary/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light px-8">
              <span className="font-heading text-2xl text-primary/40 italic">
                Curated Journeys
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-heading text-2xl md:text-4xl text-primary font-medium mb-4">
                  Journeys featuring {destination.name}
                </h2>
                <p className="text-lg text-dark/70 font-light">
                  Discover our hand-crafted itineraries that include this
                  remarkable destination.
                </p>
              </div>
              <Link
              to="/tours"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors pb-2 border-b border-transparent hover:border-accent">
              
                View All Journeys <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((tour) =>
            <TourCard key={tour.slug} tour={tour} />
            )}
            </div>
          </section>
        }
      </div>
    </div>);

}