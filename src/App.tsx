import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Palette,
  Smartphone,
  Edit3,
  BarChart3,
  Award,
  Menu,
  X,
  Check,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { SocialMediaPage } from './components/SocialMediaPage';
import { WebDesignPage } from './components/WebDesignPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'Portfolio' | 'Web Design' | 'Social Media' | 'About'>('Social Media');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedEmail(true);
      setEmail('');
      setTimeout(() => setSubmittedEmail(false), 5000);
    }, 600);
  };

  const handleBookCall = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setIsContactOpen(false);
    }, 2500);
  };

  if (activeTab === 'Social Media') {
    return (
      <main className="w-full min-h-screen">
        <SocialMediaPage
          onOpenContact={() => setIsContactOpen(true)}
          onBackToPortfolio={() => setActiveTab('Portfolio')}
        />
        {/* Contact / Consultation Modal */}
        <AnimatePresence>
          {isContactOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[28px] p-6 max-w-md w-full shadow-2xl border border-[#EDEDED]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#F6F2BE] flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#111613]" />
                    </span>
                    <h3 className="font-extrabold text-[17px] text-[#111613] font-['Outfit']">Let's Connect</h3>
                  </div>
                  <button
                    onClick={() => setIsContactOpen(false)}
                    aria-label="Close modal"
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#F4F4F0] flex items-center justify-center text-[#111613] hover:bg-[#EAEAE6] cursor-pointer transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[13px] text-[#68716A] mb-4">
                  Connect with our digital specialists to discuss high-converting WordPress &amp; Shopify websites and multi-platform social media growth.
                </p>
                
                {bookingConfirmed ? (
                  <div className="p-4 bg-[#E8F5E9] rounded-2xl text-center space-y-1">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2E7D32] text-white mb-1">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="text-[13px] font-bold text-[#2E7D32]">Consultation Reserved!</p>
                    <p className="text-[11px] text-[#4E8D53]">We'll reach out directly to coordinate your strategy session.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={handleBookCall}
                      className="w-full min-h-[44px] bg-[#FF6B3D] text-white py-2.5 px-4 rounded-full text-[13px] font-bold hover:bg-[#F25A2B] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Chat on WhatsApp
                    </button>
                    <button
                      onClick={() => setIsContactOpen(false)}
                      className="w-full min-h-[44px] bg-[#F4F4F0] text-[#111613] py-2.5 px-4 rounded-full text-[13px] font-semibold hover:bg-[#EAEAE6] transition-colors cursor-pointer flex items-center justify-center"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#EBEBEB] flex items-center justify-center p-2.5 sm:p-5 md:p-6 lg:p-7 xl:p-8 select-none overflow-x-hidden overflow-y-auto">
      
      {/* Centered Mockup Card (16:10 locked aspect ratio on desktop, stacked vertical card on tablet/phone) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1360px] bg-white rounded-[22px] sm:rounded-[30px] lg:rounded-[36px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.14)] flex flex-col lg:flex-row overflow-hidden relative border border-[#E2E2E2] lg:aspect-[16/10] my-auto"
      >
        
        {/* =========================================================================
            LEFT HALF (52% width on desktop, 100% on tablet/mobile, Pure White Background)
           ========================================================================= */}
        <div className="w-full lg:w-[52%] h-auto lg:h-full bg-white flex flex-col justify-between p-4.5 xs:p-5 sm:p-7 md:p-8 lg:p-9 xl:p-11 relative shrink-0 font-bold gap-5 sm:gap-6 lg:gap-0">
          
          {/* Top Bar: Brand Logo & Agency Credentials */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full shrink-0 gap-2.5 sm:gap-0">
            {/* Logo */}
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[15px] sm:text-[17px] tracking-[0.14em] text-[#111613] uppercase font-['Outfit'] leading-none">
                DESIGNMYSITES
              </span>
              <span className="text-[11px] sm:text-[12px] font-bold text-[#68716A] text-left mt-1 leading-none font-['Plus_Jakarta_Sans'] block">
                Web Design &amp; Social Growth
              </span>
            </div>

            {/* Credentials Matching Reference */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 md:gap-5 text-[10.5px] sm:text-[11.5px] font-medium text-[#505752]">
              <span className="flex items-center gap-1.5 hover:text-[#111613] transition-colors cursor-default">
                <span className="text-[#848B85] text-[11px]">✓</span> WordPress &amp; Shopify
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#111613] transition-colors cursor-default">
                <span className="text-[#848B85] text-[11px]">✓</span> Multi-Platform Socials
              </span>
            </div>
          </div>

          {/* Middle Hero Section (Vertically Centered) */}
          <div className="my-auto py-2 sm:py-3 lg:py-0 flex flex-col items-center text-center px-1 sm:px-3 md:px-4 max-w-[530px] mx-auto w-full">
            
            {/* Floating pill tag with soft drop shadow */}
            <motion.div
              whileHover={{ y: -2 }}
              className="px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-white text-[11.5px] sm:text-[13px] font-semibold text-[#111613] shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-[#EDEDED] mb-3 sm:mb-4 md:mb-5 inline-flex items-center justify-center cursor-default select-none"
            >
              <span>All-In-One Digital Growth</span>
            </motion.div>

            {/* Main Display Headline */}
            <h1
              id="main-hero-headline"
              className="text-[23px] xs:text-[25px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[41px] font-extrabold text-[#111613] leading-[1.15] sm:leading-[1.14] tracking-[-0.03em] font-['Outfit',sans-serif]"
            >
              We build high-converting websites and run your socials while you run your business.
            </h1>

            {/* Subtext */}
            <p className="text-[11.5px] sm:text-[12.5px] lg:text-[13px] text-[#68716A] leading-[1.5] sm:leading-[1.55] max-w-[420px] mt-2.5 sm:mt-3.5 md:mt-4 font-normal">
              We build WordPress &amp; Shopify websites, improve SEO, and grow your social media.
            </p>

            {/* Email Input Field with Orange Button */}
            <form onSubmit={handleSubmit} className="w-full max-w-[420px] mt-4 sm:mt-5 md:mt-6 bg-white rounded-full p-1 sm:p-1.5 pl-3 sm:pl-4 md:pl-5 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-[#ECEEEA] relative transition-shadow focus-within:shadow-[0_14px_36px_rgba(255,107,61,0.16)]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="text-[11.5px] sm:text-[12.5px] md:text-[13px] text-[#111613] placeholder-[#9EA5A0] bg-transparent outline-none flex-1 pr-2 font-normal min-w-0"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FF6B3D] hover:bg-[#F25A2B] text-white px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-[11.5px] sm:text-[12.5px] md:text-[13px] font-bold shadow-[0_4px_14px_rgba(255,107,61,0.38)] transition-all cursor-pointer shrink-0 disabled:opacity-80 whitespace-nowrap min-h-[38px] sm:min-h-[42px] flex items-center justify-center"
              >
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </motion.button>
            </form>

            {/* Submission confirmation toast */}
            <AnimatePresence>
              {submittedEmail && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-3 px-3 py-1 bg-[#E8F5E9] border border-[#C8E6C9] rounded-full text-[11px] font-semibold text-[#2E7D32] flex items-center gap-1.5 shadow-xs"
                >
                  <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>Thank you for signing up! We&apos;ll be in touch shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Row: WhatsApp Button and Portfolio Thumbnails */}
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-end justify-between w-full pt-3 sm:pt-4 gap-3.5 sm:gap-0 shrink-0">
            {/* Bottom-left: Green WhatsApp icon + Message Us Directly */}
            <div className="flex flex-col gap-1.5 w-full sm:w-auto items-center sm:items-start">
              <button
                id="call-us-button"
                onClick={() => setIsContactOpen(true)}
                className="w-full sm:w-[160px] max-w-[200px] sm:max-w-none h-[42px] sm:h-[40px] min-h-[40px] bg-[#111613] hover:bg-[#202922] rounded-full p-1 pl-1.5 pr-3.5 flex items-center justify-center sm:justify-start cursor-pointer shadow-xs hover:scale-105 active:scale-95 transition-all shrink-0"
                title="Message Us Directly"
              >
                <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 fill-white text-white"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.777.978-.953 1.178-.175.2-.351.225-.651.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.084-.176-.3-.019-.462.132-.612.136-.135.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.927-2.234-.244-.588-.492-.508-.676-.518-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.375-.276.3-1.053 1.028-1.053 2.507 0 1.478 1.078 2.905 1.228 3.105.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.23 1.378.2 1.9.122.581-.088 1.78-.727 2.03-1.428.251-.7.251-1.302.176-1.428-.075-.125-.276-.2-.576-.35z" />
                    <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.947.56 3.766 1.528 5.305L2.1 22l4.856-1.396A9.957 9.957 0 0 0 12.004 22C17.525 22 22 17.525 22 12.004 22 6.48 17.525 2 12.004 2zm0 18.297c-1.688 0-3.255-.494-4.577-1.346l-.328-.21-2.887.83.845-2.813-.23-.342A8.257 8.257 0 0 1 3.708 12c0-4.575 3.722-8.296 8.296-8.296 4.575 0 8.296 3.721 8.296 8.296 0 4.575-3.721 8.297-8.296 8.297z" />
                  </svg>
                </span>
                <span className="text-[11px] font-semibold text-white/90 ml-2 whitespace-nowrap">
                  Message Us Directly
                </span>
              </button>
            </div>

            {/* Bottom-right: "Recent client builds & viral campaigns" + 5 Miniature Capsules */}
            <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
              <div className="text-center sm:text-right mb-2 sm:mb-2.5 whitespace-normal sm:whitespace-nowrap">
                <span className="text-[13px] sm:text-[15px] lg:text-[17px] font-bold text-[#111613] leading-[1.18] tracking-[-0.02em] font-['Outfit'] inline">
                  Recent client builds &amp;{' '}
                </span>
                <span className="text-[13px] sm:text-[15px] lg:text-[17px] font-bold text-[#111613] leading-[1.18] tracking-[-0.02em] font-['Outfit'] inline">
                  viral campaigns
                </span>
              </div>

              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                {/* Capsule 1: Blue Marketing Pill */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => setSelectedCard('marketing')}
                  className="w-[27px] h-[58px] rounded-full overflow-hidden bg-[#2550EB] flex flex-col justify-between items-center py-1.5 px-0.5 border border-black/5 shadow-xs cursor-pointer select-none"
                  title="Performance Marketing"
                >
                  <span className="text-[6.5px] font-extrabold text-white leading-none tracking-tighter">with</span>
                  <span className="text-[6.5px] font-extrabold text-white leading-none tracking-tighter">rketing</span>
                </motion.div>

                {/* Capsule 2: Yellow Smiley Pill */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => setSelectedCard('delight')}
                  className="w-[27px] h-[58px] rounded-full overflow-hidden bg-[#FFDA44] flex flex-col justify-between items-center py-1.5 px-0.5 border border-black/5 shadow-xs cursor-pointer select-none text-[#111613]"
                  title="Delightful UX"
                >
                  <span className="text-[7.5px] font-bold leading-none tracking-tight">● ●</span>
                  <span className="text-[8px] font-bold leading-none -mt-1">◡</span>
                  <span className="text-[6px] font-bold opacity-0">.</span>
                </motion.div>

                {/* Capsule 3: Soft Lavender Portrait Pill */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => setSelectedCard('editorial')}
                  className="w-[27px] h-[58px] rounded-full overflow-hidden bg-[#EDE9FE] relative border border-black/5 shadow-xs cursor-pointer select-none"
                  title="Editorial Portrait"
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Creative Portrait"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[7px] font-bold text-white leading-none bg-black/40 px-1 py-0.5 rounded-full">
                    ↓
                  </span>
                </motion.div>

                {/* Capsule 4: Dark Noir Fashion Pill */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => setSelectedCard('fashion')}
                  className="w-[27px] h-[58px] rounded-full overflow-hidden bg-[#1D1B1E] relative border border-black/5 shadow-xs cursor-pointer select-none"
                  title="Editorial Fashion"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Editorial Model"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Capsule 5: Deep Indigo Gradient Pill */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  onClick={() => setSelectedCard('interface')}
                  className="w-[27px] h-[58px] rounded-full overflow-hidden bg-[#3525B8] relative border border-black/5 shadow-xs cursor-pointer select-none"
                  title="Abstract Interface"
                >
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80"
                    alt="Abstract UI"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT HALF (48% width on desktop, 100% on tablet/mobile, Soft Pastel Sage Green Background #CEE7C1)
           ========================================================================= */}
        <div className="w-full lg:w-[48%] h-auto lg:h-full p-2.5 sm:p-3.5 lg:p-2.5 flex flex-col shrink-0">
          
          {/* Rounded Outer Sage Frame */}
          <div className="w-full h-auto lg:h-full bg-[#CEE7C1] rounded-[22px] sm:rounded-[30px] p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_3px_rgba(255,255,255,0.5)] gap-3.5 lg:gap-0">
            
            {/* Top Navigation Bar inside Sage Frame */}
            <div className="flex items-center justify-between w-full gap-2 shrink-0 mb-3">
              {/* Pure White Pill Navigation */}
              <div className="bg-white rounded-full p-1 flex items-center gap-1 shadow-xs border border-white/60 overflow-x-auto no-scrollbar max-w-[calc(100%-48px)] sm:max-w-none">
                <button
                  onClick={() => setActiveTab('Portfolio')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[11.5px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'Portfolio'
                      ? 'bg-[#B9D99A] text-[#1E2E17] shadow-xs'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setActiveTab('Web Design')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[11.5px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'Web Design'
                      ? 'bg-[#B9D99A] text-[#1E2E17] shadow-xs'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  Web Design
                </button>
                <button
                  onClick={() => setActiveTab('Social Media')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[11.5px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'Social Media'
                      ? 'bg-[#B9D99A] text-[#1E2E17] shadow-xs'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  Social Media
                </button>
                <button
                  onClick={() => setActiveTab('About')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[11.5px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'About'
                      ? 'bg-[#B9D99A] text-[#1E2E17] shadow-xs'
                      : 'text-[#68716A] hover:text-[#111613]'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[11.5px] font-bold text-[#111613] hover:text-[#FF6B3D] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Chat Now
                </button>
              </div>

              {/* Circular Hamburger Icon Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111613] shadow-xs hover:bg-[#F6F2BE] transition-colors cursor-pointer shrink-0"
                title="Open Navigation Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>

            {/* Main Body inside Green Container: Switchable Dynamic Pages */}
            <AnimatePresence mode="wait">
              {activeTab === 'Social Media' ? (
                <SocialMediaPage
                  key="social-media"
                  onOpenContact={() => setIsContactOpen(true)}
                  onBackToPortfolio={() => setActiveTab('Portfolio')}
                />
              ) : activeTab === 'Web Design' ? (
                <WebDesignPage
                  key="web-design"
                  onOpenContact={() => setIsContactOpen(true)}
                  onBackToPortfolio={() => setActiveTab('Portfolio')}
                />
              ) : activeTab === 'About' ? (
                <AboutPage
                  key="about"
                  onOpenContact={() => setIsContactOpen(true)}
                  onBackToPortfolio={() => setActiveTab('Portfolio')}
                />
              ) : (
                <motion.div
                  key="portfolio"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1 min-h-0 items-stretch"
                >
              
              {/* -------------------------------------------------------------
                  Column A (Left Inner Column, ~48% width):
                  2x2 Services + Framed Poster Card
                 ------------------------------------------------------------- */}
              <div className="flex flex-col justify-between h-full gap-2.5 min-h-0">
                
                {/* 2x2 Grid of Small White Squircle Cards */}
                <div className="grid grid-cols-2 gap-2 shrink-0">
                  {/* Card 1: Shopify Stores */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    onClick={() => setSelectedCard('Shopify Stores')}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFE6EC] flex items-center justify-center text-[#EA3E69] mb-1">
                      <Palette className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[10.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FF6B3D] transition-colors">
                        Shopify Stores
                      </h4>
                      <p className="text-[7.5px] text-[#78817A] leading-tight line-clamp-2">
                        Custom, high-speed storefronts optimized for smooth checkout and repeat sales.
                      </p>
                    </div>
                    <span className="text-[7.5px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FF6B3D] flex items-center gap-0.5">
                      View stores →
                    </span>
                  </motion.div>

                  {/* Card 2: WordPress Sites */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    onClick={() => setSelectedCard('WordPress Sites')}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#2A55FF] mb-1">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[10.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FF6B3D] transition-colors">
                        WordPress Sites
                      </h4>
                      <p className="text-[7.5px] text-[#78817A] leading-tight line-clamp-2">
                        Clean business websites and WooCommerce setups built to rank on search engines.
                      </p>
                    </div>
                    <span className="text-[7.5px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FF6B3D] flex items-center gap-0.5">
                      See live sites →
                    </span>
                  </motion.div>

                  {/* Card 3: Social Media Growth */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    onClick={() => setSelectedCard('Social Media Growth')}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFF4D6] flex items-center justify-center text-[#E59400] mb-1">
                      <Edit3 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[10.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FF6B3D] transition-colors">
                        Social Media Growth
                      </h4>
                      <p className="text-[7.5px] text-[#78817A] leading-tight line-clamp-2">
                        Content calendars, daily posts, reels, and active growth on IG, FB, LinkedIn &amp; X.
                      </p>
                    </div>
                    <span className="text-[7.5px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FF6B3D] flex items-center gap-0.5">
                      Explore strategy →
                    </span>
                  </motion.div>

                  {/* Card 4: Brand Makeovers */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    onClick={() => setSelectedCard('Brand Makeovers')}
                    className="bg-white rounded-[18px] p-2.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#FA6A38] mb-1">
                      <BarChart3 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[10.5px] font-bold text-[#111613] leading-tight mb-0.5 group-hover:text-[#FF6B3D] transition-colors">
                        Brand Makeovers
                      </h4>
                      <p className="text-[7.5px] text-[#78817A] leading-tight line-clamp-2">
                        Unified design assets, modern logos, and visual identity that make your business look authoritative.
                      </p>
                    </div>
                    <span className="text-[7.5px] font-bold text-[#111613] mt-1.5 group-hover:text-[#FF6B3D] flex items-center gap-0.5">
                      View work →
                    </span>
                  </motion.div>
                </div>

                {/* Tall Vertical Framed Poster Card (White Border + Artistic Sliced Portrait) */}
                <div
                  onClick={() => setSelectedCard('Brand Makeover Case Study')}
                  className="bg-[#F2EFE9] rounded-[22px] border-2 border-white overflow-hidden relative flex-1 min-h-[260px] sm:min-h-[280px] lg:min-h-0 shadow-xs cursor-pointer group flex flex-col justify-between p-2 select-none"
                >
                  {/* Sliced Face Mosaic Container */}
                  <div className="relative w-full flex-1 min-h-0 rounded-[14px] overflow-hidden bg-[#EBE7DF] grid grid-cols-2 grid-rows-3 gap-[2px]">
                    
                    {/* Block 1: Top Left */}
                    <div className="relative overflow-hidden bg-[#E7E3DA] flex flex-col justify-between p-1.5">
                      <span className="text-[5px] font-mono font-bold tracking-wider text-[#6B685E] uppercase block">
                        FULL DIGITAL MAKEOVER
                      </span>
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                        alt="Portrait Tile 1"
                        className="absolute inset-0 w-[200%] h-[300%] max-w-none object-cover pointer-events-none opacity-85"
                        style={{ transform: 'translate(0%, 0%)' }}
                      />
                    </div>

                    {/* Block 2: Top Right */}
                    <div className="relative overflow-hidden bg-[#E7E3DA] flex flex-col justify-between p-1.5">
                      <span className="text-[5px] font-mono font-bold tracking-wider text-[#6B685E] uppercase block text-right z-10">
                        FULL DIGITAL MAKEOVER
                      </span>
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                        alt="Portrait Tile 2"
                        className="absolute inset-0 w-[200%] h-[300%] max-w-none object-cover pointer-events-none opacity-85"
                        style={{ transform: 'translate(-50%, 0%)' }}
                      />
                    </div>

                    {/* Block 3: Middle Left */}
                    <div className="relative overflow-hidden bg-[#E7E3DA] flex flex-col justify-end p-1.5">
                      <span className="text-[5px] font-mono font-bold tracking-wider text-[#6B685E] uppercase block z-10">
                        FULL DIGITAL MAKEOVER
                      </span>
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                        alt="Portrait Tile 3"
                        className="absolute inset-0 w-[200%] h-[300%] max-w-none object-cover pointer-events-none opacity-85"
                        style={{ transform: 'translate(0%, -33.3%)' }}
                      />
                    </div>

                    {/* Block 4: Middle Right */}
                    <div className="relative overflow-hidden bg-[#E7E3DA]">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                        alt="Portrait Tile 4"
                        className="absolute inset-0 w-[200%] h-[300%] max-w-none object-cover pointer-events-none opacity-85"
                        style={{ transform: 'translate(-50%, -33.3%)' }}
                      />
                    </div>

                    {/* Block 5: Bottom Left (Neck / Dark Shirt) */}
                    <div className="relative overflow-hidden bg-[#202738]">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                        alt="Portrait Tile 5"
                        className="absolute inset-0 w-[200%] h-[300%] max-w-none object-cover pointer-events-none opacity-90"
                        style={{ transform: 'translate(0%, -66.6%)' }}
                      />
                    </div>

                    {/* Block 6: Bottom Right (Navy Blue Poster Stamp) */}
                    <div className="relative overflow-hidden bg-[#1D273D] text-white p-1.5 flex flex-col justify-between z-10">
                      <span className="text-[5px] text-[#A2B1D0] leading-none uppercase block">
                        EVERY BRAND COUNTS
                      </span>
                      <div>
                        <span className="text-[7.5px] font-extrabold text-white leading-tight uppercase block font-['Outfit']">
                          SCALE IT
                        </span>
                        <span className="text-[7.5px] font-extrabold text-white leading-tight uppercase block font-['Outfit']">
                          FAST &amp; CLEAN
                        </span>
                      </div>
                      <span className="text-[4.5px] font-mono text-[#A2B1D0] leading-none">
                        START TODAY
                      </span>
                    </div>

                  </div>

                  {/* Foot Logo Badges Bar */}
                  <div className="flex items-center justify-center pt-1.5 px-1 text-[6.5px] font-bold text-[#555E53] tracking-normal shrink-0">
                    <span>DesignMySites / Built to Convert</span>
                  </div>
                </div>

              </div>

              {/* -------------------------------------------------------------
                  Column B (Right Inner Column, ~48% width):
                  "Complete digital execution for your brand" + Warm Cream Card
                 ------------------------------------------------------------- */}
              <div className="flex flex-col justify-between h-full gap-2.5 min-h-0">
                
                {/* Services title & subtext */}
                <div className="shrink-0 pt-0.5">
                  <h3 className="text-[17px] font-extrabold text-[#111613] leading-[1.1] font-['Outfit']">
                    Complete digital<br />execution for your brand
                  </h3>
                  <p className="text-[8.5px] text-[#44503E] leading-[1.35] mt-1 line-clamp-3 font-normal">
                    From custom e-commerce builds to daily multi-channel posting, we handle the technical and creative work so you can run your business.
                  </p>
                </div>

                {/* Warm Cream / Light-Yellow Rounded Card #F8F4BA */}
                <div className="bg-[#F8F4BA] rounded-[24px] sm:rounded-[28px] p-4 flex-1 min-h-[280px] lg:min-h-0 flex flex-col justify-between border border-[#EDE7A4]/70 shadow-xs relative overflow-hidden mt-1 sm:mt-0">
                  
                  {/* Top: Large Headline + Hand-Drawn White Looping Arrow */}
                  <div className="relative pt-1">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-[17px] xs:text-[18px] sm:text-[20px] md:text-[21px] lg:text-[19px] xl:text-[21px] font-extrabold text-[#111613] leading-[1.12] tracking-[-0.02em] font-['Outfit']">
                        Before working<br />
                        with us, their pages<br />
                        were completely silent.
                      </h4>

                      {/* Hand-drawn Looping White Arrow pointing down */}
                      <svg
                        className="w-12 h-10 sm:w-16 sm:h-14 text-white ml-auto -mt-1 sm:-mt-2 -mr-1 drop-shadow-xs shrink-0"
                        viewBox="0 0 90 75"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M 24 35 C 14 20, 20 8, 42 6 C 66 4, 78 20, 70 38 C 62 52, 40 48, 46 32 C 52 18, 74 20, 82 46" />
                        <path d="M 74 43 L 82 48 L 84 38" />
                      </svg>
                    </div>
                  </div>

                  {/* Embedded White Rounded Rating Card with Pink Floating Badge */}
                  <div className="bg-white rounded-[22px] p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#ECEEEA] relative mt-auto">
                    
                    {/* Floating Badge: "★ 100% Done-For-You" */}
                    <div className="px-2.5 py-1 rounded-full bg-[#EA2E5E] text-white text-[8.5px] font-bold shadow-[0_6px_16px_rgba(234,46,94,0.35)] absolute -top-3.5 right-3 z-10 flex items-center gap-1 select-none whitespace-nowrap">
                      <span>★ 100% Done-For-You</span>
                    </div>

                    <div className="mb-2 pr-8">
                      <h5 className="text-[12px] font-extrabold text-[#111613] leading-tight font-['Outfit']">
                        Verified Client
                      </h5>
                      <span className="text-[9px] font-semibold text-[#78817A] leading-tight block mt-0.5">
                        Turnaround
                      </span>
                    </div>

                    {/* User Rows */}
                    <div className="space-y-2 pt-2 border-t border-[#F2F2EE]">
                      {/* Row 1: Shopify Redesign & Speed */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80"
                            alt="Client Avatar 1"
                            className="w-4.5 h-4.5 rounded-full object-cover"
                          />
                          <div>
                            <span className="text-[10px] font-bold text-[#111613] block leading-none">
                              Shopify Redesign &amp; Speed
                            </span>
                            <span className="text-[7.5px] font-medium text-[#78817A] block leading-none mt-0.5">
                              Full Store Overhaul
                            </span>
                          </div>
                        </div>
                        <span className="text-[10.5px] font-extrabold text-[#111613]">
                          +185% orders
                        </span>
                      </div>

                      {/* Row 2: All-Channel Social Reach */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80"
                            alt="Client Avatar 2"
                            className="w-4.5 h-4.5 rounded-full object-cover"
                          />
                          <div>
                            <span className="text-[10px] font-bold text-[#111613] block leading-none">
                              All-Channel Social Reach
                            </span>
                            <span className="text-[7.5px] font-medium text-[#78817A] block leading-none mt-0.5">
                              Instagram &amp; LinkedIn
                            </span>
                          </div>
                        </div>
                        <span className="text-[10.5px] font-extrabold text-[#111613]">
                          +54k monthly views
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
            )}
            </AnimatePresence>

          </div>

        </div>

      </motion.div>

      {/* Quick Contact / Schedule Call Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsContactOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[28px] p-6 max-w-sm w-full shadow-2xl border border-[#EDEDED]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#F6F2BE] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#111613]" />
                  </span>
                  <h3 className="font-extrabold text-[17px] text-[#111613] font-['Outfit']">Let's Connect</h3>
                </div>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="w-7 h-7 rounded-full bg-[#F4F4F0] flex items-center justify-center text-[#111613] hover:bg-[#EAEAE6] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[13px] text-[#68716A] mb-4">
                Connect with our digital specialists to discuss high-converting WordPress &amp; Shopify websites and multi-platform social media growth.
              </p>
              
              {bookingConfirmed ? (
                <div className="p-4 bg-[#E8F5E9] rounded-2xl text-center space-y-1">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2E7D32] text-white mb-1">
                    <Check className="w-4 h-4" />
                  </span>
                  <p className="text-[13px] font-bold text-[#2E7D32]">Consultation Reserved!</p>
                  <p className="text-[11px] text-[#4E8D53]">We'll reach out directly to coordinate your strategy session.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={handleBookCall}
                    className="w-full bg-[#FF6B3D] text-white py-2.5 rounded-full text-[13px] font-bold hover:bg-[#F25A2B] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-white text-white"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.777.978-.953 1.178-.175.2-.351.225-.651.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.084-.176-.3-.019-.462.132-.612.136-.135.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.927-2.234-.244-.588-.492-.508-.676-.518-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.375-.276.3-1.053 1.028-1.053 2.507 0 1.478 1.078 2.905 1.228 3.105.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.23 1.378.2 1.9.122.581-.088 1.78-.727 2.03-1.428.251-.7.251-1.302.176-1.428-.075-.125-.276-.2-.576-.35z" />
                      <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.947.56 3.766 1.528 5.305L2.1 22l4.856-1.396A9.957 9.957 0 0 0 12.004 22C17.525 22 22 17.525 22 6.48 17.525 2 12.004 2zm0 18.297c-1.688 0-3.255-.494-4.577-1.346l-.328-.21-2.887.83.845-2.813-.23-.342A8.257 8.257 0 0 1 3.708 12c0-4.575 3.722-8.296 8.296-8.296 4.575 0 8.296 3.721 8.296 8.296 0 4.575-3.721 8.297-8.296 8.297z" />
                    </svg>
                    Chat on WhatsApp
                  </button>
                  <button
                    onClick={() => setIsContactOpen(false)}
                    className="w-full bg-[#F4F4F0] text-[#111613] py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#EAEAE6] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-end p-4"
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] p-5 w-72 shadow-2xl border border-[#EDEDED] flex flex-col gap-3 mt-12"
            >
              <div className="flex items-center justify-between border-b border-[#F0F0ED] pb-3">
                <span className="font-extrabold text-[15px] text-[#111613] font-['Outfit']">Navigation</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#F4F4F0] flex items-center justify-center text-[#111613] hover:bg-[#EAEAE6] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {(['Portfolio', 'Web Design', 'Social Media', 'About'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-3.5 py-2.5 min-h-[44px] flex items-center rounded-xl text-[13px] font-semibold capitalize transition-colors cursor-pointer ${
                      activeTab === tab ? 'bg-[#CEE7C1] text-[#1E2E17]' : 'hover:bg-[#F6F6F2] text-[#44503E]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="text-left px-3.5 py-2.5 min-h-[44px] flex items-center rounded-xl text-[13px] font-bold text-[#FF6B3D] hover:bg-[#FFF4F0] transition-colors mt-1 cursor-pointer"
                >
                  Chat Now →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Showcase Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[28px] p-6 max-w-md w-full shadow-2xl border border-[#EDEDED]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-bold text-[#FF6B3D] uppercase tracking-wider">Showcase</span>
                <button
                  onClick={() => setSelectedCard(null)}
                  aria-label="Close showcase modal"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#F4F4F0] flex items-center justify-center text-[#111613] hover:bg-[#EAEAE6] cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-extrabold text-[20px] text-[#111613] font-['Outfit'] mb-2">
                {selectedCard}
              </h3>
              <p className="text-[13px] text-[#68716A] mb-5 leading-relaxed">
                Crafted with precision, our human-centered designs ensure exceptional conversion rates, tactile brand delight, and rock-solid platform scalability.
              </p>
              <button
                onClick={() => {
                  setSelectedCard(null);
                  setIsContactOpen(true);
                }}
                className="w-full min-h-[44px] bg-[#111613] text-white py-3 px-4 rounded-full text-[13px] font-bold hover:bg-[#2A2E2B] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Inquire about this service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
