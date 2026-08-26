import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Code2, Rocket, Clock, Check, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/servicesData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Search, PenTool, Code2, Rocket];

  return (
    <section id="process" className="py-20 sm:py-28 md:py-36 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.07] p-6 sm:p-12 md:p-18 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-black/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#20B8B0]" />
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#777777]">
                COLLABORATION WORKFLOW
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#151515]">
              HOW I WORK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            A structured, stress-free process designed to take your website from initial concept to a high-performing launch in 3–4 weeks.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? 'bg-[#FAFAFA] border-[#20B8B0]/50 shadow-md ring-1 ring-[#20B8B0]/20'
                    : 'bg-white border-black/[0.06] hover:bg-[#FAFAFA]'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#20B8B0] bg-[#20B8B0]/10 px-2.5 py-1 rounded-full">
                      STEP {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-black/[0.04] text-[#151515] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#151515] tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#777777] mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div>
                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-black/[0.06] space-y-1.5 mb-4">
                    <div className="text-[10px] font-bold text-[#999999] uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#444444]">
                        <Check className="w-3 h-3 text-[#20B8B0] flex-shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration Tag */}
                  <div className="flex items-center gap-1 text-[11px] text-[#777777] font-medium pt-2">
                    <Clock className="w-3 h-3 text-[#20B8B0]" />
                    <span>Duration: <strong className="text-[#151515]">{step.duration}</strong></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
