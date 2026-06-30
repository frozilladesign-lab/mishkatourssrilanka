import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white rounded-xl px-3 py-2">
              <img
                src="/logo.png"
                alt="Mishka Tours Sri Lanka"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/80 leading-relaxed text-sm">
              Discover Sri Lanka with Comfort, Care &amp; Local Experience. Private excursions, wildlife safaris, cultural journeys, and custom tours across the island.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/mishka_tours_srilanka?igsh=bXcxYWdhcXA0eGpj&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1JJLD4vVpM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@mishka_tours_srilanka?_r=1&_t=ZS-97YY31X9p7X"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.25 8.25 0 0 0 4.83 1.56V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/tours"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  All Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/experiences"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Travel Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/travel-guide"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Guest Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Offers & Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Plan Your Trip */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">
              Plan Your Trip
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/trip-planner"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  AI Trip Planner
                </Link>
              </li>
              <li>
                <Link
                  to="/custom-tour"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Custom Tour Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/hotels"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Hotels & Stays
                </Link>
              </li>
              <li>
                <Link
                  to="/transport"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Private Driver
                </Link>
              </li>
              <li>
                <Link
                  to="/visa-requirements"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Visa & Requirements
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">
              Popular Destinations
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/destinations/sigiriya"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Sigiriya Rock Fortress
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations/ella"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Ella & Hill Country
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations/yala"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Yala National Park
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations/mirissa"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Mirissa Beaches
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations/kandy"
                  className="text-white/80 hover:text-accent transition-colors">
                  
                  Kandy Cultural City
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-white/80">
                <MapPinIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <PhoneIcon className="w-5 h-5 text-accent shrink-0" />
                <span>+94 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MailIcon className="w-5 h-5 text-accent shrink-0" />
                <span>info@mishkatours.com</span>
              </li>
            </ul>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <p className="text-sm text-white/80">
                Subscribe to our newsletter for travel inspiration.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-4 py-2.5 rounded-l-md w-full focus:outline-none focus:border-accent" />
                
                <button
                  type="submit"
                  className="bg-accent text-white px-4 py-2.5 rounded-r-md font-medium hover:bg-accent/90 transition-colors">
                  
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Mishka Tours Sri Lanka. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}