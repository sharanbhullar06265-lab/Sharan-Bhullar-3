import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, PenTool, Monitor, Compass, CheckCircle2 } from 'lucide-react';

export const TickerBanner: React.FC = () => {
  const tickerItems = [
    { text: 'Modern websites', dotColor: '#FA6A38' },
    { text: 'Fast turnaround', dotColor: '#111613' },
    { text: 'Trusted by local businesses', dotColor: '#375323' },
    { text: 'Mobile-first design', dotColor: '#FA6A38' },
    { text: 'Book a free call', dotColor: '#2A55FF' },
    { text: 'Clean code & high conversion', dotColor: '#111613' },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#CCE4B2] rounded-3xl sm:rounded-[36px] overflow-hidden my-6 border border-[#B9D79B]">
      {/* Marquee Track */}
      <div className="overflow-hidden py-2 mask-fade-edges">
        <div className="flex gap-12 sm:gap-16 w-max animate-marquee text-[#111613]">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-4">
              <span
                className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.dotColor }}
              />
              <span className="text-2xl sm:text-4xl font-extrabold tracking-tight whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Circular Icons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="w-11 h-11 rounded-full bg-white/70 flex items-center justify-center text-[#111613] hover:bg-white transition-colors shadow-xs">
          <PenTool className="w-4 h-4 text-[#111613]" />
        </div>
        <div className="w-11 h-11 rounded-full bg-white/70 flex items-center justify-center text-[#111613] hover:bg-white transition-colors shadow-xs">
          <Monitor className="w-4 h-4 text-[#111613]" />
        </div>
        <div className="w-11 h-11 rounded-full bg-white/70 flex items-center justify-center text-[#111613] hover:bg-white transition-colors shadow-xs">
          <Compass className="w-4 h-4 text-[#111613]" />
        </div>
        <div className="w-11 h-11 rounded-full bg-white/70 flex items-center justify-center text-[#111613] hover:bg-white transition-colors shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-[#FA6A38]" />
        </div>
      </div>
    </section>
  );
};
