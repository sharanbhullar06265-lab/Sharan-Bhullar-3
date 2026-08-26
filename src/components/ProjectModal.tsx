import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Type, 
  Globe, 
  Sparkles,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProjectForInquiry: (projectName: string, projectType: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProjectForInquiry
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto bg-black/60 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl bg-white rounded-[32px] sm:rounded-[44px] shadow-2xl border border-black/[0.1] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-black/[0.08] bg-white sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#20B8B0]" />
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#151515] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-[#777777] font-medium">
                  {project.clientType} • Case Study & Interactive Mockup
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Responsive Device Switcher */}
              <div className="hidden sm:flex items-center gap-1 bg-[#F1F1F1] p-1 rounded-full text-xs">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors cursor-pointer ${
                    deviceView === 'desktop' ? 'bg-white shadow-xs text-[#151515] font-bold' : 'text-[#777777]'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors cursor-pointer ${
                    deviceView === 'tablet' ? 'bg-white shadow-xs text-[#151515] font-bold' : 'text-[#777777]'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span>Tablet</span>
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors cursor-pointer ${
                    deviceView === 'mobile' ? 'bg-white shadow-xs text-[#151515] font-bold' : 'text-[#777777]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/[0.05] hover:bg-black/[0.1] text-[#151515] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
            
            {/* Viewport Interactive Showcase Box */}
            <div className="bg-[#EBEBEB] rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex justify-center items-center border border-black/[0.08]">
              <div
                className={`transition-all duration-500 bg-white shadow-2xl rounded-2xl overflow-hidden border border-black/[0.08] ${
                  deviceView === 'desktop'
                    ? 'w-full max-w-4xl'
                    : deviceView === 'tablet'
                    ? 'w-[580px]'
                    : 'w-[340px]'
                }`}
              >
                {/* Mockup Topbar */}
                <div className="px-4 py-2.5 bg-[#F7F7F7] border-b border-black/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[#555555] font-mono text-[11px] bg-white px-3 py-1 rounded-full border border-black/[0.06]">
                    <Globe className="w-3 h-3 text-[#20B8B0]" />
                    <span>{project.previewUrlTitle}</span>
                  </div>
                  <div className="text-[10px] text-[#888888] font-mono uppercase">
                    {deviceView} viewport
                  </div>
                </div>

                {/* Simulated Web Page Content */}
                <div className="p-6 sm:p-8 bg-white max-h-[500px] overflow-y-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
                    <span className="font-extrabold text-sm tracking-tight text-[#151515]">
                      {project.mockupData.navbarLogo}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/[0.04] text-[#444444]">
                      {project.mockupData.badgeText}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl sm:text-3xl font-extrabold text-[#151515] tracking-tight leading-tight mb-2">
                      {project.mockupData.heroHeadline}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {project.mockupData.heroSubheadline}
                    </p>
                  </div>

                  <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 shadow-md">
                    <img
                      src={project.mockupData.bannerImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.mockupData.sampleCards.map((card, idx) => (
                      <div key={idx} className="bg-[#FAFAFA] p-3 rounded-xl border border-black/[0.04] flex items-center gap-3">
                        {card.image && (
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div className="truncate">
                          {card.tag && (
                            <span className="text-[9px] font-bold text-[#20B8B0] uppercase">{card.tag}</span>
                          )}
                          <div className="text-xs font-bold text-[#151515] truncate">{card.title}</div>
                          <div className="text-[10px] text-[#777777] truncate">{card.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Case Study Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#777777] mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-[#333333] leading-relaxed bg-[#F9F9F9] p-4 rounded-2xl border border-black/[0.04]">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#777777] mb-2">
                    Design & UX Solution
                  </h4>
                  <p className="text-sm text-[#333333] leading-relaxed bg-[#F9F9F9] p-4 rounded-2xl border border-black/[0.04]">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Business Results & Tech Stack */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#777777] mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#20B8B0]" />
                    Measurable Results
                  </h4>
                  <div className="space-y-2 bg-[#F9F9F9] p-4 rounded-2xl border border-black/[0.04]">
                    {project.caseStudy.results.map((res, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#222222]">
                        <CheckCircle2 className="w-4 h-4 text-[#20B8B0] flex-shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech & Design Tokens */}
                <div className="bg-[#F9F9F9] p-4 rounded-2xl border border-black/[0.04] flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#777777] flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5" /> Tech Stack
                    </span>
                    <span className="font-medium text-[#151515]">
                      {project.caseStudy.techStack.join(' • ')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#777777] flex items-center gap-1">
                      <Type className="w-3.5 h-3.5" /> Typography
                    </span>
                    <span className="font-medium text-[#151515]">
                      {project.caseStudy.typography}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="font-bold text-[#777777] flex items-center gap-1">
                      <Palette className="w-3.5 h-3.5" /> Color Palette
                    </span>
                    <div className="flex items-center gap-1.5">
                      {project.caseStudy.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Action Strip */}
            <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#777777] text-center sm:text-left">
                Need a similar website designed for your business?
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-black/[0.12] text-xs font-bold text-[#555555] hover:bg-black/[0.04] transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
                <button
                  onClick={() => {
                    onSelectProjectForInquiry(project.title, project.category);
                    onClose();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#20B8B0] hover:bg-[#151515] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                >
                  <span>Build a Website Like This</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
