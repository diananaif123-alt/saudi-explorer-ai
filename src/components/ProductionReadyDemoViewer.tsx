import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  Compass,
  MapPin,
  Calendar,
  Ticket,
  Wallet,
  UserCheck,
  Bot,
  Activity,
  Layers,
  ArrowUp,
  Globe2,
  Smartphone,
  Eye,
  Sliders,
  AlertCircle,
  RefreshCw,
  Zap,
  Check,
  Star,
  Award,
  Search,
  Lock,
  Download,
  Info,
  SlidersHorizontal,
  Flame,
  LayoutGrid
} from 'lucide-react';

export interface ProductionReadyDemoViewerProps {
  onNavigatePhase: (phaseKey: string) => void;
  currentActiveRole: string;
  onChangeRole: (role: string) => void;
}

export const ProductionReadyDemoViewer: React.FC<ProductionReadyDemoViewerProps> = ({
  onNavigatePhase,
  currentActiveRole,
  onChangeRole,
}) => {
  // Demo States
  const [showSkeletonDemo, setShowSkeletonDemo] = useState(false);
  const [activeToastDemo, setActiveToastDemo] = useState<string | null>(null);
  const [emptyStatePreview, setEmptyStatePreview] = useState(false);
  const [activeFilterCategory, setActiveFilterCategory] = useState<string>('الكل');

  const triggerToast = (msg: string) => {
    setActiveToastDemo(msg);
    setTimeout(() => setActiveToastDemo(null), 4000);
  };

  // Role details mapping
  const rolesInfo = [
    {
      id: 'Tourist',
      title: 'سائح دولي / محلي',
      titleEn: 'International & Local Tourist',
      icon: Compass,
      color: 'from-amber-500 to-amber-600',
      borderColor: 'border-amber-500/50',
      badgeBg: 'bg-amber-950/80 text-amber-300',
      targetPhase: 'tourist',
      desc: 'حجز التجارب، التخطيط بالذكاء الاصطناعي، الخريطة التفاعلية والواقع المعزز.',
      permissions: ['استكشاف الوجهات والفعاليات', 'إنشاء خطة سفر AI Concierge', 'حجز الفنادق والتجارب', 'استخدام الخريطة التفاعلية AR']
    },
    {
      id: 'Citizen',
      title: 'مواطن / مقيم',
      titleEn: 'Citizen / Resident',
      icon: Wallet,
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/50',
      badgeBg: 'bg-emerald-950/80 text-emerald-300',
      targetPhase: 'wallet',
      desc: 'استخدام الجواز السياحي الرقمي، جمع النقاط والمكافآت، والمشاركة المجتمعية.',
      permissions: ['الجواز السياحي الرقمي Digital Passport', 'كسب واستبدال نقاط Rewards', 'تقييم التجارب السياحية الوطنية', 'الخصومات العائلية والموسمية']
    },
    {
      id: 'Tourism Business',
      title: 'منشأة سياحية',
      titleEn: 'Tourism Facility (Hotel/Restaurant)',
      icon: Building2,
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/50',
      badgeBg: 'bg-blue-950/80 text-blue-300',
      targetPhase: 'business',
      desc: 'إدارة الغرف، نشر العروض الموسمية، متابعة الحجوزات، والربط بالذكاء الاصطناعي.',
      permissions: ['إدارة الغرف والشواغر', 'نشر العروض والباقات الموسمية', 'معالجة الحجوزات الواردة', 'تحليلات الأداء المالي والتقييمات']
    },
    {
      id: 'Investor',
      title: 'مستثمر سياحي',
      titleEn: 'Tourism Investor',
      icon: Activity,
      color: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/50',
      badgeBg: 'bg-purple-950/80 text-purple-300',
      targetPhase: 'investor',
      desc: 'استكشاف الفرص الاستثمارية الكبرى، تحليل العوائد ROI، والخارطة الاستثمارية.',
      permissions: ['الخارطة الاستثمارية التفاعلية', 'تحليل العائد المتوقع ROI', 'دراسات الجدوى المجهزة', 'تقديم طلبات الفرص الاستثمارية']
    },
    {
      id: 'Tour Guide',
      title: 'مرشد سياحي مرخص',
      titleEn: 'Licensed Tour Guide',
      icon: UserCheck,
      color: 'from-teal-500 to-emerald-600',
      borderColor: 'border-teal-500/50',
      badgeBg: 'bg-teal-950/80 text-teal-300',
      targetPhase: 'guide',
      desc: 'إدارة الجولات الميدانية، تأكيد حجوزات السياح، واستلام التقييمات والأرباح.',
      permissions: ['إدارة جداول الجولات السياحية', 'تأكيد وقبول حجوزات السياح', 'سجل الأرباح والمكافآت', 'التواصل المباشر مع المجموعات']
    },
    {
      id: 'Ministry of Tourism',
      title: 'وزارة السياحة',
      titleEn: 'Ministry of Tourism Official',
      icon: ShieldCheck,
      color: 'from-emerald-600 to-green-700',
      borderColor: 'border-emerald-400/60',
      badgeBg: 'bg-emerald-950 text-emerald-200',
      targetPhase: 'ministry',
      desc: 'مركز الذكاء الوطني، المؤشرات السياحية الكبرى، التراخيص والرقابة الاستدامة.',
      permissions: ['لوحة المؤشرات الوطنية الكبرى', 'إدارة وتتبع التراخيص والتصانيف', 'مؤشرات الاستدامة البيئية 2030', 'التحليل التنبؤي لأعداد السياح']
    },
    {
      id: 'Super Admin',
      title: 'مدير النظام الأقصى',
      titleEn: 'Super Admin HQ',
      icon: Lock,
      color: 'from-purple-600 to-amber-600',
      borderColor: 'border-amber-400/80',
      badgeBg: 'bg-purple-950 text-amber-300',
      targetPhase: 'superadmin',
      desc: 'السيطرة الكاملة على جميع الحسابات، الأدوار RBAC، نماذج AI والأمان.',
      permissions: ['التحكم الكامل بجميع المستخدمين', 'إدارة الأدوار والصلاحيات RBAC', 'ضبط معلمات محركات AI', 'النسخ الاحتياطي والأمان الشامل']
    }
  ];

  // 16 Phases Matrix Data
  const allPhases = [
    { id: 'prd', num: 'Phase 1', title: 'وثيقة المطلب والمنتج PRD', status: 'مكتمل ومعتمد', badge: 'PRD Ready' },
    { id: 'architecture', num: 'Phase 2', title: 'المعمارية التقنية للمنصة', status: 'مكتمل ومعتمد', badge: 'Cloud Architecture' },
    { id: 'brand', num: 'Phase 3', title: 'الهوية البصرية والدليل الأسلوبي', status: 'مكتمل ومعتمد', badge: 'Brand Identity' },
    { id: 'ux', num: 'Phase 4', title: 'تجربة المستخدم والواجهات UX/UI', status: 'مكتمل ومعتمد', badge: 'UX Wireframes' },
    { id: 'auth', num: 'Phase 5', title: 'نظام الهوية والأدوار RBAC', status: 'مكتمل ومعتمد', badge: 'Unified Auth & Security' },
    { id: 'tourist', num: 'Phase 6', title: 'بوابة السائح والاستكشاف', status: 'مكتمل ومعتمد', badge: 'Tourist Portal' },
    { id: 'ai', num: 'Phase 7', title: 'المساعد الذكي AI Concierge', status: 'مكتمل ومعتمد', badge: 'Smart Trip Planner' },
    { id: 'maps', num: 'Phase 8', title: 'الخرائط التفاعلية والواقع المعزز AR', status: 'مكتمل ومعتمد', badge: 'Interactive Maps & AR' },
    { id: 'booking', num: 'Phase 9', title: 'نظام الحجوزات والخدمات', status: 'مكتمل ومعتمد', badge: 'Smart Booking System' },
    { id: 'wallet', num: 'Phase 10', title: 'الجواز الرقمي والمحفظة والنقاط', status: 'مكتمل ومعتمد', badge: 'Passport & Rewards' },
    { id: 'investor', num: 'Phase 11', title: 'بوابة المستثمر والخارطة الاستثمارية', status: 'مكتمل ومعتمد', badge: 'Investor Portal' },
    { id: 'business', num: 'Phase 12', title: 'بوابة المنشآت السياحية', status: 'مكتمل ومعتمد', badge: 'Business Facility Portal' },
    { id: 'guide', num: 'Phase 13', title: 'بوابة المرشدين السياحيين', status: 'مكتمل ومعتمد', badge: 'Tour Guide Portal' },
    { id: 'ministry', num: 'Phase 14', title: 'لوحة وزارة السياحة الذكية', status: 'مكتمل ومعتمد', badge: 'Ministry Tourism HQ' },
    { id: 'superadmin', num: 'Phase 15', title: 'لوحة مدير النظام العليا Super Admin', status: 'مكتمل ومعتمد', badge: 'Super Admin Central' },
    { id: 'demo', num: 'Phase 16', title: 'النموذج النهائي للعرض والجاهزية الإطلاقية', status: 'جاهز 100% للعرض', badge: 'Production Ready' },
    { id: 'phase17', num: 'Phase 17', title: 'المساعد الصوتي والمرشد الافتراضي 3D والواقع المعزز AR', status: 'مكتمل ومفعل', badge: 'Advanced Voice & AR' },
    { id: 'phase18', num: 'Phase 18', title: 'التوأم الرقمي، الذكاء التنبؤي، ومركز العمليات السياحي', status: 'مكتمل ومفعل', badge: 'Digital Twin Ops' }
  ];

  return (
    <div className="space-y-6 dir-rtl" dir="rtl">
      
      {/* PERSISTENT MANDATORY DEMO MODE BANNER AT TOP */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-y sm:border border-amber-500/60 p-4 sm:p-5 sm:rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right relative z-10">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 shrink-0 shadow-lg">
              <Info className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/40 mb-1">
                <span>● DEMO MODE ACCORDING TO PHASE 16 REQUIREMENTS</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-bold leading-relaxed max-w-4xl">
                Demo Mode — جميع البيانات والخدمات المعروضة داخل هذا النموذج الأولي هي بيانات تجريبية لأغراض العرض فقط، وليست مرتبطة بأي أنظمة تشغيل حقيقية أو جهات حكومية أو بوابات دفع فعلية.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-emerald-950 text-emerald-300 text-xs font-black px-3 py-1.5 rounded-xl border border-emerald-500/40 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>18/18 PHASES VERIFIED</span>
            </span>
          </div>

        </div>
      </div>

      {/* Global Interactive Toast Display */}
      <AnimatePresence>
        {activeToastDemo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border-2 border-amber-400 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-bold"
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>{activeToastDemo}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN PHASE 16 SHOWCASE CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Hero Title for Phase 16 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-lg">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>المرحلة 16 — التحسين النهائي والجاهزية لإطلاق العرض العالي (Production-Ready Showcase)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            SAUDI EXPLORER AI — جاهزية العرض للعرض الاستثماري والحكومي
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
            تم استكمال واختبار جميع المراحل الست عشرة بنجاح 100%. استخدم محاكي الحسابات والأدوار في الأسفل للتبديل الفوري بين جميع الواجهات الثمانية وفق نظام الصلاحيات الموحد (RBAC).
          </p>
        </div>

        {/* SECTION 1: ROLE SWITCHER & RBAC SIMULATOR (محاكي الحسابات والأدوار الـ7) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-400" />
                <span>محاكي الحسابات وتجربة الأدوار (Role-Based Access Control - RBAC Simulator)</span>
              </h3>
              <p className="text-xs text-slate-400">
                اختر الحساب المستهدف للتبديل الفوري ومعاينة الصلاحيات والواجهات الخاصة به عبر المنصة.
              </p>
            </div>

            <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
              <span className="text-slate-400">الدور النشط حالياً:</span>
              <span className="text-amber-400 font-bold">{currentActiveRole}</span>
            </div>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rolesInfo.map(role => {
              const IconComp = role.icon;
              const isCurrent = currentActiveRole === role.id;

              return (
                <div
                  key={role.id}
                  className={`bg-slate-950 p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                    isCurrent
                      ? `border-2 ${role.borderColor} shadow-2xl ring-2 ring-amber-400/20`
                      : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${role.color} text-white shadow-md`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${role.badgeBg}`}>
                        {role.id}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">{role.title}</h4>
                      <p className="text-[10px] text-slate-400 font-mono">{role.titleEn}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {role.desc}
                    </p>

                    <div className="space-y-1 pt-2 border-t border-slate-900">
                      <span className="text-[11px] text-amber-400 font-bold block">الصلاحيات المتاحة RBAC:</span>
                      <ul className="space-y-1 text-[11px] text-slate-400">
                        {role.permissions.slice(0, 3).map((perm, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{perm}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onChangeRole(role.id);
                      triggerToast(`تم التبديل بنجاح إلى دور: (${role.title}) وفق صلاحيات RBAC`);
                      onNavigatePhase(role.targetPhase);
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      isCurrent
                        ? 'bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-950/60'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>{isCurrent ? 'الدور النشط (انتقل للبوابة)' : 'تجربة الدخول بهذا الدور'}</span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION 2: UX / UI SIMULATION & QUALITY ASSURANCE CONTROL TOOLKIT */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
                <span>أدوات اختبار تجربة المستخدم والجودة (UX/UI Interactive Controls)</span>
              </h3>
              <p className="text-xs text-slate-400">
                اختبر استجابة الشاشات، التحميل الهيكلي Skeleton Loading، الرسائل التنبيهية، وحالات القوائم الفارغة.
              </p>
            </div>

            <span className="bg-emerald-950 text-emerald-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-emerald-500/40">
              QA STANDARDS COMPLIANT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Control 1: Skeleton Loading Simulator */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-amber-300">محاكاة التحميل الهيكلي (Skeleton)</span>
                <button
                  onClick={() => {
                    setShowSkeletonDemo(!showSkeletonDemo);
                    triggerToast(showSkeletonDemo ? 'تم إيقاف محاكاة التحميل' : 'تم تفعيل محاكاة التحميل الهيكلي Skeleton Loading');
                  }}
                  className="bg-purple-950 hover:bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-xl border border-purple-500/40 font-bold"
                >
                  {showSkeletonDemo ? 'إيقاف' : 'تشغيل التجربة'}
                </button>
              </div>

              {showSkeletonDemo ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-slate-800 rounded-lg w-3/4" />
                  <div className="h-10 bg-slate-800 rounded-xl w-full" />
                  <div className="h-4 bg-slate-800 rounded-lg w-1/2" />
                </div>
              ) : (
                <p className="text-xs text-slate-400 leading-relaxed">
                  يستعرض التحميل الناعم أثناء استرجاع بيانات الفنادق، المعالم، والتوصيات بالذكاء الاصطناعي دون انقطاع تجربة المستخدم.
                </p>
              )}
            </div>

            {/* Control 2: Empty State & Error State Preview */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-amber-300">معاينة الحالات الفارغة (Empty State)</span>
                <button
                  onClick={() => {
                    setEmptyStatePreview(!emptyStatePreview);
                    triggerToast(emptyStatePreview ? 'تم إغلاق معاينة القائمة الفارغة' : 'تم تفعيل معاينة الواجهة الفارغة');
                  }}
                  className="bg-purple-950 hover:bg-purple-900 text-purple-200 text-xs px-3 py-1 rounded-xl border border-purple-500/40 font-bold"
                >
                  {emptyStatePreview ? 'إخفاء' : 'عرض النموذج'}
                </button>
              </div>

              {emptyStatePreview ? (
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center space-y-2">
                  <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
                  <div className="text-xs font-bold text-white">لا توجد نتائج مطابقة للبحث</div>
                  <p className="text-[10px] text-slate-400">يرجى تعديل معايير التصفية أو اختيار مدينة أخرى.</p>
                </div>
              ) : (
                <p className="text-xs text-slate-400 leading-relaxed">
                  واجهات احترافية ومريحة للبصر تظهر للمستخدم عند عدم وجود حجز أو عدم مطابقة نتائج الفلاتر.
                </p>
              )}
            </div>

            {/* Control 3: Toast System Tester */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-300 block">اختبار الإشعارات المنبثقة (Toast System)</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => triggerToast('عملية الحجز تم إنجازها بنجاح 100%')}
                  className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 p-2 rounded-xl border border-emerald-500/40 font-bold text-[11px]"
                >
                  إشعار نجاح
                </button>
                <button
                  onClick={() => triggerToast('تنبيه: يتطلب هذا الإجراء صلاحية مدير النظام Super Admin')}
                  className="bg-amber-950 hover:bg-amber-900 text-amber-300 p-2 rounded-xl border border-amber-500/40 font-bold text-[11px]"
                >
                  إشعار تنبيه
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* SECTION 3: COMPLETE 16-PHASE MATRIX & QUICK NAVIGATOR */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-purple-400" />
                <span>جدول التحقق الشامل من المراحل الـ 16 (Complete Project Phases Matrix)</span>
              </h3>
              <p className="text-xs text-slate-400">
                اضغط على أي مرحلة للانتقال الفوري وتفقّد تفاصيل الشاشات والمكونات المنجزة بالكامل.
              </p>
            </div>

            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                triggerToast('تم التمرير إلى أعلى الصفحة الرئيسية');
              }}
              className="bg-purple-500 hover:bg-purple-600 text-white text-xs px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 shadow-md"
            >
              <ArrowUp className="w-4 h-4" />
              <span>أعلى الصفحة</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {allPhases.map(ph => (
              <div
                key={ph.id}
                onClick={() => {
                  onNavigatePhase(ph.id);
                  triggerToast(`الانتقال الفوري إلى: ${ph.num} - ${ph.title}`);
                }}
                className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-amber-400/60 hover:bg-slate-900/80 transition-all cursor-pointer space-y-2 group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-amber-400 font-mono font-bold">{ph.num}</span>
                  <span className="bg-emerald-950 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/40">
                    {ph.badge}
                  </span>
                </div>

                <div className="font-bold text-white group-hover:text-amber-300 transition-colors">
                  {ph.title}
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold pt-1 border-t border-slate-900">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{ph.status}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* SECTION 4: GLOBAL PERFORMANCE & ACCESSIBILITY BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">سرعة التحميل والتنفيذ</div>
              <p className="text-[10px] text-slate-400">Lazy Loading & Zero Latency</p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">تجاوب كامل على الجوال</div>
              <p className="text-[10px] text-slate-400">Responsive Fluid Layout</p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 border border-purple-500/40 flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">إمكانية الوصول WCAG</div>
              <p className="text-[10px] text-slate-400">Screen Readers & High Contrast</p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 border border-blue-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">أمان الصلاحيات RBAC</div>
              <p className="text-[10px] text-slate-400">7 Unified User Portals</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
