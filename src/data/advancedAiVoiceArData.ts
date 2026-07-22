export interface LandmarkGalleryImage {
  id: string;
  url: string;
  caption: string;
  type: 'cover' | 'exterior' | 'interior' | 'aerial' | 'night' | 'panorama';
}

export interface Landmark3DItem {
  id: string;
  name: string;
  nameEn: string;
  city: string;
  searchKeywords: string[];
  category: string;
  rating: number;
  reviewsCount: number;
  historicalPeriod: string;
  description: string;
  coverImage: string;
  galleryImages: LandmarkGalleryImage[];
  panorama360Url: string;
  avatarWelcomeScript: string;
  avatarWelcomeScriptEn: string;
  historicalDetails: string;
  bestTimeToVisit: string;
  weatherRecommendation: string;
  model3DType: 'hegra_tomb' | 'mud_palace' | 'roshan_house' | 'stone_village' | 'masmak_fort' | 'futuristic_island';
  historicalReconstructionText: string;
  nearbyHotels: { name: string; rating: number; price: string; distance: string }[];
  nearbyRestaurants: { name: string; cuisine: string; rating: number; distance: string }[];
  nearbyEvents: { name: string; date: string; location: string }[];
  similarDestinations: string[];
}

export const saudiLandmarks3DData: Landmark3DItem[] = [
  {
    id: 'alula',
    name: 'العلا — قصر الفريد وهقرا (مدائن صالح)',
    nameEn: 'AlUla — Qasr al-Farid & Hegra (Madain Saleh)',
    city: 'العلا',
    searchKeywords: ['العلا', 'هقرا', 'مدائن صالح', 'قصر الفريد', 'صخرة الفيل', 'الوجهات التاريخية'],
    category: 'موقع يونسكو للتراث العالمي',
    rating: 4.95,
    reviewsCount: 3420,
    historicalPeriod: 'الحضارة النبطية (القرن الأول الميلادي)',
    description: 'تحفة نبطية فريدة منحوتة في كتلة صخرية وردية معزولة، تُعد أول موقع في المملكة العربية السعودية يُدرج في قائمة التراث العالمي لليونسكو.',
    coverImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop', caption: 'الواجهة الرئيسية لقصر الفريد في هقرا', type: 'cover' },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop', caption: 'منظر جوي للواحات الجبلية والصحراء', type: 'aerial' },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop', caption: 'إضاءة صخرة الفيل في المساء', type: 'night' },
      { id: 'g4', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop', caption: 'التصاميم المعمارية الدقيقة للمقابر النبطية', type: 'exterior' }
    ],
    panorama360Url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop',
    avatarWelcomeScript: 'مرحباً بكم في العلا العريقة! أنا سارة، مرشدتكم الافتراضية. يقف قصر الفريد شامخاً عبر أكثر من ألفي عام كشاهد حي على إبداع النبطيين في العمارة النحتية الصخرية.',
    avatarWelcomeScriptEn: 'Welcome to historic AlUla! I am Sara, your virtual guide. Qasr al-Farid stands tall across two millennia as a living testament to Nabataean rock-cut architecture.',
    historicalDetails: 'يحتوي موقع الحجر (هقرا) على أكثر من 110 مقابر أثرية ذات واجهات مزخرفة بدقة عالية، تعكس التقاء الحضارة النبطية مع التأثيرات الإغريقية والرومانية.',
    bestTimeToVisit: 'من أكتوبر إلى مارس (الطقس معتدل ومشمس نهاراً ولطيف ليلاً)',
    weatherRecommendation: 'درجة الحرارة الآن 24°C — وقت مثالي للتجول الميداني والتقاط الصور أثناء غروب الشمس الذهبي.',
    model3DType: 'hegra_tomb',
    historicalReconstructionText: 'إعادة تخيلية: تعرض هذه المحاكاة ثلاثية الأبعاد كيف كانت القوافل التجارية القديمة تعبر طريق البخور وتستريح في أسواق هقرا المائية.',
    nearbyHotels: [
      { name: 'منتجع شادن العلا', rating: 4.9, price: '1,850 ر.س / ليلة', distance: '3.2 كم' },
      { name: 'منتجع هابيتاس العلا', rating: 4.95, price: '2,400 ر.س / ليلة', distance: '4.5 كم' },
      { name: 'منتجع بانيان تري العلا', rating: 4.98, price: '3,200 ر.س / ليلة', distance: '5.1 كم' }
    ],
    nearbyRestaurants: [
      { name: 'مطعم مرايا سوشال', cuisine: 'عالمي معاصر', rating: 4.9, distance: '2.1 كم' },
      { name: 'مطعم هسيا العلا', cuisine: 'شبي شبه الجزيرة العربية', rating: 4.8, distance: '3.0 كم' },
      { name: 'مطعم صخرة الفيل', cuisine: 'مأكولات ومشروبات راقية', rating: 4.85, distance: '1.5 كم' }
    ],
    nearbyEvents: [
      { name: 'مهرجان شتاء طنطورة التراثي', date: 'ديسمبر - فبراير', location: 'العلا القديمة' },
      { name: 'سماء العلا للمناطيد الملونة', date: 'يناير - مارس', location: 'هقرا' },
      { name: 'لحظات العلا الموسيقية بمصلح مرايا', date: 'طوال العام', location: 'مسرح مرايا' }
    ],
    similarDestinations: ['مدائن صالح', 'الدرعية التاريخية', 'قرية ذي عين']
  },
  {
    id: 'diriyah',
    name: 'الدرعية — حي الطريف وقصر سلوى',
    nameEn: 'Diriyah — At-Turaif & Salwa Palace',
    city: 'الدرعية (الرياض)',
    searchKeywords: ['الدرعية', 'الرياض', 'الطريف', 'البجيري', 'قصر سلوى', 'العاصمة التاريخية'],
    category: 'عاصمة الدولة السعودية الأولى وتراث اليونسكو',
    rating: 4.96,
    reviewsCount: 4890,
    historicalPeriod: 'تأسست عام 1727 م (1139 هـ)',
    description: 'جوهرة المملكة ومقر حكم الدولة السعودية الأولى، تتميز بالعمارة النجذية الأصيلة المصنوعة من اللبن وقصور الطين المهيبة على ضفاف وادي حنيفة.',
    coverImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop', caption: 'قصور حي الطريف الطينية التاريخية', type: 'cover' },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop', caption: 'الإضاءة الليلية لأسوار الطريف ومطل البجيري', type: 'night' },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1200&auto=format&fit=crop', caption: 'الأبراج النجذية وقصر سلوى الفاخر', type: 'exterior' },
      { id: 'g4', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', caption: 'مقر المطاعم العالمية في مطل البجيري', type: 'aerial' }
    ],
    panorama360Url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop',
    avatarWelcomeScript: 'أهلاً بكم في الدرعية، مهد الدولة السعودية ومصدر الفخر والاعتزاز! هنا التحم التاريخ الأصيل مع حاضر العز والمستقبل المشرق.',
    avatarWelcomeScriptEn: 'Welcome to Diriyah, the birthplace of the Saudi State! Here authentic history blends seamlessly with a bold modern vision.',
    historicalDetails: 'يضم حي الطريف قصر سلوى المكون من عدة طوابق طينية، والجامع الكبير، ومتاحف تفاعلية توثق سيرة الملك عبد العزيز ورجال التأسيس.',
    bestTimeToVisit: 'طوال العام، وخصوصاً خلال الأمسيات الشتوية والربيعية',
    weatherRecommendation: 'درجة الحرارة الآن 22°C — أجواء رائعة جداً للمشي والتنزه في مطل البجيري والتسوق في المتاجر التراثية.',
    model3DType: 'mud_palace',
    historicalReconstructionText: 'إعادة تخيلية: مجسم ثلاثي الأبعاد لسور الطريف النجدي، وأبراج المراقبة المضلعة وقصر سلوى المضيء.',
    nearbyHotels: [
      { name: 'فندق باب السمحاء الدرعية', rating: 4.9, price: '1,950 ر.س / ليلة', distance: '0.8 كم' },
      { name: 'فندق الرتز كارلتون الرياض', rating: 4.95, price: '2,100 ر.س / ليلة', distance: '6.2 كم' },
      { name: 'فندق سينتريس الدرعية', rating: 4.88, price: '1,400 ر.س / ليلة', distance: '2.5 كم' }
    ],
    nearbyRestaurants: [
      { name: 'مطعم تكية النجدي', cuisine: 'سعودي نجدي مبتكر', rating: 4.92, distance: '0.3 كم' },
      { name: 'مطعم الميز البجيري', cuisine: 'عالمي فاخر', rating: 4.88, distance: '0.2 كم' },
      { name: 'مطعم كافيه دي لا بيه', cuisine: 'فرنسي راقي', rating: 4.85, distance: '0.4 كم' }
    ],
    nearbyEvents: [
      { name: 'موسم الدرعية الثقافي', date: 'نوفمبر - مارس', location: 'مطل البجيري والطريف' },
      { name: 'سباق فورمولا إي الدرعية', date: 'يناير', location: 'حلبة الدرعية' },
      { name: 'احتفالات يوم التأسيس', date: '22 فبراير', location: 'حي الطريف' }
    ],
    similarDestinations: ['قصر المصمك', 'جدة التاريخية', 'قرية رِجال ألمع']
  },
  {
    id: 'jeddah_albalad',
    name: 'جدة التاريخية — حي البلد والرواشين',
    nameEn: 'Historic Jeddah — Al-Balad & Roshan Architecture',
    city: 'جدة',
    searchKeywords: ['جدة', 'البلد', 'جدة التاريخية', 'بيت نصيف', 'الرواشين', 'المنطقة التاريخية'],
    category: 'عروس البحر الأحمر والتراث العالمي',
    rating: 4.91,
    reviewsCount: 5120,
    historicalPeriod: 'القرن السابع الميلادي (بوابة مكة المكرمة البحرية)',
    description: 'متحف مفتوح يضم أربطة ومباني حجازية شاهقة مبنية من الحجر المنقبي والمستخرج من الشعب المرجانية ومزينة بالرواشين الخشبية المحفورة.',
    coverImage: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1200&auto=format&fit=crop', caption: 'الرواشين الخشبية البديعة في أزقة بلد جدة', type: 'cover' },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1200&auto=format&fit=crop', caption: 'بيت نصيف التاريخي والأسواق الحجازية', type: 'exterior' },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', caption: 'الإضاءة التراثية لحي البلد ليلاً', type: 'night' },
      { id: 'g4', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop', caption: 'قرب حي البلد من الكورنيش والبحر الأحمر', type: 'aerial' }
    ],
    panorama360Url: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1600&auto=format&fit=crop',
    avatarWelcomeScript: 'مرحباً بكم في عروس البحر الأحمر! جدة البلد تحكي نسيم البحر وعبق التاريخ التجاري وترحيب الحجاز بالسياح والزوار من كل صقع.',
    avatarWelcomeScriptEn: 'Welcome to the Bride of the Red Sea! Al-Balad echoes stories of maritime trade and legendary Hijazi hospitality.',
    historicalDetails: 'تتميز دور نصيف وشربتلي والمتبولي بأسقف خشب المانغروف، وتصاميم التهوية الذكية عبر الرواشين الخشبية المفرغة بدقة متناهية.',
    bestTimeToVisit: 'من نوفمبر إلى أبريل',
    weatherRecommendation: 'درجة الحرارة الآن 26°C — نسمات بحرية عليلة ومناسبة جداً للتجول في أزقة البلد التراثية ومقاهيها الفنية.',
    model3DType: 'roshan_house',
    historicalReconstructionText: 'إعادة تخيلية: نموذج تفاعلي يبين حركة القوافل البحرية في باب مكة وباب شريف وموانئ جدة المرجانية القديمة.',
    nearbyHotels: [
      { name: 'فندق إيدن باي جدة البلد', rating: 4.88, price: '850 ر.س / ليلة', distance: '0.4 كم' },
      { name: 'فندق بارك حياة جدة', rating: 4.95, price: '1,800 ر.س / ليلة', distance: '5.5 كم' },
      { name: 'فندق شيراتون الكورنيش', rating: 4.85, price: '1,200 ر.س / ليلة', distance: '7.0 كم' }
    ],
    nearbyRestaurants: [
      { name: 'مطعم السقالة الحجازي', cuisine: 'مأكولات بحرية حجازية', rating: 4.9, distance: '0.5 كم' },
      { name: 'مطعم رأس شربتلي', cuisine: 'شبي حجازي أصل', rating: 4.85, distance: '0.2 كم' },
      { name: 'مقهى مقعد جيلان التراثي', cuisine: 'قهوة وشاهي جمر وخفايف', rating: 4.92, distance: '0.1 كم' }
    ],
    nearbyEvents: [
      { name: 'مهرجان البحر الأحمر السينمائي الدولي', date: 'ديسمبر', location: 'البلد التاريخية' },
      { name: 'موسم جدة الثقافي', date: 'مايو - يوليو', location: 'الكورنيش والبلد' },
      { name: 'رمضانيات البلد الحجازية', date: 'شهر رمضان', location: 'حي البلد' }
    ],
    similarDestinations: ['ينبع البحر التاريخية', 'سوق القيصرية بالأحساء', 'حي الطريف']
  },
  {
    id: 'rijal_almaa',
    name: 'أبها — قرية رجال ألمع وسوداء عسير',
    nameEn: 'Asir — Rijal Almaa Heritage Village & Soudah',
    city: 'أبها / عسير',
    searchKeywords: ['أبها', 'عسير', 'رجال ألمع', 'السودة', 'القط العسيري', 'الحصون الحجرية'],
    category: 'عمارة الحصون الحجرية وفن القط العسيري',
    rating: 4.94,
    reviewsCount: 2150,
    historicalPeriod: 'أكثر من 900 عام من التاريخ الحجري المعماري',
    description: 'حصون حجرية مجصصة بالكوارتز الأبيض وألوان القط العسيري البديعة، تعتلي قمم جبال السروات الخضراء الشاهقة.',
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop', caption: 'قصور رجال ألمع الحجرية الشاهقة', type: 'cover' },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop', caption: 'المدرجات الزراعية الخضراء والضباب الماطر', type: 'aerial' },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop', caption: 'ألوان فن القط العسيري داخل القصور', type: 'interior' },
      { id: 'g4', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop', caption: 'الإضاءة الليلية التراثية للحصون', type: 'night' }
    ],
    panorama360Url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop',
    avatarWelcomeScript: 'مرحباً بكم في عسير الهول والجمال! قرية رجال ألمع تجمع بين مناعة الحصون الحجرية ورقة الفن العسيري الملون.',
    avatarWelcomeScriptEn: 'Welcome to Asir! Rijal Almaa blends stone fortress architecture with vibrant Almaa art forms.',
    historicalDetails: 'تتكون القرية من قصور متعددة الأدوار مبنية بالحجارة الصماء الملونة والكوارتز الأبيض النادر، وتحتوي على متحف أثري غني بالوثائق.',
    bestTimeToVisit: 'طوال العام (تتميز بالطقس البارد والمطير والضباب في الصيف)',
    weatherRecommendation: 'درجة الحرارة الآن 18°C — أجواء غائمة ورائعة جداً مع زخات مطر خفيفة وضباب جلي.',
    model3DType: 'stone_village',
    historicalReconstructionText: 'إعادة تخيلية: نموذج ثلاثي الأبعاد يبين طوابق القصور الحجرية وتفاصيل رسم القط العسيري على الجدران.',
    nearbyHotels: [
      { name: 'منتجع السودة الجبلي', rating: 4.88, price: '1,100 ر.س / ليلة', distance: '4.2 كم' },
      { name: 'فندق بلو جاردن أبها', rating: 4.85, price: '750 ر.س / ليلة', distance: '12.0 كم' },
      { name: 'فندق قصر أبها التراثي', rating: 4.9, price: '1,350 ر.س / ليلة', distance: '15.0 كم' }
    ],
    nearbyRestaurants: [
      { name: 'مطعم الحنيذ العسيري', cuisine: 'حنيذ ومأكولات ألمعية', rating: 4.95, distance: '0.8 كم' },
      { name: 'مقهى إطلالة السودة', cuisine: 'قهوة سعودية وحلويات سودية', rating: 4.9, distance: '3.5 كم' },
      { name: 'مطعم قرية ألمع التراثي', cuisine: 'أطباق عسير الشعبية', rating: 4.88, distance: '0.2 كم' }
    ],
    nearbyEvents: [
      { name: 'موسم صيف عسير الماطر', date: 'يونيو - أغسطس', location: 'السودة وأبها' },
      { name: 'مهرجان قمم السروات', date: 'يوليو', location: 'رجال ألمع' },
      { name: 'فعاليات شارع الفن أبها', date: 'طوال العام', location: 'وسط مدينة أبها' }
    ],
    similarDestinations: ['قرية ذي عين بالباحة', 'العلا', 'الدرعية']
  },
  {
    id: 'masmak_riyadh',
    name: 'الرياض — قصر المصمك التاريخي وسوق الزل',
    nameEn: 'Riyadh — Al Masmak Fortress & Souq Al-Zal',
    city: 'الرياض',
    searchKeywords: ['الرياض', 'المصمك', 'قصر المصمك', 'سوق الزل', 'توحيد المملكة', 'العاصمة'],
    category: 'رمز استعادة الرياض وتوحيد المملكة',
    rating: 4.93,
    reviewsCount: 4100,
    historicalPeriod: 'بُني عام 1895 م (1313 هـ)',
    description: 'حصن طيني سميك مزود بـ 4 أبراج مراقبة دائرية، شهد ملحمة فتح الرياض الخالدة على يد الملك عبد العزيز بن عبد الرحمن آل سعود عام 1902 م.',
    coverImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop', caption: 'بوابة المصمك الطينية وأبراج المراقبة', type: 'cover' },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop', caption: 'سوق الزل التراثي والمزاد العلني اليومي', type: 'exterior' },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop', caption: 'المجلس النجدي والديوان التراثي داخل القصر', type: 'interior' },
      { id: 'g4', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', caption: 'ساحة الصفاة والمصمك متوهجاً ليلاً', type: 'night' }
    ],
    panorama360Url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1600&auto=format&fit=crop',
    avatarWelcomeScript: 'أهلاً بكم في قصر المصمك، الصرح الخالد الذي انطلقت منه مسيرة التوحيد والرفعة لمملكتنا الغالية!',
    avatarWelcomeScriptEn: 'Welcome to Al Masmak, the historic fortress where the unification journey of Saudi Arabia began!',
    historicalDetails: 'يحتوي القصر على البوابة الخشبية الشهيرة المصنوعة من جذوع النخل وفيها رأس حربة السهم الشهير، والديوان، والمسجد، والبئر.',
    bestTimeToVisit: 'من أكتوبر إلى أبريل',
    weatherRecommendation: 'درجة الحرارة الآن 23°C — طقس مناسب جداً لزيارة سوق الزل التراثي ومتحف القصر التفاعلي.',
    model3DType: 'masmak_fort',
    historicalReconstructionText: 'إعادة تخيلية: محاكاة ثلاثية الأبعاد لبوابة المصمك والأسوار الدفاعية الطينية المحيطة بها.',
    nearbyHotels: [
      { name: 'فندق الفايصلية الرياض', rating: 4.92, price: '1,800 ر.س / ليلة', distance: '5.2 كم' },
      { name: 'فندق فورسيزونز برج المملكة', rating: 4.95, price: '2,600 ر.س / ليلة', distance: '8.0 كم' },
      { name: 'فندق الماريوت الديرة', rating: 4.82, price: '650 ر.س / ليلة', distance: '1.1 كم' }
    ],
    nearbyRestaurants: [
      { name: 'مطعم القرية النجدي', cuisine: 'جريش وكبسة ومأكولات نجدية', rating: 4.9, distance: '0.6 كم' },
      { name: 'مطعم حنيذ الجنوب', cuisine: 'حنيذ ومكتوم', rating: 4.85, distance: '1.2 كم' },
      { name: 'مقهى سوق الزل', cuisine: 'قهوة وشاهي بذور النجف', rating: 4.88, distance: '0.2 كم' }
    ],
    nearbyEvents: [
      { name: 'فعاليات يوم التأسيس بسوق الزل', date: '22 فبراير', location: 'ساحة المصمك' },
      { name: 'موسم الرياض التراثي', date: 'نوفمبر - مارس', location: 'الديرة والرياض' },
      { name: 'مزاد سوق الزل المباشر للتحف', date: 'يومياً بعد العصر', location: 'سوق الزل' }
    ],
    similarDestinations: ['الدرعية', 'قصر المربع', 'قلعة تبوك']
  },
  {
    id: 'neom_sindalah',
    name: 'نيوم — جزيرة سندالة وذا لاين المستقبلي',
    nameEn: 'NEOM — Sindalah Island & The Line',
    city: 'نيوم',
    searchKeywords: ['نيوم', 'سندالة', 'ذا لاين', 'تبوك', 'الوجهات المستقبلية', 'البحر الأحمر'],
    category: 'وجهة المستقبل واليخوت الفاخرة العالمية',
    rating: 4.98,
    reviewsCount: 1890,
    historicalPeriod: 'رؤية السعودية 2030 المستقبلية',
    description: 'جزيرة فائقة الفخامة في مياه البحر الأحمر الفيروزية تجمع بين الهندسة المعمارية المستدامة وأحدث مرسى عالمي لليخوت.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop', caption: 'مارينا سندالة لليخوت الفاخرة والمياه الفيروزية', type: 'cover' },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop', caption: 'التصاميم المعمارية المستقبلية في جزيرة سندالة', type: 'exterior' },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', caption: 'الإضاءة اللامعة لمرسى اليخوت ليلاً', type: 'night' },
      { id: 'g4', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop', caption: 'منظر جوي للجزيرة الشعاب المرجانية الحية', type: 'aerial' }
    ],
    panorama360Url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    avatarWelcomeScript: 'أهلاً بكم في المستقبل! مرحباً بكم في نيوم حيث تعاد صياغة مفهوم الاستدامة والرفاهية والابتكار البشري.',
    avatarWelcomeScriptEn: 'Welcome to the future! NEOM redefines human innovation, sustainability, and ultra-luxury.',
    historicalDetails: 'تعتمد سندالة ونيوم بنسبة 100% على الطاقة المتجددة والنقل الذكي الخالي من الانبعاثات الكربونية.',
    bestTimeToVisit: 'طوال أيام السنة',
    weatherRecommendation: 'درجة الحرارة الآن 25°C — مياه فيروزية صافية وطقس بحري مثالي للإبحار والغوص.',
    model3DType: 'futuristic_island',
    historicalReconstructionText: 'تصميم مستقبلي 3D: استكشاف تفاعلي لمنطقة المارينا والنادي البحري والمجتمعات المعمارية الذكية.',
    nearbyHotels: [
      { name: 'منتجع سندالة الفاخر نيوم', rating: 4.98, price: '4,500 ر.س / ليلة', distance: '0.1 كم' },
      { name: 'فندق فورسيزونز نيوم', rating: 4.95, price: '3,800 ر.س / ليلة', distance: '1.2 كم' },
      { name: 'منتجع أوكساجون الشاطئي', rating: 4.9, price: '2,900 ر.س / ليلة', distance: '12.0 كم' }
    ],
    nearbyRestaurants: [
      { name: 'مطعم ميشلان نيوم البحري', cuisine: 'مأكولات بحرية عالمية مبتكرة', rating: 4.98, distance: '0.2 كم' },
      { name: 'مقهى المرسى المستقبلي', cuisine: 'قهوة مختصة وعصائر طازجة', rating: 4.9, distance: '0.1 كم' },
      { name: 'مطعم ذا لاين الشاطئي', cuisine: 'أطباق صحية ومستدامة', rating: 4.92, distance: '0.5 كم' }
    ],
    nearbyEvents: [
      { name: 'ألعاب نيوم الشاطئية العالمية', date: 'أكتوبر - نوفمبر', location: 'شواطئ نيوم' },
      { name: 'منتدى نيوم للابتكار والاستدامة', date: 'مارس', location: 'مركز نيوم' },
      { name: 'سباقات الهيدروجين المائية العالمية', date: 'ديسمبر', location: 'مارينا سندالة' }
    ],
    similarDestinations: ['مشروع البحر الأحمر', 'أمالا', 'جزيرة فرسان']
  }
];

