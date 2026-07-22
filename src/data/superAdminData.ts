export interface SuperAdminMetrics {
  totalUsers: number;
  touristsCount: number;
  citizensCount: number;
  investorsCount: number;
  tourismFacilitiesCount: number;
  tourGuidesCount: number;
  ministryUsersCount: number;
  superAdminCount: number;
  totalBookings: number;
  totalPageVisits: number;
  citiesCount: number;
  eventsCount: number;
  hotelsCount: number;
  restaurantsCount: number;
  attractionsCount: number;
  systemStatus: 'ممتاز 100%' | 'صيانة جزئية' | 'تحديث خوادم';
  recentSystemAlertsCount: number;
}

export type UserRole =
  | 'Tourist'
  | 'Citizen'
  | 'Tourism Business'
  | 'Investor'
  | 'Tour Guide'
  | 'Ministry of Tourism'
  | 'Super Admin';

export interface PlatformUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  city: string;
  status: 'نشط' | 'معطل' | 'قيد المراجعة';
  registeredDate: string;
  lastActive: string;
  avatar: string;
}

export interface SystemRoleDefinition {
  id: string;
  roleName: UserRole | string;
  usersAssignedCount: number;
  permissions: string[];
  isCustomRole: boolean;
}

export interface PlatformContentItem {
  id: string;
  title: string;
  type: 'أخبار' | 'مقالة' | 'صورة' | 'فيديو' | 'دليل سياحي' | 'بنر' | 'إعلان';
  author: string;
  publishDate: string;
  views: number;
  status: 'منشور' | 'مسودة' | 'مؤرشف';
}

export interface AIModelConfig {
  aiConciergeModel: string;
  smartPlannerModel: string;
  recommendationsEngine: string;
  translationEngine: string;
  smartSearchMode: string;
  arExperienceModule: string;
  temperature: number;
  maxTokenLimit: number;
  enableSafetyFilters: boolean;
}

export interface SystemAuditLog {
  id: string;
  timestamp: string;
  performedBy: string;
  userRole: string;
  actionType: 'تسجيل دخول' | 'تعديل بيانات' | 'إنشاء حساب' | 'حذف محتوى' | 'تعديل صلاحيات' | 'إرسال إشعار' | 'تحديث النظام';
  targetResource: string;
  ipAddress: string;
  statusSuccess: boolean;
}

export interface SecurityLoginRecord {
  id: string;
  userName: string;
  role: string;
  loginTime: string;
  device: string;
  ipAddress: string;
  status: 'ناجح' | 'محاولة فاشلة' | 'محظور مؤقتاً';
}

export interface BackupRecord {
  id: string;
  backupName: string;
  createdAt: string;
  fileSizeMB: number;
  type: 'تلقائي يومي' | 'يدوي مكتمل';
  status: 'جاهز للاستعادة' | 'قيد الأرشفة';
}

export const initialSuperAdminMetrics: SuperAdminMetrics = {
  totalUsers: 894500,
  touristsCount: 620000,
  citizensCount: 240000,
  investorsCount: 3450,
  tourismFacilitiesCount: 18200,
  tourGuidesCount: 4850,
  ministryUsersCount: 320,
  superAdminCount: 12,
  totalBookings: 12400000,
  totalPageVisits: 48200000,
  citiesCount: 24,
  eventsCount: 420,
  hotelsCount: 1850,
  restaurantsCount: 3200,
  attractionsCount: 680,
  systemStatus: 'ممتاز 100%',
  recentSystemAlertsCount: 2
};

