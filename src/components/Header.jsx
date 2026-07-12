import React, { useState } from 'react';
import { Menu, X, Heart, Phone, Mail, ShieldCheck } from 'lucide-react';
import { TRUST_CONFIG } from '../data/contentConfig';

export default function Header({ activePage, setActivePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'मुख्य पृष्ठ' },
    { id: 'about', label: 'हमारे बारे में' },
    { id: 'programs', label: 'सेवा क्षेत्र' },
    { id: 'gallery', label: 'गैलरी' },
    { id: 'donate', label: 'दान करें' },
    { id: 'volunteer', label: 'स्वयंसेवक बनें' },
    { id: 'contact', label: 'संपर्क करें' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#E86A17]/20 shadow-sm transition-all">
      {/* Top Notice / Contact Bar */}
      <div className="bg-[#800020] text-[#FFF8F0] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{TRUST_CONFIG.contact.phonePrimary}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{TRUST_CONFIG.contact.emailPrimary}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] text-[#FAF4EC]/90">
              {TRUST_CONFIG.taxExemption80G}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Trust Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
            aria-label="विभूति नारायण मेमोरियल ट्रस्ट मुख्य पृष्ठ"
          >
            {/* Traditional Emblem Logo */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E86A17] to-[#800020] p-[2px] shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#FFF8F0] rounded-full flex items-center justify-center border border-[#D4AF37]">
                <span className="font-serif font-bold text-lg text-[#800020]">वी.एन.</span>
              </div>
            </div>
            <div>
              <span className="block font-serif font-bold text-lg sm:text-xl text-[#800020] tracking-tight group-hover:text-[#E86A17] transition-colors">
                {TRUST_CONFIG.name}
              </span>
              <span className="block text-[11px] text-[#E86A17] font-medium tracking-wider uppercase">
                पंजीकृत सामाजिक न्यास • रामगढ़, ग़ाज़ीपुर
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              if (item.id === 'donate') {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick('donate')}
                    className="ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E86A17] to-[#D05A0E] text-white font-medium text-sm shadow-md hover:shadow-lg hover:from-[#D05A0E] hover:to-[#800020] transition-all flex items-center space-x-1.5 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Heart className="w-4 h-4 fill-white animate-pulse" />
                    <span>दान करें</span>
                  </button>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#800020] bg-[#E86A17]/10 font-semibold border-b-2 border-[#E86A17]'
                      : 'text-[#2C1E16] hover:text-[#E86A17] hover:bg-[#FAF4EC]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => handleNavClick('donate')}
              className="px-3.5 py-1.5 text-xs rounded-full bg-[#E86A17] text-white font-medium shadow flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>दान करें</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#800020] hover:bg-[#E86A17]/10 focus:outline-none"
              aria-label="नेविगेशन मेनू बदलें"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8F0] border-b border-[#E86A17]/20 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-[#E86A17] text-white font-semibold'
                  : 'text-[#2C1E16] hover:bg-[#FAF4EC] hover:text-[#E86A17]'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'donate' && <Heart className="w-4 h-4 fill-white" />}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
