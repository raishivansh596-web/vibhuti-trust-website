import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { TRUST_CONFIG } from '../data/contentConfig';
import SEOHead from '../components/SEOHead';

const FacebookIcon = () => (
  <svg className="w-4 h-4 text-[#E86A17]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 text-[#E86A17]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 text-[#E86A17]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'पूरा नाम दर्ज करना अनिवार्य है';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'वैध ईमेल आईडी दर्ज करें';
    if (!formData.subject.trim()) newErrors.subject = 'विषय (Subject) दर्ज करें';
    if (!formData.message.trim()) newErrors.message = 'संदेश सामग्री दर्ज करें';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1000);
  };

  return (
    <div className="space-y-12 pb-16">
      <SEOHead 
        title="संपर्क करें" 
        description="विभूति नारायण मेमोरियल ट्रस्ट (रामगढ़, ग़ाज़ीपुर, उत्तर प्रदेश)। संपर्क सूत्र, दूरभाष नंबर, पता एवं संदेश फॉर्म।"
      />

      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-[#FAF4EC] to-[#FFF8F0] py-12 md:py-16 border-b border-[#E86A17]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            सदैव आपकी सेवा में तत्पर
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#800020]">
            संपर्क एवं कार्यालय पता
          </h1>
          <p className="text-base sm:text-lg text-[#2C1E16]/80 max-w-2xl mx-auto">
            सेवा कार्यों, 80G कर रसीद या सामाजिक सहभागिता हेतु हमसे निसंकोच संपर्क करें।
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="warm-card rounded-2xl p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#E86A17]/10 flex items-center justify-center text-[#E86A17] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#800020]">ट्रस्ट पंजीकृत कार्यालय</h4>
                <p className="text-xs text-[#2C1E16]/80 mt-1 leading-relaxed">
                  {TRUST_CONFIG.contact.address}
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="warm-card rounded-2xl p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#800020]/10 flex items-center justify-center text-[#800020] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#800020]">दूरभाष एवं हेल्पलाइन</h4>
                <p className="text-xs text-[#2C1E16]/80 mt-1">
                  मुख्य संपर्क: <strong>{TRUST_CONFIG.contact.phonePrimary}</strong>
                </p>
                <p className="text-xs text-[#2C1E16]/80">
                  व्हाट्सएप: <strong>{TRUST_CONFIG.contact.phonePrimary}</strong>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="warm-card rounded-2xl p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#800020] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#800020]">ईमेल संपर्क</h4>
                <p className="text-xs text-[#2C1E16]/80 mt-1">
                  सामान्य पूछताछ: <strong>{TRUST_CONFIG.contact.emailPrimary}</strong>
                </p>
                <p className="text-xs text-[#2C1E16]/80">
                  दान सहयोग: <strong>{TRUST_CONFIG.contact.emailDonations}</strong>
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="warm-card rounded-2xl p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4EC] flex items-center justify-center text-[#E86A17] shrink-0 border border-[#E86A17]/20">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#800020]">कार्यालय समय</h4>
                <p className="text-xs text-[#2C1E16]/80 mt-1">
                  {TRUST_CONFIG.contact.operatingHours}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="warm-card rounded-2xl p-6 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#800020]">सोशल मीडिया पर जुड़ें</h4>
              <div className="flex items-center space-x-4">
                <a href={TRUST_CONFIG.contact.socialLinks.facebook} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-xs text-[#800020] hover:text-[#E86A17] bg-[#FAF4EC] px-3 py-2 rounded-xl border border-[#E86A17]/20">
                  <FacebookIcon />
                  <span>Facebook</span>
                </a>
                <a href={TRUST_CONFIG.contact.socialLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-xs text-[#800020] hover:text-[#E86A17] bg-[#FAF4EC] px-3 py-2 rounded-xl border border-[#E86A17]/20">
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
                <a href={TRUST_CONFIG.contact.socialLinks.youtube} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-xs text-[#800020] hover:text-[#E86A17] bg-[#FAF4EC] px-3 py-2 rounded-xl border border-[#E86A17]/20">
                  <YoutubeIcon />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            {submitSuccess ? (
              <div className="warm-card rounded-3xl p-8 sm:p-12 text-center space-y-6 animate-fadeIn border-2 border-[#E86A17]">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#E86A17]/15 flex items-center justify-center text-[#E86A17]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-serif font-bold text-3xl text-[#800020]">
                  संदेश सफलतापूर्वक भेजा गया!
                </h3>
                <p className="text-base text-[#2C1E16]/80 max-w-md mx-auto">
                  धन्यवाद <strong>{formData.name}</strong> जी। आपका संदेश प्राप्त हो गया है, हमारी टीम शीघ्र ही आपसे संपर्क करेगी।
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#800020] text-white text-sm font-medium hover:bg-[#E86A17] transition-colors"
                  >
                    अन्य संदेश भेजें
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="warm-card rounded-3xl p-6 sm:p-10 space-y-6">
                <h3 className="font-serif font-bold text-2xl text-[#800020] border-b border-[#E86A17]/20 pb-3">
                  प्रत्यक्ष संदेश भेजें
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#2C1E16] mb-1">आपका नाम *</label>
                    <input
                      type="text"
                      placeholder="जैसे: अनिश कुमार"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C1E16] mb-1">ईमेल पता *</label>
                    <input
                      type="email"
                      placeholder="anish@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C1E16] mb-1">विषय (Subject) *</label>
                  <input
                    type="text"
                    placeholder="जैसे: 80G कर रसीद / सामाजिक सहभागिता संबंध में"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                  />
                  {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C1E16] mb-1">संदेश सामग्री *</label>
                  <textarea
                    rows={5}
                    placeholder="अपना विस्तृत संदेश यहाँ लिखें..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E86A17] to-[#D05A0E] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'संदेश भेजा जा रहा है...' : 'अभी संदेश प्रेषित करें'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* EMBEDDED GOOGLE MAP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="warm-card rounded-3xl overflow-hidden p-2 border-2 border-[#D4AF37]/40">
          <div className="p-3 bg-[#FAF4EC] rounded-t-2xl border-b border-[#E86A17]/20 flex items-center justify-between text-xs text-[#800020] font-semibold">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E86A17]" />
              <span>मानचित्र स्थान — रामगढ़, ग़ाज़ीपुर (उत्तर प्रदेश)</span>
            </span>
            <span className="text-[11px] text-[#2C1E16]/60">contentConfig.js में संपादन योग्य</span>
          </div>
          <div className="h-80 w-full bg-[#FFF8F0]">
            <iframe
              title="विभूति नारायण मेमोरियल ट्रस्ट कार्यालय स्थान"
              src={TRUST_CONFIG.contact.mapIframeUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