export const demoPlatformUsers: PlatformUser[] = [
  {
    id: 'usr-101',
    name: 'سارة عبدالكريم العتيبي',
    email: 'sara.otaibi@saudiexplorer.ai',
    role: 'Super Admin',
    city: 'الرياض',
    status: 'نشط',
    registeredDate: '2025-01-10',
    lastActive: 'قبل دقيقة واحدة',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'usr-102',
    name: 'سلطان الناصر',
    email: 'sultan.nasser@tourism.gov.sa',
    role: 'Ministry of Tourism',
    city: 'الرياض',
    status: 'نشط',
    registeredDate: '2025-03-14',
    lastActive: 'منذ 15 دقيقة',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'usr-103',
    name: 'المرشد إبراهيم الشمري',
    email: 'ibrahim.guide@alula.sa',
    role: 'Tour Guide',
    city: 'العلا',
    status: 'نشط',
    registeredDate: '2025-04-02',
    lastActive: 'منذ ساعتين',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'usr-104',
    name: 'شركة منتجعات هابيتاس العلا',
    email: 'business@habitasalula.com',
    role: 'Tourism Business',
    city: 'العلا',
    status: 'نشط',
    registeredDate: '2025-02-18',
    lastActive: 'منذ 4 ساعات',
    avatar: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'usr-105',
    name: 'Michael Vance (مستثمر)',
    email: 'm.vance@marriottgulf.com',
    role: 'Investor',
    city: 'جدة',
    status: 'نشط',
    registeredDate: '2025-05-11',
    lastActive: 'منذ يوم واحد',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'usr-106',
    name: 'فهد عبدالله الماجد',
    email: 'fahad.majed@gmail.com',
    role: 'Citizen',
    city: 'الخبر',
    status: 'نشط',
    registeredDate: '2025-06-01',
    lastActive: 'قبل 3 دقائق',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'usr-107',
    name: 'Emma Watson (سائحة)',
    email: 'emma.w@uktourist.co.uk',
    role: 'Tourist',
    city: 'الدرعية',
    status: 'نشط',
    registeredDate: '2026-07-01',
    lastActive: 'نشط الآن',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  }
];

export const demoRoleDefinitions: SystemRoleDefinition[] = [
  {
    id: 'role-1',
    roleName: 'Super Admin',
    usersAssignedCount: 12,
    permissions: ['التحكم الكامل بالمنصة', 'إدارة الحسابات والصلاحيات', 'إعدادات AI', 'السجلات الأمنية', 'النسخ الاحتياطي'],
    isCustomRole: false
  },
  {
    id: 'role-2',
    roleName: 'Ministry of Tourism',
    usersAssignedCount: 320,
    permissions: ['إدارة الفعاليات الوطنية', 'مراقبة المنشآت', 'مركز التحليلات', 'دعم الزوار', 'الذكاء الاستراتيجي'],
    isCustomRole: false
  },
  {
    id: 'role-3',
    roleName: 'Tour Guide',
    usersAssignedCount: 4850,
    permissions: ['إدارة الجولات والمسارات', 'تأكيد الحجوزات', 'المحادثة المباشرة مع السياح', 'عرض الأرباح والتقييمات'],
    isCustomRole: false
  },
  {
    id: 'role-4',
    roleName: 'Tourism Business',
    usersAssignedCount: 18200,
    permissions: ['إدارة خدمات المنشأة', 'إشعارات الطلبات', 'لوحة تحليلات المبيعات', 'الترويج التجاري'],
    isCustomRole: false
  },
  {
    id: 'role-5',
    roleName: 'Investor',
    usersAssignedCount: 3450,
    permissions: ['تصفح الفرص الاستثمارية', 'حساب عائد الاستثمار ROI', 'التواصل مع هيئة الاستثمار'],
    isCustomRole: false
  },
  {
    id: 'role-6',
    roleName: 'Citizen',
    usersAssignedCount: 240000,
    permissions: ['تخطيط الرحلات الداخلية', 'مكافآت جواز السفر الرقمي', 'حجز الفعاليات والأنشطة المحلية'],
    isCustomRole: false
  },
  {
    id: 'role-7',
    roleName: 'Tourist',
    usersAssignedCount: 620000,
    permissions: ['استخدام المساعد الذكي AI', 'حجز الفنادق والتجارب', 'التوجيه المباشر بالواقع المعزز AR'],
    isCustomRole: false
  }
];

