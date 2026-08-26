import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Smartphone, Zap, TrendingUp, Check, X, Sparkles, ShieldCheck } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/servicesData';

export const WhyWorkWithMe: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    LayoutGrid: <LayoutGrid className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
  };

  return (
    <section id="why-me" className="py-20 sm:py-28 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.07] p-6 sm:p-12 md:p-18 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)]">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#20B8B0]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#777777]">
              WHY WORK WITH ME
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#151515] leading-[1.08] mb-6">
            A WEBSITE IS MORE THAN
            <br />
            <span className="text-[#20B8B0]">A PRETTY SCREEN.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#555555] leading-relaxed max-w-3xl">
            It should help people understand your business, trust you and take action.
          </p>
        </div>

        {/* 4 Minimalist Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_WORK_WITH_ME.map((point, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#FAFAFA] border border-black/[0.05] hover:border-[#20B8B0]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#151515] text-white flex items-center justify-center mb-6">
                  {iconMap[point.iconName]}
                </div>
                
                <h3 className="text-lg sm:text-xl font-extrabold text-[#151515] tracking-tight mb-1">
                  {point.title}
                </h3>
                
                <div className="text-xs font-semibold text-[#20B8B0] mb-3">
                  {point.tagline}
                </div>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-black/[0.05] text-[11px] font-bold text-[#151515]">
                ✓ {point.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Strip: Working with DesignMySite vs The Alternatives */}
        <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-10 border border-black/[0.06]">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#20B8B0]" />
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#151515]">
              Direct Designer Partner vs Traditional Agency
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border-2 border-[#20B8B0] shadow-sm">
              <div className="text-xs font-bold text-[#20B8B0] uppercase tracking-wider mb-2">
                DESIGNMYSITE (Direct Maker)
              </div>
              <ul className="space-y-2 text-xs text-[#222222]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#20B8B0]" />
                  <span>Direct communication with the actual designer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#20B8B0]" />
                  <span>100% custom bespoke code & Figma designs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#20B8B0]" />
                  <span>Fast 2–3 week launch timeline with zero bureaucracy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#20B8B0]" />
                  <span>Transparent fixed-price investment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/60 p-5 rounded-2xl border border-black/[0.06]">
              <div className="text-xs font-bold text-[#777777] uppercase tracking-wider mb-2">
                Large Agency
              </div>
              <ul className="space-y-2 text-xs text-[#666666]">
                <li className="flex items-center gap-2 text-red-500">
                  <X className="w-3.5 h-3.5" />
                  <span>Slow account managers & junior outsourced staff</span>
                </li>
                <li className="flex items-center gap-2 text-red-500">
                  <X className="w-3.5 h-3.5" />
                  <span>Huge overhead costs ($15k–$40k minimums)</span>
                </li>
                <li className="flex items-center gap-2 text-red-500">
                  <X className="w-3.5 h-3.5" />
                  <span>3 to 6 months sluggish timeline</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/60 p-5 rounded-2xl border border-black/[0.06]">
              <div className="text-xs font-bold text-[#777777] uppercase tracking-wider mb-2">
                DIY Builders & Cheap Freelancers
              </div>
              <ul className="space-y-2 text-xs text-[#666666]">
                <li className="flex items-center gap-2 text-red-500">
                  <X className="w-3.5 h-3.5" />
                  <span>Generic cookie-cutter templates with zero identity</span>
                </li>
                <li className="flex items-center gap-2 text-red-500">
                  <X className="w-3.5 h-3.5" />
                  <span>Slow mobile performance and bloated code</span>
                </li>
                <li className="flex items-center gap-2 text-red-500">
                  <X className="w-3.5 h-3.5" />
                  <span>No conversion strategy or SEO foundation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
