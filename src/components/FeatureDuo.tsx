import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Check, Sparkles, ArrowRight, X, Layers, Code, Rocket } from 'lucide-react';

interface FeatureDuoProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const FeatureDuo: React.FC<FeatureDuoProps> = ({
  onStartProject,
  onExploreWork,
}) => {
  const [showProcessModal, setShowProcessModal] = useState(false);

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 md:px-16 border-t border-[#E1E4DF]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FA6A38]" />
          <span className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#68716A]">
            YOUR STORY <span className="text-[#FA6A38]">TOLD WELL</span>
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111613] tracking-tight leading-tight">
          Every business has a story worth a good website
        </h2>
      </div>

      {/* Feature Duo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Navy Visual (Design, Build, Launch) */}
        <div className="bg-[#F4F6F2] border border-[#E1E4DF] rounded-3xl p-3.5 flex flex-col justify-between group hover:border-[#111613] transition-all duration-300">
          <div 
            onClick={() => setShowProcessModal(true)}
            className="relative h-[250px] sm:h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1B2340] to-[#141B33] flex items-center justify-center cursor-pointer p-4 group-hover:shadow-lg transition-shadow"
          >
            {/* Play Badge */}
            <div className="absolute top-4 left-4 z-10 bg-white rounded-full px-3 py-1.5 text-[12px] font-extrabold text-[#111613] shadow-md flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#111613] text-white flex items-center justify-center text-[8px]">
                <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
              </span>
              <span>Watch process</span>
            </div>

            {/* Angled Mini Preview Card */}
            <motion.div
              animate={{ rotate: [-6, -4, -6], y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-[170px] h-[210px] rounded-2xl bg-white border border-[#E1E4DF] shadow-2xl p-3 flex flex-col justify-between"
            >
              <div className="h-5 px-2 flex items-center gap-1 bg-[#F4F6F2] rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
              </div>
              <div className="space-y-1.5">
                <div className="w-16 h-2 rounded bg-[#111613]" />
                <div className="w-10 h-1.5 rounded bg-[#E1E4DF]" />
              </div>
              <div className="w-full h-16 rounded-xl bg-gradient-to-br from-[#CCE4B2] to-[#CCE4B2]/80 p-2 flex flex-col justify-end">
                <span className="text-[8px] font-black text-[#1E2E17]">Live Launch</span>
              </div>
              <div className="w-12 h-3 rounded-full bg-[#111613]" />
            </motion.div>
          </div>

          <div className="p-5 pt-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111613] mb-2 tracking-tight">
              Design, Build, Launch
            </h3>
            <p className="text-sm text-[#68716A] font-medium leading-relaxed">
              A clear, guided process from first sketch to a live website — so you always know what's next and stay in total control.
            </p>
          </div>
        </div>

        {/* Card 2: Paper Visual (Where Design Meets Business) */}
        <div className="bg-[#F4F6F2] border border-[#E1E4DF] rounded-3xl p-3.5 flex flex-col justify-between group hover:border-[#111613] transition-all duration-300">
          <div 
            onClick={onStartProject}
            className="relative h-[250px] sm:h-[280px] rounded-2xl overflow-hidden bg-white border border-[#E1E4DF] flex items-center justify-center cursor-pointer p-4 group-hover:shadow-lg transition-shadow"
          >
            {/* Concentric Geometric Radar / Target Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-[#E1E4DF] absolute animate-ping opacity-20" />
              <div className="w-40 h-40 rounded-full border border-[#FA6A38]/20 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border-2 border-[#FA6A38]/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#FA6A38] flex items-center justify-center bg-[#FFF0EB]">
                    <div className="w-8 h-8 rounded-full bg-[#FA6A38] flex items-center justify-center text-white text-xs font-black shadow-md">
                      ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-[#111613] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
              Conversion Architecture
            </div>
          </div>

          <div className="p-5 pt-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111613] mb-2 tracking-tight">
              Where Design Meets Business
            </h3>
            <p className="text-sm text-[#68716A] font-medium leading-relaxed">
              Every layout, color and word is chosen to move visitors toward one thing: contacting you and buying with confidence.
            </p>
          </div>
        </div>

      </div>

      {/* Process Modal */}
      <AnimatePresence>
        {showProcessModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#E1E4DF] shadow-2xl relative"
            >
              <button
                onClick={() => setShowProcessModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4F6F2] flex items-center justify-center text-[#111613] hover:bg-[#111613] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FA6A38]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#68716A]">
                  OUR 3-WEEK PROCESS
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111613] mb-4">
                How we go from idea to launch
              </h3>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-2xl bg-[#F4F6F2] border border-[#E1E4DF] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#111613] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#141414]">Discovery &amp; Strategy Call</h4>
                    <p className="text-xs text-[#6E6E6E] mt-0.5">We clarify your business goals, target audience, and website structure.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F3F3F1] border border-[#E7E6E2] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E8402F] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#141414]">Figma Visual Design</h4>
                    <p className="text-xs text-[#6E6E6E] mt-0.5">100% custom UI screens created for mobile and desktop for your review.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F3F3F1] border border-[#E7E6E2] flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#2A55FF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#141414]">Development &amp; Launch</h4>
                    <p className="text-xs text-[#6E6E6E] mt-0.5">Fast, clean code, SEO tags, domain setup, and live deployment.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowProcessModal(false);
                  onStartProject();
                }}
                className="w-full bg-[#141414] text-white py-3.5 rounded-full font-bold text-sm hover:bg-[#E8402F] transition-colors"
              >
                Book a Free Discovery Call →
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
