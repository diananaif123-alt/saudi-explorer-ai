import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Building2,
  MapPin,
  PieChart,
  FileText,
  Bell,
  UserCheck,
  Bookmark,
  Sparkles,
  Bot,
  Compass,
  Download,
  Share2,
  Search,
  Filter,
  DollarSign,
  Percent,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  ExternalLink,
  ChevronRight,
  Layers,
  BarChart3,
  Globe2,
  ShieldAlert,
  Sliders,
  Plus,
  Trash2,
  ArrowUpRight,
  Send,
  Hotel,
  Utensils,
  Camera,
  Trees,
  Anchor,
  Mountain,
  HeartHandshake,
  Dumbbell,
  Landmark,
  Eye,
  Check,
  Edit3
} from 'lucide-react';

import {
  demoInvestmentOpportunities,
  demoCityInvestmentDetails,
  demoTouristGrowthData,
  demoSectorDemandData,
  demoTopCitiesData,
  demoNationalitiesData,
  demoInvestmentReports,
  demoInvestorNotifications,
  initialInvestorProfile,
  InvestmentOpportunity,
  CityInvestmentDetail,
  InvestmentReport,
  InvestorProfileData
} from '../data/investorData';

export const InvestorPortalViewer: React.FC = () => {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'opportunities' | 'map' | 'analytics' | 'advisor' | 'reports' | 'saved' | 'notifications' | 'profile'
  >('dashboard');

  // Opportunities & Filter States
  const [selectedSector, setSelectedSector] = useState<string>('الكل');
  const [selectedCity, setSelectedCity] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOpportunity, setSelectedOpportunity] = useState<InvestmentOpportunity | null>(null);

  // Saved Opportunities & Comparison
  const [savedOpportunityIds, setSavedOpportunityIds] = useState<string[]>(['opp-1', 'opp-2', 'opp-7']);
  const [opportunityNotes, setOpportunityNotes] = useState<Record<string, string>>({
    'opp-1': 'مشروع ممتازة بالعلا، يستحق أولوية الدراسة مع صندوق TDF.'
  });
  const [compareIds, setCompareIds] = useState<string[]>(['opp-1', 'opp-2']);
  const [showCompareModal, setShowCompareModal] = useState<boolean>(false);
  const [infoRequestModalOpp, setInfoRequestModalOpp] = useState<InvestmentOpportunity | null>(null);
  const [infoRequestSuccess, setInfoRequestSuccess] = useState<string | null>(null);

  // Interactive Map State
  const [selectedMapCity, setSelectedMapCity] = useState<CityInvestmentDetail | null>(
    demoCityInvestmentDetails['الرياض']
  );

  // AI Advisor State
  const [advisorBudget, setAdvisorBudget] = useState<number>(20000000);
  const [advisorSector, setAdvisorSector] = useState<string>('منتجعات');
  const [advisorRecommendation, setAdvisorRecommendation] = useState<string | null>(null);

  // Reports Download Toast
  const [reportActionMsg, setReportActionMsg] = useState<string | null>(null);

  // Notifications State
  const [notifications, setNotifications] = useState(demoInvestorNotifications);

  // Profile State
  const [investorProfile, setInvestorProfile] = useState<InvestorProfileData>(initialInvestorProfile);

  // Filtered Opportunities List
  const filteredOpportunities = demoInvestmentOpportunities.filter(opp => {
    const matchesSector = selectedSector === 'الكل' || opp.sector === selectedSector;
    const matchesCity = selectedCity === 'الكل' || opp.city === selectedCity;
    const matchesSearch =
      opp.title.includes(searchQuery) || opp.description.includes(searchQuery) || opp.city.includes(searchQuery);
    return matchesSector && matchesCity && matchesSearch;
  });

  // Toggle Saved Opportunity
  const toggleSaveOpportunity = (id: string) => {
    if (savedOpportunityIds.includes(id)) {
      setSavedOpportunityIds(prev => prev.filter(item => item !== id));
    } else {
      setSavedOpportunityIds(prev => [...prev, id]);
    }
  };

  // Toggle Compare Opportunity
  const toggleCompareOpportunity = (id: string) => {
    if (compareIds.includes(id)) {
      setCompareIds(prev => prev.filter(item => item !== id));
    } else {
      if (compareIds.length >= 3) {
        alert('يمكنك مقارنة 3 فرص استثمارية كحد أقصى في وقت واحد.');
        return;
      }
      setCompareIds(prev => [...prev, id]);
    }
  };

  // AI Advisor Handler
  const handleGenerateAdvisorRecommendation = (e: React.FormEvent) => {
    e.preventDefault();
    let cityRec = 'العلا';
    let roiEstimate = '21.5%';
    if (advisorBudget > 30000000) {
      cityRec = 'مشروع البحر الأحمر / العلا';
      roiEstimate = '22.8%';
    } else if (advisorBudget < 15000000) {
      cityRec = 'الطائف / حائل';
      roiEstimate = '17.2%';
    }

    setAdvisorRecommendation(
      `بناءً على ميزانيتك المقدرة بـ (${(advisorBudget / 1000000).toFixed(1)} مليون ريال) وتفضيلك لقطاع (${advisorSector}):\n\n` +
      `• أفضل مدينة مقترحة: ${cityRec}\n` +
      `• العائد المتوقع التقديري: ${roiEstimate}\n` +
      `• التوصية الاستراتيجية: الدخول في فرصة فندقية/خدمية بيئية مستفيدة من مبادرات صندوق التنمية السياحي TDF ورؤية المملكة 2030.`
    );
  };

  // Handle Report Action Simulation
  const handleReportAction = (title: string, actionType: 'PDF' | 'Excel' | 'Share') => {
    if (actionType === 'Share') {
      setReportActionMsg(`تم نسخ رابط التقرير "${title}" للتجربة (Demo Link Copied)!`);
    } else {
      setReportActionMsg(`تم بدء تحميل ملف ${actionType} للتقرير: "${title}" (Demo Simulation)!`);
    }
    setTimeout(() => setReportActionMsg(null), 4000);
  };

  // Request Info Submit Handler
  const handleSendInfoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!infoRequestModalOpp) return;
    setInfoRequestSuccess(`تم إرسال طلب الملف الاستثماري الشامل لمشروع "${infoRequestModalOpp.title}" بنجاح! سيصلك على البريد الإلكتروني.`);
    setInfoRequestModalOpp(null);
    setTimeout(() => setInfoRequestSuccess(null), 5000);
  };

  return (
    <section id="phase11-investor-section" className="py-12 bg-slate-950 text-slate-100 border-t border-amber-900/40 relative overflow-hidden dir-rtl" dir="rtl">
      
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg shadow-amber-950/50"
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>المرحلة 11 — بوابة المستثمر ولوحة الذكاء الاستثماري (Investor Portal)</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            استكشاف الفرص الاستثمارية والذكاء السياحي
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            منصة متكاملة لتقييم الفرص الاستثمارية السياحية بالمملكة، الخرائط التفاعلية، التحليلات المتقدمة، والمستشار الذكي AI.
          </p>
        </div>

        {/* Mandatory Demo Disclaimer Banner Requirement */}
        <div className="bg-amber-950/70 border border-amber-500/50 rounded-2xl p-4 mb-8 text-center text-xs text-amber-200 shadow-xl flex items-center justify-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="font-semibold">
            "جميع البيانات والتحليلات والفرص الاستثمارية المعروضة في هذا النموذج هي بيانات تجريبية لأغراض العرض فقط، ولا تمثل فرصًا استثمارية فعلية في الوقت الحالي."
          </span>
        </div>

        {/* Action Success Toasts */}
        <AnimatePresence>
          {reportActionMsg && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-emerald-950 border border-emerald-400/50 text-emerald-200 p-4 rounded-2xl mb-6 shadow-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{reportActionMsg}</span>
              </div>
              <button onClick={() => setReportActionMsg(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {infoRequestSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-emerald-950 border border-emerald-400/50 text-emerald-200 p-4 rounded-2xl mb-6 shadow-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{infoRequestSuccess}</span>
              </div>
              <button onClick={() => setInfoRequestSuccess(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Tabs for Phase 11 Investor Portal */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>لوحة التحكم الرئيسية</span>
          </button>

          <button
            onClick={() => setActiveTab('opportunities')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'opportunities'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>الفرص الاستثمارية ({demoInvestmentOpportunities.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'map'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>الخريطة الاستثمارية</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>تحليلات السوق</span>
          </button>

          <button
            onClick={() => setActiveTab('advisor')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'advisor'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bot className="w-4 h-4 text-emerald-300" />
            <span>المستشار الذكي AI</span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'reports'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>التقارير والدراسات</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'saved'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bookmark className="w-4 h-4 text-amber-300" />
            <span>الفرص المحفوظة ({savedOpportunityIds.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all relative ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>التنبيهات</span>
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'profile'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>ملف المستثمر</span>
          </button>

        </div>

        {/* TAB 1: INVESTOR DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-amber-950/50 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs text-amber-400 font-mono font-bold tracking-wider uppercase block">
                  INVESTOR DASHBOARD • SAUDI VISION 2030
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  أهلاً بك، {investorProfile.name} 👋
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  مرحباً بك في بوابة المستثمر السياحي. يمكنك تصفح الفرص المتاحة، متابعة مؤشرات النمو، وتقارير القطاع الفندقي والترفيهي بالمملكة.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-amber-950/50"
                >
                  <Building2 className="w-4 h-4" />
                  <span>استعراض الفرص المتاحة</span>
                </button>

                <button
                  onClick={() => setActiveTab('advisor')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2"
                >
                  <Bot className="w-4 h-4 text-emerald-400" />
                  <span>توصيات المستشار الذكي</span>
                </button>
              </div>
            </div>

            {/* Key Portfolio & Market Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 font-bold">محفظة الفرص المحفوظة</span>
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                    <Bookmark className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-white font-mono">{savedOpportunityIds.length} فرص</div>
                <p className="text-[11px] text-slate-500 mt-1">بقيمة استثمارية تقديرية 75.5M ريال</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 font-bold">متوسط العائد التقديري ROI</span>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-emerald-400 font-mono">19.2%</div>
                <p className="text-[11px] text-slate-500 mt-1">معدل استرداد 4.2 سنوات</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 font-bold">المدينة الأسرع نمواً</span>
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-amber-300 font-mono">العلا (+35.2%)</div>
                <p className="text-[11px] text-slate-500 mt-1">إشغال فندقي 84%</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 font-bold">التقارير المحملة</span>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-200 font-mono">{investorProfile.downloadedReportsCount} تقارير</div>
                <p className="text-[11px] text-slate-500 mt-1">شاملة دراسات الجدوى والنمو</p>
              </div>

            </div>

            {/* Dashboard Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Featured New Investment Opportunities (2 Cols) */}
              <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>الفرص الاستثمارية المستهدفة حديثاً</span>
                  </h4>

                  <button
                    onClick={() => setActiveTab('opportunities')}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>عرض جميع الفرص</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {demoInvestmentOpportunities.slice(0, 3).map(opp => (
                    <div
                      key={opp.id}
                      className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all flex flex-wrap sm:flex-nowrap items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-950 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30">
                            {opp.sector}
                          </span>
                          <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-emerald-400" />
                            {opp.city}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-white">{opp.title}</h5>
                        <p className="text-xs text-slate-400 line-clamp-1">{opp.description}</p>
                      </div>

                      <div className="text-left shrink-0 space-y-1 border-t sm:border-t-0 sm:border-r border-slate-800 pt-2 sm:pt-0 sm:pr-4">
                        <span className="text-xs font-mono font-bold text-amber-400 block">
                          {(opp.investmentAmountSAR / 1000000).toFixed(1)}M ريال
                        </span>
                        <span className="text-[11px] text-emerald-400 font-mono font-bold block">
                          عائد {opp.expectedRoiPercent}%
                        </span>
                        <button
                          onClick={() => setSelectedOpportunity(opp)}
                          className="mt-1 bg-slate-900 hover:bg-slate-800 text-slate-200 text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-700"
                        >
                          التفاصيل
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar: Fastest Growing Cities & Quick Reports */}
              <div className="space-y-6">
                
                {/* Fastest Growing Tourism Cities */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
                  <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>المدن الأسرع نمواً سياحياً</span>
                  </h4>

                  <div className="space-y-3">
                    {Object.values(demoCityInvestmentDetails).map(city => (
                      <div key={city.cityName} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white block">{city.cityName}</span>
                          <span className="text-[10px] text-slate-400">{city.annualVisitors}</span>
                        </div>
                        <span className="text-emerald-400 font-mono font-bold">+{city.growthIndicatorPercent}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Latest Reports Box */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>أحدث التقارير الاستثمارية</span>
                    </h4>
                    <button onClick={() => setActiveTab('reports')} className="text-[11px] text-amber-400 hover:underline">
                      عرض الكل
                    </button>
                  </div>

                  <div className="space-y-2 text-xs">
                    {demoInvestmentReports.slice(0, 2).map(rep => (
                      <div key={rep.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-[10px] text-amber-300 font-bold block">{rep.category}</span>
                        <h5 className="font-bold text-white line-clamp-1">{rep.title}</h5>
                        <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                          <span>{rep.date}</span>
                          <button
                            onClick={() => handleReportAction(rep.title, 'PDF')}
                            className="text-emerald-400 hover:underline font-bold"
                          >
                            تحميل PDF
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: INVESTMENT OPPORTUNITIES */}
        {activeTab === 'opportunities' && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                
                {/* Search Field */}
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="بحث باسم المشروع أو المدينة أو القطاع..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-10 pl-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* City Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-bold shrink-0">المدينة:</span>
                  <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="الكل">جميع المدن</option>
                    <option value="الرياض">الرياض</option>
                    <option value="العلا">العلا</option>
                    <option value="جدة">جدة</option>
                    <option value="الدرعية">الدرعية</option>
                    <option value="أبها">أبها</option>
                    <option value="جازان">جازان</option>
                    <option value="حائل">حائل</option>
                    <option value="الطائف">الطائف</option>
                  </select>
                </div>

                {/* Compare Action Button */}
                {compareIds.length > 0 && (
                  <button
                    onClick={() => setShowCompareModal(true)}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-amber-950/50"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>مقارنة الفرص المحددة ({compareIds.length})</span>
                  </button>
                )}

              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                {['الكل', 'منتجعات', 'فنادق', 'مطاعم', 'شاليهات', 'متاحف', 'سياحة بحرية', 'سياحة جبلية', 'سياحة علاجية', 'سياحة رياضية'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSector(cat)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                      selectedSector === cat
                        ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Opportunities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map(opp => {
                const isSaved = savedOpportunityIds.includes(opp.id);
                const isComparing = compareIds.includes(opp.id);

                return (
                  <div
                    key={opp.id}
                    className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all"
                  >
                    <div className="space-y-3">
                      {/* Image Header */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={opp.images[0]}
                          alt={opp.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        
                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                          <span className="bg-amber-950/80 border border-amber-500/50 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                            {opp.sector}
                          </span>
                          <span className="bg-slate-950/80 border border-slate-700 text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                            {opp.city}
                          </span>
                        </div>

                        <button
                          onClick={() => toggleSaveOpportunity(opp.id)}
                          className={`absolute top-3 left-3 p-2 rounded-full border backdrop-blur-md transition-all ${
                            isSaved
                              ? 'bg-amber-400 text-slate-950 border-amber-300'
                              : 'bg-slate-950/70 text-slate-300 border-slate-700 hover:text-amber-400'
                          }`}
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2">
                        <h4 className="text-base font-extrabold text-white">{opp.title}</h4>
                        <p className="text-xs text-slate-400 line-clamp-2">{opp.description}</p>

                        <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                            <span className="text-[10px] text-slate-500 block">حجم الاستثمار</span>
                            <span className="text-amber-400 font-bold">{(opp.investmentAmountSAR / 1000000).toFixed(1)}M SAR</span>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                            <span className="text-[10px] text-slate-500 block">العائد المتوقع ROI</span>
                            <span className="text-emerald-400 font-bold">{opp.expectedRoiPercent}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/80 mt-2">
                      <label className="flex items-center gap-1.5 text-[11px] text-slate-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isComparing}
                          onChange={() => toggleCompareOpportunity(opp.id)}
                          className="rounded border-slate-700 text-amber-500 focus:ring-amber-500"
                        />
                        <span>مقارنة</span>
                      </label>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setInfoRequestModalOpp(opp)}
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded-xl border border-slate-700 font-bold"
                        >
                          طلب تفاصيل
                        </button>

                        <button
                          onClick={() => setSelectedOpportunity(opp)}
                          className="bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-xl shadow-lg shadow-amber-950/50"
                        >
                          عرض الفرصة
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* TAB 3: INTERACTIVE INVESTMENT MAP */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Interactive Map Visualizer Box (2 Cols) */}
              <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-400" />
                      <span>الخريطة التفاعلية لكثافة وتوزيع الاستثمار السياحي</span>
                    </h3>
                    <p className="text-xs text-slate-400">انقر على أي مدينة لاستعراض مؤشرات النمو والفرص المتاحة بها</p>
                  </div>

                  <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold">
                    خريطة حية (Demo)
                  </span>
                </div>

                {/* Styled Saudi Arabia Map Simulation Stage */}
                <div className="relative w-full h-96 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Subtle Grid lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                  {/* SVG Map Pins for Saudi Cities */}
                  <div className="relative w-full h-full max-w-xl mx-auto flex items-center justify-center">
                    
                    {/* Riyadh Pin */}
                    <button
                      onClick={() => setSelectedMapCity(demoCityInvestmentDetails['الرياض'])}
                      className="absolute top-[48%] right-[45%] flex flex-col items-center group z-20"
                    >
                      <div className="p-2 rounded-full bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/50 group-hover:scale-125 transition-transform">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="bg-slate-900 text-white font-bold text-[10px] px-2 py-0.5 rounded border border-amber-400 mt-1 shadow">
                        الرياض (24 فرصة)
                      </span>
                    </button>

                    {/* AlUla Pin */}
                    <button
                      onClick={() => setSelectedMapCity(demoCityInvestmentDetails['العلا'])}
                      className="absolute top-[28%] right-[68%] flex flex-col items-center group z-20"
                    >
                      <div className="p-2 rounded-full bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/50 group-hover:scale-125 transition-transform animate-bounce">
                        <Compass className="w-4 h-4" />
                      </div>
                      <span className="bg-slate-900 text-white font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-400 mt-1 shadow">
                        العلا (18 فرصة)
                      </span>
                    </button>

                    {/* Jeddah Pin */}
                    <button
                      onClick={() => setSelectedMapCity(demoCityInvestmentDetails['جدة'])}
                      className="absolute top-[52%] right-[75%] flex flex-col items-center group z-20"
                    >
                      <div className="p-2 rounded-full bg-teal-400 text-slate-950 shadow-lg shadow-teal-400/50 group-hover:scale-125 transition-transform">
                        <Anchor className="w-4 h-4" />
                      </div>
                      <span className="bg-slate-900 text-white font-bold text-[10px] px-2 py-0.5 rounded border border-teal-400 mt-1 shadow">
                        جدة (20 فرصة)
                      </span>
                    </button>

                    {/* Abha Pin */}
                    <button
                      onClick={() => setSelectedMapCity(demoCityInvestmentDetails['أبها'])}
                      className="absolute top-[75%] right-[62%] flex flex-col items-center group z-20"
                    >
                      <div className="p-2 rounded-full bg-amber-300 text-slate-950 shadow-lg shadow-amber-300/50 group-hover:scale-125 transition-transform">
                        <Mountain className="w-4 h-4" />
                      </div>
                      <span className="bg-slate-900 text-white font-bold text-[10px] px-2 py-0.5 rounded border border-amber-300 mt-1 shadow">
                        أبها (15 فرصة)
                      </span>
                    </button>

                  </div>

                </div>
              </div>

              {/* City Detail Panel */}
              {selectedMapCity && (
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                  <div className="relative h-36 rounded-2xl overflow-hidden">
                    <img src={selectedMapCity.image} alt={selectedMapCity.cityName} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs text-amber-400 font-bold block">مؤشرات الاستثمار</span>
                      <h4 className="text-xl font-black text-white">{selectedMapCity.cityName}</h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300">{selectedMapCity.summary}</p>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">عدد الزوار السنوي:</span>
                      <span className="text-white font-bold">{selectedMapCity.annualVisitors}</span>
                    </div>

                    <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">نسبة إشغال الفنادق:</span>
                      <span className="text-emerald-400 font-bold font-mono">{selectedMapCity.hotelOccupancyRate}</span>
                    </div>

                    <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400">نسبة النمو الاستثماري:</span>
                      <span className="text-amber-400 font-bold font-mono">+{selectedMapCity.growthIndicatorPercent}%</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 block mb-2">أكثر الأنشطة طلباً بالمدينة:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMapCity.topActivities.map((act, i) => (
                        <span key={i} className="bg-slate-950 border border-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded-lg">
                          • {act}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCity(selectedMapCity.cityName);
                      setActiveTab('opportunities');
                    }}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
                  >
                    <span>استعراض فرص مدينة {selectedMapCity.cityName} ({selectedMapCity.opportunitiesCount})</span>
                  </button>
                </div>
              )}

            </div>

          </div>
        )}

        {/* TAB 4: MARKET ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            
            {/* Analytics Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Line Chart Simulation: Tourist Growth */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>نمو عدد السياح والإنفاق بالمملكة (رؤية 2030)</span>
                    </h4>
                    <p className="text-xs text-slate-400">ملايين الزوار بالمليون ومجموع الإنفاق بالمليار ريال</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {demoTouristGrowthData.map(item => (
                    <div key={item.year} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300 font-bold">{item.year}</span>
                        <span className="text-emerald-400 font-bold">{item.visitorsMillions}M زائر ({item.spendBillionSAR}B SAR)</span>
                      </div>
                      <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-emerald-600 to-amber-400 h-full rounded-full transition-all duration-700"
                          style={{ width: `${(item.visitorsMillions / 140) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Chart Simulation: Sector Demand Index */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-amber-400" />
                      <span>مؤشر الطلب السياحي حسب القطاع</span>
                    </h4>
                    <p className="text-xs text-slate-400">تقييم الكثافة والاحتياج الاستثماري الحالي</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {demoSectorDemandData.map(sec => (
                    <div key={sec.sector} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-200 font-bold">{sec.sector}</span>
                        <span className="text-amber-400 font-mono font-bold">مؤشر {sec.demandIndex}/100</span>
                      </div>
                      <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-700"
                          style={{ width: `${sec.demandIndex}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pie Chart Simulation: Investment Shares */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-amber-400" />
                  <span>توزيع الحصة الاستثمارية حسب المناطق</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {demoTopCitiesData.map(c => (
                    <div key={c.city} className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-bold">{c.label}</span>
                      <span className="text-amber-400 font-mono font-bold">{c.sharePercent}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nationalities Distribution */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-emerald-400" />
                  <span>توزيع جنسيات السياح والزوار</span>
                </h4>

                <div className="space-y-2 text-xs">
                  {demoNationalitiesData.map(nat => (
                    <div key={nat.region} className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-bold">{nat.region}</span>
                      <span className="text-emerald-400 font-mono font-bold">{nat.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 5: AI INVESTMENT ADVISOR */}
        {activeTab === 'advisor' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">المستشار الذكي للتوصيات الاستثمارية (AI Advisor)</h3>
                  <p className="text-xs text-slate-400">حدد ميزانيتك والقطاع المفضل للحصول على تحليل فوري مخصص</p>
                </div>
              </div>

              <form onSubmit={handleGenerateAdvisorRecommendation} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    حجم رأس المال / الميزانية الاستثمارية (SAR):
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={5000000}
                      max={60000000}
                      step={1000000}
                      value={advisorBudget}
                      onChange={e => setAdvisorBudget(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                    <span className="text-sm font-black text-amber-400 font-mono shrink-0">
                      {(advisorBudget / 1000000).toFixed(1)} مليون ريال
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">القطاع الفندقي أو الترفيهي المفضل:</label>
                  <select
                    value={advisorSector}
                    onChange={e => setAdvisorSector(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="منتجعات">المنتجعات والفنادق البيئية</option>
                    <option value="مطاعم">المطاعم والكافيهات التراثية</option>
                    <option value="سياحة بحرية">السياحة البحرية واليخوت</option>
                    <option value="سياحة جبلية">السياحة الجبلية والنزل</option>
                    <option value="سياحة رياضية">المغامرات والرياضات الترفيهية</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-black py-3 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>توليد توصية المستشار الذكي الآن</span>
                </button>

              </form>

              {/* Advisor Result Output Box */}
              {advisorRecommendation && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-950 border border-amber-500/40 rounded-2xl p-5 space-y-3"
                >
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                    <span>توصية المستشار التفاعلية (Demo Result)</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line font-sans">
                    {advisorRecommendation}
                  </p>
                </motion.div>
              )}

            </div>

          </div>
        )}

        {/* TAB 6: INVESTMENT REPORTS */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span>مكتبة التقارير ودراسات الجدوى المتاحة للتحميل</span>
              </h3>

              <div className="space-y-4">
                {demoInvestmentReports.map(rep => (
                  <div
                    key={rep.id}
                    className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 hover:border-amber-500/30 transition-all"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-950 border border-amber-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded">
                          {rep.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{rep.date} • {rep.fileSize} ({rep.pagesCount} صفحة)</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{rep.title}</h4>
                      <p className="text-xs text-slate-400">{rep.description}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => handleReportAction(rep.title, 'Share')}
                        className="bg-slate-900 hover:bg-slate-800 text-slate-300 p-2.5 rounded-xl border border-slate-800 text-xs"
                        title="مشاركة"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleReportAction(rep.title, 'Excel')}
                        className="bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-bold px-3 py-2 rounded-xl border border-slate-800"
                      >
                        Excel
                      </button>

                      <button
                        onClick={() => handleReportAction(rep.title, 'PDF')}
                        className="bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-4 py-2 rounded-xl shadow-lg shadow-amber-950/50 flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>تحميل PDF</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 7: SAVED OPPORTUNITIES & COMPARISON */}
        {activeTab === 'saved' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span>الفرص المحفوظة وقائمة المتابعة</span>
                  </h3>
                  <p className="text-xs text-slate-400">يمكنك إدخال ملاحظات خاصة، المقارنة، أو طلب الملفات التفصيلية</p>
                </div>

                {compareIds.length > 0 && (
                  <button
                    onClick={() => setShowCompareModal(true)}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-amber-950/50"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>مقارنة الفرص المختارة ({compareIds.length})</span>
                  </button>
                )}
              </div>

              {savedOpportunityIds.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-xs">لا توجد فرص محفوظة حالياً.</div>
              ) : (
                <div className="space-y-4">
                  {demoInvestmentOpportunities
                    .filter(opp => savedOpportunityIds.includes(opp.id))
                    .map(opp => (
                      <div key={opp.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] text-amber-400 font-bold block">{opp.sector} • {opp.city}</span>
                            <h4 className="text-sm font-bold text-white">{opp.title}</h4>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleSaveOpportunity(opp.id)}
                              className="text-red-400 hover:underline text-xs flex items-center gap-1 font-bold"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>إزالة</span>
                            </button>
                          </div>
                        </div>

                        {/* Investor Note Input */}
                        <div>
                          <label className="block text-[11px] text-slate-400 font-bold mb-1">ملاحظاتك الخاصة للمشروع:</label>
                          <input
                            type="text"
                            value={opportunityNotes[opp.id] || ''}
                            onChange={e =>
                              setOpportunityNotes(prev => ({ ...prev, [opp.id]: e.target.value }))
                            }
                            placeholder="اكتب ملاحظات الاستثمار الخاصة بك هنا..."
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 8: NOTIFICATIONS CENTER */}
        {activeTab === 'notifications' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <span>مركز تنبيهات المستثمر الذكية</span>
              </h3>

              <button
                onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                className="text-xs text-amber-400 hover:underline font-bold"
              >
                تحديد الكل كـ مقروء
              </button>
            </div>

            <div className="space-y-3">
              {notifications.map(notif => (
                <div
                  key={notif.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    notif.read ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-950 border-amber-500/40 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold text-white">{notif.title}</h4>
                    <span className="text-[10px] text-slate-500 font-mono">{notif.time}</span>
                  </div>
                  <p className="text-xs text-slate-300">{notif.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: INVESTOR PROFILE */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 rounded-full bg-amber-400/20 text-amber-400 border-2 border-amber-400 flex items-center justify-center mx-auto text-2xl font-bold">
                {investorProfile.name.charAt(0)}
              </div>
              <h3 className="text-xl font-extrabold text-white">{investorProfile.name}</h3>
              <p className="text-xs text-amber-300 font-bold">{investorProfile.investorType}</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400">اسم الشركة / المؤسسة:</span>
                <span className="text-white font-bold">{investorProfile.company}</span>
              </div>

              <div className="flex justify-between bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400">الدولة:</span>
                <span className="text-white font-bold">{investorProfile.country}</span>
              </div>

              <div className="flex justify-between bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400">النطاق الاستثماري المستهدف:</span>
                <span className="text-amber-400 font-mono font-bold">{investorProfile.budgetRangeSAR}</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 block mb-2">القطاعات المفضلة:</span>
              <div className="flex flex-wrap gap-2">
                {investorProfile.preferredSectors.map((s, i) => (
                  <span key={i} className="bg-amber-950 border border-amber-500/30 text-amber-300 text-xs px-3 py-1 rounded-xl">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* DETAIL MODAL FOR SELECTED OPPORTUNITY */}
      <AnimatePresence>
        {selectedOpportunity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedOpportunity(null)}
                className="absolute top-4 left-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-950 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                    {selectedOpportunity.sector}
                  </span>
                  <span className="text-xs text-slate-400 font-bold">{selectedOpportunity.city}</span>
                </div>
                <h3 className="text-2xl font-black text-white">{selectedOpportunity.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedOpportunity.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">حجم الاستثمار</span>
                  <span className="text-amber-400 font-bold">{(selectedOpportunity.investmentAmountSAR / 1000000).toFixed(1)}M SAR</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">العائد المتوقع ROI</span>
                  <span className="text-emerald-400 font-bold">{selectedOpportunity.expectedRoiPercent}%</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-500 block">فترة الاسترداد</span>
                  <span className="text-white font-bold">{selectedOpportunity.paybackPeriodYears} سنوات</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 mb-2">الحوافز والدعم الحكومي المتاح:</h4>
                <div className="space-y-1 text-xs text-slate-400">
                  {selectedOpportunity.governmentSupportIncentives.map((inc, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    toggleSaveOpportunity(selectedOpportunity.id);
                  }}
                  className="w-1/2 bg-slate-950 hover:bg-slate-800 text-amber-300 font-bold py-3 rounded-2xl text-xs border border-amber-500/30 flex items-center justify-center gap-1.5"
                >
                  <Bookmark className="w-4 h-4" />
                  <span>
                    {savedOpportunityIds.includes(selectedOpportunity.id) ? 'إزالة من المحفوظات' : 'حفظ الفرصة'}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setInfoRequestModalOpp(selectedOpportunity);
                    setSelectedOpportunity(null);
                  }}
                  className="w-1/2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3 rounded-2xl text-xs shadow-xl shadow-amber-950/60"
                >
                  طلب كراسة الاستثمار الكاملة
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REQUEST INFO MODAL */}
      <AnimatePresence>
        {infoRequestModalOpp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl relative"
            >
              <button
                onClick={() => setInfoRequestModalOpp(null)}
                className="absolute top-4 left-4 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <h4 className="text-base font-bold text-white">طلب ملف الاستثمار للمشروع</h4>
              <p className="text-xs text-slate-400">{infoRequestModalOpp.title}</p>

              <form onSubmit={handleSendInfoRequest} className="space-y-3">
                <input
                  type="text"
                  defaultValue={investorProfile.name}
                  placeholder="الاسم الكامل"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200"
                  required
                />
                <input
                  type="email"
                  defaultValue="investor@example.com"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-xs"
                >
                  إرسال الطلب الآن (Demo Send)
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPARISON MODAL */}
      <AnimatePresence>
        {showCompareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setShowCompareModal(false)}
                className="absolute top-4 left-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                <span>مقارنة الفرص الاستثمارية المحددة</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs text-slate-300">
                  <thead className="bg-slate-950 text-amber-300 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">عنصر المقارنة</th>
                      {compareIds.map(id => {
                        const opp = demoInvestmentOpportunities.find(o => o.id === id);
                        return <th key={id} className="p-3 text-white">{opp?.title}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="p-3 font-bold text-slate-400">المدينة والقطاع</td>
                      {compareIds.map(id => {
                        const opp = demoInvestmentOpportunities.find(o => o.id === id);
                        return <td key={id} className="p-3">{opp?.city} ({opp?.sector})</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-400">حجم الاستثمار</td>
                      {compareIds.map(id => {
                        const opp = demoInvestmentOpportunities.find(o => o.id === id);
                        return <td key={id} className="p-3 font-mono font-bold text-amber-400">{(opp!.investmentAmountSAR / 1000000).toFixed(1)}M SAR</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-400">العائد المتوقع ROI</td>
                      {compareIds.map(id => {
                        const opp = demoInvestmentOpportunities.find(o => o.id === id);
                        return <td key={id} className="p-3 font-mono font-bold text-emerald-400">{opp?.expectedRoiPercent}%</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-400">مستوى الطلب</td>
                      {compareIds.map(id => {
                        const opp = demoInvestmentOpportunities.find(o => o.id === id);
                        return <td key={id} className="p-3">{opp?.demandLevel}</td>;
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
