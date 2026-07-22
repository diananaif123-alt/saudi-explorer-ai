export interface InvestmentOpportunity {
  id: string;
  title: string;
  city: string;
  sector: 'فنادق' | 'منتجعات' | 'شاليهات' | 'مطاعم' | 'مقاهي' | 'متاحف' | 'مراكز ترفيهية' | 'مدن سياحية' | 'مشاريع بيئية' | 'سياحة بحرية' | 'سياحة جبلية' | 'سياحة ثقافية' | 'سياحة علاجية' | 'سياحة رياضية';
  description: string;
  investmentAmountSAR: number; // e.g. 18500000
  expectedRoiPercent: number; // e.g. 19.5
  demandLevel: 'مرتفع جداً' | 'مرتفع' | 'متوسط';
  status: 'متاحة' | 'قيد الدراسة' | 'مكتملة';
  images: string[];
  paybackPeriodYears: number; // e.g. 4.5
  targetAudience: string;
  governmentSupportIncentives: string[];
  coordinates: { lat: number; lng: number };
}

export interface CityInvestmentDetail {
  cityName: string;
  annualVisitors: string;
  topActivities: string[];
  hotelOccupancyRate: string;
  opportunitiesCount: number;
  growthIndicatorPercent: number;
  investmentDensity: 'عالية جداً' | 'عالية' | 'واعدة متوسطة';
  featuredSectors: string[];
  summary: string;
  image: string;
}

export interface InvestmentReport {
  id: string;
  title: string;
  category: 'تقرير مدينة' | 'تقرير قطاع' | 'تقرير الطلب' | 'تقرير الإشغال' | 'تقرير الفعاليات';
  date: string;
  fileSize: string;
  pagesCount: number;
  description: string;
  downloadCount: number;
}

export interface InvestorProfileData {
  name: string;
  company: string;
  country: string;
  investorType: string;
  preferredSectors: string[];
  budgetRangeSAR: string;
  savedOpportunitiesCount: number;
  downloadedReportsCount: number;
}

