import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  MapPin,
  TrendingUp,
  Users,
  Compass,
  Calendar,
  Sparkles,
  Bot,
  Bell,
  ShieldCheck,
  FileText,
  PieChart,
  BarChart3,
  Download,
  Printer,
  Plus,
  Search,
  Filter,
  Star,
  Globe,
  Leaf,
  DollarSign,
  Briefcase,
  HelpCircle,
  AlertTriangle,
  Eye,
  CheckCircle2,
  XCircle,
  X,
  Edit,
  Trash2,
  Clock,
  Share2,
  Check,
  ChevronRight,
  ShieldAlert,
  Home,
  MessageSquare,
  Layers,
  Activity,
  Award,
  Radio,
  FileSpreadsheet,
  FileCode
} from 'lucide-react';

import {
  initialMinistryKPIs,
  saudiRegionsData,
  demoMinistryEvents,
  demoMinistryFacilities,
  demoMinistryInvestors,
  demoMinistryTickets,
  demoMinistryContent,
  demoMinistryNotifications,
  demoMonthlyTouristFlowData,
  demoNationalityBreakdown,
  demoSustainabilityMetrics,
  SaudiRegionDetail,
  MinistryEventItem,
  MinistryFacilityItem,
  MinistryInvestorRecord,
  MinistrySupportTicket,
  MinistryContentItem,
  MinistryNotification
} from '../data/ministryTourismData';

