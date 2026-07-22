import React from 'react';
import { 
  X, 
  Menu, 
  Compass, 
  Sparkles, 
  Bot, 
  MapPin, 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Globe2, 
  Mic, 
  Ticket, 
  Wallet, 
  FileText, 
  Layers, 
  Award, 
  ChevronLeft,
  User,
  Rotate3d,
  Cpu,
  Palette,
  Layout,
  Luggage,
  Search,
  BookOpen
} from 'lucide-react';

interface NavigationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeNav: string;
  onSelectNav: (navKey: string) => void;
  currentActiveRole: string;
  onChangeRole: (role: string) => void;
}

export const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  isOpen,
  onClose,
  activeNav,
  onSelectNav,
  currentActiveRole,
  onChangeRole
}) => {
  if (!isOpen) return null;

  const roleNavItems = [
    {
      id: 'tourist',
      title: 'السائح والزائر',
      sub: 'بوابة الاستكشاف، الرحلات، والمسارات',
      icon: Luggage,
      role: 'Tourist',
      color: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      id: 'investor',
      title: 'المستثمر السياحي',
      sub: 'الفرص الاستثمارية وتراخيص المشاريع',
      icon: Building2,
      role: 'Investor',
      color: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'business',
      title: 'المنشآت والأنشطة السياحية',
      sub: 'إدارة الفنادق، المطاعم والأنشطة',
      icon: Building2,
      role: 'Merchant',
      color: 'bg-teal-100 text-teal-900 border-teal-300'
    },
    {
      id: 'guide',
      title: 'المرشد السياحي',
      sub: 'جدولة الجولات والترخيص والرعاية',
      icon: UserCheck,
      role: 'TourGuide',
      color: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    {
      id: 'ministry',
      title: 'وزارة السياحة',
      sub: 'لوحة القيادة الوطنية ومؤشرات 2030',
      icon: ShieldCheck,
      role: 'MinistryAdmin',
      color: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'superadmin',
      title: 'مدير النظام (Super Admin)',
      sub: 'إدارة المنصة، النماذج والأمان',
      icon: ShieldCheck,
      role: 'SuperAdmin',
      color: 'bg-purple-100 text-purple-900 border-purple-300'
    }
  ];

  const featureNavItems = [
    {
      id: 'home',
      title: 'الرئيسية (Landing Page)',
      icon: Compass,
      desc: 'الصفحة الرئيسية واستكشاف الوجهات'
    },
    {
      id: 'phase17',
      title: 'المساعد الصوتي والواقع المعزز',
      icon: Mic,
      desc: 'Voice AI & 3D Avatar Cultural Guide'
    },
    {
      id: 'phase18',
      title: 'التوأم الرقمي وإدارة الجماهير',
      icon: Globe2,
      desc: 'Digital Twin Ops & Predictive Analytics'
    },
    {
      id: 'ai',
      title: 'المساعد الذكي (AI Concierge)',
      icon: Bot,
      desc: 'Gemini AI Planner & Chat'
    },
    {
      id: 'maps',
      title: 'الخرائط التفاعلية والواقع المعزز',
      icon: Rotate3d,
      desc: '3D Maps, Navigation & AR Hotspots'
    },
    {
      id: 'booking',
      title: 'محرك الحجوزات الموحد',
      icon: Ticket,
      desc: 'الفنادق، الفعاليات، والطيران'
    },
    {
      id: 'wallet',
      title: 'المحفظة والجواز السياحي',
      icon: Wallet,
      desc: 'Digital Wallet, Passport & Rewards'
    },
    {
      id: 'prd',
      title: 'وثيقة متطلبات المنتج (PRD)',
      icon: FileText,
      desc: 'Phase 1 PRD & Requirements'
    },
    {
      id: 'architecture',
      title: 'الهندسة المعمارية للنظام',
      icon: Cpu,
      desc: 'Phase 2 Architecture & Data Schema'
    },
    {
      id: 'brand',
      title: 'الهوية البصرية والبراند',
      icon: Palette,
      desc: 'Phase 3 Brand Identity'
    },
    {
      id: 'ux',
      title: 'مخططات تجربة المستخدم (UX)',
      icon: Layout,
      desc: 'Phase 4 High-Fidelity UX'
    },
    {
      id: 'demo',
      title: 'العرض التفاعلي الشامل (Demo)',
      icon: Award,
      desc: 'Phase 16 Interactive Showcase'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden dir-rtl" dir="rtl">
      {/* Dark Blur Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-auto">
        <div className="w-screen max-w-md bg-white border-l border-emerald-900/15 shadow-2xl flex flex-col justify-between overflow-hidden animate-slide-in-right">
          
          {/* Drawer Header */}
          <div className="p-6 bg-gradient-to-b from-emerald-900 to-[#047857] text-white flex items-center justify-between border-b border-emerald-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-right">
                <h3 className="text-base font-black text-white leading-tight">SAUDI EXPLORER AI</h3>
                <span className="text-[11px] text-amber-300 font-bold block">القائمة الجانبية للتنقل الموحد</span>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 text-right">
            
            {/* Role-Based Section (أقسام حسب نوع المستخدم) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-[#047857] uppercase tracking-wider">التنقل المخصص حسب الدور (Role Based)</span>
                <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-bold">
                  الحالي: {currentActiveRole}
                </span>
              </div>

              <div className="space-y-2">
                {roleNavItems.map((item) => {
                  const Icon = item.icon;
                  const isSelected = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onChangeRole(item.role);
                        onSelectNav(item.id);
                        onClose();
                      }}
                      className={`w-full p-3.5 rounded-2xl border transition-all text-right flex items-center justify-between gap-3 group ${
                        isSelected 
                          ? 'bg-[#047857] text-white border-emerald-600 shadow-md' 
                          : 'bg-slate-50 hover:bg-emerald-50 text-slate-800 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                          isSelected ? 'bg-amber-400 text-slate-950 border-amber-300' : item.color
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 text-right">
                          <span className="text-xs font-black block truncate">{item.title}</span>
                          <span className={`text-[10px] block truncate ${isSelected ? 'text-emerald-100 font-medium' : 'text-slate-500 font-normal'}`}>
                            {item.sub}
                          </span>
                        </div>
                      </div>

                      <ChevronLeft className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-amber-300 translate-x-1' : 'text-slate-400 group-hover:-translate-x-1'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Platform Feature Sections (أقسام المنصة والخدمات) */}
            <div>
              <span className="text-xs font-black text-[#047857] uppercase tracking-wider block mb-3">
                صفحات الخدمات والذكاء الاصطناعي
              </span>

              <div className="grid grid-cols-1 gap-2">
                {featureNavItems.map((f) => {
                  const Icon = f.icon;
                  const isSelected = activeNav === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => {
                        onSelectNav(f.id);
                        onClose();
                      }}
                      className={`p-3 rounded-xl border text-right transition-all flex items-center justify-between gap-3 ${
                        isSelected 
                          ? 'bg-amber-400 text-slate-950 font-black border-amber-500 shadow-sm' 
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-slate-950' : 'text-[#047857]'}`} />
                        <div className="min-w-0 text-right">
                          <span className="text-xs font-bold block truncate">{f.title}</span>
                          <span className={`text-[10px] block truncate ${isSelected ? 'text-slate-800' : 'text-slate-400'}`}>
                            {f.desc}
                          </span>
                        </div>
                      </div>

                      <ChevronLeft className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Drawer Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-600 space-y-2">
            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-[#047857]">
              <ShieldCheck className="w-4 h-4" />
              <span>منصة الذكاء السياحي الموحدة • رؤية 2030</span>
            </div>
            <p className="text-[10px] text-slate-500">
              جميع البيانات المعروضة تجريبية (Demo Data) لأغراض العرض التوضيحي.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
