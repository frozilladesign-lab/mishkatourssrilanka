import React, { useEffect, useState, createContext, useContext } from 'react';
interface PersonalizationContextType {
  savedSlugs: string[];
  toggleSaved: (slug: string) => void;
  isSaved: (slug: string) => boolean;
  compareSlugs: string[];
  toggleCompare: (slug: string) => void;
  isComparing: (slug: string) => boolean;
  recentlyViewedSlugs: string[];
  addRecentlyViewed: (slug: string) => void;
}
const PersonalizationContext = createContext<
  PersonalizationContextType | undefined>(
  undefined);
export function PersonalizationProvider({
  children


}: {children: React.ReactNode;}) {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  const [recentlyViewedSlugs, setRecentlyViewedSlugs] = useState<string[]>([]);
  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ceylon_saved');
      const compare = localStorage.getItem('ceylon_compare');
      const recent = localStorage.getItem('ceylon_recent');
      if (saved) setSavedSlugs(JSON.parse(saved));
      if (compare) setCompareSlugs(JSON.parse(compare));
      if (recent) setRecentlyViewedSlugs(JSON.parse(recent));
    } catch (e) {
      console.error('Failed to load personalization data', e);
    }
  }, []);
  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('ceylon_saved', JSON.stringify(savedSlugs));
  }, [savedSlugs]);
  useEffect(() => {
    localStorage.setItem('ceylon_compare', JSON.stringify(compareSlugs));
  }, [compareSlugs]);
  useEffect(() => {
    localStorage.setItem('ceylon_recent', JSON.stringify(recentlyViewedSlugs));
  }, [recentlyViewedSlugs]);
  const toggleSaved = (slug: string) => {
    setSavedSlugs((prev) =>
    prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };
  const isSaved = (slug: string) => savedSlugs.includes(slug);
  const toggleCompare = (slug: string) => {
    setCompareSlugs((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) {
        alert('You can only compare up to 3 tours at a time.');
        return prev;
      }
      return [...prev, slug];
    });
  };
  const isComparing = (slug: string) => compareSlugs.includes(slug);
  const addRecentlyViewed = (slug: string) => {
    setRecentlyViewedSlugs((prev) => {
      const filtered = prev.filter((s) => s !== slug);
      return [slug, ...filtered].slice(0, 8);
    });
  };
  return (
    <PersonalizationContext.Provider
      value={{
        savedSlugs,
        toggleSaved,
        isSaved,
        compareSlugs,
        toggleCompare,
        isComparing,
        recentlyViewedSlugs,
        addRecentlyViewed
      }}>
      
      {children}
    </PersonalizationContext.Provider>);

}
export function usePersonalization() {
  const context = useContext(PersonalizationContext);
  if (context === undefined) {
    throw new Error(
      'usePersonalization must be used within a PersonalizationProvider'
    );
  }
  return context;
}