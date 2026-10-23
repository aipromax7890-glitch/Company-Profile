import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  // Track open accordion indices (allow multiple or single)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#11110F] border-t border-[#C7A34B]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-xs font-mono text-[#E0C477] mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F2EC]">
            Pertanyaan yang Sering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
              Diajukan.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#A5A39A]">
            Jawaban transparan mengenai batasan teknis, persyaratan hukum, dan standar pengerjaan UrbanNusaCyber.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-header-${index}`;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#171714] border-[#C7A34B]/40 shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
                    : 'bg-[#0A0A09] border-[#C7A34B]/15 hover:border-[#C7A34B]/30'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A34B] cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono text-[#C7A34B] font-semibold shrink-0">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#F4F2EC] hover:text-[#E0C477] transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`p-1.5 rounded-lg bg-[#11110F] border border-[#C7A34B]/20 text-[#C7A34B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E0C477] border-[#C7A34B]/50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#A5A39A] leading-relaxed border-t border-[#C7A34B]/15 animate-fadeIn"
                  >
                    <div className="pl-7 border-l-2 border-[#C7A34B]/30">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note below FAQ */}
        <div className="mt-12 text-center p-4 rounded-xl bg-[#171714] border border-[#C7A34B]/20 text-xs text-[#A5A39A] max-w-xl mx-auto">
          Punya pertanyaan spesifik terkait ruang lingkup teknis sistem Anda?{' '}
          <a href="#contact" className="text-[#E0C477] hover:underline font-medium">
            Diskusikan langsung dengan tim kami &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
