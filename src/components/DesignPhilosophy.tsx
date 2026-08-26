import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Type, Layout, MousePointer, Check, ArrowRight, Eye } from 'lucide-react';

export const DesignPhilosophy: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<'Plus Jakarta Sans' | 'Manrope' | 'Playfair Display'>('Plus Jakarta Sans');
  const [activeButtonState, setActiveButtonState] = useState<string>('Default');
  const [accentTone, setAccentTone] = useState<string>('#20B8B0');

  const colorSwatches = [
    { name: 'Teal Signature', hex: '#20B8B0', role: 'Primary Brand Accent' },
    { name: 'Lavender Mood', hex: '#E9E6FF', role: 'Soft Editorial Surface' },
    { name: 'Pure Ink', hex: '#151515', role: 'High-Contrast Typography' },
    { name: 'Warm Charcoal', hex: '#777777', role: 'Secondary Hierarchy' },
    { name: 'Clean White', hex: '#FFFFFF', role: 'Island Canvas' },
    { name: 'Light Gray', hex: '#F1F1F1', role: 'Backdrop Environment' },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Soft Lavender Rounded Island Canvas */}
      <div className="bg-[#E9E6FF]/80 rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-[#5B4AE0]/15 p-6 sm:p-12 md:p-18 shadow-[0_20px_50px_-20px_rgba(91,74,224,0.08)]">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5B4AE0]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#5B4AE0]">
              DESIGN PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#151515] leading-[1.05] mb-6">
            GOOD DESIGN
            <br />
            <span className="text-[#5B4AE0]">SHOULD FEEL SIMPLE.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#444455] leading-relaxed max-w-3xl">
            I focus on clean layouts, clear communication, responsive experiences and visual details that make a website feel memorable.
          </p>
        </div>

        {/* Interactive Designer's Moodboard & Component Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Card 1: Typography Hierarchy Scale */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-[#5B4AE0]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#151515]">
                    Typography System
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#777777]">1.25 Major Second Scale</span>
              </div>

              {/* Font Selector Tabs */}
              <div className="flex gap-2 mb-6">
                {(['Plus Jakarta Sans', 'Manrope', 'Playfair Display'] as const).map((font) => (
                  <button
                    key={font}
                    onClick={() => setSelectedFont(font)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedFont === font
                        ? 'bg-[#151515] text-white shadow-xs'
                        : 'bg-black/[0.04] text-[#666666] hover:text-[#151515]'
                    }`}
                  >
                    {font}
                  </button>
                ))}
              </div>

              {/* Live Typographic Scale Rendering */}
              <div className="space-y-4" style={{ fontFamily: selectedFont }}>
                <div>
                  <span className="text-[10px] text-[#888888] font-mono block">Display Title (64px)</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight leading-tight">
                    Memorable Digital Presence
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-[#888888] font-mono block">Subhead (24px)</span>
                  <div className="text-base sm:text-lg font-semibold text-[#444444]">
                    Engineered with deliberate rhythm & generous whitespace.
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-[#888888] font-mono block">Body Paragraph (16px)</span>
                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                    Clear communication guides user attention naturally from curiosity to immediate action.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#777777]">
              <span>Zero clutter</span>
              <span>100% Legibility</span>
            </div>
          </div>

          {/* Card 2: Color Palette & Contrast Tokens */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Color Swatches Board */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#5B4AE0]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#151515]">
                    Curated Color Palette
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#777777]">WCAG AA Certified</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {colorSwatches.map((swatch, idx) => (
                  <div
                    key={idx}
                    onClick={() => setAccentTone(swatch.hex)}
                    className="p-3 rounded-2xl border border-black/[0.06] bg-[#FAFAFA] hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div
                      className="w-full h-12 rounded-xl mb-2.5 shadow-xs flex items-end justify-end p-1.5 border border-black/5"
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {accentTone === swatch.hex && (
                        <span className="w-4 h-4 rounded-full bg-white text-[#151515] flex items-center justify-center text-[10px] font-bold shadow-xs">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-[#151515] group-hover:text-[#5B4AE0] transition-colors">
                      {swatch.name}
                    </div>
                    <div className="text-[10px] font-mono text-[#777777]">{swatch.hex}</div>
                    <div className="text-[9.5px] text-[#999999] truncate">{swatch.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-Interaction & Component Tokens Preview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MousePointer className="w-4 h-4 text-[#20B8B0]" />
                  <h4 className="text-sm font-bold text-[#151515]">Micro-Interactions</h4>
                </div>
                <p className="text-xs text-[#777777] max-w-xs">
                  Tactile button states, rounded pill ergonomics, and frictionless transitions.
                </p>
              </div>

              {/* Interactive buttons */}
              <div className="flex items-center gap-3">
                <button
                  onMouseEnter={() => setActiveButtonState('Hovered')}
                  onMouseLeave={() => setActiveButtonState('Default')}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                  style={{ backgroundColor: accentTone === '#FFFFFF' || accentTone === '#F1F1F1' ? '#151515' : accentTone }}
                >
                  Interactive Pill →
                </button>

                <div className="px-3 py-1 rounded-full bg-black/[0.04] text-[11px] font-mono text-[#555555]">
                  State: <strong className="text-[#151515]">{activeButtonState}</strong>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
