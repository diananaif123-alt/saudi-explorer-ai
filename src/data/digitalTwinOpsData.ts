export interface DigitalTwinCityNode {
  id: string;
  name: string;
  region: string;
  visitorDensity: 'عالية جداً (زدحام)' | 'متوسطة (طبيعي)' | 'منخفضة (استيعاب موصى به)';
  occupancyRate: number; // percentage
  liveVisitors: number;
  activeEventsCount: number;
  weatherTemp: number;
  weatherDesc: string;
  airportFlow: string;
  transportStatus: string;
  lat: number;
  lng: number;
}

export const digitalTwinCitiesData: DigitalTwinCityNode[] = [
  {
    id: 'riyadh',
    name: 'الرياض (العاصمة)',
    region: 'منطقة الرياض',
    visitorDensity: 'عالية جداً (زدحام)',
    occupancyRate: 92,
    liveVisitors: 145200,
    activeEventsCount: 18,
    weatherTemp: 24,
    weatherDesc: 'سماء صافية مع طقس معتدل',
    airportFlow: 'مطار الملك خالد الدولي — 1,200 مسافر/ساعة',
    transportStatus: 'قطار الرياض والحافلات الذكية — تدفق سلس 88%',
    lat: 24.7136,
    lng: 46.6753
  },
  {
    id: 'alula',
    name: 'العلا',
    region: 'منطقة المدينة المنورة',
    visitorDensity: 'متوسطة (طبيعي)',
    occupancyRate: 85,
    liveVisitors: 28400,
    activeEventsCount: 6,
    weatherTemp: 22,
    weatherDesc: 'أجواء ربيعية مشمسة',
    airportFlow: 'مطار العلا الدولي — 450 مسافر/ساعة',
    transportStatus: 'حافلات النقل الفاخرة وسيارات الغولف الذكية',
    lat: 26.6166,
    lng: 37.9252
  },
  {
    id: 'diriyah',
    name: 'الدرعية التاريخية',
    region: 'منطقة الرياض',
    visitorDensity: 'عالية جداً (زدحام)',
    occupancyRate: 95,
    liveVisitors: 52100,
    activeEventsCount: 8,
    weatherTemp: 23,
    weatherDesc: 'سماء صافية ليلاً',
    airportFlow: 'مرتبطة بمطار الرياض',
    transportStatus: 'مواقف البجيري التفاعلية والنقل الترددي',
    lat: 24.7333,
    lng: 46.575
  },
  {
    id: 'jeddah',
    name: 'جدة التاريخية والبلد',
    region: 'منطقة مكة المكرمة',
    visitorDensity: 'متوسطة (طبيعي)',
    occupancyRate: 78,
    liveVisitors: 98300,
    activeEventsCount: 12,
    weatherTemp: 27,
    weatherDesc: 'نسيم بحري عليل',
    airportFlow: 'مطار الملك عبد العزيز الدولي — 1,800 مسافر/ساعة',
    transportStatus: 'تاكسي جدة الساحلي وحافلات البلد التراثية',
    lat: 21.4858,
    lng: 39.1925
  },
  {
    id: 'abha',
    name: 'أبها وسوداء عسير',
    region: 'منطقة عسير',
    visitorDensity: 'منخفضة (استيعاب موصى به)',
    occupancyRate: 64,
    liveVisitors: 31200,
    activeEventsCount: 5,
    weatherTemp: 17,
    weatherDesc: 'غيوم ومطرة خفيفة',
    airportFlow: 'مطار أبها الدولي — 600 مسافر/ساعة',
    transportStatus: 'تلفريك السودة والحافلات الجبلية',
    lat: 18.2164,
    lng: 42.5053
  },
  {
    id: 'neom',
    name: 'نيوم وسندالة',
    region: 'منطقة تبوك',
    visitorDensity: 'منخفضة (استيعاب موصى به)',
    occupancyRate: 71,
    liveVisitors: 12400,
    activeEventsCount: 4,
    weatherTemp: 25,
    weatherDesc: 'طقس بحري صافٍ',
    airportFlow: 'مطار نيوم خليج — 320 مسافر/ساعة',
    transportStatus: 'المركبات الكهربائية الذكية واليخوت',
    lat: 28.2952,
    lng: 34.6222
  }
];

export interface PredictiveAIForecast {
  id: string;
  city: string;
  trendType: 'ارتفاع زوار متوقع' | 'إشغال فندقي قياسي' | 'خطر ازدحام مؤقت' | 'فرصة تسويق واعدة';
  predictedGrowthPercent: number;
  confidenceRate: number; // percentage e.g. 96%
  recommendation: string;
  timeframe: string;
}

