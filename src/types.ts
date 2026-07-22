export interface TargetAudience {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  description: string;
  benefits: string[];
}

export interface UserPersona {
  id: string;
  name: string;
  role: string;
  age: number;
  nationality: string;
  image: string;
  quote: string;
  goals: string[];
  painPoints: string[];
  techTechLevel: string;
  preferredDestinations: string[];
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  touchpoints: string[];
  emotionalState: string;
}

export interface CoreFeature {
  id: string;
  category: string;
  title: string;
  description: string;
  priority: 'عالية جداً (P0)' | 'عالية (P1)' | 'متوسطة (P2)';
  phase: string;
}

export interface RiskItem {
  id: string;
  risk: string;
  category: 'تقني' | 'تشغيلي' | 'أمني' | 'قانوني';
  impact: 'عالي' | 'متوسط' | 'منخفض';
  mitigation: string;
}

export interface IntegrationSystem {
  category: string;
  systems: string[];
  purpose: string;
}
