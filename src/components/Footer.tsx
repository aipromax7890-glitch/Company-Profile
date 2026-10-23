import React from 'react';
import { Mail, ShieldCheck, ArrowUp, Lock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Penetration Testing',
    'Network Security Testing',
    'Web Development',
    'Social Engineering Security Audit',
  ];

  return (
    <footer className="bg-[#0A0A09] border-t border-[#C7A34B]/20 pt-16 pb-12 text-[#A5A39A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C7A34B]/15">
          
          {/* Brand & Description Column */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" showTagline={false} />

            <p className="text-xs sm:text-sm text-[#A5A39A] leading-relaxed max-w-sm mt-3">
              UrbanNusaCyber — Mitra profesional dalam keamanan siber terotorisasi, evaluasi risiko infrastruktur, dan pengembangan website modern dengan standar rekayasa pertahanan tinggi.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E0C477]">
              <ShieldCheck className="w-4 h-4 text-[#C7A34B]" />
              <span>Security Built on Understanding.</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C7A34B] font-semibold">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#F4F2EC] hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C7A34B] font-semibold">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-[#F4F2EC] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Confirmed Contact & Policy Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C7A34B] font-semibold">
              Kontak Resmi
            </h4>
            <div className="text-xs space-y-2">
              <div className="text-[#F4F2EC] font-mono break-all">
                urbannusacyber@gmail.com
              </div>
              <p className="text-[11px] text-[#A5A39A]/80 leading-relaxed">
                Korespondensi proyek dan perjanjian kerahasiaan (NDA).
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#E0C477]">
                <Lock className="w-3 h-3 text-[#C7A34B]" />
                <span>Authorized Testing Only</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[#A5A39A] text-center sm:text-left">
            &copy; {currentYear} <span className="text-[#F4F2EC] font-medium">UrbanNusaCyber</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A5A39A]/60">
              Indonesian Cybersecurity & Web Engineering
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#171714] border border-[#C7A34B]/20 text-[#C7A34B] hover:text-[#E0C477] hover:border-[#C7A34B]/50 transition-colors"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
