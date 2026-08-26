import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';
import { InquiryFormState } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledProject,
}) => {
  const [formData, setFormData] = useState<InquiryFormState>({
    name: '',
    email: '',
    businessName: '',
    currentWebsite: '',
    projectType: 'Business Website',
    timeline: '2–4 Weeks',
    budgetTier: '$2,500 – $5,000',
    featuresNeeded: ['Custom UI Design', 'Mobile-First Optimization'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, projectType: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledProject) {
      setFormData(prev => ({
        ...prev,
        message: `Hi, I saw your case study on ${prefilledProject} and would love to build a similar website for our business.`
      }));
    }
  }, [prefilledProject]);

  const projectTypes = [
    'Business Website',
    'E-Commerce & Shopify',
    'Landing Page',
    'Website Redesign',
    'Portfolio / Creator',
    'Local Business Website',
    'Custom Web App',
  ];

  const budgetTiers = [
    'Under $2,000',
    '$2,000 – $4,000',
    '$4,000 – $8,000',
    '$8,000+',
  ];

  const timelineOptions = [
    'ASAP (1–2 Weeks)',
    'Standard (2–4 Weeks)',
    'Flexible (1–2 Months)',
  ];

  const featureOptions = [
    'Custom UI/UX in Figma',
    'Mobile-First Responsive',
    'Shopify / E-Commerce Cart',
    'SEO & Meta Tags Setup',
    'Booking / Calendar Sync',
    'Custom CMS & Blog',
  ];

  const toggleFeature = (feature: string) => {
    setFormData(prev => {
      const exists = prev.featuresNeeded.includes(feature);
      if (exists) {
        return { ...prev, featuresNeeded: prev.featuresNeeded.filter(f => f !== feature) };
      } else {
        return { ...prev, featuresNeeded: [...prev.featuresNeeded, feature] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      
      {/* Signature Teal / Cyan Rounded Canvas */}
      <div className="relative bg-[#20B8B0] text-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] p-8 sm:p-14 md:p-20 shadow-[0_25px_60px_-15px_rgba(32,184,176,0.35)] overflow-hidden">
        
        {/* Subtle decorative wireframe background shapes */}
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-black/10 blur-2xl pointer-events-none" />
        
        {/* Geometric wireframe mockup outline in background */}
        <div className="absolute right-10 bottom-10 opacity-10 hidden xl:block pointer-events-none">
          <div className="w-80 h-96 border-4 border-white rounded-3xl p-4 flex flex-col gap-3 rotate-6">
            <div className="w-full h-8 bg-white rounded-xl" />
            <div className="w-3/4 h-6 bg-white rounded-lg" />
            <div className="w-full h-40 bg-white/60 rounded-xl" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md mb-6 sm:mb-8 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>START A PROJECT</span>
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04] mb-6">
                HAVE A WEBSITE
                <br />
                IN MIND?
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md mb-10">
                Let's turn your idea into a website that looks great, communicates clearly, and converts visitors into paying clients.
              </p>
            </div>

            {/* Direct Contact Anchors */}
            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="text-xs font-bold text-white/75 uppercase tracking-wider">
                Direct Communication Channels
              </div>

              <a
                href="mailto:sharanbhullar06265@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-semibold"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-[#20B8B0] flex items-center justify-center flex-shrink-0 font-bold">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-white/70">Email Inquiries</div>
                  <div className="text-white truncate">sharanbhullar06265@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%20DesignMySite,%20I'd%20like%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-semibold"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-white/70">Instant WhatsApp Chat</div>
                  <div className="text-white">Quick Project Consultation</div>
                </div>
              </a>

              <div className="flex items-center gap-2 pt-2 text-xs text-white/80">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Confidential • Typical Response within 4 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7 bg-white text-[#151515] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#20B8B0]/15 text-[#20B8B0] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151515] mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#666666] max-w-md mb-6 leading-relaxed">
                  Thank you, <strong>{formData.name || 'there'}</strong>! I will review your project requirements for <strong>{formData.businessName || 'your brand'}</strong> and reach out within 4–6 hours with an initial concept strategy and timeline.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#151515] text-white text-xs font-bold hover:bg-[#20B8B0] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Project Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2.5">
                    1. What kind of website do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#151515] text-white shadow-xs'
                              : 'bg-[#F4F4F4] text-[#555555] hover:bg-[#EBEBEB]'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Key Features Needed */}
                <div>
                  <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2.5">
                    2. Features & Scope
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {featureOptions.map((feat) => {
                      const isChecked = formData.featuresNeeded.includes(feat);
                      return (
                        <button
                          type="button"
                          key={feat}
                          onClick={() => toggleFeature(feat)}
                          className={`p-2.5 rounded-xl text-left text-[11px] font-medium border transition-all flex items-center justify-between cursor-pointer ${
                            isChecked
                              ? 'bg-[#20B8B0]/10 border-[#20B8B0] text-[#0E8A83] font-bold'
                              : 'bg-white border-black/[0.08] text-[#555555] hover:bg-black/[0.02]'
                          }`}
                        >
                          <span className="truncate">{feat}</span>
                          {isChecked && <CheckCircle2 className="w-3 h-3 text-[#20B8B0] flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budgetTier}
                      onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                      className="w-full bg-[#F7F7F7] border border-black/[0.08] rounded-2xl px-4 py-3 text-xs font-semibold text-[#151515] focus:outline-none focus:border-[#20B8B0]"
                    >
                      {budgetTiers.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#F7F7F7] border border-black/[0.08] rounded-2xl px-4 py-3 text-xs font-semibold text-[#151515] focus:outline-none focus:border-[#20B8B0]"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F7F7F7] border border-black/[0.08] rounded-2xl px-4 py-3 text-xs font-medium text-[#151515] focus:outline-none focus:border-[#20B8B0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F7F7F7] border border-black/[0.08] rounded-2xl px-4 py-3 text-xs font-medium text-[#151515] focus:outline-none focus:border-[#20B8B0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Studio"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-[#F7F7F7] border border-black/[0.08] rounded-2xl px-4 py-3 text-xs font-medium text-[#151515] focus:outline-none focus:border-[#20B8B0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                      Current Website (if any)
                    </label>
                    <input
                      type="text"
                      placeholder="www.yourcompany.com"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      className="w-full bg-[#F7F7F7] border border-black/[0.08] rounded-2xl px-4 py-3 text-xs font-medium text-[#151515] focus:outline-none focus:border-[#20B8B0]"
                    />
                  </div>
                </div>

                {/* 5. Project Brief Message */}
                <div>
                  <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                    Tell me about your goals & vision
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you're looking to achieve with this website..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F7F7] border border-black/[0.08] rounded-2xl p-4 text-xs font-medium text-[#151515] focus:outline-none focus:border-[#20B8B0] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-[#151515] hover:bg-[#20B8B0] text-white py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
