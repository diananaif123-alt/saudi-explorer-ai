export interface WalletBalance {
  currentBalance: number; // e.g. 4,850 SAR
  rewardsPoints: number; // e.g. 3,450 points
  currency: string;
}

export interface PaymentCard {
  id: string;
  type: 'visa' | 'mastercard' | 'mada';
  last4: string;
  holderName: string;
  expiry: string;
  isDefault: boolean;
}

export interface TransactionRecord {
  id: string;
  title: string;
  category: 'حجز فندق' | 'تأجير سيارة' | 'تذكرة فعالية' | 'مطعم' | 'استبدال نقاط' | 'شحن محفظة';
  amount: number;
  type: 'debit' | 'credit';
  date: string;
  time: string;
  referenceCode: string;
  status: 'مكتمل' | 'قيد المعالجة' | 'مسترجع';
  receiptUrl?: string;
}

export interface CityStamp {
  id: string;
  cityName: string;
  cityImage: string;
  visitedDate: string;
  visitedLandmarksCount: number;
  stampBadgeIcon: string;
  unlocked: boolean;
  motto: string;
}

export interface BadgeAchievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  earnedDate?: string;
  unlocked: boolean;
  category: 'مستكشف المدن' | 'محب التراث' | 'تذوق المأكولات' | 'المغامرات' | 'رحالة VIP';
  pointsReward: number;
}

export interface RedeemableReward {
  id: string;
  title: string;
  provider: string;
  category: 'خصم تجريبي' | 'قسيمة شرائية' | 'ميزة VIP' | 'هدية رقمية' | 'وسام حصري';
  pointsCost: number;
  discountValue: string;
  description: string;
  image: string;
  voucherCode?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'booking' | 'weather' | 'offer' | 'ai' | 'system' | 'points';
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: 'استفسار عن حجز' | 'مشكلة في الدفع' | 'اقتراح تطوير' | 'دعم المحفظة';
  status: 'مفتوحة' | 'قيد المتابعة' | 'تم الحل';
  date: string;
  lastResponse?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'المحفظة والدفع' | 'الجواز السياحي' | 'المكافآت' | 'الحجوزات';
}

export const initialWalletBalance: WalletBalance = {
  currentBalance: 4850,
  rewardsPoints: 3450,
  currency: 'ر.س (SAR)'
};

export const demoSavedPaymentCards: PaymentCard[] = [
  {
    id: 'card-1',
    type: 'mada',
    last4: '4821',
    holderName: 'عبدالله الماجد',
    expiry: '08/28',
    isDefault: true
  },
  {
    id: 'card-2',
    type: 'visa',
    last4: '9012',
    holderName: 'عبدالله الماجد',
    expiry: '11/27',
    isDefault: false
  }
];

export const demoTransactionsList: TransactionRecord[] = [
  {
    id: 'tx-101',
    title: 'منتجع هابيتاس العلا البيئي',
    category: 'حجز فندق',
    amount: 2400,
    type: 'debit',
    date: '2026-07-20',
    time: '14:30',
    referenceCode: 'SAUDI-BK-9821',
    status: 'مكتمل'
  },
  {
    id: 'tx-102',
    title: 'مكافأة زيارة حي الطريف بالدرعية',
    category: 'شحن محفظة',
    amount: 150,
    type: 'credit',
    date: '2026-07-18',
    time: '18:15',
    referenceCode: 'PTS-REWARD-402',
    status: 'مكتمل'
  },
  {
    id: 'tx-103',
    title: 'مطعم سهيل النبيل النجدي',
    category: 'مطعم',
    amount: 440,
    type: 'debit',
    date: '2026-07-15',
    time: '21:00',
    referenceCode: 'SAUDI-BK-3312',
    status: 'مكتمل'
  },
  {
    id: 'tx-104',
    title: 'تأجير لاند كروزر VXR 2026',
    category: 'تأجير سيارة',
    amount: 650,
    type: 'debit',
    date: '2026-07-10',
    time: '09:00',
    referenceCode: 'SAUDI-BK-1104',
    status: 'مكتمل'
  }
];

