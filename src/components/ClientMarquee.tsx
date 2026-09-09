import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Star } from 'lucide-react';

export const ClientMarquee: React.FC = () => {
  const row1Clients = [
    { name: 'Cafe Noor', tag: '@cafenoor', color: '#FA6A38', category: 'Artisan Cafe' },
    { name: 'Studio Bloom', tag: '@studiobloom', color: '#375323', category: 'Architecture' },
    { name: 'Vetta Clinic', tag: '@vettaclinic', color: '#1B2340', category: 'Healthcare' },
    { name: 'The Boutique', tag: '@theboutique', color: '#FA6A38', category: 'Fashion' },
    { name: 'FitCore Gym', tag: '@fitcore', color: '#111613', category: 'Fitness & Gym' },
    { name: 'Salon Aura', tag: '@salonaura', color: '#375323', category: 'Beauty & Spa' },
    { name: 'Nook Bakery', tag: '@nookbakery', color: '#FA6A38', category: 'Bakery' },
    { name: 'Lumen Agency', tag: '@lumenagency', color: '#1B2340', category: 'Consultancy' },
  ];

  const row2Clients = [
    { name: 'Solis Energy', tag: '@solisenergy', color: '#375323', category: 'CleanTech' },
    { name: 'Arc Studio', tag: '@arcstudio', color: '#111613', category: 'Interior Design' },
    { name: 'Little Wonderers', tag: '@littlewonderers', color: '#FA6A38', category: 'Kids Activity' },
    { name: 'Kanso Living', tag: '@kansoliving', color: '#1B2340', category: 'Lifestyle Store' },
    { name: 'Stratum Wealth', tag: '@stratumadvisory', color: '#375323', category: 'Finance' },
    { name: 'Terra Coffee', tag: '@terracoffee', color: '#FA6A38', category: 'Roastery' },
    { name: 'Velox SaaS', tag: '@veloxhq', color: '#111613', category: 'Software' },
    { name: 'Aura Law', tag: '@auralaw', color: '#1B2340', category: 'Legal Practice' },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-[#E1E4DF]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FA6A38]" />
          <span className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#68716A]">
            WHO I WORK WITH
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111613] tracking-tight leading-tight">
          You'll find businesses just like yours
        </h2>

        <p className="text-base text-[#68716A] font-medium mt-4 leading-relaxed">
          From first-time founders to teams ready for a refresh — this is the kind of business I design and build for.
        </p>
      </div>

      {/* Row 1: Forward Marquee */}
      <div className="overflow-hidden py-2 mask-fade-edges">
        <div className="flex gap-4 w-max animate-marquee-slow">
          {[...row1Clients, ...row1Clients].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 bg-white border border-[#E1E4DF] rounded-full py-2.5 px-4 pr-5 shadow-xs hover:shadow-md hover:border-[#111613] transition-all cursor-default select-none"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-extrabold tracking-wider"
                style={{ backgroundColor: client.color }}
              >
                {getInitials(client.name)}
              </div>
              <div className="flex flex-col">
                <span className="text-[13.5px] font-extrabold text-[#111613] leading-tight">
                  {client.name}
                </span>
                <span className="text-[10.5px] text-[#68716A] font-medium leading-none">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="overflow-hidden py-2 mt-3 mask-fade-edges">
        <div className="flex gap-4 w-max animate-marquee-reverse">
          {[...row2Clients, ...row2Clients].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 bg-white border border-[#E1E4DF] rounded-full py-2.5 px-4 pr-5 shadow-xs hover:shadow-md hover:border-[#111613] transition-all cursor-default select-none"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-extrabold tracking-wider"
                style={{ backgroundColor: client.color }}
              >
                {getInitials(client.name)}
              </div>
              <div className="flex flex-col">
                <span className="text-[13.5px] font-extrabold text-[#111613] leading-tight">
                  {client.name}
                </span>
                <span className="text-[10.5px] text-[#68716A] font-medium leading-none">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
