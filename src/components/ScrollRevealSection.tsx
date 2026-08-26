import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { PenTool, Monitor, Plus, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const ScrollRevealSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0.6);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const fullText = "Whether you're a founder launching your first idea or a business ready for a redesign — I connect thoughtful design and clean code to bring your vision online.";
  const words = fullText.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the viewport the element is
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.2;
      const progress = (start - rect.top) / (start - end);
      const clamped = Math.max(0.1, Math.min(1, progress));
      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeCount = Math.round(scrollProgress * words.length);

  return (
    <section ref={containerRef} className="py-12 sm:py-18 px-6 sm:px-12 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E8402F]" />
          <span className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#6E6E6E]">
            THE MANIFESTO
          </span>
        </div>

        {/* Dynamic Highlighted Words */}
        <p className="text-2xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.3] tracking-tight transition-colors duration-300">
          {words.map((word, idx) => {
            const isHighlighted = hoverIndex !== null ? idx <= hoverIndex : idx < activeCount;
            const isAccent = word.toLowerCase().includes('design') || word.toLowerCase().includes('code') || word.toLowerCase().includes('vision');

            return (
              <span
                key={idx}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`inline-block mr-2.5 transition-colors duration-300 cursor-default ${
                  isHighlighted
                    ? isAccent
                      ? 'text-[#E8402F]'
                      : 'text-[#141414]'
                    : 'text-[#D1D0CB]'
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* 3 Circular Icon Badges */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-11 h-11 rounded-full border border-[#E7E6E2] bg-white flex items-center justify-center text-[#141414] shadow-xs hover:border-[#141414] hover:scale-105 transition-all">
            <PenTool className="w-4 h-4" />
          </div>
          <div className="w-11 h-11 rounded-full border border-[#E7E6E2] bg-white flex items-center justify-center text-[#141414] shadow-xs hover:border-[#141414] hover:scale-105 transition-all">
            <Monitor className="w-4 h-4" />
          </div>
          <div className="w-11 h-11 rounded-full border border-[#E7E6E2] bg-white flex items-center justify-center text-[#141414] shadow-xs hover:border-[#141414] hover:scale-105 transition-all">
            <Plus className="w-4 h-4" />
          </div>
        </div>

      </div>
    </section>
  );
};
