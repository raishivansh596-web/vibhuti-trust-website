import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ image, onClose, onNext, onPrev, hasNext, hasPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-[#E86A17] p-3 rounded-full transition-all duration-300 z-50 hover:rotate-90 cursor-pointer shadow-lg"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        {/* Image Card Wrap */}
        <div className="relative bg-[#2C1E16]/30 rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl max-w-full">
          <img
            src={image.src}
            alt={image.title || "Trust Activity Photo"}
            className="max-w-full max-h-[65vh] md:max-h-[70vh] object-contain mx-auto"
          />
        </div>

        {/* Text Details */}
        <div className="mt-5 text-center text-[#FFF8F0] max-w-2xl px-4 space-y-2">
          {image.categoryHindi && (
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E86A17] bg-[#E86A17]/10 px-3 py-1 rounded-full border border-[#E86A17]/20">
              {image.categoryHindi}
            </span>
          )}
          <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#D4AF37] leading-snug">
            {image.title}
          </h4>
          {image.caption && (
            <p className="text-sm sm:text-base text-[#FAF4EC]/90 leading-relaxed font-light">
              {image.caption}
            </p>
          )}
        </div>

        {/* Left Arrow */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-[#E86A17] p-2.5 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10 cursor-pointer shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Right Arrow */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-[#E86A17] p-2.5 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10 cursor-pointer shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}
      </div>
    </div>
  );
}
