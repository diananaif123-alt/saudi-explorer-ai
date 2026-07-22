export interface MinistryKPIMetrics {
  totalTourists: number;
  currentActiveTourists: number;
  citizenUsersCount: number;
  investorsCount: number;
  tourismFacilitiesCount: number;
  tourGuidesCount: number;
  totalBookingsCount: number;
  hotelOccupancyRate: number; // percentage
  avgStayDays: number;
  avgDailySpendSAR: number;
  visitorSatisfactionIndex: number; // 0 - 100
  topCitiesList: string[];
}

export interface SaudiRegionDetail {
  id: string;
  nameAr: string;
  nameEn: string;
  touristsCount: number;
  hotelOccupancy: number; // percentage
  eventsCount: number;
  topNationalities: string[];
  avgSpendSAR: number;
  avgStayDays: number;
  activeFacilities: number;
  growthRate: string;
  description: string;
}

export interface MinistryEventItem {
  id: string;
  title: string;
  city: string;
  category: 'ترفيه ومهرجانات' | 'تراث ورؤية' | 'مؤتمرات ومعارض' | 'رياضة ومغامرة';
  startDate: string;
  endDate: string;
  expectedVisitors: number;
  actualBookings: number;
  occupancyRate: number; // percentage
  satisfactionRating: number;
  status: 'نشطة حالياً' | 'قادمة' | 'مكتملة';
  organizer: string;
}

export interface MinistryFacilityItem {
  id: string;
  name: string;
  type: 'فندق' | 'منتجع' | 'مطعم' | 'شركة أنشطة' | 'طيران داخلي';
  city: string;
  rating: number;
  capacity: number;
  occupancyRate: number;
  status: 'مرخص معتمد' | 'قيد المراجعة' | 'ملاحظات تشغيلية';
  licensingDate: string;
  contactPerson: string;
}

export interface MinistryInvestorRecord {
  id: string;
  investorName: string;
  companyName: string;
  country: string;
  capitalSAR: number;
  targetSector: string;
  promisingCity: string;
  status: 'معتمد' | 'تحت الدراسة' | 'مكتمل التمويل';
  submittedDate: string;
}

export interface MinistrySupportTicket {
  id: string;
  visitorName: string;
  visitorNationality: string;
  ticketType: 'استفسار عام' | 'شكوى خدمة' | 'بلاغ طارئ' | 'اقتراح تطوير';
  city: string;
  date: string;
  status: 'مفتوح' | 'قيد المعالجة' | 'مغلق ومحلول';
  description: string;
}

export interface MinistryContentItem {
  id: string;
  title: string;
  type: 'خبر صحفي' | 'حملة تسويقية' | 'دليل سياحي' | 'بنر رئيسي';
  publishDate: string;
  status: 'منشور' | 'مسودة' | 'مجدول';
  viewsCount: number;
}

export interface MinistryNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'surge' | 'occupancy' | 'weather' | 'ai' | 'operational';
  severity: 'high' | 'medium' | 'info';
  read: boolean;
}

export const initialMinistryKPIs: MinistryKPIMetrics = {
  totalTourists: 27450000,
  currentActiveTourists: 1420500,
  citizenUsersCount: 8900000,
  investorsCount: 3450,
  tourismFacilitiesCount: 18200,
  tourGuidesCount: 4850,
  totalBookingsCount: 12400000,
  hotelOccupancyRate: 78.4,
  avgStayDays: 6.8,
  avgDailySpendSAR: 1250,
  visitorSatisfactionIndex: 94.2,
  topCitiesList: ['العلا', 'الرياض', 'جدة', 'الدرعية', 'الباحة', 'تبوك (نيوم)', 'عسير']
};

