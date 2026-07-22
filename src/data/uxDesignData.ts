export interface PageInfoSpec {
  id: string;
  titleAr: string;
  titleEn: string;
  iconName: string;
  description: string;
  primaryComponents: string[];
}

export interface UserFlowStep {
  stepNumber: number;
  title: string;
  action: string;
  screen: string;
  outcome: string;
}

export interface EmptyStateSpec {
  type: string;
  title: string;
  description: string;
  actionText: string;
  icon: string;
}

export const informationArchitectureData: PageInfoSpec[] = [
  { id: 'home', titleAr: 'الصفحة الرئيسية', titleEn: 'Home Page', iconName: 'Home', description: 'البوابة الكبرى للرحلة التي تضم الهيرو البانر الذكي، الشواهد الثقافية، الخرائط التفاعلية، والوصول الفوري لـ AI Planner.', primaryComponents: ['Hero Search Bar', 'Destinations Grid', 'Events Carousel', 'AI Planner Widget', 'Hotels Showcase'] },
  { id: 'cities', titleAr: 'دليل المدن السعودية', titleEn: 'Saudi Cities Directory', iconName: 'Building2', description: 'استعراض مدن المملكة (الرياض، العلا، جدة، أبها، العلا، نيوم) مع الطقس المباشر والمعالم الرئيسية.', primaryComponents: ['City Filter Header', 'Weather Widget', 'Attractions List', 'City Interactive Map'] },
  { id: 'destinations', titleAr: 'استكشاف الوجهات', titleEn: 'Explore Destinations', iconName: 'Compass', description: 'تصفح كافة الوجهات الطبيعية والأثرية والتاريخية مع تصفية حسب المنطقة والاهتمامات.', primaryComponents: ['Category Filter Tabs', 'Destination Cards', 'Rating Badge', 'Map Overlay'] },
  { id: 'hotels', titleAr: 'الفنادق والمنتجعات', titleEn: 'Hotels & Resorts', iconName: 'Hotel', description: 'إقامات سياحية فاخرة مع حجز فوري تجريبي، تقييمات الزوار، واستعراض الخدمات.', primaryComponents: ['Availability Picker', 'Hotel Luxury Cards', 'Price Range Filter', 'Amenities Chips'] },
  { id: 'restaurants', titleAr: 'المطاعم والمقاهي التراثية', titleEn: 'Dining & Cafes', iconName: 'Utensils', description: 'استكشاف المأكولات النجدية والحجازية والعالمية والمقاهي ذات الإطلالات الساحرة.', primaryComponents: ['Cuisine Filter', 'Restaurant Cards', 'Table Reservation Demo', 'Reviews Drawer'] },
  { id: 'events', titleAr: 'الفعاليات والمواسم', titleEn: 'Events & Seasons', iconName: 'Calendar', description: 'فعاليات موسم الرياض، موسم العلا، الفورمولا 1، والمهرجانات الثقافية الحية.', primaryComponents: ['Timeline Calendar', 'Ticket Booking Modal', 'Category Badges', 'Countdown Timer'] },
  { id: 'maps', titleAr: 'الخريطة السياحية التفاعلية', titleEn: 'Interactive Tourist Map', iconName: 'Map', description: 'خريطة شاملة تعرض المواقع الأثرية، الفنادق، المطاعم والفعاليات مع التوجيه الجغرافي.', primaryComponents: ['Google Maps / Mapbox View', 'POI Markers', 'Route Calculator', 'AR Overlay Button'] },
  { id: 'ai-planner', titleAr: 'مستشار الذكاء الاصطناعي AI', titleEn: 'AI Travel Planner', iconName: 'Sparkles', description: 'مساعد ذكي لبناء جداول سفر مخصصة بدقة بالغة مع حساب التكلفة والاهتمامات.', primaryComponents: ['Prompt Preference Form', 'Generated Itinerary Timeline', 'Export PDF', 'Customize Days'] },
  { id: 'ar-explore', titleAr: 'استكشاف بالواقع المعزز AR', titleEn: 'AR Exploration Canvas', iconName: 'Eye', description: 'استكشاف معالم العلا ومحيط مدائن صالح بالواقع المعزز وتجسيم الآثار ثلاثياً.', primaryComponents: ['Camera View Layer', '3D Landmark Overlay', 'Historical Audio Guide', 'Capture Snapshot'] },
  { id: 'profile', titleAr: 'الملف الشخصي والمحفظة', titleEn: 'User Profile & Wallet', iconName: 'User', description: 'إدارة الحجوزات التجريبية، تذاكر QR، رصيد المحفظة، وتفضيلات السفر.', primaryComponents: ['Digital Wallet Balance', 'Booking Tickets Grid', 'QR Code Display', 'Preferences Form'] },
  { id: 'favorites', titleAr: 'قائمة المفضلة', titleEn: 'Saved Favorites', iconName: 'Heart', description: 'حفظ الوجهات والفنادق والفعاليات للعودة إليها وتخطيط الرحلات المستقبلية.', primaryComponents: ['Favorites Grid', 'Quick Add to Itinerary', 'Share List Link'] },
  { id: 'settings', titleAr: 'الإعدادات واللغة', titleEn: 'Settings & Preferences', iconName: 'Settings', description: 'تحديد اللغة (العربية/الإنجليزية)، المظهر (فاتح/داكن)، وتفعيل الإشعارات اللحظية.', primaryComponents: ['Language Toggle', 'Theme Mode Switcher', 'Notification Toggles', 'Privacy Policy'] }
];

