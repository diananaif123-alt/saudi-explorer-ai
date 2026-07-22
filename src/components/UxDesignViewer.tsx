import React, { useState } from 'react';
import { 
  Layout, 
  Layers, 
  GitCommit, 
  Smartphone, 
  Monitor, 
  Tv, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Heart, 
  Building2, 
  Hotel, 
  Utensils, 
  Map, 
  Eye, 
  User, 
  Settings, 
  SearchX, 
  TicketX, 
  HeartOff, 
  BellOff, 
  WifiOff, 
  AlertTriangle, 
  ArrowLeft, 
  MousePointer, 
  Sliders, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  RefreshCw, 
  ShieldAlert, 
  HelpCircle,
  Accessibility,
  MoveUpRight,
  Flame,
  Zap,
  Star
} from 'lucide-react';
import { 
  informationArchitectureData, 
  userFlowSteps, 
  emptyStatesData, 
  errorPagesSpecs,
  PageInfoSpec
} from '../data/uxDesignData';

export const UxDesignViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ia' | 'flow' | 'wireframe' | 'navigation' | 'empty-states' | 'responsive' | 'proto'>('wireframe');
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [currentFlowStep, setCurrentFlowStep] = useState<number>(1);
  const [selectedEmptyState, setSelectedEmptyState] = useState<string>('no-results');
  const [selectedErrorPage, setSelectedErrorPage] = useState<string>('404');
  const [viewDevice, setViewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <section id="ux-design-section" className="py-12 bg-[#FAF8F5] text-slate-800 relative border-t-2 border-[#0D7A5F]/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phase 4 Header Banner - Professional Clean UX Architecture */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xl mb-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D7A5F] to-[#064E3B] flex items-center justify-center text-white shadow-md">
                <Layout className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#0D7A5F] font-bold block">مرحلة تصميم التفاعل وواجهة المستخدم (Phase 4 Specification)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  تصميم تجربة المستخدم <span className="text-[#0D7A5F]">UX/UI Design & Wireframes</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#E6F4F0] px-4 py-2 rounded-xl border border-emerald-300 text-[#0D7A5F] text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>UX Prototype Interactive Specs (100% Client Demo Mode)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
            تستعرض هذه الوثيقة التفاعلية كافة مخططات هيكلة المعلومات (Information Architecture)، رحلة المستخدم (User Flow)، الهياكل السلكية (Wireframes)، نظام التنقل والـ Mega Menu، الشاشات التفاعلية الخالية (Empty States)، وصفحات الأخطاء لمشروع **SAUDI EXPLORER AI**.
          </p>

          {/* Phase 4 Tab Navigation */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 relative z-10">
            <button
              onClick={() => setActiveTab('wireframe')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'wireframe' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>1. الهياكل السلكية (Wireframes)</span>
            </button>

            <button
              onClick={() => setActiveTab('ia')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'ia' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2. هيكلة المعلومات (Information Architecture)</span>
            </button>

            <button
              onClick={() => setActiveTab('flow')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'flow' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <GitCommit className="w-4 h-4" />
              <span>3. رحلة المستخدم (User Flow)</span>
            </button>

            <button
              onClick={() => setActiveTab('navigation')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'navigation' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Menu className="w-4 h-4" />
              <span>4. نظام التنقل والـ Mega Menu</span>
            </button>

            <button
              onClick={() => setActiveTab('empty-states')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'empty-states' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <SearchX className="w-4 h-4" />
              <span>5. الحالات الخالية وصفحات الأخطاء</span>
            </button>

            <button
              onClick={() => setActiveTab('responsive')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'responsive' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>6. الاستجابة وسهولة الإمكانية (Accessibility)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: WIREFRAMES INTERACTIVE VIEWER */}
        {activeTab === 'wireframe' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Layout className="w-5 h-5 text-[#0D7A5F]" />
                    <span>مخطط الهياكل السلكية (Wireframes & Screen Layout Specs)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">معاينة تفاعلية لمواقع الأزرار، البطاقات، الخرائط، وأقسام الاستكشاف الرئيسية.</p>
                </div>

                {/* Device Selector Mock */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                  <button 
                    onClick={() => setViewDevice('desktop')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${viewDevice === 'desktop' ? 'bg-white text-[#0D7A5F] shadow-sm font-black' : 'text-slate-600'}`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>لابتوب / شاشة كبرى</span>
                  </button>
                  <button 
                    onClick={() => setViewDevice('tablet')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${viewDevice === 'tablet' ? 'bg-white text-[#0D7A5F] shadow-sm font-black' : 'text-slate-600'}`}
                  >
                    <Tv className="w-3.5 h-3.5" />
                    <span>تابلت</span>
                  </button>
                  <button 
                    onClick={() => setViewDevice('mobile')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${viewDevice === 'mobile' ? 'bg-white text-[#0D7A5F] shadow-sm font-black' : 'text-slate-600'}`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>جوال</span>
                  </button>
                </div>
              </div>

              {/* Wireframe Canvas Spec */}
              <div className={`mx-auto transition-all duration-300 border-2 border-dashed border-slate-300 rounded-3xl bg-[#FAF8F5] p-4 sm:p-6 space-y-6 ${
                viewDevice === 'mobile' ? 'max-w-sm' : viewDevice === 'tablet' ? 'max-w-xl' : 'w-full'
              }`}>
                
                {/* Wireframe Header */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono font-bold text-slate-500 mr-2">https://saudi-explorer.ai/app</span>
                  </div>
                  <span className="text-[10px] bg-[#E6F4F0] text-[#0D7A5F] font-bold px-2 py-0.5 rounded">
                    Wireframe Mode
                  </span>
                </div>

                {/* Wireframe Screen Section 1: Hero Banner */}
                <div className="bg-slate-200/80 rounded-2xl p-6 border border-slate-300 text-center space-y-4 relative overflow-hidden">
                  <div className="inline-block bg-slate-300 text-slate-700 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    [SECTION: HERO BANNER & SMART SEARCH]
                  </div>
                  <div className="h-8 bg-slate-300 rounded-lg w-3/4 mx-auto" />
                  <div className="h-4 bg-slate-300 rounded-lg w-1/2 mx-auto" />

                  {/* Search Bar Wireframe */}
                  <div className="bg-white rounded-full p-2.5 shadow-md border border-slate-300 grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-2 bg-slate-100 rounded-full text-slate-500 text-[11px] font-bold text-center">
                      📍 إلى أين تتجه؟
                    </div>
                    <div className="p-2 bg-slate-100 rounded-full text-slate-500 text-[11px] font-bold text-center">
                      📅 الموعد
                    </div>
                    <div className="p-2 bg-slate-100 rounded-full text-slate-500 text-[11px] font-bold text-center">
                      👥 عدد الأشخاص
                    </div>
                    <div className="p-2 bg-[#0D7A5F] text-white rounded-full text-[11px] font-bold text-center">
                      🔍 ابحث الآن
                    </div>
                  </div>
                </div>

                {/* Wireframe Section 2: Cities Grid */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>[SECTION: SAUDI CITIES CAROUSEL]</span>
                    <span className="text-[#0D7A5F]">عرض الكل ←</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['العلا', 'الرياض', 'جدة', 'أبها'].map((city, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-3 border border-slate-300 shadow-sm text-center space-y-2">
                        <div className="h-20 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xs font-bold">
                          [صورة {city}]
                        </div>
                        <span className="font-bold text-xs text-slate-800 block">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wireframe Section 3: AI Planner Box */}
                <div className="bg-[#E6F4F0] rounded-2xl p-5 border border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="space-y-1 text-right">
                    <span className="bg-[#0D7A5F] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      [AI WIDGET]
                    </span>
                    <h4 className="font-black text-slate-900 text-sm">خطط رحلتك بالذكاء الاصطناعي</h4>
                    <p className="text-slate-600 text-[11px]">جدول سياحي مخصص بالكامل خلال أقل من دقيقة واحدة.</p>
                  </div>
                  <button className="px-4 py-2 bg-[#0D7A5F] text-white rounded-xl font-bold whitespace-nowrap shadow-sm">
                    إنشاء خطة AI ✨
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INFORMATION ARCHITECTURE */}
        {activeTab === 'ia' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#0D7A5F]" />
                  <span>هيكلة معلومات المنصة والصفحات الرئيسية (Information Architecture)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">خارطة كاملة لشاشات المنصة والمكونات الرئيسية لكل شاشة.</p>
              </div>

              {/* Grid of Pages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {informationArchitectureData.map((page, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedPage(page.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedPage === page.id 
                        ? 'border-[#0D7A5F] bg-[#E6F4F0] shadow-md ring-2 ring-emerald-200' 
                        : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        /{page.id}
                      </span>
                      <span className="text-xs font-black text-[#0D7A5F]">{page.titleEn}</span>
                    </div>

                    <h4 className="font-black text-slate-900 text-sm mb-1">{page.titleAr}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{page.description}</p>

                    <div className="pt-2 border-t border-slate-200/60">
                      <span className="text-[10px] font-bold text-slate-500 block mb-1">المكونات الأساسية:</span>
                      <div className="flex flex-wrap gap-1">
                        {page.primaryComponents.map((comp, cIdx) => (
                          <span key={cIdx} className="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: USER FLOW */}
        {activeTab === 'flow' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <GitCommit className="w-5 h-5 text-[#0D7A5F]" />
                  <span>رحلة المستخدم خطوة بخطوة (User Flow Journey)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">تتبع المسار التدريجي للسائح بدءاً من الاستقبال وحتى الحصول على الجدول التفاعلي والحجز.</p>
              </div>

              {/* User Flow Stepper Visualizer */}
              <div className="space-y-4">
                {userFlowSteps.map((st) => (
                  <div 
                    key={st.stepNumber}
                    onClick={() => setCurrentFlowStep(st.stepNumber)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                      currentFlowStep === st.stepNumber
                        ? 'border-[#0D7A5F] bg-[#E6F4F0] shadow-md'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 ${
                        currentFlowStep === st.stepNumber 
                          ? 'bg-[#0D7A5F] text-white shadow' 
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {st.stepNumber}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-black text-slate-900 text-sm">{st.title}</h4>
                        <p className="text-xs text-slate-600">{st.action}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="bg-white border border-slate-300 text-slate-700 font-bold px-3 py-1 rounded-lg">
                        📍 {st.screen}
                      </span>
                      <span className="bg-emerald-100 text-[#0D7A5F] font-bold px-3 py-1 rounded-lg">
                        ✅ {st.outcome}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: NAVIGATION SYSTEM */}
        {activeTab === 'navigation' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Menu className="w-5 h-5 text-[#0D7A5F]" />
                  <span>نظام التنقل الشامل (Header, Mega Menu & Mobile Nav)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">تصميم التنقل الدائم باللغتين العربية والإنجليزية لجميع الشاشات.</p>
              </div>

              {/* Mega Menu Demonstration */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-4">
                <h4 className="text-xs font-black text-[#0D7A5F] uppercase tracking-wider">نموذج القائمة الفائقة (Mega Menu View):</h4>
                
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xl grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
                  <div className="space-y-2">
                    <span className="font-black text-slate-900 text-sm block border-b pb-1 text-[#0D7A5F]">الوجهات التاريخية</span>
                    <ul className="space-y-1.5 text-slate-600">
                      <li className="hover:text-[#0D7A5F] cursor-pointer">العلا والحِجر التراثي</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">الدرعية التاريخية بالرياض</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">جدة البلد العريقة</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">رجال ألمع في أبها</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="font-black text-slate-900 text-sm block border-b pb-1 text-[#0D7A5F]">السياحة البحرية</span>
                    <ul className="space-y-1.5 text-slate-600">
                      <li className="hover:text-[#0D7A5F] cursor-pointer">شواطئ البحر الأحمر الفاخرة</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">جزر أمالا ونيوم</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">شاطئ شرم أبحر جدة</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">جزر فرسان بالجازان</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="font-black text-slate-900 text-sm block border-b pb-1 text-[#0D7A5F]">الفعاليات الحالية</span>
                    <ul className="space-y-1.5 text-slate-600">
                      <li className="hover:text-[#0D7A5F] cursor-pointer">مواسم الرياض والعلا</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">سباق فورمولا 1 جدة</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">مهرجان الإبل الملكي</li>
                      <li className="hover:text-[#0D7A5F] cursor-pointer">حفلات شتاء طنطورة</li>
                    </ul>
                  </div>

                  <div className="bg-[#E6F4F0] p-4 rounded-xl border border-emerald-300 space-y-2">
                    <span className="font-black text-[#0D7A5F] text-xs block">تطبيق الجوال السريع</span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">احمل مرشدك الذكي معك في كل خطوة مع دعم الخرائط دون إنترنت.</p>
                    <button className="w-full py-1.5 bg-[#0D7A5F] text-white rounded-lg font-bold text-[11px]">
                      حمل التطبيق المجاني
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EMPTY STATES & ERROR PAGES */}
        {activeTab === 'empty-states' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <SearchX className="w-5 h-5 text-[#0D7A5F]" />
                  <span>معاينة شاشات الحالات الخالية وصفحات الأخطاء (Empty States & Error Pages)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">توفير رسائل توجيهية وودودة للسائح عند انقطاع النت أو عدم وجود نتائج.</p>
              </div>

              {/* Empty State Selector Tabs */}
              <div className="flex flex-wrap gap-2">
                {emptyStatesData.map((st) => (
                  <button
                    key={st.type}
                    onClick={() => setSelectedEmptyState(st.type)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedEmptyState === st.type 
                        ? 'bg-[#0D7A5F] text-white shadow' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {st.title}
                  </button>
                ))}
              </div>

              {/* Live Preview of Selected Empty State */}
              {(() => {
                const currentSt = emptyStatesData.find(s => s.type === selectedEmptyState) || emptyStatesData[0];
                return (
                  <div className="p-8 rounded-3xl bg-[#FAF8F5] border-2 border-dashed border-slate-300 text-center space-y-4 max-w-lg mx-auto">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-[#0D7A5F] flex items-center justify-center mx-auto shadow-sm">
                      <SearchX className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900">{currentSt.title}</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">{currentSt.description}</p>
                    <button className="px-5 py-2.5 bg-[#0D7A5F] text-white text-xs font-black rounded-xl shadow-md hover:bg-[#064E3B] transition-all">
                      {currentSt.actionText}
                    </button>
                  </div>
                );
              })()}

              {/* Error Pages Section */}
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-sm font-black text-slate-900 mb-3">صفحات الأخطاء التوجيهية (Error Pages - 404 / 403 / 500):</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {errorPagesSpecs.map((err) => (
                    <div key={err.code} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-right">
                      <span className="text-2xl font-black text-[#0D7A5F] block">{err.code}</span>
                      <h5 className="font-bold text-slate-900 text-xs">{err.title}</h5>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{err.desc}</p>
                      <button className="text-[11px] font-extrabold text-[#0D7A5F] hover:underline pt-1">
                        {err.action} ←
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 6: RESPONSIVE & ACCESSIBILITY */}
        {activeTab === 'responsive' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-[#0D7A5F]" />
                  <span>معايير سهولة الاستخدام والاستجابة (Accessibility & Responsiveness)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm text-[#0D7A5F]">1. سهولة الاستخدام (Accessibility WCAG AA)</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D7A5F]" />
                      <span>حجم أزرار ومساحات لمس لا تقل عن 44px بالجوال.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D7A5F]" />
                      <span>تباين ألوان النصوص يتجاوز 4.5:1 بوضوح تام.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D7A5F]" />
                      <span>دعم قارئات الشاشة والترجمة الفورية للغة الإنجليزية.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm text-[#0D7A5F]">2. الحركات والانتقالات (Micro-Animations)</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D7A5F]" />
                      <span>مدة الحركات بين 200ms - 300ms لضمان سرعة الاستجابة.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D7A5F]" />
                      <span>انتقالات ناعمة عند فتح الشاشات وتوليد خطة AI.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D7A5F]" />
                      <span>مؤشرات تحميل هيكلية (Skeleton Loaders) أثناء استدعاء البيانات.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
