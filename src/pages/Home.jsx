import React, { useState } from 'react';
import { Heart, Users, Shield, ArrowRight, Quote, Award, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TRUST_CONFIG } from '../data/contentConfig';
import ProgramCard from '../components/ProgramCard';
import MandalaDivider from '../components/MandalaDivider';
import SEOHead from '../components/SEOHead';
import { getFeaturedImages } from '../utils/imageLoader';

export default function Home({ setActivePage, setSelectedProgramForDonate }) {
  const featuredImages = getFeaturedImages(4);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = TRUST_CONFIG.testimonials;

  const handleProgramDonate = (programId) => {
    if (setSelectedProgramForDonate) {
      setSelectedProgramForDonate(programId);
    }
    setActivePage('donate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="space-y-16 pb-16">
      <SEOHead 
        title="मुख्य पृष्ठ" 
        description="विभूति नारायण मेमोरियल ट्रस्ट - रामगढ़, ग़ाज़ीपुर (उत्तर प्रदेश)। हाल ही में संपन्न कंबल वितरण एवं बच्चों को नि:शुल्क किताब-कॉपी सहायता अभियान।"
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#FFF8F0] via-[#FAF4EC] to-[#FFF8F0]">
        <div className="absolute inset-0 opacity-10 pointer-events-none mandala-bg"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#E86A17]/10 border border-[#E86A17]/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#800020] animate-fadeIn">
              <Award className="w-4 h-4 text-[#E86A17]" />
              <span>पंजीकृत सामाजिक न्यास • रामगढ़, ग़ाज़ीपुर (उत्तर प्रदेश)</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-[#800020] leading-tight sm:leading-tight">
              नर सेवा ही नारायण सेवा: <span className="gold-gradient-text">जनसेवा की एक विनम्र शुरुआत</span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-xl text-[#2C1E16]/80 font-normal leading-relaxed max-w-3xl mx-auto">
              रामगढ़ (ग़ाज़ीपुर) में हाल ही में असहायों को कंबल वितरण एवं बच्चों को नि:शुल्क किताब-कॉपी सहायता के साथ शुरू हुआ एक सच्चा और ईमानदारी भरा प्रयास।
            </p>

            {/* Dual Call-to-Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setActivePage('donate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E86A17] to-[#D05A0E] text-white font-medium text-base shadow-lg hover:shadow-xl hover:from-[#D05A0E] hover:to-[#800020] transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5 fill-white animate-pulse" />
                <span>सेवा अभियान में सहयोग करें</span>
              </button>

              <button
                onClick={() => {
                  setActivePage('volunteer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-[#800020] text-[#800020] font-medium text-base hover:bg-[#800020] hover:text-white transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>स्वयंसेवक के रूप में जुड़ें</span>
              </button>
            </div>

            {/* Quick Tax Exemption Notice */}
            <div className="pt-2 text-xs text-[#2C1E16]/70 flex items-center justify-center gap-1.5">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>विभूति नारायण मेमोरियल ट्रस्ट • पूर्ण पारदर्शिता एवं प्रामाणिक जनसेवा</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF INTRO ABOUT THE TRUST */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="warm-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E86A17]/5 rounded-full blur-2xl"></div>
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest block mb-2">
            विभूति नारायण मेमोरियल ट्रस्ट का वास्तविक परिचय
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#800020] mb-6">
            छोटे-छोटे प्रयासों से बड़े बदलाव की ओर कदम
          </h2>
          <p className="text-base text-[#2C1E16]/80 leading-relaxed max-w-3xl mx-auto mb-4">
            हाल ही में हमने रामगढ़, ग़ाज़ीपुर (उत्तर प्रदेश) में विभूति नारायण मेमोरियल ट्रस्ट के माध्यम से जनसेवा का यह प्रयास शुरू किया है। संस्थापक एवं प्रबन्ध न्यासी **श्री आलोक कुमार राय** के मार्गदर्शन में हाल ही में कड़ाके की ठंड में जरूरतमंदों को **गर्म कंबल वितरण** एवं गांव के निर्धन बच्चों को पढ़ाई हेतु **किताबें व कॉपी वितरण** का कार्य सफलतापूर्वक संपन्न किया गया।
          </p>
          <p className="text-base text-[#2C1E16]/80 leading-relaxed max-w-3xl mx-auto">
            हमारा कोई बड़ा आडंबर या झूठा दावा नहीं है; हम पूरी ईमानदारी, विनम्रता और समर्पण के साथ कदम दर कदम ग्रामीण समाज की सेवा के लिए आगे बढ़ रहे हैं।
          </p>

          <div className="mt-8">
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-[#800020] font-semibold hover:text-[#E86A17] transition-colors border-b-2 border-[#D4AF37] pb-1"
            >
              <span>हमारे संकल्प और संस्थापक के बारे में पढ़ें</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <MandalaDivider />

      {/* 4 CORE FOCUS AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            सेवा संकल्प एवं हालिया अभियान
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#800020] mt-2">
            हमारे जमीनी कार्य एवं भावी दिशा
          </h2>
          <p className="text-sm sm:text-base text-[#2C1E16]/75 mt-3">
            हाल ही में संपन्न सिलाई/राशन/कंबल वितरण व किताब-कॉपी सहायता अभियान।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_CONFIG.programs.map((prog) => (
            <ProgramCard
              key={prog.id}
              program={prog}
              onDonateClick={handleProgramDonate}
            />
          ))}
        </div>
      </section>

      {/* IMPACT STATS STRIP */}
      <section className="bg-gradient-to-r from-[#800020] via-[#9B1B30] to-[#800020] text-white py-14 shadow-inner relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#D4AF37]/30">
            {TRUST_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="pt-6 lg:pt-0 px-4">
                <div className="font-serif font-bold text-3xl sm:text-4xl text-[#D4AF37] mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-base text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#FAF4EC]/75">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
              सेवा अभियानों की झलकियाँ
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#800020] mt-1">
              फोटो गैलरी पूर्वावलोकन
            </h2>
          </div>
          <button
            onClick={() => {
              setActivePage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-full bg-[#FAF4EC] border border-[#E86A17] text-[#800020] font-medium text-sm hover:bg-[#E86A17] hover:text-white transition-colors flex items-center gap-2"
          >
            <span>गैलरी में सभी तस्वीरें देखें</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Image Cards */}
        {featuredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  setActivePage('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="warm-card rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="h-48 overflow-hidden bg-[#FAF4EC] relative">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                    गैलरी खोलने के लिए क्लिक करें
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E86A17]">
                    {img.category}
                  </span>
                  <h4 className="font-serif font-medium text-sm text-[#800020] truncate mt-0.5">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="warm-card rounded-2xl p-8 text-center text-[#2C1E16]/70">
            <p className="text-sm">अपनी फोटो <code className="text-[#E86A17]">src/assets/images/</code> फोल्डर में रखें।</p>
          </div>
        )}
      </section>

      {/* FOUNDER'S HONEST MESSAGE & VILLAGE EXPRESSIONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="warm-card rounded-3xl p-8 md:p-12 relative overflow-hidden border-2 border-[#D4AF37]/40">
          <Quote className="w-16 h-16 text-[#E86A17]/15 absolute top-6 right-8 pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>

            <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest block">
              संस्थापक का संदेश एवं ग्रामीण उद्गार ({activeTestimonial + 1} / {testimonials.length})
            </span>
            
            <div className="min-h-[120px] flex flex-col justify-center transition-all duration-300">
              {testimonials[activeTestimonial].image && (
                <div className="mb-4 max-w-[180px] w-full mx-auto">
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-xl border-2 border-[#D4AF37] shadow-md bg-[#FAF4EC]">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
              <p className="font-serif italic text-lg sm:text-xl text-[#800020] leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>
              
              <div className="mt-6">
                <h4 className="font-bold text-base text-[#2C1E16]">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-xs text-[#E86A17] font-medium mt-0.5">
                  {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                </p>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="pt-4 flex items-center justify-center space-x-4">
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-full bg-[#FAF4EC] hover:bg-[#E86A17] hover:text-white text-[#800020] border border-[#E86A17]/30 flex items-center justify-center transition-colors shadow-sm"
                aria-label="पिछला संदेश"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeTestimonial === idx ? 'w-8 bg-[#E86A17]' : 'w-2.5 bg-[#D4AF37]/40 hover:bg-[#E86A17]/60'
                    }`}
                    aria-label={`संदेश #${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-full bg-[#FAF4EC] hover:bg-[#E86A17] hover:text-white text-[#800020] border border-[#E86A17]/30 flex items-center justify-center transition-colors shadow-sm"
                aria-label="अगला संदेश"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
