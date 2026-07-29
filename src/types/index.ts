export interface WaitlistFormData {
  name: string;
  business: string;
  city: string;
  whatsapp: string;
  email: string;
}

export type WaitlistFieldErrors = Partial<Record<keyof WaitlistFormData, string>>;

export type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  city: string;
  quote: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustBusiness {
  id: string;
  name: string;
}