export const demoCityStamps: CityStamp[] = [
  {
    id: 'stamp-1',
    cityName: 'الرياض',
    cityImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=400',
    visitedDate: '10 مايو 2026',
    visitedLandmarksCount: 8,
    stampBadgeIcon: '🏰',
    unlocked: true,
    motto: 'عاصمة المستقبل والشموخ النجدي'
  },
  {
    id: 'stamp-2',
    cityName: 'العلا',
    cityImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400',
    visitedDate: '18 يونيو 2026',
    visitedLandmarksCount: 6,
    stampBadgeIcon: '🏜️',
    unlocked: true,
    motto: 'متحف العالم المفتوح والحضارة النبطية'
  },
  {
    id: 'stamp-3',
    cityName: 'جدة',
    cityImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400',
    visitedDate: '02 يوليو 2026',
    visitedLandmarksCount: 5,
    stampBadgeIcon: '🌊',
    unlocked: true,
    motto: 'عروس البحر الأحمر ودرة التاريخ الحجازي'
  },
  {
    id: 'stamp-4',
    cityName: 'الدرعية',
    cityImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    visitedDate: '15 يوليو 2026',
    visitedLandmarksCount: 4,
    stampBadgeIcon: '⚔️',
    unlocked: true,
    motto: 'مهد الدولة السعودية الجليلة'
  },
  {
    id: 'stamp-5',
    cityName: 'أبها',
    cityImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=400',
    visitedDate: 'قريباً',
    visitedLandmarksCount: 0,
    stampBadgeIcon: '🏔️',
    unlocked: false,
    motto: 'عروس الجبال والضباب العسيري'
  }
];

export const demoBadgeAchievements: BadgeAchievement[] = [
  {
    id: 'badge-1',
    title: 'مستكشف الآثار النبطية',
    description: 'زيارة 3 معالم أثرية تاريخية في العلا وحائل.',
    iconName: 'Compass',
    earnedDate: '18 يونيو 2026',
    unlocked: true,
    category: 'مستكشف المدن',
    pointsReward: 500
  },
  {
    id: 'badge-2',
    title: 'تذوق المذاق النجدي الأصيل',
    description: 'تجربة 5 مطاعم تراثية نجدية معتمدة.',
    iconName: 'Utensils',
    earnedDate: '15 يوليو 2026',
    unlocked: true,
    category: 'تذوق المأكولات',
    pointsReward: 350
  },
  {
    id: 'badge-3',
    title: 'غواص الأعماق المرجانية',
    description: 'إتمام تجربة الغوص في الشعاب المرجانية بجدة.',
    iconName: 'Waves',
    earnedDate: '02 يوليو 2026',
    unlocked: true,
    category: 'المغامرات',
    pointsReward: 600
  },
  {
    id: 'badge-4',
    title: 'سفير الفنادق الفاخرة VIP',
    description: 'الإقامة في 3 منتجعات بيئية وفاخرة في المملكة.',
    iconName: 'Crown',
    earnedDate: undefined,
    unlocked: false,
    category: 'رحالة VIP',
    pointsReward: 1000
  }
];

export const demoRedeemableRewards: RedeemableReward[] = [
  {
    id: 'reward-1',
    title: 'خصم 25% على حجز الفندق القادم',
    provider: 'فنادق ومنتجعات المملكة',
    category: 'خصم تجريبي',
    pointsCost: 1500,
    discountValue: 'خصم 25%',
    description: 'قسيمة خصم مباشرة تطبق على أي حجز فندقي داخل التطبيق.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400',
    voucherCode: 'SAUDI-VIP-25'
  },
  {
    id: 'reward-2',
    title: 'وجبة عشاء مجانية لشخصين',
    provider: 'مطعم سهيل النبيل',
    category: 'قسيمة شرائية',
    pointsCost: 2000,
    discountValue: 'وجبة مجانية (300 ريال)',
    description: 'قسيمة وجبة كرم ضيافة نجدي لشخصين شاملة الطبق الرئيسي والمشروب.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400',
    voucherCode: 'SUHAIL-FREE-DINNER'
  },
  {
    id: 'reward-3',
    title: 'ترقية مجانية لسيارة دفع رباعي VIP',
    provider: 'شركة ذيب لتأجير السيارات',
    category: 'ميزة VIP',
    pointsCost: 1000,
    discountValue: 'ترقية فئة فخمة',
    description: 'احصل على ترقية مجانية لسيارات الدفع الرباعي الفاخرة عند التأجير.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400',
    voucherCode: 'THEEB-UPGRADE-SUV'
  },
  {
    id: 'reward-4',
    title: 'تذكرة كواليس VIP لمهرجان شتاء طنطورة',
    provider: 'فعاليات العلا',
    category: 'هدية رقمية',
    pointsCost: 2500,
    discountValue: 'دخول VIP كواليس',
    description: 'تذكرة VIP مجانية لحضور كواليس ولقاء الفنانين في مسرح مرايا.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400',
    voucherCode: 'TANTORA-VIP-ACCESS'
  }
];