export const demoContentItems: PlatformContentItem[] = [
  {
    id: 'cnt-admin-1',
    title: 'افتتاح وجهة سندالة الفاخرة ضمن مشاريع نيوم الرائدة',
    type: 'أخبار',
    author: 'فريق التحرير المركزي',
    publishDate: '2026-07-20',
    views: 89000,
    status: 'منشور'
  },
  {
    id: 'cnt-admin-2',
    title: 'دليل السياحة الثقافية والاستكشافية في مدائن صالح والعلا',
    type: 'دليل سياحي',
    author: 'م. خالد الصالح',
    publishDate: '2026-07-15',
    views: 124000,
    status: 'منشور'
  },
  {
    id: 'cnt-admin-3',
    title: 'بنر الشتاء في طنطورة 2026 الواجهة الرئيسية',
    type: 'بنر',
    author: 'فريق التصميم والميديا',
    publishDate: '2026-07-01',
    views: 450000,
    status: 'منشور'
  }
];

export const initialAIConfig: AIModelConfig = {
  aiConciergeModel: 'Gemini 1.5 Pro Flash Ultra',
  smartPlannerModel: 'Saudi Explorer Multimodal Reasoning Engine',
  recommendationsEngine: 'Collaborative Filter & Contextual Geospatial AI',
  translationEngine: 'Saudi Arabic Neural Translator (14 Languages)',
  smartSearchMode: 'Semantic Vector Embeddings + Maps Grounding',
  arExperienceModule: 'WebAR Spatial Framework 3D',
  temperature: 0.7,
  maxTokenLimit: 4096,
  enableSafetyFilters: true
};

export const demoSystemAuditLogs: SystemAuditLog[] = [
  {
    id: 'log-9901',
    timestamp: '2026-07-22 11:20:14',
    performedBy: 'سارة العتيبي (Super Admin)',
    userRole: 'Super Admin',
    actionType: 'تحديث النظام',
    targetResource: 'إعدادات محرك التوصيات AI Concierge',
    ipAddress: '185.122.45.10',
    statusSuccess: true
  },
  {
    id: 'log-9902',
    timestamp: '2026-07-22 10:45:30',
    performedBy: 'سلطان الناصر (Ministry)',
    userRole: 'Ministry of Tourism',
    actionType: 'إنشاء حساب',
    targetResource: 'اعتماد فعالية شتاء العلا 2026',
    ipAddress: '192.168.1.100',
    statusSuccess: true
  },
  {
    id: 'log-9903',
    timestamp: '2026-07-22 09:12:05',
    performedBy: 'إبراهيم الشمري (Guide)',
    userRole: 'Tour Guide',
    actionType: 'تعديل بيانات',
    targetResource: 'تحديث أسعار وساعات توفر جولة الحِجر',
    ipAddress: '213.180.10.88',
    statusSuccess: true
  }
];

export const demoSecurityRecords: SecurityLoginRecord[] = [
  {
    id: 'sec-1',
    userName: 'سارة عبدالكريم العتيبي',
    role: 'Super Admin',
    loginTime: '2026-07-22 11:00 AM',
    device: 'Chrome on macOS (الرياض)',
    ipAddress: '185.122.45.10',
    status: 'ناجح'
  },
  {
    id: 'sec-2',
    userName: 'مستخدم مجهول',
    role: 'Guest',
    loginTime: '2026-07-22 10:14 AM',
    device: 'Safari on iOS (فرنسا)',
    ipAddress: '82.165.22.101',
    status: 'محاولة فاشلة'
  }
];

export const demoBackupsList: BackupRecord[] = [
  {
    id: 'bkp-20260722',
    backupName: 'Full_System_Snapshot_2026_07_22.bak',
    createdAt: '2026-07-22 03:00 AM',
    fileSizeMB: 4820,
    type: 'تلقائي يومي',
    status: 'جاهز للاستعادة'
  },
  {
    id: 'bkp-20260721',
    backupName: 'Full_System_Snapshot_2026_07_21.bak',
    createdAt: '2026-07-21 03:00 AM',
    fileSizeMB: 4790,
    type: 'تلقائي يومي',
    status: 'جاهز للاستعادة'
  }
];
