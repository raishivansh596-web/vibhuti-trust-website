import React from 'react';
import { GraduationCap, HeartPulse, Sprout, Trees, ArrowRight, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  GraduationCap: GraduationCap,
  HeartPulse: HeartPulse,
  Sprout: Sprout,
  Trees: Trees
};

export default function ProgramCard({ program, onDonateClick }) {
  const IconComponent = ICON_MAP[program.iconName] || GraduationCap;

  return (
    <div className="warm-card rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Top Accent Strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
        style={{ backgroundColor: program.color || '#E86A17' }}
      ></div>

      <div>
        {/* Header Icon + Title */}
        <div className="flex items-start space-x-4 mb-5">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 transition-transform group-hover:scale-105"
            style={{ backgroundColor: program.color || '#E86A17' }}
          >
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-[#800020] group-hover:text-[#E86A17] transition-colors">
              {program.title}
            </h3>
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF4EC] text-[#2C1E16] mt-1 border border-[#E86A17]/20">
              मुख्य सेवा क्षेत्र
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#2C1E16]/80 leading-relaxed mb-6">
          {program.shortDesc || program.fullDesc}
        </p>

        {/* Key Achievements List */}
        {program.achievements && program.achievements.length > 0 && (
          <div className="space-y-2.5 mb-6 pt-4 border-t border-[#E86A17]/10">
            <span className="text-xs font-semibold text-[#800020] uppercase tracking-wider block mb-2">
              प्रमुख कार्य व उपलब्धियां:
            </span>
            {program.achievements.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs text-[#2C1E16]">
                <CheckCircle2 className="w-4 h-4 text-[#E86A17] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Button */}
      <div className="pt-4 mt-auto">
        <button
          onClick={() => onDonateClick(program.id)}
          className="w-full py-3 px-4 rounded-xl bg-[#FFF8F0] border-2 border-[#E86A17] text-[#800020] font-medium text-sm hover:bg-[#E86A17] hover:text-white transition-all flex items-center justify-center space-x-2 shadow-sm group-hover:shadow"
        >
          <span>इस कार्य हेतु सहयोग करें</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
