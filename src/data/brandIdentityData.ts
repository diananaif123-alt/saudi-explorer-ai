export interface ColorToken {
  name: string;
  hex: string;
  role: string;
  usage: string;
  bgClass: string;
  textClass: string;
}

export interface UIComponentSpec {
  name: string;
  category: string;
  description: string;
  variantDemo: string;
}

export const brandPillars = {
  vision: "أن نكون البوابة الرقمية الذكية الأولى عالمياً لاستكشاف المملكة العربية السعودية، عبر تجربة سياحية فريدة، عصرية، ومشرقة تعكس الأصالة والابتكار.",
  mission: "تقديم منصة ذكية، مريحة، وسريعة تُمكن السياح والزوار والمواطنين من تخطيط وحجز واستكشاف أروع المعالم والفعاليات السعودية بأسلوب فاخر ومستدام.",
  values: [
    { title: "الأصالة والابتكار (Authenticity & Innovation)", desc: "المزج بين عراقة التراث الثقافي السعودي وأحدث تقنيات الذكاء الاصطناعي." },
    { title: "الوضوح والإشراق (Clarity & Brightness)", desc: "تصميم مريح للعين بألوان فاتحة تعكس الطبيعة الخلابة والشواطئ الذهبية." },
    { title: "الفخامة البسيطة (Minimal Luxury)", desc: "تجربة مستخدم فاخرة بدون تعقيد، تركز على الاستكشاف السلس." },
    { title: "الاستدامة والترحيب (Welcoming Hospitality)", desc: "تجسيد روح الضيافة السعودية العريقة (الكرم والترحاب)." }
  ],
  personality: [
    "مشرق وملهم (Bright & Inspiring)",
    "ودود وموثوق (Friendly & Reliable)",
    "عصري وفاخر (Modern & Premium)",
    "ذكي وسلس (Smart & Effortless)"
  ]
};

export const logoGuidelines = {
  concept: "شعار عصري مبسط (Minimalist Iconography) يجمع بين بوصلة الاستكشاف المبتكرة، انحناءة الكثبان الرملية الذهبية، وإشراقة شمس البحر الأحمر اللامعة.",
  elements: [
    "البوصلة الذكية (Smart Compass): رمز التوجيه الذكي والاستكشاف الجغرافي.",
    "الكثبان الذهبية (Sand Dune Curve): لمسة من الطبيعة الصحراوية الساحرة.",
    "زرقة البحر الأبيض (Red Sea Sky Blue): تجسيد لشواطئ وسواحل المملكة الصافية.",
    "النجمة السعودية الذهبية (KSA Star Accent): رمز التميز والجودة العالية."
  ],
  rules: [
    "استخدام خلفيات فاتحة ناصعة (White / Cream Sand).",
    "عدم وضع الشعار على خلفيات سوداء أو داكنة كئيبة.",
    "المحافظة على مساحة حماية خالية (Clear Space) تعادل 50% من حجم الشعار."
  ]
};

export const lightColorPalette: ColorToken[] = [
  { name: "White Canvas", hex: "#FFFFFF", role: "Primary Background", usage: "الخلفيات الرئيسية والمساحات الناصعة المريحة للعين.", bgClass: "bg-white", textClass: "text-slate-900" },
  { name: "Sand Cream (رملي ناعم)", hex: "#FAF8F5", role: "Secondary Background", usage: "خلفية البطاقات والأقسام المانوية لضمان تباين مريح.", bgClass: "bg-[#FAF8F5]", textClass: "text-slate-800" },
  { name: "Light Emerald (أخضر زمرذي فاتح)", hex: "#0D7A5F", role: "Brand Primary Accent", usage: "الأزرار الرئيسية، الهيدر، والأيقونات البارزة لتجسيد الهوية الوطنية.", bgClass: "bg-[#0D7A5F]", textClass: "text-white" },
  { name: "Emerald Soft Glow", hex: "#E6F4F0", role: "Emerald Container", usage: "خلفيات الشارات والبطاقات النشطة ذات الطابع المشرق.", bgClass: "bg-[#E6F4F0]", textClass: "text-[#0D7A5F]" },
  { name: "Red Sea Sky Blue (أزرق سماوي)", hex: "#0EA5E9", role: "Secondary Accent (Sea)", usage: "التنبيهات، الروابط، وأزرار الاستكشاف المائي والشواطئ.", bgClass: "bg-[#0EA5E9]", textClass: "text-white" },
  { name: "Sky Blue Tint", hex: "#F0F9FF", role: "Sky Container", usage: "خلفيات الملاحظات والتوصيات السياحية البحرية.", bgClass: "bg-[#F0F9FF]", textClass: "text-[#0369A1]" },
  { name: "Light Gold (ذهبي مشرق)", hex: "#D4AF37", role: "Luxury Highlights", usage: "شارات التقييم الممتازة، التراخيص، والباقات الفاخرة.", bgClass: "bg-[#D4AF37]", textClass: "text-slate-900" },
  { name: "Gold Soft Tint", hex: "#FEFCE8", role: "Gold Container", usage: "خلفية الخصومات والتجارب الملكية الفاخرة.", bgClass: "bg-[#FEFCE8]", textClass: "text-[#854D0E]" }
];

