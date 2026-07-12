/**
 * विभूति नारायण मेमोरियल ट्रस्ट - गैलरी कंपोनेंट (Hindi Version)
 * 
 * न्यासी / व्यवस्थापक निर्देश:
 * नया फोटो जोड़ने के लिए किसी कोड में बदलाव की आवश्यकता नहीं है!
 * अपनी फोटो फाइलें (.jpg, .jpeg, .png, .webp) संबंधित फोल्डर में रखें:
 * 
 *   - शिक्षा फोटो      -> src/assets/images/education/
 *   - स्वास्थ्य फोटो     -> src/assets/images/healthcare/
 *   - आजीविका फोटो     -> src/assets/images/livelihood/
 *   - पर्यावरण फोटो     -> src/assets/images/environment/
 *   - कार्यक्रम फोटो     -> src/assets/images/events/
 */

import React, { useState } from 'react';
import { Image as ImageIcon, FolderPlus, Eye } from 'lucide-react';
import LightboxModal from '../components/LightboxModal';
import SEOHead from '../components/SEOHead';
import { getLocalImages } from '../utils/imageLoader';

export default function Gallery() {
  const { byCategory, all } = getLocalImages();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'सभी तस्वीरें', count: all.length },
    { id: 'education', label: 'शिक्षा सहायता', count: (byCategory.education || []).length },
    { id: 'healthcare', label: 'स्वास्थ्य शिविर', count: (byCategory.healthcare || []).length },
    { id: 'livelihood', label: 'सिलाई व आजीविका', count: (byCategory.livelihood || []).length },
    { id: 'environment', label: 'वृक्षारोपण व पर्यावरण', count: (byCategory.environment || []).length },
    { id: 'events', label: 'कार्यक्रम व वितरण', count: (byCategory.events || []).length },
  ];

  const currentImages = activeTab === 'all' 
    ? all 
    : (byCategory[activeTab] || []);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < currentImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <SEOHead 
        title="चित्र वीथिका (गैलरी)" 
        description="विभूति नारायण मेमोरियल ट्रस्ट (रामगढ़, ग़ाज़ीपुर) के सेवा कार्यों की तस्वीरें - प्राथमिक शिक्षा, स्वास्थ्य शिविर, महिला सिलाई प्रशिक्षण व वृक्षारोपण।"
      />

      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-[#FAF4EC] to-[#FFF8F0] py-12 md:py-16 border-b border-[#E86A17]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            सेवा कार्यों के चित्रमय संस्मरण
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#800020]">
            चित्र वीथिका (गैलरी)
          </h1>
          <p className="text-base sm:text-lg text-[#2C1E16]/80 max-w-2xl mx-auto">
            ग्रामीण समाज में सेवा, स्वास्थ्य व शिक्षा अभियानों की प्रामाणिक झलकियाँ।
          </p>
        </div>
      </section>

      {/* FOLDER INSTRUCTION BANNER FOR TRUST ADMINS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF4EC] border-2 border-dashed border-[#E86A17]/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2C1E16]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#E86A17]/15 flex items-center justify-center text-[#E86A17] shrink-0">
              <FolderPlus className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-[#800020] font-semibold block">ट्रस्ट फोटो फोल्डर गाइड:</strong>
              नया फोटो देखने के लिए अपनी इमेज फाइल्स को <code className="bg-white px-2 py-0.5 rounded border border-[#E86A17]/30 text-[#800020] font-mono">src/assets/images/{'{श्रेणी}'}/</code> फोल्डर में रखें।
            </div>
          </div>
          <span className="bg-[#E86A17] text-white px-3 py-1 rounded-full font-medium shrink-0">
            ऑटो-सिंक सक्रिय
          </span>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeTab === cat.id
                  ? 'bg-[#800020] text-white shadow-md'
                  : 'bg-white text-[#2C1E16] hover:bg-[#E86A17]/10 hover:text-[#800020] border border-[#E86A17]/20'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[11px] px-2 py-0.2 rounded-full ${
                activeTab === cat.id ? 'bg-[#D4AF37] text-[#800020]' : 'bg-[#FAF4EC] text-[#800020]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {currentImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative flex flex-col bg-white rounded-2xl border border-[#E86A17]/10 hover:border-[#E86A17]/35 shadow-sm hover:shadow-xl transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 overflow-hidden"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-[#FAF4EC] relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white space-x-2">
                    <Eye className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-xs font-semibold tracking-wide">बड़ा करके देखें</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-grow flex flex-col bg-white border-t border-[#FAF4EC]">
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#E86A17] block mb-1.5">
                      {image.categoryHindi}
                    </span>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#800020] mb-2 leading-snug">
                      {image.title}
                    </h4>
                    {image.caption && (
                      <p className="text-xs sm:text-sm text-[#2C1E16]/85 leading-relaxed line-clamp-2">
                        {image.caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* FALLBACK CARD IF NO PHOTOS IN FOLDER */
          <div className="warm-card rounded-3xl p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF4EC] border-2 border-dashed border-[#E86A17]/40 flex items-center justify-center text-[#E86A17]">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#800020]">तस्वीरें शीघ्र उपलब्ध होंगी</h3>
            <p className="text-sm text-[#2C1E16]/75">
              <code className="text-[#E86A17] font-semibold">src/assets/images/{activeTab}/</code> फोल्डर में अभी कोई फोटो नहीं रखी गई है।
            </p>
          </div>
        )}
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <LightboxModal
          image={currentImages[selectedImageIndex]}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedImageIndex < currentImages.length - 1}
          hasPrev={selectedImageIndex > 0}
        />
      )}
    </div>
  );
}
