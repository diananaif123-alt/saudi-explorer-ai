export type UserRole = 
  | 'tourist' 
  | 'citizen' 
  | 'business' 
  | 'investor' 
  | 'guide' 
  | 'ministry' 
  | 'admin';

export interface AccountTypeOption {
  id: UserRole;
  titleAr: string;
  titleEn: string;
  icon: string;
  badge: string;
  description: string;
  portalTitle: string;
  colorClass: string;
  allowedPortals: string[];
}

export interface DemoUser {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  nationalityOrCity?: string;
  businessOrCompany?: string;
  licenseNo?: string;
  investmentField?: string;
}

export const accountTypesData: AccountTypeOption[] = [
  {
    id: 'tourist',
    titleAr: 'سائح دولي / زائر',
    titleEn: 'International Tourist',
    icon: 'Luggage',
    badge: 'Popular',
    description: 'تخطيط الرحلات، حجز الفنادق والفعاليات، الحصول على خطط سياحية بالذكاء الاصطناعي.',
    portalTitle: 'بوابة السائح الذكي (Tourist Portal)',
    colorClass: 'from-[#0D7A5F] to-[#064E3B]',
    allowedPortals: ['tourist']
  },
  {
    id: 'citizen',
    titleAr: 'مواطن / مقيم سعودي',
    titleEn: 'Saudi Citizen / Resident',
    icon: 'Flag',
    badge: 'Local',
    description: 'استكشاف الفعاليات المحلية، العروض الخاصة بالمواطنين، وإعادة اكتشاف معالم المملكة.',
    portalTitle: 'بوابة المواطن والمقيم (Citizen Portal)',
    colorClass: 'from-emerald-700 to-emerald-900',
    allowedPortals: ['citizen', 'tourist']
  },
  {
    id: 'business',
    titleAr: 'منشأة سياحية / فندق / مطعم',
    titleEn: 'Tourism Business',
    icon: 'Building2',
    badge: 'Business',
    description: 'إدارة الحجوزات، عرض الفنادق والمطاعم، واستقبال زوار المملكة.',
    portalTitle: 'بوابة المنشآت والشركاء (Business Portal)',
    colorClass: 'from-[#0EA5E9] to-[#0369A1]',
    allowedPortals: ['business']
  },
  {
    id: 'investor',
    titleAr: 'مستثمر سياحي',
    titleEn: 'Tourism Investor',
    icon: 'Briefcase',
    badge: 'Investment',
    description: 'استعراض الفرص الاستثمارية في قطاع السياحة السعودي والبيانات الاقتصادية.',
    portalTitle: 'بوابة المستثمرين (Investor Portal)',
    colorClass: 'from-[#D4AF37] to-[#854D0E]',
    allowedPortals: ['investor']
  },
  {
    id: 'guide',
    titleAr: 'مرشد سياحي مرخص',
    titleEn: 'Licensed Tour Guide',
    icon: 'MapPin',
    badge: 'Licensed',
    description: 'تقديم الجولات السياحية، إدارة الحجوزات المباشرة والتواصل مع السياح.',
    portalTitle: 'بوابة المرشدين السياحيين (Guide Portal)',
    colorClass: 'from-teal-600 to-teal-900',
    allowedPortals: ['guide']
  },
  {
    id: 'ministry',
    titleAr: 'وزارة السياحة / هيئة السياحة',
    titleEn: 'Ministry of Tourism',
    icon: 'Landmark',
    badge: 'Government',
    description: 'متابعة المؤشرات الوطنية، تراخيص المنشآت، والرقابة على جودة الخدمات السياحية.',
    portalTitle: 'بوابة وزارة السياحة والهيئة (Ministry Portal)',
    colorClass: 'from-[#0D7A5F] to-[#043327]',
    allowedPortals: ['ministry']
  },
  {
    id: 'admin',
    titleAr: 'مدير النظام (Super Admin)',
    titleEn: 'System Super Admin',
    icon: 'ShieldCheck',
    badge: 'Admin',
    description: 'إدارة كافة أدوار المستخدمين، الصلاحيات، مراقبة الخوادم، وإعدادات المنصة الشاملة.',
    portalTitle: 'لوحة التحكم الكبرى (Super Admin Portal)',
    colorClass: 'from-slate-800 to-slate-950',
    allowedPortals: ['admin', 'tourist', 'citizen', 'business', 'investor', 'guide', 'ministry']
  }
];

export const demoUsersList: DemoUser[] = [
  {
    id: 'usr-tourist',
    role: 'tourist',
    name: 'جون سميث (John Smith)',
    email: 'tourist.demo@saudiexplorer.ai',
    phone: '+1 555 019 2831',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    nationalityOrCity: 'المملكة المتحدة (UK)'
  },
  {
    id: 'usr-citizen',
    role: 'citizen',
    name: 'فهد العتيبي',
    email: 'fahad.citizen@saudiexplorer.ai',
    phone: '+966 50 123 4567',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    nationalityOrCity: 'الرياض'
  },
  {
    id: 'usr-business',
    role: 'business',
    name: 'منتجعات هابيتاس العلا الفاخرة',
    email: 'business.habitas@saudiexplorer.ai',
    phone: '+966 14 888 9900',
    avatar: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200',
    businessOrCompany: 'قطاع الفنادق والضيافة',
    nationalityOrCity: 'العلا'
  },
  {
    id: 'usr-investor',
    role: 'investor',
    name: 'سارة ألكسندر (شركة الخالي للاستثمار)',
    email: 'investor.alexander@saudiexplorer.ai',
    phone: '+971 4 300 4455',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    investmentField: 'تطوير المنتجات والمنتجعات السياحية',
    businessOrCompany: 'Al Khali Capital'
  },
  {
    id: 'usr-guide',
    role: 'guide',
    name: 'المرشدة الدكتورة نورة الشمري',
    email: 'guide.noura@saudiexplorer.ai',
    phone: '+966 55 987 6543',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    licenseNo: 'KSA-GUIDE-2026-889',
    nationalityOrCity: 'المدينة المنورة / العلا'
  },
  {
    id: 'usr-ministry',
    role: 'ministry',
    name: 'م. عبدالله الغامدي (هيئة السياحة)',
    email: 'ministry.gov@saudiexplorer.ai',
    phone: '+966 11 200 1000',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    businessOrCompany: 'وزارة السياحة السعودية - إدارة التراخيص'
  },
  {
    id: 'usr-admin',
    role: 'admin',
    name: 'المدير الفني للنظام (Super Admin)',
    email: 'admin.root@saudiexplorer.ai',
    phone: '+966 11 000 0000',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  }
];
