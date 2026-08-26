import { ServiceItem, ProcessStep, WhyUsPoint } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-01',
    number: '01',
    name: 'Business Websites',
    tagline: 'Modern, high-trust company websites built to attract high-value clients.',
    description: 'Bespoke corporate and professional websites that establish instant authority, communicate your unique value proposition clearly, and generate continuous inbound inquiries.',
    deliverableTime: '2–3 Weeks',
    features: ['Custom Brand UI Design', 'Clear Information Architecture', 'Lead Capture Funnels', '100% Mobile Responsive'],
    idealFor: 'Consultancies, law firms, architects, medical clinics, and B2B enterprises.',
    badge: 'MOST REQUESTED',
    previewMockup: {
      header: 'Authority & Trust',
      sub: 'Transforming corporate visitors into high-ticket clients.',
      tag: 'B2B LEAD-GEN',
      metric: '+180% Inquiries'
    }
  },
  {
    id: 'service-02',
    number: '02',
    name: 'E-Commerce Websites',
    tagline: 'Sensory, frictionless online stores engineered for maximum average order value.',
    description: 'Custom e-commerce shopping experiences with lightning-fast catalog search, high-converting product pages, upsell bundles, and secure, friction-free checkout.',
    deliverableTime: '3–4 Weeks',
    features: ['Custom Product Layouts', 'Cart Upsells & Drawer', 'Frictionless Checkout', 'Inventory & Stripe Sync'],
    idealFor: 'D2C brands, luxury apparel, lifestyle goods, and specialty artisans.',
    badge: 'HIGH CONVERSION',
    previewMockup: {
      header: 'Frictionless Commerce',
      sub: 'Smooth micro-interactions that elevate your product value.',
      tag: 'CHECKOUT UX',
      metric: '4.8% Avg Conversion'
    }
  },
  {
    id: 'service-03',
    number: '03',
    name: 'High-Converting Landing Pages',
    tagline: 'Laser-focused sales & campaign pages designed for maximum conversion ROI.',
    description: 'Single-purpose launch and marketing pages with compelling visual hierarchy, persuasive copywriting layout, social proof anchors, and zero distraction.',
    deliverableTime: '5–7 Days',
    features: ['Hero Hook Optimization', 'A/B Test Ready', 'Fast 1.2s Load Speeds', 'Analytics & Pixel Tracking'],
    idealFor: 'Product launches, ad campaigns, webinar promotions, and SaaS lead acquisition.',
    badge: 'FAST TURNAROUND',
    previewMockup: {
      header: 'Laser Focus',
      sub: 'Every pixel drives one single conversion action.',
      tag: 'CAMPAIGN ACCELERATOR',
      metric: '8.4% Sign-up Rate'
    }
  },
  {
    id: 'service-04',
    number: '04',
    name: 'Website Redesign',
    tagline: 'Modernize your outdated website into a clean, contemporary flagship.',
    description: 'Complete overhaul of clunky, slow, or template-looking websites. We preserve your existing SEO rankings while totally refreshing your visual aesthetic, speed, and mobile usability.',
    deliverableTime: '2–3 Weeks',
    features: ['SEO Migration Safety', 'Fresh Modern Aesthetic', 'Mobile Usability Overhaul', 'Speed & Core Web Vitals Fix'],
    idealFor: 'Established businesses whose current website no longer reflects their true quality.',
    badge: 'VALUE UPGRADE',
    previewMockup: {
      header: 'Total Rejuvenation',
      sub: 'Look like the premium market leader you already are.',
      tag: 'BRAND ELEVATION',
      metric: '-50% Bounce Rate'
    }
  },
  {
    id: 'service-05',
    number: '05',
    name: 'Shopify Websites',
    tagline: 'Tailored Shopify themes and custom Liquid builds with zero template limitations.',
    description: 'Break free from rigid Shopify templates. We build bespoke storefronts on Shopify OS 2.0 with custom sections, interactive product pickers, and automated post-purchase flows.',
    deliverableTime: '3–4 Weeks',
    features: ['Shopify OS 2.0 Architecture', 'Custom Liquid & App Integration', 'Mobile-Optimized Cart', 'Klaviyo & Review Integrations'],
    idealFor: 'Merchants scaling from $10k to $250k+ monthly on Shopify.',
    badge: 'SHOPIFY EXPERT',
    previewMockup: {
      header: 'Shopify Mastery',
      sub: 'Modular sections for effortless in-house marketing edits.',
      tag: 'SHOPIFY OS 2.0',
      metric: '99/100 Mobile Speed'
    }
  },
  {
    id: 'service-06',
    number: '06',
    name: 'Portfolio Websites',
    tagline: 'Editorial, creative portfolio platforms for directors, designers, and creators.',
    description: 'Immersive visual showcases designed to win prestigious commissions, speaking engagements, and high-budget creative representation.',
    deliverableTime: '1–2 Weeks',
    features: ['Interactive Case Studies', 'Fluid Cursor & Scroll Motion', 'Video & Media Optimization', 'Clean Minimal Typographic Grid'],
    idealFor: 'Creative directors, photographers, interior designers, and agencies.',
    badge: 'EDITORIAL CRAFT',
    previewMockup: {
      header: 'Showcase Your Mastery',
      sub: 'Let your body of work speak with unforgettable elegance.',
      tag: 'AWARDS-READY',
      metric: '3x More Inquiries'
    }
  },
  {
    id: 'service-07',
    number: '07',
    name: 'Local Business Websites',
    tagline: 'High-visibility digital storefronts that turn local searchers into paying walk-ins.',
    description: 'Google Maps and local SEO optimized websites with integrated booking, digital menus, click-to-call buttons, and direct WhatsApp / calendar integration.',
    deliverableTime: '7–10 Days',
    features: ['Local SEO & Schema Markup', 'WhatsApp & Direct Booking', 'Interactive Digital Menus', 'Google Reviews Integration'],
    idealFor: 'Restaurants, cafés, salons, activity centers, gyms, and home service providers.',
    badge: 'LOCAL LEAD-GEN',
    previewMockup: {
      header: 'Dominating Local Search',
      sub: 'Turn nearby searches into immediate appointments & visits.',
      tag: 'MAPS & SEO',
      metric: '#1 Local Ranking'
    }
  },
  {
    id: 'service-08',
    number: '08',
    name: 'Custom Website Solutions',
    tagline: 'Bespoke web applications, client portals, and dynamic calculators.',
    description: 'When standard CMS templates aren\'t enough. We build reactive web apps with user authentication, custom price configurators, automated PDF generators, and REST API integrations.',
    deliverableTime: '3–6 Weeks',
    features: ['Tailored React / Next.js Stack', 'Custom Interactive Calculators', 'API & Database Integration', 'Enterprise Security'],
    idealFor: 'Tech startups, real estate portals, and businesses needing custom workflows.',
    badge: 'FULL-STACK TECH',
    previewMockup: {
      header: 'Bespoke Architecture',
      sub: 'Custom logic and interactive tools tailored to your exact workflow.',
      tag: 'CUSTOM ENGINEERING',
      metric: '100% Tailored'
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Strategy & Architecture',
    description: 'We dive deep into your business goals, target audience, competitors, and core conversion paths. We establish a strategic blueprint so every section has a purpose.',
    deliverables: ['Strategy Workshop', 'Site Map & Content Hierarchy', 'Moodboards & Visual Direction'],
    duration: '2–4 Days'
  },
  {
    number: '02',
    title: 'DESIGN',
    subtitle: 'Bespoke Visual Craft',
    description: 'I design custom high-fidelity Figma mockups for desktop, tablet, and mobile. We refine typography, spacing, imagery, and interactive states until it feels extraordinary.',
    deliverables: ['Custom Desktop & Mobile UI', 'Interactive Clickable Prototype', 'Design System & Component Kit'],
    duration: '5–8 Days'
  },
  {
    number: '03',
    title: 'BUILD',
    subtitle: 'Modern Clean Code',
    description: 'I code your website using modern web standards—ensuring sub-second load speeds, clean semantic HTML, fluid motion animations, and bulletproof responsiveness across all devices.',
    deliverables: ['Production TypeScript/React/Shopify Code', 'Mobile Optimization', 'CMS & Form Integrations'],
    duration: '7–12 Days'
  },
  {
    number: '04',
    title: 'LAUNCH',
    subtitle: 'QA, SEO & Deployment',
    description: 'Rigorous cross-browser testing, Core Web Vitals audit, local SEO tag configuration, analytics tracking setup, domain connection, and a smooth public launch.',
    deliverables: ['Lighthouse 95+ Audit', 'Domain & SSL Setup', 'Google Analytics / Meta Pixel', 'Recorded Training Walkthrough'],
    duration: '2–3 Days'
  }
];

