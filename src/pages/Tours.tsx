import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRightIcon,
  SlidersHorizontalIcon,
  XIcon,
  ClockIcon } from
'lucide-react';
import { tours, Activity, Region, getTourBySlug } from '../lib/tours';
import { TourCard } from '../components/tours/TourCard';
import { cn } from '../lib/utils';
import { usePersonalization } from '../components/personalization/PersonalizationContext';
const ACTIVITIES: Activity[] = [
'Cultural',
'Wildlife',
'Beach',
'Adventure',
'Luxury',
'Honeymoon',
'Family'];

const REGIONS: Region[] = [
'South Coast',
'Hill Country',
'Cultural Triangle',
'East Coast',
'Multiple Regions'];

export function Tours() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  // Filter States
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [sortBy, setSortBy] = useState<string>('popular');
  const { recentlyViewedSlugs } = usePersonalization();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleDuration = (duration: string) => {
    setSelectedDurations((prev) =>
    prev.includes(duration) ?
    prev.filter((d) => d !== duration) :
    [...prev, duration]
    );
  };
  const toggleActivity = (activity: Activity) => {
    setSelectedActivities((prev) =>
    prev.includes(activity) ?
    prev.filter((a) => a !== activity) :
    [...prev, activity]
    );
  };
  const toggleRegion = (region: Region) => {
    setSelectedRegions((prev) =>
    prev.includes(region) ?
    prev.filter((r) => r !== region) :
    [...prev, region]
    );
  };
  const clearFilters = () => {
    setPriceRange(5000);
    setSelectedDurations([]);
    setSelectedActivities([]);
    setSelectedRegions([]);
  };
  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => {
      if (tour.price > priceRange) return false;
      if (selectedDurations.length > 0) {
        const matchesDuration = selectedDurations.some((range) => {
          if (range === '1-5')
          return tour.durationDays >= 1 && tour.durationDays <= 5;
          if (range === '6-9')
          return tour.durationDays >= 6 && tour.durationDays <= 9;
          if (range === '10+') return tour.durationDays >= 10;
          return false;
        });
        if (!matchesDuration) return false;
      }
      if (selectedActivities.length > 0) {
        const hasActivity = selectedActivities.some((act) =>
        tour.activityTags.includes(act)
        );
        if (!hasActivity) return false;
      }
      if (selectedRegions.length > 0) {
        if (!selectedRegions.includes(tour.region)) return false;
      }
      return true;
    });
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'duration-asc':
        result.sort((a, b) => a.durationDays - b.durationDays);
        break;
      case 'duration-desc':
        result.sort((a, b) => b.durationDays - a.durationDays);
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
    return result;
  }, [
  priceRange,
  selectedDurations,
  selectedActivities,
  selectedRegions,
  sortBy]
  );
  const recentTours = recentlyViewedSlugs.
  map((slug) => getTourBySlug(slug)).
  filter((t): t is NonNullable<typeof t> => t !== undefined);
  const FilterContent = () =>
  <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-xl font-medium text-primary">
          Refine Search
        </h3>
        <button
        onClick={clearFilters}
        className="text-sm text-dark/60 hover:text-primary transition-colors">
        
          Clear All
        </button>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
          Max Budget
        </h4>
        <input
        type="range"
        min="500"
        max="5000"
        step="100"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        className="w-full accent-primary" />
      
        <div className="flex justify-between text-sm text-dark/60 mt-2">
          <span>$500</span>
          <span className="font-medium text-primary">${priceRange}</span>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
          Duration
        </h4>
        <div className="flex flex-wrap gap-2">
          {['1-5', '6-9', '10+'].map((range) =>
        <button
          key={range}
          onClick={() => toggleDuration(range)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
            selectedDurations.includes(range) ?
            'bg-primary text-white border-primary' :
            'bg-white text-dark/70 border-gray-200 hover:border-primary'
          )}>
          
              {range} Days
            </button>
        )}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
          Travel Style
        </h4>
        <div className="flex flex-wrap gap-2">
          {ACTIVITIES.map((activity) =>
        <button
          key={activity}
          onClick={() => toggleActivity(activity)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
            selectedActivities.includes(activity) ?
            'bg-primary text-white border-primary' :
            'bg-white text-dark/70 border-gray-200 hover:border-primary'
          )}>
          
              {activity}
            </button>
        )}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
          Region
        </h4>
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((region) =>
        <button
          key={region}
          onClick={() => toggleRegion(region)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
            selectedRegions.includes(region) ?
            'bg-primary text-white border-primary' :
            'bg-white text-dark/70 border-gray-200 hover:border-primary'
          )}>
          
              {region}
            </button>
        )}
        </div>
      </div>
    </div>;

  return (
    <div className="min-h-screen bg-light pb-20">
      {/* Cinematic Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-topographic opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
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
              duration: 0.6
            }}>
            
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRightIcon className="w-4 h-4" />
              <span className="text-white font-medium">Curated Journeys</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-medium mb-6">
              Discover Sri Lanka
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Explore our collection of meticulously crafted itineraries,
              designed to immerse you in the island's unparalleled beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 mt-12">
        {/* Top Filter Bar (Desktop) */}
        <div className="hidden lg:flex items-start gap-8 mb-12">
          <div className="w-full bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
                  Max Budget
                </h4>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-primary" />
                
                <div className="flex justify-between text-sm text-dark/60 mt-2">
                  <span>$500</span>
                  <span className="font-medium text-primary">
                    ${priceRange}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
                  Duration
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['1-5', '6-9', '10+'].map((range) =>
                  <button
                    key={range}
                    onClick={() => toggleDuration(range)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
                      selectedDurations.includes(range) ?
                      'bg-primary text-white border-primary' :
                      'bg-white text-dark/70 border-gray-200 hover:border-primary'
                    )}>
                    
                      {range} Days
                    </button>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-4">
                  Travel Style
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ACTIVITIES.map((activity) =>
                  <button
                    key={activity}
                    onClick={() => toggleActivity(activity)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
                      selectedActivities.includes(activity) ?
                      'bg-primary text-white border-primary' :
                      'bg-white text-dark/70 border-gray-200 hover:border-primary'
                    )}>
                    
                      {activity}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <div className="text-dark/60 text-sm">
                Showing{' '}
                <span className="text-primary font-semibold">
                  {filteredTours.length}
                </span>{' '}
                curated journeys
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={clearFilters}
                  className="text-sm text-dark/60 hover:text-primary transition-colors">
                  
                  Clear Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-light border border-gray-200 text-dark text-sm rounded-full px-4 py-2 outline-none focus:border-primary">
                  
                  <option value="popular">Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration-asc">Duration: Short to Long</option>
                  <option value="duration-desc">Duration: Long to Short</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-dark/80 font-medium text-sm">
            <span className="text-primary font-semibold">
              {filteredTours.length}
            </span>{' '}
            journeys
          </div>
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-light rounded-full text-dark text-sm font-medium">
            
            <SlidersHorizontalIcon className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Results Grid - Asymmetric */}
        {filteredTours.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, idx) =>
          <div
            key={tour.slug}
            className={cn(
              'transition-all duration-500',
              idx === 0 && filteredTours.length > 3 ?
              'md:col-span-2 lg:col-span-2' :
              ''
            )}>
            
                <TourCard tour={tour} />
              </div>
          )}
          </div> :

        <div className="bg-white rounded-3xl p-16 text-center shadow-soft border border-gray-100 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mx-auto mb-6">
              <SlidersHorizontalIcon className="w-8 h-8 text-dark/40" />
            </div>
            <h3 className="font-heading text-3xl font-medium text-primary mb-4">
              No journeys found
            </h3>
            <p className="text-dark/70 mb-8 text-lg font-light">
              We couldn't find any packages matching your exact criteria. Try
              adjusting your filters.
            </p>
            <button
            onClick={clearFilters}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
            
              Clear All Filters
            </button>
          </div>
        }

        {/* Recently Viewed */}
        {recentTours.length > 0 &&
        <section className="mt-24 pt-16 border-t border-gray-200 relative">
            <div className="absolute inset-0 bg-wave-lines opacity-5 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary mb-8">
                <ClockIcon className="w-5 h-5" />
                <h2 className="font-heading text-3xl font-medium">
                  Recently Viewed
                </h2>
              </div>
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                {recentTours.map((tour) =>
              <div
                key={tour.slug}
                className="w-[300px] shrink-0 snap-start">
                
                    <TourCard tour={tour} />
                  </div>
              )}
              </div>
            </div>
          </section>
        }
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setIsMobileFiltersOpen(false)}
            className="fixed inset-0 bg-dark/60 z-50 lg:hidden backdrop-blur-sm" />
          
            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white z-50 lg:hidden overflow-y-auto shadow-2xl">
            
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-heading text-2xl font-medium text-primary">
                    Filters
                  </h2>
                  <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 hover:bg-light rounded-full transition-colors">
                  
                    <XIcon className="w-6 h-6 text-dark" />
                  </button>
                </div>
                <FilterContent />
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors">
                  
                    Show {filteredTours.length} Results
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </div>);

}