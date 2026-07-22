export interface AiChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestedActions?: string[];
  attachedCard?: {
    title: string;
    location: string;
    rating: number;
    image: string;
    type: string;
  };
}

export interface GeneratedItineraryDay {
  dayNumber: number;
  date: string;
  title: string;
  weather: { temp: string; condition: string; icon: string };
  morning: { time: string; title: string; category: string; location: string; duration: string; cost: string; notes: string };
  afternoon: { time: string; title: string; category: string; location: string; duration: string; cost: string; notes: string };
  evening: { time: string; title: string; category: string; location: string; duration: string; cost: string; notes: string };
  hotelRecommendation: { name: string; stars: number; pricePerNight: string; image: string };
  restaurantRecommendation: { name: string; cuisine: string; priceCategory: string; image: string };
  transportation: string;
  dayEstimatedCost: string;
}

export interface GeneratedTripPlan {
  id: string;
  title: string;
  createdAt: string;
  cities: string[];
  durationDays: number;
  totalEstimatedCost: string;
  tripType: string;
  budgetCategory: string;
  days: GeneratedItineraryDay[];
}

export interface NlSearchResult {
  query: string;
  aiSummary: string;
  matches: {
    name: string;
    category: string;
    location: string;
    description: string;
    rating: number;
    badge: string;
  }[];
}

export const quickPromptSuggestions = [
  'أريد مكانًا هادئًا للجلوس والعشاء في الرياض 🌙',
  'اقترح رحلة عائلية لمدة 4 أيام في العلا ⛰️',
  'أين أذهب مع الأطفال في جدة اليوم؟ 🌊',
  'أفضل مواقع التصوير الفوتوغرافي للتراث السعودي 📸',
  'جدول رحلة اقتصادية لمدة 3 أيام في أبها 🌲'
];

export const initialAiChatMessages: AiChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'ai',
    text: 'مرحباً بك! أنا المرشد الذكي لـ SAUDI EXPLORER AI. كيف يمكنني مساعدتك في تخطيط رحلتك المثالية في المملكة اليوم؟ يمكنك التحدث معي نصياً أو صوتياً.',
    timestamp: '10:00 ص',
    suggestedActions: [
      'خطط رحلة 3 أيام في العلا',
      'أفضل الفنادق ذات الإطلالة بجدة',
      'أماكن هادئة بالرياض'
    ]
  },
  {
    id: 'msg-2',
    sender: 'user',
    text: 'أريد مكانًا هادئًا ومميزًا للعشاء في العلا يطل على التراث.',
    timestamp: '10:01 ص'
  },
  {
    id: 'msg-3',
    sender: 'ai',
    text: 'بناءً على اهتماماتك بالتراث والهدوء، أوصي بشدة بمطعم "سهيل العلا" أو "تاما بمنتجع هابيتاس". كلا المكانين يقدما إطلالة صحراوية ساحرة مع أطباق سعودية مبتكرة.',
    timestamp: '10:01 ص',
    attachedCard: {
      title: 'مطعم سهيل العلا التراثي',
      location: 'البلدة القديمة - العلا',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400',
      type: 'مأكولات فاخرة'
    }
  }
];

export const demoGeneratedPlansList: GeneratedTripPlan[] = [
  {
    id: 'plan-alula-1',
    title: 'رحلة سحر العلا والتراث الحِجري (3 أيام)',
    createdAt: '2026-07-20',
    cities: ['العلا'],
    durationDays: 3,
    totalEstimatedCost: '4,800 ريال',
    tripType: 'ثقافية فاخرة',
    budgetCategory: 'فاخر',
    days: [
      {
        dayNumber: 1,
        date: 'اليوم الأول',
        title: 'استكشاف موقع الحِجر (مدائن صالح) ومسرح طنطورة',
        weather: { temp: '27°C', condition: 'مشمس مع نسيم لطيف', icon: 'Sun' },
        morning: {
          time: '08:30 ص',
          title: 'جولة الحِجر الأثرية برفقة مرشد سياحي',
          category: 'تراث وآثار',
          location: 'موقع الحِجر اليونسكو',
          duration: '3 ساعات',
          cost: '150 ريال',
          notes: 'تشمل استكشاف المقابر النبطية وقصر الفريد.'
        },
        afternoon: {
          time: '01:30 م',
          title: 'غداء تراثي في مطعم مرخ بالبلدة القديمة',
          category: 'مأكولات ومطاعم',
          location: 'البلدة القديمة بالعلا',
          duration: '1.5 ساعة',
          cost: '180 ريال',
          notes: 'جلسات شعبية مريحة مع المأكولات النجدية الحجازية.'
        },
        evening: {
          time: '06:00 م',
          title: 'مشاهدة غروب الشمس عند جبل الفيل وحفلة مسرحية',
          category: 'طبيعة وفعاليات',
          location: 'صخرة الفيل',
          duration: '3 ساعات',
          cost: 'مجاني / حسب الفعالية',
          notes: 'أفضل إضاءة للتصوير الفوتوغرافي أثناء الشفق.'
        },
        hotelRecommendation: {
          name: 'منتجع هابيتاس العلا البيئي',
          stars: 5,
          pricePerNight: '1,800 ريال',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400'
        },
        restaurantRecommendation: {
          name: 'مطعم تاما - هابيتاس',
          cuisine: 'سعودي عالمي',
          priceCategory: 'فاخر',
          image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400'
        },
        transportation: 'سيارة خاصة دفع رباعي مع سائق (مشمولة)',
        dayEstimatedCost: '2,130 ريال'
      },
      {
        dayNumber: 2,
        date: 'اليوم الثاني',
        title: 'وادي الفن والمغامرة في دادان وجبل عكمة',
        weather: { temp: '29°C', condition: 'مشمس صافٍ', icon: 'Sun' },
        morning: {
          time: '09:00 ص',
          title: 'زيارة النقوش الأثرية بـ جبل عكمة ودادان',
          category: 'تاريخ وآثار',
          location: 'جبل عكمة',
          duration: '2.5 ساعة',
          cost: '100 ريال',
          notes: 'مكتبة النقوش المفتوحة التاريخية.'
        },
        afternoon: {
          time: '02:00 م',
          title: 'جولة واحة العلا والتسوق من المتاجر المحلية',
          category: 'تسوق وطبيعة',
          location: 'واحة العلا الثقافية',
          duration: '2 ساعة',
          cost: '100 ريال',
          notes: 'شراء المنتجات المحلية وزيت الزيتون والتمور.'
        },
        evening: {
          time: '07:00 م',
          title: 'عشاء فاخر في مطعم سهيل والتجول في البلدة القديمة',
          category: 'مطاعم وتراث',
          location: 'سوق العلا التراثي',
          duration: '2.5 ساعة',
          cost: '250 ريال',
          notes: 'عشاء مع ألحان الموسيقى التراثية الحية.'
        },
        hotelRecommendation: {
          name: 'منتجع بانيان تري العلا',
          stars: 5,
          pricePerNight: '2,200 ريال',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400'
        },
        restaurantRecommendation: {
          name: 'مطعم سهيل العلا',
          cuisine: 'نجدي تراثي',
          priceCategory: 'فاخر',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400'
        },
        transportation: 'حافلة سياحية فاخرة مكيفة',
        dayEstimatedCost: '1,650 ريال'
      }
    ]
  }
];

