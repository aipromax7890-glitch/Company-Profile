import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Shield, FileCheck, Search, Sliders, ClipboardList, MessageSquare } from 'lucide-react';
import { APPROACH_STEPS } from '../data/content';

export const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Search, Sliders, Shield, FileCheck, ClipboardList, MessageSquare];

  return (
    <section id="approach" className="relative py-24 bg-[#0A0A09] border-t border-[#C7A34B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-xs font-mono text-[#E0C477] mb-3">
            <span>METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F2EC]">
            A Clear Process.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
              Measurable Progress.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#A5A39A]">
            Setiap keterlibatan proyek mengikuti alur kerja terstruktur untuk memastikan keamanan operasional, kepatuhan ruang lingkup, dan transparansi penuh.
          </p>
        </div>

        {/* Desktop View: Interactive Horizontal Timeline with Detail Card */}
        <div className="hidden lg:block mb-12">
          {/* Timeline Bar */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#171714] -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#C7A34B] to-[#E0C477] -translate-y-1/2 transition-all duration-500" 
              style={{ width: `${(activeStep / (APPROACH_STEPS.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 flex justify-between">
              {APPROACH_STEPS.map((step, index) => {
                const Icon = stepIcons[index];
                const isSelected = activeStep === index;
                const isPassed = index <= activeStep;

                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#171714] border-[#E0C477] text-[#E0C477] shadow-[0_0_20px_rgba(199,163,75,0.4)] scale-110'
                          : isPassed
                          ? 'bg-[#11110F] border-[#C7A34B] text-[#C7A34B]'
                          : 'bg-[#11110F] border-[#171714] text-[#A5A39A] group-hover:border-[#C7A34B]/40'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="mt-2 text-[11px] font-mono text-[#C7A34B] font-semibold">
                      STEP {step.step}
                    </span>
                    <span className={`text-xs font-medium max-w-[110px] text-center transition-colors ${
                      isSelected ? 'text-[#F4F2EC]' : 'text-[#A5A39A]'
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-[#11110F] border border-[#C7A34B]/30 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#0A0A09] bg-[#C7A34B] px-3 py-1 rounded">
                    TAHAP {APPROACH_STEPS[activeStep].step}
                  </span>
                  <span className="text-xs font-mono text-[#A5A39A]">
                    UrbanNusaCyber Standard Operating Procedure
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#F4F2EC]">
                  {APPROACH_STEPS[activeStep].title}
                </h3>

                <p className="text-base text-[#A5A39A] leading-relaxed">
                  {APPROACH_STEPS[activeStep].description}
                </p>
              </div>

              <div className="col-span-5 bg-[#171714] border border-[#C7A34B]/20 rounded-xl p-6 space-y-3">
                <div className="text-xs font-mono text-[#E0C477] uppercase tracking-wider mb-2">
                  // Target Luaran & Standar Kerja:
                </div>
                <div className="space-y-2">
                  {APPROACH_STEPS[activeStep].deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-[#F4F2EC]">
                      <CheckCircle2 className="w-4 h-4 text-[#C7A34B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Structured Timeline */}
        <div className="lg:hidden space-y-4">
          {APPROACH_STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={step.step}
                className="relative p-5 rounded-xl bg-[#11110F] border border-[#C7A34B]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#171714] border border-[#C7A34B]/40 flex items-center justify-center shrink-0 text-[#C7A34B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#C7A34B] font-bold">
                        TAHAP {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#F4F2EC]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#A5A39A] leading-relaxed">
                      {step.description}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {step.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#171714] text-[#E0C477] border border-[#C7A34B]/20 font-mono"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
