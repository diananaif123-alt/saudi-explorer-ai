export interface TourGuideProfile {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  city: string;
  languages: string[];
  experienceYears: number;
  specialties: string[];
  certificates: string[];
  phone: string;
  email: string;
  rating: number;
  totalReviewsCount: number;
  licenseNumber: string;
  licenseStatus: 'مرخص معتمد' | 'قيد التجديد';
  availabilitySchedule: string;
}

export interface GuidedTour {
  id: string;
  title: string;
  city: string;
  category: 'تراث وثقافة' | 'مغامرة وصحراء' | 'سياحة بحرية' | 'سياحة طعام' | 'طبيعة وجبال';
  priceSAR: number;
  durationHours: number;
  maxSeats: number;
  startPoint: string;
  endPoint: string;
  description: string;
  includedItems: string[];
  images: string[];
  status: 'نشطة' | 'مكتملة العدد' | 'متوقفة مؤقتاً';
  departureTime: string;
}

export interface TourGuideBooking {
  id: string;
  tourId: string;
  tourTitle: string;
  touristName: string;
  touristPhone: string;
  touristNationality: string;
  bookingDate: string;
  tourDate: string;
  guestsCount: number;
  totalPriceSAR: number;
  status: 'طلب جديد' | 'مؤكد' | 'مكتمل' | 'ملغى';
  meetingPoint: string;
  paymentStatus: 'مدفوع بالكامل' | 'عند الالتقاء';
  notes?: string;
}

export interface TouristChatMessage {
  id: string;
  senderName: string;
  senderAvatar: string;
  message: string;
  time: string;
  isGuide: boolean;
  meetingPointLocation?: string;
}

export interface TourReview {
  id: string;
  touristName: string;
  touristCountry: string;
  rating: number; // 1-5
  date: string;
  tourTitle: string;
  comment: string;
  guideReply?: string;
}

export interface TourGuideDocument {
  id: string;
  title: string;
  type: 'رخصة مرشد سياحي' | 'شهادة إيعافات أولية' | 'هوية وطنية' | 'شهادة لغات';
  docNumber: string;
  expiryDate: string;
  status: 'سارية المفعول' | 'مطلوب تحديث';
}

export interface TourGuideNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'booking' | 'message' | 'review' | 'reminder' | 'ai';
  read: boolean;
}

export const initialGuideProfile: TourGuideProfile = {
  id: 'guide-701',
  name: 'المهندس ياسر بن سليمان البلوي',
  title: 'مرشد سياحي معتمد وخبير الآثار والنقوش الصحراوية',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  bio: 'مرشد سياحي سعودي مرخص متخصص في جولات العلا، الدرعية، والآثار النبطية. خبرة أكثر من 8 سنوات في قراءة النقوش المسندية وتوجيه الوفود الدولية والـ VIP.',
  city: 'العلا والرياض',
  languages: ['العربية (الأم)', 'الإنجليزية (طلاقة)', 'الفرنسية (محادثة)'],
  experienceYears: 8,
  specialties: ['النقوش والتاريخ النبطي', 'استكشاف الأودية الجبلية', 'رصد النجوم والتخييم', 'سياحة الأطعمة التراثية'],
  certificates: [
    'رخصة مرشد سياحي عام - وزارة السياحة',
    'شهادة الإسعافات الأولية والسلامة الجبلية WFA',
    'شهادة التميز في الضيافة السعودية'
  ],
  phone: '+966 50 443 8899',
  email: 'yasser.albalawi@sauditours.sa',
  rating: 4.9,
  totalReviewsCount: 128,
  licenseNumber: 'TG-SA-2026-4409',
  licenseStatus: 'مرخص معتمد',
  availabilitySchedule: 'يومياً من الساعة 07:00 صباحاً حتى 10:00 مساءً'
};

