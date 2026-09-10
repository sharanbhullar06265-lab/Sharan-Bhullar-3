import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  BarChart3, 
  ChevronDown, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  MessageSquare
} from 'lucide-react';

interface WebDesignPageProps {
  onOpenContact: () => void;
  onBackToPortfolio: () => void;
}

export const WebDesignPage: React.FC<WebDesignPageProps> = ({
  onOpenContact,
  onBackToPortfolio
}) => {
  // Timeframe for the Portfolio Value chart (1Y active as specified)
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y' | 'All'>('1Y');
  
  // Asset allocation filter
  const [assetFilter, setAssetFilter] = useState<'Asset class' | 'Geographic' | 'Risk-Tier'>('Asset class');
  const [isAssetDropdownOpen, setIsAssetDropdownOpen] = useState(false);

  // Active insight article
  const [activeInsight, setActiveInsight] = useState<number>(0);

  // Risk score simulation state (72 / 100)
  const [riskScore, setRiskScore] = useState(72);

  // Interactive tooltip scrubber state on the chart
  const [scrubberPosition, setScrubberPosition] = useState<{
    active: boolean;
    x: number;
    val: string;
    date: string;
    gain: string;
  }>({
    active: true,
    x: 62, // percentage across width
    val: '$58,200',
    date: 'May 1 – Aug 31',
    gain: '+15.41%'
  });

  const newsInsights = [
    {
      source: 'Aura Impact Metric',
      text: 'Aura reported a 310% increase in qualified investor inquiries within 45 days of deploying our custom frontend architecture.',
      badge: 'B'
    },
    {
      source: 'CNBC',
      text: 'CNBC data highlights institutional migration toward sub-second wealth portals with interactive portfolio simulators.',
      badge: 'CNBC'
    },
    {
      source: 'Bloomberg',
      text: 'Bloomberg Intelligence confirms high-conversion fintech infrastructure drove 4.2x engagement for asset managers.',
      badge: 'Bloomberg'
    },
    {
      source: 'MarketWatch',
      text: 'MarketWatch notes Aura Wealth achieved Tier-1 liquidity allocations through streamlined onboarding architecture.',
      badge: 'MW'
    },
    {
      source: 'Financial Times',
      text: 'Financial Times rates Aura Wealth as one of the fastest digital wealth management portals in North America.',
      badge: 'FT'
    }
  ];

  // Stock ticker items matching word-for-word copy: AAPL $189.32 (-0.92%), META $337.17 (-0.45%), AMZN $172.58 (+1.87%)
  const stocks = [
    {
      name: 'Apple',
      symbol: 'AAPL',
      price: '$189.32',
      change: '-0.92%',
      isPositive: false,
      logoBg: '#111111',
      sparkline: 'M0,12 Q15,4 30,16 T60,18 T90,8 T120,20',
      dotX: 120,
      dotY: 20
    },
    {
      name: 'Meta',
      symbol: 'META',
      price: '$337.17',
      change: '-0.45%',
      isPositive: false,
      logoBg: '#0081FB',
      sparkline: 'M0,10 Q20,18 40,8 T80,14 T100,6 T120,16',
      dotX: 120,
      dotY: 16
    },
    {
      name: 'Amazon',
      symbol: 'AMZN',
      price: '$172.58',
      change: '+1.87%',
      isPositive: true,
      logoBg: '#FFFFFF',
      sparkline: 'M0,18 Q20,14 40,20 T70,8 T100,10 T120,4',
      dotX: 120,
      dotY: 4
    }
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="min-h-screen w-full bg-[#0B0E11] text-[#F0F6FC] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F5AC00]/30 selection:text-[#F0F6FC] pb-24">
      
      {/* =========================================================================
          1. TOP NAVIGATION & HEADER (Semantic <header>)
         ========================================================================= */}
      <header 
        role="banner"
        className="sticky top-0 z-40 w-full border-b border-[#21262D] bg-[#0B0E11]/90 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Back button */}
          <button
            onClick={onBackToPortfolio}
            aria-label="Back to Portfolio on designmysites.com"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161B22] hover:bg-[#21262D] border border-[#21262D] text-[13px] font-semibold text-[#F0F6FC] transition-all cursor-pointer shadow-xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#8B949E] group-hover:-translate-x-0.5 transition-transform" />
            <span>← Back to Portfolio</span>
          </button>

          {/* Status pill: Green live pulsing dot + Case Study: Aura Wealth & Asset Management */}
          <div 
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#161B22] border border-[#21262D]"
            aria-label="Status: Live Case Study for Aura Wealth & Asset Management"
          >
            <span className="w-2 h-2 rounded-full bg-[#23C55E] animate-pulse" aria-hidden="true" />
            <span className="text-[12px] font-medium text-[#8B949E]">
              Case Study: <strong className="text-[#F0F6FC] font-semibold">Aura Wealth &amp; Asset Management</strong>
            </span>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Glass pill */}
          <div 
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161B22] border border-[#21262D] text-[11.5px] font-semibold text-[#F5AC00] shadow-xs"
            title="Interactive Client Demonstration Build"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F5AC00]" aria-hidden="true" />
            <span>✨ Live Interactive Client Build</span>
          </div>

          {/* Amber button: Book Similar Project ↗ */}
          <button
            onClick={onOpenContact}
            aria-label="Book Similar Project with DesignMySites"
            className="px-4 sm:px-5 py-2 rounded-full bg-[#F5AC00] hover:bg-[#D99800] text-[#0B0E11] text-[12.5px] sm:text-[13px] font-bold shadow-[0_4px_18px_rgba(245,172,0,0.35)] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Book Similar Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Main Content Area (<main>) */}
      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {/* =========================================================================
            2. HERO SECTION (Semantic <section>)
           ========================================================================= */}
        <section aria-labelledby="hero-title" className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          {/* Small pill tag */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161B22] border border-[#21262D] text-[#8B949E] text-[11.5px] font-semibold mb-3.5 shadow-xs"
          >
            <span>Fintech &amp; High-Conversion Web Architecture</span>
          </motion.div>

          {/* <h1> Headline with targeted SEO keywords */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-[28px] sm:text-[38px] md:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.15] text-[#F0F6FC] font-['Outfit',sans-serif]"
          >
            Websites Built for <span className="text-[#F5AC00]">Billion-Dollar</span> Clarity.
            <span className="sr-only"> - Fintech Web Design &amp; High-Conversion Development for Aura Wealth by DesignMySites</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="text-[13.5px] sm:text-[15px] text-[#8B949E] mt-3.5 leading-relaxed font-normal"
          >
            We engineered a bespoke, sub-second web experience for Aura Wealth—combining institutional-grade speed, responsive interactive charts, and a high-converting onboarding funnel.
          </motion.p>
        </section>

        {/* =========================================================================
            BENTO CONTAINER: ALLOCATION, METRICS, CHARTS, & TICKER
           ========================================================================= */}
        <section aria-labelledby="dashboard-heading" className="space-y-5 sm:space-y-6">
          <h2 id="dashboard-heading" className="sr-only">
            Fintech Web Design &amp; Interactive Portfolio Dashboard Case Study
          </h2>

          {/* -----------------------------------------------------------------------
              3. ALLOCATION PERFORMANCE CARD (<article>)
             ----------------------------------------------------------------------- */}
          <article 
            aria-labelledby="allocation-heading"
            className="w-full bg-[#161B22] rounded-[24px] sm:rounded-[28px] border border-[#21262D] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            {/* Header: Title + Dropdown + Bar Chart Icon */}
            <div className="flex items-center justify-between mb-6">
              <h3 id="allocation-heading" className="text-[17px] sm:text-[19px] font-bold text-[#F0F6FC] tracking-tight font-['Outfit',sans-serif]">
                Allocation Performance
              </h3>

              <div className="flex items-center gap-2">
                {/* Asset class dropdown selector */}
                <div className="relative">
                  <button
                    onClick={() => setIsAssetDropdownOpen(!isAssetDropdownOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={isAssetDropdownOpen}
                    aria-label="Filter allocation by asset class"
                    className="px-3.5 py-1.5 rounded-full bg-[#0B0E11] hover:bg-[#21262D] border border-[#21262D] text-[12.5px] font-semibold text-[#F0F6FC] flex items-center gap-2 cursor-pointer shadow-xs transition-colors"
                  >
                    <span>{assetFilter} ▾</span>
                  </button>

                  {isAssetDropdownOpen && (
                    <div 
                      role="listbox"
                      className="absolute right-0 mt-1.5 w-40 bg-[#161B22] rounded-2xl border border-[#21262D] shadow-2xl p-1 z-30"
                    >
                      {(['Asset class', 'Geographic', 'Risk-Tier'] as const).map(option => (
                        <button
                          key={option}
                          role="option"
                          aria-selected={assetFilter === option}
                          onClick={() => {
                            setAssetFilter(option);
                            setIsAssetDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-1.5 text-[12px] font-medium text-[#F0F6FC] hover:bg-[#21262D] rounded-xl transition-colors cursor-pointer"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Small chart toggle button */}
                <button 
                  aria-label="Toggle allocation chart visualization view"
                  className="w-9 h-9 rounded-2xl bg-[#0B0E11] hover:bg-[#21262D] border border-[#21262D] flex items-center justify-center text-[#8B949E] hover:text-[#F0F6FC] shadow-xs cursor-pointer transition-colors"
                  title="Chart view toggle"
                >
                  <BarChart3 className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* 4 Allocation Bars in rounded container slots with striped background texture */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              
              {/* 1. Red bar (#FF4D4D) filled to 45% with label "Bonds" */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-full h-[180px] sm:h-[220px] rounded-[22px] overflow-hidden flex flex-col justify-end p-2 border border-[#21262D] relative"
                  style={{
                    background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 6px, transparent 6px, transparent 12px), #0B0E11'
                  }}
                  title="Bonds Asset Allocation: 45%"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '45%' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full bg-[#FF4D4D] rounded-[16px] flex items-start p-3.5 shadow-sm"
                  >
                    <span className="text-[15px] sm:text-[17px] font-bold text-white leading-none font-mono">
                      45%
                    </span>
                  </motion.div>
                </div>
                <span className="text-[13px] font-semibold text-[#8B949E] mt-2.5">
                  Bonds
                </span>
              </div>

              {/* 2. Solid yellow bar (#F5AC00) filled to 85% with label "Stocks" */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-full h-[180px] sm:h-[220px] rounded-[22px] overflow-hidden flex flex-col justify-end p-2 border border-[#21262D] relative"
                  style={{
                    background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 6px, transparent 6px, transparent 12px), #0B0E11'
                  }}
                  title="Stocks Asset Allocation: 85%"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '85%' }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full bg-[#F5AC00] rounded-[16px] flex items-start p-3.5 shadow-sm"
                  >
                    <span className="text-[15px] sm:text-[17px] font-bold text-[#0B0E11] leading-none font-mono">
                      85%
                    </span>
                  </motion.div>
                </div>
                <span className="text-[13px] font-semibold text-[#8B949E] mt-2.5">
                  Stocks
                </span>
              </div>

              {/* 3. Solid white bar (#FFFFFF) filled to 48% with label "ETFs" */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-full h-[180px] sm:h-[220px] rounded-[22px] overflow-hidden flex flex-col justify-end p-2 border border-[#21262D] relative"
                  style={{
                    background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 6px, transparent 6px, transparent 12px), #0B0E11'
                  }}
                  title="ETFs Asset Allocation: 48%"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '48%' }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full bg-[#FFFFFF] rounded-[16px] flex items-start p-3.5 shadow-sm"
                  >
                    <span className="text-[15px] sm:text-[17px] font-bold text-[#0B0E11] leading-none font-mono">
                      48%
                    </span>
                  </motion.div>
                </div>
                <span className="text-[13px] font-semibold text-[#8B949E] mt-2.5">
                  ETFs
                </span>
              </div>

              {/* 4. Striped empty slot filled to 10% with label "Crypto" */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-full h-[180px] sm:h-[220px] rounded-[22px] overflow-hidden flex flex-col justify-end p-2 border border-[#21262D] relative"
                  style={{
                    background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 6px, transparent 6px, transparent 12px), #0B0E11'
                  }}
                  title="Crypto Asset Allocation: 10% (Striped Empty Slot)"
                >
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: '10%' }}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full rounded-[14px] border border-white/15"
                    style={{
                      background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.22), rgba(255,255,255,0.22) 5px, rgba(255,255,255,0.08) 5px, rgba(255,255,255,0.08) 10px)'
                    }}
                  />
                </div>
                <span className="text-[13px] font-semibold text-[#8B949E] mt-2.5">
                  Crypto
                </span>
              </div>

            </div>
          </article>

          {/* -----------------------------------------------------------------------
              4. METRICS & ANALYTICS ROW (2 COLUMNS)
             ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            
            {/* Left Card: Security & Speed Score / Risk Score */}
            <article 
              aria-labelledby="risk-score-heading"
              className="lg:col-span-6 bg-[#161B22] rounded-[24px] sm:rounded-[28px] border border-[#21262D] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Header + Up-Right Arrow Link */}
              <div className="flex items-center justify-between mb-2">
                <h3 id="risk-score-heading" className="text-[14.5px] font-medium text-[#8B949E]">
                  Risk Score
                </h3>
                <button 
                  onClick={() => setRiskScore(prev => (prev >= 85 ? 68 : prev + 4))}
                  aria-label="Simulate Risk and Speed Score calculation"
                  className="w-8 h-8 rounded-full bg-[#0B0E11] hover:bg-[#21262D] border border-[#21262D] flex items-center justify-center text-[#F0F6FC] cursor-pointer transition-colors"
                  title="Simulate Risk & Speed Assessment"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* Big metric: 72 / 100 */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[44px] sm:text-[52px] font-bold text-[#F0F6FC] tracking-tight leading-none font-['Outfit',sans-serif]">
                  {riskScore}
                </span>
                <span className="text-[20px] sm:text-[24px] font-bold text-[#8B949E] font-mono">
                  / 100
                </span>
              </div>

              {/* Semi-circle glowing neon-green gauge graphic with pin marker */}
              <div className="relative w-full h-[150px] sm:h-[170px] flex items-end justify-center overflow-hidden">
                <svg 
                  className="w-full max-w-[340px] h-[170px] overflow-visible" 
                  viewBox="0 0 300 150"
                  aria-label="Visual gauge indicating risk score and frontend speed rating"
                >
                  {/* Patterned dark outer track */}
                  <path
                    d="M 30,140 A 120,120 0 0,1 270,140"
                    fill="none"
                    stroke="#21262D"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  
                  {/* Diagonal striped texture overlay on gauge */}
                  <path
                    d="M 30,140 A 120,120 0 0,1 270,140"
                    fill="none"
                    stroke="url(#diagHatchGauge)"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />

                  {/* Active glowing neon-green gauge graphic (#23C55E) */}
                  <path
                    d="M 30,140 A 120,120 0 0,1 175,25"
                    fill="none"
                    stroke="#23C55E"
                    strokeWidth="28"
                    strokeLinecap="round"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(35, 197, 94, 0.45))' }}
                  />

                  {/* Circular Pivot Anchor */}
                  <circle cx="65" cy="115" r="14" fill="#21262D" />
                  <circle cx="65" cy="115" r="7" fill="#161B22" />

                  {/* Pin Marker on the green arc */}
                  <circle cx="175" cy="25" r="8" fill="#FFFFFF" />
                  <circle cx="175" cy="25" r="12" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
                  <line x1="175" y1="25" x2="175" y2="65" stroke="#23C55E" strokeWidth="2" strokeDasharray="3 3" />
                </svg>

                {/* Subtext: "Stability improved by +4%" */}
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-[12px] sm:text-[13px] font-medium text-[#8B949E]">
                    Stability improved by <strong className="text-[#23C55E] font-bold">+4%</strong>
                  </span>
                </div>
              </div>
            </article>

            {/* Right Card: Industry Insights & Authority */}
            <article 
              aria-labelledby="insights-heading"
              className="lg:col-span-6 bg-[#161B22] rounded-[24px] sm:rounded-[28px] border border-[#21262D] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Top label: Industry Insights with arrow link */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F5AC00]" aria-hidden="true" />
                  <h3 id="insights-heading" className="text-[14.5px] font-bold text-[#F0F6FC] tracking-tight">
                    Industry Insights
                  </h3>
                </div>
                <button
                  onClick={() => setActiveInsight((prev) => (prev + 1) % newsInsights.length)}
                  aria-label="Next Industry Insight Case Point"
                  className="w-8 h-8 rounded-full bg-[#0B0E11] hover:bg-[#21262D] border border-[#21262D] flex items-center justify-center text-[#F0F6FC] cursor-pointer transition-colors"
                  title="Next insight"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* Word-for-Word Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInsight}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="my-auto py-3"
                >
                  <p className="text-[15px] sm:text-[16.5px] text-[#F0F6FC] font-normal leading-relaxed">
                    {activeInsight === 0 ? (
                      <>
                        Aura reported a <strong className="text-[#F5AC00] font-bold">310% increase</strong> in qualified investor inquiries within 45 days of deploying our custom frontend architecture.
                      </>
                    ) : (
                      newsInsights[activeInsight].text
                    )}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Partner badges: [B] [CNBC] [MW] [Bloomberg] [FT] */}
              <div className="pt-4">
                <div 
                  className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#0B0E11] border border-[#21262D] px-3 py-2 rounded-full shadow-inner"
                  role="group"
                  aria-label="Industry media verification sources"
                >
                  {/* Badge 1: Bloomberg [B] */}
                  <button
                    onClick={() => setActiveInsight(0)}
                    aria-label="Filter Bloomberg Insight"
                    title="Bloomberg Terminal Verified"
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[14px] transition-all cursor-pointer ${
                      activeInsight === 0
                        ? 'bg-white text-black ring-2 ring-[#F5AC00]'
                        : 'bg-[#161B22] text-[#F0F6FC] hover:bg-[#21262D]'
                    }`}
                  >
                    B
                  </button>

                  {/* Badge 2: [CNBC] */}
                  <button
                    onClick={() => setActiveInsight(1)}
                    aria-label="Filter CNBC Insight"
                    title="CNBC Coverage"
                    className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider transition-all cursor-pointer ${
                      activeInsight === 1
                        ? 'bg-[#002B49] text-[#2BB7EA] border border-[#2BB7EA] ring-2 ring-[#F5AC00]'
                        : 'bg-[#161B22] text-[#F0F6FC] hover:bg-[#21262D]'
                    }`}
                  >
                    CNBC
                  </button>

                  {/* Badge 3: [MW] MarketWatch */}
                  <button
                    onClick={() => setActiveInsight(3)}
                    aria-label="Filter MarketWatch Insight"
                    title="MarketWatch Verified"
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] transition-all cursor-pointer ${
                      activeInsight === 3
                        ? 'bg-[#003B1E] text-[#23C55E] border border-[#23C55E] ring-2 ring-[#F5AC00]'
                        : 'bg-[#161B22] text-[#23C55E] hover:bg-[#21262D]'
                    }`}
                  >
                    MW
                  </button>

                  {/* Badge 4: [Bloomberg] Full */}
                  <button
                    onClick={() => setActiveInsight(2)}
                    aria-label="Filter Bloomberg Intelligence Insight"
                    title="Bloomberg Intelligence"
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-tight transition-all cursor-pointer ${
                      activeInsight === 2
                        ? 'bg-[#FF5000] text-white ring-2 ring-[#F5AC00]'
                        : 'bg-[#161B22] text-[#8B949E] hover:bg-[#21262D]'
                    }`}
                  >
                    Bloomberg
                  </button>

                  {/* Badge 5: [FT] Financial Times */}
                  <button
                    onClick={() => setActiveInsight(4)}
                    aria-label="Filter Financial Times Insight"
                    title="Financial Times"
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-[11px] transition-all cursor-pointer ${
                      activeInsight === 4
                        ? 'bg-[#FCD0AC] text-[#1A1A1A] ring-2 ring-[#F5AC00]'
                        : 'bg-[#161B22] text-[#FCD0AC] hover:bg-[#21262D]'
                    }`}
                  >
                    FT
                  </button>
                </div>
              </div>
            </article>

          </div>
          
          {/* -----------------------------------------------------------------------
              5. PORTFOLIO VALUE CHART CARD (<article>)
             ----------------------------------------------------------------------- */}
          <article 
            aria-labelledby="portfolio-val-heading"
            className="w-full bg-[#161B22] rounded-[24px] sm:rounded-[28px] border border-[#21262D] p-5 sm:p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.55)] relative overflow-hidden"
          >
            {/* Top row: Title + Metric + Timeframe filter pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
              <div>
                <h3 id="portfolio-val-heading" className="text-[14px] sm:text-[15px] font-medium text-[#8B949E] tracking-tight block">
                  Total Client Capital Processed
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[#F0F6FC] tracking-tight font-['Outfit',sans-serif] leading-none">
                    $54,815,250
                  </span>
                  <div 
                    className="px-2.5 py-1 rounded-full bg-[#2A1515] border border-[#481E1E] text-[#FF4D4D] text-[12px] font-bold flex items-center gap-1 shadow-xs"
                    title="30-Day Volatility Adjusted: 2.4%"
                  >
                    <span>↙</span>
                    <span>2.4%</span>
                  </div>
                </div>
              </div>

              {/* Timeframe filter pills: [1D] [1W] [1M] [3M] [1Y (active)] [All] */}
              <div 
                className="flex items-center gap-1 bg-[#0B0E11] p-1 rounded-full border border-[#21262D] self-start sm:self-auto"
                role="tablist"
                aria-label="Select timeframe range for capital processed chart"
              >
                {(['1D', '1W', '1M', '3M', '1Y', 'All'] as const).map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={timeframe === tab}
                    onClick={() => setTimeframe(tab)}
                    className={`px-3 sm:px-3.5 py-1 rounded-full text-[12px] sm:text-[12.5px] font-bold transition-all cursor-pointer relative ${
                      timeframe === tab
                        ? 'text-[#F0F6FC] bg-[#161B22] shadow-xs'
                        : 'text-[#8B949E] hover:text-[#F0F6FC]'
                    }`}
                  >
                    <span>{tab}</span>
                    {timeframe === tab && (
                      <motion.div
                        layoutId="activeTimeframeIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#F5AC00] rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Golden Chart Canvas Area with Glowing Yellow Polyline */}
            <div className="w-full relative mt-4 pt-4 pb-2">
              
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 text-[11.5px] text-[#8B949E] font-mono select-none" aria-hidden="true">
                $90K
              </div>
              <div className="absolute left-0 top-24 text-[11.5px] text-[#8B949E] font-mono select-none" aria-hidden="true">
                $70K
              </div>

              {/* Chart SVG Graphic */}
              <div 
                className="w-full h-[220px] sm:h-[260px] md:h-[280px] pl-10 pr-2 relative cursor-crosshair"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  setScrubberPosition({
                    active: true,
                    x: Math.max(10, Math.min(90, x)),
                    val: x > 70 ? '$62,940' : x > 40 ? '$58,200' : '$49,150',
                    date: x > 70 ? 'Aug 31' : x > 40 ? 'May 1 – Aug 31' : 'Mar 15',
                    gain: x > 50 ? '+15.41%' : '+8.20%'
                  });
                }}
              >
                <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 280" preserveAspectRatio="none">
                  <defs>
                    {/* Golden Peak Area Gradient (#F5AC00) */}
                    <linearGradient id="peakGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F5AC00" stopOpacity="0.28" />
                      <stop offset="70%" stopColor="#F5AC00" stopOpacity="0.04" />
                      <stop offset="100%" stopColor="#F5AC00" stopOpacity="0" />
                    </linearGradient>

                    {/* Baseline Area Gradient */}
                    <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B949E" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#8B949E" stopOpacity="0.0" />
                    </linearGradient>

                    {/* Diagonal hatch pattern */}
                    <pattern id="diagHatchGauge" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                    </pattern>
                  </defs>

                  {/* Vertical Month Divider Lines */}
                  {Array.from({ length: 12 }).map((_, idx) => {
                    const xCoord = (idx / 11) * 1000;
                    return (
                      <line
                        key={idx}
                        x1={xCoord}
                        y1="0"
                        x2={xCoord}
                        y2="250"
                        stroke="#21262D"
                        strokeWidth="1"
                        strokeDasharray={idx === 4 || idx === 7 ? '0' : '2 3'}
                      />
                    );
                  })}

                  {/* Highlighted Interval Column: May to August */}
                  <rect
                    x="363"
                    y="0"
                    width="274"
                    height="250"
                    fill="url(#diagHatchGauge)"
                    opacity="0.9"
                  />
                  <rect
                    x="363"
                    y="0"
                    width="274"
                    height="250"
                    fill="rgba(245,172,0,0.02)"
                  />

                  {/* Vertical edge highlights for May and August */}
                  <line x1="363" y1="0" x2="363" y2="250" stroke="rgba(245,172,0,0.3)" strokeWidth="1.5" />
                  <line x1="637" y1="0" x2="637" y2="250" stroke="rgba(245,172,0,0.3)" strokeWidth="1.5" />

                  {/* Baseline Area under chart */}
                  <path
                    d="M0,215 Q150,213 300,205 T500,195 T700,220 T1000,222 L1000,250 L0,250 Z"
                    fill="url(#baseGradient)"
                  />

                  {/* Golden Mountain Area Fill under the central peak */}
                  <path
                    d="M330,205 C360,195 380,140 400,145 C420,150 440,110 460,95 C480,120 500,70 515,65 C530,60 540,70 550,115 C565,110 580,145 610,135 C630,165 650,205 670,215 L670,250 L330,250 Z"
                    fill="url(#peakGradient)"
                  />

                  {/* Baseline Gray Line */}
                  <path
                    d="M0,215 L100,214 L200,212 L300,206 L363,180 M637,185 L700,218 L800,220 L900,221 L1000,222"
                    fill="none"
                    stroke="#8B949E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />

                  {/* Glowing Yellow Polyline Area Curve (#F5AC00) */}
                  <path
                    d="M350,195 L363,180 L380,172 L395,148 L410,152 L425,130 L435,138 L450,115 L465,102 L475,116 L490,122 L505,78 L515,65 L525,82 L535,68 L545,118 L555,108 L570,140 L585,135 L600,158 L615,145 L637,180 L650,198"
                    fill="none"
                    stroke="#F5AC00"
                    strokeWidth="2.75"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(245, 172, 0, 0.5))' }}
                  />

                  {/* Highlight dots on May 1 (363px) and Aug 31 (637px) */}
                  <circle cx="363" cy="180" r="5.5" fill="#FFFFFF" stroke="#F5AC00" strokeWidth="2.5" />
                  <circle cx="637" cy="180" r="5.5" fill="#FFFFFF" stroke="#F5AC00" strokeWidth="2.5" />
                </svg>

                {/* Tooltip callout marker: "May 1: $58,200 (+15.41%) | Aug 31: $62,940" */}
                <div
                  className="absolute top-8 pointer-events-none transition-all duration-150 ease-out z-20"
                  style={{
                    left: `${scrubberPosition.x}%`,
                    transform: scrubberPosition.x > 70 ? 'translateX(-100%)' : 'translateX(-20%)'
                  }}
                  aria-live="polite"
                >
                  <div className="bg-[#161B22]/95 backdrop-blur-md rounded-[18px] p-3.5 border border-[#21262D] shadow-[0_12px_32px_rgba(0,0,0,0.7)] min-w-[190px] text-left">
                    <div className="flex items-center justify-between text-[11px] text-[#8B949E] mb-1.5">
                      <span>May 1</span>
                      <span className="font-bold text-[#F0F6FC] font-mono">$58,200</span>
                    </div>

                    <div className="py-1 px-2 rounded-full bg-[#142318] border border-[#23C55E]/40 text-[#23C55E] text-[11px] font-bold text-center mb-1.5 flex items-center justify-center gap-1">
                      <span>+15.41% Growth</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#8B949E]">
                      <span>Aug 31</span>
                      <span className="font-bold text-[#F0F6FC] font-mono">$62,940</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom month markers: Jan through Dec */}
              <div className="w-full flex items-center justify-between pl-10 pr-2 pt-2 text-[11px] sm:text-[12px] font-medium text-[#8B949E] select-none" aria-hidden="true">
                {months.map((m) => (
                  <span key={m} className="hover:text-[#F0F6FC] transition-colors cursor-default">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* -----------------------------------------------------------------------
              6. LIVE TICKER STRIP (<article>)
             ----------------------------------------------------------------------- */}
          <article 
            aria-label="Live market asset tickers and sparklines"
            className="w-full bg-[#161B22] rounded-[20px] sm:rounded-[24px] border border-[#21262D] p-3.5 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 divide-y md:divide-y-0 md:divide-x divide-[#21262D] shadow-md"
          >
            {stocks.map((stock) => (
              <div 
                key={stock.symbol}
                className="flex items-center justify-between w-full px-2 sm:px-4 py-2 md:py-0 group cursor-pointer"
                title={`${stock.name} (${stock.symbol}) Price: ${stock.price} (${stock.change})`}
              >
                {/* Logo & Symbol */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-full flex items-center justify-center shadow-xs border border-white/10 shrink-0"
                    style={{ backgroundColor: stock.logoBg }}
                    aria-hidden="true"
                  >
                    {stock.symbol === 'AAPL' && (
                      <span className="text-white text-[17px] font-bold leading-none"></span>
                    )}
                    {stock.symbol === 'META' && (
                      <span className="text-white text-[15px] font-extrabold leading-none">∞</span>
                    )}
                    {stock.symbol === 'AMZN' && (
                      <span className="text-black text-[16px] font-extrabold font-serif leading-none">a</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-[#F0F6FC] block tracking-tight group-hover:text-[#F5AC00] transition-colors">
                      {stock.symbol}
                    </span>
                    <div className="flex items-center gap-1.5 text-[12px]">
                      <span className="font-bold text-[#F0F6FC] font-mono">{stock.price}</span>
                      <span className={`font-semibold ${stock.isPositive ? 'text-[#23C55E]' : 'text-[#FF4D4D]'}`}>
                        ({stock.change})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sparkline (Amazon with glowing green mini sparkline) */}
                <div className="w-24 sm:w-28 h-7 relative shrink-0" aria-hidden="true">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 120 28">
                    <path
                      d={stock.sparkline}
                      fill="none"
                      stroke={stock.isPositive ? '#23C55E' : '#FF4D4D'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={stock.isPositive ? { filter: 'drop-shadow(0 0 4px rgba(35, 197, 94, 0.5))' } : undefined}
                    />
                    <circle
                      cx={stock.dotX}
                      cy={stock.dotY}
                      r="3.5"
                      fill={stock.isPositive ? '#23C55E' : '#FF4D4D'}
                      stroke="#161B22"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </article>

          {/* =======================================================================
              7. DESIGN PHILOSOPHY SECTION (Semantic <section>)
             ======================================================================= */}
          <section 
            aria-labelledby="philosophy-heading"
            className="bg-[#161B22] rounded-[24px] sm:rounded-[28px] border border-[#21262D] p-6 sm:p-8 mt-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            {/* Header + Headline + Button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[12px] font-bold text-[#F5AC00] uppercase tracking-wider block">
                  OUR WEB DESIGN PHILOSOPHY
                </span>
                <h2 id="philosophy-heading" className="text-[22px] sm:text-[26px] font-extrabold text-[#F0F6FC] tracking-tight font-['Outfit',sans-serif] mt-1">
                  Built to Impress Investors &amp; Convert High-Ticket Clients
                </h2>
              </div>
              <button
                onClick={onOpenContact}
                aria-label="Request a Custom Build Quote from DesignMySites"
                className="px-5 py-2.5 rounded-full bg-[#F0F6FC] hover:bg-white text-[#0B0E11] text-[13px] font-bold transition-all cursor-pointer shrink-0 shadow-sm self-start md:self-auto flex items-center gap-1.5"
              >
                <span>Request a Custom Build Quote</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* 4 Feature Cards (Dark surfaces #161B22 with 1px borders #21262D) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Feature 1 */}
              <div className="bg-[#0B0E11] rounded-[20px] p-5 border border-[#21262D] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#142318] text-[#23C55E] flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#F0F6FC] mb-1.5">Sub-Second Load Times</h3>
                  <p className="text-[12.5px] text-[#8B949E] leading-relaxed">
                    Clean, zero-bloat modern frontend code ensuring 98+ PageSpeed scores and maximum SEO authority.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#0B0E11] rounded-[20px] p-5 border border-[#21262D] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#291C12] text-[#F5AC00] flex items-center justify-center mb-3">
                    <Smartphone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#F0F6FC] mb-1.5">Fluid Mobile Fidelity</h3>
                  <p className="text-[12.5px] text-[#8B949E] leading-relaxed">
                    Engineered to look as crisp on an iPhone OLED screen as it does on a 4K studio desktop display.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#0B0E11] rounded-[20px] p-5 border border-[#21262D] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#12202E] text-[#38BDF8] flex items-center justify-center mb-3">
                    <Code2 className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#F0F6FC] mb-1.5">Shopify &amp; WordPress Engine</h3>
                  <p className="text-[12.5px] text-[#8B949E] leading-relaxed">
                    Headless architecture, customized Liquid themes, and high-converting checkout funnel optimizations.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#0B0E11] rounded-[20px] p-5 border border-[#21262D] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#28152D] text-[#E879F9] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#F0F6FC] mb-1.5">End-to-End Delivery</h3>
                  <p className="text-[12.5px] text-[#8B949E] leading-relaxed">
                    From custom Figma prototypes to full production launch, hosting setup, and post-launch monitoring.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* =======================================================================
              8. BOTTOM ORANGE CTA BANNER (Semantic <aside>)
             ======================================================================= */}
          <aside 
            aria-labelledby="cta-heading"
            className="w-full rounded-[24px] sm:rounded-[28px] bg-gradient-to-r from-[#FFA500] to-[#FF8C00] p-6 sm:p-10 text-[#0B0E11] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
          >
            <div>
              {/* Floating badge */}
              <span className="text-[11.5px] font-black uppercase tracking-wider bg-black/15 px-3 py-1 rounded-full inline-block mb-2 text-[#0B0E11]">
                AVAILABLE FOR NEW CLIENT PROJECTS
              </span>

              {/* Headline */}
              <h2 id="cta-heading" className="text-[24px] sm:text-[32px] font-extrabold font-['Outfit',sans-serif] tracking-tight leading-tight text-[#0B0E11]">
                Ready to build a website that stands out?
              </h2>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#1D1E22] mt-1.5 max-w-lg font-medium leading-relaxed">
                Let&apos;s turn your vision into a high-converting digital platform. Chat directly with our lead developer on WhatsApp.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              {/* Primary button: Black pill with green WhatsApp icon + "Chat on WhatsApp" */}
              <button
                onClick={onOpenContact}
                aria-label="Chat directly with our lead developer on WhatsApp"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0B0E11] hover:bg-[#161B22] text-[#F0F6FC] text-[13px] font-bold shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#23C55E]" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </button>

              {/* Secondary ghost button: "View Main Portfolio" */}
              <button
                onClick={onBackToPortfolio}
                aria-label="View Main Portfolio"
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-black/10 hover:bg-black/20 text-[#0B0E11] text-[13px] font-bold transition-all cursor-pointer"
              >
                View Main Portfolio
              </button>
            </div>
          </aside>

        </section>

      </main>

      {/* Semantic <footer> with SEO metadata and credits */}
      <footer className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-12 text-center text-[12px] text-[#8B949E] border-t border-[#21262D] mt-16">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} <strong className="text-[#F0F6FC]">DesignMySites</strong>. All rights reserved. High-ticket custom WordPress development &amp; Shopify Plus design.
        </p>
        <p className="text-[11px] text-[#8B949E]/70">
          Case Study: Aura Wealth Asset Management · Targeted Keywords: Fintech Web Design, High-Conversion Development, Headless Architecture.
        </p>
      </footer>

    </div>
  );
};
