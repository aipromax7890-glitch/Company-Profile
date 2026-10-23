import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ENGAGEMENT_FLOW } from '../data/content';

interface EngagementSectionProps {
  onStartConsult: () => void;
}

export const EngagementSection: React.FC<EngagementSectionProps> = ({ onStartConsult }) => {
  return (
    <section className="relative py-24 bg-[#0A0A09] border-t border-[#C7A34B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-xs font-mono text-[#E0C477] mb-3">
            <span>TRANSPARENT COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F2EC]">
            Alur Kerja Sama{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
              Proyek.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#A5A39A]">
            Kami merancang setiap keterlibatan kerja dengan tahapan yang jelas dan transparan. Tidak ada biaya tersembunyi, parameter pengujian yang tidak disepakati, atau aktivitas tanpa otorisasi.
          </p>
        </div>

        {/* 6-Phase Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ENGAGEMENT_FLOW.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#11110F] border border-[#C7A34B]/20 hover:border-[#C7A34B]/45 transition-colors relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#C7A34B] font-semibold bg-[#171714] px-2.5 py-1 rounded border border-[#C7A34B]/20">
                  {item.step}
                </span>
                <span className="text-xs font-mono text-[#A5A39A]">
                  0{idx + 1} / 06
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F4F2EC] mb-2 group-hover:text-[#E0C477] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-[#A5A39A] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-2xl bg-[#171714] border border-[#C7A34B]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#F4F2EC]">
              Mulai dengan Sesi Diskusi Kebutuhan
            </h4>
            <p className="text-xs text-[#A5A39A]">
              Diskusikan lingkup target aplikasi, jaringan, atau rencana pengembangan web dengan tim kami.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartConsult}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(199,163,75,0.25)] cursor-pointer"
          >
            <span>Konsultasikan Kebutuhan Proyek</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