export const saudiRegionsData: SaudiRegionDetail[] = [
  {
    id: 'reg-riyadh',
    nameAr: 'منطقة الرياض والدرعية',
    nameEn: 'Riyadh & Diriyah Region',
    touristsCount: 8400000,
    hotelOccupancy: 82,
    eventsCount: 145,
    topNationalities: ['الولايات المتحدة', 'المملكة المتحدة', 'الإمارات', 'الكويت'],
    avgSpendSAR: 1650,
    avgStayDays: 5.2,
    activeFacilities: 4200,
    growthRate: '+18.5%',
    description: 'العاصمة الثقافية والتاريخية ومركز الأعمال والمهرجانات العالمية وحي الطريف بالدرعية.'
  },
  {
    id: 'reg-makkah-jeddah',
    nameAr: 'منطقة مكة المكرمة وجدة',
    nameEn: 'Makkah & Jeddah Region',
    touristsCount: 11200000,
    hotelOccupancy: 86,
    eventsCount: 120,
    topNationalities: ['إندونيسيا', 'باكستان', 'مصر', 'فرنسا', 'تركيا'],
    avgSpendSAR: 1400,
    avgStayDays: 8.5,
    activeFacilities: 5800,
    growthRate: '+22.1%',
    description: 'قلبة السياحة الدينية والبحرية، الكورنيش، جدة التاريخية (البلد)، ومشاريع البحر الأحمر.'
  },
  {
    id: 'reg-alula-madinah',
    nameAr: 'منطقة المدينة المنورة والعلا',
    nameEn: 'Madinah & AlUla Region',
    touristsCount: 5100000,
    hotelOccupancy: 91,
    eventsCount: 85,
    topNationalities: ['ألمانيا', 'اليابان', 'إيطاليا', 'الصين', 'أمريكا'],
    avgSpendSAR: 2200,
    avgStayDays: 4.8,
    activeFacilities: 2400,
    growthRate: '+31.4%',
    description: 'عاصمة التراث العالمي، مدائن صالح، المهرجانات الملكية ومسارح الفنون العالمية.'
  },
  {
    id: 'reg-asir-south',
    nameAr: 'منطقة عسير والجنوب (أبها والرستن)',
    nameEn: 'Asir & Southern Highlands',
    touristsCount: 2800000,
    hotelOccupancy: 74,
    eventsCount: 65,
    topNationalities: ['السعودية', 'الإمارات', 'قطر', 'عمان'],
    avgSpendSAR: 950,
    avgStayDays: 6.1,
    activeFacilities: 1900,
    growthRate: '+15.2%',
    description: 'سياحة الطبيعة والمناخ المعتدل، جبال السودة، رجال ألمع والمهرجانات الصيفية.'
  },
  {
    id: 'reg-tabuk-neom',
    nameAr: 'منطقة تبوك ونيوم والبحر الأحمر',
    nameEn: 'Tabuk, NEOM & Red Sea',
    touristsCount: 1450000,
    hotelOccupancy: 88,
    eventsCount: 40,
    topNationalities: ['بريطانيا', 'سويسرا', 'سلطنة عمان', 'كندا'],
    avgSpendSAR: 3100,
    avgStayDays: 5.5,
    activeFacilities: 1100,
    growthRate: '+45.0%',
    description: 'أيقونة السياحة الفاخرة، وجهة سندالة ورجال الديسة وسياحة الغوص العالمية.'
  },
  {
    id: 'reg-eastern-province',
    nameAr: 'المنطقة الشرقية (الخبر والأحساء)',
    nameEn: 'Eastern Province & Al-Ahsa',
    touristsCount: 3900000,
    hotelOccupancy: 71,
    eventsCount: 75,
    topNationalities: ['البحرين', 'الكويت', 'قطر', 'الهند'],
    avgSpendSAR: 1100,
    avgStayDays: 4.2,
    activeFacilities: 2800,
    growthRate: '+12.8%',
    description: 'واحة الأحساء المدرجة باليونيسكو، الواجهات البحرية بالخبر والسياحة العائلية.'
  }
];

export const demoMinistryEvents: MinistryEventItem[] = [
  {
    id: 'mevt-01',
    title: 'مهرجان الشتاء في طنطورة - العلا 2026',
    city: 'العلا',
    category: 'تراث ورؤية',
    startDate: '2026-11-15',
    endDate: '2027-01-20',
    expectedVisitors: 450000,
    actualBookings: 395000,
    occupancyRate: 93,
    satisfactionRating: 4.9,
    status: 'نشطة حالياً',
    organizer: 'الهيئة الملكية لمحافظة العلا'
  },
  {
    id: 'mevt-02',
    title: 'موسم الرياض الفاخر والفعاليات العالمية',
    city: 'الرياض',
    category: 'ترفيه ومهرجانات',
    startDate: '2026-10-01',
    endDate: '2027-03-31',
    expectedVisitors: 12000000,
    actualBookings: 9800000,
    occupancyRate: 88,
    satisfactionRating: 4.8,
    status: 'نشطة حالياً',
    organizer: 'الهيئة العامة للترفيه'
  },
  {
    id: 'mevt-03',
    title: 'مهرجان صيف أبها والقمم الجبلية',
    city: 'أبها (عسير)',
    category: 'رياضة ومغامرة',
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    expectedVisitors: 850000,
    actualBookings: 720000,
    occupancyRate: 79,
    satisfactionRating: 4.6,
    status: 'قادمة',
    organizer: 'هيئة تطوير منطقة عسير'
  },
  {
    id: 'mevt-04',
    title: 'مؤتمر الفندقة والاستثمار السياحي الدولي (RTS)',
    city: 'جدة',
    category: 'مؤتمرات ومعارض',
    startDate: '2026-09-10',
    endDate: '2026-09-14',
    expectedVisitors: 35000,
    actualBookings: 32000,
    occupancyRate: 95,
    satisfactionRating: 4.9,
    status: 'قادمة',
    organizer: 'وزارة السياحة السعودية'
  }
];

