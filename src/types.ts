export type ProjectCategory = 
  | 'All'
  | 'Business'
  | 'E-Commerce'
  | 'Local & Boutique'
  | 'Portfolio & Creative'
  | 'Tech & SaaS'
  | 'Education & Kids';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  clientType: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  deliverables: string[];
  tags: string[];
  year: string;
  layoutStyle: 'browser-full' | 'split-detail' | 'full-banner' | 'grid-card';
  heroBadge?: string;
  accentColor: string;
  bgTone: string;
  metrics: ProjectMetric[];
  url?: string;
  previewUrlTitle?: string;
  // Visual Mockup Elements
  mockupData: {
    navbarLogo: string;
    heroHeadline: string;
    heroSubheadline: string;
    ctaText: string;
    badgeText: string;
    themeStyle: 'minimal-dark' | 'clean-white' | 'vibrant-warm' | 'pastel-creative' | 'luxury-champagne' | 'tech-slate';
    bannerImage: string;
    sampleCards: {
      title: string;
      subtitle: string;
      tag?: string;
      image?: string;
    }[];
  };
  caseStudy: {
    challenge: string;
    solution: string;
    results: string[];
    techStack: string[];
    colors: string[];
    typography: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverableTime: string;
  features: string[];
  idealFor: string;
  badge: string;
  previewMockup: {
    header: string;
    sub: string;
    tag: string;
    metric: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface WhyUsPoint {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  businessName: string;
  currentWebsite: string;
  projectType: string;
  timeline: string;
  budgetTier: string;
  featuresNeeded: string[];
  message: string;
}
