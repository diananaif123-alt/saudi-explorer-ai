export interface MapLocationPoi {
  id: string;
  name: string;
  category: 'landmark' | 'hotel' | 'restaurant' | 'museum' | 'historical' | 'beach' | 'nature' | 'event' | 'hospital' | 'gas' | 'parking';
  categoryLabel: string;
  city: 'العلا' | 'الرياض' | 'جدة' | 'أبها' | 'الدرعية';
  lat: number; // percentage on map canvas 0-100
  lng: number; // percentage on map canvas 0-100
  rating: number;
  priceLevel: 'مجاني' | 'اقتصادي' | 'متوسط' | 'فاخر';
  image: string;
  description: string;
  openingHours: string;
  services: string[];
  bestTimeToVisit: string;
  estimatedArrival: string;
  familyFriendly: boolean;
  kidsFriendly: boolean;
  accessibleForDisabled: boolean;
  arSupported: boolean;
  arModelTitle?: string;
  arHistoricalStory?: string;
}

export interface RouteOption {
  id: string;
  fromCity: string;
  toCity: string;
  distanceKm: number;
  estimatedTime: string;
  costEstimate: string;
  transportType: 'سيارة خاصة' | 'قطار الحرمين السريع' | 'طيران داخلي' | 'حافلة سياحية';
  waypoints: string[];
  trafficAlert?: string;
  recommendedStopover?: string;
}

export interface CityWeatherData {
  cityName: string;
  temperature: string;
  condition: string;
  windSpeed: string;
  humidity: string;
  bestVisitingTime: string;
  weatherAdvice: string;
}

export const saudiCitiesMapData = [
  { id: 'alula', name: 'العلا', lat: 28, lng: 30, tag: 'التراث العالمي' },
  { id: 'riyadh', name: 'الرياض', lat: 50, lng: 60, tag: 'العاصمة والترفيه' },
  { id: 'jeddah', name: 'جدة', lat: 58, lng: 22, tag: 'عروس البحر الأحمر' },
  { id: 'diriyah', name: 'الدرعية', lat: 48, lng: 58, tag: 'مهد الدولة السعودية' },
  { id: 'abha', name: 'أبها', lat: 82, lng: 40, tag: 'عروس الجبال والتلفريك' }
];