export const statusColors = [
  { name: "Success", hex: "#10B981", desc: "تأكيد الحجز وتفعيل الخدمات (Emerald Green)." },
  { name: "Warning", hex: "#F59E0B", desc: "المقاعد المتبقية والتنبيهات الموقتة (Amber)." },
  { name: "Error", hex: "#EF4444", desc: "إلغاء الحجز والأخطاء التقنية (Soft Red)." },
  { name: "Information", hex: "#3B82F6", desc: "المعلومات التوجيهية وتوقيت الفعاليات (Ocean Blue)." }
];

export const typographySystem = {
  arabicFont: "IBM Plex Sans Arabic / Tajawal",
  englishFont: "Plus Jakarta Sans / Inter",
  hierarchy: [
    { level: "Hero Headline (H1)", size: "36px - 48px", weight: "900 (Black)", usage: "العناوين الرئيسية الكبرى لصفحة الاستقبال." },
    { level: "Section Title (H2)", size: "24px - 32px", weight: "800 (Bold)", usage: "عناوين الأقسام والمواضيع الأساسية." },
    { level: "Card Header (H3)", size: "18px - 20px", weight: "700 (Bold)", usage: "عناوين بطاقات الفنادق والوجهات والفعاليات." },
    { level: "Body Paragraph", size: "15px - 16px", weight: "400 (Regular)", usage: "النصوص التفصيلية وشروحات الأماكن مع ارتفاع سطر 1.6." },
    { level: "Small Label & Badge", size: "12px - 13px", weight: "600 (SemiBold)", usage: "الشارات، التواريخ، والكلمات المساعدة." }
  ]
};

export const uiComponentsSpec: UIComponentSpec[] = [
  { name: "Primary Luxury Button", category: "Buttons", description: "زر أخضر زمردي فاتح مع زوايا منحنية وظل خفيف وانعكاس ذهبي عند التحويم.", variantDemo: "Emerald Gold Glow" },
  { name: "Destination Glass Card", category: "Cards", description: "بطاقة ذات خلفية ناصعة بزوايا 20px، حدود ذهبية ناعمة، وظل منتشر مريح للعين.", variantDemo: "Bright Glass" },
  { name: "Interactive Search Form", category: "Forms & Inputs", description: "حقل إدخال واسع بخلفية بيضاء صريحة مع إطار زجاجي عند التحديد ورسم توضيحي للأيقونة.", variantDemo: "Floating Label" },
  { name: "Heritage Badge", category: "Badges", description: "شارة بيضاوية أنيقة بتظليل ناعم للتفرقة بين المواسم والوجهات الثقافية.", variantDemo: "Rounded Pill" },
  { name: "Floating Modal Dialog", category: "Modals", description: "نافذة منبثقة بخلفية بيضاء فاخرة وضبابية مع إغلاق سلس وإجراءات واضحة.", variantDemo: "Centered Glass" }
];

export const designSystemRules = {
  spacing: "نظام المسافات الموحد المضاعف لـ 8px (8, 16, 24, 32, 48, 64px) لضمان اتساق المساحات المتروكة.",
  borderRadius: "زوايا منحنية ناعمة ومريحة للعين: Cards (16px - 20px), Buttons (12px - 16px), Badges (999px Full Pill).",
  shadows: "ظلال فائقة النعومة والنقاء (Soft Diffused Shadows: 0 10px 30px -5px rgba(0,0,0,0.05)) لضمان الشعور بالفخامة دون عتمة.",
  motion: "حركات وانتقالات انسيابية قصيرة المدة (200ms - 300ms cubic-bezier(0.4, 0, 0.2, 1)) لتجربة استجابة فورية."
};
