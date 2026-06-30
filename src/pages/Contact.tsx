import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon } from
'lucide-react';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Plan Your Sri Lanka Tour with Mishka Tours"
        subtitle="Ready to explore Sri Lanka? Send us your travel date, pickup location, number of travelers, and preferred tour. We will help you choose the best experience."
        image="/images/tours/charm-of-southern-coast/hero.avif"
        breadcrumbs={[
        {
          label: 'Contact'
        }]
        } />
      

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="space-y-8">
              
              <div>
                <h2 className="font-heading text-3xl text-primary font-semibold mb-4">
                  Contact Mishka Tours Sri Lanka
                </h2>
                <p className="text-dark/70 leading-relaxed">
                  Reach us through WhatsApp for quick tour planning and trip support. Share your travel date, pickup location, number of travelers, and preferred tour and we will help you plan the right experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-secondary shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Location</h4>
                    <p className="text-sm text-dark/70">Sri Lanka</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-secondary shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Phone / WhatsApp
                    </h4>
                    <p className="text-sm text-dark/70">+94 XX XXX XXXX</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-secondary shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-sm text-dark/70">info@mishkatours.com</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-secondary shrink-0">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Availability
                    </h4>
                    <p className="text-sm text-dark/70">
                      Available 7 days a week
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Map Placeholder"
                  className="w-full h-full object-cover opacity-50 grayscale" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-sm font-medium text-primary flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-secondary" />
                    Colombo, Sri Lanka
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6
              }}>
              
              <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
                <h3 className="font-heading text-2xl text-primary font-semibold mb-6">
                  Send an Inquiry
                </h3>

                {isSuccess ?
                <div className="bg-success/10 border border-success/20 text-success p-6 rounded-xl text-center">
                    <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SendIcon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm opacity-90">
                      Thank you for reaching out. One of our travel experts will
                      get back to you within 24 hours.
                    </p>
                  </div> :

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark/80 mb-1.5">
                          Name *
                        </label>
                        <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50"
                        placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark/80 mb-1.5">
                          WhatsApp Number *
                        </label>
                        <input
                        required
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50"
                        placeholder="+1 234 567 8900" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark/80 mb-1.5">
                          Email Address
                        </label>
                        <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50"
                        placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark/80 mb-1.5">
                          Travel Date *
                        </label>
                        <input
                        required
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark/80 mb-1.5">
                          Pickup Location *
                        </label>
                        <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50"
                        placeholder="Hotel name or city" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark/80 mb-1.5">
                          Number of Travelers *
                        </label>
                        <input
                        required
                        type="number"
                        min="1"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50"
                        placeholder="2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark/80 mb-1.5">
                        Selected Tour / Activity
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50 appearance-none">
                        <option value="">Select a tour or activity...</option>
                        <optgroup label="Two-Day Excursions">
                          <option>Pearl of Sri Lanka (2 Days)</option>
                          <option>Majestic Island (2 Days)</option>
                        </optgroup>
                        <optgroup label="One-Day Excursions">
                          <option>Misty Mountains</option>
                          <option>Wonder of Sri Lanka</option>
                          <option>Misty Mountains with Yala Safari</option>
                          <option>The Last Kingdom</option>
                          <option>Yala Safari</option>
                          <option>Charm of the Southern Coast</option>
                          <option>Whale Watching</option>
                        </optgroup>
                        <optgroup label="Individual Excursions">
                          <option>Colombo City Tour</option>
                          <option>Sinharaja Tropical Rainforest</option>
                          <option>Ocean Fishing</option>
                          <option>Surfing</option>
                          <option>Snorkeling / Diving / Rafting</option>
                          <option>Yacht Sea Trip</option>
                          <option>Ayurvedic Treatment</option>
                          <option>Helicopter Ride</option>
                        </optgroup>
                        <option>Airport Transfer</option>
                        <option>Custom Tour</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark/80 mb-1.5">
                        Message
                      </label>
                      <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors bg-light/50 resize-none"
                      placeholder="Tell us about your travel plans, preferences, or any questions...">
                      </textarea>
                    </div>

                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                      {isSubmitting ?
                    <span className="animate-pulse">Sending...</span> :
                    <>
                          Send Inquiry
                          <SendIcon className="w-4 h-4" />
                        </>
                    }
                    </button>

                    <a
                      href="https://wa.me/94XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2">
                      Chat on WhatsApp
                    </a>
                  </form>
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}