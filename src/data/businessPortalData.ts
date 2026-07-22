export interface BusinessFacilityInfo {
  id: string;
  name: string;
  type: 'فندق' | 'منتجع' | 'مطعم' | 'مقهى' | 'شركة أنشطة' | 'منظم فعاليات';
  logo: string;
  coverImage: string;
  images: string[];
  description: string;
  city: string;
  address: string;
  coordinates: { lat: number; lng: number };
  phone: string;
  email: string;
  website: string;
  workingHours: string;
  socials: { twitter: string; instagram: string; linkedin: string };
  amenities: string[];
  verificationStatus: 'معتمدة موثقة' | 'قيد المراجعة' | 'مستندات مطلوبة';
  commercialRegistrationNo: string;
  tourismLicenseNo: string;
}

export interface FacilityBooking {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  serviceTitle: string;
  category: 'غرفة / جناح' | 'طاولة مطعم' | 'تذكرة نشاط' | 'باقة حفل';
  checkInDate: string;
  checkOutDate?: string;
  guestsCount: number;
  totalPriceSAR: number;
  status: 'جديد' | 'مؤكد' | 'مكتمل' | 'ملغى';
  paymentStatus: 'مدفوع' | 'عند الوصول' | 'مسترجع';
  notes?: string;
  createdAt: string;
}

export interface FacilityService {
  id: string;
  title: string;
  category: string;
  priceSAR: number;
  capacity: number;
  availabilityTimes: string;
  description: string;
  image: string;
  status: 'نشط' | 'متوقف مؤقتاً';
}

export interface FacilityRoom {
  id: string;
  roomType: string;
  capacityGuests: number;
  pricePerNightSAR: number;
  availableCount: number;
  totalCount: number;
  status: 'متاحة' | 'محجوزة بالكامل' | 'صيانة';
  features: string[];
  image: string;
}

export interface FacilityPromotion {
  id: string;
  title: string;
  discountPercentage: number;
  couponCode: string;
  startDate: string;
  endDate: string;
  status: 'ساري' | 'قادم' | 'منتهي';
  usageCount: number;
  description: string;
}

export interface FacilityReview {
  id: string;
  customerName: string;
  rating: number; // 1-5
  date: string;
  comment: string;
  serviceTitle: string;
  ownerReply?: string;
}

export interface FacilityStaff {
  id: string;
  name: string;
  role: 'مدير عام' | 'مدير الحجوزات' | 'موظف استقبال' | 'مدير تسويق' | 'مشرف خدمة';
  email: string;
  phone: string;
  status: 'نشط' | 'إجازة';
  joinedDate: string;
}

export interface FacilityDocument {
  id: string;
  title: string;
  type: 'سجل تجاري' | 'ترخيص وزارة السياحة' | 'شهادة الدفاع المدني' | 'ترخيص بلدية';
  fileNumber: string;
  expiryDate: string;
  status: 'ساري' | 'قريب الانتهاء' | 'مطلوب تجديد';
}

export interface BusinessNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'booking' | 'cancellation' | 'review' | 'offer' | 'ai' | 'system';
  read: boolean;
}

export const initialFacilityInfo: BusinessFacilityInfo = {
  id: 'fac-101',
  name: 'منتجع هابيتاس العلا البيئي الفاخر',
  type: 'منتجع',
  logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200',
  coverImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
  ],
  description: 'منتجع بيئي فاخر يتوسط جبال وادي العشار التاريخية بالعلا، يقدم تجربة ضيافة نابعة من الطبيعة والأحجار الأثرية مع خدمات سبا ومطاعم فاخرة.',
  city: 'العلا',
  address: 'وادي العشار، المنطقة السياحية، العلا 43511',
  coordinates: { lat: 26.61, lng: 37.92 },
  phone: '+966 14 800 9821',
  email: 'reservations@habitas-alula.sa',
  website: 'https://habitas-alula.sa',
  workingHours: 'على مدار 24 ساعة - 7 أيام في الأسبوع',
  socials: {
    twitter: '@habitas_alula',
    instagram: '@habitasalula',
    linkedin: 'habitas-alula-resort'
  },
  amenities: ['مسبح بانورامي صخري', 'مركز سبا واستشفاء', 'مطعم مرايا الصخري', 'خدمة الكونسيرج الذكي', 'إنترنت علالي السرعة', 'خدمة نقل كهربائية'],
  verificationStatus: 'معتمدة موثقة',
  commercialRegistrationNo: '1010982104',
  tourismLicenseNo: 'SA-HOTEL-2026-882'
};

