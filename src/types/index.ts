export type ServiceType = 
  | 'penetration-testing'
  | 'network-security'
  | 'web-development'
  | 'social-engineering'
  | 'other';

export interface ServiceItem {
  id: ServiceType;
  number: string;
  title: string;
  shortDesc: string;
  scopeItems: string[];
  ctaText: string;
  accentBadge: string;
  highlights: string[];
  scopeNotice?: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  fullName: string;
  companyName: string;
  email: string;
  serviceType: ServiceType;
  needsSummary: string;
  consent: boolean;
}
