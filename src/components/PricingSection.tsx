import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <section id="pricing" className="py-16 sm:py-24 px-6 sm:px-12 md:px-16 border-t border-[#E1E4DF]">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FA6A38]" />
          <span className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#68716A]">
            PACKAGES
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111613] tracking-tight">
          Simple pricing, no surprises
        </h2>

        <p className="text-base text-[#68716A] font-medium mt-4">
          Pick the package that fits where your business is right now.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center bg-[#F4F6F2] border border-[#E1E4DF] rounded-full p-1 mt-6">
          <button
            onClick={() => setCurrency('INR')}
            className={`px-4 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              currency === 'INR' ? 'bg-[#111613] text-white shadow-xs' : 'text-[#68716A] hover:text-[#111613]'
            }`}
          >
            INR (₹)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-4 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              currency === 'USD' ? 'bg-[#111613] text-white shadow-xs' : 'text-[#68716A] hover:text-[#111613]'
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* 3-Tier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
        
        {/* Tier 1: Starter */}
        <div className="bg-[#F4F6F2] border border-[#E1E4DF] rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#111613] transition-all">
          <div>
            <div className="text-[15px] font-bold text-[#111613] mb-3">
              Starter
            </div>

            <div className="flex items-baseline gap-1 font-extrabold text-[#111613] mb-2">
              <span className="text-2xl font-bold">{currency === 'INR' ? '₹' : '$'}</span>
              <span className="text-5xl tracking-tight">{currency === 'INR' ? '15k' : '499'}</span>
              <span className="text-sm font-semibold text-[#68716A]">/ project</span>
            </div>

            <p className="text-[13.5px] text-[#68716A] font-medium mb-6">
              A focused one-page site to get you online fast and looking credible.
            </p>

            <ul className="space-y-3 pt-6 border-t border-[#E1E4DF] text-[13.5px] font-medium text-[#111613]">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>Up to 5 custom sections</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>100% Mobile responsive</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>1 round of revisions</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>Fast 5–7 day delivery</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectTier('Starter Package')}
            className="w-full mt-8 bg-white border border-[#E1E4DF] text-[#111613] hover:bg-[#111613] hover:text-white py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer shadow-xs"
          >
            Get Started →
          </button>
        </div>

        {/* Tier 2: Growth (Most Popular - Vibrant Coral Card) */}
        <div className="bg-[#FA6A38] text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative transform md:-translate-y-2">
          {/* Popular Badge */}
          <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-xs text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Most popular
          </div>

          <div>
            <div className="text-[15px] font-bold text-white/90 mb-3">
              Growth
            </div>

            <div className="flex items-baseline gap-1 font-extrabold text-white mb-2">
              <span className="text-2xl font-bold">{currency === 'INR' ? '₹' : '$'}</span>
              <span className="text-5xl tracking-tight">{currency === 'INR' ? '40k' : '1,299'}</span>
              <span className="text-sm font-semibold text-white/80">/ project</span>
            </div>

            <p className="text-[13.5px] text-white/90 font-medium mb-6">
              A full multi-page website built to establish authority and convert visitors.
            </p>

            <ul className="space-y-3 pt-6 border-t border-white/20 text-[13.5px] font-medium text-white">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>Up to 8 bespoke pages</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>SEO-ready structure &amp; Meta tags</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>3 rounds of revisions</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>Basic CMS &amp; Blog setup</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>2–3 week launch timeline</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectTier('Growth Package')}
            className="w-full mt-8 bg-white text-[#FA6A38] hover:bg-[#111613] hover:text-white py-3.5 rounded-full font-extrabold text-sm transition-all cursor-pointer shadow-lg"
          >
            Start Growth Project →
          </button>
        </div>

        {/* Tier 3: Custom */}
        <div className="bg-[#F4F6F2] border border-[#E1E4DF] rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#111613] transition-all">
          <div>
            <div className="text-[15px] font-bold text-[#111613] mb-3">
              Custom
            </div>

            <div className="flex items-baseline gap-1 font-extrabold text-[#111613] mb-2">
              <span className="text-4xl sm:text-5xl tracking-tight">Let's talk</span>
            </div>

            <p className="text-[13.5px] text-[#68716A] font-medium mb-6">
              E-commerce, web applications, custom features or complete brand redesigns.
            </p>

            <ul className="space-y-3 pt-6 border-t border-[#E1E4DF] text-[13.5px] font-medium text-[#111613]">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>Fully scoped to your goals</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>Shopify / Stripe cart &amp; checkout</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>Custom API integrations</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#111613] flex-shrink-0" />
                <span>Ongoing design support option</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelectTier('Custom Scope')}
            className="w-full mt-8 bg-[#111613] text-white hover:bg-[#FA6A38] py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer shadow-xs"
          >
            Schedule Consultation →
          </button>
        </div>

      </div>
    </section>
  );
};
