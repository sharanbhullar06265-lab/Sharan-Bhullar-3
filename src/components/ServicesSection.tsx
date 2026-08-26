import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Clock, Sparkles, Send } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-20 sm:py-28 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Container Island */}
      <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.07] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] p-6 sm:p-12 md:p-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-black/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#20B8B0]" />
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#777777]">
                SERVICES & CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#151515]">
              What I Can Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Whether you are launching a new enterprise or upgrading an outdated presence, I deliver bespoke websites designed to convert.
          </p>
        </div>

        {/* 2-Column Desktop Grid: Left Interactive List, Right Dynamic Preview Dock */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Clean Vertical List (01 to 08) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/[0.06]">
            {SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative py-5 sm:py-6 px-4 sm:px-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-black/[0.03]'
                      : 'hover:bg-black/[0.015]'
                  }`}
                >
                  <div className="flex items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span className={`text-sm sm:text-base font-mono font-bold transition-colors ${
                        isSelected ? 'text-[#20B8B0]' : 'text-[#999999] group-hover:text-[#151515]'
                      }`}>
                        {service.number}
                      </span>

                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className={`text-lg sm:text-2xl font-bold tracking-tight transition-colors ${
                            isSelected ? 'text-[#151515]' : 'text-[#333333] group-hover:text-[#151515]'
                          }`}>
                            {service.name}
                          </h3>
                          {service.badge && isSelected && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#20B8B0]/15 text-[#0E8A83]">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-xs sm:text-sm text-[#777777] mt-1 line-clamp-1 group-hover:line-clamp-none transition-all">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isSelected
                        ? 'bg-[#151515] text-white rotate-0'
                        : 'bg-black/[0.04] text-[#777777] group-hover:bg-[#151515] group-hover:text-white'
                    }`}>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Expanded details when active on mobile */}
                  <div className="lg:hidden mt-3 pt-3 border-t border-black/[0.06]">
                    <p className="text-xs text-[#555555] mb-3">{service.description}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectServiceForInquiry(service.name);
                      }}
                      className="w-full text-xs font-bold py-2 px-3 rounded-xl bg-[#151515] text-white flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire About {service.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Interactive Preview Dock (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAFAFA] rounded-3xl p-7 border border-black/[0.08] shadow-lg flex flex-col gap-6"
              >
                {/* Header with pill tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#777777]">
                    SERVICE {activeService.number} / 08
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#20B8B0]/15 text-[#0E8A83] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {activeService.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-extrabold text-[#151515] tracking-tight mb-2">
                    {activeService.name}
                  </h4>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Simulated interactive preview card widget */}
                <div className="bg-white rounded-2xl p-4 border border-black/[0.06] shadow-sm">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/[0.04]">
                    <span className="text-[11px] font-bold text-[#151515] uppercase tracking-wider">
                      {activeService.previewMockup.tag}
                    </span>
                    <span className="text-xs font-bold text-[#20B8B0]">
                      {activeService.previewMockup.metric}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-[#151515] mb-1">
                    {activeService.previewMockup.header}
                  </h5>
                  <p className="text-xs text-[#777777]">
                    {activeService.previewMockup.sub}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div>
                  <h5 className="text-xs font-bold text-[#151515] uppercase tracking-wider mb-2.5">
                    What is Included
                  </h5>
                  <ul className="grid grid-cols-1 gap-2">
                    {activeService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#444444]">
                        <div className="w-4 h-4 rounded-full bg-[#20B8B0]/15 flex items-center justify-center text-[#0E8A83] flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for & Turnaround */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#777777]">
                    <Clock className="w-3.5 h-3.5 text-[#20B8B0]" />
                    <span>Timeline: <strong className="text-[#151515]">{activeService.deliverableTime}</strong></span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={() => onSelectServiceForInquiry(activeService.name)}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-[#151515] hover:bg-[#20B8B0] text-white py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                >
                  <span>Inquire for {activeService.name}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
