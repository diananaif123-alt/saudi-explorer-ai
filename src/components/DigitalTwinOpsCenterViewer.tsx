import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  Globe2,
  Cpu,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  Compass,
  MapPin,
  Calendar,
  Wallet,
  Zap,
  Info,
  Maximize2,
  Minimize2,
  ArrowUpRight,
  Sliders,
  Layers,
  Plane,
  Bus,
  CloudSun,
  Flame,
  Award,
  Eye,
  Check,
  RefreshCw,
  Search,
  HelpCircle,
  FileText
} from 'lucide-react';

import {
  digitalTwinCitiesData,
  predictiveAIForecastsData,
  crisisScenariosData,
  nationalTourismKPIs,
  DigitalTwinCityNode,
  PredictiveAIForecast,
  CrisisScenario
} from '../data/digitalTwinOpsData';

export const DigitalTwinOpsCenterViewer: React.FC = () => {
  // Presentation Mode Toggle
  const [isExecutivePresentationMode, setIsExecutivePresentationMode] = useState(false);

  // Active City Selection on Digital Twin
  const [selectedCity, setSelectedCity] = useState<DigitalTwinCityNode>(digitalTwinCitiesData[0]);

  // Live Simulation Auto Play State
  const [isLiveSimulating, setIsLiveSimulating] = useState(true);
  const [simulatedTick, setSimulatedTick] = useState(0);

  // Active Crisis Scenario Demo
  const [activeCrisisScenario, setActiveCrisisScenario] = useState<CrisisScenario | null>(null);
  const [crisisExecutedMessage, setCrisisExecutedMessage] = useState<string | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Live Simulation Tick Effect
  useEffect(() => {
    let timer: any = null;
    if (isLiveSimulating) {
      timer = setInterval(() => {
        setSimulatedTick(prev => prev + 1);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isLiveSimulating]);

  // Dynamic Visitors Live Modulation
  const getDynamicVisitors = (base: number) => {
    const variation = Math.sin(simulatedTick + base) * 85;
    return Math.round(base + variation);
  };

  return (
    <section id="phase18-digital-twin-section" className={`py-12 text-slate-100 relative overflow-hidden dir-rtl ${isExecutivePresentationMode ? 'bg-slate-950 min-h-screen p-6' : 'bg-[#06100d] border-t border-amber-500/40'}`} dir="rtl">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-amber-500/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* MANDATORY DISCLAIMER BANNER ACCORDING TO PHASE 18 SPEC */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border border-amber-500/60 p-4 rounded-2xl shadow-xl flex items-center justify-between gap-4 text-xs text-amber-200">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-300 shrink-0">
              <Info className="w-5 h-5 animate-pulse" />
            </div>
            <p className="font-bold leading-relaxed">
              جميع البيانات والمحاكاة والتوقعات المعروضة في هذا النموذج هي بيانات تجريبية لأغراض العرض والتقييم فقط، وليست بيانات تشغيلية حقيقية.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="bg-emerald-950 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-500/40">
              ● Phase 18 Verified
            </span>
          </div>
        </div>

        {/* Phase Header & Presentation Mode Trigger */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-lg">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>المرحلة 18 — التوأم الرقمي، الذكاء التنبؤي، ومركز العمليات السياحي الموحد</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              NATIONAL DIGITAL TWIN & PREDICTIVE AI OPS CENTER
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              مركز قيادة وتوجيه رقمي يعرض الوضع السياحي المباشر، كثافة الحركة، التوقعات المستقبلية وسيناريوهات إدارة الأزمات بالذكاء الاصطناعي.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setIsExecutivePresentationMode(!isExecutivePresentationMode);
                triggerToast(
                  !isExecutivePresentationMode
                    ? 'تم تفعيل وضع العرض التنفيذي للمستثمرين والقيادات (Executive Presentation Mode)'
                    : 'تم الرجوع للوضع القياسي لمشاهدة التفاصيل'
                );
              }}
              className={`px-5 py-3 rounded-2xl font-black text-xs flex items-center gap-2 shadow-xl transition-all ${
                isExecutivePresentationMode
                  ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300'
                  : 'bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-500/50'
              }`}
            >
              {isExecutivePresentationMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              <span>{isExecutivePresentationMode ? 'إنهاء وضع العرض التنفيذي' : 'تفعيل وضع العرض التنفيذي (Presentation Mode)'}</span>
            </button>
          </div>

        </div>

        {/* Global Toast Message */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-900 border-2 border-amber-400 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between z-50 text-xs sm:text-sm font-bold"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{toastMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 1: TOURISM NATIONAL KPI CENTER */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              <span>مؤشرات الأداء السياحي الوطني (National Tourism KPI Center)</span>
            </h3>

            <div className="flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold">بث حي مستمر للمؤشرات</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            {nationalTourismKPIs.map((kpi, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">{kpi.label}</span>
                <div className="text-base font-black text-white">{kpi.value}</div>
                <div className="flex items-center justify-between text-[10px] pt-1 border-t border-slate-900">
                  <span className="text-emerald-400 font-bold">{kpi.change}</span>
                  <span className="text-slate-400">{kpi.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: NATIONAL DIGITAL TWIN & LIVE SIMULATION MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Digital Twin Map Visualization Canvas */}
          <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-emerald-400" />
                  <span>الخريطة التفاعلية للتوأم الرقمي (Interactive Digital Twin Map)</span>
                </h3>
                <p className="text-xs text-slate-400">انقر على أي مدينة سياحية لمعاينة كثافة زوارها، الإشغال، حركة الطيران والنقل الحية.</p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => setIsLiveSimulating(!isLiveSimulating)}
                  className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                    isLiveSimulating
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {isLiveSimulating ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isLiveSimulating ? 'المحاكاة نشطة' : 'إيقاف موقت'}</span>
                </button>
              </div>
            </div>

            {/* Simulated Interactive Map Display Grid */}
            <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl h-[380px] p-4 overflow-hidden shadow-inner flex flex-col justify-between">
              
              {/* Map Radial Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

              {/* City Nodes on Map Canvas */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 h-full items-center">
                {digitalTwinCitiesData.map(city => {
                  const isSelected = selectedCity.id === city.id;
                  const currentVisitors = getDynamicVisitors(city.liveVisitors);

                  return (
                    <div
                      key={city.id}
                      onClick={() => {
                        setSelectedCity(city);
                        triggerToast(`تفعيل معطيات التوأم الرقمي لـ: (${city.name})`);
                      }}
                      className={`bg-slate-950/90 p-3.5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                        isSelected
                          ? 'border-2 border-amber-400 shadow-2xl ring-2 ring-amber-400/20 bg-slate-900'
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-white">{city.name}</span>
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          city.visitorDensity.includes('عالية') ? 'bg-red-400 animate-ping' : 'bg-emerald-400'
                        }`} />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                        <span>الزوار الآن:</span>
                        <span className="text-amber-300 font-bold">{currentVisitors.toLocaleString()}</span>
                      </div>

                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${city.occupancyRate > 90 ? 'bg-red-500' : 'bg-emerald-400'}`}
                          style={{ width: `${city.occupancyRate}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>نسبة الإشغال:</span>
                        <span className="font-bold text-white">{city.occupancyRate}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Status Ticker Footer */}
              <div className="relative z-10 bg-slate-950/90 border border-slate-800 p-2.5 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                  <Activity className="w-4 h-4" />
                  <span>تحديث المحاكاة التلقائي: {simulatedTick} ثوانٍ</span>
                </span>
                <span className="text-[11px] text-slate-400">البيانات متصلة بمحاكي التوأم الرقمي</span>
              </div>

            </div>

          </div>

          {/* Selected City Digital Twin Details Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold font-mono">{selectedCity.region}</span>
                  <h4 className="text-xl font-black text-white">{selectedCity.name}</h4>
                </div>
                <span className="bg-emerald-950 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/40 font-bold">
                  {selectedCity.visitorDensity}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">عدد الزوار المباشر:</span>
                  <span className="text-amber-300 font-bold text-sm">
                    {getDynamicVisitors(selectedCity.liveVisitors).toLocaleString()} زائر
                  </span>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">نسبة إشغال المنشآت:</span>
                  <span className="text-emerald-400 font-bold text-sm">{selectedCity.occupancyRate}%</span>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <CloudSun className="w-3.5 h-3.5 text-amber-400" />
                    <span>حالة الطقس التجريبية:</span>
                  </span>
                  <p className="text-slate-200 font-bold">{selectedCity.weatherTemp}°C — {selectedCity.weatherDesc}</p>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Plane className="w-3.5 h-3.5 text-blue-400" />
                    <span>تدفق المطارات والموانئ:</span>
                  </span>
                  <p className="text-slate-200">{selectedCity.airportFlow}</p>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Bus className="w-3.5 h-3.5 text-purple-400" />
                    <span>حركة النقل والازدحام:</span>
                  </span>
                  <p className="text-slate-200">{selectedCity.transportStatus}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => triggerToast(`تم استخراج تقرير التشغيل لمدينة: ${selectedCity.name}`)}
              className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>تصدير تقرير التشغيل الموحد</span>
            </button>

          </div>

        </div>

        {/* SECTION 3: PREDICTIVE AI FORECASTS & SMART DECISION SUPPORT */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                <span>لوحة التوقعات واتخاذ القرار بالذكاء الاصطناعي (Predictive AI & Decision Support)</span>
              </h3>
              <p className="text-xs text-slate-400">توقعات دقيقة للنمو والإشغال والازدحام مع توصيات تلقائية لإعادة توزيع الحركة السياحية.</p>
            </div>

            <span className="bg-purple-950 text-purple-200 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border border-purple-500/40">
              AI PREDICTIVE ENGINE V4
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {predictiveAIForecastsData.map(fc => (
              <div key={fc.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{fc.city}</span>
                  <span className="bg-purple-950 text-purple-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    {fc.trendType}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span>معدل النمو المتوقع: <strong className="text-emerald-400">+{fc.predictedGrowthPercent}%</strong></span>
                  <span>مستوى الثقة: <strong className="text-amber-400">{fc.confidenceRate}%</strong></span>
                </div>

                <p className="text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-900">
                  <strong className="text-amber-300 block mb-1">التوصية الذكية لمتخذ القرار:</strong>
                  {fc.recommendation}
                </p>

                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
                  <span>الإطار الزمني: {fc.timeframe}</span>
                  <button
                    onClick={() => triggerToast(`تم إقرار تنفيذ التوصية لـ: ${fc.city}`)}
                    className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold px-3 py-1 rounded-lg border border-emerald-500/40"
                  >
                    إقرار التوصية بنقرة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: CRISIS SIMULATION SANDBOX */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span>محاكي سيناريوهات الأزمات والطوارئ (Crisis Simulation Sandbox)</span>
              </h3>
              <p className="text-xs text-slate-400">محاكاة فورية لتحديات الازدحام، الطقس والفعاليات مع تقديم حلول تعويض توجيهية تلقائية.</p>
            </div>

            <span className="bg-red-950 text-red-300 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border border-red-500/40">
              SIMULATION READY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {crisisScenariosData.map(c => (
              <div key={c.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-red-950 text-red-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-red-500/40">
                      خطورة {c.severity}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{c.impactArea}</span>
                  </div>

                  <h4 className="font-bold text-white text-sm">{c.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{c.description}</p>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-amber-300 font-bold block">خطة المعالجة بالذكاء الاصطناعي:</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{c.aiSuggestedContingency}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveCrisisScenario(c);
                    triggerToast(`تم تشغيل واستجابة محاكاة الأزمة: (${c.title}) بنجاح`);
                  }}
                  className="w-full bg-red-950 hover:bg-red-900 text-red-200 font-bold py-2 rounded-xl border border-red-500/40 flex items-center justify-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-red-400" />
                  <span>تنشيط خطة الطوارئ فورياً</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: FUTURE READY ARCHITECTURE DISCLOSURE */}
        <div className="bg-gradient-to-br from-slate-900 via-emerald-950/60 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>جاهزية الربط البرمجي للأنظمة الحكومية والخرائط (Future Ready Architecture)</span>
            </h4>
            <span className="bg-emerald-950 text-emerald-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-emerald-500/40">
              100% MODULAR ARCHITECTURE
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            تم بناء المعمارية البرمجية لمركز العمليات والتوأم الرقمي بتصميم نمطي يسمح بالربط المباشر في المراحل القادمة مع: الخرائط الحية (GIS Maps API)، بيانات الأرصاد الجوية الوطنية، محركات الحجز والدفع، وبوابات وزارة السياحة السعودية.
          </p>
        </div>

      </div>

    </section>
  );
};
