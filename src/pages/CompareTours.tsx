import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckIcon,
  XIcon,
  StarIcon,
  ClockIcon,
  MapPinIcon } from
'lucide-react';
import { usePersonalization } from '../components/personalization/PersonalizationContext';
import { usePreferences } from '../components/personalization/PreferencesContext';
import { getTourBySlug } from '../lib/tours';
export function CompareTours() {
  const { compareSlugs, toggleCompare } = usePersonalization();
  const { formatPrice } = usePreferences();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const compareTours = compareSlugs.
  map((slug) => getTourBySlug(slug)).
  filter((tour): tour is NonNullable<typeof tour> => tour !== undefined);
  return (
    <div className="min-h-screen bg-light pb-20 pt-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-primary font-medium mb-4">
              Compare Journeys
            </h1>
            <p className="text-dark/70 text-lg font-light">
              Evaluate your selected itineraries side by side to find your
              perfect match.
            </p>
          </div>
          {compareTours.length > 0 &&
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-primary rounded-full font-medium hover:bg-gray-50 transition-colors shrink-0">
            
              Add More to Compare
            </Link>
          }
        </div>

        {compareTours.length === 0 ?
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="bg-white rounded-3xl p-12 text-center shadow-soft border border-gray-100 max-w-2xl mx-auto mt-12 relative overflow-hidden">
          
            <div className="absolute inset-0 bg-geometric-motif opacity-5 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl text-primary font-medium mb-4">
                No journeys selected
              </h2>
              <p className="text-dark/70 text-lg font-light mb-8">
                Browse our tours and click "Compare" to evaluate them side by
                side.
              </p>
              <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
              
                Browse Journeys <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div> :

        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 border-b border-r border-gray-100 w-1/4 bg-light/50">
                    <span className="font-heading text-xl text-primary font-medium">
                      Features
                    </span>
                  </th>
                  {compareTours.map((tour) =>
                <th
                  key={tour.slug}
                  className="p-6 border-b border-gray-100 w-1/4 align-top relative">
                  
                      <button
                    onClick={() => toggleCompare(tour.slug)}
                    className="absolute top-4 right-4 p-1.5 bg-light rounded-full text-dark/40 hover:text-red-500 hover:bg-red-50 transition-colors"
                    aria-label="Remove from comparison">
                    
                        <XIcon className="w-4 h-4" />
                      </button>
                      <div className="h-32 rounded-xl overflow-hidden mb-4">
                        <img
                      src={tour.heroImage}
                      alt={tour.title}
                      className="w-full h-full object-cover" />
                    
                      </div>
                      <h3 className="font-heading text-lg font-medium text-primary mb-2 line-clamp-2">
                        {tour.title}
                      </h3>
                      <div className="font-heading text-2xl font-semibold text-secondary">
                        {formatPrice(tour.price)}{' '}
                        <span className="text-sm font-body font-normal text-dark/60">
                          / pp
                        </span>
                      </div>
                    </th>
                )}
                  {/* Fill empty columns if less than 3 */}
                  {Array.from({
                  length: 3 - compareTours.length
                }).map((_, i) =>
                <th
                  key={`empty-${i}`}
                  className="p-6 border-b border-gray-100 w-1/4 bg-light/30">
                  
                      <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
                          <span className="text-gray-400 text-xl">+</span>
                        </div>
                        <span className="text-sm font-medium text-gray-500">
                          Add Journey
                        </span>
                      </div>
                    </th>
                )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-6 border-b border-r border-gray-100 font-medium text-dark/80 bg-light/50">
                    Duration
                  </td>
                  {compareTours.map((tour) =>
                <td
                  key={tour.slug}
                  className="p-6 border-b border-gray-100">
                  
                      <div className="flex items-center gap-2 text-dark/80">
                        <ClockIcon className="w-4 h-4 text-accent" />{' '}
                        {tour.durationDays} Days
                      </div>
                    </td>
                )}
                  {Array.from({
                  length: 3 - compareTours.length
                }).map((_, i) =>
                <td
                  key={`empty-dur-${i}`}
                  className="p-6 border-b border-gray-100 bg-light/30">
                </td>
                )}
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-gray-100 font-medium text-dark/80 bg-light/50">
                    Region
                  </td>
                  {compareTours.map((tour) =>
                <td
                  key={tour.slug}
                  className="p-6 border-b border-gray-100">
                  
                      <div className="flex items-center gap-2 text-dark/80">
                        <MapPinIcon className="w-4 h-4 text-accent" />{' '}
                        {tour.region}
                      </div>
                    </td>
                )}
                  {Array.from({
                  length: 3 - compareTours.length
                }).map((_, i) =>
                <td
                  key={`empty-reg-${i}`}
                  className="p-6 border-b border-gray-100 bg-light/30">
                </td>
                )}
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-gray-100 font-medium text-dark/80 bg-light/50">
                    Rating
                  </td>
                  {compareTours.map((tour) =>
                <td
                  key={tour.slug}
                  className="p-6 border-b border-gray-100">
                  
                      <div className="flex items-center gap-1 text-dark/80">
                        <StarIcon className="w-4 h-4 fill-accent text-accent" />{' '}
                        {tour.rating} ({tour.reviewCount})
                      </div>
                    </td>
                )}
                  {Array.from({
                  length: 3 - compareTours.length
                }).map((_, i) =>
                <td
                  key={`empty-rat-${i}`}
                  className="p-6 border-b border-gray-100 bg-light/30">
                </td>
                )}
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-gray-100 font-medium text-dark/80 bg-light/50">
                    Highlights
                  </td>
                  {compareTours.map((tour) =>
                <td
                  key={tour.slug}
                  className="p-6 border-b border-gray-100 align-top">
                  
                      <ul className="space-y-2">
                        {tour.highlights.slice(0, 4).map((h, i) =>
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-dark/70">
                      
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0"></span>
                            {h}
                          </li>
                    )}
                      </ul>
                    </td>
                )}
                  {Array.from({
                  length: 3 - compareTours.length
                }).map((_, i) =>
                <td
                  key={`empty-high-${i}`}
                  className="p-6 border-b border-gray-100 bg-light/30">
                </td>
                )}
                </tr>
                <tr>
                  <td className="p-6 border-r border-gray-100 bg-light/50"></td>
                  {compareTours.map((tour) =>
                <td key={tour.slug} className="p-6 text-center">
                      <Link
                    to={`/tours/${tour.slug}`}
                    className="inline-block w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
                    
                        View Details
                      </Link>
                    </td>
                )}
                  {Array.from({
                  length: 3 - compareTours.length
                }).map((_, i) =>
                <td key={`empty-cta-${i}`} className="p-6 bg-light/30"></td>
                )}
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>);

}