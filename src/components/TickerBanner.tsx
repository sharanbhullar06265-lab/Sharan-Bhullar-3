import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, PenTool, Monitor, Compass, CheckCircle2 } from 'lucide-react';

export const TickerBanner: React.FC = () => {
  const tickerItems = [
    { text: 'Modern websites', dotColor: '#141414' },
    { text: 'Fast turnaround', dotColor: '#E8402F' },
    { text: 'Trusted by local businesses', dotColor: '#2A55FF' },
    { text: 'Mobile-first design', dotColor: '#141414' },
    { text: 'Book a free call', dotColor: '#7C4DFF' },
    { text: 'Clean code & high conversion', dotColor: '#E8402F' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#E9FF4D] rounded-3xl sm:rounded-[36px] overflow-hidden my-6 border border-[#E7E6E2]">
      {/* Marquee Track */}
      <div className="overflow-hidden py-3 mask-fade-edges">
        <div className="flex gap-12 sm:gap-16 w-max animate-marquee text-[#141414]">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-4">
              <span
                className="w-3.5 h-3.5 rounded-lg flex-shrink-0"
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
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[#141414] hover:bg-black/20 transition-colors">
          <PenTool className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[#141414] hover:bg-black/20 transition-colors">
          <Monitor className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[#141414] hover:bg-black/20 transition-colors">
          <Compass className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-[#141414] hover:bg-black/20 transition-colors">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