export const demoInvestmentOpportunities: InvestmentOpportunity[] = [
  {
    id: 'opp-1',
    title: 'منتجع صخري فاخر وفاخر بيئي وادي العشار',
    city: 'العلا',
    sector: 'منتجعات',
    description: 'مشروع إقامة فاخر مدمج مع الطبيعة الصحراوية والأحجار الأثرية بالعلا، يوفر 45 كابينة خاصة ومسبح بانورامي بين الجبال.',
    investmentAmountSAR: 35000000,
    expectedRoiPercent: 21.8,
    demandLevel: 'مرتفع جداً',
    status: 'متاحة',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 3.8,
    targetAudience: 'السياح الدوليين وكبار الشخصيات VIP',
    governmentSupportIncentives: ['تسهيلات صندوق التنمية السياحي TDF', 'إعفاءات جمركية للمواد البيئية', 'دعم الرخص الموحدة'],
    coordinates: { lat: 26.61, lng: 37.92 }
  },
  {
    id: 'opp-2',
    title: 'مجمع مطاعم ومقاهي نجدية تراثية حي الطريف',
    city: 'الدرعية',
    sector: 'مطاعم',
    description: 'تطوير وجهة طهي تراثية فاخرة تدمج النكهات السعودية الأصيلة بتصميم معماري نجدي مسجل في اليونسكو.',
    investmentAmountSAR: 18500000,
    expectedRoiPercent: 19.2,
    demandLevel: 'مرتفع جداً',
    status: 'متاحة',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 4.2,
    targetAudience: 'العائلات السعودية والسياح الأجانب',
    governmentSupportIncentives: ['دعم بوابة الاستثمار البلدي فرص', 'تسهيلات الهيئة العامة للترفيه'],
    coordinates: { lat: 24.73, lng: 46.57 }
  },
  {
    id: 'opp-3',
    title: 'نادي وغوص سياحي فاخر للشعاب المرجانية',
    city: 'جدة',
    sector: 'سياحة بحرية',
    description: 'مركز غوص عالمي ويخوت سياحية خاصة يستهدف استكشاف الشعاب المرجانية البكر على كورنيش جدة والأبحر الشمالية.',
    investmentAmountSAR: 24000000,
    expectedRoiPercent: 18.5,
    demandLevel: 'مرتفع',
    status: 'متاحة',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 4.5,
    targetAudience: 'هواة الرياضات البحرية والعائلات',
    governmentSupportIncentives: ['تسهيلات حرس الحدود والموانئ', 'تمويل صندوق التنمية الرياضي'],
    coordinates: { lat: 21.54, lng: 39.17 }
  },
  {
    id: 'opp-4',
    title: 'نزل جبلية مطلة ومطلات ضبابية السودة',
    city: 'أبها',
    sector: 'سياحة جبلية',
    description: 'قرية سياحية معلقة على قمم السودة بمرتفعات عسير، مع تلفريك خاص ومسارات لممارسة رياضة الهايكنج الجبلي.',
    investmentAmountSAR: 29000000,
    expectedRoiPercent: 17.8,
    demandLevel: 'مرتفع جداً',
    status: 'قيد الدراسة',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 5.0,
    targetAudience: 'مُحبي الطبيعة والمناخ المعتدل صيفاً',
    governmentSupportIncentives: ['مبادرة تطوير منطقة عسير (قمم وشيم)', 'دعم البنية التحتية الطرقية'],
    coordinates: { lat: 18.21, lng: 42.50 }
  },
  {
    id: 'opp-5',
    title: 'فندق بوتيك وسياحة استشفائية بالعيون الحارة',
    city: 'جازان',
    sector: 'سياحة علاجية',
    description: 'منتجع استشفائي طبيعي يستغل المياه الكبريتية والعيون الحارة بجازان مع خدمات سبا وتدليك علاجية عالمية.',
    investmentAmountSAR: 15000000,
    expectedRoiPercent: 16.4,
    demandLevel: 'متوسط',
    status: 'متاحة',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 4.8,
    targetAudience: 'كبار السن والباحثين عن الاسترخاء والعلاج الطبيعي',
    governmentSupportIncentives: ['دعم وزارة الصحة السياحي', 'أراضي استثمارية ميسرة'],
    coordinates: { lat: 16.88, lng: 42.55 }
  },
  {
    id: 'opp-6',
    title: 'متحف تفاعلي وقبة فلكية صحراوية بالنفود',
    city: 'حائل',
    sector: 'متاحف',
    description: 'مجمع متحفي وفلكي رقمي يعرض التاريخ الجيولوجي والفنون الصخرية المسجلة بجبة وحائل مع تجارب رصد النجوم.',
    investmentAmountSAR: 12000000,
    expectedRoiPercent: 15.2,
    demandLevel: 'متوسط',
    status: 'متاحة',
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 5.2,
    targetAudience: 'المجموعات المدرسية والجامعية والرحالة',
    governmentSupportIncentives: ['دعم هيئة التراث', 'منح التنشيط الثقافي'],
    coordinates: { lat: 27.52, lng: 41.69 }
  },
  {
    id: 'opp-7',
    title: 'مركز المغامرات والتزلج الصحراوي حافة العالم',
    city: 'الرياض',
    sector: 'سياحة رياضية',
    description: 'مشروع مغامرات ترفيهي يشمل سيارات الدفع الرباعي، التزلج على الرمال، والقفز المظلي بالقرب من العاصمة.',
    investmentAmountSAR: 22000000,
    expectedRoiPercent: 20.1,
    demandLevel: 'مرتفع جداً',
    status: 'متاحة',
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 3.9,
    targetAudience: 'الشباب وعشاق الإثارة والمغامرة',
    governmentSupportIncentives: ['تسهيلات موسم الرياض', 'دعم الهيئة العامة للرياضة'],
    coordinates: { lat: 24.68, lng: 46.72 }
  },
  {
    id: 'opp-8',
    title: 'قرية شاليهات بيئية مستدامة ومشاتل الورد',
    city: 'الطائف',
    sector: 'شاليهات',
    description: 'شاليهات فاخرة خشبية محاطة بمزارع الورد الطائفي ومصانع تقطير العطور التاريخية بالهدا والشفا.',
    investmentAmountSAR: 14000000,
    expectedRoiPercent: 17.5,
    demandLevel: 'مرتفع',
    status: 'متاحة',
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800'
    ],
    paybackPeriodYears: 4.4,
    targetAudience: 'العائلات في عطلات نهاية الأسبوع',
    governmentSupportIncentives: ['دعم برنامج الريف والسياحة الزراعية', 'تسهيلات أمانة الطائف'],
    coordinates: { lat: 21.27, lng: 40.41 }
  }
];

