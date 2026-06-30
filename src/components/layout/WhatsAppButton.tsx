import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-50 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp">
      
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <MessageCircleIcon className="w-7 h-7 relative z-10" />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-dark text-sm font-medium rounded-lg shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        Chat with a Travel Expert
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
      </div>
    </a>);

}