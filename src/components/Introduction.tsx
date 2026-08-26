import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Monitor, Smartphone, Palette, Gauge } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="max-w-5xl mx-auto">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#20B8B0]" />
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#777777]">
            WHAT I DO
          </span>
        </motion.div>

        {/* Large Statement Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#151515] leading-[1.08] mb-8 sm:mb-12"
        >
          I TURN IDEAS INTO
          <br />
          <span className="text-[#20B8B0]">BEAUTIFUL WEBSITES.</span>
        </motion.h2>

        {/* Supporting Editorial Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xl sm:text-2xl md:text-3xl text-[#555555] font-normal leading-relaxed max-w-4xl mb-12 sm:mb-16"
        >
          I help businesses create modern digital experiences that look professional, feel easy to use and work seamlessly across every screen.
        </motion.p>

        {/* Minimalist 4-Pillar Craft Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-black/[0.08]"
        >
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
            <div className="w-8 h-8 rounded-full bg-[#151515] text-white flex items-center justify-center text-xs font-bold mb-1">
              <Monitor className="w-4 h-4 text-[#20B8B0]" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#151515]">Pixel-Perfect UX</h4>
            <p className="text-xs text-[#777777] leading-relaxed">
              Every spacing, typeface, and layout is calculated for effortless visual hierarchy.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
            <div className="w-8 h-8 rounded-full bg-[#151515] text-white flex items-center justify-center text-xs font-bold mb-1">
              <Smartphone className="w-4 h-4 text-[#20B8B0]" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#151515]">Mobile Mastery</h4>
            <p className="text-xs text-[#777777] leading-relaxed">
              Built mobile-first from day one to delight on iOS, Android, and tablets.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
            <div className="w-8 h-8 rounded-full bg-[#151515] text-white flex items-center justify-center text-xs font-bold mb-1">
              <Gauge className="w-4 h-4 text-[#20B8B0]" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#151515]">Sub-2s Speed</h4>
            <p className="text-xs text-[#777777] leading-relaxed">
              Clean, lightweight code optimized for instant loading and 95+ PageSpeed scores.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
            <div className="w-8 h-8 rounded-full bg-[#151515] text-white flex items-center justify-center text-xs font-bold mb-1">
              <Palette className="w-4 h-4 text-[#20B8B0]" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#151515]">Conversion-Led</h4>
            <p className="text-xs text-[#777777] leading-relaxed">
              Clear storytelling designed to turn curious visitors into paying clients.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
