import React from 'react';
import { Shield, BookOpen, Eye, Award, Heart, CheckCircle2 } from 'lucide-react';
import { TRUST_CONFIG } from '../data/contentConfig';
import MandalaDivider from '../components/MandalaDivider';
import SEOHead from '../components/SEOHead';

export default function About({ setActivePage }) {
  return (
    <div className="space-y-16 pb-16">
      <SEOHead 
        title="हमारे बारे में" 
        description="विभूति नारायण मेमोरियल ट्रस्ट - इतिहास, उद्देश्य, न्यासी मंडल एवं कानूनी पंजीकरण विवरण (रामगढ़, ग़ाज़ीपुर, उत्तर प्रदेश)।"
      />

      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-[#FAF4EC] to-[#FFF8F0] py-12 md:py-16 border-b border-[#E86A17]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            हमारी परंपरा एवं संस्कार
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#800020]">
            विभूति नारायण मेमोरियल ट्रस्ट का परिचय
          </h1>
          <p className="text-base sm:text-lg text-[#2C1E16]/80 max-w-2xl mx-auto">
            पारंपरिक भारतीय जीवन मूल्यों, पारदर्शिता एवं संवेदनशीलता के साथ कार्यरत गैर-लाभकारी पंजीकृत सामाजिक संस्था।
          </p>
        </div>
      </section>

      {/* FOUNDING STORY & HISTORY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
              संस्था की पृष्ठभूमि
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#800020]">
              दिवंगत श्री विभूति नारायण जी की पावन स्मृति में
            </h2>
            <p className="text-sm sm:text-base text-[#2C1E16]/80 leading-relaxed">
              विभूति नारायण मेमोरियल ट्रस्ट की स्थापना वर्ष {TRUST_CONFIG.foundedYear} में समाज सेवी एवं श्रद्धेय दिवंगत श्री विभूति नारायण जी की पुनीत स्मृति में रामगढ़, ग़ाज़ीपुर (उत्तर प्रदेश) में की गई।
            </p>
            <p className="text-sm sm:text-base text-[#2C1E16]/80 leading-relaxed">
              संस्थापक एवं प्रबन्ध न्यासी (Owner) **श्री आलोक कुमार राय** के नेतृत्व में ट्रस्ट का मुख्य ध्येय ग्रामीण एवं वंचित वर्ग के बच्चों को शिक्षा सहायता उपलब्ध कराना, असहाय वृद्धों व ग्रामीणों हेतु नि:शुल्क चिकित्सा जांच शिविर आयोजित करना, तथा महिलाओं को सिलाई-कढ़ाई सीखकर स्वावलंबी बनाना है।
            </p>
            <p className="text-sm sm:text-base text-[#2C1E16]/80 leading-relaxed">
              एक मेमोरियल ट्रस्ट के रूप में, हम प्रत्येक कार्य में पूर्ण प्रामाणिकता, बड़ों का सम्मान एवं समाज के अंतिम व्यक्ति तक सहायता पहुँचाने हेतु कृतसंकल्पित हैं।
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="warm-card rounded-3xl p-6 sm:p-8 text-center border-2 border-[#D4AF37]/40 relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#E86A17] to-[#800020] p-1 shadow-lg mb-4">
                <div className="w-full h-full bg-[#FFF8F0] rounded-full flex items-center justify-center border-2 border-[#D4AF37]">
                  <span className="font-serif font-bold text-3xl text-[#800020]">वी.एन.</span>
                </div>
              </div>
              <h3 className="font-serif font-bold text-xl text-[#800020]">दिवंगत श्री विभूति नारायण</h3>
              <p className="text-xs text-[#E86A17] font-medium mt-1">प्रेरणा स्रोत एवं नामधारक</p>
              <p className="text-xs text-[#2C1E16]/70 italic mt-3">
                "शिक्षा व स्वास्थ्य मनुष्य का मौलिक अधिकार हैं; नि:स्वार्थ जनसेवा ही सच्चा धर्म है।"
              </p>
            </div>
          </div>
        </div>
      </section>

      <MandalaDivider />

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="warm-card rounded-3xl p-8 border-t-4 border-[#E86A17] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E86A17]/10 flex items-center justify-center text-[#E86A17]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#800020]">हमारा लक्ष्य (Mission)</h3>
            <p className="text-sm sm:text-base text-[#2C1E16]/80 leading-relaxed">
              ग्रामीण एवं निर्धन बच्चों को प्राथमिक शिक्षा सहायता व पाठ्यसामग्री प्रदान करना, दूरदराज के गांवों में नि:शुल्क स्वास्थ्य शिविर आयोजित करना, महिलाओं को सिलाई प्रशिक्षण देकर आत्मनिर्भर बनाना, तथा पर्यावरण संरक्षण हेतु सघन वृक्षारोपण करना।
            </p>
          </div>

          {/* Vision Card */}
          <div className="warm-card rounded-3xl p-8 border-t-4 border-[#800020] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#800020]/10 flex items-center justify-center text-[#800020]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#800020]">हमारी दृष्टि (Vision)</h3>
            <p className="text-sm sm:text-base text-[#2C1E16]/80 leading-relaxed">
              एक ऐसे आत्मनिर्भर एवं खुशहाल ग्रामीण समाज का निर्माण करना जहाँ कोई भी बच्चा गरीबी के कारण अशिक्षित न रहे, कोई भी ग्रामीण चिकित्सा सुविधा के अभाव में न तड़पे, और हर परिवार स्वाभिमान व समृद्धि के साथ जीवन यापन कर सके।
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTEES & FOUNDERS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold text-[#E86A17] tracking-widest">
            मार्गदर्शन एवं न्यासी मंडल
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#800020] mt-2">
            संस्थापक एवं प्रबन्धकीय मण्डल
          </h2>
          <p className="text-sm text-[#2C1E16]/75 mt-2">
            निःस्वार्थ जनसेवा एवं सामाजिक उत्तरदायित्व की भावना से कार्यरत मार्गदर्शक मंडल।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_CONFIG.trustees.map((member, idx) => (
            <div key={idx} className="warm-card rounded-2xl p-6 text-center flex flex-col justify-between">
              <div>
                {member.image ? (
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-xl border border-[#D4AF37]/50 mb-4 shadow-sm bg-[#FAF4EC]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[3/4] rounded-xl bg-gradient-to-br from-[#FAF4EC] to-[#FFE0C2] border border-[#D4AF37]/30 flex items-center justify-center text-[#800020] font-serif font-bold text-xl mb-4 shadow-sm">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <h4 className="font-serif font-bold text-base text-[#800020]">{member.name}</h4>
                <span className="block text-xs font-semibold text-[#E86A17] mt-0.5">{member.role}</span>
                <p className="text-xs text-[#2C1E16]/75 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEGAL & REGISTRATION DETAILS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="warm-card rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#FFF8F0] to-[#FAF4EC] border-2 border-[#D4AF37]/50">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-[#800020]" />
            <div>
              <h3 className="font-serif font-bold text-2xl text-[#800020]">
                कानूनी मान्यता एवं वैधानिक पंजीकरण
              </h3>
              <p className="text-xs text-[#E86A17] font-medium">
                पारदर्शी एवं उत्तरदायी पंजीकृत सामाजिक संस्थान
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white p-5 rounded-2xl border border-[#E86A17]/20 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#800020] block">
                ट्रस्ट पंजीकरण संख्या
              </span>
              <p className="font-semibold text-[#2C1E16]">
                {TRUST_CONFIG.registrationNumber}
              </p>
              <p className="text-xs text-[#2C1E16]/70">
                भारतीय ट्रस्ट अधिनियम के अंतर्गत विधिवत पंजीकृत संस्था।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E86A17]/20 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#800020] block">
                आयकर 80G कर छूट
              </span>
              <p className="font-semibold text-[#2C1E16]">
                {TRUST_CONFIG.taxExemption80G}
              </p>
              <p className="text-xs text-[#2C1E16]/70">
                दाताओं को दान राशि पर नियमानुसार 80G कर छूट रसीद प्रदान की जाती है।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E86A17]/20 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#800020] block">
                12A पंजीकरण प्रमाण पत्र
              </span>
              <p className="font-semibold text-[#2C1E16]">
                {TRUST_CONFIG.taxExemption12A}
              </p>
              <p className="text-xs text-[#2C1E16]/70">
                धार्मिक एवं धर्मार्थ संस्था हेतु आयकर छूट मान्यता।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E86A17]/20 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#800020] block">
                पैन एवं वित्तीय सीए लेखा-परीक्षण
              </span>
              <p className="font-semibold text-[#2C1E16]">
                PAN: {TRUST_CONFIG.panNumber}
              </p>
              <p className="text-xs text-[#2C1E16]/70">
                प्रतिवर्ष सनद प्राप्त चार्टर्ड अकाउंटेंट द्वारा आय-व्यय का पूर्ण अंकेक्षण।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
