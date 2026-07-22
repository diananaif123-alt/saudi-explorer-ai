export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  description: string;
  rating: number;
  tags: string[];
  highlights: string[];
}

export interface EventItem {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  category: string;
  price: string;
}

export interface HotelItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  pricePerNight: string;
  image: string;
  amenities: string[];
}

export const sampleDestinations: Destination[] = [
  {
    id: 'alula',
    name: 'العُلا (AlUla)',
    region: 'المنطقة الشرقية والشمالية الغربية',
    image: 'https://images.unsplash.com/photo-1578895210405-907db48a7111?auto=format&fit=crop&q=80&w=800',
    description: 'متحف حي مفتوح يحتوي على مقابر الحجر النبطية (أول موقع سعودي مدرج في اليونسكو) وجبل الفيل الشاهق والبلدة القديمة.',
    rating: 4.9,
    tags: ['تراث عالمي', 'آثار نبطية', 'صحراء وسماء صافية'],
    highlights: ['مقابر الحجر (مدائن صالح)', 'جبل الفيل', 'قاعة مرايا الشهيرة', 'البلدة القديمة']
  },
  {
    id: 'diriyah',
    name: 'الدرعية التاريخية (Diriyah)',
    region: 'منطقة الرياض',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800',
    description: 'مهد الدولة السعودية الأولى وحي الطريف التاريخي المميز بالعمارة النجودية الطينية الفاخرة المطلة على وادي حنيفة.',
    rating: 4.85,
    tags: ['تراث سعودي اصيل', 'عمارة طينية', 'مطاعم فاخرة'],
    highlights: ['حي الطريف التراثي', 'مطل البجيري', 'وادي حنيفة', 'قصر سلوى']
  },
  {
    id: 'jeddah_albalad',
    name: 'جدة التاريخية (البلد)',
    region: 'منطقة مكة المكرمة',
    image: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&q=80&w=800',
    description: 'عروس البحر الأحمر وحواريها العريقة المليئة بالمشربيات والروشان الخشبي ومتحف نصيف الشعبي.',
    rating: 4.8,
    tags: ['البحر الأحمر', 'مشربيات وروشان', 'أسواق شعبية'],
    highlights: ['بيت نصيف', 'سوق العلوي', 'باب مكة', 'شاطئ الكورنيش']
  },
  {
    id: 'asir',
    name: 'أبها والسودة (Asir & Abha)',
    region: 'منطقة عسير',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
    description: 'عاصمة الضباب والمناظر الجبلية الشاهقة والغابات الغناء والقرى التراثية الملونة بركائز القط العسيري.',
    rating: 4.9,
    tags: ['طبيعة وجبال', 'طقس بارد', 'القط العسيري'],
    highlights: ['منتزه السودة الوطنية', 'قرية رجال ألمع التراثية', 'جبل الذرة', 'ممشى اللافندر']
  },
  {
    id: 'neom',
    name: 'نيوم وشواطئ مقنا (NEOM)',
    region: 'منطقة تبوك',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'أرض المستقبل الساحرة حيث يلتقي البحر الأحمر مع المرتفعات المرجانية الشاطئية والمشاريع التقنية المستدامة.',
    rating: 4.95,
    tags: ['سياحة المستقبل', 'غوص ومرجان', 'رفاهية'],
    highlights: ['شاطئ المويلح ومقنا', 'سندالة الفاخرة', 'وادي طيب اسم', 'جبال تبوك']
  }
];

export const sampleEvents: EventItem[] = [
  {
    id: 'ev1',
    title: 'شتاء طنطورة - العلا',
    location: 'العلا، مسرح مرايا',
    date: '15 ديسمبر 2026 - 15 يناير 2027',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600',
    category: 'موسيقى وتراث',
    price: '350 ر.س'
  },
  {
    id: 'ev2',
    title: 'موسم الرياض 2026',
    location: 'بوليفارد سيتي، الرياض',
    date: '20 أكتوبر 2026 - 10 مارس 2027',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600',
    category: 'ترفيه ومغامرة',
    price: '75 ر.س'
  },
  {
    id: 'ev3',
    title: 'مهرجان البحر الأحمر السينمائي الدولي',
    location: 'جدة التاريخية (البلد)',
    date: '03 - 12 ديسمبر 2026',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600',
    category: 'سينما وفن',
    price: '120 ر.س'
  }
];

export const sampleHotels: HotelItem[] = [
  {
    id: 'h1',
    name: 'منتجع هابيتاس العلا (Habitas AlUla)',
    location: 'وادي اشار، العلا',
    rating: 4.9,
    pricePerNight: '2,400 ر.س',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    amenities: ['مسبح بين الجبال', 'سبا فاخر', 'مطعم عضوي', 'تأمل ونجوم']
  },
  {
    id: 'h2',
    name: 'منتجع بانيان تري العلا (Banyan Tree AlUla)',
    location: 'وادي اشار، العلا',
    rating: 4.95,
    pricePerNight: '3,800 ر.س',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600',
    amenities: ['فلل خاصة بمسبح', 'إطلالة صحراوية panoramic', 'سبا عالمي']
  },
  {
    id: 'h3',
    name: 'فندق سانت ريجيس البحر الأحمر',
    location: 'جزيرة أمهات، البحر الأحمر',
    rating: 4.92,
    pricePerNight: '4,500 ر.س',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    amenities: ['شاليهات فوق الماء', 'غوص مرجاني', 'مطاعم Michelin-style']
  }
];
