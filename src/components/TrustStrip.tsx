import React from 'react';
import { Shield, FileCheck, Layers, Wrench } from 'lucide-react';
import { TRUST_PRINCIPLES } from '../data/content';

export const TrustStrip: React.FC = () => {
  const icons = [Shield, Layers, FileCheck, Wrench];

  return (
    <section className="relative z-10 py-10 bg-[#11110F] border-y border-[#C7A34B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A34B]">
            // Prinsip Kerja Layanan
          </span>
          <h2 className="text-lg sm:text-xl font-semibold text-[#F4F2EC] mt-1">
            Fondasi Integritas Setiap Aktivitas Keamanan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PRINCIPLES.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.title}
                className="relative p-5 rounded-xl bg-[#171714] border border-[#C7A34B]/15 hover:border-[#C7A34B]/40 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A0A09] border border-[#C7A34B]/30 flex items-center justify-center text-[#C7A34B] group-hover:text-[#E0C477] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#C7A34B]/80 tracking-wider">
                    {item.code}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-[#F4F2EC] mb-1.5 group-hover:text-[#E0C477] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#A5A39A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