export interface VoiceAssistantPresetQuery {
  id: string;
  queryAr: string;
  queryEn: string;
  category: string;
  answerAr: string;
  answerEn: string;
  actionDestinationId?: string;
}

export const voiceQueryPresetsData: VoiceAssistantPresetQuery[] = [
  {
    id: 'q1',
    queryAr: 'حدثني عن تاريخ العلا وقصر الفريد ومدائن صالح',
    queryEn: 'Tell me about AlUla history and Qasr al-Farid',
    category: 'معالم وتاريخ',
    answerAr: 'العلا موطن الحضارة النبطية وقصر الفريد منحوت في جبل صخري وردي يعود للقرن الأول الميلادي، وهو أول موقع يونسكو بالمملكة ويضم أكثر من 110 مقابر أثرية.',
    answerEn: 'AlUla is home to Nabataean civilization and Qasr al-Farid is carved into a pink sandstone rock from the 1st century AD.',
    actionDestinationId: 'alula'
  },
  {
    id: 'q2',
    queryAr: 'ما هي أهم الأماكن السياحية في الدرعية والرياض؟',
    queryEn: 'What are the top attractions in Diriyah and Riyadh?',
    category: 'استكشاف ووجهات',
    answerAr: 'حي الطريف التاريخي المباشر على وادي حنيفة، وقصر سلوى الطيني، ومطل البجيري الفاخر، وقصر المصمك وسوق الزل التراثي.',
    answerEn: 'At-Turaif historic district along Wadi Hanifa, Salwa Palace, Bujairi Terrace fine dining, and Al Masmak Fortress.',
    actionDestinationId: 'diriyah'
  },
  {
    id: 'q3',
    queryAr: 'اقترح لي برنامج سياحي لزيارة جدة التاريخية والبلد',
    queryEn: 'Suggest an itinerary for Historic Jeddah Al-Balad',
    category: 'تخطيط بالذكاء',
    answerAr: 'يبدأ البرنامج من بيت نصيف التراثي، ثم التجول بين الرواشين الخشبية وشراء البخور من شارع القابل، وتناول العشاء الحجازي في مقعد جيلان.',
    answerEn: 'Start at Nassif House, wander among wooden Roshan balconies, shop Qabil street, and enjoy Hijazi dinner at Qailan cafe.',
    actionDestinationId: 'jeddah_albalad'
  },
  {
    id: 'q4',
    queryAr: 'كيف الطقس والأنشطة المناسبة في أبها وسوداء عسير؟',
    queryEn: 'How is the weather and activities in Abha and Asir?',
    category: 'طقس وأنشطة',
    answerAr: 'الأجواء في أبها وعسير باردة ولطيفة جداً (18°C) مع ضباب وزخات مطر. نوصي بزيارة قرية رجال ألمع الحجرية، والتلفريك في السودة، ومهرجان صيف عسير.',
    answerEn: 'Abha weather is cool and pleasant (18°C) with fog and rain showers. We recommend Rijal Almaa stone village and Soudah cable cars.',
    actionDestinationId: 'rijal_almaa'
  },
  {
    id: 'q5',
    queryAr: 'ما هي المشاريع المستقبلية في نيوم وسندالة؟',
    queryEn: 'What are the futuristic projects in NEOM and Sindalah?',
    category: 'المستقبل ورؤية 2030',
    answerAr: 'جزيرة سندالة لليخوت الفاخرة، وذا لاين المدينة الإدراكية الخالية من السيارات والانبعاثات، وتروجينا للرياضات الشتوية، وأوكساجون للمبتكرين.',
    answerEn: 'Sindalah ultra-luxury island, The Line zero-emission cognitive city, Trojena snow resort, and Oxagon innovation hub.',
    actionDestinationId: 'neom_sindalah'
  }
];

