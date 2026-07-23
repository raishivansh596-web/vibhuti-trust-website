import React, { useState } from 'react';
import { X, UploadCloud, Image as ImageIcon, Tag, FileText, CheckCircle } from 'lucide-react';
import { saveUploadedImage } from '../utils/imageLoader';

export default function UploadModal({ isOpen, onClose, onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('events');
  const [caption, setCaption] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const categories = [
    { id: 'events', label: 'कार्यक्रम व वितरण' },
    { id: 'education', label: 'शिक्षा सहायता' },
    { id: 'healthcare', label: 'स्वास्थ्य शिविर' },
    { id: 'livelihood', label: 'सिलाई व आजीविका' },
    { id: 'environment', label: 'वृक्षारोपण व पर्यावरण' }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('कृपया केवल इमेज फाइल (JPG, PNG, WEBP) ही चुनें।');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('फाइल का आकार बहुत बड़ा है। कृपया 10MB से छोटी फोटो चुनें।');
      return;
    }

    setError('');
    setSelectedFile(file);

    if (!title) {
      const cleanName = file.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      setTitle(cleanName);
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!previewUrl) {
      setError('कृपया पहले अपनी गैलरी से एक फोटो चुनें।');
      return;
    }

    setIsSubmitting(true);

    try {
      const newImage = {
        id: `custom_${Date.now()}`,
        src: previewUrl,
        category: category,
        title: title || 'सेवा अभियान चित्र',
        caption: caption,
        filename: selectedFile ? selectedFile.name : 'uploaded_photo.jpg',
        createdAt: new Date().toISOString()
      };

      saveUploadedImage(newImage);

      setSelectedFile(null);
      setPreviewUrl(null);
      setTitle('');
      setCategory('events');
      setCaption('');
      setIsSubmitting(false);

      if (onUploadSuccess) {
        onUploadSuccess(newImage);
      }
      onClose();
    } catch (err) {
      console.error(err);
      setError('फोटो सेव करने में समस्या आई। स्टोरेज फुल हो सकती है।');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFF8F0] rounded-3xl max-w-lg w-full overflow-hidden border border-[#D4AF37]/40 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#800020] px-6 py-4 flex items-center justify-between text-[#FFF8F0]">
          <div className="flex items-center space-x-2.5">
            <UploadCloud className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif font-bold text-lg text-white">
              गैलरी से फोटो अपलोड करें
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="बंद करें"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
          
          {/* Dropzone / Preview */}
          <div>
            <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-2">
              फोटो चुनें (Choose Image)
            </label>
            
            {previewUrl ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E86A17] bg-black/5 aspect-video flex items-center justify-center group">
                <img
                  src={previewUrl}
                  alt="अपलोड पूर्वावलोकन"
                  className="max-h-56 w-auto object-contain"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <label className="bg-white text-[#800020] px-4 py-2 rounded-full text-xs font-bold cursor-pointer shadow-md hover:bg-[#FAF4EC] transition-colors">
                    दूसरी फोटो बदलें
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <label className="border-2 border-dashed border-[#E86A17]/40 hover:border-[#E86A17] bg-[#FAF4EC] hover:bg-[#FAF4EC]/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group">
                <div className="w-12 h-12 rounded-full bg-[#E86A17]/10 flex items-center justify-center text-[#E86A17] group-hover:scale-110 transition-transform mb-3">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-[#800020] mb-1">
                  अपनी गैलरी से फोटो चुनने के लिए यहाँ क्लिक करें
                </span>
                <span className="text-xs text-[#2C1E16]/60">
                  JPG, PNG, WEBP फोटो सपोर्टेड हैं
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
              {error}
            </div>
          )}

          {/* Title Input */}
          <div>
            <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#E86A17]" />
              <span>फोटो का शीर्षक / नाम (Title)</span>
            </label>
            <input
              type="text"
              required
              placeholder="उदा. रामगढ़ में शीतकालीन कंबल वितरण"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E86A17]/30 focus:border-[#E86A17] focus:ring-2 focus:ring-[#E86A17]/20 bg-white text-sm outline-none transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#E86A17]" />
              <span>सेवा क्षेत्र / श्रेणी (Category)</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E86A17]/30 focus:border-[#E86A17] focus:ring-2 focus:ring-[#E86A17]/20 bg-white text-sm outline-none transition-all"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Caption Input */}
          <div>
            <label className="block text-xs font-semibold text-[#800020] uppercase tracking-wider mb-1">
              विवरण / विवरण (Caption - Optional)
            </label>
            <textarea
              rows={2}
              placeholder="फोटो के बारे में कुछ पंक्तियाँ लिखें..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E86A17]/30 focus:border-[#E86A17] focus:ring-2 focus:ring-[#E86A17]/20 bg-white text-sm outline-none transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end space-x-3 border-t border-[#E86A17]/15">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-medium text-[#2C1E16] hover:bg-[#FAF4EC] transition-colors"
            >
              रद्द करें
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !previewUrl}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E86A17] to-[#800020] hover:from-[#800020] hover:to-[#E86A17] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5 disabled:opacity-50"
            >
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>{isSubmitting ? 'अपलोड हो रहा है...' : 'वेबसाइट पर अपलोड करें'}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