export const userFlowSteps: UserFlowStep[] = [
  { stepNumber: 1, title: 'فتح المنصة والاستقبال', action: 'يدخل المستخدم للموقع ويشاهد الهيرو المشرق مع شريط البحث التفاعلي', screen: 'الصفحة الرئيسية (Home)', outcome: 'انطباع بصري فاخر ومريح يعكس الطبيعة السعودية.' },
  { stepNumber: 2, title: 'البحث عن وجهة أو تصفح المدن', action: 'يكتب "العلا" في شريط البحث أو يضغط على قسم الوجهات التاريخية', screen: 'دليل المدن والوجهات', outcome: 'عرض كافة المعالم والأماكن المتاحة في العلا مع الطقس المباشر.' },
  { stepNumber: 3, title: 'استعراض التفاصيل والتقييمات', action: 'ينقر على بطاقة "العلا - جبل الفيل أو الحجر" لمشاهدة التفاصيل والصور', screen: 'تفاصيل الوجهة (Destination Drawer)', outcome: 'فهم الميزات، المواعيد، المعالم المجاورة، وخيارات الحجز.' },
  { stepNumber: 4, title: 'توليد جدول سياحي بالذكاء الاصطناعي', action: 'يضغط على زر "خطط الرحلة مع AI" ويحدد الميزانية والمدة (3 أيام)', screen: 'مساعد AI Planner Modal', outcome: 'استلام جدول يومي متكامل (صباح، ظهيرة، مساء) في ثوانٍ.' },
  { stepNumber: 5, title: 'حجز إقامة أو تذكرة فعالية (Demo)', action: 'يختار فندق "هابيتاس العلا" ويضغط حجز خصماً من المحفظة التجريبية', screen: 'شاشة الحجز والمحفظة Demo Wallet', outcome: 'خصم الرصيد وتصدير تذكرة تأكيد حجز ورقم مرجعي برمز QR.' },
  { stepNumber: 6, title: 'حفظ الرحلة واستعراض التذاكر', action: 'ينتقل للملف الشخصي لمشاهدة التذاكر المحفوظة والجدول المولد', screen: 'الملف الشخصي والحجوزات', outcome: 'جاهزية كاملة لتنفيذ الرحلة في الواقع الميداني.' }
];

export const emptyStatesData: EmptyStateSpec[] = [
  { type: 'no-results', title: 'لم نجد نتائج مطابقة للبحث', description: 'تأكد من صحة الكلمات المكتوبة أو جرب البحث باسم مدينة أخرى مثل "الرياض" أو "جدة".', actionText: 'إعادة ضبط خيارات البحث', icon: 'SearchX' },
  { type: 'no-bookings', title: 'لا توجد حجوزات جارية في محفظتك', description: 'لم تقم بحجز أي إقامة أو فعالية حتى الآن. استكشف أبرز الوجهات واحجز أول تجربة.', actionText: 'تصفح الوجهات المتاحة', icon: 'TicketX' },
  { type: 'no-favorites', title: 'قائمة المفضلة فارغة حالياً', description: 'يمكنك إضافات الأماكن والفعاليات التي تنال إعجابك للعودة إليها بسهولة أثناء التخطيط.', actionText: 'استكشف المعالم والفعاليات', icon: 'HeartOff' },
  { type: 'no-notifications', title: 'لا توجد إشعارات جديدة', description: 'ستتلقى هنا تذكيرات السفر، تحديثات الحجوزات، والتوصيات الذكية الخاصة برحلتك.', actionText: 'تحديث الصفحة', icon: 'BellOff' },
  { type: 'network-error', title: 'عذراً! تعذر الاتصال بالخادم', description: 'يرجى التحقق من اتصالك بالإنترنت وإعادة المحاولة لتحديث خطة سفرك.', actionText: 'إعادة الاتصال الآن', icon: 'WifiOff' }
];

export const errorPagesSpecs = [
  { code: '404', title: 'الصفحة غير موجودة', desc: 'عذراً، يبدو أن الوجهة أو الصفحة التي تبحث عنها قد تم نقلها أو غير متاحة.', action: 'العودة للصفحة الرئيسية' },
  { code: '403', title: 'غير مصرح بالوصول', desc: 'هذه المنطقة مخصصة لإدارة النظام أو تتطلب تسجيل الدخول أولاً.', action: 'تسجيل الدخول' },
  { code: '500', title: 'خطأ داخلي في الخادم', desc: 'يعمل فريقنا الفني حالياً على معالجة المشكلة لتوفير تجربة سفر خالية من العيوب.', action: 'إعادة المحاولة' }
];
