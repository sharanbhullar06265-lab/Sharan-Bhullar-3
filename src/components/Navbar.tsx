import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navlinks = [
    { label: 'Work', target: 'work' },
    { label: 'Services', target: 'services' },
    { label: 'About', target: 'process' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 sm:px-12 border-b border-[#E7E6E2]/70">
      {/* Brand Logo */}
      <button
        onClick={() => onNavigate('hero')}
        className="flex items-center gap-2 text-left cursor-pointer group focus:outline-none"
      >
        <span className="font-extrabold text-[22px] tracking-tight text-[#141414]">
          Design<span className="text-[#20B8B0]">MySite</span>
        </span>
      </button>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-9 text-[14.5px] font-semibold text-[#6E6E6E]">
        {navlinks.map((link) => (
          <button
            key={link.target}
            onClick={() => onNavigate(link.target)}
            className={`transition-colors hover:text-[#141414] cursor-pointer relative py-1 ${
              activeSection === link.target || (link.target === 'work' && activeSection === 'hero')
                ? 'text-[#141414] font-bold'
                : ''
            }`}
          >
            {link.label}
            {(activeSection === link.target || (link.target === 'work' && activeSection === 'hero')) && (
              <motion.span
                layoutId="activeNavDot"
                className="w-1.5 h-1.5 bg-[#20B8B0] rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2"
              />
            )}
          </button>
        ))}
      </div>

      {/* Nav Right CTA & Theme */}
      <div className="hidden sm:flex items-center gap-3">
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 text-[#20B8B0] hover:text-white bg-transparent hover:bg-[#20B8B0] px-5 py-2.5 rounded-full text-[14px] font-bold border border-[#20B8B0]/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>Let's Talk</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="w-9 h-9 rounded-full border border-[#E7E6E2] bg-white flex items-center justify-center text-[#141414] hover:bg-[#F3F3F1] transition-colors cursor-pointer"
          title="Toggle mode"
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 rounded-full border border-[#E7E6E2] flex items-center justify-center text-[#141414] bg-white cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-white rounded-2xl border border-[#E7E6E2] shadow-xl p-5 z-50 md:hidden flex flex-col gap-3"
          >
            {navlinks.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  onNavigate(link.target);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-[15px] font-bold text-[#141414] py-2 px-3 hover:bg-[#F3F3F1] rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#20B8B0] text-white py-3 rounded-full font-bold text-[14px]"
            >
              <span>Let's Talk →</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