export const demoGuidedTours: GuidedTour[] = [
  {
    id: 'tour-101',
    title: 'رحلة أسرار الحجر والمقابر النبطية الخاصة',
    city: 'العلا',
    category: 'تراث وثقافة',
    priceSAR: 450,
    durationHours: 4,
    maxSeats: 12,
    startPoint: 'مركز زوار موقع الحجر التاريخي',
    endPoint: 'مسرح مرايا العالمي',
    description: 'جولة استكشافية متعمقة لمقابر الحجر (مدائن صالح) تشمل قراءة النقوش النبطية القديمة وزيارة جبل إثلب والديوان مع ضيافة القهوة النجدية.',
    includedItems: ['مرخص معتمد', 'مواصلات مكيفة داخل الموقع', 'ضيافة القهوة والتمر الطائفي', 'كتيب الخرائط الأثرية'],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
    ],
    status: 'نشطة',
    departureTime: '08:00 صباحاً يومياً'
  },
  {
    id: 'tour-102',
    title: 'مسار الغروب ورصد النجوم في جبل الفيل',
    city: 'العلا',
    category: 'مغامرة وصحراء',
    priceSAR: 350,
    durationHours: 3,
    maxSeats: 15,
    startPoint: 'مواقف جبل الفيل',
    endPoint: 'مواقف جبل الفيل',
    description: 'مشاهدة غروب الشمس الخلاب فوق صخرة الفيل يليها جلسة رصد النجوم بالتلسكوب وشرب الشاي على الحطب مع شرح قصص الفلك العربية.',
    includedItems: ['تلسكوب فلكي محترف', 'جلسة عربية حول النار', 'وجبة خفيفة ومشروبات داكنة'],
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800'
    ],
    status: 'نشطة',
    departureTime: '05:30 مساءً'
  },
  {
    id: 'tour-103',
    title: 'جولة حي الطريف وقصر Salwa في الدرعية التاريخية',
    city: 'الرياض',
    category: 'تراث وثقافة',
    priceSAR: 280,
    durationHours: 3,
    maxSeats: 20,
    startPoint: 'بوابة الطريف الرئيسية',
    endPoint: 'مطل البجيري',
    description: 'جولة مشاة ممتعة عبر الأزقة النجدية الطينية التاريخية، شرح تأسيس الدولة السعودية الأولى وقصر سلوى وبيت المال.',
    includedItems: ['تذاكر دخول حي الطريف', 'سماعات ترجمة فورية للوفود', 'مرشد نجدي مرخص'],
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
    ],
    status: 'نشطة',
    departureTime: '04:00 مساءً'
  },
  {
    id: 'tour-104',
    title: 'مسار الهايكنج في وادي ديسة وتبوك',
    city: 'تبوك',
    category: 'طبيعة وجبال',
    priceSAR: 500,
    durationHours: 6,
    maxSeats: 10,
    startPoint: 'قرية الديسة',
    endPoint: 'قرية الديسة',
    description: 'مغامرة مشي بين العيون العذبة وأشجار النخيل الشاهقة المحاطة بأعمدة الصخور الحمراء العملاقة مع غداء تراثي طازج.',
    includedItems: ['سيارات دفع رباعي 4x4', 'وجبة غداء تراثية', 'عدسة تصوير احترافية للصور'],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800'
    ],
    status: 'مكتملة العدد',
    departureTime: '07:00 صباحاً'
  }
];