export const demoMinistryFacilities: MinistryFacilityItem[] = [
  {
    id: 'mfac-101',
    name: 'منتجع هابيتاس العلا البيئي (Habitas AlUla)',
    type: 'منتجع',
    city: 'العلا',
    rating: 4.9,
    capacity: 120,
    occupancyRate: 94,
    status: 'مرخص معتمد',
    licensingDate: '2023-04-12',
    contactPerson: 'إبراهيم الشمري'
  },
  {
    id: 'mfac-102',
    name: 'فندق فيرمونت رملة الرياض',
    type: 'فندق',
    city: 'الرياض',
    rating: 4.8,
    capacity: 350,
    occupancyRate: 85,
    status: 'مرخص معتمد',
    licensingDate: '2022-08-19',
    contactPerson: 'منى المنصور'
  },
  {
    id: 'mfac-103',
    name: 'مطعم قصر البجيري بالدرعية',
    type: 'مطعم',
    city: 'الدرعية',
    rating: 4.7,
    capacity: 200,
    occupancyRate: 90,
    status: 'مرخص معتمد',
    licensingDate: '2024-01-10',
    contactPerson: 'عبدالله السبيعي'
  },
  {
    id: 'mfac-104',
    name: 'شركة مغامرات عسير الجبلية',
    type: 'شركة أنشطة',
    city: 'أبها',
    rating: 4.6,
    capacity: 80,
    occupancyRate: 72,
    status: 'قيد المراجعة',
    licensingDate: '2026-02-01',
    contactPerson: 'فهد الشهري'
  }
];

export const demoMinistryInvestors: MinistryInvestorRecord[] = [
  {
    id: 'inv-rec-1',
    investorName: 'مجموعة ماريوت الدولية (Marriott International)',
    companyName: 'Marriott Gulf Development',
    country: 'الولايات المتحدة',
    capitalSAR: 1200000000,
    targetSector: 'فنادق فاخرة بمنتجعات البحر الأحمر',
    promisingCity: 'تبوك ونيوم',
    status: 'معتمد',
    submittedDate: '2026-03-15'
  },
  {
    id: 'inv-rec-2',
    investorName: 'صندوق البحر الميت والخليج للاستثمار',
    companyName: 'Gulf Eco Resorts Co',
    country: 'الإمارات العربية المتحدة',
    capitalSAR: 450000000,
    targetSector: 'منتجعات جبلية مستدامة',
    promisingCity: 'السودة (أبها)',
    status: 'تحت الدراسة',
    submittedDate: '2026-05-20'
  },
  {
    id: 'inv-rec-3',
    investorName: 'شراكة إكزيما الأوربية للفندقة',
    companyName: 'Accor Heritage Saudi',
    country: 'فرنسا',
    capitalSAR: 800000000,
    targetSector: 'بوتيك هوتيلز في المباني التراثية',
    promisingCity: 'الدرعية والعلا',
    status: 'مكتمل التمويل',
    submittedDate: '2026-01-10'
  }
];

export const demoMinistryTickets: MinistrySupportTicket[] = [
  {
    id: 'TCK-9901',
    visitorName: 'ألكسندر كوفالينكو',
    visitorNationality: 'روسيا',
    ticketType: 'استفسار عام',
    city: 'العلا',
    date: '2026-07-21',
    status: 'مغلق ومحلول',
    description: 'طلب معلومات عن تأشيرة السياحة الفورية والشريحة الإلكترونية eSIM عند وصول مطار العلا.'
  },
  {
    id: 'TCK-9902',
    visitorName: 'فاطمة الزهراء البوعناني',
    visitorNationality: 'المغرب',
    ticketType: 'شكوى خدمة',
    city: 'جدة',
    date: '2026-07-22',
    status: 'قيد المعالجة',
    description: 'تأخير في إجراءات الاستقبال في إحدى المنشآت الفندقية بالمنطقة البحرية.'
  },
  {
    id: 'TCK-9903',
    visitorName: 'Johnathan Myers',
    visitorNationality: 'استراليا',
    ticketType: 'اقتراح تطوير',
    city: 'الرياض',
    date: '2026-07-20',
    status: 'مفتوح',
    description: 'اقتراح زيادة اللوحات الإرشادية باللغة الإنجليزية في المسارات التراثية بحي الطريف.'
  }
];

