import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Sparkles, 
  ArrowUpRight, 
  HeartHandshake, 
  Clock, 
  Zap, 
  CheckCircle2,
  Phone
} from 'lucide-react';

interface AboutPageProps {
  onOpenContact: () => void;
  onBackToPortfolio: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenContact,
  onBackToPortfolio
}) => {
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
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F6F2BE] text-[#554C0D] text-[9.5px] font-bold">
            <Sparkles className="w-3 h-3 text-[#E59400]" />
            <span>The Agency Behind Your Digital Edge</span>
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
              DesignMySites / Built to Convert
            </h2>
            <p className="text-[10px] sm:text-[11px] text-[#555E53] mt-1 max-w-md leading-relaxed">
              We combine sharp aesthetic craftsmanship with data-proven conversion engineering, delivering websites and organic social growth that scale modern brands.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-3.5 py-2 rounded-full bg-[#111613] text-white text-[11px] font-bold hover:bg-[#FF6B3D] transition-colors cursor-pointer shrink-0 shadow-xs flex items-center justify-center gap-1.5 self-start sm:self-auto"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 shrink-0">
        <div className="bg-white rounded-[18px] p-3 border border-white shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-[#FFE6EC] text-[#EA3E69] flex items-center justify-center mb-1.5">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <h4 className="text-[11px] font-bold text-[#111613]">7-Day Fast Turnaround</h4>
          <p className="text-[8.5px] text-[#68716A] mt-0.5 leading-relaxed">
            No bureaucratic delays or endless meetings. We ship production-ready web and social deliverables within days.
          </p>
        </div>

        <div className="bg-white rounded-[18px] p-3 border border-white shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-[#E6F0FF] text-[#2A55FF] flex items-center justify-center mb-1.5">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <h4 className="text-[11px] font-bold text-[#111613]">Hyper-Optimized Speed</h4>
          <p className="text-[8.5px] text-[#68716A] mt-0.5 leading-relaxed">
            Every line of code and every image is audited for peak performance, sub-second load times, and high mobile retention.
          </p>
        </div>

        <div className="bg-white rounded-[18px] p-3 border border-white shadow-xs">
          <div className="w-7 h-7 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mb-1.5">
            <HeartHandshake className="w-3.5 h-3.5" />
          </div>
          <h4 className="text-[11px] font-bold text-[#111613]">100% Guaranteed Satisfaction</h4>
          <p className="text-[8.5px] text-[#68716A] mt-0.5 leading-relaxed">
            We collaborate with unlimited revisions during staging until your digital presence looks and operates precisely as desired.
          </p>
        </div>
      </div>

      {/* Direct Contact Card */}
      <div className="bg-[#F8F4BA] rounded-[22px] p-3.5 border border-[#EDE7A4] flex items-center justify-between gap-3 shadow-xs">
        <div>
          <h4 className="text-[12.5px] font-extrabold text-[#111613] font-['Outfit']">
            Ready to give your brand an unfair advantage?
          </h4>
          <p className="text-[8.5px] text-[#44503E] mt-0.5">
            Schedule a no-obligation consultation with our founder today.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="px-3.5 py-2 rounded-full bg-[#111613] text-white text-[10px] font-bold hover:bg-[#FF6B3D] transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-1.5"
        >
          <Phone className="w-3 h-3" />
          <span>Book Call</span>
        </button>
      </div>
    </motion.div>
  );
};