export const demoNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'تم تأكيد حجز منتجع هابيتاس العلا',
    message: 'حجزك المؤرخ 15 نوفمبر 2026 مؤكد ومرفق بالرمز الرقمي QR في المحفظة.',
    type: 'booking',
    timestamp: 'منذ ساعتين',
    read: false
  },
  {
    id: 'notif-2',
    title: 'مكافأة نقاط جديدة! (+500 نقطة)',
    message: 'تهانينا! لقد حصلت على 500 نقطة لإكمال زيارة حي الطريف التاريخي بالدرعية.',
    type: 'points',
    timestamp: 'منذ يوم واحد',
    read: false
  },
  {
    id: 'notif-3',
    title: 'تنويه طقس العلا: أجواء صافية ومثالية',
    message: 'درجة الحرارة المتوقعة الليلة بالعلا 22°C مناسبة لتجربة رصد النجوم بالصحراء.',
    type: 'weather',
    timestamp: 'منذ 3 أيام',
    read: true
  },
  {
    id: 'notif-4',
    title: 'توصية المرشد الذكي AI',
    message: 'بناءً على تفضيلاتك في الأطعمة النجدية، نقترح عليك تجربة مقهى ومطعم مرايا الواحة.',
    type: 'ai',
    timestamp: 'منذ 5 أيام',
    read: true
  }
];

export const demoSupportTickets: SupportTicket[] = [
  {
    id: 'TICKET-901',
    subject: 'استفسار عن تأكيد حجز قطار الحرمين',
    category: 'استفسار عن حجز',
    status: 'تم الحل',
    date: '2026-07-12',
    lastResponse: 'تم ربط التذكرة بنجاح في المحفظة الرقمية الخاصة بك.'
  },
  {
    id: 'TICKET-902',
    subject: 'طلب تعديل موعد جولة مرشد سياحي بالعلا',
    category: 'استفسار عن حجز',
    status: 'قيد المتابعة',
    date: '2026-07-21',
    lastResponse: 'جارٍ التنسيق مع المرشدة سارة العتيبي لتعديل الموعد.'
  }
];

export const demoFAQsList: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'المحفظة والدفع',
    question: 'كيف يمكنني استخدام المحفظة الرقمية للحجز والدفع؟',
    answer: 'تتيح لك المحفظة الرقمية إيداع الرصيد التجريبي، وحفظ بطاقات مدى والفيزا، أو استخدام Apple Pay لإتمام الحجوزات بضغطة زر واحدة والحصول على تذاكر مزودة برمز QR.'
  },
  {
    id: 'faq-2',
    category: 'الجواز السياحي',
    question: 'كيف أحصل على الأختام والأوسمة في الجواز السياحي؟',
    answer: 'يتم إصدار الأختام الرقمية تلقائيًا عندما تقوم بتأكيد زيارة مدينة جديدة أو تسجيل الدخول في المعالم السياحية والفعاليات عبر التطبيق.'
  },
  {
    id: 'faq-3',
    category: 'المكافآت',
    question: 'كيف أستبدل نقاط المكافآت بخصومات وقسائم؟',
    answer: 'يمكنك الدخول لقسم "استبدال المكافآت" واختيار القسيمة المطلوبة، وسيتم خصم النقاط فوراً وإبراز كود الخصم التجريبي لاستخدامه في الحجوزات القادمة.'
  },
  {
    id: 'faq-4',
    category: 'الحجوزات',
    question: 'هل البيانات والعمليات في هذا النموذج حقيقية؟',
    answer: 'جميع عمليات الدفع، الرصيد، والنقاط في هذا النموذج الأولي هي محاكاة تفاعلية (Demo Mode) لأغراض العرض واختبار تجربة المستخدم فقط.'
  }
];