export const MinistryTourismDashboardViewer: React.FC = () => {
  // Navigation Tabs inside Ministry Dashboard
  const [activeTab, setActiveTab] = useState<
    | 'executive'
    | 'map'
    | 'analytics'
    | 'ai_intelligence'
    | 'events'
    | 'facilities'
    | 'investors'
    | 'support'
    | 'reports'
    | 'sustainability'
    | 'notifications'
    | 'content'
  >('executive');

  // State
  const [kpis] = useState(initialMinistryKPIs);
  const [regions] = useState<SaudiRegionDetail[]>(saudiRegionsData);
  const [events, setEvents] = useState<MinistryEventItem[]>(demoMinistryEvents);
  const [facilities] = useState<MinistryFacilityItem[]>(demoMinistryFacilities);
  const [investors] = useState<MinistryInvestorRecord[]>(demoMinistryInvestors);
  const [tickets, setTickets] = useState<MinistrySupportTicket[]>(demoMinistryTickets);
  const [contentList, setContentList] = useState<MinistryContentItem[]>(demoMinistryContent);
  const [notifications, setNotifications] = useState<MinistryNotification[]>(demoMinistryNotifications);

  // Selected region for modal view in Interactive Map
  const [selectedRegionModal, setSelectedRegionModal] = useState<SaudiRegionDetail | null>(null);

  // Events Management Modal State
  const [showAddEventModal, setShowAddEventModal] = useState<boolean>(false);
  const [newEventForm, setNewEventForm] = useState({
    title: '',
    city: 'الرياض',
    category: 'ترفيه ومهرجانات' as const,
    startDate: '2026-12-01',
    endDate: '2026-12-31',
    expectedVisitors: 100000,
    organizer: 'وزارة السياحة السعودية'
  });

  // Facility filter state
  const [facilitySearch, setFacilitySearch] = useState<string>('');
  const [facilityTypeFilter, setFacilityTypeFilter] = useState<string>('الكل');

  // Selected Facility Profile Modal
  const [selectedFacility, setSelectedFacility] = useState<MinistryFacilityItem | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Handler: Add New Event
  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventForm.title) return;
    const item: MinistryEventItem = {
      id: `mevt-${Date.now()}`,
      title: newEventForm.title,
      city: newEventForm.city,
      category: newEventForm.category,
      startDate: newEventForm.startDate,
      endDate: newEventForm.endDate,
      expectedVisitors: Number(newEventForm.expectedVisitors),
      actualBookings: Math.floor(Number(newEventForm.expectedVisitors) * 0.75),
      occupancyRate: 75,
      satisfactionRating: 4.8,
      status: 'قادمة',
      organizer: newEventForm.organizer
    };
    setEvents(prev => [item, ...prev]);
    setShowAddEventModal(false);
    triggerToast(`تمت إضافة الفعالية الوطنية الجديدة "${newEventForm.title}" بنجاح!`);
  };

  // Handler: Delete Event
  const handleDeleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(ev => ev.id !== eventId));
    triggerToast('تم حذف الفعالية من المنظومة.');
  };

  // Handler: Ticket Resolution
  const handleResolveTicket = (ticketId: string) => {
    setTickets(prev =>
      prev.map(t => (t.id === ticketId ? { ...t, status: 'مغلق ومحلول' } : t))
    );
    triggerToast(`تم إغلاق ومعالجة بلاغ الدعم رقم #${ticketId} بنجاح.`);
  };

  // Filtered Facilities
  const filteredFacilities = facilities.filter(f => {
    const matchesSearch = f.name.includes(facilitySearch) || f.city.includes(facilitySearch);
    const matchesType = facilityTypeFilter === 'الكل' || f.type === facilityTypeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <section id="phase14-ministry-dashboard-section" className="py-12 bg-slate-950 text-slate-100 border-t border-emerald-900/40 relative overflow-hidden dir-rtl" dir="rtl">
      
      {/* Background Gold & Deep Emerald Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Ministry Header Banner */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold mb-3 shadow-xl shadow-emerald-950/80"
          >
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>المرحلة 14 — لوحة تحكم وزارة السياحة ومركز الذكاء السياحي الوطني</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center gap-3">
            <span>مركز القيادة والذكاء السياحي الوطني</span>
            <span className="text-amber-400 text-sm font-bold bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded-full hidden sm:inline-block">
              KINGDOM TOURISM HQ
            </span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-3xl mx-auto text-xs sm:text-sm">
            المركز الوطني لمتابعة أداء القطاع السياحي، إدارة المنشآت والفعاليات، متابعة حركة السياح وتطلعات الاستثمار وذكاء الرؤية الوطنية.
          </p>
        </div>

        {/* Action Success Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-emerald-950 border border-emerald-400/80 text-emerald-200 p-4 rounded-2xl mb-6 shadow-2xl flex items-center justify-between z-50 relative"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{toastMessage}</span>
              </div>
              <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Tabs Header */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900/95 p-2 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <button
            onClick={() => setActiveTab('executive')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'executive'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>اللوحة التنفيذية Executive</span>
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'map'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>الخريطة التفاعلية الوطنية</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>مركز التحليلات Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('ai_intelligence')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'ai_intelligence'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bot className="w-4 h-4 text-amber-300" />
            <span>الذكاء الاصطناعي AI</span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'events'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>الفعاليات الوطنية ({events.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('facilities')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'facilities'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>المنشآت السياحية</span>
          </button>

          <button
            onClick={() => setActiveTab('investors')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'investors'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Briefcase className="w-4 h-4 text-amber-300" />
            <span>مراقبة الاستثمار</span>
          </button>

          <button
            onClick={() => setActiveTab('support')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'support'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>دعم الزوار ({tickets.filter(t => t.status !== 'مغلق ومحلول').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'reports'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>مركز التقارير</span>
          </button>

          <button
            onClick={() => setActiveTab('sustainability')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'sustainability'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>مؤشرات الاستدامة</span>
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>التنبيهات</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'content'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>إدارة المحتوى</span>
          </button>

        </div>

        {/* TAB 1: EXECUTIVE DASHBOARD */}
        {activeTab === 'executive' && (
          <div className="space-y-6">
            
            {/* National Strategic Overview Header */}
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950/70 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-300 font-mono font-bold tracking-wider">
                    MINISTRY OF TOURISM — REAL-TIME COMMAND CENTER
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  المؤشرات الوطنية الاستراتيجية للقطاع السياحي
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  رصد كامل لحركة السياح، نسب إشغال الفنادق، إنفاق الزوار ومستهدفات رؤية المملكة 2030.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => triggerToast('تم تصدير الموجز التنفيذي للوزارة بصيغة PDF')}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-950/60"
                >
                  <Download className="w-4 h-4" />
                  <span>تصدير الموجز التنفيذي</span>
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4 text-amber-400" />
                  <span>عرض جميع التحليلات</span>
                </button>
              </div>
            </div>

            {/* 12 Executive KPI Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-emerald-400 font-bold block">إجمالي عدد السياح (السنوي)</span>
                <div className="text-2xl font-black text-white font-mono">{kpis.totalTourists.toLocaleString()}</div>
                <span className="text-[10px] text-emerald-400 font-bold">▲ +14.2% مقارنة بالعام الماضي</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">عدد السياح الحاليين بالمملكة</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{kpis.currentActiveTourists.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">متواجدون حالياً بجميع الوجهات</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-bold block">المواطنون المستخدمون للمنصة</span>
                <div className="text-2xl font-black text-white font-mono">{kpis.citizenUsersCount.toLocaleString()}</div>
                <span className="text-[10px] text-emerald-400 font-bold">سياحة محلية نشطة</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">عدد المستثمرين المسجلين</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{kpis.investorsCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">مستثمر وطني ودولي</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-bold block">المنشآت السياحية المرخصة</span>
                <div className="text-2xl font-black text-white font-mono">{kpis.tourismFacilitiesCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">فنادق، منتجعات ومطاعم</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-bold block">المرشدون السياحيون المعتمدون</span>
                <div className="text-2xl font-black text-white font-mono">{kpis.tourGuidesCount.toLocaleString()}</div>
                <span className="text-[10px] text-emerald-400 font-bold">مرخص ساري</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-emerald-400 font-bold block">إجمالي الحجوزات المؤكدة</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">{kpis.totalBookingsCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">حجز رحلات وفنادق وتجارب</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">نسبة إشغال الفنادق</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{kpis.hotelOccupancyRate}%</div>
                <span className="text-[10px] text-emerald-400 font-bold">أداء استثنائي بالقمم والعلا</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-bold block">متوسط مدة الإقامة</span>
                <div className="text-2xl font-black text-white font-mono">{kpis.avgStayDays} أسبوع/أيام</div>
                <span className="text-[10px] text-slate-400">ليالٍ فندقية للزائر</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-emerald-400 font-bold block">متوسط الإنفاق اليومي</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">{kpis.avgDailySpendSAR} SAR</div>
                <span className="text-[10px] text-slate-400">لكل سائح يومياً</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">مؤشر رضا الزوار العام</span>
                <div className="text-2xl font-black text-amber-300 font-mono flex items-center gap-1">
                  <Star className="w-5 h-5 fill-amber-300 text-amber-300" />
                  <span>{kpis.visitorSatisfactionIndex}%</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">استبيان الرؤية المعتمد</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-bold block">أكثر المدن زيارة</span>
                <div className="text-xs font-bold text-white leading-relaxed truncate">
                  {kpis.topCitiesList.slice(0, 3).join(' • ')}
                </div>
                <span className="text-[10px] text-amber-400 font-bold">العلا، الرياض وجدة بالأوائل</span>
              </div>

            </div>

            {/* Quick Regional Performance Summary Table */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  <span>أداء المناطق السياحية الرئيسية في المملكة</span>
                </h4>
                <button onClick={() => setActiveTab('map')} className="text-xs text-emerald-400 font-bold hover:underline">
                  فتح الخريطة الوطنية التفاعلية
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">اسم المنطقة والوجهات</th>
                      <th className="p-3">عدد السياح</th>
                      <th className="p-3">إشغال الفنادق</th>
                      <th className="p-3">الفعاليات</th>
                      <th className="p-3">متوسط الإنفاق</th>
                      <th className="p-3">معدل النمو</th>
                      <th className="p-3 text-center">التفاصيل</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {regions.map(reg => (
                      <tr key={reg.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 font-bold text-white">
                          <div>{reg.nameAr}</div>
                          <div className="text-[10px] text-slate-400 font-mono font-normal">{reg.nameEn}</div>
                        </td>
                        <td className="p-3 font-mono font-bold text-emerald-400">{reg.touristsCount.toLocaleString()}</td>
                        <td className="p-3 font-mono text-amber-300 font-bold">{reg.hotelOccupancy}%</td>
                        <td className="p-3 font-mono text-slate-200">{reg.eventsCount} فعالية</td>
                        <td className="p-3 font-mono text-emerald-400">{reg.avgSpendSAR} SAR</td>
                        <td className="p-3 font-mono text-emerald-400 font-bold">{reg.growthRate}</td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => setSelectedRegionModal(reg)}
                            className="bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold px-3 py-1 rounded-xl text-[11px] border border-slate-700"
                          >
                            عرض النافذة
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: NATIONAL INTERACTIVE MAP */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span>الخريطة التفاعلية الوطنية للمملكة العربية السعودية (National Interactive Tourism Map)</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    اضغط على أي منطقة لعرض التوزيع التفصيلي للسياح، إشغال الفنادق، أكثر الجنسيات زيارة والإنفاق.
                  </p>
                </div>
              </div>

              {/* Map Layout Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Visual Interactive Map Representation (2 Cols) */}
                <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[420px] relative flex flex-col justify-between overflow-hidden shadow-2xl">
                  
                  {/* Decorative Map Grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

                  <div className="flex items-center justify-between text-xs font-bold text-emerald-400 z-10">
                    <span className="flex items-center gap-1">
                      <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                      بث بيانات الخريطة السياحية الوطنية مباشرة
                    </span>
                    <span className="text-slate-400">انقر فوق أي مركز إقليمي لمشاهدة المؤشرات</span>
                  </div>

                  {/* Interactive Region Pins Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 z-10">
                    {regions.map(reg => (
                      <motion.div
                        key={reg.id}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setSelectedRegionModal(reg)}
                        className="bg-slate-900/90 border border-emerald-500/30 hover:border-amber-400 rounded-2xl p-4 cursor-pointer shadow-xl transition-all space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{reg.nameAr}</span>
                          <span className="bg-amber-950 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                            {reg.hotelOccupancy}% إشغال
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{reg.description}</p>
                        <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 pt-1 border-t border-slate-800">
                          <span>{reg.touristsCount.toLocaleString()} سائح</span>
                          <span className="text-amber-300 font-bold">{reg.avgSpendSAR} SAR</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between z-10">
                    <span>توزيع التغطية الجغرافية: <strong className="text-emerald-400">13 منطقة إدارية</strong></span>
                    <span className="text-amber-300 font-mono">آخر تحديث: اليوم 11:20 AM</span>
                  </div>

                </div>

                {/* Regional Details Quick Sidebar (1 Col) */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>ملخص المنطقة المختارة</span>
                  </h4>

                  {selectedRegionModal ? (
                    <div className="space-y-4 text-xs">
                      <div className="bg-slate-900 p-4 rounded-2xl border border-amber-500/30 space-y-2">
                        <h5 className="text-base font-extrabold text-amber-300">{selectedRegionModal.nameAr}</h5>
                        <p className="text-slate-300 leading-relaxed">{selectedRegionModal.description}</p>
                      </div>

                      <div className="space-y-2 font-mono">
                        <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400">عدد السياح:</span>
                          <span className="text-emerald-400 font-bold">{selectedRegionModal.touristsCount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400">نسبة إشغال الفنادق:</span>
                          <span className="text-amber-300 font-bold">{selectedRegionModal.hotelOccupancy}%</span>
                        </div>
                        <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400">عدد الفعاليات:</span>
                          <span className="text-white font-bold">{selectedRegionModal.eventsCount} فعالية</span>
                        </div>
                        <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400">متوسط الإنفاق:</span>
                          <span className="text-emerald-400 font-bold">{selectedRegionModal.avgSpendSAR} SAR</span>
                        </div>
                        <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400">متوسط مدة الإقامة:</span>
                          <span className="text-white font-bold">{selectedRegionModal.avgStayDays} أيام</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-400 font-bold block">أكثر الجنسيات زيارة:</span>
                        <div className="flex flex-wrap gap-1">
                          {selectedRegionModal.topNationalities.map((nat, i) => (
                            <span key={i} className="bg-slate-900 text-amber-300 px-2 py-1 rounded-lg border border-slate-800 text-[10px]">
                              {nat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-slate-500 text-xs">
                      انقر فوق أي من بطاقات المناطق في الخريطة لعرض مؤشراتها المباشرة هنا.
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TOURISM ANALYTICS CENTER */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <span>مركز تحليلات السياحة الوطنية المتقدم (Tourism Analytics Center)</span>
                </h3>
                <p className="text-xs text-slate-400">رسوم بيانية تفاعلية لحجم السياحة، توزيع الجنسيات، الفئات العمرية وأداء القطاعات</p>
              </div>

              {/* Analytics Split Grids */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Visual Chart 1: Monthly Tourist Flow & Spend (Bar & Line Visual) */}
                <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>تدفق السياح والإنفاق الشهري (ملايين)</span>
                    </h4>
                    <span className="text-[10px] text-emerald-400 font-mono">2026 - Q1 to Q3</span>
                  </div>

                  <div className="space-y-3 pt-2">
                    {demoMonthlyTouristFlowData.map((item, idx) => (
                      <div key={idx} className="space-y-1 text-xs">
                        <div className="flex justify-between text-slate-300">
                          <span className="font-bold">{item.month}</span>
                          <span className="font-mono text-emerald-400">{item.touristsMillions}M سائح • {item.spendBillionSAR}B SAR</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden p-0.5 border border-slate-800">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${(item.touristsMillions / 3.5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Chart 2: Nationality Breakdown (Pie Chart Visual) */}
                <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <PieChart className="w-4 h-4 text-amber-400" />
                      <span>توزيع السياح حسب الجنسية والأسواق العالمية</span>
                    </h4>
                    <span className="text-[10px] text-amber-300 font-mono">Global Markets</span>
                  </div>

                  <div className="space-y-3 pt-2">
                    {demoNationalityBreakdown.map((nat, i) => (
                      <div key={i} className="space-y-1 text-xs">
                        <div className="flex justify-between text-slate-300">
                          <span className="font-bold">{nat.country}</span>
                          <span className="font-mono text-amber-300">{nat.percentage}% ({nat.count})</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden p-0.5 border border-slate-800">
                          <div
                            className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${nat.percentage * 2.5}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sector Performance Rating Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs pt-4 border-t border-slate-800">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-bold block">أداء الفنادق والمنتجعات</span>
                  <div className="text-lg font-black text-amber-300 font-mono">4.8 / 5.0 ★</div>
                  <p className="text-[10px] text-emerald-400">92% رضا على الخدمات الفاخرة</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-bold block">أداء المطاعم والمقاهي</span>
                  <div className="text-lg font-black text-white font-mono">4.7 / 5.0 ★</div>
                  <p className="text-[10px] text-emerald-400">إقبال على المطبخ السعودي التراثي</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-bold block">أداء المهرجانات والفعاليات</span>
                  <div className="text-lg font-black text-amber-300 font-mono">4.9 / 5.0 ★</div>
                  <p className="text-[10px] text-emerald-400">حجوزات قياسية بموسم الرياض والعلا</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-bold block">أداء الأنشطة والإرشاد</span>
                  <div className="text-lg font-black text-white font-mono">4.9 / 5.0 ★</div>
                  <p className="text-[10px] text-emerald-400">تميز المرشدين السياحيين السعوديين</p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 4: AI TOURISM INTELLIGENCE */}
        {activeTab === 'ai_intelligence' && (
          <div className="space-y-6">
            
            <div className="bg-gradient-to-br from-slate-900 via-emerald-950/80 to-slate-900 border border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-emerald-900/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-300">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">مركز التوصيات والذكاء الاصطناعي السياحي (AI Intelligence)</h3>
                    <p className="text-xs text-slate-300">توقعات الازدحام، توصيات توجيه الفعاليات والحملات التسويقية المستهدفة</p>
                  </div>
                </div>

                <button
                  onClick={() => triggerToast('تم إعادة تشغيل نموذج التنبؤ الذكي AI والبيانات محدثة')}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-amber-950/50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>تحديث التحليل الذكي</span>
                </button>
              </div>

              {/* MANDATORY DEMO NOTICE REQUIREMENT FOR AI TAB */}
              <div className="bg-amber-950/90 border border-amber-500/60 text-amber-200 p-4 rounded-2xl text-xs flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-bold">
                  تنبيه هام: جميع التوصيات والتوقعات المعروضة أدناه مبنية على بيانات تجريبية داخل النموذج الأولي.
                </span>
              </div>

              {/* AI Recommendation Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>توقع زيادة أعداد الزوار (+28%)</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">زيادة الوفود الأوروبية لوجهة العلا ونيوم</h5>
                  <p className="text-slate-300 leading-relaxed">
                    يتوقع المحرك الذكي استقبال 220 ألف زائر إضافي في الفترة من أكتوبر إلى ديسمبر مع انطلاق المواسم الشتوية.
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Users className="w-4 h-4" />
                    <span>توقع الازدحام والمرور</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">ارتفاع كثافة الزوار في الدرعية التاريخية</h5>
                  <p className="text-slate-300 leading-relaxed">
                    يُنصح بفتح مسارات حافلات سريعة إضافية من مواقف الدرعية لمنع الاكتظاظ في عطلات نهاية الأسبوع.
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>اقتراح توزيع الفعاليات</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">نقل فعاليات المغامرات الجبلية للباحة</h5>
                  <p className="text-slate-300 leading-relaxed">
                    لتخفيف الضغط التشغيلي عن أبها والسودة، اقتراح إطلاق فعاليات تسلق جبال وطيران شراعي في منطقة الباحة.
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Compass className="w-4 h-4" />
                    <span>تطوير وجهات سياحية جديدة</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">تطوير وجهة رجال ألمع للتراث العالمي</h5>
                  <p className="text-slate-300 leading-relaxed">
                    تشير بيانات البحث العالمية إلى رغبة مرتفعة في زيارة القرى التراثية الجبلية وتجارب المطبخ المحلي.
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Globe className="w-4 h-4" />
                    <span>حملات تسويقية استباقية</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">حملات موجهة لشرق آسيا (اليابان والصين)</h5>
                  <p className="text-slate-300 leading-relaxed">
                    تستهدف الحملة التعريف بآثار الحِجر والواحات الفلكية في العلا باللغتين اليابانية والصينية.
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Building2 className="w-4 h-4" />
                    <span>دعم المدن الواعدة</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">دعم الطاقة الاستيعابية الفندقية بتبوك</h5>
                  <p className="text-slate-300 leading-relaxed">
                    الحاجة إلى تسريع تراخيص 800 غرفة فندقية إضافية بمدينة تبوك لمواكبة زوار مشروع سندالة ونيوم.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 5: EVENTS MANAGEMENT */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span>إدارة ومتابعة الفعاليات الوطنية (Events Management)</span>
                </h3>
                <p className="text-xs text-slate-400">إضافة وتحديث الفعاليات، متابعة الحجوزات ونسب الإشغال وتقييمات الزوار</p>
              </div>

              <button
                onClick={() => setShowAddEventModal(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-950/60"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة فعالية جديدة</span>
              </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map(ev => (
                <div key={ev.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 flex flex-col justify-between">
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {ev.category}
                      </span>
                      <span className="font-mono text-amber-300 font-bold">{ev.city}</span>
                    </div>

                    <h4 className="text-base font-bold text-white">{ev.title}</h4>
                    <p className="text-slate-400">جهة التنفيذ: <strong className="text-slate-200">{ev.organizer}</strong></p>

                    <div className="grid grid-cols-2 gap-2 bg-slate-950 p-3 rounded-2xl border border-slate-800 text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[10px]">الحجوزات المؤكدة:</span>
                        <span className="font-mono font-bold text-emerald-400">{ev.actualBookings.toLocaleString()} / {ev.expectedVisitors.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">نسبة الإشغال:</span>
                        <span className="font-mono font-bold text-amber-300">{ev.occupancyRate}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>تاريخ الانطلاق: <strong className="text-white font-mono">{ev.startDate}</strong></span>
                      <span className="text-amber-300 font-bold">التقييم: {ev.satisfactionRating} ★</span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center justify-between pt-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      ev.status === 'نشطة حالياً' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {ev.status}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => triggerToast(`جاري تعديل الفعالية: ${ev.title}`)}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1"
                      >
                        <Edit className="w-3.5 h-3.5 text-amber-400" />
                        تعديل
                      </button>

                      <button
                        onClick={() => handleDeleteEvent(ev.id)}
                        className="bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-800 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 6: TOURISM FACILITIES MANAGEMENT */}
        {activeTab === 'facilities' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={facilitySearch}
                    onChange={e => setFacilitySearch(e.target.value)}
                    placeholder="بحث باسم المنشأة الفندقية، المدينة أو النوع..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-10 pl-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto text-xs">
                  {['الكل', 'فندق', 'منتجع', 'مطعم', 'شركة أنشطة'].map(t => (
                    <button
                      key={t}
                      onClick={() => setFacilityTypeFilter(t)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                        facilityTypeFilter === t
                          ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Facilities Table */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-4">اسم المنشأة</th>
                      <th className="p-4">النوع والمدينة</th>
                      <th className="p-4">الطاقة الاستيعابية</th>
                      <th className="p-4">نسبة الإشغال</th>
                      <th className="p-4">التقييم</th>
                      <th className="p-4">حالة الترخيص</th>
                      <th className="p-4 text-center">الملف والاعتماد</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredFacilities.map(fac => (
                      <tr key={fac.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-4 font-bold text-white">{fac.name}</td>
                        <td className="p-4 text-slate-300">
                          <div>{fac.type}</div>
                          <div className="text-[10px] text-amber-300 font-bold">{fac.city}</div>
                        </td>
                        <td className="p-4 font-mono text-slate-200">{fac.capacity} شخص/غرفة</td>
                        <td className="p-4 font-mono text-emerald-400 font-bold">{fac.occupancyRate}%</td>
                        <td className="p-4 font-mono text-amber-300 font-bold">{fac.rating} ★</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            fac.status === 'مرخص معتمد' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                          }`}>
                            {fac.status}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => setSelectedFacility(fac)}
                            className="bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold px-3 py-1 rounded-xl text-[11px] border border-slate-700"
                          >
                            عرض الملف
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 7: INVESTORS MONITORING */}
        {activeTab === 'investors' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-amber-400" />
                    <span>مراقبة الفرص والمستثمرين السياحيين (Investors Monitoring)</span>
                  </h3>
                  <p className="text-xs text-slate-400">متابعة رؤوس الأموال المستثمرة، المجموعات الفندقية العالمية والمستهدفات الجغرافية</p>
                </div>

                <div className="text-left font-mono">
                  <span className="text-[10px] text-slate-400 block">إجمالي استثمارات القطاع:</span>
                  <span className="text-lg font-black text-emerald-400">2.450.000.000 SAR</span>
                </div>
              </div>

              {/* Investor Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {investors.map(inv => (
                  <div key={inv.id} className="bg-slate-950 p-5 rounded-3xl border border-slate-800 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-emerald-400 font-bold">{inv.country}</span>
                      <span className="bg-amber-950 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {inv.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">{inv.investorName}</h4>
                    <p className="text-slate-400">الشركة: <strong className="text-slate-200">{inv.companyName}</strong></p>

                    <div className="space-y-1 bg-slate-900 p-3 rounded-2xl border border-slate-800">
                      <div className="flex justify-between">
                        <span className="text-slate-500">رأس المال المستثمر:</span>
                        <span className="font-mono font-bold text-emerald-400">{inv.capitalSAR.toLocaleString()} SAR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">المدينة المستهدفة:</span>
                        <span className="font-bold text-amber-300">{inv.promisingCity}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-300">
                      القطاع: <strong className="text-white">{inv.targetSector}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 8: VISITOR SUPPORT CENTER */}
        {activeTab === 'support' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-400" />
                  <span>مركز دعم ومتابعة الشكاوى والبلاغات (Visitor Support Center)</span>
                </h3>
                <p className="text-xs text-slate-400">متابعة الاستفسارات، الشكاوى التشغيلية، الاقتراحات وحالات الدعم الفوري للسياح</p>
              </div>

              <div className="space-y-3">
                {tickets.map(tck => (
                  <div key={tck.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-amber-300 font-bold">{tck.id}</span>
                        <span className="bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded">
                          {tck.ticketType}
                        </span>
                        <span className="text-slate-400">• المدينة: {tck.city}</span>
                      </div>
                      <h5 className="font-bold text-white">{tck.visitorName} ({tck.visitorNationality})</h5>
                      <p className="text-slate-300 leading-relaxed">{tck.description}</p>
                    </div>

                    <div className="text-left shrink-0 space-y-2">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full block ${
                        tck.status === 'مغلق ومحلول' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                      }`}>
                        {tck.status}
                      </span>

                      {tck.status !== 'مغلق ومحلول' && (
                        <button
                          onClick={() => handleResolveTicket(tck.id)}
                          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-3 py-1.5 rounded-xl text-[11px]"
                        >
                          إغلاق الشكوى
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 9: REPORTS CENTER */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <span>مركز التقارير الوطنية الرسمية (Reports Center)</span>
                </h3>
                <p className="text-xs text-slate-400">تصدير التقارير الشاملة للسياح، المدن، الفعاليات، الاستثمار ومؤشرات الرضا</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs">
                {[
                  { name: 'تقرير حركة السياح والوافدين', desc: 'إحصائيات تفصيلية للزوار وتوزيع التأشيرات' },
                  { name: 'تقرير أداء المدن والوجهات', desc: 'مؤشرات الإشغال، مدة الإقامة والإنفاق' },
                  { name: 'تقرير الفعاليات والمواسم', desc: 'نسب الإقبال، التقييمات والحجوزات' },
                  { name: 'تقرير تراخيص المنشآت السياحية', desc: 'الفنادق، المنتجعات والشركات السياحية' },
                  { name: 'تقرير الفرص والاستثمار', desc: 'رؤوس الأموال والمستثمرين المسجلين' },
                  { name: 'تقرير رضا الزوار وجودة التجربة', desc: 'استبيانات السعادة الوطنية والتوصيات' }
                ].map((rep, i) => (
                  <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <h5 className="font-bold text-white text-sm">{rep.name}</h5>
                    <p className="text-slate-400">{rep.desc}</p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                      <button
                        onClick={() => triggerToast(`جاري تصدير ${rep.name} بصيغة PDF (Demo)...`)}
                        className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1"
                      >
                        <FileCode className="w-3 h-3" /> Export PDF (Demo)
                      </button>

                      <button
                        onClick={() => triggerToast(`جاري تصدير ${rep.name} بصيغة Excel (Demo)...`)}
                        className="bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1"
                      >
                        <FileSpreadsheet className="w-3 h-3" /> Export Excel (Demo)
                      </button>

                      <button
                        onClick={() => triggerToast(`جاري إرسال التقرير للمطبعة الرسمية...`)}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1"
                      >
                        <Printer className="w-3 h-3" /> Print Report
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 10: SUSTAINABILITY DASHBOARD */}
        {activeTab === 'sustainability' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                  <span>لوحة مؤشرات الاستدامة السياحية (Sustainability Dashboard)</span>
                </h3>
                <p className="text-xs text-slate-400">توزيع الحركة السياحية، الحفاظ على البيئة، استخدام النقل العام والمبادرات الخضراء</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2 text-center">
                  <span className="text-slate-400 font-bold block">نسبة المنشآت الصديقة للبيئة</span>
                  <div className="text-3xl font-black text-emerald-400 font-mono">{demoSustainabilityMetrics.ecoFriendlyFacilitiesPercent}%</div>
                  <p className="text-[10px] text-slate-400">معتمدة بشهادة الاستدامة الخضراء</p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2 text-center">
                  <span className="text-slate-400 font-bold block">معدل استخدام النقل المستدام</span>
                  <div className="text-3xl font-black text-amber-300 font-mono">{demoSustainabilityMetrics.publicTransitUsageRate}%</div>
                  <p className="text-[10px] text-slate-400">حافلات كهربائية وقطارات سريعة</p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2 text-center">
                  <span className="text-slate-400 font-bold block">مساحة المحميات الطبيعية المحمية</span>
                  <div className="text-2xl font-black text-white font-mono">{demoSustainabilityMetrics.protectedDestinationsArea}</div>
                  <p className="text-[10px] text-emerald-400">حماية التنوع الفطري والبيئي</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 11: NOTIFICATIONS CENTER */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <span>مركز التنبيهات الوطنية والإشعارات (Notifications Center)</span>
              </h3>

              <div className="space-y-3">
                {notifications.map(notif => (
                  <div key={notif.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{notif.title}</span>
                      <span className="text-slate-500 font-mono text-[10px]">{notif.time}</span>
                    </div>
                    <p className="text-slate-300">{notif.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 12: CONTENT MANAGEMENT */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                <span>إدارة المحتوى والحملات الإعلامية (Content Management)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {contentList.map(item => (
                  <div key={item.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded font-bold">
                      {item.type}
                    </span>
                    <h5 className="font-bold text-white text-sm">{item.title}</h5>
                    <div className="flex justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                      <span>مشاهدات: <strong className="text-amber-300 font-mono">{item.viewsCount.toLocaleString()}</strong></span>
                      <span className="text-emerald-400 font-bold">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* REGION MODAL POPUP */}
        <AnimatePresence>
          {selectedRegionModal && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 max-w-xl w-full space-y-4 shadow-2xl dir-rtl text-xs" dir="rtl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <h4 className="text-lg font-black text-white">{selectedRegionModal.nameAr}</h4>
                  </div>
                  <button onClick={() => setSelectedRegionModal(null)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-slate-300 leading-relaxed">{selectedRegionModal.description}</p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">عدد السياح:</span>
                    <span className="font-bold text-emerald-400 text-sm">{selectedRegionModal.touristsCount.toLocaleString()}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">إشغال الفنادق:</span>
                    <span className="font-bold text-amber-300 text-sm">{selectedRegionModal.hotelOccupancy}%</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">متوسط الإنفاق:</span>
                    <span className="font-bold text-emerald-400 text-sm">{selectedRegionModal.avgSpendSAR} SAR</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">معدل النمو:</span>
                    <span className="font-bold text-amber-300 text-sm">{selectedRegionModal.growthRate}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block">الجنسيات الأكثر زيارة:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedRegionModal.topNationalities.map((nat, idx) => (
                      <span key={idx} className="bg-slate-950 text-amber-300 border border-slate-800 px-2.5 py-1 rounded-xl text-[11px] font-bold">
                        {nat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-left">
                  <button
                    onClick={() => setSelectedRegionModal(null)}
                    className="bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs"
                  >
                    إغلاق النافذة
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ADD EVENT MODAL */}
        <AnimatePresence>
          {showAddEventModal && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl dir-rtl text-xs" dir="rtl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-black text-white flex items-center gap-2">
                    <Plus className="w-5 h-5 text-emerald-400" />
                    إضافة فعالية سياحية وطنية جديدة
                  </h4>
                  <button onClick={() => setShowAddEventModal(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateEvent} className="space-y-3">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">عنوان الفعالية:</label>
                    <input
                      type="text"
                      required
                      value={newEventForm.title}
                      onChange={e => setNewEventForm({ ...newEventForm, title: e.target.value })}
                      placeholder="مثال: موسم شتاء العلا التراثي"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">المدينة:</label>
                      <input
                        type="text"
                        value={newEventForm.city}
                        onChange={e => setNewEventForm({ ...newEventForm, city: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">التصنيف:</label>
                      <select
                        value={newEventForm.category}
                        onChange={e => setNewEventForm({ ...newEventForm, category: e.target.value as any })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      >
                        <option value="ترفيه ومهرجانات">ترفيه ومهرجانات</option>
                        <option value="تراث ورؤية">تراث ورؤية</option>
                        <option value="مؤتمرات ومعارض">مؤتمرات ومعارض</option>
                        <option value="رياضة ومغامرة">رياضة ومغامرة</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">تاريخ البدء:</label>
                      <input
                        type="date"
                        value={newEventForm.startDate}
                        onChange={e => setNewEventForm({ ...newEventForm, startDate: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">الزوار المتوقعون:</label>
                      <input
                        type="number"
                        value={newEventForm.expectedVisitors}
                        onChange={e => setNewEventForm({ ...newEventForm, expectedVisitors: Number(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setShowAddEventModal(false)}
                      className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-500 text-slate-950 font-black px-5 py-2 rounded-xl"
                    >
                      إضافة الفعالية
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* FACILITY PROFILE MODAL */}
        <AnimatePresence>
          {selectedFacility && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl dir-rtl text-xs" dir="rtl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-black text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    {selectedFacility.name}
                  </h4>
                  <button onClick={() => setSelectedFacility(null)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">النوع والمدينة:</span>
                    <span className="text-amber-300 font-bold">{selectedFacility.type} • {selectedFacility.city}</span>
                  </div>
                  <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">الطاقة الاستيعابية:</span>
                    <span className="text-white font-bold">{selectedFacility.capacity} غرف/أشخاص</span>
                  </div>
                  <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">نسبة الإشغال الحالية:</span>
                    <span className="text-emerald-400 font-bold">{selectedFacility.occupancyRate}%</span>
                  </div>
                  <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">مسؤول التواصل:</span>
                    <span className="text-white font-bold">{selectedFacility.contactPerson}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-left">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs"
                  >
                    إغلاق
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* MANDATORY DISCLAIMER NOTICE REQUIREMENT AT BOTTOM */}
        <div className="mt-12 bg-amber-950/80 border border-amber-500/60 rounded-2xl p-4 text-center text-xs text-amber-200 shadow-2xl flex items-center justify-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="font-bold">
            "جميع البيانات والإحصائيات والتحليلات المعروضة في هذا النموذج الأولي هي بيانات تجريبية لأغراض العرض والتقييم فقط، وليست بيانات تشغيلية أو حكومية حقيقية."
          </span>
        </div>

      </div>
    </section>
  );
};
