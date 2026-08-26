import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollRevealSection } from './components/ScrollRevealSection';
import { VisionSection } from './components/VisionSection';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { ClientMarquee } from './components/ClientMarquee';
import { FeatureDuo } from './components/FeatureDuo';
import { PricingSection } from './components/PricingSection';
import { TickerBanner } from './components/TickerBanner';
import { BottomDuoCTA } from './components/BottomDuoCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [initialBookingService, setInitialBookingService] = useState<string | undefined>(undefined);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      setIsBookingModalOpen(true);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'work', 'pricing', 'process'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceOrTier?: string) => {
    setInitialBookingService(serviceOrTier);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F1] text-[#141414] py-4 sm:py-7 px-2 sm:px-4 md:px-6 selection:bg-[#E8402F]/15 selection:text-[#141414]">
      
      {/* Outer Centered Frame Card */}
      <div className="wrap-container">
        <div className="pagecard">
          
          {/* 1. Integrated Top Navigation */}
          <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

          {/* 2. Hero Section with 3D Fan Stage & Marquee */}
          <Hero
            onExploreWork={() => scrollToSection('work')}
            onStartProject={() => handleOpenBooking()}
            onOpenProjectModal={(proj) => setSelectedProject(proj)}
          />

          {/* 3. Manifesto Word-by-Word Scroll Reveal Statement */}
          <ScrollRevealSection />

          {/* 4. Vision Section: Tabbed Live Preview Grid */}
          <VisionSection
            onExploreWork={() => scrollToSection('work')}
            onSelectService={(srv) => handleOpenBooking(srv)}
          />

          {/* 5. Portfolio Carousel for Every Business */}
          <PortfolioCarousel
            onOpenProjectModal={(proj) => setSelectedProject(proj)}
            onStartProject={() => handleOpenBooking()}
          />

          {/* 6. Dual Avatar Client Marquee */}
          <ClientMarquee />

          {/* 7. Feature Duo (Navy Process + Paper Conversion Card) */}
          <FeatureDuo
            onStartProject={() => handleOpenBooking()}
            onExploreWork={() => scrollToSection('work')}
          />

          {/* 8. Simple Pricing Packages (3-Tier INR/USD Grid) */}
          <PricingSection onSelectTier={(tier) => handleOpenBooking(tier)} />

          {/* 9. Acid Lime Fast Turnaround Ticker */}
          <TickerBanner />

          {/* 10. Bottom Duo Call-to-Action */}
          <BottomDuoCTA
            onStartProject={() => handleOpenBooking()}
            onExploreWork={() => scrollToSection('work')}
          />

          {/* 11. Minimalist Editorial Footer */}
          <Footer onNavigate={scrollToSection} />

        </div>
      </div>

      {/* Interactive Project Discovery & Quote Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={initialBookingService}
      />

      {/* Fullscreen Case Study & Device Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProjectForInquiry={(name, type) => {
          setSelectedProject(null);
          handleOpenBooking(`${name} (${type})`);
        }}
      />

    </div>
  );
}