export const WHY_WORK_WITH_ME: WhyUsPoint[] = [
  {
    title: 'Thoughtful Design',
    tagline: 'Every section has a purpose.',
    description: 'No bloated templates or random decoration. Every layout, headline position, and button is placed strategically to guide visitors toward becoming clients.',
    iconName: 'LayoutGrid',
    highlight: 'Purpose-Driven UX'
  },
  {
    title: 'Responsive Experience',
    tagline: 'Designed for desktop, tablet & mobile.',
    description: 'Over 70% of web traffic is mobile. I handcraft custom viewport layouts for smartphones and tablets so your website looks sensational on every screen.',
    iconName: 'Smartphone',
    highlight: 'Flawless on Any Screen'
  },
  {
    title: 'Modern Technology',
    tagline: 'Built using modern, fast web standards.',
    description: 'Clean, lean code that loads in under 2 seconds. No heavy WordPress plugins crashing your site. Built with React, Tailwind, Next.js, or custom Shopify.',
    iconName: 'Zap',
    highlight: 'Sub-2s Load Speeds'
  },
  {
    title: 'Business Focused',
    tagline: 'Designed around your customers and goals.',
    description: 'A beautiful website is useless if it doesn’t generate sales. I build clear calls-to-action, high-trust credibility signals, and seamless contact forms.',
    iconName: 'TrendingUp',
    highlight: 'Measurable ROI'
  }
];
