import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Sparkles, 
  ArrowUpRight, 
  Gauge, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  Layers, 
  ShoppingBag, 
  Code2,
  Eye
} from 'lucide-react';

interface WebDesignPageProps {
  onOpenContact: () => void;
  onBackToPortfolio: () => void;
}

export const WebDesignPage: React.FC<WebDesignPageProps> = ({
  onOpenContact,
  onBackToPortfolio
}) => {
  const [selectedStyle, setSelectedStyle] = useState<'E-Commerce' | 'High-Converting Landing' | 'Corporate'>('E-Commerce');

  const features = [
    { label: 'Google PageSpeed 95+', desc: 'Zero bloat, responsive code, sub-second load times', icon: Gauge },
    { label: 'Mobile-First Architecture', desc: 'Flawless micro-interactions on iPhone and Android', icon: Smartphone },
    { label: 'Conversion Funnel Design', desc: 'Tactile CTA placements that maximize buyer checkout', icon: ShoppingBag },
    { label: 'Modern Tech Stack', desc: 'Shopify Liquid, WordPress Headless, React & Tailwind', icon: Code2 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col h-full overflow-y-auto no-scrollbar gap-3.5 pr-0.5"
    >
      {/* Top Banner */}
      <div className="bg-white rounded-[22px] p-3.5 sm:p-4.5 border border-white/80 shadow-xs flex flex-col justify-between shrink-0">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E6F0FF] text-[#2A55FF] text-[9.5px] font-bold">
            <Laptop className="w-3 h-3" />
            <span>Web Design &amp; Full-Stack Development</span>
          </div>
          <button
            onClick={onBackToPortfolio}
            className="text-[10px] font-semibold text-[#68716A] hover:text-[#111613] transition-colors cursor-pointer flex items-center gap-1"
          >
            ← Back to Overview
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-[17px] sm:text-[20px] font-extrabold text-[#111613] tracking-tight font-['Outfit'] leading-tight">
              Bespoke Websites Engineered<br className="hidden sm:inline" /> For Serious Revenue
            </h2>
            <p className="text-[10px] sm:text-[11px] text-[#555E53] mt-1 max-w-md leading-relaxed">
              We design custom Shopify, WordPress, and React web experiences that elevate your brand prestige and convert visitors into repeat buyers.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-3.5 py-2 rounded-full bg-[#111613] text-white text-[11px] font-bold hover:bg-[#FF6B3D] transition-colors cursor-pointer shrink-0 shadow-xs flex items-center justify-center gap-1.5 self-start sm:self-auto"
          >
            <span>Start Your Build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4 Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 shrink-0">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div key={idx} className="bg-white/90 backdrop-blur-xs rounded-[16px] p-2.5 border border-white/70 shadow-xs flex flex-col justify-between">
              <div className="w-7 h-7 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mb-1.5">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[10.5px] font-bold text-[#111613] leading-tight">{feat.label}</h4>
                <p className="text-[8px] text-[#68716A] mt-0.5 leading-tight">{feat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Showcase Preview */}
      <div className="bg-[#F8F4BA] rounded-[22px] p-4 border border-[#EDE7A4] flex flex-col justify-between shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#111613] text-white inline-block mb-1">
              Interactive Preview
            </span>
            <h4 className="text-[14px] font-extrabold text-[#111613] font-['Outfit']">
              Explore Our Core Website Frameworks
            </h4>
          </div>

          <div className="flex items-center gap-1 bg-white/80 rounded-full p-0.5 border border-white">
            {(['E-Commerce', 'High-Converting Landing', 'Corporate'] as const).map(style => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-2.5 py-1 rounded-full text-[9.5px] font-bold transition-all cursor-pointer ${
                  selectedStyle === style 
                    ? 'bg-[#111613] text-white shadow-xs' 
                    : 'text-[#555E53] hover:text-[#111613]'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[18px] p-3 border border-[#EBEBEB] grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className="space-y-1.5">
            <h5 className="text-[12px] font-bold text-[#111613]">
              {selectedStyle === 'E-Commerce' && 'Tailored Shopify Plus Storefront'}
              {selectedStyle === 'High-Converting Landing' && 'Direct-Response Sales Page'}
              {selectedStyle === 'Corporate' && 'Authoritative Business & B2B Web Portal'}
            </h5>
            <p className="text-[9px] text-[#68716A] leading-relaxed">
              {selectedStyle === 'E-Commerce' && 'Custom product grids, 1-click upsell drawer, speed-optimized media, and seamless Klaviyo email marketing integration.'}
              {selectedStyle === 'High-Converting Landing' && 'Engineered for ad traffic. Persuasive copy framework, sticky conversion headers, and verified social proof triggers.'}
              {selectedStyle === 'Corporate' && 'Built on headless WordPress or custom React. High security, automated lead capture, and interactive case study layouts.'}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[8.5px] font-bold text-[#2E7D32]">
              <CheckCircle2 className="w-3 h-3" />
              <span>Includes 14 days of post-launch hypercare &amp; speed audits</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 justify-end">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#FF6B3D] text-white text-[10.5px] font-bold hover:bg-[#E55729] transition-colors cursor-pointer text-center"
            >
              Get Free Build Quote →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
