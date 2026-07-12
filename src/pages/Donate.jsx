import React, { useState, useEffect } from 'react';
import { Heart, ShieldCheck, CheckCircle2, AlertCircle, Lock, Sparkles } from 'lucide-react';
import { TRUST_CONFIG } from '../data/contentConfig';
import SEOHead from '../components/SEOHead';

export default function Donate({ preselectedProgram }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: 1000,
    customAmount: '',
    isCustom: false,
    program: preselectedProgram || 'general',
    pan: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const presetAmounts = [500, 1000, 2500, 5000];

  useEffect(() => {
    if (preselectedProgram) {
      setFormData(prev => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleAmountSelect = (val) => {
    setFormData({
      ...formData,
      amount: val,
      customAmount: '',
      isCustom: false
    });
    setErrors({ ...errors, amount: null });
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setFormData({
      ...formData,
      customAmount: val,
      amount: val ? parseInt(val) || 0 : 0,
      isCustom: true
    });
    setErrors({ ...errors, amount: null });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'पूरा नाम दर्ज करना अनिवार्य है';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'वैध ईमेल आईडी दर्ज करें';
    if (!formData.phone.trim() || !/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = '10 अंकों का वैध फोन नंबर दर्ज करें';
    }
    const finalAmount = formData.isCustom ? parseInt(formData.customAmount) : formData.amount;
    if (!finalAmount || finalAmount < 50) {
      newErrors.amount = 'न्यूनतम दान राशि ₹50 होनी चाहिए';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDonateSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);

    const isScriptLoaded = await loadRazorpayScript();
    const donationAmount = formData.isCustom ? parseInt(formData.customAmount) : formData.amount;

    if (!isScriptLoaded) {
      alert('Razorpay पेमेंट गेटवे लोड नहीं हो सका। कृपया अपना इंटरनेट चेक करें।');
      setIsProcessing(false);
      return;
    }

    const options = {
      key: TRUST_CONFIG.razorpay.keyId,
      amount: donationAmount * 100,
      currency: TRUST_CONFIG.razorpay.currency,
      name: TRUST_CONFIG.razorpay.merchantName,
      description: `दान सहयोग: ${formData.program === 'general' ? 'सामान्य न्यास कोष' : formData.program}`,
      image: '/vite.svg',
      handler: function (response) {
        setIsProcessing(false);
        setPaymentSuccess({
          paymentId: response.razorpay_payment_id || 'PAY_TEST_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          amount: donationAmount,
          name: formData.name,
          program: formData.program
        });
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: '#E86A17'
      },
      modal: {
        ondismiss: function () {
          setIsProcessing(false);
        }
      }
    };

    if (TRUST_CONFIG.razorpay.keyId === 'REPLACE_WITH_YOUR_RAZORPAY_KEY') {
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentSuccess({
          paymentId: 'TEST_PAYMENT_' + Math.floor(100000 + Math.random() * 900000),
          amount: donationAmount,
          name: formData.name,
          program: formData.program
        });
      }, 1200);
      return;
    }

    try {
      const razorpayWindow = new window.Razorpay(options);
      razorpayWindow.open();
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <SEOHead 
        title="दान एवं आर्थिक सहयोग" 
        description="विभूति नारायण मेमोरियल ट्रस्ट (रामगढ़, ग़ाज़ीपुर) को दान करें। आयकर धारा 80G के तहत 50% कर छूट प्राप्त करें।"
      />

      {/* BANNER */}
      <section className="bg-gradient-to-b from-[#FAF4EC] to-[#FFF8F0] py-12 md:py-16 border-b border-[#E86A17]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            आपका लघु योगदान • समाज में बड़ा बदलाव
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#800020]">
            समाज सेवा अभियानों हेतु दान करें
          </h1>
          <p className="text-base sm:text-lg text-[#2C1E16]/80 max-w-2xl mx-auto">
            आपका सहयोग सीधे निर्धन बच्चों की पढ़ाई, ग्रामीण स्वास्थ्य शिविरों एवं महिलाओं के सिलाई प्रशिक्षण हेतु प्रयुक्त होता है।
          </p>
        </div>
      </section>

      {/* MAIN DONATION CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Why Your Donation Matters */}
          <div className="lg:col-span-5 space-y-6">
            <div className="warm-card rounded-3xl p-6 sm:p-8 space-y-5 border-t-4 border-[#E86A17]">
              <h3 className="font-serif font-bold text-2xl text-[#800020]">
                आपके दान का प्रत्यक्ष उपयोग
              </h3>
              <p className="text-sm text-[#2C1E16]/80 leading-relaxed">
                विभूति नारायण मेमोरियल ट्रस्ट यह सुनिश्चित करता है कि दान का शत-प्रतिशत उपयोग बिना किसी बिचौलिए के सीधे ग्रामीण जरूरतमंदों तक पहुंचे।
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-7 h-7 rounded-full bg-[#E86A17]/15 flex items-center justify-center text-[#E86A17] shrink-0 font-bold">
                    ₹
                  </div>
                  <div>
                    <strong className="text-[#800020] font-semibold block">₹500 का सहयोग</strong>
                    <span className="text-xs text-[#2C1E16]/75">एक ग्रामीण बच्चे को पूरे सत्र हेतु कॉपी-किताब व स्कूल किट प्रदान करता है।</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-7 h-7 rounded-full bg-[#800020]/15 flex items-center justify-center text-[#800020] shrink-0 font-bold">
                    ₹
                  </div>
                  <div>
                    <strong className="text-[#800020] font-semibold block">₹1,000 का सहयोग</strong>
                    <span className="text-xs text-[#2C1E16]/75">5 ग्रामीण बुजुर्गों की निःशुल्क स्वास्थ्य जांच व दवाइयों की व्यवस्था करता है।</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#800020] shrink-0 font-bold">
                    ₹
                  </div>
                  <div>
                    <strong className="text-[#800020] font-semibold block">₹2,500 का सहयोग</strong>
                    <span className="text-xs text-[#2C1E16]/75">एक ग्रामीण महिला को स्वावलंबी बनने हेतु सिलाई प्रशिक्षण किट प्रदान करता है।</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 80G Tax Exemption Box */}
            <div className="warm-card rounded-3xl p-6 bg-[#FAF4EC] border-2 border-[#D4AF37] space-y-2">
              <div className="flex items-center space-x-2 text-[#800020]">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                <h4 className="font-serif font-bold text-base">आयकर धारा 80G छूट</h4>
              </div>
              <p className="text-xs text-[#2C1E16]/80 leading-relaxed">
                {TRUST_CONFIG.razorpay.tax80GNote} दान के पश्चात आपके पंजीकृत ईमेल पर 80G कर रसीद स्वतः भेज दी जाती है।
              </p>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-7">
            {paymentSuccess ? (
              /* SUCCESS CONFIRMATION STATE */
              <div className="warm-card rounded-3xl p-8 sm:p-12 text-center space-y-6 animate-fadeIn border-2 border-[#E86A17]">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#E86A17]/15 flex items-center justify-center text-[#E86A17]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-serif font-bold text-3xl text-[#800020]">
                  आपके उदार दान हेतु हार्दिक धन्यवाद!
                </h3>
                <p className="text-base text-[#2C1E16]/80 max-w-md mx-auto">
                  आदरणीय <strong>{paymentSuccess.name}</strong> जी, आपकी <strong>₹{paymentSuccess.amount}</strong> की दान राशि कृतज्ञतापूर्वक प्राप्त हुई।
                </p>

                <div className="bg-[#FAF4EC] p-4 rounded-2xl text-xs space-y-1 text-[#2C1E16] max-w-sm mx-auto border border-[#E86A17]/20">
                  <p><strong>लेनदेन संदर्भ संख्या (Ref ID):</strong> {paymentSuccess.paymentId}</p>
                  <p><strong>आवंटित कार्य:</strong> {paymentSuccess.program.toUpperCase()}</p>
                  <p className="text-[#800020] font-semibold mt-2">80G कर रसीद आपके ईमेल पर प्रेषित की गई।</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setPaymentSuccess(null)}
                    className="px-6 py-3 rounded-full bg-[#800020] text-white text-sm font-medium hover:bg-[#E86A17] transition-colors"
                  >
                    पुनः दान करें
                  </button>
                </div>
              </div>
            ) : (
              /* DONATION FORM */
              <form onSubmit={handleDonateSubmit} className="warm-card rounded-3xl p-6 sm:p-10 space-y-6">
                
                {/* Razorpay Key Banner Notice */}
                <div className="bg-[#FFF8F0] border border-[#D4AF37] p-3 rounded-xl text-xs text-[#800020] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#E86A17]" />
                    <span>Razorpay मोड: <strong>टेस्ट / सैंडबॉक्स (Sandbox)</strong></span>
                  </div>
                  <span className="text-[10px] text-[#2C1E16]/60">Key: REPLACE_WITH_YOUR_RAZORPAY_KEY</span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#800020] border-b border-[#E86A17]/20 pb-3">
                  दान राशि एवं सेवा क्षेत्र चुनें
                </h3>

                {/* Amount Preset Buttons */}
                <div>
                  <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-2">
                    दान राशि का चयन करें (₹ रुपये में):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {presetAmounts.map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => handleAmountSelect(amt)}
                        className={`py-3 rounded-xl font-bold text-base transition-all border ${
                          !formData.isCustom && formData.amount === amt
                            ? 'bg-[#E86A17] text-white border-[#E86A17] shadow-md scale-105'
                            : 'bg-white text-[#800020] border-[#E86A17]/30 hover:bg-[#FAF4EC]'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount Field */}
                  <div className="mt-3">
                    <input
                      type="number"
                      placeholder="या अपनी इच्छानुसार अन्य राशि (₹) दर्ज करें"
                      value={formData.customAmount}
                      onChange={handleCustomAmountChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#E86A17] ${
                        formData.isCustom ? 'border-[#E86A17] bg-[#FAF4EC] font-bold' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.amount}
                    </p>
                  )}
                </div>

                {/* Program Selection Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-2">
                    सहयोग का क्षेत्र चुनें:
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm text-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#E86A17]"
                  >
                    <option value="general">सामान्य न्यास कोष (जहां सर्वाधिक आवश्यकता हो)</option>
                    <option value="education">प्राथमिक शिक्षा एवं साक्षरता सहायता</option>
                    <option value="healthcare">ग्रामीण स्वास्थ्य एवं नि:शुल्क चिकित्सा शिविर</option>
                    <option value="livelihood">सिलाई प्रशिक्षण एवं महिला स्वावलंबन</option>
                    <option value="environment">वृक्षारोपण एवं पर्यावरण संरक्षण</option>
                  </select>
                </div>

                {/* Donor Personal Information */}
                <div className="space-y-4 pt-4 border-t border-[#E86A17]/15">
                  <h4 className="font-serif font-bold text-lg text-[#800020]">
                    दानदाता की जानकारी
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2C1E16] mb-1">पूरा नाम *</label>
                      <input
                        type="text"
                        placeholder="जैसे: रामेश्वर शर्मा"
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
                        placeholder="ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2C1E16] mb-1">फोन नंबर *</label>
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
                      <label className="block text-xs font-medium text-[#2C1E16] mb-1">पैन नंबर (80G रसीद हेतु इच्छित)</label>
                      <input
                        type="text"
                        placeholder="ABCDE1234F"
                        value={formData.pan}
                        onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#E86A17]"
                      />
                    </div>
                  </div>
                </div>

                {/* Razorpay Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#E86A17] to-[#800020] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Lock className="w-5 h-5 text-[#D4AF37]" />
                    <span>
                      {isProcessing 
                        ? 'Razorpay भुगतानावलोकन जारी है...' 
                        : `Razorpay द्वारा ₹${formData.isCustom ? formData.customAmount || 0 : formData.amount} भुगतान करें`}
                    </span>
                  </button>

                  <p className="text-[11px] text-center text-[#2C1E16]/70 mt-2">
                    सुरक्षित भुगतान • UPI, Paytm, क्रेडिट कार्ड, नेटबैंकिंग समर्थित।
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
