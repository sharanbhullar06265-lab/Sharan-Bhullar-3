import React from 'react';
import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-12 pb-10 px-6 sm:px-12 md:px-16 border-t border-[#E1E4DF]">
      {/* Top 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 pb-12 border-b border-[#E1E4DF] items-start">
        
        {/* Brand Info */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#111613] text-white flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 3 21l9-5 9 5L12 2Z" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="font-extrabold text-[18px] tracking-[0.2em] uppercase text-[#111613] font-['Outfit']">
              STUDIO
            </span>
          </div>

          <p className="text-[13.5px] text-[#68716A] leading-relaxed max-w-sm mt-1 font-medium">
            Websites that work as hard as your business does. Built with high precision, high-conversion architecture, and bespoke craftsmanship.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2 mt-4">
            {[
              { label: '𝕏', href: 'https://twitter.com' },
              { label: 'in', href: 'https://linkedin.com' },
              { label: 'Ig', href: 'https://instagram.com' },
              { label: 'Be', href: 'https://behance.net' },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#E1E4DF] bg-white flex items-center justify-center text-[13px] font-bold text-[#111613] hover:bg-[#111613] hover:text-white hover:border-[#111613] transition-colors shadow-xs"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Menu Column */}
        <div className="md:col-span-2 sm:col-span-1">
          <h4 className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#9EA59F] mb-4">
            MENU
          </h4>
          <ul className="space-y-2.5 text-[14px] font-semibold text-[#111613]">
            <li>
              <button
                onClick={() => onNavigate('work')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('pricing')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Process Column */}
        <div className="md:col-span-3 sm:col-span-1">
          <h4 className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#9EA59F] mb-4">
            PROCESS
          </h4>
          <ul className="space-y-2.5 text-[14px] font-semibold text-[#111613]">
            <li>
              <button
                onClick={() => onNavigate('process')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Create a strategy</span>
                <span className="text-[9px] font-extrabold bg-[#FA6A38] text-white px-1.5 py-0.5 rounded">
                  New
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('philosophy')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                Design Philosophy
              </button>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-2 sm:col-span-1">
          <h4 className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#9EA59F] mb-4">
            LEGAL
          </h4>
          <ul className="space-y-2.5 text-[14px] font-semibold text-[#111613]">
            <li>
              <span className="hover:text-[#FA6A38] transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </li>
            <li>
              <span className="hover:text-[#FA6A38] transition-colors cursor-pointer">
                Terms of Service
              </span>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#FA6A38] transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12.5px] text-[#68716A] gap-3 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#111613]">designmysite.in</span>
          <span>•</span>
          <span>Crafted with clean code &amp; deliberate rhythm</span>
        </div>

        <div className="flex items-center gap-4">
          <span>© 2026 STUDIO / DesignMySite. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#111613] hover:text-[#FA6A38] font-bold transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
