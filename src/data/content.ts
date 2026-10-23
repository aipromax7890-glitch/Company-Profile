import { ServiceItem, ApproachStep, FaqItem } from '../types';

export const TRUST_PRINCIPLES = [
  {
    title: 'Authorized Security Testing',
    desc: 'Pengujian terotorisasi resmi dengan Rules of Engagement yang disepakati bersama secara legal.',
    code: 'RoE & Authorization'
  },
  {
    title: 'Risk-Based Assessment',
    desc: 'Evaluasi berdasarkan konteks bisnis aktual untuk memisahkan risiko nyata dari peringatan statis.',
    code: 'Contextual Impact'
  },
  {
    title: 'Clear Technical Reporting',
    desc: 'Dokumentasi terstruktur dengan bukti teknis reproduksi dan ringkasan eksekutif yang komprehensif.',
    code: 'Audit-Ready Docs'
  },
  {
    title: 'Practical Recommendations',
    desc: 'Langkah mitigasi konkret yang dapat segera dieksekusi oleh tim rekayasa dan operasional Anda.',
    code: 'Actionable Remediation'
  }
];

export const ABOUT_PILLARS = [
  {
    number: '01',
    title: 'Security-First Mindset',
    desc: 'Keamanan bukan sekadar lapisan pelengkap di akhir siklus, melainkan fondasi arsitektur yang direncanakan sejak rancangan awal.'
  },
  {
    number: '02',
    title: 'Technical Clarity',
    desc: 'Komunikasi transparan tanpa jargon yang mengaburkan fakta. Kami menyajikan temuan teknis secara objektif dan akurat.'
  },
  {
    number: '03',
    title: 'Responsible Testing',
    desc: 'Metodologi terkontrol dan non-destruktif guna memastikan kestabilan serta ketersediaan sistem operasional klien selama pengujian.'
  },
  {
    number: '04',
    title: 'Collaborative Delivery',
    desc: 'Bekerja bersama tim internal klien untuk menyelaraskan rekomendasi dengan kapabilitas teknologi dan tata kelola organisasi.'
  },
  {
    number: '05',
    title: 'Continuous Improvement',
    desc: 'Mendampingi proses evaluasi dan verifikasi perbaikan agar postur keamanan sistem terus berkembang secara adaptif.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'penetration-testing',
    number: '01',
    title: 'Penetration Testing',
    shortDesc: 'Identifikasi dan validasi kerentanan keamanan pada aplikasi atau sistem dalam ruang lingkup pengujian yang disepakati.',
    accentBadge: 'Aplikasi Web & API',
    scopeItems: [
      'Web application security testing',
      'Authentication and authorization assessment',
      'OWASP-aligned security testing',
      'Vulnerability validation',
      'Technical report dan rekomendasi mitigasi'
    ],
    ctaText: 'Bahas Penetration Testing',
    highlights: ['OWASP Top 10 Aligned', 'Proof-of-Concept Validation', 'Executive & Dev Reports'],
    scopeNotice: 'Seluruh aktivitas penetration testing memerlukan persetujuan Non-Disclosure Agreement (NDA) dan Rules of Engagement (RoE) tertulis sebelum pengujian dimulai.'
  },
  {
    id: 'network-security',
    number: '02',
    title: 'Network Security Testing',
    shortDesc: 'Evaluasi keamanan infrastruktur jaringan untuk memahami eksposur risiko, konfigurasi, segmentasi, dan kontrol keamanan.',
    accentBadge: 'Infrastruktur Jaringan',
    scopeItems: [
      'Network security assessment',
      'Service and exposure review',
      'Network segmentation review',
      'Firewall and access-control review',
      'Security configuration assessment',
      'Rekomendasi perbaikan berdasarkan prioritas risiko'
    ],
    ctaText: 'Bahas Network Testing',
    highlights: ['Perimeter Exposure Mapping', 'Segmentation Review', 'Priority-Ranked Fixes'],
    scopeNotice: 'Evaluasi dilakukan untuk mengukur eksposur layanan eksternal maupun internal dengan menjaga kesinambungan operasional infrastruktur.'
  },
  {
    id: 'web-development',
    number: '03',
    title: 'Web Development',
    shortDesc: 'Pengembangan website modern yang responsif, terstruktur, mudah dikelola, dan mempertimbangkan keamanan sejak tahap perancangan.',
    accentBadge: 'Modern Frontend & Web',
    scopeItems: [
      'Company profile website',
      'Business landing page',
      'Website redesign',
      'Responsive frontend development',
      'Performance and accessibility improvements',
      'Secure development practices'
    ],
    ctaText: 'Bangun Website Anda',
    highlights: ['Mobile-First Architecture', 'WCAG Accessibility', 'Input Sanitization'],
    scopeNotice: 'Menerapkan arsitektur web modern dengan sanitasi data ketat, perlindungan CSP, performa tinggi, dan struktur kode yang mudah dipelihara.'
  },
  {
    id: 'social-engineering',
    number: '04',
    title: 'Social Engineering Security Audit',
    shortDesc: 'Evaluasi terotorisasi untuk memahami bagaimana proses, komunikasi, dan kebiasaan pengguna dapat memengaruhi keamanan organisasi.',
    accentBadge: 'Human Layer & Awareness',
    scopeItems: [
      'Security awareness assessment',
      'Simulasi phishing yang disetujui dan dikendalikan',
      'Evaluasi proses verifikasi identitas',
      'Review prosedur pelaporan insiden',
      'Rekomendasi pelatihan dan perbaikan kontrol'
    ],
    ctaText: 'Bahas Security Awareness',
    highlights: ['Controlled Phishing Simulations', 'Process Hygiene Review', 'Educational Mitigation'],
    scopeNotice: 'PENTING: Seluruh simulasi wajib mendapat persetujuan tertulis resmi. Kami TIDAK mengumpulkan kata sandi asli/kredensial sensitif, tidak menyebarkan data pengguna, dan berorientasi murni pada peningkatan kesadaran serta edukasi organisasi.'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Memahami kebutuhan bisnis, arsitektur dasar, konteks operasional, serta ekspektasi keamanan organisasi.',
    deliverables: ['Identifikasi Tujuan', 'Pemetaan Aset Awal', 'Konsultasi Kebutuhan']
  },
  {
    step: '02',
    title: 'Scope & Authorization',
    description: 'Menetapkan batas ruang lingkup pengujian, jam kerja, pengecualian sistem, NDA, serta surat otorisasi legal.',
    deliverables: ['Rules of Engagement (RoE)', 'Legal Authorization', 'Scope Boundary Document']
  },
  {
    step: '03',
    title: 'Assessment',
    description: 'Melaksanakan pengujian keamanan atau pengembangan web sesuai metodologi terstruktur yang telah disepakati.',
    deliverables: ['Technical Execution', 'Vulnerability Validation', 'Zero-Disruption Monitoring']
  },
  {
    step: '04',
    title: 'Findings & Delivery',
    description: 'Mendokumentasikan temuan secara terperinci dengan langkah reproduksi yang terverifikasi dan jelas.',
    deliverables: ['Executive Summary', 'Technical Findings Log', 'Proof-of-Concept Details']
  },
  {
    step: '05',
    title: 'Recommendations',
    description: 'Menyusun prioritas remediasi berbasis tingkat risiko bisnis serta alternatif mitigasi teknis yang aplikatif.',
    deliverables: ['Prioritized Action Plan', 'Architectural Guidance', 'Patch Advisory']
  },
  {
    step: '06',
    title: 'Review',
    description: 'Sesi pemaparan interaktif bersama pemangku kepentingan untuk menjawab pertanyaan teknis dan evaluasi tindak lanjut.',
    deliverables: ['Debriefing Session', 'Re-test Planning', 'Final Sign-off']
  }
];

