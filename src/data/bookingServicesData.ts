export interface HotelBookingItem {
  id: string;
  name: string;
  category: 'فندق 5 نجوم' | 'منتجع صحراوي' | 'شقق فندقية فاخرة' | 'بوتيك تراثي';
  city: 'الرياض' | 'جدة' | 'العلا' | 'أبها' | 'الدرعية';
  stars: number;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  image: string;
  location: string;
  description: string;
  amenities: string[];
  roomTypes: { type: string; price: number; capacity: string }[];
  cancellationPolicy: string;
  checkInTime: string;
  checkOutTime: string;
  familyFriendly: boolean;
  luxury: boolean;
}

export interface RestaurantBookingItem {
  id: string;
  name: string;
  cuisine: 'نجدي أصيل' | 'حجازي وعالمي' | 'ماكولات بحرية' | 'فاخر معاصر' | 'مقهى ومخبز تراثي';
  city: 'الرياض' | 'جدة' | 'العلا' | 'أبها' | 'الدرعية';
  rating: number;
  reviewsCount: number;
  priceRange: 'SR (اقتصادي)' | 'SRR (متوسط)' | 'SRRR (فاخر)';
  averageCostPerPerson: number;
  image: string;
  location: string;
  openingHours: string;
  menuHighlights: { name: string; price: number; desc: string }[];
  familySection: boolean;
  outdoorSeating: boolean;
}

export interface EventBookingItem {
  id: string;
  title: string;
  category: 'مهرجان ثقافي' | 'حفل موسيقي' | 'عرض ضوئي' | 'بطولة رياضية' | 'معرض تراثي';
  city: 'الرياض' | 'جدة' | 'العلا' | 'أبها' | 'الدرعية';
  startDate: string;
  time: string;
  location: string;
  price: number;
  rating: number;
  availableSeats: number;
  image: string;
  promoVideoNote?: string;
  description: string;
}

export interface ActivityBookingItem {
  id: string;
  title: string;
  type: 'رحلة بحرية' | 'سفاري وتخييم' | 'مغامرة وتسلق' | 'غوص مرجاني' | 'ثقافي وعائلي';
  city: 'الرياض' | 'جدة' | 'العلا' | 'أبها' | 'الدرعية';
  durationHours: string;
  groupSize: string;
  pricePerPerson: number;
  rating: number;
  image: string;
  includedServices: string[];
  kidFriendly: boolean;
}

export interface CarRentalItem {
  id: string;
  model: string;
  brand: string;
  category: 'دفع رباعي (SUV)' | 'سيدان فاخرة' | 'كهربائية ذكية' | 'عائلية فسيحة';
  dailyPrice: number;
  seats: number;
  transmission: 'أوتوماتيك ذكي' | 'أوتوماتيك عادي';
  fuelType: 'بنزين ممتاز' | 'كهرباء بالكامل' | 'هجين';
  image: string;
  companyName: string;
  unlimitedKm: boolean;
}

export interface TransportationItem {
  id: string;
  mode: 'قطار الحرمين السريع' | 'حافلة سياحية فاخرة' | 'سيارة VIP مع سائق' | 'تكسي ذكي (أوبر/كريم)' | 'مترو العاصمة';
  route: string;
  estimatedTime: string;
  cost: string;
  serviceStatus: 'نشط ويعمل بانتظام' | 'مزدحم قليلاً' | 'حجز مسبق مطلوب';
  image: string;
  frequency: string;
}

export interface TourGuideItem {
  id: string;
  name: string;
  city: 'الرياض' | 'جدة' | 'العلا' | 'أبها' | 'الدرعية';
  languages: string[];
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  image: string;
  specialties: string[];
  bio: string;
  certifiedByMinistry: boolean;
}

export interface ReviewItem {
  id: string;
  userName: string;
  userAvatar: string;
  targetName: string;
  targetCategory: string;
  rating: number;
  date: string;
  comment: string;
  verifiedBooking: boolean;
}