export const predictiveAIForecastsData: PredictiveAIForecast[] = [
  {
    id: 'f1',
    city: 'الدرعية والعلا',
    trendType: 'إشغال فندقي قياسي',
    predictedGrowthPercent: 38.5,
    confidenceRate: 97,
    recommendation: 'تفعيل العروض المتبادلة وتوجيه السياح نحو المسارات التراثية البديلة المفتوحة في حائل ونجران.',
    timeframe: 'خلال الأسبوعين القادمين'
  },
  {
    id: 'f2',
    city: 'أبها وقمم عسير',
    trendType: 'فرصة تسويق واعدة',
    predictedGrowthPercent: 45.0,
    confidenceRate: 94,
    recommendation: 'إطلاق حملات تسويقية مستهدفة للسياح الخليجيين نظراً لانخفاض درجات الحرارة والأجواء الضبابية.',
    timeframe: 'الموسم الصيفي القادم'
  },
  {
    id: 'f3',
    city: 'الرياض (بوليفارد ووادي حنيفة)',
    trendType: 'خطر ازدحام مؤقت',
    predictedGrowthPercent: 22.0,
    confidenceRate: 95,
    recommendation: 'تشغيل خطوط النقل الترددي الحافلي وتحويل بوابات الدخول الرقمية التفاعلية للحد من وقت الانتظار.',
    timeframe: 'نهاية الأسبوع الحالي'
  },
  {
    id: 'f4',
    city: 'جدة التاريخية والواجهة البحرية',
    trendType: 'ارتفاع زوار متوقع',
    predictedGrowthPercent: 31.2,
    confidenceRate: 92,
    recommendation: 'توسيع نطاق فعاليات الفن الحجازي والمأكولات البحرية لزيادة متوسط مدة إقامة الزائر.',
    timeframe: 'خلال الشهر الحالي'
  }
];

export interface CrisisScenario {
  id: string;
  title: string;
  severity: 'عالية' | 'متوسطة' | 'منخفضة';
  description: string;
  impactArea: string;
  aiSuggestedContingency: string;
  actionStatus: 'جاهز للتنفيذ بنقرة' | 'منفذ حالياً';
}

export const crisisScenariosData: CrisisScenario[] = [
  {
    id: 'c1',
    title: 'ازدحام مروري شديد في البجيري ومداخل الدرعية',
    severity: 'عالية',
    description: 'تجاوز الطاقة الاستيعابية لمواقف السيارات بنسبة 115% مع توافد 15,000 زائر إضافي في ساعة الذروة.',
    impactArea: 'منطقة البجيري والدرعية التاريخية',
    aiSuggestedContingency: 'إرسال إشعارات ذكية جغرافية للسياح بتوفر مواقف بديلة في جامعة الملك سعود مع توفير حافلات ترددية مجانية كل 3 دقائق.',
    actionStatus: 'جاهز للتنفيذ بنقرة'
  },
  {
    id: 'c2',
    title: 'تقلبات جوية وتوقع أمطار غزيرة في جبال السودة بالبحر',
    severity: 'متوسطة',
    description: 'توقع ضباب كثيف وعواصف رعدية مؤقتة قد تؤثر على جولات التلفريك والمشاة الميدانيين.',
    impactArea: 'منتزه السودة وأبها',
    aiSuggestedContingency: 'توجيه الزوار نحو المتاحف والقلاع الحجرية المغطاة في رجال ألمع والقرية التراثية مع توفير مظلات أمنية.',
    actionStatus: 'جاهز للتنفيذ بنقرة'
  },
  {
    id: 'c3',
    title: 'إلغاء فعالية موسيقية مفاجئ بسبب عطل في التيار الكهربائي',
    severity: 'متوسطة',
    description: 'تأثر 3,200 حامل تذكرة في مسرح مفتوح بالعلا.',
    impactArea: 'منطقة مسرح مرايا بالعلا',
    aiSuggestedContingency: 'تعويض تلقائي بحصص نقود مجانية في المحفظة الرقمية وتحويل الزوار فوراً لأمسية صخرة الفيل ومراقبة النجوم.',
    actionStatus: 'جاهز للتنفيذ بنقرة'
  }
];

export interface TourismNationalKPI {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  desc: string;
}

export const nationalTourismKPIs: TourismNationalKPI[] = [
  { label: 'إجمالي الزوار السنوي', value: '108.4 مليون زائر', change: '+19.2%', trend: 'up', desc: 'مقارنة بالعام السنوي السابق' },
  { label: 'معدل إشغال الفنادق', value: '82.4%', change: '+8.1%', trend: 'up', desc: 'متوسط الأداء الوطني' },
  { label: 'متوسط إنفاق الزائر', value: '4,850 ر.س', change: '+12.5%', trend: 'up', desc: 'لكل رحلة سياحية' },
  { label: 'متوسط مدة الإقامة', value: '6.8 أيام', change: '+0.9 يوم', trend: 'up', desc: 'ارتفاع في سياحة العائلات' },
  { label: 'معدل رضا الزوار', value: '94.6%', change: '+3.2%', trend: 'up', desc: 'بناءً على 450 ألف تقييم موثق' },
  { label: 'العائد المالي المباشر', value: '248 مليار ر.س', change: '+24.0%', trend: 'up', desc: 'مساهمة الناتج المحلي الإجمالي' }
];
