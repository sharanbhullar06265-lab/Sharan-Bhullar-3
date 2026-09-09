import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

interface BottomDuoCTAProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const BottomDuoCTA: React.FC<BottomDuoCTAProps> = ({
  onStartProject,
  onExploreWork,
}) => {
  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Card 1: Coral Gradient Talk Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 min-h-[340px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#FA6A38] to-[#E85A28] text-white shadow-xl">
          {/* Subtle blurred glowing orb */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/20 blur-2xl pointer-events-none" />
          
          {/* Icon */}
          <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center text-white text-lg">
            ✎
          </div>

          <div className="relative z-10 pt-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Let's talk about your website
            </h3>
            <p className="text-sm sm:text-base text-white/90 font-medium max-w-sm mb-8 leading-relaxed">
              Tell me about your business and I'll get back with a concept plan, timeline and fixed quote within 24 hours.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={onStartProject}
                className="bg-white text-[#111613] hover:bg-[#111613] hover:text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Book a Call →
              </button>

              <a
                href="mailto:sharanbhullar06265@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:underline px-3 py-2"
              >
                <Mail className="w-4 h-4" />
                <span>sharanbhullar06265@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Clean Paper Work Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 min-h-[340px] flex flex-col justify-between overflow-hidden bg-[#F4F6F2] border border-[#E1E4DF] text-[#111613] hover:border-[#111613] transition-all">
          {/* Icon */}
          <div className="w-11 h-11 rounded-full bg-white border border-[#E1E4DF] flex items-center justify-center text-[#111613] text-lg shadow-xs">
            ↗
          </div>

          <div className="pt-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111613] tracking-tight mb-3">
              See more of my work
            </h3>
            <p className="text-sm sm:text-base text-[#68716A] font-medium max-w-sm mb-8 leading-relaxed">
              Browse concept projects and live designs across cafes, clinics, tech startups, boutiques and online stores.
            </p>

            <button
              onClick={onExploreWork}
              className="bg-transparent border border-[#E1E4DF] text-[#111613] hover:bg-[#111613] hover:text-white hover:border-[#111613] px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              View Portfolio →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