export const demoHotelsList: HotelBookingItem[] = [
  {
    id: 'hotel-1',
    name: 'منتجع هابيتاس العلا البيئي الفاخر',
    category: 'منتجع صحراوي',
    city: 'العلا',
    stars: 5,
    rating: 4.9,
    reviewsCount: 342,
    pricePerNight: 2400,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    location: 'وادي أشار، العلا',
    description: 'إقامة مستدامة وفاخرة وسط التشكيلات الصخرية المذهلة في وادي أشار بالعلا مع مسبح بانورامي وخدمات سبا صحراوية.',
    amenities: ['مسبح infinity', 'سبا صحراوي', 'مطعم تاما الفاخر', 'واي فاي مجاني', 'خدمة توصيل بالغولف', 'يوغا شروق الشمس'],
    roomTypes: [
      { type: 'فيلا جبلية فاخرة', price: 2400, capacity: 'شخصين' },
      { type: 'فيلا الواحة مع مسبح خاص', price: 3800, capacity: '4 أشخاص' }
    ],
    cancellationPolicy: 'إلغاء مجاني حتى 48 ساعة قبل موعد الدخول',
    checkInTime: '03:00 مساءً',
    checkOutTime: '12:00 ظهراً',
    familyFriendly: true,
    luxury: true
  },
  {
    id: 'hotel-2',
    name: 'فندق فيرمونت رملة الرياض',
    category: 'فندق 5 نجوم',
    city: 'الرياض',
    stars: 5,
    rating: 4.8,
    reviewsCount: 512,
    pricePerNight: 1250,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600',
    location: 'طريق الصحافة، الرياض',
    description: 'تحفة معمارية وفاخرة تتوسط العاصمة الرياض بالقرب من بوليفارد سيتي ومركز الملك عبدالله المالي.',
    amenities: ['مركز لياقة ذكي', 'أربعة مطاعم عالمية', 'مسبح دافئ', 'خدمة الغرف 24/7', 'مواقف VIP مجانية'],
    roomTypes: [
      { type: 'جناح تنفيذي ملكي', price: 1250, capacity: 'شخصين' },
      { type: 'شقة فندقية غرفتين نوم', price: 2100, capacity: '4 أشخاص' }
    ],
    cancellationPolicy: 'إلغاء مجاني حتى 24 ساعة قبل الدخول',
    checkInTime: '02:00 مساءً',
    checkOutTime: '12:00 ظهراً',
    familyFriendly: true,
    luxury: true
  },
  {
    id: 'hotel-3',
    name: 'فندق وأجنحة نارسيس جدة الحمراء',
    category: 'فندق 5 نجوم',
    city: 'جدة',
    stars: 5,
    rating: 4.7,
    reviewsCount: 420,
    pricePerNight: 980,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600',
    location: 'الكورنيش الأوسط، جدة',
    description: 'إطلالة مباشرة على نافورة الملك فهد والبحر الأحمر، بتصميم ملكي فاخر وخدمات ضيافة حجازية أصيلة.',
    amenities: ['إطلالة بحرية', 'سبا ملكي للرجال والنساء', 'مطعم المأكولات البحرية', 'قاعات اجتماعات'],
    roomTypes: [
      { type: 'غرفة ديلوكس مطلة على البحر', price: 980, capacity: 'شخصين' },
      { type: 'جناح نارسيس الملكي', price: 1850, capacity: 'شخصين' }
    ],
    cancellationPolicy: 'إلغاء مرن',
    checkInTime: '03:00 مساءً',
    checkOutTime: '01:00 ظهرًا',
    familyFriendly: true,
    luxury: true
  },
  {
    id: 'hotel-4',
    name: 'منتجع المطل والجبال التراثي بأبها',
    category: 'بوتيك تراثي',
    city: 'أبها',
    stars: 4,
    rating: 4.8,
    reviewsCount: 210,
    pricePerNight: 650,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600',
    location: 'مرتفعات السودة، أبها',
    description: 'أجواء جبلية باردة فوق الضباب مع أجنحة مبنية بالطراز العسيري المعماري الجذاب.',
    amenities: ['دفايات حطب جبلية', 'جلسات خارجية بانورامية', 'إفطار عسيري مجاني', 'مقهى السحاب'],
    roomTypes: [
      { type: 'جناح الضباب العسيري', price: 650, capacity: 'شخصين' }
    ],
    cancellationPolicy: 'إلغاء مجاني حتى يوم الوصول',
    checkInTime: '02:00 مساءً',
    checkOutTime: '12:00 ظهراً',
    familyFriendly: true,
    luxury: false
  }
];

