import React from 'react';
import { useLocation } from 'react-router-dom';
export function PlaceholderPage() {
  const location = useLocation();
  const pathName = location.pathname.split('/').filter(Boolean).pop() || '';
  const title =
  pathName.charAt(0).toUpperCase() + pathName.slice(1).replace(/-/g, ' ');
  return (
    <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
        {title || 'Page'}
      </h1>
      <p className="text-lg text-dark/70 max-w-xl mx-auto mb-8">
        This section is currently under construction. We're crafting a premium
        experience for you.
      </p>
      <div className="inline-flex items-center justify-center px-8 py-3 bg-primary/5 text-primary rounded-full font-medium">
        Coming Soon
      </div>
    </div>);

}