export const demoMinistryContent: MinistryContentItem[] = [
  {
    id: 'cnt-01',
    title: 'إطلاق الاستراتيجية الوطنية الشاملة للذكاء الاصطناعي في السياحة 2030',
    type: 'خبر صحفي',
    publishDate: '2026-07-18',
    status: 'منشور',
    viewsCount: 145000
  },
  {
    id: 'cnt-02',
    title: 'حملة "صيف السعودية.. روح وصحراء وشواطئ" العالمية',
    type: 'حملة تسويقية',
    publishDate: '2026-06-01',
    status: 'منشور',
    viewsCount: 3800000
  },
  {
    id: 'cnt-03',
    title: 'الدليل المعتمد لرحلات التخييم والاستكشاف الجبلي في عسير وتبوك',
    type: 'دليل سياحي',
    publishDate: '2026-05-10',
    status: 'منشور',
    viewsCount: 92000
  }
];

export const demoMinistryNotifications: MinistryNotification[] = [
  {
    id: 'mnotif-1',
    title: 'ارتفاع استثنائي في أعداد السياح بالعلا (+34%)',
    message: 'تجاوزت نسبة إشغال الفنادق والمنتجعات بالعلا 93% هذا الأسبوع مع توافد الوفود الأوروبية.',
    time: 'منذ 10 دقائق',
    type: 'surge',
    severity: 'high',
    read: false
  },
  {
    id: 'mnotif-2',
    title: 'توصية AI Tourism Intelligence',
    message: 'يُوصى بتوجيه حملات تسويقية مكثفة لمدينة الباحة لتوزيع التدفق السياحي وتخفيف الضغط عن عسير.',
    time: 'منذ ساعة',
    type: 'ai',
    severity: 'medium',
    read: false
  },
  {
    id: 'mnotif-3',
    title: 'تنبيه طقس في المرتفعات الجنوبية',
    message: 'توقعات بمهطل أمطار موسمية معتدلة في أبها والشرائع، تم إخطار مرشدي المغامرات الجبلية.',
    time: 'منذ 3 ساعات',
    type: 'weather',
    severity: 'info',
    read: true
  }
];

export const demoMonthlyTouristFlowData = [
  { month: 'يناير', touristsMillions: 2.1, spendBillionSAR: 3.2, hotelOccupancy: 76 },
  { month: 'فبراير', touristsMillions: 2.4, spendBillionSAR: 3.6, hotelOccupancy: 79 },
  { month: 'مارس', touristsMillions: 2.8, spendBillionSAR: 4.2, hotelOccupancy: 83 },
  { month: 'أبريل', touristsMillions: 2.3, spendBillionSAR: 3.5, hotelOccupancy: 75 },
  { month: 'مايو', touristsMillions: 1.9, spendBillionSAR: 2.9, hotelOccupancy: 71 },
  { month: 'يونيو', touristsMillions: 2.5, spendBillionSAR: 3.8, hotelOccupancy: 81 },
  { month: 'يوليو (حالي)', touristsMillions: 3.2, spendBillionSAR: 4.9, hotelOccupancy: 88 }
];

export const demoNationalityBreakdown = [
  { country: 'دول الخليج العربي', percentage: 32, count: '8.7M' },
  { country: 'الدول الأوروبية', percentage: 26, count: '7.1M' },
  { country: 'دول أمريكا الشمالية', percentage: 18, count: '4.9M' },
  { country: 'دول شرق آسيا واليابان', percentage: 14, count: '3.8M' },
  { country: 'دول أخرى', percentage: 10, count: '2.7M' }
];

export const demoSustainabilityMetrics = {
  ecoFriendlyFacilitiesPercent: 68,
  publicTransitUsageRate: 54,
  carbonOffsetProjectsCount: 42,
  protectedDestinationsArea: '32,000 كم²',
  lessCongestedRouteDivertedPercent: 38
};
