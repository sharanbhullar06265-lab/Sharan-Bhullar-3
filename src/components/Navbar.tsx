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
    <nav className="w-full lg:absolute lg:top-0 lg:left-0 lg:w-1/2 flex items-center justify-between pt-6 sm:pt-8 pb-2 px-6 sm:px-10 lg:px-12 z-20 pointer-events-auto">
      {/* Brand Logo & Studio Credential Badges */}
      <div className="flex items-center gap-7 sm:gap-9">
        <button
          onClick={() => onNavigate('hero')}
          className="flex flex-col text-left cursor-pointer group focus:outline-none"
        >
          <span className="font-extrabold text-[17px] sm:text-[19px] tracking-[0.34em] text-[#111613] uppercase font-['Outfit'] leading-none">
            S T U D I O
          </span>
          <span
            style={{
              height: '12.5px',
              width: '156.828px',
              fontSize: '16.5px',
              lineHeight: '14.5px',
              fontWeight: 'bold',
              fontFamily: 'system-ui',
              textAlign: 'center',
              textDecorationLine: 'underline',
              fontStyle: 'normal',
              borderStyle: 'solid',
              borderWidth: '0px',
              borderRadius: '0px',
            }}
            className="text-[#68716A] tracking-normal mt-1 inline-block"
          >
            Digital experiences
          </span>
        </button>

        {/* Credentials matching reference image */}
        <div className="hidden sm:flex items-center gap-5 text-[12px] font-medium text-[#505752]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#848B85] text-[11px]">✓</span> Design &amp; Creative
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#848B85] text-[11px]">✓</span> Awarded Design
          </span>
        </div>
      </div>
    </nav>
  );
};