export const demoFacilityBookings: FacilityBooking[] = [
  {
    id: 'BK-2026-901',
    customerName: 'سارة عبدالله الشمري',
    customerPhone: '+966 50 123 4567',
    customerEmail: 'sara.s@example.com',
    serviceTitle: 'فيلا صخرية فاخرة مع مسبح خاص',
    category: 'غرفة / جناح',
    checkInDate: '2026-08-01',
    checkOutDate: '2026-08-04',
    guestsCount: 2,
    totalPriceSAR: 7200,
    status: 'جديد',
    paymentStatus: 'مدفوع',
    notes: 'طلب عشاء نجدي رومانسي في أول ليلة.',
    createdAt: 'منذ 10 دقائق'
  },
  {
    id: 'BK-2026-902',
    customerName: 'فهد محمد العتيبي',
    customerPhone: '+966 55 987 6543',
    customerEmail: 'fahad.o@example.com',
    serviceTitle: 'جناح الكثبان الرملية العائلي',
    category: 'غرفة / جناح',
    checkInDate: '2026-08-05',
    checkOutDate: '2026-08-08',
    guestsCount: 4,
    totalPriceSAR: 10500,
    status: 'مؤكد',
    paymentStatus: 'مدفوع',
    createdAt: 'منذ ساعتين'
  },
  {
    id: 'BK-2026-903',
    customerName: 'د. خالد إبراهيم الدوسري',
    customerPhone: '+966 54 321 0987',
    customerEmail: 'khaled.d@example.com',
    serviceTitle: 'جلسة عشاء تحت النجوم بالصحراء',
    category: 'طاولة مطعم',
    checkInDate: '2026-08-02',
    guestsCount: 6,
    totalPriceSAR: 2400,
    status: 'مؤكد',
    paymentStatus: 'عند الوصول',
    createdAt: 'أمس'
  },
  {
    id: 'BK-2026-904',
    customerName: 'نورة منصور الحربي',
    customerPhone: '+966 56 444 3322',
    customerEmail: 'noura.h@example.com',
    serviceTitle: 'جلسة تدليك واستشفاء بالطين الطبيعي',
    category: 'تذكرة نشاط',
    checkInDate: '2026-07-28',
    guestsCount: 1,
    totalPriceSAR: 650,
    status: 'مكتمل',
    paymentStatus: 'مدفوع',
    createdAt: 'قبل 3 أيام'
  },
  {
    id: 'BK-2026-905',
    customerName: 'عبدالرحمن الشهري',
    customerPhone: '+966 53 111 2233',
    customerEmail: 'abdul.s@example.com',
    serviceTitle: 'فيلا صخرية فاخرة',
    category: 'غرفة / جناح',
    checkInDate: '2026-07-20',
    guestsCount: 2,
    totalPriceSAR: 4800,
    status: 'ملغى',
    paymentStatus: 'مسترجع',
    notes: 'تم الإلغاء بسبب تغير مواعيد الطيران.',
    createdAt: 'قبل أسبوع'
  }
];

export const demoFacilityServices: FacilityService[] = [
  {
    id: 'srv-1',
    title: 'فيلا صخرية فاخرة مع مسبح خاص',
    category: 'إقامة فاخرة',
    priceSAR: 2400,
    capacity: 2,
    availabilityTimes: 'تسجيل دخول 15:00 - مغادرة 12:00',
    description: 'فيلا مستقلة منحوتة بين الصخور مع مسبح دافئ خاص وإطلالة ساحرة على الصحراء.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600',
    status: 'نشط'
  },
  {
    id: 'srv-2',
    title: 'جناح الكثبان الرملية العائلي',
    category: 'إقامة فاخرة',
    priceSAR: 3500,
    capacity: 5,
    availabilityTimes: 'تسجيل دخول 15:00 - مغادرة 12:00',
    description: 'جناح ملكي مكون من غرفتي نوم وصالة واسعة مع تراس خاص لرصد النجوم.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    status: 'نشط'
  },
  {
    id: 'srv-3',
    title: 'تجربة عشاء كرم الضيافة النجدية تحت النجوم',
    category: 'طعام ومشروبات',
    priceSAR: 400,
    capacity: 30,
    availabilityTimes: 'يومياً من 19:30 حتى 23:30',
    description: 'وجبة فاخرة مكونة من 5 أطباق نجدية وعالمية مع جلسات أرضية نارية في صحراء العلا.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    status: 'نشط'
  },
  {
    id: 'srv-4',
    title: 'جلسة سبا واستشفاء بالزيوت العطرية الصحراوية',
    category: 'سبا وصحة',
    priceSAR: 650,
    capacity: 8,
    availabilityTimes: 'يومياً من 10:00 حتى 20:00',
    description: 'جلسة استرخاء وتدليك لمدة 90 دقيقة باستخدام زيوت النباتات العطرية المحلية.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    status: 'نشط'
  }
];

