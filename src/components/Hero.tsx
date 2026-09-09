import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Phone,
  Check,
  Palette,
  Smartphone,
  Edit3,
  BarChart3,
  Award,
  Menu as MenuIcon,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projectsData';

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
  const [emailInput, setEmailInput] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState<'feed' | 'creators' | 'blog' | 'support' | 'trial'>('feed');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setEmailSubmitted(true);
    setTimeout(() => {
      onStartProject();
    }, 900);
  };

  // 5 capsule / skateboard work decks matching bottom-left of reference image
  const creativeWorkCapsules = [
    {
      id: 'work-1',
      title: 'Growth Marketing & Web',
      bg: '#2550EB',
      textColor: '#FFFFFF',
      topText: 'with',
      bottomText: 'rketing',
      icon: null,
    },
    {
      id: 'work-2',
      title: 'Visual Identity & Branding',
      bg: '#FFDA44',
      textColor: '#111613',
      topText: '●',
      bottomText: '◡',
      icon: 'smile',
    },
    {
      id: 'work-3',
      title: 'E-Commerce Storefront',
      bg: '#EDE9FE',
      textColor: '#111613',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      tag: '↓',
    },
    {
      id: 'work-4',
      title: 'Editorial & Content',
      bg: '#27201C',
      textColor: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      tag: '04',
    },
    {
      id: 'work-5',
      title: 'Digital Platform Design',
      bg: '#3B28CC',
      textColor: '#FFFFFF',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
      tag: 'UX',
    },
  ];

  return (
    <section id="hero" className="w-full pt-4 sm:pt-6 lg:pt-0 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-12 relative overflow-hidden">
      
      {/* 2-Column Split Layout matching the exact reference composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
        
        {/* =========================================================================
            LEFT COLUMN: Display Typography, Achieve Badge, Email Pill & Work Decks
           ========================================================================= */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between lg:h-[806.875px] pt-4 lg:pt-24 pb-2">
          <div>
            
            {/* Subtle floating "Achieve" pill badge - Centered */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-white border border-[#E1E4DF] shadow-[0_4px_14px_rgba(0,0,0,0.05)] mb-6 text-[12.5px] font-semibold text-[#111613]"
              >
                <span>Achieve</span>
              </motion.div>
            </div>

            {/* Main Display Headline with responsive sizing and no cutoff */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[40px] xl:text-[46px] 2xl:text-[48px] font-medium sm:font-semibold text-[#111613] leading-[1.15] tracking-[-0.02em] mb-4 font-['Outfit'] text-center max-w-xl mx-auto"
            >
              <span className="block">Creating great website</span>
              <span className="block">user experiences</span>
            </motion.h1>

            {/* Subtitle with refined muted graphite font color - Centered */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[13px] sm:text-[14px] text-[#68716A] font-normal leading-[1.6] max-w-lg mx-auto text-center mb-8"
            >
              <span className="block">His is where we shine with over 15 years of know how,</span>
              <span className="block">you can count on us to design outstanding</span>
            </motion.p>

            {/* Floating Email Input Pill with Coral "Sign up" button - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 max-w-md mx-auto"
            >
              <form
                onSubmit={handleEmailSubmit}
                className="bg-white rounded-full p-2 pl-6 border border-[#E1E4DF] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3 focus-within:border-[#FA6A38] focus-within:shadow-[0_12px_32px_-8px_rgba(250,106,56,0.18)] transition-all"
              >
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Type your email here"
                  required
                  className="bg-transparent text-[14px] text-[#111613] placeholder:text-[#9EA59F] outline-none flex-1 font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#FA6A38] hover:bg-[#E85A28] text-white px-7 py-3 rounded-full text-[14px] font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-[0_4px_14px_rgba(250,106,56,0.35)] shrink-0"
                >
                  {emailSubmitted ? '✓ Welcome' : 'Sign up'}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Row: Phone Button on Left + "Some of our creative works" and 5 Capsule Decks on Right */}
          <div className="pt-6 flex items-end justify-between gap-4">
            {/* Bottom-left floating telephone action pill */}
            <button
              onClick={onStartProject}
              className="w-[84px] h-[40px] bg-[#111613] hover:bg-[#202922] rounded-full flex items-center p-1 cursor-pointer transition-all hover:scale-105 shadow-sm shrink-0"
              title="Schedule a Call"
            >
              <span className="w-8 h-8 rounded-full bg-[#F6F2BE] flex items-center justify-center text-[#111613]">
                <Phone className="w-3.5 h-3.5 fill-[#111613] text-[#111613]" />
              </span>
            </button>

            {/* Bottom-right: "Some of our creative works" + 5 capsule deck previews */}
            <div className="flex flex-col items-end">
              <div className="text-right mb-2">
                <span className="text-[13px] sm:text-[14px] font-semibold text-[#111613] leading-none block font-['Outfit']">
                  Some of our
                </span>
                <span className="text-[13px] sm:text-[14px] font-semibold text-[#111613] leading-none block font-['Outfit'] mt-1">
                  creative works
                </span>
              </div>

              {/* Capsule / Skateboard Deck Visuals */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {creativeWorkCapsules.map((cap, idx) => (
                  <motion.div
                    key={cap.id}
                    whileHover={{ y: -4, scale: 1.05 }}
                    onClick={() => onOpenProjectModal && onOpenProjectModal(PROJECTS[idx % PROJECTS.length])}
                    className="w-7 sm:w-8 h-15 sm:h-16 rounded-full overflow-hidden border border-[#D5DDD0] shadow-xs shrink-0 cursor-pointer relative group flex flex-col justify-between items-center py-1 px-0.5 transition-all select-none"
                    style={{ backgroundColor: cap.bg }}
                  >
                    {cap.image ? (
                      <>
                        <img
                          src={cap.image}
                          alt={cap.title}
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {cap.tag && (
                          <span className="relative z-10 text-[8px] font-bold text-white leading-none mt-auto mb-0.5 bg-black/40 px-1 py-0.5 rounded-full">
                            {cap.tag}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="text-[7.5px] font-bold leading-none tracking-tighter mt-1" style={{ color: cap.textColor }}>
                          {cap.topText}
                        </span>
                        <span className="text-[7px] font-bold leading-none tracking-tighter mb-1" style={{ color: cap.textColor }}>
                          {cap.bottomText}
                        </span>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            RIGHT COLUMN: Pistachio Sage Green Bento Canvas with White Cards & Yellow Panel
           ========================================================================= */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
          <div
            style={{
              borderRadius: '36px',
              width: '460px',
              height: '806.875px',
            }}
            className="bg-[#CCE4B2] max-w-full p-4 sm:p-5 border border-[#B9D79B] shadow-[0_20px_50px_-20px_rgba(55,83,35,0.15)] flex flex-col justify-between shrink-0 overflow-hidden"
          >
            
            {/* Top Pill Navigation inside Sage Canvas */}
            <div className="flex items-center justify-between gap-1.5 shrink-0">
              <div className="bg-white rounded-full p-1 flex items-center gap-1 shadow-xs border border-white/60 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveNavTab('feed')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    activeNavTab === 'feed'
                      ? 'bg-[#B9D99A] text-[#1E2E17] shadow-xs'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  Feed
                </button>
                <button
                  onClick={() => { setActiveNavTab('creators'); onExploreWork(); }}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    activeNavTab === 'creators'
                      ? 'bg-[#B9D99A] text-[#1E2E17]'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  Creators
                </button>
                <button
                  onClick={() => setActiveNavTab('blog')}
                  className={`px-2 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    activeNavTab === 'blog'
                      ? 'bg-[#B9D99A] text-[#1E2E17]'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  Blog
                </button>
                <button
                  onClick={() => { setActiveNavTab('support'); onStartProject(); }}
                  className={`px-2 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    activeNavTab === 'support'
                      ? 'bg-[#B9D99A] text-[#1E2E17]'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  Support
                </button>
                <button
                  onClick={onStartProject}
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold text-[#111613] hover:text-[#FA6A38] transition-colors cursor-pointer"
                >
                  Free trial
                </button>
              </div>

              {/* Circular Hamburger Icon */}
              <button
                onClick={onStartProject}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111613] shadow-xs hover:bg-[#F6F2BE] transition-colors cursor-pointer shrink-0"
              >
                <MenuIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Bento Grid: Left Column (2x2 Services + Portrait Poster) & Right Column (Yellow Card) */}
            <div className="grid grid-cols-12 gap-3 items-stretch flex-1 mt-3 min-h-0">
              
              {/* Left Subcolumn: 2x2 Services + Multi-layer Editorial Poster */}
              <div className="col-span-7 flex flex-col justify-between gap-3 min-h-0">
                
                {/* 2x2 White Service Cards */}
                <div className="grid grid-cols-2 gap-2.5 shrink-0">
                  {/* Card 1: Photoshop Design */}
                  <div
                    onClick={onStartProject}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFE5EC] flex items-center justify-center text-[#EA3E69] mb-1.5">
                      <Palette className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[11.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FA6A38] transition-colors">
                        Photoshop Design
                      </h4>
                      <p className="text-[8.5px] text-[#78817A] leading-tight line-clamp-2">
                        Award creative agency, select, consectetur.
                      </p>
                    </div>
                    <span className="text-[8px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FA6A38] flex items-center gap-0.5">
                      Learn more →
                    </span>
                  </div>

                  {/* Card 2: Mobile Development */}
                  <div
                    onClick={onStartProject}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E5F0FF] flex items-center justify-center text-[#2A55FF] mb-1.5">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[11.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FA6A38] transition-colors">
                        Mobile Development
                      </h4>
                      <p className="text-[8.5px] text-[#78817A] leading-tight line-clamp-2">
                        Desktop publishing software like Aldus page maker.
                      </p>
                    </div>
                    <span className="text-[8px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FA6A38] flex items-center gap-0.5">
                      Learn more →
                    </span>
                  </div>

                  {/* Card 3: Copywriting content */}
                  <div
                    onClick={onStartProject}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#FA6A38] mb-1.5">
                      <Edit3 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[11.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FA6A38] transition-colors">
                        Copywriting content
                      </h4>
                      <p className="text-[8.5px] text-[#78817A] leading-tight line-clamp-2">
                        The standard chunk of used since 1500s.
                      </p>
                    </div>
                    <span className="text-[8px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FA6A38] flex items-center gap-0.5">
                      Learn more →
                    </span>
                  </div>

                  {/* Card 4: Brand experience */}
                  <div
                    onClick={onStartProject}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFF9D6] flex items-center justify-center text-[#B58A00] mb-1.5">
                      <BarChart3 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[11.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FA6A38] transition-colors">
                        Brand experience
                      </h4>
                      <p className="text-[8.5px] text-[#78817A] leading-tight line-clamp-2">
                        The standard chunk of used since 1500s.
                      </p>
                    </div>
                    <span className="text-[8px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FA6A38] flex items-center gap-0.5">
                      Learn more →
                    </span>
                  </div>
                </div>

                {/* Editorial Photo Poster Card (Artistic Sliced Portrait) */}
                <div
                  onClick={onExploreWork}
                  className="bg-[#111613] rounded-[22px] overflow-hidden relative flex-1 min-h-[310px] shadow-sm cursor-pointer group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
                    alt="Creative Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                  
                  {/* Visual Editorial Typography Overlay */}
                  <div className="absolute inset-0 bg-black/30 p-3.5 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between text-[7.5px] font-mono tracking-wider opacity-80 uppercase">
                      <span>UNREPORTED</span>
                      <span>UNREPORTED</span>
                    </div>

                    <div className="space-y-1 my-auto">
                      <div className="inline-block bg-white/25 backdrop-blur-xs px-2 py-0.5 rounded text-[8.5px] font-bold tracking-wider uppercase text-white">
                        REPORT IT TO STOP IT
                      </div>
                      <p className="text-[10px] font-medium text-white/95 leading-tight">
                        Awarded campaign design &amp; experience.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-white/20 text-[7.5px] font-mono text-white/70">
                      <span>MAYOR OF LONDON</span>
                      <span>TRANSPORT FOR LONDON</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Subcolumn: Top Text + Pastel Buttery Yellow Card */}
              <div className="col-span-5 flex flex-col justify-between min-h-0">
                
                {/* Services provide for you intro */}
                <div className="mb-2 shrink-0">
                  <h3 className="text-[16px] font-extrabold text-[#111613] leading-[1.1] mb-1 font-['Outfit']">
                    Services<br />provide for you
                  </h3>
                  <p className="text-[9px] text-[#555C52] leading-tight line-clamp-3">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </p>
                </div>

                {/* Pastel Buttery Yellow Card */}
                <div className="bg-[#F6F2BE] rounded-[24px] p-3.5 flex-1 flex flex-col justify-between border border-[#E7E3A6] shadow-xs relative overflow-hidden min-h-[460px]">
                  
                  {/* Doodle hand-drawn style arrow & headline */}
                  <div>
                    <h4 className="text-[18px] font-extrabold text-[#111613] leading-[1.15] font-['Outfit']">
                      Before we<br />jumped in, we<br />underwent
                    </h4>
                    {/* SVG arrow loop */}
                    <svg
                      className="w-16 h-12 text-[#111613] opacity-50 ml-auto mt-1"
                      viewBox="0 0 80 60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M10 15 C 40 5, 70 10, 60 35 C 50 55, 20 45, 35 25 C 45 15, 65 30, 70 45" strokeLinecap="round" />
                      <path d="M62 42 L 70 47 L 73 38" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Bottom White Rating Badge Card with Pink Ribbon Medal Icon */}
                  <div className="bg-white rounded-[18px] p-3 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.06)] border border-[#EBE8B5] relative mt-auto">
                    
                    {/* Pink Medal Icon */}
                    <div className="absolute -top-3.5 right-3 w-7 h-7 rounded-full bg-[#EA3E69] text-white flex items-center justify-center shadow-md">
                      <Award className="w-3.5 h-3.5" />
                    </div>

                    <div className="pr-6 mb-2">
                      <h5 className="text-[11.5px] font-extrabold text-[#111613] leading-tight">
                        Globally Rated
                      </h5>
                      <span className="text-[9px] font-bold text-[#68716A]">
                        #1 UX Agency
                      </span>
                    </div>

                    {/* Metric Rows */}
                    <div className="space-y-1.5 pt-1.5 border-t border-[#F2F2EE] text-[9.5px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80"
                            alt="Platform avatar"
                            referrerPolicy="no-referrer"
                            className="w-3.5 h-3.5 rounded-full object-cover"
                          />
                          <span className="font-semibold text-[#111613] truncate max-w-[80px]">Powerful Platform</span>
                        </div>
                        <span className="font-mono font-bold text-[#2A55FF] text-[9px]">+40pts</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <img
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80"
                            alt="Software avatar"
                            referrerPolicy="no-referrer"
                            className="w-3.5 h-3.5 rounded-full object-cover"
                          />
                          <span className="font-semibold text-[#111613] truncate max-w-[80px]">Enterprise Software</span>
                        </div>
                        <span className="font-mono font-bold text-[#2A55FF] text-[9px]">+96pts</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
