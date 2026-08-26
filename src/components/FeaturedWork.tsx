import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Eye, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Globe, 
  CheckCircle2,
  TrendingUp,
  Maximize2
} from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';

interface FeaturedWorkProps {
  onOpenProjectModal: (project: Project) => void;
  onStartProject: () => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Business',
  'E-Commerce',
  'Local & Boutique',
  'Portfolio & Creative',
  'Education & Kids',
  'Tech & SaaS'
];

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  onOpenProjectModal,
  onStartProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [p1Device, setP1Device] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory || (selectedCategory === 'Portfolio & Creative' && p.category === 'Portfolio & Creative'));

  const p1 = PROJECTS[0]; // Nordic Living (Large Feature)
  const p2 = PROJECTS[1]; // Maison Botanique (Split Layout)
  const p3 = PROJECTS[2]; // Little Wonderers (Full Width)
  const p4 = PROJECTS[3]; // Stratum Advisory (Split detail)
  const otherProjects = PROJECTS.slice(4);

  return (
    <section id="work" className="py-20 sm:py-28 md:py-36 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#20B8B0]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#777777]">
              PORTFOLIO SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#151515]">
            SELECTED WORK
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-lg">
          A collection of websites designed and built for different ideas, industries and businesses. Click any project to open the interactive live case study.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#151515] text-white shadow-md'
                  : 'bg-white text-[#666666] hover:text-[#151515] hover:bg-black/[0.04] border border-black/[0.06]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filtered View Container */}
      <div className="space-y-16 sm:space-y-24">
        
        {/* ========================================================
            PROJECT 01 — HUGE LARGE BROWSER SHOWCASE
        ======================================================== */}
        {(selectedCategory === 'All' || p1.category === selectedCategory) && (
          <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.07] shadow-[0_25px_60px_-25px_rgba(0,0,0,0.08)] p-6 sm:p-10 md:p-14 overflow-hidden">
            
            {/* Interactive Browser Frame */}
            <div className="relative bg-[#F4F4F4] rounded-2xl sm:rounded-3xl border border-black/[0.08] overflow-hidden shadow-xl mb-8 sm:mb-10">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                </div>

                {/* Simulated URL bar */}
                <div className="flex items-center gap-2 bg-[#F1F1F1] px-4 py-1.5 rounded-full text-xs text-[#555555] font-mono max-w-[280px] sm:max-w-[400px] w-full justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#20B8B0]" />
                  <span className="truncate">https://{p1.previewUrlTitle}</span>
                </div>

                {/* Responsive Viewport Switcher */}
                <div className="hidden sm:flex items-center gap-1 bg-[#F1F1F1] p-1 rounded-full text-xs">
                  <button
                    onClick={() => setP1Device('desktop')}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                      p1Device === 'desktop' ? 'bg-white shadow-xs text-[#151515]' : 'text-[#888888] hover:text-[#151515]'
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setP1Device('tablet')}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                      p1Device === 'tablet' ? 'bg-white shadow-xs text-[#151515]' : 'text-[#888888] hover:text-[#151515]'
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setP1Device('mobile')}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                      p1Device === 'mobile' ? 'bg-white shadow-xs text-[#151515]' : 'text-[#888888] hover:text-[#151515]'
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Simulated High-Res Browser Canvas */}
              <div className="p-4 sm:p-8 flex justify-center bg-[#EAEAEA] min-h-[420px] sm:min-h-[580px] lg:min-h-[640px] items-center">
                <div
                  className={`transition-all duration-500 bg-white shadow-2xl overflow-hidden rounded-xl sm:rounded-2xl border border-black/[0.08] ${
                    p1Device === 'desktop'
                      ? 'w-full max-w-5xl'
                      : p1Device === 'tablet'
                      ? 'w-[680px]'
                      : 'w-[360px]'
                  }`}
                >
                  {/* Inside Mockup Content: Hero & Project Cards */}
                  <div className="p-6 sm:p-10 bg-white">
                    <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] mb-8">
                      <span className="font-extrabold text-sm tracking-widest text-[#151515]">
                        {p1.mockupData.navbarLogo}
                      </span>
                      <div className="hidden sm:flex items-center gap-6 text-xs font-semibold text-[#666666]">
                        <span>PROJECTS</span>
                        <span>STUDIO</span>
                        <span>PUBLICATIONS</span>
                        <span>CONTACT</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#777777]">
                        {p1.mockupData.badgeText}
                      </span>
                    </div>

                    <div className="max-w-2xl mb-8">
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-[#151515] tracking-tight leading-tight mb-3">
                        {p1.mockupData.heroHeadline}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                        {p1.mockupData.heroSubheadline}
                      </p>
                    </div>

                    {/* Main Showcase Hero Photo */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 group cursor-pointer" onClick={() => onOpenProjectModal(p1)}>
                      <img
                        src={p1.mockupData.bannerImage}
                        alt="Nordic Architecture"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-8">
                        <div className="text-white">
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full mb-2 inline-block">
                            FEATURED RESIDENTIAL
                          </span>
                          <h4 className="text-base sm:text-2xl font-bold">Fjordland Pavilions & Timber Villas</h4>
                        </div>
                      </div>
                    </div>

                    {/* 3 Grid cards inside browser mockup */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {p1.mockupData.sampleCards.map((card, idx) => (
                        <div key={idx} className="bg-[#F9F9F9] rounded-xl p-3 border border-black/[0.04]">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-28 object-cover rounded-lg mb-2.5"
                            referrerPolicy="no-referrer"
                          />
                          <span className="text-[9px] font-bold text-[#20B8B0] uppercase">{card.tag}</span>
                          <h5 className="text-xs font-bold text-[#151515] truncate">{card.title}</h5>
                          <p className="text-[10px] text-[#777777] truncate">{card.subtitle}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Project 01 Information Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#20B8B0]">PROJECT 01</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  <span className="text-xs font-bold text-[#777777] uppercase tracking-wider">{p1.clientType}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight">
                  {p1.title}
                </h3>
                <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-2 leading-relaxed">
                  {p1.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p1.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/[0.04] text-[#444444]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button & Metrics */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-4 bg-black/[0.03] p-3 rounded-2xl border border-black/[0.04]">
                  {p1.metrics.map((m, idx) => (
                    <div key={idx} className="text-left px-2">
                      <div className="text-sm font-extrabold text-[#151515]">{m.value}</div>
                      <div className="text-[10px] text-[#777777] font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenProjectModal(p1)}
                  className="group inline-flex items-center gap-2 bg-[#151515] hover:bg-[#20B8B0] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            PROJECT 02 — SPLIT LAYOUT (Maison Botanique E-Commerce)
        ======================================================== */}
        {(selectedCategory === 'All' || p2.category === selectedCategory) && (
          <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.07] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-14 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Interactive E-Commerce Visual Preview */}
              <div
                onClick={() => onOpenProjectModal(p2)}
                className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-4 sm:p-8 border border-[#283618]/10 cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#283618]/10 text-xs font-mono text-[#606C38]">
                  <span>SHOPPING EXPERIENCE PREVIEW</span>
                  <span className="font-bold text-[#10B981]">4.8% CONVERSION</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4 bg-white">
                  <img
                    src={p2.mockupData.bannerImage}
                    alt={p2.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#283618]">
                    SHOPIFY PLUS STORE
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {p2.mockupData.sampleCards.map((item, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded-xl border border-black/[0.04]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-20 object-cover rounded-lg mb-1.5"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-[10px] font-bold text-[#151515] truncate">{item.title}</div>
                      <div className="text-[9px] text-[#777777] truncate">{item.subtitle}</div>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-[#283618]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="px-5 py-2.5 rounded-full bg-white shadow-xl text-xs font-bold text-[#151515] flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#10B981]" /> Click to Open Case Study
                  </div>
                </div>
              </div>

              {/* Right: Project Information */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#10B981]">PROJECT 02</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    <span className="text-xs font-bold text-[#777777] uppercase tracking-wider">{p2.clientType}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                    {p2.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  {p2.description}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-black/[0.06]">
                  {p2.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-black text-[#151515]">{m.value}</div>
                      <div className="text-[10px] text-[#777777]">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p2.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/[0.04] text-[#444444]">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenProjectModal(p2)}
                  className="group self-start inline-flex items-center gap-2 bg-[#151515] hover:bg-[#10B981] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer mt-2"
                >
                  <span>Explore E-Commerce Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================
            PROJECT 03 — FULL WIDTH SHOWCASE (Little Wonderers Activity Centre)
        ======================================================== */}
        {(selectedCategory === 'All' || p3.category === selectedCategory) && (
          <div className="bg-[#FFFBEB] rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-amber-200/60 shadow-[0_20px_50px_-20px_rgba(245,158,11,0.1)] p-6 sm:p-10 md:p-14 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#D97706]">PROJECT 03</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">{p3.clientType}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                  {p3.title}
                </h3>
              </div>
              <button
                onClick={() => onOpenProjectModal(p3)}
                className="group inline-flex items-center gap-2 bg-[#151515] hover:bg-[#F59E0B] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 active:scale-98 cursor-pointer self-start md:self-auto"
              >
                <span>View Booking Flow & Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Visual Full-Width Preview Card */}
            <div 
              onClick={() => onOpenProjectModal(p3)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-lg cursor-pointer group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[260px] sm:min-h-[380px] mb-6">
                <img
                  src={p3.mockupData.bannerImage}
                  alt={p3.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 sm:p-10">
                  <div className="text-white">
                    <span className="text-xs font-bold px-3 py-1 bg-amber-500 rounded-full mb-2 inline-block">
                      ONLINE BOOKING ENGINE + CALENDAR
                    </span>
                    <h4 className="text-xl sm:text-3xl font-extrabold">Where Curiosity & Play Connect</h4>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {p3.mockupData.sampleCards.map((card, idx) => (
                  <div key={idx} className="bg-amber-50/50 p-3 rounded-xl border border-amber-100 flex items-center gap-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[9px] font-bold text-amber-700 uppercase">{card.tag}</span>
                      <h5 className="text-xs font-bold text-[#151515]">{card.title}</h5>
                      <p className="text-[10px] text-[#777777]">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PROJECT 04 — STRATUM ADVISORY & CAPITAL
        ======================================================== */}
        {(selectedCategory === 'All' || p4.category === selectedCategory) && (
          <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.07] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-14 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Info */}
              <div className="lg:col-span-5 flex flex-col gap-5 order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#20B8B0]">PROJECT 04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    <span className="text-xs font-bold text-[#777777] uppercase tracking-wider">{p4.clientType}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                    {p4.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  {p4.description}
                </p>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-black/[0.06]">
                  {p4.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-black text-[#151515]">{m.value}</div>
                      <div className="text-[10px] text-[#777777]">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p4.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/[0.04] text-[#444444]">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenProjectModal(p4)}
                  className="group self-start inline-flex items-center gap-2 bg-[#151515] hover:bg-[#20B8B0] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer mt-2"
                >
                  <span>Explore Advisory Website</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Right: Preview Visual */}
              <div 
                onClick={() => onOpenProjectModal(p4)}
                className="lg:col-span-7 bg-[#0F172A] rounded-3xl p-6 sm:p-8 text-white cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-500 order-1 lg:order-2"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                  <span>INSTITUTIONAL CORPORATE SITE</span>
                  <span className="text-[#20B8B0] font-bold">+190% INQUIRIES</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4">
                  <img
                    src={p4.mockupData.bannerImage}
                    alt={p4.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="text-[10px] font-bold text-[#20B8B0] uppercase tracking-wider block mb-1">
                        NAVIGATING CAPITAL WITH CLARITY
                      </span>
                      <h4 className="text-xl font-bold">Stratum Advisory & Asset Governance</h4>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {p4.mockupData.sampleCards.map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <div className="text-[11px] font-bold text-white truncate">{item.title}</div>
                      <div className="text-[9px] text-slate-400 truncate">{item.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================
            ADDITIONAL CURATED SHOWCASES (Roast & Ritual, Synapse AI)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="bg-white rounded-[32px] sm:rounded-[40px] border border-black/[0.07] p-6 sm:p-8 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-gray-100">
                  <img
                    src={project.mockupData.bannerImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#151515]">
                    {project.category}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#20B8B0]">{project.year}</span>
                  <span className="w-1 h-1 rounded-full bg-black/20" />
                  <span className="text-xs text-[#777777] font-semibold">{project.clientType}</span>
                </div>

                <h4 className="text-2xl font-extrabold text-[#151515] tracking-tight group-hover:text-[#20B8B0] transition-colors mb-2">
                  {project.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#666666] line-clamp-2 mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-black/[0.04] text-[#555555]">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-[#151515] flex items-center gap-1 group-hover:text-[#20B8B0] transition-colors">
                  Case Study <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom CTA after work */}
      <div className="mt-16 text-center">
        <p className="text-sm text-[#777777] mb-4">
          Want a bespoke website tailored for your specific industry?
        </p>
        <button
          onClick={onStartProject}
          className="inline-flex items-center gap-2 bg-[#151515] hover:bg-[#20B8B0] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
        >
          <span>Start Your Custom Website Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