export const demoCityInvestmentDetails: Record<string, CityInvestmentDetail> = {
  'الرياض': {
    cityName: 'الرياض',
    annualVisitors: '8.5 مليون زائر سنوياً',
    topActivities: ['سياحة الأعمال والمؤتمرات', 'موسم الرياض والترفيه', 'المطاعم الفاخرة', 'المعالم التراثية (الدرعية)'],
    hotelOccupancyRate: '78%',
    opportunitiesCount: 24,
    growthIndicatorPercent: 28.4,
    investmentDensity: 'عالية جداً',
    featuredSectors: ['الفنادق الفاخرة', 'المطاعم العالمية', 'المراكز الترفيهية'],
    summary: 'عاصمة المستقبل والمركز المالي الأسرع نمواً بالمنطقة، تشهد طفرة في مشاريع الفندقة والترفيه والمؤتمرات العالمية.',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=600'
  },
  'العلا': {
    cityName: 'العلا',
    annualVisitors: '2.1 مليون زائر سنوياً',
    topActivities: ['السياحة الأثرية النبطية', 'حفلات مسرح مرايا', 'رصد النجوم والمغامرات الصحراوية', 'الفنادق البيئية'],
    hotelOccupancyRate: '84%',
    opportunitiesCount: 18,
    growthIndicatorPercent: 35.2,
    investmentDensity: 'عالية جداً',
    featuredSectors: ['المنتجعات البيئية', 'المقاهي التراثية', 'سياحة المغامرات'],
    summary: 'متحف العالم المفتوح، أعلى معدل إنفاق للزائر الفردي بالمملكة، وتغطية إعلامية دولية متواصلة.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600'
  },
  'جدة': {
    cityName: 'جدة',
    annualVisitors: '6.2 مليون زائر سنوياً',
    topActivities: ['السياحة البحرية والغوص', 'جدة التاريخية (البلد)', 'سباقات الفورمولا 1', 'المطاعم البحرية'],
    hotelOccupancyRate: '74%',
    opportunitiesCount: 20,
    growthIndicatorPercent: 22.1,
    investmentDensity: 'عالية',
    featuredSectors: ['المرسى واليخوت', 'الفنادق الشاطئية', 'المطاعم والمقاهي'],
    summary: 'عروس البحر الأحمر ودرة الحجاز، تمتاز بجاذبية دائمة للزوار المحليين والدوليين طوال العام.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600'
  },
  'أبها': {
    cityName: 'أبها',
    annualVisitors: '3.4 مليون زائر صيفاً',
    topActivities: ['السياحة الجبلية والمناخ البارد', 'تلفريك السودة', 'مهرجان صيف أبها', 'القرى التراثية (رجال ألمع)'],
    hotelOccupancyRate: '81%',
    opportunitiesCount: 15,
    growthIndicatorPercent: 26.8,
    investmentDensity: 'واعدة متوسطة',
    featuredSectors: ['النزل الجبلية', 'المطاعم المطلة', 'سياحة المغامرات والطبيعة'],
    summary: 'عاصمة السياحة الجبلية بالمملكة، تمتاز بإقبال عائلي كثيف ومبادرة تطوير منطقة عسير الاستراتيجية.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600'
  }
};

export const demoTouristGrowthData = [
  { year: '2021', visitorsMillions: 62, spendBillionSAR: 38 },
  { year: '2022', visitorsMillions: 77, spendBillionSAR: 62 },
  { year: '2023', visitorsMillions: 93, spendBillionSAR: 88 },
  { year: '2024', visitorsMillions: 108, spendBillionSAR: 112 },
  { year: '2025', visitorsMillions: 122, spendBillionSAR: 135 },
  { year: '2026 (متوقع)', visitorsMillions: 138, spendBillionSAR: 160 }
];

export const demoSectorDemandData = [
  { sector: 'الفنادق والمنتجعات', demandIndex: 92, count: 140 },
  { sector: 'المطاعم والكافيهات التراثية', demandIndex: 88, count: 210 },
  { sector: 'المراكز الترفيهية والمغامرات', demandIndex: 84, count: 95 },
  { sector: 'السياحة البحرية واليخوت', demandIndex: 79, count: 60 },
  { sector: 'المتاحف والتراث الثقافي', demandIndex: 72, count: 45 }
];

