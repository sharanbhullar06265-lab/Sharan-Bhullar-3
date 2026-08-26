import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'project-01',
    title: 'Nordic Living & Architecture',
    clientType: 'Architecture & Design Studio',
    category: 'Business',
    tagline: 'A serene, high-end editorial website crafted for an award-winning architectural firm.',
    description: 'Designed with ultra-clean typography, architectural grid spacing, and seamless visual storytelling. Transformed their digital presence from a standard portfolio to an immersive client conversion gallery.',
    deliverables: ['Custom Web Design', 'Interactive Project Gallery', 'Mobile-First Experience', 'Client Inquiry Funnel'],
    tags: ['WEB DESIGN', 'RESPONSIVE', 'DEVELOPMENT', 'EDITORIAL'],
    year: '2026',
    layoutStyle: 'browser-full',
    heroBadge: 'FEATURED SHOWCASE',
    accentColor: '#20B8B0',
    bgTone: '#FAFAFA',
    metrics: [
      { label: 'Client Inquiry Rate', value: '+240%' },
      { label: 'Avg Session Duration', value: '3m 42s' },
      { label: 'PageSpeed Score', value: '99/100' }
    ],
    url: 'https://designmysite.in/work/nordic-living',
    previewUrlTitle: 'nordicliving.design',
    mockupData: {
      navbarLogo: 'NORDIC STUDIO',
      heroHeadline: 'SPACES BUILT FOR MINDFUL LIVING',
      heroSubheadline: 'Award-winning residential and cultural architecture grounded in sustainable timber and daylight mastery.',
      ctaText: 'View Selected Projects →',
      badgeText: 'EST. COPENHAGEN & OSLO',
      themeStyle: 'clean-white',
      bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      sampleCards: [
        {
          title: 'Villa Fjordland',
          subtitle: 'Sustainable Waterfront Residence • 420m²',
          tag: 'RESIDENTIAL',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Aura Pavilion',
          subtitle: 'Cultural Timber Sanctuary • Oslo',
          tag: 'PUBLIC SPACE',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Kanso Retreat',
          subtitle: 'Mountain Wellness Center • Hemsedal',
          tag: 'HOSPITALITY',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    caseStudy: {
      challenge: 'The studio had world-class architectural projects but their previous website felt dated, heavy, and failed to showcase the serene spatial qualities of their work on mobile devices.',
      solution: 'Created a spacious, editorial layout utilizing 12-column responsive architectural grids, high-fidelity responsive imagery, micro-animations, and an intuitive project filter.',
      results: [
        'Inquiries for high-budget residential projects increased by 240% within 90 days of launch.',
        'Perfect 99/100 Google Lighthouse performance score with zero layout shift.',
        'Mobile visitors now spend 3x more time browsing project galleries.'
      ],
      techStack: ['React', 'Tailwind CSS', 'Motion', 'Next.js', 'Vercel Edge CDN'],
      colors: ['#151515', '#F5F5F3', '#71717A', '#20B8B0'],
      typography: 'Plus Jakarta Sans + Manrope'
    }
  },
  {
    id: 'project-02',
    title: 'Maison Botanique Goods',
    clientType: 'Artisanal Organic Skincare Brand',
    category: 'E-Commerce',
    tagline: 'An elevated Shopify & custom e-commerce experience celebrating plant-based botanical care.',
    description: 'Engineered a warm, tactile digital storefront with seamless product filtering, ingredient discovery drawers, and a friction-free one-click checkout experience.',
    deliverables: ['E-Commerce UX/UI', 'Shopify Liquid Customization', 'Ingredient Visualizer', 'Cart Conversion Optimization'],
    tags: ['E-COMMERCE', 'SHOPIFY', 'UI DESIGN', 'CONVERSION'],
    year: '2026',
    layoutStyle: 'split-detail',
    accentColor: '#10B981',
    bgTone: '#FAF8F5',
    metrics: [
      { label: 'Checkout Conversion', value: '4.8%' },
      { label: 'Mobile Sales Share', value: '78%' },
      { label: 'Average Order Value', value: '+$34' }
    ],
    url: 'https://designmysite.in/work/maison-botanique',
    previewUrlTitle: 'maisonbotanique.store',
    mockupData: {
      navbarLogo: 'MAISON BOTANIQUE',
      heroHeadline: 'PURE BOTANICAL NOURISHMENT',
      heroSubheadline: 'Cold-pressed bioactive formulas harvested sustainably from Mediterranean alpine flora.',
      ctaText: 'Explore Winter Collection →',
      badgeText: '100% ORGANIC & CRUELTY-FREE',
      themeStyle: 'vibrant-warm',
      bannerImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      sampleCards: [
        {
          title: 'Neroli Elixir Serum',
          subtitle: 'Restorative night oil with wild rosehip • $68',
          tag: 'BESTSELLER',
          image: 'https://images.unsplash.com/photo-1608248597359-5f2105151740?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Sage & Cedar Mist',
          subtitle: 'Hydrating balancing toner • $42',
          tag: 'NEW ARRIVAL',
          image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Ceramide Barrier Balm',
          subtitle: 'Deep lipid restoration cream • $54',
          tag: 'FEATURED',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    caseStudy: {
      challenge: 'The brand was experiencing high drop-offs on mobile and their products looked crowded and uninspired on generic store templates.',
      solution: 'Custom-built an editorial shopping layout with sensory product imagery, clear ingredient breakdown cards, and a sticky slide-out cart with bundle incentives.',
      results: [
        'E-commerce store conversion rate doubled from 2.3% to 4.8%.',
        'Mobile cart abandonment dropped by 38%.',
        'Customer satisfaction ratings for ease of purchase hit 99%.'
      ],
      techStack: ['Shopify Plus', 'Custom Liquid & React', 'Tailwind CSS', 'Klaviyo'],
      colors: ['#283618', '#FEFAE0', '#DDA15E', '#606C38'],
      typography: 'Playfair Display + Manrope'
    }
  },
  {
    id: 'project-03',
    title: 'Little Wonderers Discovery',
    clientType: 'Children’s STEAM Activity & Play Centre',
    category: 'Education & Kids',
    tagline: 'Vibrant, playful, and conversion-focused website for a premier family activity centre.',
    description: 'Crafted with joyful shapes, warm colors, and a clean booking flow. Parents can effortlessly browse class schedules, birthday party packages, and reserve spots online.',
    deliverables: ['Playful Visual Identity', 'Class Booking Flow', 'Party Package Configurator', 'Parent Portal UI'],
    tags: ['WEB DESIGN', 'BOOKING SYSTEM', 'UI / UX', 'ANIMATION'],
    year: '2026',
    layoutStyle: 'full-banner',
    accentColor: '#F59E0B',
    bgTone: '#FFFBEB',
    metrics: [
      { label: 'Online Party Bookings', value: '+310%' },
      { label: 'Parent Engagement', value: '4.9★' },
      { label: 'Booking Time', value: '< 90 sec' }
    ],
    url: 'https://designmysite.in/work/little-wonderers',
    previewUrlTitle: 'littlewonderers.centre',
    mockupData: {
      navbarLogo: 'LITTLE WONDERERS 🎈',
      heroHeadline: 'WHERE CURIOSITY TAKES FLIGHT',
      heroSubheadline: 'Hands-on sensory play, robotics workshops, and joyful birthday celebrations for ages 1 to 10.',
      ctaText: 'Book a Free Trial Session →',
      badgeText: 'VOTED #1 FAMILY CENTRE',
      themeStyle: 'pastel-creative',
      bannerImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=1200&q=80',
      sampleCards: [
        {
          title: 'Sensory Wonder Lab',
          subtitle: 'Ages 1–4 • Messy play & discovery science',
          tag: 'DAILY PASS',
          image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Junior Robotics & Lego',
          subtitle: 'Ages 5–10 • Build, code & problem solve',
          tag: 'WEEKEND WORKSHOP',
          image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Epic Birthday Parties',
          subtitle: 'Private arena, theme hosts & party catering',
          tag: 'MOST POPULAR',
          image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    caseStudy: {
      challenge: 'Little Wonderers relied on phone calls and manual WhatsApp messages for class bookings, leading to lost inquiries and double bookings on busy weekends.',
      solution: 'Designed an inviting, family-friendly website with instant online calendar reservations, ticket checkout, and clear answers to parents\' top safety questions.',
      results: [
        '310% increase in direct weekend birthday package reservations.',
        'Saved staff 15+ hours weekly in manual booking administration.',
        'Zero booking friction with under 90-second checkout flow.'
      ],
      techStack: ['React', 'Tailwind CSS', 'Stripe Booking Engine', 'Motion'],
      colors: ['#EA580C', '#FEF08A', '#38BDF8', '#4ADE80'],
      typography: 'Plus Jakarta Sans Rounded'
    }
  },
  {
    id: 'project-04',
    title: 'Stratum Advisory & Capital',
    clientType: 'Private Wealth & Advisory Firm',
    category: 'Business',
    tagline: 'Commanding, trustworthy digital presence for a modern boutique private advisory firm.',
    description: 'Replaced a generic corporate template with a sharp, high-contrast editorial experience featuring bespoke typography, dynamic partner bios, and private client portals.',
    deliverables: ['Brand Website', 'Interactive Insights Hub', 'Client Consultation Funnel', 'Security & Compliance'],
    tags: ['CORPORATE', 'FINANCE', 'WEB DESIGN', 'RESPONSIVE'],
    year: '2026',
    layoutStyle: 'split-detail',
    accentColor: '#20B8B0',
    bgTone: '#F8FAFC',
    metrics: [
      { label: 'High-Net Inquiries', value: '+190%' },
      { label: 'Trust Credibility', value: '100%' },
      { label: 'Mobile Bounce Rate', value: '-45%' }
    ],
    url: 'https://designmysite.in/work/stratum-advisory',
    previewUrlTitle: 'stratumadvisory.com',
    mockupData: {
      navbarLogo: 'STRATUM CAPITAL',
      heroHeadline: 'NAVIGATING COMPLEX CAPITAL WITH CLARITY',
      heroSubheadline: 'Strategic wealth preservation, private equity advisory, and institutional family governance.',
      ctaText: 'Schedule Confidential Briefing →',
      badgeText: '$1.4B+ ASSETS ADVISED',
      themeStyle: 'luxury-champagne',
      bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      sampleCards: [
        {
          title: 'Private Equity Co-Investment',
          subtitle: 'Direct allocation in resilient growth sectors',
          tag: 'ADVISORY',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Global Estate Governance',
          subtitle: 'Cross-border succession & structural tax planning',
          tag: 'FAMILY OFFICE',
          image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Strategic Market Brief Q1 2026',
          subtitle: 'Macro analysis on liquidity & private credit',
          tag: 'INSIGHTS',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    caseStudy: {
      challenge: 'Stratum wanted to appeal to younger next-generation wealth holders without alienating traditional institutional partners.',
      solution: 'Built a refined, dark-and-light contrasting layout with crisp typography, understated motion, and high-trust institutional credibility cues.',
      results: [
        '190% increase in scheduled consultations with accredited family offices.',
        'Mobile bounce rate dropped by 45%.',
        'Recognized for exceptional financial services web design.'
      ],
      techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Calendly Sync'],
      colors: ['#0F172A', '#F8FAFC', '#20B8B0', '#94A3B8'],
      typography: 'Satoshi + Plus Jakarta Sans'
    }
  },
  {
    id: 'project-05',
    title: 'Roast & Ritual Specialty Coffee',
    clientType: 'Artisan Coffee Roasters & Flagship Café',
    category: 'Local & Boutique',
    tagline: 'Warm, sensory website showcasing single-origin beans, brewing guides, and café reservations.',
    description: 'Designed to capture the aroma and craft of specialty coffee with custom origin maps, brew calculators, bean subscription checkout, and table booking.',
    deliverables: ['Boutique Website', 'Subscription Model UI', 'Interactive Brew Guide', 'Local Map & Menu'],
    tags: ['LOCAL BUSINESS', 'E-COMMERCE', 'RESPONSIVE', 'BRANDING'],
    year: '2026',
    layoutStyle: 'grid-card',
    accentColor: '#D97706',
    bgTone: '#FFFDF9',
    metrics: [
      { label: 'Coffee Subscriptions', value: '+215%' },
      { label: 'Weekend Table Bookings', value: '100% Full' },
      { label: 'Local Search Ranking', value: '#1 in City' }
    ],
    url: 'https://designmysite.in/work/roast-and-ritual',
    previewUrlTitle: 'roastandritual.coffee',
    mockupData: {
      navbarLogo: 'ROAST & RITUAL',
      heroHeadline: 'SINGLE-ORIGIN CRAFT, ROASTED DAILY',
      heroSubheadline: 'Ethically sourced from high-altitude micro-lots in Ethiopia, Colombia, and Guatemala.',
      ctaText: 'Shop Fresh Beans →',
      badgeText: 'SPECIALTY GRADE 88+ SCAA',
      themeStyle: 'vibrant-warm',
      bannerImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      sampleCards: [
        {
          title: 'Yirgacheffe Floral Roast',
          subtitle: 'Bergamot, jasmine & wild honey notes • $22',
          tag: 'LIGHT ROAST',
          image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Antioquia Natural Gesha',
          subtitle: 'Papaya, cocoa nibs & sugarcane • $28',
          tag: 'LIMITED BATCH',
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    caseStudy: {
      challenge: 'A beloved local café needed an online channel to ship beans nationwide while still driving local foot traffic to their flagship café.',
      solution: 'Combined a seamless e-commerce bean subscription engine with an alluring local experience page featuring digital menus and reservations.',
      results: [
        'Generated over 600 monthly recurring bean subscribers in 6 months.',
        'Increased local café weekend table reservations to maximum capacity.',
        'Fast 1.8s mobile load time for customers ordering on the go.'
      ],
      techStack: ['React', 'Shopify Storefront API', 'Tailwind CSS', 'Mapbox'],
      colors: ['#451A03', '#FEF3C7', '#B45309', '#78350F'],
      typography: 'Manrope + Plus Jakarta Sans'
    }
  },
  {
    id: 'project-06',
    title: 'Synapse Core Developer AI',
    clientType: 'AI Developer Tooling & API Platform',
    category: 'Tech & SaaS',
    tagline: 'High-converting technical landing page with live interactive code sandbox and documentation hub.',
    description: 'Engineered a slick dark-mode aesthetic with zero visual fluff: interactive terminal previews, real-time latency benchmarks, and an effortless sign-up funnel.',
    deliverables: ['SaaS Landing Page', 'Interactive Code Playground', 'Docs Architecture', 'Conversion Optimization'],
    tags: ['TECH / SAAS', 'DARK MODE', 'UI / UX', 'HIGH PERFORMANCE'],
    year: '2026',
    layoutStyle: 'grid-card',
    accentColor: '#38BDF8',
    bgTone: '#090D16',
    metrics: [
      { label: 'Developer Sign-ups', value: '14.2K' },
      { label: 'Time to First API Call', value: '38s' },
      { label: 'Landing Conversion', value: '8.4%' }
    ],
    url: 'https://designmysite.in/work/synapse-core',
    previewUrlTitle: 'synapse.dev',
    mockupData: {
      navbarLogo: 'SYNAPSE ⚡',
      heroHeadline: 'DISTRIBUTED INFERENCE AT EDGE VELOCITY',
      heroSubheadline: 'Deploy open-source LLMs across 300+ global edge locations with sub-15ms time-to-first-token.',
      ctaText: 'Get Free API Keys →',
      badgeText: '99.999% SLA UPTIME',
      themeStyle: 'tech-slate',
      bannerImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      sampleCards: [
        {
          title: 'Zero Cold-Start Routing',
          subtitle: 'Instant auto-scaling from 0 to 10,000 req/sec',
          tag: 'INFRASTRUCTURE',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Fine-Tuned Embeddings API',
          subtitle: 'Semantic search with 1536-dim vector indexing',
          tag: 'MODELS',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    caseStudy: {
      challenge: 'Technical developers are skeptical of generic marketing pages and bounce quickly if they cannot immediately see code and architecture.',
      solution: 'Placed interactive, copyable curl commands, live syntax-highlighted benchmarks, and simple pricing right on the hero screen.',
      results: [
        'Achieved an extraordinary 8.4% visitor-to-developer-signup rate.',
        'Over 14,000 developers signed up in the first 45 days.',
        'Ranked #1 Product of the Day on ProductHunt.'
      ],
      techStack: ['Next.js', 'Tailwind CSS', 'Shiki Syntax Highlighting', 'Edge Workers'],
      colors: ['#090D16', '#38BDF8', '#818CF8', '#E2E8F0'],
      typography: 'JetBrains Mono + Plus Jakarta Sans'
    }
  }
];

export const HERO_FLOATING_PREVIEWS = [
  {
    id: 'f-1',
    title: 'Artisan Bakery',
    category: 'Local Café',
    tag: 'LOCAL BUSINESS',
    color: '#D97706',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    top: '12%',
    left: '6%',
    rotate: '-7deg',
    scale: 0.95,
    delay: 0.1
  },
  {
    id: 'f-2',
    title: 'Nordic Residence',
    category: 'Architecture',
    tag: 'WEB DESIGN',
    color: '#20B8B0',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    top: '10%',
    right: '7%',
    rotate: '6deg',
    scale: 1.0,
    delay: 0.2
  },
  {
    id: 'f-3',
    title: 'Botanical Skincare',
    category: 'E-Commerce',
    tag: 'SHOPIFY',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    top: '38%',
    left: '2%',
    rotate: '4deg',
    scale: 0.9,
    delay: 0.3
  },
  {
    id: 'f-4',
    title: 'Little Wonderers',
    category: 'Kids Play Centre',
    tag: 'RESPONSIVE',
    color: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80',
    top: '42%',
    right: '3%',
    rotate: '-5deg',
    scale: 0.92,
    delay: 0.4
  },
  {
    id: 'f-5',
    title: 'Private Wealth',
    category: 'Advisory Firm',
    tag: 'UI / UX',
    color: '#6366F1',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    top: '68%',
    left: '7%',
    rotate: '-4deg',
    scale: 0.96,
    delay: 0.5
  },
  {
    id: 'f-6',
    title: 'Streetwear Label',
    category: 'Fashion Store',
    tag: 'E-COMMERCE',
    color: '#EC4899',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
    top: '72%',
    right: '6%',
    rotate: '8deg',
    scale: 0.98,
    delay: 0.6
  },
  {
    id: 'f-7',
    title: 'Developer Cloud',
    category: 'SaaS Platform',
    tag: 'DEVELOPMENT',
    color: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80',
    top: '84%',
    left: '22%',
    rotate: '3deg',
    scale: 0.88,
    delay: 0.7
  },
  {
    id: 'f-8',
    title: 'Kanso Studio',
    category: 'Creative Portfolio',
    tag: 'PORTFOLIO',
    color: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
    top: '86%',
    right: '24%',
    rotate: '-3deg',
    scale: 0.88,
    delay: 0.8
  }
];