export const demoRestaurantsList: RestaurantBookingItem[] = [
  {
    id: 'rest-1',
    name: 'مطعم سهيل النبيل النجدي',
    cuisine: 'نجدي أصيل',
    city: 'الرياض',
    rating: 4.9,
    reviewsCount: 890,
    priceRange: 'SRRR (فاخر)',
    averageCostPerPerson: 220,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    location: 'طريق الدائري الشمالي، الرياض',
    openingHours: '01:00 م - 12:30 ص',
    menuHighlights: [
      { name: 'جريش المزرعة المطهو ببطء', price: 65, desc: 'جريش ناعم ببهارات نجدية وسمن بلدي' },
      { name: 'كبيبة حائل ولحم نعيمي', price: 140, desc: 'قطع لحم طازجة مع أرز بخلطة سهيل الخاصة' },
      { name: 'حنيني بالتمور الفاخرة والزبادي', price: 45, desc: 'حلى نجدي تقليدي يقدم دافئاً' }
    ],
    familySection: true,
    outdoorSeating: true
  },
  {
    id: 'rest-2',
    name: 'مطعم السلسلة الشاطئي (المطعم العائم)',
    cuisine: 'ماكولات بحرية',
    city: 'جدة',
    rating: 4.8,
    reviewsCount: 640,
    priceRange: 'SRR (متوسط)',
    averageCostPerPerson: 160,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
    location: 'كورنيش جدة الشمالي',
    openingHours: '01:00 م - 01:30 ص',
    menuHighlights: [
      { name: 'سمك ناجل مشوي على الفحم', price: 120, desc: 'طازج يومياً من صيادي البحر الأحمر' },
      { name: 'جمبري بالثوم والليمون الحجازي', price: 85, desc: 'يقدم مع أرز الصيادية الأصيل' }
    ],
    familySection: true,
    outdoorSeating: true
  },
  {
    id: 'rest-3',
    name: 'مقهى ومطعم مرايا الواحة',
    cuisine: 'فاخر معاصر',
    city: 'العلا',
    rating: 4.9,
    reviewsCount: 290,
    priceRange: 'SRRR (فاخر)',
    averageCostPerPerson: 320,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=600',
    location: 'وادي أشار، بالقرب من مسرح مرايا',
    openingHours: '08:00 ص - 11:00 م',
    menuHighlights: [
      { name: 'قهوة العلا المختصة بتمر البرني', price: 35, desc: 'بن أثيوبي محموص خصيصاً لمقهى مرايا' },
      { name: 'وجبة الإفطار الواحي الفاخر', price: 110, desc: 'حمضيات العلا وأجبان محلية مع خبز التنور' }
    ],
    familySection: true,
    outdoorSeating: true
  }
];

export const demoEventsList: EventBookingItem[] = [
  {
    id: 'event-1',
    title: 'مهرجان شتاء طنطورة بالعلا',
    category: 'مهرجان ثقافي',
    city: 'العلا',
    startDate: '15 ديسمبر 2026',
    time: '06:00 م - 11:00 م',
    location: 'البلدة القديمة ومسرح مرايا، العلا',
    price: 150,
    rating: 4.9,
    availableSeats: 120,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600',
    promoVideoNote: 'شاهد العرض الترويجي المسجل للفعالية العطرية والموسيقية',
    description: 'احتفالية بالثقافة والفنون والطهي في قلب العلا التاريخية مع أمسيات فنية وعروض ضوئية ساحرة.'
  },
  {
    id: 'event-2',
    title: 'موسم الرياض — ليلة النجوم العالمية',
    category: 'حفل موسيقي',
    city: 'الرياض',
    startDate: '20 نوفمبر 2026',
    time: '08:30 م - 01:00 ص',
    location: 'محمد عبده أرينا، بوليفارد سيتي',
    price: 250,
    rating: 4.8,
    availableSeats: 450,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600',
    promoVideoNote: 'مؤثرات بصريات ليزر وتقنيات صوتية هولوغرام',
    description: 'حفل استثنائي يجمع بين الموسيقى الشرقية والسمفونيات العالمية على مسرح محمد عبده.'
  }
];

export const demoActivitiesList: ActivityBookingItem[] = [
  {
    id: 'act-1',
    title: 'رحلة استكشاف الشعاب المرجانية بـ جدة (Diving Experience)',
    type: 'غوص مرجاني',
    city: 'جدة',
    durationHours: '4 ساعات',
    groupSize: 'من 2 إلى 8 أشخاص',
    pricePerPerson: 380,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
    includedServices: ['عدات الغوص الكاملة', 'مدرب غوص معتمد PADI', 'وجبة خفيفة ومشروبات', 'تصوير تحت الماء 4K'],
    kidFriendly: false
  },
  {
    id: 'act-2',
    title: 'سفاري ومراقبة النجوم في صحراء العلا (Desert Stargazing)',
    type: 'سفاري وتخييم',
    city: 'العلا',
    durationHours: '5 ساعات',
    groupSize: 'من 1 إلى 15 شخص',
    pricePerPerson: 290,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600',
    includedServices: ['سيارات دفع رباعي 4x4', 'تلسكوبات فلكية متطورة', 'جلسة شاي وقهوة حطب', 'عشاء مشويات بدوي'],
    kidFriendly: true
  }
];

