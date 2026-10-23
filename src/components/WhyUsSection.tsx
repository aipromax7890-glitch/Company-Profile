import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle, Terminal, Code2 } from 'lucide-react';
import { WHY_US_ITEMS } from '../data/content';

export const WhyUsSection: React.FC = () => {
  const [activePreviewTab, setActivePreviewTab] = useState<'exec' | 'tech' | 'matrix'>('exec');

  return (
    <section id="why-us" className="relative py-24 bg-[#11110F] border-t border-[#C7A34B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171714] border border-[#C7A34B]/30 text-xs font-mono text-[#E0C477] mb-3">
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F2EC]">
            Practical Security.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C477] via-[#C7A34B] to-[#E0C477]">
              Clear Direction.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#A5A39A]">
            Kami tidak menjual janji palsu tentang sistem yang "100% kebal ancaman". Fokus kami adalah memberikan visibilitas nyata terhadap risiko, panduan mitigasi yang dapat dieksekusi, dan kejelasan teknis bagi tim Anda.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_US_ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#171714] border border-[#C7A34B]/20 hover:border-[#C7A34B]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-[#0A0A09] text-[11px] font-mono text-[#C7A34B] border border-[#C7A34B]/20 mb-4">
                  {item.metric}
                </div>
                <h3 className="text-lg font-bold text-[#F4F2EC] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A5A39A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Technical Advisory Sample Preview (Showing real reporting format) */}
        <div className="bg-[#0A0A09] border border-[#C7A34B]/25 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#C7A34B]/15 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7A34B]">
                // Standar Pelaporan UrbanNusaCyber
              </span>
              <h4 className="text-lg font-semibold text-[#F4F2EC] mt-0.5">
                Simulasi Format Dokumentasi Teknis & Mitigasi
              </h4>
            </div>

            <div className="flex items-center gap-2 bg-[#171714] p-1 rounded-xl border border-[#C7A34B]/20">
              <button
                type="button"
                onClick={() => setActivePreviewTab('exec')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activePreviewTab === 'exec'
                    ? 'bg-[#C7A34B] text-[#0A0A09] font-semibold'
                    : 'text-[#A5A39A] hover:text-[#F4F2EC]'
                }`}
              >
                Executive Summary
              </button>
              <button
                type="button"
                onClick={() => setActivePreviewTab('tech')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activePreviewTab === 'tech'
                    ? 'bg-[#C7A34B] text-[#0A0A09] font-semibold'
                    : 'text-[#A5A39A] hover:text-[#F4F2EC]'
                }`}
              >
                Technical Remediation
              </button>
              <button
                type="button"
                onClick={() => setActivePreviewTab('matrix')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activePreviewTab === 'matrix'
                    ? 'bg-[#C7A34B] text-[#0A0A09] font-semibold'
                    : 'text-[#A5A39A] hover:text-[#F4F2EC]'
                }`}
              >
                Risk Scoring Matrix
              </button>
            </div>
          </div>

          {/* Preview Tab Content */}
          <div className="pt-6">
            {activePreviewTab === 'exec' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E0C477]">
                  <FileText className="w-4 h-4 text-[#C7A34B]" />
                  <span>Ringkasan untuk Manajemen & Pengambil Keputusan</span>
                </div>
                <div className="p-4 rounded-xl bg-[#171714] border border-[#C7A34B]/15 text-xs text-[#A5A39A] leading-relaxed space-y-3">
                  <p>
                    <strong className="text-[#F4F2EC]">Konteks Bisnis:</strong> Pengujian berfokus pada validasi kontrol perimeter dan antarmuka otentikasi. Evaluasi menemukan bahwa lapisan transport dan kebijakan kata sandi telah memadai, namun terdapat eksposur pada parameter otorisasi berbasis peran (RBAC) yang berpotensi memungkinkan akses horizontal.
                  </p>
                  <p>
                    <strong className="text-[#F4F2EC]">Dampak Nyata:</strong> Pengguna dengan akun level staf dapat membaca rekaman ringkasan transaksi divisi lain jika parameter identifier dimanipulasi langsung pada request API.
                  </p>
                  <p>
                    <strong className="text-[#E0C477]">Rekomendasi Utama:</strong> Terapkan pemeriksaan kepemilikan objek pada level server middleware sebelum data dikembalikan ke klien.
                  </p>
                </div>
              </div>
            )}

            {activePreviewTab === 'tech' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E0C477]">
                  <Code2 className="w-4 h-4 text-[#C7A34B]" />
                  <span>Panduan Perbaikan Langkah-demi-Langkah untuk Pengembang</span>
                </div>
                <div className="p-4 rounded-xl bg-[#171714] border border-[#C7A34B]/15 font-mono text-xs text-[#A5A39A] space-y-3">
                  <div className="text-[#C7A34B]">// Remediasi Otorisasi pada Endpoint /api/v1/invoices/:id</div>
                  <div className="p-3 bg-[#0A0A09] rounded-lg border border-[#C7A34B]/10 text-emerald-400">
                    <div>1. Validasi session.userId terhadap pemilik resource invoices.organizationId</div>
                    <div>2. Tolak permohonan dengan HTTP 403 Forbidden bila otorisasi gagal</div>
                    <div>3. Tambahkan audit log untuk mencatat unauthorized access attempt</div>
                  </div>
                  <div className="text-[11px] text-[#A5A39A]">
                    Rekomendasi ini disertai potongan kode contoh dan verifikasi re-test gratis setelah patch diterapkan.
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'matrix' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E0C477]">
                  <AlertTriangle className="w-4 h-4 text-[#C7A34B]" />
                  <span>Klasifikasi Prioritas Berbasis Konteks Risiko</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#171714] border border-red-500/30">
                    <div className="font-mono text-red-400 font-bold mb-1">HIGH / CRITICAL</div>
                    <div className="text-[11px] text-[#A5A39A]">Kerentanan dengan kemudahan eksploitasi tinggi dan dampak langsung pada kebocoran data atau pengambilalihan akun.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#171714] border border-amber-500/30">
                    <div className="font-mono text-[#E0C477] font-bold mb-1">MEDIUM</div>
                    <div className="text-[11px] text-[#A5A39A]">Kelemahan konfigurasi atau bypass parsial yang memerlukan kondisi prasyarat tertentu sebelum dapat dieksploitasi.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#171714] border border-[#C7A34B]/20">
                    <div className="font-mono text-[#C7A34B] font-bold mb-1">LOW & ADVISORY</div>
                    <div className="text-[11px] text-[#A5A39A]">Best-practice hardening seperti header keamanan HTTP, informasi versi banner, dan pengetatan CSP.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
