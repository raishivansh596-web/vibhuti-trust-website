/**
 * विभूति नारायण मेमोरियल ट्रस्ट - स्वयंसेवक पंजीकरण कंपोनेंट (Hindi Version)
 * 
 * डेवलपर्स हेतु निर्देश:
 * यह कंपोनेंट फॉर्म सबमिशन पर क्लाइंट-साइड स्टेट दिखाता है।
 * बैकएंड या ईमेल सेवा जोड़ने हेतु `handleVolunteerSubmit` फ़ंक्शन को अपनी API से जोड़ें।
 */

import React, { useState } from 'react';
import { Users, CheckCircle2, AlertCircle, Send, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interests: [],
    availability: 'weekends',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const focusAreaOptions = [
    { id: 'education', label: 'नि:शुल्क शिक्षण व बच्चों का मार्गदर्शन' },
    { id: 'healthcare', label: 'स्वास्थ्य शिविर व नेत्र जांच सहायता' },
    { id: 'livelihood', label: 'महिला सिलाई प्रशिक्षण व कौशल विकास' },
    { id: 'environment', label: 'वृक्षारोपण व स्वच्छता चेतना अभियान' },
    { id: 'events', label: 'कार्यक्रम प्रबंधन व सामग्री वितरण' }
  ];

  const handleInterestToggle = (id) => {
    let updated = [...formData.interests];
    if (updated.includes(id)) {
      updated = updated.filter(item => item !== id);
    } else {
      updated.push(id);
    }
    setFormData({ ...formData, interests: updated });
    setErrors({ ...errors, interests: null });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'पूरा नाम दर्ज करना अनिवार्य है';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'वैध ईमेल आईडी दर्ज करें';
    if (!formData.phone.trim() || !/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = '10 अंकों का वैध फोन नंबर दर्ज करें';
    }
    if (!formData.city.trim()) newErrors.city = 'शहर / स्थान दर्ज करें';
    if (formData.interests.length === 0) newErrors.interests = 'कम से कम एक रुचि का क्षेत्र चुनें';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVolunteerSubmit = (e) => {
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
        title="स्वयंसेवक बनें" 
        description="विभूति नारायण मेमोरियल ट्रस्ट (रामगढ़, ग़ाज़ीपुर) में स्वयंसेवक के रूप में जुड़ें। शिक्षण, स्वास्थ्य शिविरों, एवं समाज सेवा में अपना योगदान दें।"
      />

      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-[#FAF4EC] to-[#FFF8F0] py-12 md:py-16 border-b border-[#E86A17]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            प्रत्यक्ष समाज सेवा का अवसर
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#800020]">
            स्वयंसेवक पंजीकरण
          </h1>
          <p className="text-base sm:text-lg text-[#2C1E16]/80 max-w-2xl mx-auto">
            अपने ज्ञान, समय व संवेदना से ग्रामीण बच्चों एवं जरूरतमंदों के जीवन में उजाला लाएं।
          </p>
        </div>
      </section>

      {/* WHY VOLUNTEER SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="warm-card rounded-3xl p-6 sm:p-8 space-y-5 border-t-4 border-[#800020]">
              <div className="w-12 h-12 rounded-2xl bg-[#800020]/10 flex items-center justify-center text-[#800020]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#800020]">
                विभूति नारायण ट्रस्ट से क्यों जुड़ें?
              </h3>
              <p className="text-sm text-[#2C1E16]/80 leading-relaxed">
                स्वयंसेवक बनना केवल सहायता करना नहीं, बल्कि ग्रामीण जीवन व भारतीय संस्कृति से सीधा जुड़ाव स्थापित करना है।
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-2 text-sm text-[#2C1E16]">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A17] shrink-0 mt-0.5" />
                  <span>सुविधानुसार समय: सप्ताहांत शिविरों, शिक्षण या सामग्री वितरण में सहभागिता।</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-[#2C1E16]">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A17] shrink-0 mt-0.5" />
                  <span>ट्रस्ट द्वारा आधिकारिक स्वयंसेवक प्रशंसा पत्र (Certificate) प्रदान किया जाएगा।</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-[#2C1E16]">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A17] shrink-0 mt-0.5" />
                  <span>पारंपरिक भारतीय ग्रामीण आत्मीयता व संतुष्टि का अनुभव।</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Volunteer Sign-Up Form */}
          <div className="lg:col-span-7">
            {submitSuccess ? (
              /* SUCCESS MESSAGE CONFIRMATION */
              <div className="warm-card rounded-3xl p-8 sm:p-12 text-center space-y-6 animate-fadeIn border-2 border-[#E86A17]">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#E86A17]/15 flex items-center justify-center text-[#E86A17]">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h3 className="font-serif font-bold text-3xl text-[#800020]">
                  आवेदन सफलता पूर्वक प्राप्त हुआ!
                </h3>
                <p className="text-base text-[#2C1E16]/80 max-w-md mx-auto">
                  आदरणीय <strong>{formData.name}</strong> जी, समाज सेवा हेतु आगे आने के लिए धन्यवाद। हमारी टीम शीघ्र ही आपसे दूरभाष ({formData.phone}) पर संपर्क करेगी।
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        city: '',
                        interests: [],
                        availability: 'weekends',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#800020] text-white text-sm font-medium hover:bg-[#E86A17] transition-colors"
                  >
                    अन्य आवेदन प्रेषित करें
                  </button>
                </div>
              </div>
            ) : (
              /* VOLUNTEER FORM */
              <form onSubmit={handleVolunteerSubmit} className="warm-card rounded-3xl p-6 sm:p-10 space-y-6">
                <h3 className="font-serif font-bold text-2xl text-[#800020] border-b border-[#E86A17]/20 pb-3">
                  स्वयंसेवक आवेदन पत्र
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#2C1E16] mb-1">पूरा नाम *</label>
                    <input
                      type="text"
                      placeholder="जैसे: प्रिया शर्मा"
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
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#2C1E16] mb-1">फोन / व्हाट्सएप *</label>
                    <input
                      type="tel"
                      placeholder="+91 99183 07283"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C1E16] mb-1">शहर / कस्बा *</label>
                    <input
                      type="text"
                      placeholder="जैसे: ग़ाज़ीपुर / वाराणसी"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                    />
                    {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
                  </div>
                </div>

                {/* Focus Area Multi-Select Checkboxes */}
                <div>
                  <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-2">
                    रुचि के क्षेत्र * (एक से अधिक चुन सकते हैं):
                  </label>
                  <div className="space-y-2">
                    {focusAreaOptions.map((opt) => (
                      <label 
                        key={opt.id} 
                        className="flex items-center space-x-3 p-2.5 rounded-xl border border-gray-200 hover:bg-[#FAF4EC] cursor-pointer text-xs text-[#2C1E16]"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(opt.id)}
                          onChange={() => handleInterestToggle(opt.id)}
                          className="w-4 h-4 text-[#E86A17] rounded accent-[#E86A17]"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.interests}
                    </p>
                  )}
                </div>

                {/* Availability Radio Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-2">
                    समय उपलब्धता:
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-[#2C1E16]"
                  >
                    <option value="weekends">केवल सप्ताहांत (शनिवार / रविवार)</option>
                    <option value="weekdays">कार्यदिवसों में (अंशकालिक)</option>
                    <option value="fulltime">पूर्णकालिक सेवा</option>
                    <option value="remote">ऑनलाइन / डिजिटल मार्गदर्शन</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-[#2C1E16] mb-1">
                    संक्षिप्त परिचय / कोई विशेष अनुभव
                  </label>
                  <textarea
                    rows={3}
                    placeholder="अपने अनुभव या विशेष क्षमता के बारे में लिखें..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E86A17] to-[#D05A0E] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'आवेदन भेजा जा रहा है...' : 'स्वयंसेवक आवेदन जमा करें'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
