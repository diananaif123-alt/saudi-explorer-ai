import React from 'react';
import { 
  Bot, 
  Rotate3d, 
  Ticket, 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Globe2, 
  Mic, 
  Wallet, 
  Sparkles, 
  ArrowLeft, 
  Compass, 
  FileText,
  MapPin,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';

interface ServicesLandingGridProps {
  onSelectNav: (navKey: string) => void;
  onOpenAiPlanner: (city?: string) => void;
}

export const ServicesLandingGrid: React.FC<ServicesLandingGridProps> = ({
  onSelectNav,
  onOpenAiPlanner
}) => {
  const portalCards = [
    {
      id: 'ai',
      title: 'المساعد الذكي (AI Concierge)',
      subtitle: 'تخطيط رحلة متكامل بالذكاء الاصطناعي التفاعلي',
      desc: 'صمّم جدول زيارتك بالكامل بنقرة واحدة باستخدام نماذج Gemini AI التنبؤية المتوافقة مع اهتمامك وميزانيتك.',
      icon: Bot,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
      badge: 'الذكاء السياحي',
      color: 'bg-emerald-50 text-[#047857] border-emerald-200'
    },
    {
      id: 'phase17',
      title: 'المساعد الصوتي والواقع المعزز (Voice AI & AR)',
      subtitle: 'مرشد ثنائي اللغة بصوت بشري مجسّم 3D',
      desc: 'تفاعل بالصوت العربي الطبيعي مع المرشد الثقافي وتعرّف على المعالم الأثرية بتقنيات AR الميدانية.',
      icon: Mic,
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800',
      badge: 'التفاعل الصوتي',
      color: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      id: 'phase18',
      title: 'التوأم الرقمي وإدارة الجماهير (Digital Twin)',
      subtitle: 'مركز عمليات المقاصد السياحية التنبؤي',
      desc: 'محاكاة ثلاثية الأبعاد لإشغال الوجهات، الكثافة الجماهيرية، وإدارة الحشود الوطنية في الأنشطة والمواسم.',
      icon: Globe2,
      image: 'https://images.unsplash.com/photo-1578895210405-907db48a7111?auto=format&fit=crop&q=80&w=800',
      badge: 'إدارة العمليات',
      color: 'bg-teal-50 text-teal-800 border-teal-200'
    },
    {
      id: 'maps',
      title: 'الخرائط التفاعلية والواقع المعزز (Smart Maps)',
      subtitle: 'تصفح ثلاثي الأبعاد للمواقع والمسارات',
      desc: 'استكشف العلا، الدرعية، والبلد على الخريطة التفاعلية مع طبقات الواقع المعزز ودليل الفعاليات القريبة.',
      icon: Rotate3d,
      image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=800',
      badge: 'الملاحة الذكية',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      id: 'booking',
      title: 'محرك الحجوزات الموحد (Booking Engine)',
      subtitle: 'حجز الفنادق، الطيران، وتذاكر الفعاليات',
      desc: 'احجز أفضل الفنادق الفاخرة وتذاكر مواسم الرياض وجدة والعلا بأسعار مباشرة وموثقة بنقرة واحدة.',
      icon: Ticket,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      badge: 'الحجوزات المباشرة',
      color: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      id: 'investor',
      title: 'بوابة المستثمر السياحي (Investor Portal)',
      subtitle: 'الفرص الاستثمارية والتراخيص وحزم الدعم',
      desc: 'منصة موحدة للمستثمرين المحليين والدوليين للوصول إلى الخرائط الاستثمارية ودراسات الجدوى المعتمدة.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      badge: 'الفرص الاستثمارية',
      color: 'bg-emerald-50 text-[#047857] border-emerald-200'
    },
    {
      id: 'business',
      title: 'بوابة الأنشطة والمنشآت (Business Portal)',
      subtitle: 'تمكين أصحاب الفنادق والمطاعم والمشغلين',
      desc: 'إدارة قوائم الخدمات، الحجوزات، العروض الموسمية، وتقارير الإشغال والتحليلات اليومية.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      badge: 'تمكين قطاع الأعمال',
      color: 'bg-slate-100 text-slate-800 border-slate-300'
    },
    {
      id: 'guide',
      title: 'بوابة المرشد السياحي (Tour Guide Portal)',
      subtitle: 'الترخيص الوطني وجدولة الجولات الثقافية',
      desc: 'منصة المرشدين السياحيين لإستقبال طلبات السياح، إدارة الجولات، والتوثيق الرسمي.',
      icon: UserCheck,
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800',
      badge: 'المرشدين السياحيين',
      color: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      id: 'ministry',
      title: 'لوحة قيادة وزارة السياحة (Ministry Hub)',
      subtitle: 'متابعة مؤشرات أداء رؤية 2030 والنمو السياحي',
      desc: 'مركز التحليلات الاستراتيجية لمراقبة أعداد السياح، الإنفاق السياحي، والوظائف المستحدثة.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800',
      badge: 'مؤشرات 2030',
      color: 'bg-emerald-50 text-[#047857] border-emerald-200'
    }
  ];

  return (
    <section className="py-16 bg-[#faf8f3] border-t border-emerald-900/10 text-right dir-rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#047857] text-xs font-black border border-emerald-200 shadow-sm">
            <Compass className="w-4 h-4 text-[#047857]" />
            <span>منصة السياحة الوطنية الموحدة • رؤية المملكة 2030</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            منظومة خدمات سياحية ذكية <span className="emerald-emerald-gradient-text">شاملة ومترابطة</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            استكشف الأقسام الرئيسية والخدمات التفاعلية المخصصة للسائح، المستثمر، قطاع الأعمال، المرشد السياحي والجهات الرسمية.
          </p>
        </div>

        {/* Portals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-white rounded-3xl overflow-hidden border border-emerald-900/10 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl shadow-slate-200/60 hover:-translate-y-1"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                    
                    <span className={`absolute top-3 right-3 text-xs font-black px-3 py-1 rounded-full border shadow-md ${card.color}`}>
                      {card.badge}
                    </span>

                    <div className="absolute bottom-3 right-3 left-3 text-right">
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-black shadow-md">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-white truncate">{card.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h4 className="text-xs font-extrabold text-amber-700">{card.subtitle}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectNav(card.id)}
                    className="w-full py-3 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-extrabold text-xs shadow-md shadow-emerald-800/20 transition-all flex items-center justify-center gap-2 border border-emerald-400/30"
                  >
                    <span>الدخول للقسم</span>
                    <ArrowLeft className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
