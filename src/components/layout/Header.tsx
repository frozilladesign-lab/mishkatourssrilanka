import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MenuIcon, XIcon, GlobeIcon, ChevronDownIcon, ChevronRightIcon,
  HomeIcon, MapIcon, CompassIcon, StarIcon, CalendarIcon, TagIcon,
  BedDoubleIcon, BookOpenIcon, InfoIcon, MessageCircleIcon, HelpCircleIcon,
  InstagramIcon, FacebookIcon
} from 'lucide-react';
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
  const { currency, setCurrency, language, setLanguage, t } = usePreferences();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) setIsCurrencyOpen(false);
      if (languageRef.current && !languageRef.current.contains(e.target as Node)) setIsLanguageOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: t('home'), path: '/', icon: HomeIcon },
    { name: t('tours'), path: '/tours', icon: MapIcon },
    { name: t('destinations'), path: '/destinations', icon: CompassIcon },
    { name: t('experiences'), path: '/experiences', icon: StarIcon },
    { name: t('tripPlanner'), path: '/trip-planner', icon: CalendarIcon },
    { name: t('offers'), path: '/offers', icon: TagIcon },
  ];

  const moreLinks = [
    { name: t('hotelsStays'), path: '/hotels', icon: BedDoubleIcon },
    { name: t('travelGuide'), path: '/travel-guide', icon: BookOpenIcon },
    { name: t('aboutUs'), path: '/about', icon: InfoIcon },
    { name: t('testimonials'), path: '/testimonials', icon: MessageCircleIcon },
    { name: t('faq'), path: '/faq', icon: HelpCircleIcon },
  ];

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  const activePath = location.pathname;

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isTransparent ? 'bg-transparent py-4 md:py-6' : 'bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-4 border-gray-100'
      )}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className={cn('rounded-xl px-2 py-1.5 transition-all duration-300', isTransparent ? 'bg-white/95 shadow-md' : '')}>
              <img src="/logo.png" alt="Mishka Tours Sri Lanka" className="h-9 md:h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path}
                  className={cn('text-sm font-medium transition-colors hover:opacity-70',
                    isTransparent ? 'text-white' : 'text-dark hover:text-primary')}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              <div className={cn('flex items-center gap-3 text-sm font-medium', isTransparent ? 'text-white' : 'text-dark')}>
                {/* Currency */}
                <div className="relative" ref={currencyRef}>
                  <button onClick={() => { setIsCurrencyOpen(v => !v); setIsLanguageOpen(false); }}
                    className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                    {CURRENCIES[currency].symbol} {currency} <ChevronDownIcon className="w-3 h-3" />
                  </button>
                  {isCurrencyOpen && (
                    <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-lift border border-gray-100 py-2 z-50">
                      {Object.values(CURRENCIES).map(c => (
                        <button key={c.code} onClick={() => { setCurrency(c.code as CurrencyCode); setIsCurrencyOpen(false); }}
                          className={cn('w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-light transition-colors',
                            currency === c.code ? 'text-secondary font-semibold' : 'text-dark')}>
                          <span>{c.symbol} {c.code}</span>
                          <span className="text-xs text-dark/50">{c.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* Language */}
                <div className="relative" ref={languageRef}>
                  <button onClick={() => { setIsLanguageOpen(v => !v); setIsCurrencyOpen(false); }}
                    className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                    <GlobeIcon className="w-4 h-4" /> {language.toUpperCase()} <ChevronDownIcon className="w-3 h-3" />
                  </button>
                  {isLanguageOpen && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lift border border-gray-100 py-2 z-50">
                      {Object.values(LANGUAGES).map(l => (
                        <button key={l.code} onClick={() => { setLanguage(l.code as LanguageCode); setIsLanguageOpen(false); }}
                          className={cn('w-full text-left px-4 py-2 text-sm hover:bg-light transition-colors',
                            language === l.code ? 'text-secondary font-semibold' : 'text-dark')}>
                          {l.nativeLabel}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <Link to="/contact"
                className={cn('px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                  isTransparent ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-white hover:bg-primary/90')}>
                {t('planMyTrip')}
              </Link>
            </div>
          </nav>

          {/* Mobile: right side — currency chip + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn('p-2.5 rounded-xl transition-colors', isTransparent ? 'text-white' : 'text-primary')}
              aria-label="Open menu">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full-screen branded overlay */}
      <div className={cn(
        'fixed inset-0 z-[60] lg:hidden transition-opacity duration-300',
        isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none opacity-0'
      )}>
        {/* Backdrop */}
        <div
          className={cn('absolute inset-0 bg-dark/60 backdrop-blur-sm transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0')}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div className={cn(
          'absolute right-0 top-0 bottom-0 w-[85vw] max-w-xs bg-primary flex flex-col transition-transform duration-300 ease-out shadow-2xl',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          {/* Header row */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.png" alt="Mishka Tours" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable nav content */}
          <div className="flex-1 overflow-y-auto py-4">
            {/* Main nav links */}
            <div className="px-3 mb-2">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider px-3 mb-2">{t('home') === 'Главная' ? 'Навигация' : 'Navigation'}</p>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activePath === link.path;
                return (
                  <Link key={link.path} to={link.path}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3.5 rounded-xl mb-1 transition-colors',
                      isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                    )}>
                    <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', isActive ? 'bg-accent' : 'bg-white/10')}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium flex-1">{link.name}</span>
                    <ChevronRightIcon className="w-4 h-4 text-white/30" />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mx-5 my-3 border-t border-white/10" />

            {/* More links */}
            <div className="px-3 mb-2">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider px-3 mb-2">{t('home') === 'Главная' ? 'Ещё' : 'More'}</p>
              {moreLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activePath === link.path;
                return (
                  <Link key={link.path} to={link.path}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition-colors',
                      isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                    )}>
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium flex-1">{link.name}</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 text-white/30" />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mx-5 my-3 border-t border-white/10" />

            {/* Currency & Language */}
            <div className="px-5 mb-4">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">{t('currency')} & {t('language')}</p>

              <div className="mb-3">
                <p className="text-white/60 text-xs mb-2">{t('currency')}</p>
                <div className="flex gap-2 flex-wrap">
                  {Object.values(CURRENCIES).map(c => (
                    <button key={c.code} onClick={() => setCurrency(c.code as CurrencyCode)}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-sm font-medium transition-all border',
                        currency === c.code
                          ? 'bg-accent text-white border-accent'
                          : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'
                      )}>
                      {c.symbol} {c.code}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-white/60 text-xs mb-2">{t('language')}</p>
                <div className="flex gap-2">
                  {Object.values(LANGUAGES).map(l => (
                    <button key={l.code} onClick={() => setLanguage(l.code as LanguageCode)}
                      className={cn(
                        'px-4 py-1.5 rounded-full text-sm font-medium transition-all border flex-1',
                        language === l.code
                          ? 'bg-secondary text-white border-secondary'
                          : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'
                      )}>
                      {l.nativeLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA + Social */}
          <div className="px-5 pb-8 pt-4 border-t border-white/10 space-y-3">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 bg-accent text-white rounded-full font-semibold text-center block hover:bg-accent/90 transition-colors">
              {t('planMyTrip')}
            </Link>
            <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] text-white rounded-full font-semibold text-center block hover:bg-[#1ebe5d] transition-colors text-sm">
              WhatsApp
            </a>
            {/* Social */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="https://www.instagram.com/mishka_tours_srilanka" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/1JJLD4vVpM/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@mishka_tours_srilanka" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.25 8.25 0 0 0 4.83 1.56V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
