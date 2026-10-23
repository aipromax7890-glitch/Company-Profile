import React from 'react';
import { ShieldCheck, ArrowRight, ChevronDown, CheckCircle2, Lock, Terminal, Activity } from 'lucide-react';
import { NetworkCanvas } from './NetworkCanvas';

interface HeroProps {
  onDiscussClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscussClick, onExploreClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0A0A09]">
      {/* Background Interactive Canvas */}
      <div className="absolute inset-0 z-0">
        <NetworkCanvas />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A09]/70 to-[#0A0A09] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C7A34B]/8 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-[11px] sm:text-xs font-mono tracking-wider text-[#E0C477] shadow-[0_0_15px_rgba(199,163,75,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7A34B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7A34B]"></span>
              </span>
              <span>CYBERSECURITY • NETWORK SECURITY • WEB DEVELOPMENT</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F2EC] leading-[1.12]">
              Secure Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
                Digital Foundation.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A5A39A] leading-relaxed max-w-2xl font-normal">
              UrbanNusaCyber membantu bisnis membangun, menguji, dan memperkuat keamanan sistem digital melalui pendekatan teknis yang terukur dan pengembangan web yang berorientasi pada kualitas.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onDiscussClick}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(199,163,75,0.3)] cursor-pointer"
              >
                <span>Diskusikan Kebutuhan Anda</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#F4F2EC] bg-[#171714] border border-[#C7A34B]/30 hover:border-[#C7A34B]/70 hover:bg-[#1F1F1B] transition-all cursor-pointer"
              >
                <span>Jelajahi Layanan</span>
                <ChevronDown className="w-4 h-4 text-[#C7A34B]" />
              </button>
            </div>

            {/* Micro value badges */}
            <div className="pt-4 border-t border-[#C7A34B]/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#A5A39A]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A34B] shrink-0" />
                <span>Strict Authorization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A34B] shrink-0" />
                <span>Non-Destructive Testing</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C7A34B] shrink-0" />
                <span>Audit-Ready Reports</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Architecture Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#11110F] border border-[#C7A34B]/30 rounded-2xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.85)] gold-glow-subtle backdrop-blur-sm">
              
              {/* Header with official logo showcase */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C7A34B]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#171714] border border-[#C7A34B]/30 flex items-center justify-center p-0.5">
                    <img 
                      src="/assets/aistudio/logo_UrbanNusaCyber_1ec4a51b.jpeg" 
                      alt="UNC Shield Emblem" 
                      className="w-full h-full object-contain mix-blend-screen brightness-110"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#F4F2EC]">URBANNUSA CYBER</div>
                    <div className="text-[10px] font-mono text-[#A5A39A]">Security Posture Matrix</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#171714] border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE & MONITORED</span>
                </div>
              </div>

              {/* Security Scope Parameters Box */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#171714] border border-[#C7A34B]/15 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#A5A39A]">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#C7A34B]" />
                      Rules of Engagement
                    </span>
                    <span className="text-[#E0C477]">VERIFIED & BOUNDED</span>
                  </div>
                  <div className="text-[11px] text-[#F4F2EC]">
                    Defined parameters, authorized IP scopes, and non-destructive testing windows.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#171714] border border-[#C7A34B]/15 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#A5A39A]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#C7A34B]" />
                      Testing Methodology
                    </span>
                    <span className="text-[#E0C477]">OWASP / OSSTMM</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#A5A39A]">
                    <span className="px-1.5 py-0.5 rounded bg-[#11110F] text-[#E0C477] border border-[#C7A34B]/20">Web Apps</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#11110F] text-[#E0C477] border border-[#C7A34B]/20">API Endpoints</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#11110F] text-[#E0C477] border border-[#C7A34B]/20">Perimeter</span>
                  </div>
                </div>

                {/* Live Audit Delivery Mockup Indicator */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#171714] to-[#1F1F1B] border border-[#C7A34B]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C7A34B]" />
                    <div>
                      <div className="text-[11px] text-[#F4F2EC] font-sans font-medium">Standard of Delivery</div>
                      <div className="text-[10px] text-[#A5A39A] font-sans">Dual Executive & Technical Remediation</div>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#C7A34B]" />
                </div>
              </div>

              {/* Bottom decorative verification status */}
              <div className="mt-4 pt-3 border-t border-[#C7A34B]/15 flex items-center justify-between text-[10px] text-[#A5A39A]">
                <span>Brand Identity: UrbanNusaCyber</span>
                <span className="text-[#C7A34B]">ISO/IEC 27001 Aligned Scope</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
