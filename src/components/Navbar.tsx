import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onConsultClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConsultClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Section scroll spy
      const sections = ['home', 'about', 'services', 'approach', 'why-us', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Our Approach', href: '#approach', id: 'approach' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A09]/92 backdrop-blur-md border-b border-[#C7A34B]/20 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A34B] rounded-lg transition-opacity hover:opacity-95"
            aria-label="UrbanNusaCyber Homepage"
          >
            <BrandLogo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#11110F]/80 px-4 py-1.5 rounded-full border border-[#C7A34B]/15 backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#E0C477] bg-[#C7A34B]/15 shadow-[0_0_12px_rgba(199,163,75,0.2)]'
                      : 'text-[#A5A39A] hover:text-[#F4F2EC] hover:bg-[#171714]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#C7A34B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onConsultClick}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold tracking-wide text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(199,163,75,0.25)] cursor-pointer"
            >
              <span>Konsultasi Proyek</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#F4F2EC] bg-[#171714] border border-[#C7A34B]/25 hover:border-[#C7A34B]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C7A34B]"
              aria-label={mobileMenuOpen ? 'Tutup navigasi menu' : 'Buka navigasi menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E0C477]" /> : <Menu className="w-5 h-5 text-[#F4F2EC]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[65px] z-40 bg-[#0A0A09]/95 backdrop-blur-xl md:hidden border-t border-[#C7A34B]/20 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6 flex flex-col h-full justify-between overflow-y-auto">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-[#C7A34B] font-mono mb-4 px-2">
                // Menu Navigasi
              </div>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-[#C7A34B]/15 text-[#E0C477] border border-[#C7A34B]/30'
                      : 'text-[#A5A39A] hover:text-[#F4F2EC] hover:bg-[#171714]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-[#C7A34B]" />
                  )}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#C7A34B]/20 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onConsultClick();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(199,163,75,0.3)]"
              >
                <Shield className="w-4 h-4" />
                <span>Konsultasi Proyek</span>
              </button>
              <div className="text-center text-xs text-[#A5A39A]">
                UrbanNusaCyber • Secure Your Digital Foundation
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