export const demoTopCitiesData = [
  { city: 'الرياض', sharePercent: 32, label: 'الرياض (32%)' },
  { city: 'العلا', sharePercent: 24, label: 'العلا (24%)' },
  { city: 'جدة', sharePercent: 20, label: 'جدة (20%)' },
  { city: 'أبها وعسير', sharePercent: 14, label: 'أبها (14%)' },
  { city: 'باقي المناطق', sharePercent: 10, label: 'المناطق الأخرى (10%)' }
];

export const demoNationalitiesData = [
  { region: 'دول مجلس التعاون الخليجي', percent: 38 },
  { region: 'أوروبا وأمريكا الشمالية', percent: 28 },
  { region: 'دول شرق آسيا والدول الإسلامية', percent: 22 },
  { region: 'دول أخرى', percent: 12 }
];

export const demoInvestmentReports: InvestmentReport[] = [
  {
    id: 'rep-1',
    title: 'التقرير الاستثماري السنوي - قطاع الضيافة والفنادق بالعلا 2026',
    category: 'تقرير مدينة',
    date: '15 يوليو 2026',
    fileSize: '4.8 MB',
    pagesCount: 38,
    description: 'تحليل شامل لمعدلات الإشغال، العائد على الغرفة المتاحة RevPAR، وتوقعات نمو التدفق السياحي بالعلا.',
    downloadCount: 1420
  },
  {
    id: 'rep-2',
    title: 'دراسة جدوى تسويقية - المجمعات الترفيهية والمطاعم بالرياض',
    category: 'تقرير قطاع',
    date: '02 يوليو 2026',
    fileSize: '6.2 MB',
    pagesCount: 52,
    description: 'مؤشرات سلوك المستهلك وقدرة الإنفاق العائلية في مواسم الترفيه والمهرجانات الحية بالعاصمة.',
    downloadCount: 980
  },
  {
    id: 'rep-3',
    title: 'تقرير الفرص الواعدة في السياحة البحرية والغوص بالبحر الأحمر',
    category: 'تقرير الطلب',
    date: '20 يونيو 2026',
    fileSize: '3.5 MB',
    pagesCount: 29,
    description: 'فرص الاستثمار في مراسي اليخوت، نوادي الغوص، والأمتار الشاطئية في جدة ومشروع البحر الأحمر.',
    downloadCount: 850
  },
  {
    id: 'rep-4',
    title: 'مؤشر إشغال الفنادق والنزل الجبلية بمنطقة عسير صيف 2026',
    category: 'تقرير الإشغال',
    date: '10 يونيو 2026',
    fileSize: '2.9 MB',
    pagesCount: 24,
    description: 'قراءة إحصائية لارتفاع الطلب السكني والسياحي في أبها والسودة خلال أوقات الذروة الصيفية.',
    downloadCount: 670
  }
];

export const demoInvestorNotifications = [
  {
    id: 'notif-inv-1',
    title: 'طرح فرصة استثمارية جديدة بالعلا',
    message: 'تم إضافة مشروع منتجع صخري فاخر بوادي العشار بعائد متوقع 21.8%.',
    time: 'منذ ساعتين',
    type: 'opportunity',
    read: false
  },
  {
    id: 'notif-inv-2',
    title: 'ارتفاع مؤشر الطلب السياحي بالرياض (+18%)',
    message: 'سجلت العاصمة ارتفاعاً ملحوظاً في طلبات حجوزات الفنادق للموسم القادم.',
    time: 'منذ يوم واحد',
    type: 'analytics',
    read: false
  },
  {
    id: 'notif-inv-3',
    title: 'تحديث تقرير قطاع الضيافة 2026',
    message: 'يتوفر الآن تقرير معدلات الإشغال السنوي لمنطقة عسير الجبلية للتحميل.',
    time: 'منذ 3 أيام',
    type: 'report',
    read: true
  }
];

export const initialInvestorProfile: InvestorProfileData = {
  name: 'صالح بن عبدالعزيز الراجحي',
  company: 'شركة الراجحي للتقنية والاستثمار السياحي',
  country: 'المملكة العربية السعودية',
  investorType: 'مستثمر مؤسسي VIP',
  preferredSectors: ['الفنادق والمنتجعات', 'المطاعم الفاخرة', 'السياحة البحرية'],
  budgetRangeSAR: '10,000,000 - 50,000,000 ريال',
  savedOpportunitiesCount: 3,
  downloadedReportsCount: 8
};
