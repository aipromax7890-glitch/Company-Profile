import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Globe, 
  Terminal, 
  Users, 
  Info,
  Maximize2,
  Lock,
  Network,
  Layout,
  UserCheck
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem, ServiceType } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  // Custom visual components for each specific service card
  const renderVisualForService = (id: ServiceType) => {
    switch (id) {
      case 'penetration-testing':
        return (
          <div className="p-4 rounded-xl bg-[#0A0A09] border border-[#C7A34B]/20 font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-[#A5A39A] pb-2 border-b border-[#C7A34B]/15">
              <span className="flex items-center gap-1.5 text-[#E0C477]">
                <Terminal className="w-3.5 h-3.5 text-[#C7A34B]" />
                Web Surface & API Scope
              </span>
              <span className="text-emerald-400 text-[10px]">AUTH VALIDATED</span>
            </div>
            <div className="space-y-1.5 text-[#A5A39A]">
              <div className="flex items-center justify-between">
                <span>// Target: Web App & Microservices</span>
                <span className="text-[#C7A34B]">OWASP Top 10</span>
              </div>
              <div className="flex items-center justify-between">
                <span>// Logic & Session Validation</span>
                <span className="text-[#F4F2EC]">Proof-of-Concept</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#A5A39A]/70 pt-1">
                <span>Scope: Bounded per RoE</span>
                <span className="text-emerald-400">Zero Unintended Outage</span>
              </div>
            </div>
          </div>
        );

      case 'network-security':
        return (
          <div className="p-4 rounded-xl bg-[#0A0A09] border border-[#C7A34B]/20 font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-[#A5A39A] pb-2 border-b border-[#C7A34B]/15">
              <span className="flex items-center gap-1.5 text-[#E0C477]">
                <Network className="w-3.5 h-3.5 text-[#C7A34B]" />
                Network Architecture & Perimeter
              </span>
              <span className="text-[#C7A34B] text-[10px]">SEGMENTED</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] py-1">
              <div className="p-1.5 rounded bg-[#171714] border border-[#C7A34B]/15">
                <span className="block text-[#A5A39A]">Public DMZ</span>
                <span className="text-emerald-400 text-[9px]">Monitored</span>
              </div>
              <div className="p-1.5 rounded bg-[#171714] border border-[#C7A34B]/15">
                <span className="block text-[#A5A39A]">Internal LAN</span>
                <span className="text-[#E0C477] text-[9px]">ACL Tested</span>
              </div>
              <div className="p-1.5 rounded bg-[#171714] border border-[#C7A34B]/15">
                <span className="block text-[#A5A39A]">Firewall Core</span>
                <span className="text-emerald-400 text-[9px]">Audited</span>
              </div>
            </div>
          </div>
        );

      case 'web-development':
        return (
          <div className="p-4 rounded-xl bg-[#0A0A09] border border-[#C7A34B]/20 font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-[#A5A39A] pb-2 border-b border-[#C7A34B]/15">
              <span className="flex items-center gap-1.5 text-[#E0C477]">
                <Layout className="w-3.5 h-3.5 text-[#C7A34B]" />
                Modern Responsive Engineering
              </span>
              <span className="text-[#C7A34B] text-[10px]">WCAG & SECURE</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1 text-[#F4F2EC]">
              <span className="flex items-center gap-1 text-[11px] text-[#A5A39A]">
                Mobile • Tablet • Desktop
              </span>
              <span className="px-2 py-0.5 rounded bg-[#171714] text-[#E0C477] text-[10px] border border-[#C7A34B]/20">
                Security-First Code
              </span>
            </div>
          </div>
        );

      case 'social-engineering':
        return (
          <div className="p-4 rounded-xl bg-[#0A0A09] border border-[#C7A34B]/20 font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-[#A5A39A] pb-2 border-b border-[#C7A34B]/15">
              <span className="flex items-center gap-1.5 text-[#E0C477]">
                <UserCheck className="w-3.5 h-3.5 text-[#C7A34B]" />
                Human Layer & Awareness Audit
              </span>
              <span className="text-amber-400 text-[10px]">ETHICS FIRST</span>
            </div>
            <div className="text-[10px] text-[#A5A39A] space-y-1">
              <div className="flex items-center justify-between">
                <span>Controlled Simulation</span>
                <span className="text-emerald-400">Strictly Authorized</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Credential Safety</span>
                <span className="text-[#E0C477]">No Password Harvesting</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#11110F] border-t border-[#C7A34B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-xs font-mono text-[#E0C477] mb-3">
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F2EC]">
              Empat Pilar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
                Layanan Utama.
              </span>
            </h2>
            <p className="mt-4 text-base text-[#A5A39A]">
              Dirancang dengan pendekatan teknis yang teruji, metodologi terstruktur, dan kepatuhan penuh terhadap etika pengujian profesional.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#A5A39A]">
            <Lock className="w-4 h-4 text-[#C7A34B]" />
            <span>Semua pengujian memerlukan otorisasi resmi & NDA</span>
          </div>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#171714] border border-[#C7A34B]/20 hover:border-[#C7A34B]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(199,163,75,0.12)]"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#0A0A09] bg-[#C7A34B] px-2.5 py-0.5 rounded">
                        {service.number}
                      </span>
                      <span className="text-xs font-mono text-[#E0C477] bg-[#11110F] px-2.5 py-0.5 rounded border border-[#C7A34B]/20">
                        {service.accentBadge}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setModalService(service)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#A5A39A] hover:text-[#E0C477] transition-colors p-1"
                      title="Lihat detail cakupan teknis"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Detail Lingkup</span>
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F2EC] group-hover:text-[#E0C477] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A5A39A] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Contextual Visual Diagram for each card */}
                  <div className="mb-6">
                    {renderVisualForService(service.id)}
                  </div>

                  {/* Scope Items */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-mono text-[#C7A34B] uppercase tracking-wider">
                      Cakupan Layanan:
                    </div>
                    <ul className="space-y-2">
                      {service.scopeItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-[#F4F2EC]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A34B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Important ethical / scope note */}
                  {service.scopeNotice && (
                    <div className="p-3 rounded-lg bg-[#0A0A09] border border-[#C7A34B]/15 text-[11px] text-[#A5A39A] leading-relaxed mb-6">
                      <span className="text-[#E0C477] font-semibold block mb-0.5">Catatan Otorisasi:</span>
                      {service.scopeNotice}
                    </div>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-[#C7A34B]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setModalService(service)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-[#A5A39A] bg-[#11110F] border border-[#C7A34B]/20 hover:text-[#F4F2EC] hover:border-[#C7A34B]/50 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C7A34B]" />
                    <span>Cakupan & Metodologi</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(199,163,75,0.25)] cursor-pointer"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for Service Scope Inspection */}
      <ServiceModal
        service={modalService}
        onClose={() => setModalService(null)}
        onSelectService={(serviceId) => onSelectService(serviceId as ServiceType)}
      />
    </section>
  );
};