export const sampleNlQueries: NlSearchResult[] = [
  {
    query: 'أريد مكانًا هادئًا للعشاء',
    aiSummary: 'بناءً على تفضيلك للهدوء والخصوصية والإطلالات الساحرة، نقترح عليك الأماكن التالية في العلا والرياض وجدة:',
    matches: [
      { name: 'مطعم سهيل العلا التراثي', category: 'مطعم نجد فاخر', location: 'العلا', description: 'جلسات هادئة بين الجبال والجدران الطينية مع أطباق سعودية أصيلة.', rating: 4.9, badge: 'الأعلى هدوءاً' },
      { name: 'مطعم الضيافة النجدية', category: 'مطعم تراثي', location: 'الرياض - الدرعية', description: 'إطلالة مباشرة على وادي حنيفة ومباني الطين التاريخية.', rating: 4.8, badge: 'إطلالة تراثية' },
      { name: 'مقاهي ومطاعم البحر بجدة', category: 'مأكولات بحرية', location: 'جدة - الواجهة البحرية', description: 'أجواء شاطئية هادئة مع ألحان أمواج البحر الأحمر.', rating: 4.7, badge: 'إطلالة بحرية' }
    ]
  },
  {
    query: 'أين أذهب مع الأطفال؟',
    aiSummary: 'توصيات ذكية لأفضل الأماكن الترفيهية والتفاعلية الآمنة للأطفال والعائلات:',
    matches: [
      { name: 'بوليفارد وورلد والرياض سيتي', category: 'ترفيه عائلي', location: 'الرياض', description: 'منطقة ألعاب ضخمة، سينما تفاعلية، وقوارب مائية آمنة.', rating: 4.9, badge: 'مثالي للأطفال' },
      { name: 'فقيه أكواريوم والواجهة البحرية', category: 'تعليم وتسلية', location: 'جدة', description: 'عروض الدلافين والأحياء المرجانية التعليمية للأطفال.', rating: 4.8, badge: 'تفاعلي' },
      { name: 'منتزه السودة وحديقة أبو خيال', category: 'طبيعة ومغامرة', location: 'أبها', description: 'مساحات خضراء، تلفريك، ومناطق ألعاب آمنة بين الجبال.', rating: 4.7, badge: 'طبيعة عائلية' }
    ]
  }
];

export const aiNotificationsDemo = [
  { id: 'ainotif-1', type: 'crowd', title: 'تنبيه ازدحام في الحِجر', message: 'تشهد منطقة الحِجر إقبالاً كبيراً الآن. نقترح زيارة جبل عكمة أولاً لتجنب الانتظار.', time: 'قبل 15 دقيقة' },
  { id: 'ainotif-2', type: 'weather', title: 'تحديث الطقس بالعلا', message: 'انخفاض ناعم في درجة الحرارة الليلة إلى 22°م، أجواء مثالية للمخيمات الصحراوية.', time: 'قبل ساعة' },
  { id: 'ainotif-3', type: 'deal', title: 'عرض ذكي مخصص لك', message: 'حصولك على خصم 15% في مطعم سهيل نظراً لتفضيلك المأكولات النجدية.', time: 'قبل 3 ساعات' }
];
