import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Mail, MessageSquare, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { InquiryFormState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState<InquiryFormState>({
    name: '',
    email: '',
    businessName: '',
    currentWebsite: '',
    projectType: 'Business Website',
    timeline: 'Standard (2–3 Weeks)',
    budgetTier: '₹40k / Growth Tier',
    featuresNeeded: ['Custom UI/UX', 'Mobile-First Optimization'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const projectTypes = [
    'Business Website',
    'E-Commerce & Store',
    'Landing Page',
    'Website Redesign',
    'Local Business / Dining',
    'Custom Scope',
  ];

  const budgetOptions = [
    '₹15k (Starter Package)',
    '₹40k (Growth Package)',
    '₹75k+ (Custom / E-Com)',
    'Flexible / Discuss',
  ];

  const featureOptions = [
    'Custom Figma Design',
    'Mobile-First Layout',
    'Shopify / Stripe Cart',
    'SEO & Meta Setup',
    'Appointment Booking',
    'Fast 1.2s PageSpeed',
  ];

  const toggleFeature = (feature: string) => {
    setFormData(prev => {
      const exists = prev.featuresNeeded.includes(feature);
      return {
        ...prev,
        featuresNeeded: exists
          ? prev.featuresNeeded.filter(f => f !== feature)
          : [...prev.featuresNeeded, feature],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi DesignMySite! I'd like to discuss a project for ${formData.businessName || 'my business'}.\nProject Type: ${formData.projectType}\nBudget: ${formData.budgetTier}\nTimeline: ${formData.timeline}`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="bg-white rounded-3xl sm:rounded-[36px] max-w-2xl w-full p-6 sm:p-10 border border-[#E7E6E2] shadow-2xl relative my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F4F6F2] flex items-center justify-center text-[#111613] hover:bg-[#111613] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FA6A38]/10 text-[#FA6A38] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111613] mb-2">
              Inquiry Received!
            </h3>
            <p className="text-sm text-[#68716A] max-w-md mb-8 leading-relaxed">
              Thank you, <strong>{formData.name || 'there'}</strong>! I will review your requirements for <strong>{formData.businessName || 'your project'}</strong> and respond within 4–6 hours with a concept roadmap and quote.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="bg-[#111613] text-white px-6 py-3 rounded-full font-bold text-xs hover:bg-[#FA6A38] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FA6A38]" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#68716A]">
                PROJECT DISCOVERY &amp; CONSULTATION
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111613] tracking-tight mb-2">
              Let's build your website.
            </h3>
            <p className="text-xs sm:text-sm text-[#68716A] mb-6">
              Fill out this quick brief and I'll prepare a custom roadmap for your business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Project Type */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111613] mb-2">
                  1. Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map(t => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, projectType: t })}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        formData.projectType === t
                          ? 'bg-[#111613] text-white shadow-xs'
                          : 'bg-[#F4F6F2] text-[#68716A] hover:bg-[#E1E4DF]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope & Features */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111613] mb-2">
                  2. Key Deliverables
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {featureOptions.map(feat => {
                    const isSelected = formData.featuresNeeded.includes(feat);
                    return (
                      <button
                        type="button"
                        key={feat}
                        onClick={() => toggleFeature(feat)}
                        className={`p-2 rounded-xl text-left text-[11px] font-medium border transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#FA6A38]/10 border-[#FA6A38] text-[#FA6A38] font-bold'
                            : 'bg-white border-[#E1E4DF] text-[#68716A] hover:bg-[#F4F6F2]'
                        }`}
                      >
                        <span className="truncate">{feat}</span>
                        {isSelected && <CheckCircle2 className="w-3 h-3 text-[#FA6A38] flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111613] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F4F6F2] border border-[#E1E4DF] rounded-xl px-3.5 py-2.5 text-xs text-[#111613] focus:outline-none focus:border-[#FA6A38]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111613] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F4F6F2] border border-[#E1E4DF] rounded-xl px-3.5 py-2.5 text-xs text-[#111613] focus:outline-none focus:border-[#FA6A38]"
                  />
                </div>
              </div>

              {/* Business Name & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111613] mb-1">
                    Business / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cafe Noor"
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#F4F6F2] border border-[#E1E4DF] rounded-xl px-3.5 py-2.5 text-xs text-[#111613] focus:outline-none focus:border-[#FA6A38]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111613] mb-1">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={formData.budgetTier}
                    onChange={e => setFormData({ ...formData, budgetTier: e.target.value })}
                    className="w-full bg-[#F4F6F2] border border-[#E1E4DF] rounded-xl px-3.5 py-2.5 text-xs text-[#111613] focus:outline-none focus:border-[#FA6A38]"
                  >
                    {budgetOptions.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111613] mb-1">
                  Tell me briefly about what you need
                </label>
                <textarea
                  rows={2}
                  placeholder="Goals, target launch date, existing website link..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F4F6F2] border border-[#E1E4DF] rounded-xl p-3 text-xs text-[#111613] focus:outline-none focus:border-[#FA6A38] resize-none"
                />
              </div>

              {/* Submit & WhatsApp triggers */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-[#111613] hover:bg-[#FA6A38] text-white py-3.5 rounded-full font-bold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Brief...' : 'Send Project Brief →'}
                </button>

                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] text-white px-5 py-3.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8E8E8E] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#375323]" />
                <span>100% Confidential • Fixed-Price Guarantee</span>
              </div>

            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
