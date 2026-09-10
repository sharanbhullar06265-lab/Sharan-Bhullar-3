import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import istockPhotoImg from '../assets/istockphoto-183272670-612x612.jpg';
import discoveryPhonesSvg from '../assets/discovery-phones.svg';
import { 
  ArrowLeft,
  ShieldCheck,
  Star,
  ChevronRight,
  TrendingUp,
  Users,
  Menu,
  X
} from 'lucide-react';

interface SocialMediaPageProps {
  onOpenContact: () => void;
  onBackToPortfolio: () => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ 
  onOpenContact,
  onBackToPortfolio 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutCardImg, setAboutCardImg] = useState<string>(() => {
    return localStorage.getItem('about_card_custom_img') || istockPhotoImg || '/istockphoto-183272670-612x612.jpg';
  });

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setAboutCardImg(result);
          try {
            localStorage.setItem('about_card_custom_img', result);
          } catch (err) {
            console.warn('Could not save image to localStorage:', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-full min-h-screen bg-[#D9CBC9] p-3 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center font-sans antialiased select-none overflow-x-hidden">
      {/* Floating Return Button */}
      <button
        onClick={onBackToPortfolio}
        className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full bg-white/95 backdrop-blur-md text-[#2B2B2B] text-xs font-bold shadow-md hover:bg-[#2B2B2B] hover:text-white transition-all cursor-pointer"
        title="Back to DesignMySites Portfolio"
        aria-label="Back to Portfolio"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>← Back to Overview</span>
      </button>

      {/* Main Centered Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1240px] bg-[#F5F1E8] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-5 sm:p-9 md:p-12 lg:p-14 shadow-[0_25px_70px_-15px_rgba(80,60,65,0.15)] border border-[#ECE5DA] relative overflow-hidden flex flex-col gap-7 sm:gap-10 md:gap-12"
      >
        {/* =========================================================================
            TOP NAVIGATION BAR
           ========================================================================= */}
        <header className="w-full flex items-center justify-between shrink-0 relative z-30">
          {/* Logo Left: Circle icon with dot + "Social Manager" */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-white ml-0.5" />
            </div>
            <span className="text-[17px] sm:text-[20px] font-extrabold tracking-tight text-[#1A1A1A] font-['Outfit',sans-serif] whitespace-nowrap">
              Social Manager
            </span>
          </div>

          {/* Centered Menu Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] sm:text-[14px] font-medium text-[#2B2B2B]">
            <button 
              onClick={onBackToPortfolio}
              className="text-[#1A1A1A] font-bold hover:text-[#F0616B] transition-colors cursor-pointer min-h-[44px] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white shadow-xs border border-[#E5DFD4]"
              title="Return to Main Portfolio"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#3A3A3A] hover:text-[#F0616B] transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('service')}
              className="text-[#3A3A3A] hover:text-[#F0616B] transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              Service
            </button>
            <button 
              onClick={() => scrollToSection('product')}
              className="text-[#3A3A3A] hover:text-[#F0616B] transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              Product
            </button>
            <button 
              onClick={onOpenContact}
              className="text-[#3A3A3A] hover:text-[#F0616B] transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              Blog
            </button>
          </nav>

          {/* Right Action: Pill Contact Us + Mobile Hamburger */}
          <div className="flex items-center gap-2">
            {/* Pill-Shaped "Contact Us" Button */}
            <button
              onClick={onOpenContact}
              className="min-h-[44px] px-5 sm:px-6 py-2 rounded-full border border-[#2B2B2B] text-[#2B2B2B] text-[12px] sm:text-[13px] font-medium hover:bg-[#2B2B2B] hover:text-white transition-all cursor-pointer shadow-xs flex items-center justify-center"
            >
              Contact Us
            </button>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#2B2B2B]/30 flex items-center justify-center text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden w-full bg-white/95 backdrop-blur-md rounded-2xl border border-[#ECE5DA] p-3 shadow-xl flex flex-col gap-1 z-30"
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBackToPortfolio();
                }}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl text-left text-[14px] font-bold text-[#1A1A1A] bg-[#EBE7DF]/70 hover:bg-[#EBE7DF] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Portfolio</span>
                </span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('about');
                }}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl text-left text-[14px] font-medium text-[#2B2B2B] hover:bg-[#F5F1E8] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>About</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('service');
                }}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl text-left text-[14px] font-medium text-[#2B2B2B] hover:bg-[#F5F1E8] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Service</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('product');
                }}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl text-left text-[14px] font-medium text-[#2B2B2B] hover:bg-[#F5F1E8] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Product</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl text-left text-[14px] font-medium text-[#2B2B2B] hover:bg-[#F5F1E8] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Blog</span>
                <ChevronRight className="w-4 h-4 text-[#888]" />
              </button>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* =========================================================================
            TWO-COLUMN HERO SECTION
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column (5 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-5 sm:gap-7 z-10">
            {/* Headline */}
            <div className="flex flex-col">
              <h1 className="text-[34px] sm:text-[54px] lg:text-[62px] xl:text-[66px] font-black text-[#2B2B2B] tracking-[-0.03em] leading-[1.08] font-['Outfit',sans-serif]">
                For Your <span className="text-[#F0616B]">Pro</span>
                <br />
                Social Manager
              </h1>
            </div>

            {/* Sub-copy block with circular yellow avatar */}
            <div className="flex items-center gap-3.5 max-w-md">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5B838] flex items-center justify-center shrink-0 shadow-xs border border-[#EAA820]/40 overflow-hidden">
                <span className="text-[18px] sm:text-[20px] select-none">🧔</span>
              </div>
              <p className="text-[13px] sm:text-[14px] text-[#3A3A3A] font-normal leading-relaxed">
                We blend insights and strategy to create digital products for forward-thinking organisations.
              </p>
            </div>

            {/* CTA Button + subtle coral glow dot */}
            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={onOpenContact}
                className="min-h-[44px] px-7 sm:px-8 py-3.5 rounded-full bg-white text-[#2B2B2B] text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(0,0,0,0.07)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.12)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/60 flex items-center justify-center"
              >
                GET STARTED NOW
              </button>
              {/* Diffuse soft coral blurred accent dot */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#F0616B]/60 blur-[3px]" />
            </div>
          </div>

          {/* Right Column (7 cols on lg): Circular photo composition + floating UI cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] w-full">
            
            {/* Background Circular Shape with Sage Gradient */}
            <div className="w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[430px] lg:h-[430px] rounded-full bg-gradient-to-tr from-[#CFD5C4] via-[#BAC0AE] to-[#A8B09D] relative overflow-hidden flex items-end justify-center shadow-inner">
              {/* Portrait Photo of Smiling Man in Straw Fedora Hat, Sunglasses, Tan Blazer */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
                alt="Pro Social Media Manager"
                className="w-[85%] h-[115%] object-cover object-top translate-y-3 drop-shadow-md select-none pointer-events-none"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badge: LinkedIn (Top Right of circle) */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="absolute top-1 sm:top-6 right-5 sm:right-16 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center group cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-[#0A66C2] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="font-bold text-[14px] sm:text-[15px] font-sans">in</span>
              </div>
            </a>

            {/* Floating Badge: Instagram (Right side of circle) */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="absolute top-1/2 -translate-y-1/2 -right-1 sm:right-2 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center group cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>

            {/* Floating Card 1: Google Ads Review Card (Left of circle, positioned safely) */}
            <div className="absolute left-0 sm:left-4 top-[32%] sm:top-1/2 -translate-y-1/2 z-20 bg-white/85 backdrop-blur-md rounded-[20px] sm:rounded-[26px] p-3 sm:p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)] border border-white/70 flex flex-col gap-1 w-[124px] sm:w-[176px] select-none">
              {/* Google G Logo */}
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>
              <span className="text-[12px] sm:text-[14px] font-bold text-[#2B2B2B] leading-tight mt-0.5">
                Google<br />ads
              </span>
              <div className="flex items-center gap-1 mt-0.5 text-[10px] sm:text-[11px] font-bold text-[#2B2B2B]">
                <Star className="w-2.5 h-2.5 fill-[#F5A623] text-[#F5A623]" />
                <span>4.9</span>
              </div>
              <span className="text-[9px] sm:text-[9.5px] font-medium text-[#787878]">
                247 reviews
              </span>
            </div>

            {/* Floating Card 2: Mini Bar + Line Chart Card (Bottom right of hero, positioned safely) */}
            <div className="absolute bottom-0 sm:-bottom-4 right-0 sm:right-6 z-20 bg-white rounded-[18px] sm:rounded-[22px] p-2.5 sm:p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08)] border border-white/90 flex flex-col gap-1 w-[150px] sm:w-[210px] select-none">
              <div className="flex items-start gap-2">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between text-[7.5px] font-semibold text-[#A0A0A0] h-14 leading-none pt-0.5">
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>

                {/* Bars + SVG Polyline */}
                <div className="flex-1 relative h-14 flex items-end justify-between px-1">
                  {/* Bars */}
                  <div className="w-3.5 h-7 rounded-t-sm bg-gradient-to-t from-[#E8DDD8] to-[#DFC8BF]" />
                  <div className="w-3.5 h-11 rounded-t-sm bg-gradient-to-t from-[#E8DDD8] to-[#DFC8BF]" />
                  <div className="w-3.5 h-9 rounded-t-sm bg-gradient-to-t from-[#E8DDD8] to-[#DFC8BF]" />
                  <div className="w-3.5 h-13 rounded-t-sm bg-gradient-to-t from-[#E8DDD8] to-[#DFC8BF]" />

                  {/* Connecting Line + Dots */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <polyline
                      points="12,38 38,20 64,26 90,8"
                      fill="none"
                      stroke="#2F54EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="38" r="2.5" fill="#2F54EB" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="38" cy="20" r="2.5" fill="#2F54EB" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="64" cy="26" r="2.5" fill="#2F54EB" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="90" cy="8" r="2.5" fill="#2F54EB" stroke="#FFFFFF" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* X-axis years */}
              <div className="flex justify-between text-[7px] sm:text-[8px] font-semibold text-[#909090] pl-5 pr-1">
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            BOTTOM 4-PANEL BENTO GRID
           ========================================================================= */}
        <div id="bento-grid" className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4.5 pt-2 sm:pt-4">
          
          {/* Card 1 (Left Tall Card, 4 cols): Woman in orange top, olive background */}
          <div id="service" className="md:col-span-4 bg-[#C9C193] rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between min-h-[260px] sm:min-h-[340px] shadow-sm">
            {/* Background image with olive/khaki overlay */}
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80"
              alt="What We Do"
              className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-80"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
              referrerPolicy="no-referrer"
            />
            {/* Olive gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#8E8659]/90 via-[#C9C193]/60 to-transparent pointer-events-none" />

            {/* Top Left Shield Checkmark Icon */}
            <div className="relative z-10 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#2B2B2B]" />
            </div>

            {/* Content & Heading */}
            <div className="relative z-10 mt-auto pt-16">
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight leading-tight font-['Outfit',sans-serif]">
                What We Do
              </h3>
              <p className="text-[11px] sm:text-[12px] text-white/90 font-medium mt-1 leading-snug">
                We create customer relationships that last forever
              </p>
            </div>

            {/* Bottom-left subtle 3-circle outline graphic */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center -space-x-1.5 opacity-40 pointer-events-none">
              <div className="w-5 h-5 rounded-full border border-white" />
              <div className="w-5 h-5 rounded-full border border-white" />
              <div className="w-5 h-5 rounded-full border border-white" />
            </div>
          </div>

          {/* Middle Stack (Card 2 & Card 3, 3 cols) */}
          <div id="product" className="md:col-span-3 flex flex-col gap-3.5 sm:gap-4.5">
            
            {/* Card 2: Solid Orange Card (2M+ Trusted Users) */}
            <div className="flex-1 bg-[#E8703A] rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 text-white flex flex-col justify-between min-h-[140px] sm:min-h-[145px] shadow-sm relative overflow-hidden">
              {/* Top right avatar pill */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/80"></span>
                <div className="flex items-center -space-x-1.5 bg-black/20 backdrop-blur-xs px-2 py-1 rounded-full">
                  <div className="w-4 h-4 rounded-full bg-[#E59400] overflow-hidden border border-white/40">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
                      alt="User" 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                      decoding="async" 
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#EA3E69] overflow-hidden border border-white/40">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" 
                      alt="User" 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                      decoding="async" 
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                  <span className="text-[8px] font-bold text-white pl-1">2M+</span>
                </div>
              </div>

              {/* Number and Label */}
              <div>
                <span className="text-[32px] sm:text-[36px] font-black tracking-tight leading-none block font-['Outfit',sans-serif]">
                  2M+
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 block mt-1">
                  Trusted Users
                </span>
              </div>
            </div>

            {/* Card 3: Purple-Gray Card (95% Return Customers) */}
            <div className="flex-1 bg-[#8B7E8C] rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 text-white flex flex-col justify-between min-h-[140px] sm:min-h-[145px] shadow-sm relative overflow-hidden">
              {/* Top right avatars + chevrons */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-bold text-white/70 tracking-widest">›››</span>
                <div className="flex items-center -space-x-1.5 bg-black/20 backdrop-blur-xs px-2 py-1 rounded-full">
                  <div className="w-4 h-4 rounded-full bg-[#2A55FF] overflow-hidden border border-white/40">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" 
                      alt="User" 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                      decoding="async" 
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#2E7D32] overflow-hidden border border-white/40">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80" 
                      alt="User" 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                      decoding="async" 
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                </div>
              </div>

              {/* Number and Label */}
              <div>
                <span className="text-[32px] sm:text-[36px] font-black tracking-tight leading-none block font-['Outfit',sans-serif]">
                  95%
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 block mt-1">
                  Return Customers
                </span>
              </div>
            </div>

          </div>

          {/* Card 4 (Bottom-Right Wide Card, 5 cols): Direct photo of rotary telephone */}
          <div 
            id="about"
            onClick={onOpenContact}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const file = e.dataTransfer.files?.[0];
              if (file) handleImageUpload(file);
            }}
            className="md:col-span-5 bg-[#E5C7BA] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 flex flex-col justify-between min-h-[210px] sm:min-h-[220px] shadow-sm relative overflow-hidden group cursor-pointer"
          >
            {/* Ambient Warm Radial Spotlight */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 35% 45%, rgba(255, 245, 238, 0.5) 0%, rgba(229, 199, 186, 0) 65%)'
              }}
            />

            {/* Direct vintage rotary telephone photograph on the left */}
            <div className="absolute inset-y-0 left-0 w-[50%] sm:w-[56%] overflow-hidden pointer-events-none flex items-center">
              <img
                src={aboutCardImg}
                alt="Vintage black rotary telephone"
                className="w-full h-full object-cover object-center drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                style={{
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)'
                }}
                onError={() => {
                  if (aboutCardImg !== discoveryPhonesSvg) {
                    setAboutCardImg(discoveryPhonesSvg);
                  }
                }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right-aligned block with Left-aligned content: ABOUT US pill & Discovery Call headline */}
            <div className="self-end max-w-[210px] sm:max-w-[270px] text-left z-10 my-auto pl-2 py-2 sm:py-5">
              {/* Pill Badge: ABOUT US */}
              <div className="mb-2.5 sm:mb-4">
                <span className="inline-block px-5 sm:px-7 py-1.5 rounded-full border border-[#2B2B2B] text-[#2B2B2B] text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase bg-transparent transition-all duration-200 group-hover:bg-[#2B2B2B] group-hover:text-[#E5C7BA]">
                  ABOUT US
                </span>
              </div>

              {/* Heading Text */}
              <h4 className="text-[18px] sm:text-[23px] md:text-[25px] font-extrabold text-[#242625] leading-[1.22] tracking-tight font-['Outfit',sans-serif]">
                We Start With<br />
                Discovery Call To<br />
                Understand
              </h4>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
};
