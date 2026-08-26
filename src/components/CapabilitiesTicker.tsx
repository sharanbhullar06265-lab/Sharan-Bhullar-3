import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check, Layers, Monitor, ShoppingBag, Smartphone, Zap } from 'lucide-react';

interface CapabilitiesTickerProps {
  onSelectCategory: (category: string) => void;
}

export const CapabilitiesTicker: React.FC<CapabilitiesTickerProps> = ({
  onSelectCategory
}) => {
  const capabilities = [
    { label: 'Business Websites', icon: Monitor, tag: 'B2B & Corporate', desc: 'Custom enterprise & professional authority websites' },
    { label: 'E-Commerce', icon: ShoppingBag, tag: 'Direct-to-Consumer', desc: 'Frictionless stores with high average order value' },
    { label: 'Shopify Stores', icon: Zap, tag: 'Liquid & OS 2.0', desc: 'Custom themes without generic template boundaries' },
    { label: 'Landing Pages', icon: ArrowRight, tag: 'Conversion Focused', desc: 'Laser-focused sales & campaign splash pages' },
    { label: 'Website Redesigns', icon: Layers, tag: 'Modernization', desc: 'Transforming clunky sites into sleek flagships' },
    { label: 'Responsive Design', icon: Smartphone, tag: 'Mobile-First', desc: 'Flawless fluid scaling across every device' },
    { label: 'UI / UX Design', icon: Sparkles, tag: 'Figma to Code', desc: 'Deliberate typography, rhythm, and spatial design' },
    { label: 'Custom Development', icon: Monitor, tag: 'Modern Tech Stack', desc: 'Clean React, Next.js, and API integrations' },
  ];

  return (
    <section className="py-20 sm:py-28 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.07] p-8 sm:p-14 md:p-20 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
        
        {/* Sub-label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#20B8B0]" />
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#777777]">
            DESIGNER CAPABILITY SPECTRUM
          </span>
        </div>

        {/* Large Statement Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#151515] leading-[1.06] mb-12 sm:mb-16">
          FROM SIMPLE WEBSITES
          <br />
          <span className="text-[#777777] font-normal">TO COMPLETE </span>
          <span className="text-[#20B8B0]">ONLINE STORES.</span>
        </h2>

        {/* Interactive Capability Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => onSelectCategory(cap.label)}
                className="group p-5 rounded-2xl bg-[#F9F9F9] hover:bg-[#151515] hover:text-white border border-black/[0.05] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/[0.05] group-hover:bg-white/15 text-[#777777] group-hover:text-[#20B8B0] transition-colors">
                      {cap.tag}
                    </span>
                    <Icon className="w-4 h-4 text-[#777777] group-hover:text-[#20B8B0] transition-colors" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#151515] group-hover:text-white transition-colors">
                    {cap.label}
                  </h4>
                </div>
                
                <p className="text-xs text-[#777777] group-hover:text-gray-400 transition-colors mt-2">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
