import React, { useState } from 'react';
import { 
  Menu, 
  Compass, 
  Sparkles, 
  Bot, 
  Mic, 
  Globe2, 
  Building2, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  Palette, 
  Layout, 
  Luggage, 
  UserCheck, 
  Rotate3d, 
  Ticket, 
  Wallet, 
  Shield, 
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowRight
} from 'lucide-react';

interface OrganizedNavigationBarProps {
  activeNav: string;
  onSelectNavKey: (key: string) => void;
  onOpenSidebar: () => void;
  currentActiveRole?: string;
  onOpenLoginModal?: () => void;
}

export const OrganizedNavigationBar: React.FC<OrganizedNavigationBarProps> = ({
  activeNav,
  onSelectNavKey,
  onOpenSidebar,
  currentActiveRole,
  onOpenLoginModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'portals' | 'docs'>('all');

  // Navigation Items Config with icons, badges, and categories
  const navItems = [
    // Main & General
    {
      id: 'home',
      label: 'الرئيسية',
      icon: Compass,
      category: 'main',
      badge: null,
      color: 'emerald'
    },
    {
      id: 'all',
      label: 'جميع اللوحات',
      icon: LayoutGrid,
      category: 'main',
      badge: 'النظام الكامل',
      color: 'emerald'
    },
    {
      id: 'tourist',
      label: 'بوابة الزائر',
      icon: Luggage,
      category: 'portals',
      badge: null,
      color: 'emerald'
    },

    // AI & Innovation
    {
      id: 'ai',
      label: 'المساعد الذكي (AI Concierge)',
      icon: Bot,
      category: 'ai',
      badge: 'Gemini AI',
      color: 'amber'
    },
    {
      id: 'phase17',
      label: 'الصوت والواقع المعزز',
      icon: Mic,
      category: 'ai',
      badge: '3D & Voice',
      color: 'purple'
    },
    {
      id: 'phase18',
      label: 'التوأم الرقمي والتنبؤ',
      icon: Globe2,
      category: 'ai',
      badge: 'Predictive Ops',
      color: 'cyan'
    },
    {
      id: 'maps',
      label: 'الخرائط والتوجيه',
      icon: Rotate3d,
      category: 'ai',
      badge: null,
      color: 'emerald'
    },

    // Portals & Gov
    {
      id: 'ministry',
      label: 'وزارة السياحة',
      icon: ShieldCheck,
      category: 'portals',
      badge: 'مؤشرات 2030',
      color: 'emerald'
    },
    {
      id: 'investor',
      label: 'بوابة المستثمر',
      icon: Building2,
      category: 'portals',
      badge: null,
      color: 'amber'
    },
    {
      id: 'business',
      label: 'منشآت السياحة',
      icon: Building2,
      category: 'portals',
      badge: null,
      color: 'teal'
    },
    {
      id: 'guide',
      label: 'المرشد السياحي',
      icon: UserCheck,
      category: 'portals',
      badge: null,
      color: 'amber'
    },
    {
      id: 'superadmin',
      label: 'لوحة مدير النظام',
      icon: Shield,
      category: 'portals',
      badge: 'SuperAdmin',
      color: 'purple'
    },

    // Services & Booking
    {
      id: 'booking',
      label: 'محرك الحجوزات',
      icon: Ticket,
      category: 'main',
      badge: null,
      color: 'emerald'
    },
    {
      id: 'wallet',
      label: 'المحفظة والجواز',
      icon: Wallet,
      category: 'main',
      badge: null,
      color: 'amber'
    },

    // Technical Specs & Docs
    {
      id: 'prd',
      label: 'وثيقة PRD',
      icon: FileText,
      category: 'docs',
      badge: 'Phase 1',
      color: 'blue'
    },
    {
      id: 'architecture',
      label: 'المعمارية F2',
      icon: Cpu,
      category: 'docs',
      badge: 'Phase 2',
      color: 'blue'
    },
    {
      id: 'brand',
      label: 'الهوية F3',
      icon: Palette,
      category: 'docs',
      badge: 'Phase 3',
      color: 'blue'
    },
    {
      id: 'ux',
      label: 'تصاميم UX F4',
      icon: Layout,
      category: 'docs',
      badge: 'Phase 4',
      color: 'blue'
    }
  ];

  // Filter items based on active category selector tab
  const filteredNavItems = navItems.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') return item.category === 'ai';
    if (selectedCategory === 'portals') return item.category === 'portals';
    if (selectedCategory === 'docs') return item.category === 'docs';
    return true;
  });

  return (
    <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-xl border-y border-emerald-900/10 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2.5 space-y-2">
        
        {/* Top Control Bar: Category Group Switcher & Sidebar Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
          
          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar dir-rtl">
            <span className="text-[11px] font-black text-slate-500 flex items-center gap-1 pl-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-emerald-700" />
              <span>تصنيف الأقسام:</span>
            </span>

            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all border flex items-center gap-1.5 shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white border-slate-800 shadow-sm'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <span>جميع الأقسام</span>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded-full font-mono">
                {navItems.length}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all border flex items-center gap-1.5 shrink-0 ${
                selectedCategory === 'ai'
                  ? 'bg-emerald-800 text-amber-300 border-emerald-700 shadow-sm'
                  : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>الذكاء الاصطناعي والابتكار</span>
            </button>

            <button
              onClick={() => setSelectedCategory('portals')}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all border flex items-center gap-1.5 shrink-0 ${
                selectedCategory === 'portals'
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm'
                  : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>البوابات والجهات الحكومية</span>
            </button>

            <button
              onClick={() => setSelectedCategory('docs')}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all border flex items-center gap-1.5 shrink-0 ${
                selectedCategory === 'docs'
                  ? 'bg-slate-800 text-cyan-300 border-slate-700 shadow-sm'
                  : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-cyan-500" />
              <span>الوثائق الفنية والمواصفات</span>
            </button>
          </div>

          {/* Sidebar Drawer Toggle Button */}
          <div className="flex items-center gap-2 shrink-0 mr-auto dir-rtl">
            <button
              onClick={onOpenSidebar}
              className="px-3.5 py-1.5 rounded-2xl bg-emerald-100 hover:bg-emerald-200 text-[#047857] border border-emerald-300 font-extrabold text-xs flex items-center gap-2 shadow-sm transition-all"
              title="افتح القائمة الجانبية الموحدة"
            >
              <Menu className="w-4 h-4 text-amber-600" />
              <span>القائمة الشاملة</span>
            </button>
          </div>

        </div>

        {/* Scrollable Navigation Buttons Row (Neatly formatted & styled buttons) */}
        <div className="relative group">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 dir-rtl scroll-smooth">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectNavKey(item.id)}
                  className={`group relative px-4 py-2 rounded-2xl border text-xs font-black flex items-center gap-2 transition-all shrink-0 hover:scale-[1.02] active:scale-95 ${
                    isActive
                      ? 'bg-[#047857] text-white border-emerald-600 shadow-lg shadow-emerald-800/20 ring-2 ring-emerald-500/30'
                      : 'bg-slate-50 hover:bg-emerald-50/80 text-slate-800 border-slate-200/90 hover:border-emerald-300'
                  }`}
                >
                  {/* Icon Container with active highlight */}
                  <div className={`p-1 rounded-xl transition-colors ${
                    isActive ? 'bg-emerald-800/80 text-amber-300' : 'bg-slate-200/70 text-[#047857] group-hover:bg-emerald-200'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Label */}
                  <span className="whitespace-nowrap">{item.label}</span>

                  {/* Optional Badge */}
                  {item.badge && (
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-md shrink-0 border ${
                      isActive 
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-black' 
                        : 'bg-slate-200/80 text-slate-700 border-slate-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}

                  {/* Active Gold Indicator Dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping absolute -top-0.5 -right-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
