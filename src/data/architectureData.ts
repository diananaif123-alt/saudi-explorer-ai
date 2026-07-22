export interface TechStackItem {
  category: string;
  technology: string;
  version: string;
  justification: string;
}

export interface ApiEndpoint {
  module: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  access: 'Public' | 'Authenticated' | 'Admin' | 'Partner';
}

export interface SecurityLayer {
  title: string;
  description: string;
  mechanism: string;
}

export const techStackData: TechStackItem[] = [
  { category: 'Frontend (Web)', technology: 'React 19 + TypeScript + Vite', version: 'v19.0 / Vite 6', justification: 'سرعة تحضير فائقة، توفير دعم الأنماط ونوعية البيانات الصارمة (Strict Type-Safety)، وأداء متفوق للأجهزة المختلفة.' },
  { category: 'Styling & UI Framework', technology: 'Tailwind CSS v4 + Motion', version: 'v4.1 / v12', justification: 'تصميم سريع، مرن، مع حركات وانتقالات سلسة فائقة الانسيابية دون إثقال الحزمة (Zero-runtime overhead).' },
  { category: 'Mobile App (Future)', technology: 'React Native / Expo Workflow', version: 'v0.74+', justification: 'توفير كود موحد للـ iOS والأندرويد مع أداء قريب من النيتيف والاستفادة من مكتبات React الحالية.' },
  { category: 'Backend Framework', technology: 'Node.js (Express / NestJS)', version: 'v22 LTS', justification: 'معمارية خفيفة وقابلة للتوسع عالي السرعة مع معالجة آلاف الطلبات المتزامنة (Non-blocking I/O).' },
  { category: 'Primary Database', technology: 'PostgreSQL + Drizzle ORM / Firestore', version: 'v16 / v10', justification: 'قواعد بيانات علائقية مرنة وآمنة للبيانات الهيكلية (الحجوزات، المستخدمون) مع دعم الاستعلامات الجغرافية GIS.' },
  { category: 'Cache & Session Layer', technology: 'Redis Enterprise / Upstash', version: 'v7.2', justification: 'تخزين مؤقت عالي السرعة (In-memory caching) لخطط السفر ومخرجات AI وجلسات الدخول الجارية.' },
  { category: 'AI & Machine Learning Layer', technology: 'Google Gemini 2.5 Flash / Pro API', version: 'GenAI SDK', justification: 'أفضل نموذج ذكاء اصطناعي تفاعلي صادر من Google لبناء جداول سياحية وتحليل الملاحظات باللغتين العربية والإنجليزية.' },
  { category: 'Authentication & Identity', technology: 'Firebase Auth / NextAuth OAuth 2.0', version: 'v10', justification: 'دعم تسجيل الدخول الموحد SSO، التحقق ثنائي العوامل 2FA، والتأمين عبر الهوية الرقمية الوطنية مستقبلاً.' },
  { category: 'Maps & GIS Provider', technology: 'Google Maps Platform / Mapbox GL JS', version: 'v3', justification: 'أعلى دقة خرائط مع دعم المعالم ثلاثية الأبعاد 3D والعرض الجغرافي للمواقع التراثية بكفاءة عالية.' },
  { category: 'Cloud Infrastructure', technology: 'Google Cloud Platform (Cloud Run / GKE)', version: 'Serverless', justification: 'بنية سحابية ذاتية التوسع (Auto-scaling)، استجابة عالية، وتوزيع الحمل بموثوقية 99.99%.' },
  { category: 'File & Media Storage', technology: 'Google Cloud Storage (GCS) / CDN', version: 'v2', justification: 'حفظ وتوزيع الصور عالية الدقة والوسائط المتعددة بسرعة فائقة عبر خوادم متوزعة متميزة.' },
  { category: 'Notifications Engine', technology: 'Firebase Cloud Messaging (FCM) / Twilio', version: 'v10', justification: 'إرسال إشعارات لحظية مخصصة ورحلات تذكيرية عبر الرسائل النصية والإشعارات المنبثقة.' },
  { category: 'Analytics & Observability', technology: 'Google Analytics 4 / Datadog / Sentry', version: 'v4', justification: 'رصد الأعطال وتتبع سلوك الزوار والتحليلات الأداء لحظياً بكفاءة عالية.' },
  { category: 'Testing Frameworks', technology: 'Jest + Vitest + Playwright', version: 'v29 / v1.4', justification: 'اختبارات الوحدة (Unit Tests)، اختبارات التكامل، واختبارات القبول الشاملة End-to-End.' },
];

export const systemLayers = [
  {
    name: '1. Presentation Layer (واجهة المستخدم)',
    components: ['Web SPA (React 19)', 'Mobile App (React Native)', 'Interactive Maps View', 'AR Canvas Overlay'],
    description: 'طبقة العرض والعميل، المسؤولة عن تقديم تجربة بصرية فاخرة واستجابة فورية لكافة الأجهزة مع التفاعل السلس.'
  },
  {
    name: '2. API Gateway & Security Layer (بوابة الخدمة والأمان)',
    components: ['Nginx Reverse Proxy', 'Rate Limiter', 'WAF (Cloud Armor)', 'JWT Validator', 'CORS & SSL Enforcer'],
    description: 'بوابة استقبال جميع الطلبات وتأمينها ومنع الهجمات الموجهة وتوزيع الأحمال بسلاسة.'
  },
  {
    name: '3. Application & Microservices Layer (خوادم التطبيق والخدمات)',
    components: ['Auth Service', 'Itinerary Generator Service', 'Booking Service', 'Destinations Service', 'Notification Worker'],
    description: 'منطق العمل الأساسي ومعالجة عمليات البحث والتخطيط الذكي وتوليد الاستجابات بسرعة فائقة.'
  },
  {
    name: '4. Intelligence & AI Processing Engine (طبقة الذكاء الاصطناعي)',
    components: ['Gemini 2.5 Engine Proxy', 'Prompt Normalizer', 'Response Schema Validator', 'AI Cache Stream'],
    description: 'المحرك الذكي المسئول عن صياغة خطط السفر، تحليل الآراء، واسترداد التوصيات الشخصية بسرعة متناهية.'
  },
  {
    name: '5. Data & Persistence Layer (طبقة البيانات والتخزين)',
    components: ['PostgreSQL (Relational DB)', 'Redis Cache', 'Cloud Storage Objects', 'Audit Log Store'],
    description: 'حفظ واسترجاع البيانات الهيكلية، الجلسات اللحظية، الملفات الوسائط، وسجلات التدقيق الأمنية.'
  }
];

