import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, GlobeIcon, ChevronDownIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import {
  usePreferences,
  CURRENCIES,
  LANGUAGES,
  CurrencyCode,
  LanguageCode
} from '../personalization/PreferencesContext';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const currencyRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const { currency, setCurrency, language, setLanguage, t } =
    usePreferences();
  const location = useLocation();
  const isHome = location.pathname === '/';
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        currencyRef.current &&
        !currencyRef.current.contains(e.target as Node)
      ) {
        setIsCurrencyOpen(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(e.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: t('home'),
    path: '/'
  },
  {
    name: t('tours'),
    path: '/tours'
  },
  {
    name: t('destinations'),
    path: '/destinations'
  },
  {
    name: t('experiences'),
    path: '/experiences'
  },
  {
    name: t('tripPlanner'),
    path: '/trip-planner'
  },
  {
    name: t('offers'),
    path: '/offers'
  }];

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isTransparent ?
        'bg-transparent py-6' :
        'bg-white/95 backdrop-blur-md shadow-sm py-4 border-gray-100'
      )}>
      
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div
            className={cn(
              'rounded-xl px-2.5 py-1.5 transition-all duration-300',
              isTransparent ? 'bg-white/95 shadow-md' : ''
            )}>
            <img
              src="/logo.png"
              alt="Mishka Tours Sri Lanka"
              className="h-10 md:h-12 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:opacity-70',
                isTransparent ? 'text-white' : 'text-dark hover:text-primary'
              )}>
              
                {link.name}
              </Link>
            )}
          </div>

          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            {/* Currency Selector */}
            <div
              className={cn(
                'flex items-center gap-3 text-sm font-medium',
                isTransparent ? 'text-white' : 'text-dark'
              )}>

              <div className="relative" ref={currencyRef}>
                <button
                  onClick={() => {
                    setIsCurrencyOpen((v) => !v);
                    setIsLanguageOpen(false);
                  }}
                  className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  {CURRENCIES[currency].symbol} {currency}{' '}
                  <ChevronDownIcon className="w-3 h-3" />
                </button>
                {isCurrencyOpen &&
                <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-lift border border-gray-100 py-2 z-50">
                    {Object.values(CURRENCIES).map((c) =>
                  <button
                    key={c.code}
                    onClick={() => {
                      setCurrency(c.code as CurrencyCode);
                      setIsCurrencyOpen(false);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-light transition-colors',
                      currency === c.code ?
                      'text-secondary font-semibold' :
                      'text-dark'
                    )}>

                      <span>
                        {c.symbol} {c.code}
                      </span>
                      <span className="text-xs text-dark/50">{c.label}</span>
                    </button>
                  )}
                  </div>
                }
              </div>

              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => {
                    setIsLanguageOpen((v) => !v);
                    setIsCurrencyOpen(false);
                  }}
                  className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <GlobeIcon className="w-4 h-4" />{' '}
                  {language.toUpperCase()}{' '}
                  <ChevronDownIcon className="w-3 h-3" />
                </button>
                {isLanguageOpen &&
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lift border border-gray-100 py-2 z-50">
                    {Object.values(LANGUAGES).map((l) =>
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code as LanguageCode);
                      setIsLanguageOpen(false);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 text-sm hover:bg-light transition-colors',
                      language === l.code ?
                      'text-secondary font-semibold' :
                      'text-dark'
                    )}>

                      {l.nativeLabel}
                    </button>
                  )}
                  </div>
                }
              </div>
            </div>

            <Link
              to="/contact"
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                isTransparent ?
                'bg-white text-primary hover:bg-white/90' :
                'bg-primary text-white hover:bg-primary/90'
              )}>

              {t('planMyTrip')}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            'lg:hidden z-50 p-2 -mr-2 transition-colors',
            isTransparent && !isMobileMenuOpen ? 'text-white' : 'text-primary'
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">
          
          {isMobileMenuOpen ?
          <XIcon className="w-6 h-6" /> :

          <MenuIcon className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden pt-24 px-6 flex flex-col',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
        
        <nav className="flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className="text-dark hover:text-primary transition-colors border-b border-gray-100 pb-4">
            
              {link.name}
            </Link>
          )}
          <Link
            to="/hotels"
            className="text-dark hover:text-primary transition-colors border-b border-gray-100 pb-4">
            
            Hotels & Stays
          </Link>
          <Link
            to="/travel-guide"
            className="text-dark hover:text-primary transition-colors border-b border-gray-100 pb-4">
            
            Travel Guide
          </Link>
          <Link
            to="/about"
            className="text-dark hover:text-primary transition-colors border-b border-gray-100 pb-4">
            
            About Us
          </Link>
          <Link
            to="/testimonials"
            className="text-dark hover:text-primary transition-colors border-b border-gray-100 pb-4">
            
            Testimonials
          </Link>
          <Link
            to="/faq"
            className="text-dark hover:text-primary transition-colors border-b border-gray-100 pb-4">
            
            FAQ
          </Link>
        </nav>
        <div className="mt-auto mb-8 flex flex-col gap-4">
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-dark font-medium">{t('currency')}</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="bg-transparent text-dark font-medium outline-none">
              {Object.values(CURRENCIES).map((c) =>
              <option key={c.code} value={c.code}>
                  {c.symbol} {c.code}
                </option>
              )}
            </select>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-dark font-medium">{t('language')}</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="bg-transparent text-dark font-medium outline-none">
              {Object.values(LANGUAGES).map((l) =>
              <option key={l.code} value={l.code}>
                  {l.nativeLabel}
                </option>
              )}
            </select>
          </div>
          <Link
            to="/contact"
            className="w-full py-4 rounded-full bg-primary text-white text-center font-semibold mt-4">

            {t('planMyTrip')}
          </Link>
        </div>
      </div>
    </header>);

}