export const demoPoiLocationsList: MapLocationPoi[] = [
  {
    id: 'poi-1',
    name: 'موقع الحِجر اليونسكو (مقبرة قصر الفريد)',
    category: 'historical',
    categoryLabel: 'موقع أثري عالمي',
    city: 'العلا',
    lat: 26,
    lng: 32,
    rating: 4.9,
    priceLevel: 'متوسط',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=600',
    description: 'أول موقع سعودي ينضم لقائمة التراث العالمي لليونسكو. مقابر نبطية منحوتة في الصخور الجرانيتية بمهارة هندسية استثنائية.',
    openingHours: '08:00 ص - 06:00 م',
    services: ['مرشد سياحي', 'حافلات جولف كهربائية', 'مقهى تراثي', 'مرفق لذوي الإعاقة', 'دورات مياه'],
    bestTimeToVisit: 'من 08:30 ص إلى 11:00 ص (قبل اشتداد الشمس)',
    estimatedArrival: '15 دقيقة من وسط العلا',
    familyFriendly: true,
    kidsFriendly: true,
    accessibleForDisabled: true,
    arSupported: true,
    arModelTitle: 'النموذج الثلاثي الأبعاد المقترن لقصر الفريد بالحِجر',
    arHistoricalStory: 'بُني قصر الفريد في القرن الأول الميلادي للحيان بن كوزا. استمع للشرح التاريخي حول تقنية النحت النبطي من الأعلى إلى الأسفل.'
  },
  {
    id: 'poi-2',
    name: 'حي الطريف التاريخي بـ الدرعية',
    category: 'historical',
    categoryLabel: 'تراث وعمارة طينية',
    city: 'الدرعية',
    lat: 47,
    lng: 57,
    rating: 4.9,
    priceLevel: 'متوسط',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=600',
    description: 'عاصمة الدولة السعودية الأولى ومقر الأسرة الحاكمة التاريخي، يضم قصور الطين المذهلة مثل قصر سلوى والمتحف التراثي.',
    openingHours: '10:00 ص - 11:00 م',
    services: ['مطاعم البجيري الفاخرة', 'معارض تفاعلية', 'مرشد رقمي', 'مواقف VIP'],
    bestTimeToVisit: '05:00 م - 09:00 م (استمتع بالإضاءات المسائية الساحرة)',
    estimatedArrival: '20 دقيقة من شمال الرياض',
    familyFriendly: true,
    kidsFriendly: true,
    accessibleForDisabled: true,
    arSupported: true,
    arModelTitle: 'قصر سلوى التاريخي بالواقع المعزز',
    arHistoricalStory: 'تأسس حي الطريف في القرن الثامن عشر، ويمثل قصر سلوى مركز الحكم والإدارة النجدي الأصيل.'
  },
  {
    id: 'poi-3',
    name: 'جدة البلد (المنطقة التاريخية)',
    category: 'museum',
    categoryLabel: 'عمارة حجازية وتراث',
    city: 'جدة',
    lat: 59,
    lng: 23,
    rating: 4.8,
    priceLevel: 'مجاني',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600',
    description: 'أزقة ضيقة وبيوت تراثية خشبية (الرواشين الحجازية) يعود تاريخها لمئات السنين، من أشهرها بيت نصيف وبيت المتبولي.',
    openingHours: '04:00 م - 12:00 منتصف الليل',
    services: ['دكان هدايا', 'مقاهي شعبية', 'عربات غولف', 'محطة نقل بالبلد'],
    bestTimeToVisit: 'بعد صلاة العصر وحتى منتصف الليل',
    estimatedArrival: '10 دقائق من كورنيش جدة',
    familyFriendly: true,
    kidsFriendly: true,
    accessibleForDisabled: false,
    arSupported: true,
    arModelTitle: 'بيت نصيف والرواشين الحجازية بالواقع المعزز',
    arHistoricalStory: 'استقبل بيت نصيف الملك عبد العزيز بن عبدالرحمن آل سعود عند دخوله جدة عام 1925 م.'
  },
  {
    id: 'poi-4',
    name: 'منتجع هابيتاس و مسرح مرايا',
    category: 'hotel',
    categoryLabel: 'منتجع فاخر ومسرح مرآة',
    city: 'العلا',
    lat: 29,
    lng: 29,
    rating: 4.9,
    priceLevel: 'فاخر',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    description: 'أكبر مبنى مغطى بالمرايا في العالم بين جبال العلا الساحرة مع إقامة فندقية مستدامة صديقة للبيئة.',
    openingHours: 'مفتوح 24 ساعة',
    services: ['سبا صحراوي', 'مطعم تاما الفاخر', 'مسبح بانورامي', 'شاحنات كهربائية'],
    bestTimeToVisit: 'شروق وغروب الشمس لتقاطيع الانعكاس على المرايا',
    estimatedArrival: '30 دقيقة من مطار العلا الدولي',
    familyFriendly: true,
    kidsFriendly: false,
    accessibleForDisabled: true,
    arSupported: true,
    arModelTitle: 'مجسم مبنى مرايا وتصميم الانعكاس الصخري',
    arHistoricalStory: 'دخلت قاعة مرايا موسوعة جينيس كأكبر مبنى مغطى بالمرايا العاكسة بواقع 9,740 متراً مربعاً.'
  },
  {
    id: 'poi-5',
    name: 'منتزه السودة والتلفريك بـ أبها',
    category: 'nature',
    categoryLabel: 'طبيعة وجبال وتلفريك',
    city: 'أبها',
    lat: 83,
    lng: 39,
    rating: 4.7,
    priceLevel: 'اقتصادي',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
    description: 'أعلى قمة جبلية بالمملكة بارتفاع يتجاوز 3000 متر، مع غابات العرعر الكثيفة وركوب التلفريك إلى قرية رجال ألمع.',
    openingHours: '09:00 ص - 08:00 م',
    services: ['محطة تلفريك', 'ألعاب مغامرات', 'أكشاك القهوة', 'مواقف فسيحة', 'مستوصف طبي'],
    bestTimeToVisit: '01:00 م - 06:00 م للاستمتاع بالضباب والأمواج السحابية',
    estimatedArrival: '25 دقيقة من وسط مدينة أبها',
    familyFriendly: true,
    kidsFriendly: true,
    accessibleForDisabled: true,
    arSupported: false
  },
  {
    id: 'poi-6',
    name: 'مطعم سهيل النبيل',
    category: 'restaurant',
    categoryLabel: 'مطعم نجدي فاخر',
    city: 'الرياض',
    lat: 51,
    lng: 61,
    rating: 4.8,
    priceLevel: 'فاخر',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    description: 'تجربة طعام فاخرة تحتفي بالتراث النجدي العريق بلمسات معاصرة ومذاق سعودي رفيع.',
    openingHours: '01:00 م - 12:30 ص',
    services: ['خدمة إيقاف السيارات', 'غرف خاصة للعائلات', 'حجز مسبق', 'واي فاي مجاني'],
    bestTimeToVisit: '08:00 م للعشاء',
    estimatedArrival: '15 دقيقة من طريق الملك فهد',
    familyFriendly: true,
    kidsFriendly: true,
    accessibleForDisabled: true,
    arSupported: false
  },
  {
    id: 'poi-7',
    name: 'مستشفى الملك فيصل التخصصي والخدمات الطبية',
    category: 'hospital',
    categoryLabel: 'خدمات صحية وطوارئ',
    city: 'الرياض',
    lat: 53,
    lng: 59,
    rating: 4.9,
    priceLevel: 'مجاني',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    description: 'مركز طبي مرجعي دولي يقدم خدمات الطوارئ والعناية بالسياح والدوليين على مدار 24 ساعة.',
    openingHours: '24 ساعة (طوارئ)',
    services: ['طوارئ 24/7', 'صيدلية داخلية', 'ترجمة لغات سياحية', 'مهبط مروحيات'],
    bestTimeToVisit: 'مفتوح عند الحاجة الطبية',
    estimatedArrival: '10 دقائق',
    familyFriendly: true,
    kidsFriendly: true,
    accessibleForDisabled: true,
    arSupported: false
  },
  {
    id: 'poi-8',
    name: 'محطة وقود ساسكو الذكية وموقف السيارات',
    category: 'gas',
    categoryLabel: 'محطة وقود وخدمات طريق',
    city: 'العلا',
    lat: 31,
    lng: 33,
    rating: 4.6,
    priceLevel: 'اقتصادي',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600',
    description: 'محطة متكاملة تشمل شواحن للسيارات الكهربائية، سوبرماركت، صيدلية، ومصلى ونقاط شحن هاتف.',
    openingHours: '24 ساعة',
    services: ['وقود وشحن كهربائي', 'سوبرماركت 24/7', 'دورات مياه نظيفة', 'صراف آلي'],
    bestTimeToVisit: 'أثناء السفر بين المعالم',
    estimatedArrival: '5 دقائق',
    familyFriendly: true,
    kidsFriendly: true,
    accessibleForDisabled: true,
    arSupported: false
  }
];

