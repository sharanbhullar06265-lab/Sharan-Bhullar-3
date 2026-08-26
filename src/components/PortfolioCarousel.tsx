import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projectsData';

interface PortfolioCarouselProps {
  onOpenProjectModal: (project: Project) => void;
  onStartProject: () => void;
}

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  onOpenProjectModal,
  onStartProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecom' | 'branding' | 'business'>('all');

  const galleryItems = [
    // 1. Sunglasses Fashion Model Card (Full Width Hero Card as in Video 00:06)
    {
      id: 'fashion-shades',
      type: 'hero-wide',
      brand: 'Éclat Eyewear',
      tag: 'FASHION & LIFESTYLE',
      handle: '@eclat',
      title: 'Iconic Optical Aesthetics',
      description: 'Handcrafted Italian acetate frames tailored for visionaries.',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
      color: '#FFFFFF',
      category: 'ecom',
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-3',
      height: 'h-[280px] sm:h-[340px]',
    },
    // 2. Bonafide Brand Identity (Dark 3D render)
    {
      id: 'brand-bonafide',
      type: 'standard',
      brand: 'BONAFIDE',
      tag: 'BRAND IDENTITY',
      handle: '@coplin',
      title: 'Elevate Your Brand Identity',
      description: 'Crafted brand and experience systems that turn visitors into loyal advocates.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      color: '#12141A',
      dark: true,
      category: 'branding',
      colSpan: 'col-span-1',
      height: 'h-[320px]',
    },
    // 3. GreenBite Organic Bowls
    {
      id: 'green-bite',
      type: 'standard',
      brand: 'GreenBite',
      tag: 'ORGANIC FOOD',
      handle: '@greenbite',
      title: 'Healthy food, healthy life.',
      description: 'Organic ingredients and delicious meals delivered directly to your door.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
      color: '#FFFFFF',
      dark: false,
      category: 'business',
      colSpan: 'col-span-1',
      height: 'h-[320px]',
    },
    // 4. Furni. Scandinavian Minimal Furniture
    {
      id: 'furni-nordic',
      type: 'standard',
      brand: 'Furni.',
      tag: 'FURNITURE & E-COM',
      handle: '@furni',
      title: 'New Collection. Better Everyday.',
      description: 'Discover newly launched minimalist home collection made for mindful living.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      color: '#FFFFFF',
      dark: false,
      category: 'ecom',
      colSpan: 'col-span-1',
      height: 'h-[320px]',
    },
    // 5. Warm Roaster Coffee
    {
      id: 'warm-roaster',
      type: 'standard',
      brand: 'Artisan Roast',
      tag: 'HOSPITALITY',
      handle: '@roastcafe',
      title: 'Freshly Roasted Specialty Coffee',
      description: 'Single-origin beans sustainably sourced and precision roasted daily.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
      color: '#FFFFFF',
      dark: false,
      category: 'business',
      colSpan: 'col-span-1',
      height: 'h-[320px]',
    },
    // 6. Audio Tech (Dark Headphones)
    {
      id: 'bold-design',
      type: 'standard',
      brand: '@designmysite',
      tag: 'TECH & AUDIO',
      handle: '@designmysite',
      title: 'Bold Design. Clean Code.',
      description: 'Intuitive modern interfaces and responsive frontend architectures.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      color: '#14161C',
      dark: true,
      category: 'branding',
      colSpan: 'col-span-1',
      height: 'h-[320px]',
    },
    // 7. Cosmetics & Aesthetics
    {
      id: 'cosmetics',
      type: 'standard',
      brand: 'AURA GLOW',
      tag: 'BEAUTY & CARE',
      handle: '@auraglow',
      title: 'Cosmetics & Natural Aesthetics',
      description: 'Clean skincare botanical formulations formulated by dermatologists.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      color: '#FFFFFF',
      dark: false,
      category: 'ecom',
      colSpan: 'col-span-1',
      height: 'h-[320px]',
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="work" className="py-16 sm:py-24 px-6 sm:px-12 md:px-16 border-t border-[#E7E6E2]/80">
      
      {/* Header with Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[#20B8B0] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
              SELECTED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] tracking-tight">
            Curated Showcase Gallery<span className="text-[#20B8B0]">.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="inline-flex bg-[#F3F3F1] rounded-full p-1.5 border border-[#E7E6E2] self-start md:self-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ecom', label: 'E-Commerce' },
            { id: 'branding', label: 'Branding' },
            { id: 'business', label: 'Websites' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#141414] text-white shadow-xs'
                  : 'text-[#6E6E6E] hover:text-[#141414]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Gallery (Matches Video 00:06-00:07) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const isWide = item.type === 'hero-wide';
          const isDark = item.dark;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => onOpenProjectModal(PROJECTS[0])}
              className={`${item.colSpan} ${item.height} rounded-[24px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(20,20,20,0.18)] hover:shadow-[0_25px_60px_-15px_rgba(32,184,176,0.3)] transition-all duration-300 cursor-pointer border ${
                isDark ? 'border-white/10' : 'border-[#E3E2DD]'
              } relative group flex flex-col justify-between`}
              style={{ backgroundColor: item.color }}
            >
              {/* Wide Hero Style */}
              {isWide ? (
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#20B8B0] text-[10px] font-extrabold tracking-wider uppercase text-white">
                        {item.tag}
                      </span>
                      <span className="text-[12px] font-bold text-white/80">{item.handle}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80 max-w-lg">{item.description}</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Card Header */}
                  <div
                    className={`px-4 py-3 flex items-center justify-between border-b ${
                      isDark ? 'border-white/10 bg-white/5' : 'border-[#EFEFEA] bg-[#FAFAF8]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                    </div>
                    <span className={`text-[11px] font-bold tracking-wider uppercase ${isDark ? 'text-white/70' : 'text-[#141414]/70'}`}>
                      {item.brand}
                    </span>
                    <span className={`text-[10px] font-mono ${isDark ? 'text-white/40' : 'text-black/30'}`}>
                      {item.handle}
                    </span>
                  </div>

                  {/* Visual Image */}
                  <div className="flex-1 relative overflow-hidden bg-black/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-[#141414] px-4 py-2 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#20B8B0]" />
                        <span>View Project</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Footer Info */}
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className={`text-[13.5px] font-extrabold leading-tight ${isDark ? 'text-white' : 'text-[#141414]'}`}>
                        {item.title}
                      </h4>
                      <span className={`text-[10.5px] font-medium ${isDark ? 'text-white/50' : 'text-[#7A7A78]'}`}>
                        {item.tag}
                      </span>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[#20B8B0] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Action */}
      <div className="mt-12 text-center">
        <button
          onClick={onStartProject}
          className="inline-flex items-center gap-2 bg-[#20B8B0] text-white px-8 py-3.5 rounded-full text-[14.5px] font-bold hover:bg-[#199E97] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-md"
        >
          <span>Start Your Custom Website</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
