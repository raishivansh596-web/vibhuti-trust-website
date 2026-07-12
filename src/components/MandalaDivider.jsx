import React from 'react';

/**
 * MandalaDivider - Tasteful traditional Indian divider component
 */
export default function MandalaDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
      <div className="mx-3 flex items-center justify-center text-[#E86A17] opacity-90">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="6" fill="#800020" opacity="0.15" />
          <path d="M12 4V20 M4 12H20 M6.34 6.34L17.66 17.66 M6.34 17.66L17.66 6.34" stroke="#E86A17" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill="#E86A17" />
        </svg>
      </div>
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
    </div>
  );
}
