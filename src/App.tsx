import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { WhyUsSection } from './components/WhyUsSection';
import { EngagementSection } from './components/EngagementSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceType } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceId: ServiceType) => {
    setSelectedService(serviceId);
    scrollToSection('contact');
  };

  const handleConsultClick = () => {
    scrollToSection('contact');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  return (
    <div className="min-h-screen bg-[#0A0A09] text-[#F4F2EC] selection:bg-[#C7A34B]/30 selection:text-[#E0C477]">
      {/* Top Navbar */}
      <Navbar onConsultClick={handleConsultClick} />

      {/* Main Content Sections */}
      <main>
        {/* Section B: Hero */}
        <Hero
          onDiscussClick={handleConsultClick}
          onExploreClick={handleExploreServices}
        />

        {/* Section C: Trust & Value Strip */}
        <TrustStrip />

        {/* Section D: About UrbanNusaCyber */}
        <AboutSection />

        {/* Section E: 4 Core Services */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Section F: Our Approach */}
        <ApproachSection />

        {/* Section G: Why UrbanNusaCyber */}
        <WhyUsSection />

        {/* Section H: Project Engagement */}
        <EngagementSection onStartConsult={handleConsultClick} />

        {/* Section I: FAQ */}
        <FaqSection />

        {/* Section J: Contact */}
        <ContactSection selectedServicePreset={selectedService} />
      </main>

      {/* Section K: Footer */}
      <Footer />
    </div>
  );
}