export const demoTourGuideBookings: TourGuideBooking[] = [
  {
    id: 'TG-BK-801',
    tourId: 'tour-101',
    tourTitle: 'رحلة أسرار الحجر والمقابر النبطية الخاصة',
    touristName: 'د. لورا سميث (Laura Smith)',
    touristPhone: '+1 415 555 0199',
    touristNationality: 'الولايات المتحدة الأمريكية',
    bookingDate: '2026-07-20',
    tourDate: '2026-08-02',
    guestsCount: 4,
    totalPriceSAR: 1800,
    status: 'طلب جديد',
    meetingPoint: 'مركز زوار الحجر - البوابة رقم 2',
    paymentStatus: 'مدفوع بالكامل',
    notes: 'الوفد يضم باحث أثري مهتم بالنقوش النبطية.'
  },
  {
    id: 'TG-BK-802',
    tourId: 'tour-102',
    tourTitle: 'مسار الغروب ورصد النجوم في جبل الفيل',
    touristName: 'الأستاذ منصور العتيبي',
    touristPhone: '+966 50 111 2233',
    touristNationality: 'المملكة العربية السعودية',
    bookingDate: '2026-07-21',
    tourDate: '2026-08-03',
    guestsCount: 5,
    totalPriceSAR: 1750,
    status: 'مؤكد',
    meetingPoint: 'مواقف صخرة الفيل بالعلا',
    paymentStatus: 'مدفوع بالكامل',
    notes: 'عائلة مع أطفال يفضلون التحدث بالعربية.'
  },
  {
    id: 'TG-BK-803',
    tourId: 'tour-103',
    tourTitle: 'جولة حي الطريف وقصر Salwa في الدرعية التاريخية',
    touristName: 'Hiroshi Tanaka',
    touristPhone: '+81 90 1234 5678',
    touristNationality: 'اليابان',
    bookingDate: '2026-07-15',
    tourDate: '2026-07-28',
    guestsCount: 2,
    totalPriceSAR: 560,
    status: 'مكتمل',
    meetingPoint: 'بوابة مدخل البجيري بالدرعية',
    paymentStatus: 'مدفوع بالكامل'
  },
  {
    id: 'TG-BK-804',
    tourId: 'tour-101',
    tourTitle: 'رحلة أسرار الحجر والمقابر النبطية الخاصة',
    touristName: 'سلطان بن خالد آل سعيد',
    touristPhone: '+968 9123 4567',
    touristNationality: 'سلطنة عمان',
    bookingDate: '2026-07-10',
    tourDate: '2026-07-18',
    guestsCount: 6,
    totalPriceSAR: 2700,
    status: 'مكتمل',
    meetingPoint: 'مركز زوار مدائن صالح',
    paymentStatus: 'مدفوع بالكامل'
  }
];

export const demoTouristChatMessages: TouristChatMessage[] = [
  {
    id: 'msg-1',
    senderName: 'د. لورا سميث (Laura Smith)',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    message: 'مرحباً أستاذ ياسر، نحن متحمسون جداً لجولة الحجر يوم 2 أغسطس! هل يلزم ارتداء أحذية رياضية خاصة؟',
    time: '10:30 ص',
    isGuide: false
  },
  {
    id: 'msg-2',
    senderName: 'المرشد ياسر البلوي',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    message: 'أهلاً بكِ دكتورة لورا! نعم أنصح بأحذية مريحة للمشي في المسارات الرملية، وسأوفر لكم مظلات شمسية ومياه باردة.',
    time: '10:32 ص',
    isGuide: true,
    meetingPointLocation: 'مركز زوار موقع الحجر - إحداثيات (26.61, 37.92)'
  },
  {
    id: 'msg-3',
    senderName: 'د. لورا سميث (Laura Smith)',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    message: 'ممتاز جداً! شكراً جزيلاً للاهتمام ونلتقي قريباً.',
    time: '10:35 ص',
    isGuide: false
  }
];