export const demoFacilityRooms: FacilityRoom[] = [
  {
    id: 'rm-101',
    roomType: 'فيلا صخرية مسبح خاص',
    capacityGuests: 2,
    pricePerNightSAR: 2400,
    availableCount: 3,
    totalCount: 15,
    status: 'متاحة',
    features: ['مسبح دافئ', 'تراس نجوم', 'خدمة نادل خريطة VIP', 'إفطار مجاني'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'rm-102',
    roomType: 'جناح الكثبان العائلي',
    capacityGuests: 5,
    pricePerNightSAR: 3500,
    availableCount: 1,
    totalCount: 8,
    status: 'متاحة',
    features: ['غرفتين نوم', 'صالة بانورامية', 'إفطار وعشاء مجاني'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'rm-103',
    roomType: 'كابينة الوادي البانورامية',
    capacityGuests: 2,
    pricePerNightSAR: 1800,
    availableCount: 0,
    totalCount: 12,
    status: 'محجوزة بالكامل',
    features: ['إطلالة جبلية', 'حمام مفتوح على الطبيعة'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400'
  }
];

export const demoFacilityPromotions: FacilityPromotion[] = [
  {
    id: 'prom-1',
    title: 'عرض شتاء العلا المبكر - خصم 20%',
    discountPercentage: 20,
    couponCode: 'ALULA-WINTER-20',
    startDate: '2026-08-01',
    endDate: '2026-09-30',
    status: 'ساري',
    usageCount: 42,
    description: 'خصم خاص 20% على جميع الحجوزات المبكرة لموسم الشتاء عند الإقامة 3 ليالي أو أكثر.'
  },
  {
    id: 'prom-2',
    title: 'باقة نهاية الأسبوع الرومانسية للمتزوجين',
    discountPercentage: 15,
    couponCode: 'HONEYMOON-VIP',
    startDate: '2026-07-15',
    endDate: '2026-08-15',
    status: 'ساري',
    usageCount: 28,
    description: 'شاملة إقامة ليلتين + عشاء مجاني تحت النجوم + جلسة سبا لشخصين.'
  },
  {
    id: 'prom-3',
    title: 'كوبون الاحتفال باليوم الوطني السعودي',
    discountPercentage: 25,
    couponCode: 'NATIONAL-DAY-96',
    startDate: '2026-09-15',
    endDate: '2026-09-25',
    status: 'قادم',
    usageCount: 0,
    description: 'خصم استثنائي 25% احتفالاً باليوم الوطني المجيد للمملكة.'
  }
];

export const demoFacilityReviews: FacilityReview[] = [
  {
    id: 'rev-1',
    customerName: 'الأميرة دلال آل سعود',
    rating: 5,
    date: '2026-07-18',
    comment: 'تجربة إقامة يفوق الخيال، الهدوء بين الصخور والخدمة الفاخرة والطاقم الودود يجعل هذا المنتجع وجهتنا المفضلة بالعلا.',
    serviceTitle: 'فيلا صخرية فاخرة',
    ownerReply: 'يشرفنا جداً هذا التقييم العاطر سمو الأميرة، ويسعدنا دائماً تقديم أفضل تجربة ضيافة سعودية أصيلة لكم.'
  },
  {
    id: 'rev-2',
    customerName: 'Johnathan Miller (المملكة المتحدة)',
    rating: 5,
    date: '2026-07-12',
    comment: 'Outstanding experience in AlUla. The stargazing dinner and infinity pool were truly unforgettable.',
    serviceTitle: 'عشاء تحت النجوم'
  },
  {
    id: 'rev-3',
    customerName: 'عمر التميمي',
    rating: 4,
    date: '2026-07-05',
    comment: 'المنتجع رائع جداً والنظافة ممتازة، ولكن أقترح زيادة خيارات الأطباق النباتية في قائمة الطعام.',
    serviceTitle: 'مطعم المنتجع',
    ownerReply: 'شكراً لك أستاذ عمر، تم رفع اقتراحك للفيصل الشيف تنفيذي لتطوير الخيارات النباتية فوراً.'
  }
];

export const demoFacilityStaff: FacilityStaff[] = [
  {
    id: 'stf-1',
    name: 'سعود بن سلطان الماجد',
    role: 'مدير عام',
    email: 'saud.m@habitas-alula.sa',
    phone: '+966 50 999 1111',
    status: 'نشط',
    joinedDate: '2023-01-15'
  },
  {
    id: 'stf-2',
    name: 'مها بنت فهد العتيبي',
    role: 'مدير الحجوزات',
    email: 'maha.a@habitas-alula.sa',
    phone: '+966 55 888 2222',
    status: 'نشط',
    joinedDate: '2023-05-10'
  },
  {
    id: 'stf-3',
    name: 'طارق الزهراني',
    role: 'موظف استقبال',
    email: 'tariq.z@habitas-alula.sa',
    phone: '+966 54 777 3333',
    status: 'نشط',
    joinedDate: '2024-02-01'
  },
  {
    id: 'stf-4',
    name: 'ريما القحطاني',
    role: 'مدير تسويق',
    email: 'reema.q@habitas-alula.sa',
    phone: '+966 56 666 4444',
    status: 'إجازة',
    joinedDate: '2023-11-20'
  }
];

export const demoFacilityDocuments: FacilityDocument[] = [
  {
    id: 'doc-1',
    title: 'السجل التجاري الرئيسي للمنشأة',
    type: 'سجل تجاري',
    fileNumber: '1010982104',
    expiryDate: '2028-12-31',
    status: 'ساري'
  },
  {
    id: 'doc-2',
    title: 'ترخيص تشغيل المنتجع - وزارة السياحة',
    type: 'ترخيص وزارة السياحة',
    fileNumber: 'SA-HOTEL-2026-882',
    expiryDate: '2027-06-30',
    status: 'ساري'
  },
  {
    id: 'doc-3',
    title: 'شهادة السلامة والوقاية - الدفاع المدني',
    type: 'شهادة الدفاع المدني',
    fileNumber: 'CD-ALULA-9021',
    expiryDate: '2026-09-15',
    status: 'قريب الانتهاء'
  }
];

export const demoBusinessNotifications: BusinessNotification[] = [
  {
    id: 'bnotif-1',
    title: 'حجز جديد #BK-2026-901',
    message: 'قام العميل سارة الشمري بحجز فيلا صخرية فاخرة بقيمة 7,200 ريال.',
    time: 'منذ 10 دقائق',
    type: 'booking',
    read: false
  },
  {
    id: 'bnotif-2',
    title: 'تنبيه الذكاء الاصطناعي AI',
    message: 'يتوقع ارتفاع طلبات الحجز بنسبة 35% خلال عطلةها القادمة، يفضل رفع الأسعار المتاحة بنسبة 10%.',
    time: 'منذ ساعتين',
    type: 'ai',
    read: false
  },
  {
    id: 'bnotif-3',
    title: 'تقييم جديد (5 نجوم)',
    message: 'أضافت الأميرة دلال آل سعود تقييماً رائعاً عن إقامتها بالمنتجع.',
    time: 'منذ يوم واحد',
    type: 'review',
    read: true
  }
];

export const demoMonthlyRevenueData = [
  { month: 'يناير', revenueSAR: 280000, bookingsCount: 85, occupancyPercent: 78 },
  { month: 'فبراير', revenueSAR: 310000, bookingsCount: 94, occupancyPercent: 82 },
  { month: 'مارس', revenueSAR: 350000, bookingsCount: 110, occupancyPercent: 88 },
  { month: 'أبريل', revenueSAR: 290000, bookingsCount: 88, occupancyPercent: 75 },
  { month: 'مايو', revenueSAR: 260000, bookingsCount: 78, occupancyPercent: 70 },
  { month: 'يونيو', revenueSAR: 380000, bookingsCount: 125, occupancyPercent: 91 },
  { month: 'يوليو (حالي)', revenueSAR: 420000, bookingsCount: 140, occupancyPercent: 94 }
];