export const futureArchitectureModules = [
  {
    name: 'محركات الذكاء الاصطناعي (AI Engines)',
    status: 'جاهزية الربط Ready for API',
    desc: 'جاهزة للربط مع Gemini 1.5 Pro/Flash، OpenAI GPT-4o، وGoogle Cloud Speech-to-Text APIs.'
  },
  {
    name: 'أنظمة الخرائط والرصد الجغرافي (GIS & Maps)',
    status: 'جاهزية الربط Ready for Maps SDK',
    desc: 'معمارية مرنة للربط مع Google Maps Platform (3D Tiles, Places API, Routes API).'
  },
  {
    name: 'الواقع المعزز والثلاثي الأبعاد (WebXR & 3D WebGL)',
    status: 'جاهزية الربط WebXR Compatible',
    desc: 'دعم افتراضي كامل لتقنيات Three.js، Babylon.js وARKit / ARCore للعرض عبر الجوال.'
  },
  {
    name: 'بوابات الدفع والخدمات المالية (Payments & Fintech)',
    status: 'جاهزية الربط Fintech Modular',
    desc: 'مهيأة للربط مع مدى (Mada)، Apple Pay، Visa/Mastercard عبر بوابات الدفع المعتمدة.'
  },
  {
    name: 'الأنظمة الحكومية والربط الموحد (Government SSO)',
    status: 'جاهزية الربط Nafath / IAM Ready',
    desc: 'مهيأة للتكامل المباشر مع النفاذ الوطني الموحد (Nafath) وبوابات وزارة السياحة.'
  }
];

