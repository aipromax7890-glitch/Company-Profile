import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#11110F] border border-[#C7A34B]/35 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#A5A39A] hover:text-[#F4F2EC] bg-[#171714] border border-[#C7A34B]/20 hover:border-[#C7A34B]/50 transition-colors"
          aria-label="Tutup detail layanan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono font-bold text-[#C7A34B] bg-[#171714] px-2.5 py-1 rounded border border-[#C7A34B]/20">
            LAYANAN {service.number}
          </span>
          <span className="text-xs text-[#A5A39A] font-mono">
            {service.accentBadge}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#F4F2EC] mb-3">
          {service.title}
        </h3>

        <p className="text-sm text-[#A5A39A] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Scope Checklist */}
        <div className="p-4 rounded-xl bg-[#171714] border border-[#C7A34B]/20 mb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E0C477] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#C7A34B]" />
            <span>Cakupan & Metodologi Pengujian Terdefinisi</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {service.scopeItems.map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs text-[#F4F2EC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A34B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Crucial Scope Notice / Ethics */}
        {service.scopeNotice && (
          <div className="p-4 rounded-xl bg-[#0A0A09] border border-amber-500/25 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#E0C477] shrink-0 mt-0.5" />
            <div className="text-xs text-[#A5A39A] leading-relaxed">
              <span className="text-[#E0C477] font-semibold block mb-0.5">Ketentuan Ruang Lingkup & Legalitas</span>
              {service.scopeNotice}
            </div>
          </div>
        )}

        {/* Deliverables snippet */}
        <div className="mb-6 flex items-center justify-between p-3 rounded-lg bg-[#171714] text-xs text-[#A5A39A]">
          <span className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#C7A34B]" />
            Dokumen Keluaran:
          </span>
          <span className="text-[#F4F2EC] font-mono">Executive Summary + Detailed Remediation</span>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#C7A34B]/20">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium text-[#A5A39A] hover:text-[#F4F2EC] hover:bg-[#171714] transition-colors"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectService(service.id);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] hover:brightness-110 transition-all shadow-[0_0_15px_rgba(199,163,75,0.3)] cursor-pointer"
          >
            <span>{service.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