export const WHY_US_ITEMS = [
  {
    title: 'Scope-Driven Engagement',
    desc: 'Setiap pengujian beroperasi dalam koridor wewenang yang disepakati secara tertulis. Kami menjaga integritas operasional dan integritas data sistem klien.',
    metric: '100% Authorized'
  },
  {
    title: 'Understandable Technical Reporting',
    desc: 'Laporan kami tidak sekadar salinan hasil alat pemindai otomatis. Kami menyusun narasi jelas: apa risikonya bagi bisnis dan bagaimana cara memperbaikinya.',
    metric: 'Action-Oriented'
  },
  {
    title: 'Risk-Prioritized Recommendations',
    desc: 'Kami menyaring kerentanan berdasarkan kemudahan eksploitasi dan dampak nyata, sehingga tim IT Anda dapat memprioritaskan perbaikan yang paling bernilai.',
    metric: 'Contextual Impact'
  },
  {
    title: 'Security-Conscious Development',
    desc: 'Bukan hanya menguji sistem orang lain, pengembangan web kami menerapkan prinsip defensive coding, validasi input, dan arsitektur modern sejak tahap desain.',
    metric: 'Secure-by-Design'
  }
];

export const ENGAGEMENT_FLOW = [
  {
    step: 'Tahap 1',
    title: 'Initial Consultation',
    desc: 'Diskusi awal mengenai kebutuhan keamanan, profil sistem, atau rencana pembuatan website.'
  },
  {
    step: 'Tahap 2',
    title: 'Requirement & Scope Definition',
    desc: 'Pendefinisian target URL, IP subnet, platform aplikasi, atau spesifikasi web.'
  },
  {
    step: 'Tahap 3',
    title: 'Proposal & Timeline',
    desc: 'Penyusunan penawaran formal berisi rincian metodologi, durasi estimasi, dan komitmen jadwal.'
  },
  {
    step: 'Tahap 4',
    title: 'Written Authorization',
    desc: 'Penandatanganan dokumen Non-Disclosure Agreement (NDA) dan Rules of Engagement (RoE).'
  },
  {
    step: 'Tahap 5',
    title: 'Execution & Progress Communication',
    desc: 'Pelaksanaan teknis dengan komunikasi berkala jika ditemukan temuan kritis berkategori tinggi.'
  },
  {
    step: 'Tahap 6',
    title: 'Final Delivery & Follow-Up',
    desc: 'Penyerahan laporan resmi yang dienkripsi dan sesi pembahasan rekomendasi teknis.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Layanan apa saja yang tersedia?',
    answer: 'UrbanNusaCyber menyediakan empat layanan inti: Penetration Testing (pengujian keamanan aplikasi web dan API), Network Security Testing (evaluasi perimeter dan konfigurasi jaringan), Web Development (pengembangan website modern yang aman dan responsif), serta Social Engineering Security Audit (evaluasi kesadaran keamanan dan simulasi phishing terotorisasi).'
  },
  {
    question: 'Apakah penetration testing memerlukan izin tertulis?',
    answer: 'Ya, mutlak. UrbanNusaCyber hanya melakukan pengujian keamanan pada sistem yang memiliki surat izin tertulis resmi (Letter of Authorization) dan Rules of Engagement (RoE) yang ditandatangani oleh pemilik atau pengelola sistem yang berwenang. Kami menolak segala bentuk pengujian tanpa otorisasi sah demi mematuhi hukum dan etika profesional.'
  },
  {
    question: 'Apa yang akan diterima setelah pengujian?',
    answer: 'Klien akan menerima laporan komprehensif yang terdiri dari Executive Summary (ditujukan bagi jajaran manajemen/stakeholder bisnis) dan Technical Report (berisi detail teknis kerentanan, langkah reproduksi proof-of-concept, tingkat risiko berdasarkan dampak dan kemudahan eksploitasi, serta rekomendasi mitigasi langkah-demi-langkah).'
  },
  {
    question: 'Apakah UrbanNusaCyber menerima proyek pengembangan website?',
    answer: 'Ya. Kami mengembangkan website company profile, business landing page, maupun rancang ulang (redesign) website dengan standar rekayasa modern. Pendekatan kami menitikberatkan pada tata letak yang responsif, performa cepat, aksesibilitas tinggi, serta penerapan prinsip secure coding sejak tahap perancangan awal.'
  },
  {
    question: 'Bagaimana cara memulai konsultasi?',
    answer: 'Anda dapat mengisi formulir pada bagian Kontak di website ini atau mengirimkan rincian kebutuhan melalui email resmi kami. Tim kami akan menghubungi Anda untuk menjadwalkan sesi diskusi awal secara daring guna memahami konteks proyek dan ruang lingkup yang diperlukan.'
  },
  {
    question: 'Apakah hasil pengujian dapat dijamin menemukan semua kerentanan?',
    answer: 'Secara etika dan prinsip cybersecurity, tidak ada pengujian keamanan yang dapat menjamin sistem 100% bebas dari segala celah. Hasil pengujian merefleksikan evaluasi terhadap ruang lingkup yang disepakati, kondisi konfigurasi pada periode pengujian, dan metodologi yang diterapkan. Tujuan utama pengujian adalah memitigasi risiko secara signifikan dan menaikkan standar pertahanan sistem Anda terhadap ancaman nyata.'
  }
];