export const demoCarRentalsList: CarRentalItem[] = [
  {
    id: 'car-1',
    model: 'لاند كروزر VXR 2026',
    brand: 'تويوتا',
    category: 'دفع رباعي (SUV)',
    dailyPrice: 650,
    seats: 7,
    transmission: 'أوتوماتيك ذكي',
    fuelType: 'بنزين ممتاز',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    companyName: 'ذيب لتأجير السيارات',
    unlimitedKm: true
  },
  {
    id: 'car-2',
    model: 'لوسيد إير الكهربائية (Lucid Air)',
    brand: 'لوسيد السعودية',
    category: 'كهربائية ذكية',
    dailyPrice: 1200,
    seats: 5,
    transmission: 'أوتوماتيك ذكي',
    fuelType: 'كهرباء بالكامل',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600',
    companyName: 'المفتاح للسفريات الفاخرة',
    unlimitedKm: true
  }
];

export const demoTransportationList: TransportationItem[] = [
  {
    id: 'trans-1',
    mode: 'قطار الحرمين السريع',
    route: 'مطار جدة (JED) ⬅️ مكة المكرمة / المدينة المنورة',
    estimatedTime: '35 دقيقة لـ مكة / ساعتان لـ المدينة',
    cost: '75 - 150 ريال',
    serviceStatus: 'نشط ويعمل بانتظام',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&q=80&w=600',
    frequency: 'قطار كل 30 دقيقة'
  },
  {
    id: 'trans-2',
    mode: 'سيارة VIP مع سائق',
    route: 'جميع مدن المملكة (تنقلات المطار والجولات)',
    estimatedTime: 'حسب الطلب',
    cost: '350 ريال / 4 ساعات',
    serviceStatus: 'نشط ويعمل بانتظام',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600',
    frequency: 'خدمة حجز فورية 24/7'
  }
];

export const demoTourGuidesList: TourGuideItem[] = [
  {
    id: 'guide-1',
    name: 'سارة العتيبي',
    city: 'العلا',
    languages: ['العربية', 'الإنجليزية', 'الفرنسية'],
    experienceYears: 7,
    rating: 4.9,
    reviewsCount: 184,
    hourlyRate: 150,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    specialties: ['الآثار النبطية والحِجر', 'تاريخ العلا القديم', 'تصوير الطبيعة'],
    bio: 'مرشدة سياحية معتمدة من وزارة السياحة متخصصة في تاريخ حضارة الأنباط والواحات الأثرية.',
    certifiedByMinistry: true
  },
  {
    id: 'guide-2',
    name: 'م. فهد الغامدي',
    city: 'الدرعية',
    languages: ['العربية', 'الإنجليزية', 'الصينية'],
    experienceYears: 9,
    rating: 4.9,
    reviewsCount: 230,
    hourlyRate: 180,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    specialties: ['عمارة الطين بحي الطريف', 'تاريخ الدولة السعودية الأولى', 'جولات كبار الشخصيات'],
    bio: 'باحث تاريخي ومرشد مسجل رسمياً في جولات الدرعية التاريخية والمتاحف الوطنية.',
    certifiedByMinistry: true
  }
];

export const demoReviewsList: ReviewItem[] = [
  {
    id: 'rev-1',
    userName: 'د. خالد الشمري',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    targetName: 'منتجع هابيتاس العلا البيئي الفاخر',
    targetCategory: 'فندق/منتجع',
    rating: 5,
    date: 'منذ يومين',
    comment: 'تجربة ساحرة بكل المقاييس! الاستقبال الدافئ، الهدوء بين جبال العلا، والخدمة السريعة عبر تطبيق سعودي إكسبلورر.',
    verifiedBooking: true
  },
  {
    id: 'rev-2',
    userName: 'م. نورة الشهري',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    targetName: 'مطعم سهيل النبيل النجدي',
    targetCategory: 'مطعم',
    rating: 5,
    date: 'منذ 4 أيام',
    comment: 'أفضل حنيذ وكبيبة حائل تذوقتها بالرياض! الديكور النجدي الأصيل والخدمة الراقية ترفع الرأس.',
    verifiedBooking: true
  }
];
