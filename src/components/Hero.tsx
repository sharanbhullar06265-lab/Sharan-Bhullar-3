import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, X, Eye } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
  onOpenProjectModal?: (project: Project) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onStartProject,
  onOpenProjectModal,
}) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [spotlightCardId, setSpotlightCardId] = useState<string | null>(null);

  const showcaseCards = [
    // Top-Left: Dark Audio / Headphones
    {
      id: 'audio-tech',
      brand: '@designmysite',
      title: 'Bold Design. Clean Code.',
      highlight: 'Clean Code.',
      description: 'Learn modern design systems and intuitive user interfaces built for high retention.',
      cta: 'View My Work',
      theme: 'dark',
      bg: '#14161C',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      tilt: -7,
      pos: 'left-[2%] sm:left-[5%] top-[4%] sm:top-[6%]',
      width: 'w-[220px] sm:w-[270px] md:w-[300px]',
      zIndex: 20,
    },
    // Bottom-Left: Lagoon Resort
    {
      id: 'lagoon-resort',
      brand: 'Lagoon Resort',
      nav: ['Rooms', 'Amenities', 'Gallery', 'Contact'],
      title: 'Luxury stays, unforgettable moments.',
      description: 'Experience tranquil ocean views and pristine beaches with unmatched comfort.',
      cta: 'Book Your Stay',
      theme: 'light',
      bg: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
      tilt: -4,
      pos: 'left-[3%] sm:left-[8%] bottom-[4%] sm:bottom-[6%]',
      width: 'w-[230px] sm:w-[280px] md:w-[315px]',
      zIndex: 15,
    },
    // Center: Elevate Your Brand Identity (BONAFIDE 3D chrome)
    {
      id: 'brand-identity',
      brand: 'BONAFIDE',
      title: 'Elevate Your Brand Identity',
      description: 'Crafted brand and experience systems that turn visitors into loyal brand advocates.',
      cta: 'View Project',
      theme: 'dark',
      bg: '#12141A',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      tilt: -1,
      pos: 'left-[26%] sm:left-[30%] md:left-[33%] top-[14%] sm:top-[16%]',
      width: 'w-[240px] sm:w-[290px] md:w-[325px]',
      zIndex: 30,
    },
    // Center-Right: Furni. Scandinavian Chair
    {
      id: 'furni-store',
      brand: 'Furni.',
      nav: ['Home', 'Shop', 'Collections', 'About'],
      title: 'New Collection. Better Everyday.',
      description: 'Discover our newly launched minimalist home collection made for intentional modern living.',
      cta: 'Shop Now',
      theme: 'light',
      bg: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      tilt: 3,
      pos: 'right-[20%] sm:right-[24%] md:right-[26%] bottom-[8%] sm:bottom-[10%]',
      width: 'w-[240px] sm:w-[290px] md:w-[320px]',
      zIndex: 25,
    },
    // Top-Right: Dark Digital Experiences
    {
      id: 'digital-exp',
      brand: 'FINERVATE',
      title: 'We Build Digital Experiences',
      description: 'We craft digital products that stand out from the rest and deliver real forward growth.',
      cta: 'Discover More',
      theme: 'dark',
      bg: '#0F131E',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80',
      tilt: 7,
      pos: 'right-[2%] sm:right-[5%] top-[5%] sm:top-[8%]',
      width: 'w-[220px] sm:w-[270px] md:w-[300px]',
      zIndex: 18,
    },
    // Bottom-Right: GreenBite Healthy Food
    {
      id: 'green-bite',
      brand: 'GreenBite',
      nav: ['Menu', 'About', 'Blog', 'Contact'],
      title: 'Healthy food, healthy life.',
      description: 'Organic ingredients, tasty meals delivered directly to your doorstep with speed.',
      cta: 'Order Now',
      theme: 'light',
      bg: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
      tilt: 4,
      pos: 'right-[3%] sm:right-[7%] bottom-[3%] sm:bottom-[5%]',
      width: 'w-[230px] sm:w-[280px] md:w-[310px]',
      zIndex: 16,
    },
  ];

  const floatingTags = [
    { text: '@designmysite', pos: 'top-[3%] left-[45%] -translate-x-1/2', color: '#20B8B0', dot: true },
    { text: '@coplin', pos: 'top-[16%] right-[14%] sm:right-[18%]', color: '#141414', dot: false },
    { text: '@nozzartlin', pos: 'top-[22%] left-[10%] sm:left-[14%]', color: '#20B8B0', dot: true },
  ];

  const trustedLogos = [
    { name: 'pixelpoint', icon: '✦' },
    { name: 'Nextmove', icon: '◎' },
    { name: 'PentaBiz', icon: '❖' },
    { name: 'Radian.', icon: '▲' },
    { name: 'zenith', icon: '❃' },
  ];

  const handleCardClick = (cardId: string) => {
    if (spotlightCardId === cardId) {
      setSpotlightCardId(null);
    } else {
      setSpotlightCardId(cardId);
    }
  };

  return (
    <section id="hero" className="w-full pt-10 sm:pt-14 pb-0 flex flex-col items-center relative overflow-hidden">
      {/* Center Hero Content */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center relative z-10">
        
        {/* Eyebrow Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#20B8B0] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase mb-4"
        >
          WEBSITE DESIGNER &amp; DEVELOPER
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-[68px] font-black text-[#141414] leading-[1.04] tracking-tight max-w-[860px]"
        >
          I DESIGN WEBSITES<br className="hidden sm:inline" />
          {' '}THAT PEOPLE REMEMBER<span className="text-[#20B8B0]">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 sm:mt-6 text-base sm:text-[17px] text-[#656565] max-w-xl font-medium leading-relaxed"
        >
          Modern websites designed to make businesses look better, communicate clearly and grow online.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 sm:gap-5 mt-8 flex-wrap justify-center"
        >
          <button
            onClick={onExploreWork}
            className="inline-flex items-center gap-2 bg-[#20B8B0] text-white px-7 py-3.5 rounded-full text-[14.5px] font-bold hover:bg-[#199E97] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-[0_10px_25px_-8px_rgba(32,184,176,0.45)]"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 bg-white text-[#141414] px-7 py-3.5 rounded-full text-[14.5px] font-bold border border-[#D5D4CE] hover:bg-[#F3F3F1] hover:border-[#141414] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Start a Project</span>
          </button>
        </motion.div>
      </div>

      {/* Floating 3D Showcase Stage */}
      <div className="relative w-full max-w-6xl h-[460px] sm:h-[540px] md:h-[600px] mt-10 sm:mt-14 overflow-visible flex items-center justify-center">
        
        {/* Floating User Badges */}
        {floatingTags.map((tag, i) => (
          <motion.div
            key={tag.text}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
            className={`absolute ${tag.pos} z-35 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)] border border-[#E7E6E2] flex items-center gap-1.5 cursor-default select-none`}
          >
            {tag.dot && <span className="w-2 h-2 rounded-full bg-[#20B8B0] animate-pulse" />}
            <span className="text-[12px] font-bold tracking-tight text-[#141414]">{tag.text}</span>
          </motion.div>
        ))}

        {/* Curved Cyan Flight Path Trajectory SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 180 C 180 60, 420 80, 520 280 C 620 460, 840 420, 960 160"
            stroke="#20B8B0"
            strokeWidth="1.75"
            strokeDasharray="5 7"
            strokeOpacity="0.4"
          />
          <path
            d="M 120 460 C 260 520, 460 480, 580 320 C 700 160, 880 180, 940 380"
            stroke="#20B8B0"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.3"
          />
        </svg>

        {/* 6 Interactive Showcase Project Cards */}
        {showcaseCards.map((card, idx) => {
          const isHovered = hoveredCardId === card.id;
          const isSpotlight = spotlightCardId === card.id;
          const isDark = card.theme === 'dark';

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={{
                opacity: 1,
                y: isSpotlight ? -30 : isHovered ? -16 : 0,
                rotate: isSpotlight ? 0 : isHovered ? 0 : card.tilt,
                scale: isSpotlight ? 1.15 : isHovered ? 1.05 : 1,
                zIndex: isSpotlight ? 50 : isHovered ? 40 : card.zIndex,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1 + idx * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={() => handleCardClick(card.id)}
              className={`absolute ${card.pos} ${card.width} rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(20,20,20,0.25)] hover:shadow-[0_30px_70px_-15px_rgba(32,184,176,0.35)] transition-shadow duration-300 cursor-pointer border ${
                isDark ? 'border-white/10' : 'border-[#E3E2DD]'
              } ${isSpotlight ? 'ring-2 ring-[#20B8B0]' : ''}`}
              style={{ backgroundColor: card.bg }}
            >
              {/* Card Mini Browser Bar */}
              <div
                className={`px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b ${
                  isDark ? 'border-white/10 bg-white/5' : 'border-[#EFEFEA] bg-[#FAFAF8]'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                  <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                  <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/15'}`} />
                </div>
                {card.brand && (
                  <span className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase ${isDark ? 'text-white/70' : 'text-[#141414]/70'}`}>
                    {card.brand}
                  </span>
                )}
                {card.nav ? (
                  <div className="hidden sm:flex items-center gap-2 text-[8px] font-medium text-black/40">
                    {card.nav.slice(0, 3).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                ) : (
                  <ArrowUpRight className={`w-3 h-3 ${isDark ? 'text-white/40' : 'text-black/30'}`} />
                )}
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-4.5 flex flex-col justify-between h-[155px] sm:h-[185px] md:h-[200px]">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h3
                      className={`text-[12.5px] sm:text-[14px] md:text-[15px] font-extrabold leading-tight ${
                        isDark ? 'text-white' : 'text-[#141414]'
                      }`}
                    >
                      {card.highlight ? (
                        <>
                          Bold Design.{' '}
                          <span className="text-[#20B8B0]">{card.highlight}</span>
                        </>
                      ) : (
                        card.title
                      )}
                    </h3>
                    <p
                      className={`mt-1.5 text-[9.5px] sm:text-[10.5px] md:text-[11.5px] line-clamp-2 leading-relaxed ${
                        isDark ? 'text-white/60' : 'text-[#6E6E6E]'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Thumbnail Visual */}
                  <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden shrink-0 shadow-inner bg-black/5">
                    <img
                      src={card.image}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-2 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold ${
                      isDark
                        ? 'bg-white/10 text-white hover:bg-[#20B8B0]'
                        : 'bg-[#141414] text-white hover:bg-[#20B8B0]'
                    } transition-colors`}
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                  <span className={`text-[8.5px] sm:text-[9.5px] font-mono ${isDark ? 'text-white/30' : 'text-black/30'}`}>
                    designmysite.in
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtext info under the cards as seen in video */}
      <p className="text-center text-[13px] text-[#7A7A78] max-w-lg font-medium mt-4 px-4">
        Artists can display their masterpieces, and buyers can discover and acquire authentic, quality designs.
      </p>

      {/* Trusted By Bar */}
      <div className="w-full border-t border-[#E7E6E2]/80 pt-8 pb-10 px-6 sm:px-12 mt-6">
        <p className="text-center text-[12px] sm:text-[13px] font-medium text-[#7A7A78] mb-6">
          Trusted by startups, local businesses and brands worldwide.
        </p>

        <div className="flex items-center justify-center gap-8 sm:gap-14 md:gap-20 flex-wrap opacity-75">
          {trustedLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 text-[17px] sm:text-[19px] font-bold text-[#141414] hover:text-[#20B8B0] transition-colors cursor-default"
            >
              <span className="text-[#20B8B0] text-[15px]">{brand.icon}</span>
              <span className="tracking-tight">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
