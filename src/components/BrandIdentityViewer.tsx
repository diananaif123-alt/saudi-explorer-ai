import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Compass, 
  Sun, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Type, 
  Layout, 
  Smartphone, 
  MousePointer, 
  BellRing, 
  Search, 
  Star, 
  Heart, 
  SlidersHorizontal,
  ChevronDown,
  Info,
  AlertTriangle,
  X,
  Loader2,
  Check
} from 'lucide-react';
import { 
  brandPillars, 
  logoGuidelines, 
  lightColorPalette, 
  statusColors, 
  typographySystem, 
  uiComponentsSpec, 
  designSystemRules 
} from '../data/brandIdentityData';

export const BrandIdentityViewer: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'brand' | 'logo' | 'colors' | 'typography' | 'components' | 'system'>('colors');
  const [demoInput, setDemoInput] = useState('');
  const [demoDropdown, setDemoDropdown] = useState('العلا - المدينة التاريخية');
  const [showDemoToast, setShowDemoToast] = useState(false);

  return (
    <section id="brand-identity-section" className="py-12 bg-[#FAF8F5] text-slate-800 relative border-t-2 border-[#D4AF37]/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phase 3 Header Banner - Clean Bright Luxury */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-xl mb-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D7A5F] to-[#064E3B] flex items-center justify-center text-white shadow-md">
                <Palette className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#0D7A5F] font-bold block">التصاميم والهوية البصرية (Phase 3 Specification)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  الهوية البصرية ونظام التصميم <span className="text-[#0D7A5F]">المشرق والفاخر</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#E6F4F0] px-4 py-2 rounded-xl border border-emerald-300 text-[#0D7A5F] text-xs font-extrabold shadow-sm">
              <Sun className="w-4 h-4 text-[#D4AF37]" />
              <span>Light Theme Primary (مظهَر سياحي ناصع ومريح)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
            تستعرض هذه الوثيقة التفاعلية الهوية البصرية ونظام التصميم الكامل لمنصة **SAUDI EXPLORER AI** الموجهة للسياحة السعودية، بأسلوب عصري، مشرق، وفاخر يعتمد اللون الأبيض والأخضر الزمردي الفاتح والرملي والذهبي دون خلفيات داكنة أو كئيبة.
          </p>

          {/* Section Selector Buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 relative z-10">
            <button
              onClick={() => setActiveSection('colors')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeSection === 'colors' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>1. لوحة الألوان المشرقة (Color Palette)</span>
            </button>

            <button
              onClick={() => setActiveSection('logo')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeSection === 'logo' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>2. الشعار والشخصية (Logo & Identity)</span>
            </button>

            <button
              onClick={() => setActiveSection('typography')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeSection === 'typography' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Type className="w-4 h-4" />
              <span>3. الخطوط والطباعة (Typography)</span>
            </button>

            <button
              onClick={() => setActiveSection('components')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeSection === 'components' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>4. المكونات التفاعلية (UI Components)</span>
            </button>

            <button
              onClick={() => setActiveSection('brand')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeSection === 'brand' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>5. الرؤية والقيم (Brand Pillars)</span>
            </button>

            <button
              onClick={() => setActiveSection('system')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeSection === 'system' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>6. قواعد التصميم (Design System)</span>
            </button>
          </div>
        </div>

        {/* SECTION 1: COLOR PALETTE */}
        {activeSection === 'colors' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#0D7A5F]" />
                    <span>لوحة الألوان الأساسية المشرقة (Bright Light Theme)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">تعتمد المنصة طابعاً ناصعاً مشرقاً يريح العين ويعكس جمال السواحل والرمال السعودية.</p>
                </div>
              </div>

              {/* Light Color Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {lightColorPalette.map((color, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all space-y-3">
                    <div className={`h-20 rounded-xl ${color.bgClass} border border-slate-200 flex items-center justify-center font-mono text-xs font-bold shadow-inner`}>
                      <span className={color.textClass}>{color.hex}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{color.name}</h4>
                      <span className="text-[10px] text-[#0D7A5F] font-bold block">{color.role}</span>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Colors */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 mb-3">ألوان الحالات والنظام (System & Status Colors):</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  {statusColors.map((st, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: st.hex }} />
                      <div>
                        <span className="font-bold text-slate-900 block">{st.name}</span>
                        <span className="text-[10px] text-slate-500">{st.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: LOGO & IDENTITY */}
        {activeSection === 'logo' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-white to-[#E6F4F0] border border-[#0D7A5F]/20">
                
                {/* Logo Graphic Concept Display */}
                <div className="w-32 h-32 rounded-3xl bg-white border-2 border-[#D4AF37] shadow-xl flex items-center justify-center relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#0D7A5F] to-[#0EA5E9] flex items-center justify-center text-white shadow-md">
                    <Compass className="w-10 h-10 text-[#D4AF37] animate-pulse" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow">
                    KSA 2026
                  </div>
                </div>

                <div className="space-y-2 text-right">
                  <span className="text-xs text-[#0D7A5F] font-extrabold uppercase">Minimalist Premium KSA Logo</span>
                  <h3 className="text-xl font-black text-slate-900">شعار SAUDI EXPLORER AI الأصلي</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                    {logoGuidelines.concept}
                  </p>
                </div>
              </div>

              {/* Logo Elements Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0D7A5F] text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>العناصر البصرية المكونة للشعار</span>
                  </h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {logoGuidelines.elements.map((el, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A5F]" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0D7A5F] text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0D7A5F]" />
                    <span>قواعد وأحكام استخدام الشعار</span>
                  </h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {logoGuidelines.rules.map((rl, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A5F]" />
                        <span>{rl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: TYPOGRAPHY */}
        {activeSection === 'typography' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Type className="w-5 h-5 text-[#0D7A5F]" />
                    <span>النظام الطباعي والخطوط المعتمدة (Typography Matrix)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">الخط العربي الرئيسي: **IBM Plex Sans Arabic** | الخط الإنجليزي: **Plus Jakarta Sans**</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-[#0D7A5F]">
                      <th className="py-3 px-3">المستوى الطباعي</th>
                      <th className="py-3 px-3">الحجم الرقمي</th>
                      <th className="py-3 px-3">الوزن (Weight)</th>
                      <th className="py-3 px-3">مجال الاستخدام في المنصة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {typographySystem.hierarchy.map((tp, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-3 font-black text-slate-900 whitespace-nowrap">{tp.level}</td>
                        <td className="py-3.5 px-3 font-mono font-bold text-[#0D7A5F] whitespace-nowrap">{tp.size}</td>
                        <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">{tp.weight}</td>
                        <td className="py-3.5 px-3 text-slate-600 leading-relaxed">{tp.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: UI COMPONENTS SHOWCASE */}
        {activeSection === 'components' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-[#0D7A5F]" />
                  <span>معاينة حية للمكونات التفاعلية بتصميم فاتح ومشرق</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">عناصر واجهة مستخدم ناصعة، ذات زوايا منحنية وظلال فائقة النعومة.</p>
              </div>

              {/* Live Interactive UI Components Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Showcase 1: Buttons & Badges */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-4">
                  <h4 className="text-xs font-black text-[#0D7A5F] uppercase tracking-wider">الأزرار والشارات (Buttons & Badges)</h4>
                  
                  <div className="flex flex-wrap gap-3 items-center">
                    <button className="px-5 py-2.5 rounded-xl bg-[#0D7A5F] hover:bg-[#064E3B] text-white text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <span>زر زمرذي رئيسي</span>
                    </button>

                    <button className="px-5 py-2.5 rounded-xl bg-white border border-[#D4AF37] text-slate-800 text-xs font-bold hover:bg-slate-50 shadow-sm transition-all flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#0D7A5F]" />
                      <span>زر ذهبي ثانوي</span>
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-[#0EA5E9] text-white text-xs font-bold hover:brightness-110 shadow-sm">
                      زر الشواطئ السماوي
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-[#E6F4F0] text-[#0D7A5F] text-[11px] font-bold border border-emerald-200">
                      شارة سياحية زمرذية
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#FEFCE8] text-[#854D0E] text-[11px] font-bold border border-amber-200">
                      باقة فاخرة 5 نجوم
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F0F9FF] text-[#0369A1] text-[11px] font-bold border border-sky-200">
                      فعاليات البحر الأحمر
                    </span>
                  </div>
                </div>

                {/* Showcase 2: Form & Input Component */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-4">
                  <h4 className="text-xs font-black text-[#0D7A5F] uppercase tracking-wider">حقول المدخلات القابلة للتفاعل (Inputs & Forms)</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">ابحث عن وجهتك أو فعاليتك القادمة:</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          value={demoInput}
                          onChange={(e) => setDemoInput(e.target.value)}
                          placeholder="مثال: العلا، الرياض، أبها..."
                          className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#0D7A5F] focus:ring-2 focus:ring-emerald-100 transition-all shadow-sm"
                        />
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">القائمة المنسدلة (Dropdown Select):</label>
                      <div className="relative">
                        <select 
                          value={demoDropdown}
                          onChange={(e) => setDemoDropdown(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#0D7A5F] appearance-none shadow-sm font-bold"
                        >
                          <option>العلا - المدينة التاريخية</option>
                          <option>الرياض - العاصمة والفعاليات</option>
                          <option>جدة التاريخية - عروس البحر</option>
                          <option>البحر الأحمر - جزر وسياحة فاخرة</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Showcase 3: Toast & Alert Component */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-4">
                  <h4 className="text-xs font-black text-[#0D7A5F] uppercase tracking-wider">التنبيهات والإشعارات (Alerts & Toast)</h4>
                  
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-[#E6F4F0] text-[#0D7A5F] border border-emerald-300 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0D7A5F]" />
                        <span className="font-bold">تم تأكيد حجز الفعالية بنجاح في محفظتك!</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FEFCE8] text-[#854D0E] border border-amber-300 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#854D0E]" />
                      <span>تبقى 3 مقاعد فقط في رحلة العلا الاستكشافية.</span>
                    </div>

                    <button 
                      onClick={() => setShowDemoToast(!showDemoToast)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-[11px] font-bold hover:bg-slate-50"
                    >
                      {showDemoToast ? 'إخفاء الإشعار التجريبي' : 'اختبار إشعار Toast منبثق'}
                    </button>

                    {showDemoToast && (
                      <div className="p-3 rounded-xl bg-slate-900 text-white shadow-xl flex items-center justify-between animate-fade-in text-[11px]">
                        <span className="flex items-center gap-2">
                          <BellRing className="w-4 h-4 text-[#D4AF37]" />
                          تم توليد خطتك السياحية بنجاح بواسطة الذكاء الاصطناعي
                        </span>
                        <X className="w-3.5 h-3.5 cursor-pointer text-slate-400" onClick={() => setShowDemoToast(false)} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Showcase 4: Loader & Card Layout */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-4">
                  <h4 className="text-xs font-black text-[#0D7A5F] uppercase tracking-wider">البطاقات والمؤشرات (Cards & Loaders)</h4>
                  
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-md space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-[#E6F4F0] text-[#0D7A5F] font-bold px-2 py-0.5 rounded">
                        منتجع فاخر
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <h5 className="font-black text-slate-900 text-sm">منتجع هابيتاس العلا</h5>
                    <p className="text-[11px] text-slate-500">إقامة ساحرة بين جبال وأودية العلا التراثية.</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Loader2 className="w-4 h-4 text-[#0D7A5F] animate-spin" />
                    <span>جاري تحميل البيانات الجغرافية والطقس...</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: BRAND PILLARS */}
        {activeSection === 'brand' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#E6F4F0] to-white border border-emerald-200 space-y-2">
                  <span className="text-xs text-[#0D7A5F] font-black uppercase">Brand Vision</span>
                  <h4 className="text-base font-black text-slate-900">رؤية المنصة الوطنية</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{brandPillars.vision}</p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FEFCE8] to-white border border-amber-200 space-y-2">
                  <span className="text-xs text-[#854D0E] font-black uppercase">Brand Mission</span>
                  <h4 className="text-base font-black text-slate-900">رسالة مشروع السياحة الذكي</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{brandPillars.mission}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-3">
                <h4 className="text-sm font-black text-slate-900">قيم العلامة التجارية (Brand Values):</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {brandPillars.values.map((v, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-[#0D7A5F] block">{v.title}</span>
                      <p className="text-slate-500 text-[11px]">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 6: DESIGN SYSTEM RULES */}
        {activeSection === 'system' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0D7A5F]" />
                <span>قواعد ومعايير نظام التصميم (Design System Standards)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900">نظام المسافات (Spacing Grid):</h4>
                  <p className="text-slate-600">{designSystemRules.spacing}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900">انحناء الزوايا (Border Radius):</h4>
                  <p className="text-slate-600">{designSystemRules.borderRadius}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900">الظلال والعمق (Soft Shadows):</h4>
                  <p className="text-slate-600">{designSystemRules.shadows}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900">الحركات والانتقالات (Motion Rules):</h4>
                  <p className="text-slate-600">{designSystemRules.motion}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