export const demoTourReviews: TourReview[] = [
  {
    id: 'rev-guide-1',
    touristName: 'السفير ماركوس ويبر',
    touristCountry: 'ألمانيا',
    rating: 5,
    date: '2026-07-19',
    tourTitle: 'رحلة أسرار الحجر والمقابر النبطية',
    comment: 'ياسر مرشد استثنائي بكل ما للكلمة من معنى! تمكنه من قراءة النصوص النبطية وشرح التاريخ بطريقة مشوقة جعل الجولة أفضل تجربة في زيارتنا للسعودية.',
    guideReply: 'شكراً جزيلاً لك سعادة السفير، يسعدني جداً أن التراث السعودي النبطي ترك انطباعاً راقياً لدى حضراتكم.'
  },
  {
    id: 'rev-guide-2',
    touristName: 'عبدالعزيز السبيعي',
    touristCountry: 'الكويت',
    rating: 5,
    date: '2026-07-12',
    comment: 'جولة رصد النجوم مع الكابتن ياسر كانت رائعة وأطفالي استمتعوا جداً بالتلسكوب وشرح النجوم والتخييم.',
    tourTitle: 'مسار الغروب ورصد النجوم',
    guideReply: 'أهلاً بأهلنا من الكويت العزيزة، سعيد جداً باستمتاع الأطفال بالتجربة الفلكية الصحراوية.'
  },
  {
    id: 'rev-guide-3',
    touristName: 'Sarah Jenkins',
    touristCountry: 'المملكة المتحدة',
    rating: 4,
    date: '2026-07-02',
    comment: 'Very informative tour in Diriyah. Yasser has great knowledge of Saudi heritage and culture.',
    tourTitle: 'جولة حي الطريف وقصر Salwa'
  }
];

export const demoGuideDocuments: TourGuideDocument[] = [
  {
    id: 'gdoc-1',
    title: 'رخصة مرشد سياحي عام - وزارة السياحة',
    type: 'رخصة مرشد سياحي',
    docNumber: 'TG-SA-2026-4409',
    expiryDate: '2028-10-15',
    status: 'سارية المفعول'
  },
  {
    id: 'gdoc-2',
    title: 'شهادة الإسعافات الأولية والسلامة الجبلية WFA',
    type: 'شهادة إيعافات أولية',
    docNumber: 'WFA-REDCRESCENT-908',
    expiryDate: '2027-05-20',
    status: 'سارية المفعول'
  },
  {
    id: 'gdoc-3',
    title: 'شهادة الكفاءة اللغوية باللغة الإنجليزية للوفود VIP',
    type: 'شهادة لغات',
    docNumber: 'LANG-ENG-C1-88',
    expiryDate: '2029-01-01',
    status: 'سارية المفعول'
  }
];

export const demoGuideNotifications: TourGuideNotification[] = [
  {
    id: 'gnotif-1',
    title: 'طلب حجز جديد من د. لورا سميث',
    message: 'تم استلام طلب حجز لـ 4 أشخاص لجولة أسرار الحجر النبطية بتاريخ 2 أغسطس.',
    time: 'منذ 15 دقيقة',
    type: 'booking',
    read: false
  },
  {
    id: 'gnotif-2',
    title: 'تنبيه ذكي من AI Tour Planner',
    message: 'يتوقع نمو الإقبال على جولات رصد النجوم بالعلا بنسبة 40% هذا الأسبوع. نقترح إضافة جولة ليلية ثانية.',
    time: 'منذ ساعتين',
    type: 'ai',
    read: false
  },
  {
    id: 'gnotif-3',
    title: 'تذكير بموعد الجولة القادمة',
    message: 'لديك جولة "حي الطريف بالدرعية" غداً الساعة 04:00 مساءً مع 2 زوار يابانيين.',
    time: 'منذ 5 ساعات',
    type: 'reminder',
    read: true
  }
];

export const demoMonthlyGuideAnalytics = [
  { month: 'يناير', toursCount: 14, touristsCount: 120, earningsSAR: 18500 },
  { month: 'فبراير', toursCount: 18, touristsCount: 155, earningsSAR: 24000 },
  { month: 'مارس', toursCount: 22, touristsCount: 190, earningsSAR: 29800 },
  { month: 'أبريل', toursCount: 16, touristsCount: 130, earningsSAR: 19500 },
  { month: 'مايو', toursCount: 12, touristsCount: 95, earningsSAR: 14200 },
  { month: 'يونيو', monthName: 'يونيو', toursCount: 20, touristsCount: 175, earningsSAR: 27500 },
  { month: 'يوليو (حالي)', toursCount: 25, touristsCount: 210, earningsSAR: 34200 }
];
