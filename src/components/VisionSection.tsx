import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShoppingBag, Layout, Store, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface VisionSectionProps {
  onExploreWork: () => void;
  onSelectService: (serviceName: string) => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({
  onExploreWork,
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<'ecom' | 'business' | 'local'>('ecom');
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  const ecomFannedCards = [
    {
      id: 'furni',
      brand: 'Furni.',
      nav: ['Home', 'Shop', 'Collections', 'About'],
      title: 'New Collection. Better Everyday.',
      description: 'Discover our newly launched minimalist home collection made for intentional modern living.',
      cta: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      bg: '#FFFFFF',
      theme: 'light',
      tx: 0,
      ty: 0,
      rot: 0,
      zIndex: 10,
    },
    {
      id: 'audio',
      brand: '@coplin',
      title: 'World Design Experiences',
      description: 'Experience pure clarity and immersive sound with cutting edge acoustics.',
      cta: 'Explore More',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      bg: '#14161E',
      theme: 'dark',
      tx: -70,
      ty: 20,
      rot: -8,
      zIndex: 6,
    },
    {
      id: 'brand',
      brand: 'BONAFIDE',
      title: 'Elevate Your Brand Identity',
      description: 'Crafted brand and experience systems that turn visitors into loyal customers.',
      cta: 'View Project',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      bg: '#12141A',
      theme: 'dark',
      tx: 70,
      ty: 20,
      rot: 8,
      zIndex: 4,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-6 sm:px-12 md:px-16 border-t border-[#E1E4DF]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: E-Commerce / Marketplace Showcase */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[#FA6A38] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
                {activeTab === 'ecom' ? 'E-COMMERCE' : activeTab === 'business' ? 'CUSTOM WEBSITES' : 'LOCAL BUSINESS'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#111613] tracking-tight leading-[1.08] mb-5">
              {activeTab === 'ecom' ? (
                <>Showcase, Sell,<br />&amp; acquire arts to our marketplace<span className="text-[#FA6A38]">.</span></>
              ) : activeTab === 'business' ? (
                <>Websites built for<br />high conversion &amp; growth<span className="text-[#FA6A38]">.</span></>
              ) : (
                <>Attract local clients<br />with instant booking<span className="text-[#FA6A38]">.</span></>
              )}
            </h2>

            <p className="text-base text-[#68716A] font-medium leading-relaxed max-w-md mb-8">
              {activeTab === 'ecom'
                ? 'Dynamic community where artists and buyers seamlessly merge. ArtFusion brings together creators and enthusiasts to share creativity and build commerce.'
                : 'Every business is unique. We build clean layouts, direct messaging, and fast loading pages that convert casual visitors into paying customers.'}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-5 flex-wrap">
              <button
                onClick={() => onSelectService('E-Commerce Package')}
                className="inline-flex items-center gap-2 bg-[#FA6A38] text-white px-6 py-3 rounded-full text-[14px] font-bold hover:bg-[#E85A28] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-[0_4px_14px_rgba(250,106,56,0.35)]"
              >
                <span>Join for $199/mo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onExploreWork}
                className="text-[14px] font-bold text-[#111613] hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                Read more →
              </button>
            </div>
          </div>

          {/* Quick Badges */}
          <div className="flex items-center gap-3.5 flex-wrap pt-8 mt-4 border-t border-[#E1E4DF]">
            <div className="w-11 h-11 rounded-full border border-[#E1E4DF] bg-white flex items-center justify-center text-[#111613] shadow-xs" title="Custom UX Design">
              <Layout className="w-4 h-4 text-[#FA6A38]" />
            </div>
            <div className="w-11 h-11 rounded-full border border-[#E1E4DF] bg-white flex items-center justify-center text-[#111613] shadow-xs" title="Fast Mobile First">
              <Zap className="w-4 h-4 text-[#FA6A38]" />
            </div>
            <div className="w-11 h-11 rounded-full border border-[#E1E4DF] bg-white flex items-center justify-center text-[#111613] shadow-xs" title="E-Commerce & Carts">
              <ShoppingBag className="w-4 h-4 text-[#FA6A38]" />
            </div>
            <div className="w-11 h-11 rounded-full border border-[#E1E4DF] bg-white flex items-center justify-center text-[#111613] shadow-xs" title="Lead Funnels">
              <CheckCircle2 className="w-4 h-4 text-[#FA6A38]" />
            </div>
          </div>
        </div>

        {/* Right Column: 3D Stacked Card Showcase */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Tab Selector */}
          <div className="inline-flex bg-[#F4F6F2] rounded-full p-1.5 mb-8 border border-[#E1E4DF]">
            <button
              onClick={() => setActiveTab('ecom')}
              className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                activeTab === 'ecom'
                  ? 'bg-[#111613] text-white shadow-xs'
                  : 'text-[#68716A] hover:text-[#111613]'
              }`}
            >
              E-Commerce
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-[#111613] text-white shadow-xs'
                  : 'text-[#68716A] hover:text-[#111613]'
              }`}
            >
              Business Website
            </button>
            <button
              onClick={() => setActiveTab('local')}
              className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                activeTab === 'local'
                  ? 'bg-[#111613] text-white shadow-xs'
                  : 'text-[#68716A] hover:text-[#111613]'
              }`}
            >
              Local &amp; Dining
            </button>
          </div>

          {/* Interactive 3D Fanned Stack Container */}
          <div className="relative w-full max-w-lg h-[340px] sm:h-[390px] flex items-center justify-center">
            
            {/* Floating Tag */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-[25%] z-30 bg-white px-3.5 py-1.5 rounded-full shadow-md border border-[#E1E4DF] flex items-center gap-1.5 text-[12px] font-bold text-[#111613]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FA6A38]" />
              <span>@coplin</span>
            </motion.div>

            {ecomFannedCards.map((card, idx) => {
              const isHovered = hoveredCardIdx === idx;
              const isDark = card.theme === 'dark';

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: isHovered ? card.tx * 1.3 : card.tx,
                    y: isHovered ? card.ty - 16 : card.ty,
                    rotate: isHovered ? 0 : card.rot,
                    scale: isHovered ? 1.05 : 1,
                    zIndex: isHovered ? 40 : card.zIndex,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredCardIdx(idx)}
                  onMouseLeave={() => setHoveredCardIdx(null)}
                  onClick={onExploreWork}
                  className={`absolute w-[260px] sm:w-[310px] rounded-[20px] overflow-hidden shadow-[0_20px_45px_-15px_rgba(20,20,20,0.25)] border ${
                    isDark ? 'border-white/10' : 'border-[#E3E2DD]'
                  } cursor-pointer transition-shadow duration-300`}
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Browser Bar */}
                  <div
                    className={`px-3.5 py-2 flex items-center justify-between border-b ${
                      isDark ? 'border-white/10 bg-white/5' : 'border-[#EFEFEA] bg-[#FAFAF8]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                    </div>
                    <span className={`text-[10.5px] font-bold tracking-wider uppercase ${isDark ? 'text-white/70' : 'text-[#141414]/70'}`}>
                      {card.brand}
                    </span>
                    <span className={`text-[8.5px] font-mono ${isDark ? 'text-white/30' : 'text-black/30'}`}>
                      Live
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col justify-between h-[180px] sm:h-[200px]">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h4 className={`text-[13.5px] sm:text-[15px] font-extrabold leading-tight ${isDark ? 'text-white' : 'text-[#141414]'}`}>
                          {card.title}
                        </h4>
                        <p className={`mt-1.5 text-[10.5px] sm:text-[11.5px] line-clamp-2 leading-relaxed ${isDark ? 'text-white/60' : 'text-[#6E6E6E]'}`}>
                          {card.description}
                        </p>
                      </div>

                      <div className="w-18 sm:w-22 h-18 sm:h-22 rounded-xl overflow-hidden shrink-0 bg-black/5">
                        <img
                          src={card.image}
                          alt={card.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9.5px] sm:text-[10px] font-bold ${
                          isDark ? 'bg-white/10 text-white hover:bg-[#20B8B0]' : 'bg-[#141414] text-white hover:bg-[#20B8B0]'
                        } transition-colors`}
                      >
                        <span>{card.cta}</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                      <span className={`text-[9px] font-mono ${isDark ? 'text-white/30' : 'text-black/30'}`}>
                        designmysite.in
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
