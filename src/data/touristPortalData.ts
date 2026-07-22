export interface TouristProfile {
  name: string;
  email: string;
  phone: string;
  nationality: string;
  preferredLanguage: string;
  avatar: string;
  passportNumber: string;
  arrivalDate: string;
  departureDate: string;
  rewardPoints: number;
  passportBadges: { title: string; icon: string; date: string }[];
}

export interface TripRecord {
  id: string;
  title: string;
  city: string;
  status: 'current' | 'upcoming' | 'past';
  startDate: string;
  endDate: string;
  travelersCount: number;
  budgetCategory: 'اقتصادي' | 'متوسط' | 'فاخر' | 'فاخر جداً';
  image: string;
  summary: string;
}

export interface TouristNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'offer' | 'event' | 'trip' | 'system';
  isRead: boolean;
}

export interface ActivityLogItem {
  id: string;
  action: string;
  targetName: string;
  timestamp: string;
  category: 'بحث' | 'زيارة' | 'حفظ' | 'تقييم';
}

export const initialTouristProfile: TouristProfile = {
  name: 'جون سميث (John Smith)',
  email: 'tourist.demo@saudiexplorer.ai',
  phone: '+1 555 019 2831',
  nationality: 'المملكة المتحدة (United Kingdom)',
  preferredLanguage: 'العربية / English',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  passportNumber: 'KSA-PASS-99021',
  arrivalDate: '2026-10-15',
  departureDate: '2026-10-25',
  rewardPoints: 1850,
  passportBadges: [
    { title: 'مستكشف الحِجر بالعلا', icon: 'Sparkles', date: '2025-11-10' },
    { title: 'زائر الدرعية التاريخية', icon: 'Building2', date: '2026-01-20' },
    { title: 'غواص جزر البحر الأحمر', icon: 'Waves', date: '2026-05-14' }
  ]
};

export const availableInterestsList = [
  { id: 'heritage', name: 'التاريخ والتراث', icon: 'Landmark' },
  { id: 'nature', name: 'الطبيعة والوديان', icon: 'Trees' },
  { id: 'beaches', name: 'الشواطئ والجزر', icon: 'Sun' },
  { id: 'adventures', name: 'المغامرات والرحلات', icon: 'Compass' },
  { id: 'shopping', name: 'التسوق والأسواق', icon: 'ShoppingBag' },
  { id: 'dining', name: 'المطاعم والمأكولات', icon: 'Utensils' },
  { id: 'cafes', name: 'المقاهي ذات الإطلالة', icon: 'Coffee' },
  { id: 'events', name: 'الفعاليات والمواسم', icon: 'Calendar' },
  { id: 'sports', name: 'الرياضة والفورمولا', icon: 'Trophy' },
  { id: 'culture', name: 'الثقافة والمواسم', icon: 'Sparkles' },
  { id: 'museums', name: 'المتاحف والمعارض', icon: 'Building2' },
  { id: 'families', name: 'العائلات والأطفال', icon: 'Users' },
  { id: 'photography', name: 'التصوير الفوتوغرافي', icon: 'Camera' },
  { id: 'luxury', name: 'الرفاهية والمنتجعات', icon: 'Crown' }
];

export const demoTripsList: TripRecord[] = [
  {
    id: 'trip-1',
    title: 'جولة العلا والسحر التاريخي',
    city: 'العلا',
    status: 'current',
    startDate: '2026-10-15',
    endDate: '2026-10-18',
    travelersCount: 2,
    budgetCategory: 'فاخر',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=600',
    summary: 'زيارة الحِجر، جبل الفيل، ومسرح طنطورة مع إقامة في منتجع هابيتاس.'
  },
  {
    id: 'trip-2',
    title: 'موسم الرياض والتسوق العالمي',
    city: 'الرياض',
    status: 'upcoming',
    startDate: '2026-11-01',
    endDate: '2026-11-05',
    travelersCount: 3,
    budgetCategory: 'متوسط',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=600',
    summary: 'حضور بوليفارد رياض سيتي وجولة الدرعية التاريخية.'
  },
  {
    id: 'trip-3',
    title: 'عروس البحر الأحمر وجدة البلد',
    city: 'جدة',
    status: 'past',
    startDate: '2026-04-10',
    endDate: '2026-04-14',
    travelersCount: 2,
    budgetCategory: 'فاخر جداً',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600',
    summary: 'جولة أزقة البلد التراثية والغوص في الشعاب المرجانية.'
  }
];

export const demoNotificationsList: TouristNotification[] = [
  {
    id: 'notif-1',
    title: 'خصم خاص للسياح الدوليين',
    message: 'احصل على خصم 20% على حجز تذاكر مسرح العلا هذا الأسبوع.',
    timestamp: 'قبل 10 دقائق',
    type: 'offer',
    isRead: false
  },
  {
    id: 'notif-2',
    title: 'تأكيد جدول رحلة العلا',
    message: 'تم تحديث جدول سفرك المولد بواسطة AI Planner بنجاح.',
    timestamp: 'قبل ساعتين',
    type: 'trip',
    isRead: false
  },
  {
    id: 'notif-3',
    title: 'توقع الطقس مشمس في العلا',
    message: 'درجة الحرارة المتوقعة اليوم 28° مئوية، مناسبة للرحلات الجبلية.',
    timestamp: 'أمس',
    type: 'system',
    isRead: true
  }
];

export const demoActivityLogList: ActivityLogItem[] = [
  { id: 'act-1', action: 'بحث عن فنادق فاخرة', targetName: 'العلا - منتجع هابيتاس', timestamp: 'اليوم 10:30 ص', category: 'بحث' },
  { id: 'act-2', action: 'إضافة للمفضلة', targetName: 'مطعم سهيل التراثي بالرياض', timestamp: 'أمس 08:15 م', category: 'حفظ' },
  { id: 'act-3', action: 'تقييم تجربة خضراء', targetName: 'منتزه السودة بأبها', timestamp: 'منذ يومين', category: 'تقييم' }
];
