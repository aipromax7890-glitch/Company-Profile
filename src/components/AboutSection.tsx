import React, { useState } from 'react';
import { Shield, Eye, Lock, RefreshCw, Users, Server, Globe, Cpu } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/content';

export const AboutSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const architectureLayers = [
    {
      id: 'app',
      name: 'Application & Web Surface',
      icon: Globe,
      description: 'Pengujian terotorisasi terhadap logika bisnis, API endpoint, sanitasi input, dan kontrol otentikasi/otorisasi.',
      focus: ['OWASP Top 10', 'API Security', 'Logic Flaws', 'Session Management']
    },
    {
      id: 'network',
      name: 'Network & Perimeter',
      icon: Server,
      description: 'Evaluasi eksposur port, firewall, segmentasi subnet, dan konfigurasi keamanan infrastruktur publik maupun privat.',
      focus: ['Port Exposure', 'Network Segmentation', 'Firewall Rules', 'Service Hardening']
    },
    {
      id: 'human',
      name: 'Human & Process Layer',
      icon: Users,
      description: 'Audit kesadaran keamanan terkelola, verifikasi prosedur pelaporan insiden, dan peninjauan kebiasaan pengguna secara etis.',
      focus: ['Controlled Phishing', 'Incident Reporting', 'Identity Verification', 'Security Awareness']
    },
    {
      id: 'development',
      name: 'Secure Web Engineering',
      icon: Cpu,
      description: 'Penerapan standar defensive coding dan arsitektur web modern yang tangguh sejak rancangan awal prototipe hingga produksi.',
      focus: ['Clean Code', 'Responsive UI', 'CSP & Headers', 'Accessibility (WCAG)']
    }
  ];

  const pillarIcons = [Lock, Eye, Shield, Users, RefreshCw];

  return (
    <section id="about" className="relative py-24 bg-[#0A0A09] overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C7A34B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-xs font-mono text-[#E0C477] mb-4">
            <span>ABOUT URBANNUSACYBER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F2EC]">
            Security Built on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
              Understanding.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A5A39A] leading-relaxed">
            UrbanNusaCyber berfokus pada pemahaman mendalam atas kebutuhan klien, identifikasi risiko nyata, pengujian teknis yang terotorisasi secara legal, dan penyediaan solusi digital yang praktis serta dapat dieksekusi.
          </p>
        </div>

        {/* Editorial Layout: Pillars + Architecture Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 5 Core Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C7A34B] mb-2">
              // Lima Prinsip Utama Kami
            </div>

            <div className="space-y-3">
              {ABOUT_PILLARS.map((pillar, idx) => {
                const Icon = pillarIcons[idx];
                return (
                  <div
                    key={pillar.title}
                    className="p-4 sm:p-5 rounded-xl bg-[#11110F] border border-[#C7A34B]/15 hover:border-[#C7A34B]/35 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#171714] border border-[#C7A34B]/25 flex items-center justify-center shrink-0 text-[#C7A34B] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#C7A34B] font-bold">
                            {pillar.number}
                          </span>
                          <h3 className="text-sm sm:text-base font-semibold text-[#F4F2EC] group-hover:text-[#E0C477] transition-colors">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A5A39A] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Inspection */}
          <div className="lg:col-span-6 bg-[#11110F] border border-[#C7A34B]/25 rounded-2xl p-6 sm:p-7 relative shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#C7A34B]/15">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7A34B]">
                  Lapisan Pengujian & Keamanan
                </span>
                <h4 className="text-base font-semibold text-[#F4F2EC] mt-0.5">
                  Defense-in-Depth Assessment Model
                </h4>
              </div>
              <span className="text-[11px] font-mono text-[#E0C477] bg-[#171714] px-2.5 py-1 rounded-md border border-[#C7A34B]/25">
                Authorized Scope
              </span>
            </div>

            <p className="text-xs text-[#A5A39A] mt-3 mb-6">
              Pilih lapisan sistem di bawah ini untuk melihat fokus evaluasi teknis yang dilakukan secara terukur dan non-destruktif:
            </p>

            {/* Interactive Layer Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                const isSelected = activeLayer === index;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(index)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#171714] border-[#C7A34B] text-[#E0C477] shadow-[0_0_15px_rgba(199,163,75,0.15)]'
                        : 'bg-[#0A0A09] border-[#C7A34B]/15 text-[#A5A39A] hover:text-[#F4F2EC] hover:border-[#C7A34B]/30'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#C7A34B]' : 'text-[#A5A39A]'}`} />
                    <span className="text-xs font-medium truncate">{layer.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Layer Details Box */}
            <div className="p-5 rounded-xl bg-[#171714] border border-[#C7A34B]/20 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C7A34B]" />
                <h5 className="text-sm font-semibold text-[#F4F2EC]">
                  {architectureLayers[activeLayer].name}
                </h5>
              </div>

              <p className="text-xs text-[#A5A39A] leading-relaxed">
                {architectureLayers[activeLayer].description}
              </p>

              <div>
                <div className="text-[11px] font-mono text-[#C7A34B] uppercase tracking-wider mb-2">
                  Komponen Utama Pengujian:
                </div>
                <div className="flex flex-wrap gap-2">
                  {architectureLayers[activeLayer].focus.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#11110F] text-[#F4F2EC] border border-[#C7A34B]/20 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-6 pt-4 border-t border-[#C7A34B]/15 flex items-center justify-between text-[11px] text-[#A5A39A]">
              <span>Pendekatan Kolaboratif & Terstruktur</span>
              <span className="text-[#C7A34B] font-mono">// Zero Untracked Exploits</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