export const apiDesignModules: ApiEndpoint[] = [
  // Auth
  { module: 'Authentication', method: 'POST', path: '/api/v1/auth/login', description: 'تسجيل دخول المستخدم وإنشاء رمز JWT آمن', access: 'Public' },
  { module: 'Authentication', method: 'POST', path: '/api/v1/auth/register', description: 'إنشاء حساب جديد لسائح أو مواطن', access: 'Public' },
  { module: 'Authentication', method: 'GET', path: '/api/v1/auth/me', description: 'استرجاع بيانات ملف المستخدم الحالي', access: 'Authenticated' },
  
  // Destinations
  { module: 'Destinations', method: 'GET', path: '/api/v1/destinations', description: 'استرجاع قائمة الوجهات السياحية مع التصفية والبحث', access: 'Public' },
  { module: 'Destinations', method: 'GET', path: '/api/v1/destinations/:id', description: 'استرجاع تفاصيل الوجهة المعالم، الطقس، والصور', access: 'Public' },
  
  // AI Itinerary
  { module: 'AI Engine', method: 'POST', path: '/api/v1/ai/plan-itinerary', description: 'توليد جدول سياحي مخصص عبر Gemini AI', access: 'Public' },
  { module: 'AI Engine', method: 'POST', path: '/api/v1/ai/chat-assistant', description: 'التفاعل المباشر مع المستشار السياحي الذكي', access: 'Public' },
  
  // Bookings
  { module: 'Bookings', method: 'POST', path: '/api/v1/bookings/create', description: 'إنشاء حجز جديد وتأكيده في المحفظة', access: 'Authenticated' },
  { module: 'Bookings', method: 'GET', path: '/api/v1/bookings/my-bookings', description: 'استرجاع قائمة حجوزات المستخدم الحالية وسابقاً', access: 'Authenticated' },
  
  // Admin & Analytics
  { module: 'Admin Analytics', method: 'GET', path: '/api/v1/admin/kpis', description: 'استرجاع مؤشرات الأداء الحية ومعدلات الإشغال', access: 'Admin' },
  { module: 'Admin Content', method: 'POST', path: '/api/v1/admin/destinations/add', description: 'إضافة وجهة سياحية جديدة للنظام', access: 'Admin' }
];

export const securityArchitecture: SecurityLayer[] = [
  { title: 'التوثيق والصلاحيات (Auth & RBAC)', description: 'استخدام بروتوكول OAuth 2.0 ورموز JWT المشفرة مع تحديد الصلاحيات حسب أدوار المستخدمين (سائح، مرشد، منشأة، مدير نظام).', mechanism: 'Role-Based Access Control' },
  { title: 'تشفير البيانات (Encryption Standard)', description: 'تشفير جميع البيانات أثناء النقل عبر TLS 1.3 وتشفير البيانات الساكنة بمفتاح AES-256 بت على الخوادم وقواعد البيانات.', mechanism: 'TLS 1.3 & AES-256' },
  { title: 'حماية الواجهات (API Rate Limiting)', description: 'تطبيق تحديد معدل الاستخدام ومنع هجمات الحرمان من الخدمة DDoS عبر Nginx وCloud Armor لمنع استغلال خوادم AI.', mechanism: 'Rate Limiting & Cloud Armor WAF' },
  { title: 'سجلات التدقيق الأمني (Audit Logging)', description: 'تسجيل كافة العمليات الحساسة وتغييرات البيانات في سجلات معزولة غير قابلة للتعديل لمتابعتها دورياً.', mechanism: 'Immutable Audit Logs' }
];

export const folderStructureDemo = {
  frontend: `src/
├── assets/          # الصور، الأيقونات والخطوط
├── components/      # المكونات التفاعلية الواجهات
│   ├── ui/          # المكونات الأساسية المشتركة (Buttons, Modals, Cards)
│   ├── layout/      # الهياكل العامة (Header, Sidebar, Footer)
│   └── modules/     # المكونات الوظيفية (AIPlanner, MapViewer, BookingModal)
├── pages/           # الصفحات الرئيسية
├── hooks/           # الخطافات المخصصة (useAI, useBookings, useAuth)
├── services/        # طلبات الربط مع API للخادم
├── store/           # إدارة الحالة العامة (Zustand / Context)
├── types/           # تعريف الأنواع والأنماط الشاملة TypeScript
└── utils/           # الدوال المساعدة والصيغ`,

  backend: `server/
├── config/          # إعدادات الخادم والبيئة
├── controllers/     # وحدات التحكم بالطلبات
├── middlewares/     # وسائط التحقق والأمان والتحقق من الرموز
├── models/          # نماذج وقواعد قواعد البيانات
├── routes/          # مسارات API المنظمة بحسب الوحدات
├── services/        # منطق العمل التجاري والربط مع Gemini API
├── utils/           # دوال التشفير والاستجابات الشاملة
└── app.ts           # نقطة التشغيل الرئيسية الخادم`
};
