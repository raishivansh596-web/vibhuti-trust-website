import React from 'react';
import { GraduationCap, HeartPulse, Sprout, Trees, CheckCircle2, Heart, ArrowRight } from 'lucide-react';
import { TRUST_CONFIG } from '../data/contentConfig';
import SEOHead from '../components/SEOHead';
import { getLocalImages } from '../utils/imageLoader';

const ICON_MAP = {
  GraduationCap: GraduationCap,
  HeartPulse: HeartPulse,
  Sprout: Sprout,
  Trees: Trees
};

export default function Programs({ setActivePage, setSelectedProgramForDonate }) {
  const { byCategory } = getLocalImages();

  const handleSupportProgram = (programId) => {
    if (setSelectedProgramForDonate) {
      setSelectedProgramForDonate(programId);
    }
    setActivePage('donate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      <SEOHead 
        title="हमारे सेवा क्षेत्र एवं कार्यक्रम" 
        description="विभूति नारायण मेमोरियल ट्रस्ट के 4 मुख्य सेवा क्षेत्र: प्राथमिक शिक्षा सहायता, ग्रामीण स्वास्थ्य शिविर, महिला सिलाई-कढ़ाई प्रशिक्षण एवं पर्यावरण वृक्षारोपण।"
      />

      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-[#FAF4EC] to-[#FFF8F0] py-12 md:py-16 border-b border-[#E86A17]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            जमीनी स्तर पर प्रत्यक्ष सेवा कार्य
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#800020]">
            सेवा संकल्प के चार मुख्य आयाम
          </h1>
          <p className="text-base sm:text-lg text-[#2C1E16]/80 max-w-2xl mx-auto">
            शिक्षा, स्वास्थ्य, महिला आजीविका एवं पर्यावरण संरक्षण के माध्यम से गाजीपुर क्षेत्र का सर्वांगीण विकास।
          </p>
        </div>
      </section>

      {/* DETAILED PROGRAM SECTIONS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {TRUST_CONFIG.programs.map((program, index) => {
          const IconComp = ICON_MAP[program.iconName] || GraduationCap;
          const categoryImages = byCategory[program.id] || [];

          return (
            <section 
              key={program.id} 
              id={program.id}
              className="warm-card rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 bottom-0 w-2"
                style={{ backgroundColor: program.color || '#E86A17' }}
              ></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: program.color || '#E86A17' }}
                    >
                      <IconComp className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E86A17]">
                        सेवा स्तंभ #{index + 1}
                      </span>
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#800020]">
                        {program.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-[#2C1E16]/85 leading-relaxed">
                    {program.fullDesc}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-3 bg-[#FAF4EC] p-5 rounded-2xl border border-[#E86A17]/15">
                    <h4 className="font-serif font-semibold text-sm text-[#800020] uppercase tracking-wider">
                      मुख्य उपलब्धियां एवं प्रभाव:
                    </h4>
                    {program.achievements.map((achieve, i) => (
                      <div key={i} className="flex items-start space-x-2 text-sm text-[#2C1E16]">
                        <CheckCircle2 className="w-4 h-4 text-[#E86A17] shrink-0 mt-0.5" />
                        <span>{achieve}</span>
                      </div>
                    ))}
                  </div>

                  {/* Support CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleSupportProgram(program.id)}
                      className="px-6 py-3.5 rounded-full text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
                      style={{ backgroundColor: program.color || '#E86A17' }}
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      <span>{program.title} हेतु सहयोग करें</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Image / Showcase */}
                <div className="lg:col-span-5 space-y-4">
                  {categoryImages.length > 0 ? (
                    <div className="space-y-4">
                      {categoryImages.slice(0, 2).map((img, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-sm bg-[#FAF4EC]">
                          <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="p-3 text-xs font-medium text-[#800020] bg-white border-t border-[#FAF4EC]">
                            {img.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-64 rounded-2xl bg-[#FAF4EC] border-2 border-dashed border-[#E86A17]/30 flex flex-col items-center justify-center p-6 text-center">
                      <IconComp className="w-12 h-12 text-[#E86A17]/40 mb-2" />
                      <h4 className="font-serif font-semibold text-sm text-[#800020]">तस्वीरें शीघ्र उपलब्ध होंगी</h4>
                      <p className="text-xs text-[#2C1E16]/60 mt-1">
                        <code className="text-[#E86A17]">src/assets/images/{program.id}/</code> फोल्डर में फोटो डालें।
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
