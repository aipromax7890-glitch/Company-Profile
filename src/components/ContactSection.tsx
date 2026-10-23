import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Copy, 
  ShieldCheck, 
  AlertCircle, 
  ExternalLink,
  Lock,
  RefreshCw
} from 'lucide-react';
import { ServiceType, ConsultationFormData } from '../types';

interface ContactSectionProps {
  selectedServicePreset?: ServiceType | null;
}

const OFFICIAL_EMAIL = 'urbannusacyber@gmail.com';

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    companyName: '',
    email: '',
    serviceType: 'penetration-testing',
    needsSummary: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedBrief, setCopiedBrief] = useState<boolean>(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync preset if passed from service cards
  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, serviceType: selectedServicePreset }));
      // Scroll to contact form if changed
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 600);
      }
    }
  }, [selectedServicePreset]);

  const serviceOptions: { value: ServiceType; label: string }[] = [
    { value: 'penetration-testing', label: 'Penetration Testing' },
    { value: 'network-security', label: 'Network Security Testing' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'social-engineering', label: 'Social Engineering Security Audit' },
    { value: 'other', label: 'Other / Diskusi Umum' },
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Nama wajib diisi.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Format alamat email tidak valid.';
      }
    }

    if (!formData.needsSummary.trim()) {
      errs.needsSummary = 'Ringkasan kebutuhan atau gambaran sistem wajib diisi.';
    } else if (formData.needsSummary.trim().length < 15) {
      errs.needsSummary = 'Mohon berikan ringkasan yang cukup jelas (minimal 15 karakter).';
    }

    if (!formData.consent) {
      errs.consent = 'Persetujuan penggunaan data diperlukan untuk memproses permohonan.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getServiceLabel = (type: ServiceType) => {
    return serviceOptions.find(o => o.value === type)?.label || type;
  };

  const getEmailSubject = () => {
    return `[Permohonan Konsultasi] ${getServiceLabel(formData.serviceType)} - ${formData.fullName}`;
  };

  const getEmailBody = () => {
    return (
`Yth. Tim UrbanNusaCyber (${OFFICIAL_EMAIL}),

Saya bermaksud mendiskusikan kebutuhan layanan keamanan/pengembangan web dengan rincian berikut:

• Nama Pengirim: ${formData.fullName}
• Perusahaan / Instansi: ${formData.companyName ? formData.companyName : 'Individu / Belum Disebutkan'}
• Email Kontak Pengirim: ${formData.email}
• Jenis Layanan yang Dibutuhkan: ${getServiceLabel(formData.serviceType)}

Ringkasan Kebutuhan & Konteks Proyek:
${formData.needsSummary}

---
Catatan: Saya telah menyetujui penggunaan data di atas untuk keperluan diskusi teknis dan memahami bahwa pengujian keamanan hanya dilakukan setelah otorisasi tertulis resmi disepakati.`
    );
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    return `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
  };

  const generateGmailWebUrl = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${OFFICIAL_EMAIL}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Otomatis membuka aplikasi email menuju urbannusacyber@gmail.com
      const mailtoUrl = generateMailtoUrl();
      try {
        window.location.href = mailtoUrl;
      } catch {
        // Fallback jika diblokir oleh browser
      }
    }
  };

  const copyBriefToClipboard = async () => {
    const briefText = 
`[Permohonan Konsultasi UrbanNusaCyber]
Tujuan: ${OFFICIAL_EMAIL}
Nama: ${formData.fullName}
Perusahaan: ${formData.companyName || '-'}
Email: ${formData.email}
Layanan: ${getServiceLabel(formData.serviceType)}
Ringkasan:
${formData.needsSummary}`;

    try {
      await navigator.clipboard.writeText(briefText);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      // Fallback
    }
  };

  const copyEmailAddress = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A0A09] border-t border-[#C7A34B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-xs font-mono text-[#E0C477] mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F2EC]">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
              More Secure.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#A5A39A]">
            Ceritakan kebutuhan, tantangan, atau proyek yang ingin Anda diskusikan bersama UrbanNusaCyber. Permohonan Anda akan diteruskan langsung ke <span className="text-[#E0C477] font-mono">{OFFICIAL_EMAIL}</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form or Submission Confirmation */}
          <div className="lg:col-span-7 bg-[#11110F] border border-[#C7A34B]/30 rounded-2xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-[#F4F2EC] mb-2">
                    Nama Lengkap <span className="text-[#C7A34B]">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Contoh: Rian Pratama"
                    className={`w-full px-4 py-3 rounded-xl bg-[#171714] border text-sm text-[#F4F2EC] placeholder-[#6B6960] focus:outline-none focus:ring-2 focus:ring-[#C7A34B]/50 transition-colors ${
                      errors.fullName ? 'border-red-500/80' : 'border-[#C7A34B]/20 hover:border-[#C7A34B]/40'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <label htmlFor="companyName" className="block text-xs font-medium text-[#F4F2EC] mb-2">
                    Nama Perusahaan / Organisasi <span className="text-[#A5A39A] font-normal">(opsional)</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Contoh: PT Teknologi Bangsa"
                    className="w-full px-4 py-3 rounded-xl bg-[#171714] border border-[#C7A34B]/20 hover:border-[#C7A34B]/40 text-sm text-[#F4F2EC] placeholder-[#6B6960] focus:outline-none focus:ring-2 focus:ring-[#C7A34B]/50 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#F4F2EC] mb-2">
                    Alamat Email Resmi <span className="text-[#C7A34B]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="nama@perusahaan.co.id"
                    className={`w-full px-4 py-3 rounded-xl bg-[#171714] border text-sm text-[#F4F2EC] placeholder-[#6B6960] focus:outline-none focus:ring-2 focus:ring-[#C7A34B]/50 transition-colors ${
                      errors.email ? 'border-red-500/80' : 'border-[#C7A34B]/20 hover:border-[#C7A34B]/40'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Type Selection */}
                <div>
                  <label className="block text-xs font-medium text-[#F4F2EC] mb-2">
                    Jenis Layanan yang Dibutuhkan <span className="text-[#C7A34B]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((opt) => {
                      const isSelected = formData.serviceType === opt.value;
                      return (
                        <label
                          key={opt.value}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#171714] border-[#C7A34B] text-[#E0C477] shadow-[0_0_12px_rgba(199,163,75,0.15)]'
                              : 'bg-[#171714]/60 border-[#C7A34B]/15 text-[#A5A39A] hover:border-[#C7A34B]/35 hover:text-[#F4F2EC]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="serviceType"
                            value={opt.value}
                            checked={isSelected}
                            onChange={() => setFormData({ ...formData, serviceType: opt.value })}
                            className="sr-only"
                          />
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-[#C7A34B] bg-[#C7A34B]' : 'border-[#A5A39A]'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A09]" />}
                          </span>
                          <span className="font-medium">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Needs Summary */}
                <div>
                  <label htmlFor="needsSummary" className="block text-xs font-medium text-[#F4F2EC] mb-2">
                    Ringkasan Kebutuhan & Konteks Proyek <span className="text-[#C7A34B]">*</span>
                  </label>
                  <textarea
                    id="needsSummary"
                    rows={4}
                    value={formData.needsSummary}
                    onChange={(e) => {
                      setFormData({ ...formData, needsSummary: e.target.value });
                      if (errors.needsSummary) setErrors({ ...errors, needsSummary: undefined });
                    }}
                    placeholder="Contoh: Kami ingin melakukan penetration testing berkala untuk aplikasi portal web e-commerce sebelum peluncuran kuartal depan..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#171714] border text-sm text-[#F4F2EC] placeholder-[#6B6960] focus:outline-none focus:ring-2 focus:ring-[#C7A34B]/50 transition-colors ${
                      errors.needsSummary ? 'border-red-500/80' : 'border-[#C7A34B]/20 hover:border-[#C7A34B]/40'
                    }`}
                  />
                  {errors.needsSummary && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.needsSummary}</span>
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData({ ...formData, consent: e.target.checked });
                        if (errors.consent) setErrors({ ...errors, consent: undefined });
                      }}
                      className="mt-1 w-4 h-4 rounded bg-[#171714] border-[#C7A34B]/40 text-[#C7A34B] focus:ring-[#C7A34B]"
                    />
                    <span className="text-xs text-[#A5A39A] leading-relaxed">
                      Saya menyetujui penggunaan data di atas semata-mata untuk menindaklanjuti permohonan diskusi teknis dan memahami bahwa pengujian keamanan hanya berlangsung setelah penandatanganan otorisasi tertulis. <span className="text-[#C7A34B]">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.consent}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(199,163,75,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permohonan Konsultasi</span>
                  </button>
                  <p className="text-center text-[11px] text-[#A5A39A] mt-3">
                    Otomatis dialihkan ke email resmi: <span className="text-[#E0C477] font-mono">{OFFICIAL_EMAIL}</span>
                  </p>
                </div>

              </form>
            ) : (
              /* Success / Action View (Automatically triggered mailto with quick Webmail options) */
              <div className="space-y-6 text-left animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-mono text-[#C7A34B] uppercase tracking-wider block mb-1">
                    // PERMOHONAN SIAP DIKIRIM KE {OFFICIAL_EMAIL}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F2EC]">
                    Diteruskan ke urbannusacyber@gmail.com
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A39A] mt-2 leading-relaxed">
                    Terima kasih, <strong className="text-[#F4F2EC]">{formData.fullName}</strong>. Data permohonan konsultasi layanan <strong className="text-[#E0C477]">{getServiceLabel(formData.serviceType)}</strong> telah diformat secara otomatis. Jika aplikasi email Anda belum terbuka, pilih salah satu tombol pengiriman langsung di bawah:
                  </p>
                </div>

                {/* Brief Summary Box */}
                <div className="p-4 rounded-xl bg-[#171714] border border-[#C7A34B]/20 text-xs font-mono space-y-2 text-[#A5A39A]">
                  <div><span className="text-[#C7A34B]">Email Tujuan:</span> <span className="text-[#E0C477] font-bold">{OFFICIAL_EMAIL}</span></div>
                  <div><span className="text-[#C7A34B]">Pengirim:</span> {formData.fullName} ({formData.email})</div>
                  {formData.companyName && <div><span className="text-[#C7A34B]">Instansi:</span> {formData.companyName}</div>}
                  <div><span className="text-[#C7A34B]">Layanan:</span> {getServiceLabel(formData.serviceType)}</div>
                  <div className="pt-2 border-t border-[#C7A34B]/15">
                    <span className="text-[#C7A34B] block mb-1">Ringkasan Kebutuhan:</span>
                    <p className="text-[#F4F2EC] font-sans leading-relaxed whitespace-pre-wrap">{formData.needsSummary}</p>
                  </div>
                </div>

                {/* Primary Actions: Gmail Web & Default Mail Client */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={generateGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0A0A09] bg-gradient-to-r from-[#C7A34B] to-[#E0C477] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(199,163,75,0.25)] text-center cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Kirim via Web Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                    </a>

                    <a
                      href={generateMailtoUrl()}
                      className="py-3 px-4 rounded-xl text-xs sm:text-sm font-medium text-[#F4F2EC] bg-[#171714] border border-[#C7A34B]/40 hover:border-[#C7A34B]/70 hover:bg-[#1F1F1B] transition-colors flex items-center justify-center gap-2 text-center cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#C7A34B]" />
                      <span>Buka Aplikasi Email Bawaan</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={copyBriefToClipboard}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-[#A5A39A] hover:text-[#F4F2EC] bg-[#0A0A09] border border-[#C7A34B]/20 hover:border-[#C7A34B]/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#C7A34B]" />
                    <span>{copiedBrief ? '✓ Rincian berhasil disalin ke clipboard!' : 'Salin Teks Lengkap Permohonan'}</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-[#C7A34B]/15 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#A5A39A] hover:text-[#E0C477] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Ubah Data Formulir</span>
                  </button>

                  <span className="text-[11px] font-mono text-[#C7A34B]">
                    Tujuan: {OFFICIAL_EMAIL}
                  </span>
                </div>

              </div>
            )}
          </div>

          {/* Right Column: Verified Official Contact Channels & Security Notice */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Official Contact Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#11110F] border border-[#C7A34B]/25 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C7A34B]">
                // Jalur Komunikasi Resmi
              </span>

              <h3 className="text-xl font-bold text-[#F4F2EC]">
                Korespondensi Bisnis & Teknis
              </h3>

              <p className="text-xs text-[#A5A39A] leading-relaxed">
                Untuk pertanyaan terkait ruang lingkup pengujian, penawaran resmi, atau perjanjian kerahasiaan (NDA), Anda dapat menghubungi saluran email resmi berikut:
              </p>

              {/* Verified Email Box */}
              <div className="p-4 rounded-xl bg-[#171714] border border-[#C7A34B]/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-[#0A0A09] border border-[#C7A34B]/30 flex items-center justify-center text-[#C7A34B] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-[#A5A39A] font-mono">Alamat Email Resmi</div>
                    <a 
                      href={`mailto:${OFFICIAL_EMAIL}`}
                      className="text-sm font-semibold text-[#F4F2EC] font-mono truncate hover:text-[#E0C477] transition-colors block"
                    >
                      {OFFICIAL_EMAIL}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailAddress}
                  className="p-2 rounded-lg bg-[#11110F] hover:bg-[#0A0A09] text-[#A5A39A] hover:text-[#E0C477] border border-[#C7A34B]/20 transition-colors shrink-0 cursor-pointer"
                  title="Salin alamat email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Service SLA Notice */}
              <div className="space-y-2 text-xs text-[#A5A39A] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A34B] shrink-0" />
                  <span>Waktu tanggapan awal: 1 – 2 hari kerja</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A34B] shrink-0" />
                  <span>Kerahasiaan terjamin dengan NDA sebelum pengujian</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A34B] shrink-0" />
                  <span>Dukungan komunikasi terenkripsi PGP atas permintaan</span>
                </div>
              </div>
            </div>

            {/* Scope Integrity Reminder Card */}
            <div className="p-6 rounded-2xl bg-[#171714] border border-[#C7A34B]/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E0C477]">
                <Lock className="w-4 h-4 text-[#C7A34B]" />
                <span>KEBIJAKAN PENGUJIAN BERTANGGUNG JAWAB</span>
              </div>
              <p className="text-xs text-[#A5A39A] leading-relaxed">
                UrbanNusaCyber mematuhi kode etik cybersecurity profesional Indonesia dan internasional. Seluruh pengujian sistem wajib didahului verifikasi kepemilikan aset dan persetujuan tertulis resmi.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