export const demoRouteOptionsList: RouteOption[] = [
  {
    id: 'route-1',
    fromCity: 'الرياض',
    toCity: 'الدرعية (حي الطريف)',
    distanceKm: 18,
    estimatedTime: '22 دقيقة',
    costEstimate: '35 ريال (أوبر / تكسي)',
    transportType: 'سيارة خاصة',
    waypoints: ['طريق الملك سلمان', 'طريق الملك خالد', 'بوابة البجيري'],
    recommendedStopover: 'مقهى البجيري للقهوة السعودية',
    trafficAlert: 'حركة السير انسيابية بمتوسط سرعة 80 كم/س.'
  },
  {
    id: 'route-2',
    fromCity: 'جدة',
    toCity: 'مكة المكرمة',
    distanceKm: 78,
    estimatedTime: '35 دقيقة عبر القطار',
    costEstimate: '75 ريال',
    transportType: 'قطار الحرمين السريع',
    waypoints: ['محطة قطار مطار الملك عبدالعزيز', 'محطة قطار مكة'],
    recommendedStopover: 'صالة الفرسان بمحطة المطار',
    trafficAlert: 'انطلاق القطار التالي القادم خلال 18 دقيقة.'
  },
  {
    id: 'route-3',
    fromCity: 'مطار العلا الدولي',
    toCity: 'منتجع هابيتاس و مسرح مرايا',
    distanceKm: 42,
    estimatedTime: '35 دقيقة',
    costEstimate: '120 ريال',
    transportType: 'حافلة سياحية',
    waypoints: ['طريق الواحة', 'مدخل وادي أشار'],
    recommendedStopover: 'نقطة مشاهدة جبل الفيل',
    trafficAlert: 'طريق صحراوي ممهد ومستقر مجهز بإنارة ذكية.'
  }
];

export const cityWeatherMapInfo: Record<string, CityWeatherData> = {
  'العلا': {
    cityName: 'العلا',
    temperature: '28°C',
    condition: 'مشمس مع نسيم لطيف ☀️',
    windSpeed: '12 كم/س',
    humidity: '18%',
    bestVisitingTime: 'الصباح الباكر ومن صلاة العصر حتى المساء',
    weatherAdvice: 'طقس ممتاز للرحلات الجبلية واستكشاف الحِجر. يوصى بارتداء نظارات شمسية.'
  },
  'الرياض': {
    cityName: 'الرياض',
    temperature: '34°C',
    condition: 'صافٍ ومعتدل مسائياً 🌙',
    windSpeed: '15 كم/س',
    humidity: '14%',
    bestVisitingTime: 'من 05:00 م حتى وقت متاخر من الليل',
    weatherAdvice: 'طقس مثالي لزيارة الدرعية وحضور الفعاليات الخارجية في البوليفارد.'
  },
  'جدة': {
    cityName: 'جدة',
    temperature: '31°C',
    condition: 'رطوبة معتدلة مع هواء بحري 🌊',
    windSpeed: '18 كم/س',
    humidity: '62%',
    bestVisitingTime: 'قبيل غروب الشمس والمساء',
    weatherAdvice: 'أجواء رائعة للجولات الشاطئية في الواجهة البحرية والغوص في الشعاب المرجانية.'
  },
  'أبها': {
    cityName: 'أبها',
    temperature: '21°C',
    condition: 'غيوم جزئية وضباب مع رشات مطر 🌧️',
    windSpeed: '10 كم/س',
    humidity: '75%',
    bestVisitingTime: 'طوال اليوم (طقس بارد منعش)',
    weatherAdvice: 'احرص على إحضار جاكيت خفيف وركوب التلفريك فوق غابات السودة.'
  }
};
