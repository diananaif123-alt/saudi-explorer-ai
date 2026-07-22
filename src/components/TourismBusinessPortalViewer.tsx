import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Calendar,
  Layers,
  Percent,
  Star,
  DollarSign,
  Users,
  Bell,
  ShieldCheck,
  UserPlus,
  Settings,
  Bot,
  PieChart,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  MapPin,
  Phone,
  Mail,
  Globe,
  Share2,
  Image,
  Upload,
  Check,
  X,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  TrendingUp,
  FileText,
  Lock,
  UserCheck,
  Tag,
  Key,
  ShieldAlert,
  MessageSquare,
  BedDouble,
  Sliders,
  CalendarDays,
  Send,
  SlidersHorizontal,
  Home
} from 'lucide-react';

import {
  initialFacilityInfo,
  demoFacilityBookings,
  demoFacilityServices,
  demoFacilityRooms,
  demoFacilityPromotions,
  demoFacilityReviews,
  demoFacilityStaff,
  demoFacilityDocuments,
  demoBusinessNotifications,
  demoMonthlyRevenueData,
  BusinessFacilityInfo,
  FacilityBooking,
  FacilityService,
  FacilityRoom,
  FacilityPromotion,
  FacilityReview,
  FacilityStaff,
  FacilityDocument,
  BusinessNotification
} from '../data/businessPortalData';

export const TourismBusinessPortalViewer: React.FC = () => {
  // Navigation Sub-Tabs
  const [activeTab, setActiveTab] = useState<
    | 'dashboard'
    | 'profile'
    | 'bookings'
    | 'services'
    | 'rooms'
    | 'promotions'
    | 'reviews'
    | 'analytics'
    | 'ai'
    | 'notifications'
    | 'documents'
    | 'staff'
    | 'settings'
  >('dashboard');

  // State
  const [facilityInfo, setFacilityInfo] = useState<BusinessFacilityInfo>(initialFacilityInfo);
  const [bookings, setBookings] = useState<FacilityBooking[]>(demoFacilityBookings);
  const [services, setServices] = useState<FacilityService[]>(demoFacilityServices);
  const [rooms, setRooms] = useState<FacilityRoom[]>(demoFacilityRooms);
  const [promotions, setPromotions] = useState<FacilityPromotion[]>(demoFacilityPromotions);
  const [reviews, setReviews] = useState<FacilityReview[]>(demoFacilityReviews);
  const [staffList, setStaffList] = useState<FacilityStaff[]>(demoFacilityStaff);
  const [documents, setDocuments] = useState<FacilityDocument[]>(demoFacilityDocuments);
  const [notifications, setNotifications] = useState<BusinessNotification[]>(demoBusinessNotifications);

  // Filter & Search states
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>('الكل');
  const [bookingSearchQuery, setBookingSearchQuery] = useState<string>('');
  const [bookingViewMode, setBookingViewMode] = useState<'list' | 'calendar'>('list');
  const [calendarScope, setCalendarScope] = useState<'daily' | 'weekly' | 'monthly'>('monthly');

  // Modals & Active Edit Objects
  const [selectedBookingDetails, setSelectedBookingDetails] = useState<FacilityBooking | null>(null);
  const [showAddServiceModal, setShowAddServiceModal] = useState<boolean>(false);
  const [showAddPromotionModal, setShowAddPromotionModal] = useState<boolean>(false);
  const [showAddStaffModal, setShowAddStaffModal] = useState<boolean>(false);
  const [replyReviewId, setReplyReviewId] = useState<string | null>(null);
  const [reviewReplyText, setReviewReplyText] = useState<string>('');

  // Toast / Alert Notification Message
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  // New Service Form state
  const [newServiceForm, setNewServiceForm] = useState({
    title: '',
    category: 'إقامة فاخرة',
    priceSAR: 1500,
    capacity: 2,
    availabilityTimes: 'يومياً 10:00 - 22:00',
    description: '',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600'
  });

  // New Staff Form state
  const [newStaffForm, setNewStaffForm] = useState({
    name: '',
    role: 'موظف استقبال' as const,
    email: '',
    phone: ''
  });

  // New Promotion Form state
  const [newPromoForm, setNewPromoForm] = useState({
    title: '',
    discountPercentage: 15,
    couponCode: 'OFFER15',
    startDate: '2026-08-01',
    endDate: '2026-08-31',
    description: ''
  });

  // Helper trigger Toast
  const triggerToast = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(null), 4000);
  };

  // Booking Status Change Handler
  const handleUpdateBookingStatus = (bookingId: string, newStatus: 'مؤكد' | 'ملغى' | 'مكتمل') => {
    setBookings(prev =>
      prev.map(b => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );
    if (selectedBookingDetails && selectedBookingDetails.id === bookingId) {
      setSelectedBookingDetails(prev => (prev ? { ...prev, status: newStatus } : null));
    }
    triggerToast(`تم تعديل حالة الحجز #${bookingId} إلى "${newStatus}" بنجاح!`);
  };

  // Add Service Handler
  const handleCreateService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceForm.title) return;
    const newSrv: FacilityService = {
      id: `srv-${Date.now()}`,
      title: newServiceForm.title,
      category: newServiceForm.category,
      priceSAR: Number(newServiceForm.priceSAR),
      capacity: Number(newServiceForm.capacity),
      availabilityTimes: newServiceForm.availabilityTimes,
      description: newServiceForm.description || 'خدمة متميزة جيدة للمزود.',
      image: newServiceForm.image,
      status: 'نشط'
    };
    setServices(prev => [newSrv, ...prev]);
    setShowAddServiceModal(false);
    triggerToast(`تمت إضافة الخدمة الجديدة "${newServiceForm.title}" بنجاح!`);
  };

  // Add Staff Handler
  const handleCreateStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStaffForm.name) return;
    const newStf: FacilityStaff = {
      id: `stf-${Date.now()}`,
      name: newStaffForm.name,
      role: newStaffForm.role,
      email: newStaffForm.email || `${newStaffForm.name.split(' ')[0]}@habitas.sa`,
      phone: newStaffForm.phone || '+966 50 000 0000',
      status: 'نشط',
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setStaffList(prev => [...prev, newStf]);
    setShowAddStaffModal(false);
    triggerToast(`تم إدراج الموظف "${newStaffForm.name}" في كادر العمل!`);
  };

  // Add Promotion Handler
  const handleCreatePromotion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromoForm.title) return;
    const newP: FacilityPromotion = {
      id: `prom-${Date.now()}`,
      title: newPromoForm.title,
      discountPercentage: Number(newPromoForm.discountPercentage),
      couponCode: newPromoForm.couponCode,
      startDate: newPromoForm.startDate,
      endDate: newPromoForm.endDate,
      status: 'ساري',
      usageCount: 0,
      description: newPromoForm.description
    };
    setPromotions(prev => [newP, ...prev]);
    setShowAddPromotionModal(false);
    triggerToast(`تم إطلاق العرض المباشر "${newPromoForm.title}"!`);
  };

  // Review Reply Handler
  const handleSendReviewReply = (reviewId: string) => {
    if (!reviewReplyText) return;
    setReviews(prev =>
      prev.map(r => (r.id === reviewId ? { ...r, ownerReply: reviewReplyText } : r))
    );
    setReplyReviewId(null);
    setReviewReplyText('');
    triggerToast('تم نشر رد المنشأة على التقييم بنجاح!');
  };

  // Computed Dashboard Metrics
  const totalBookingsCount = bookings.length;
  const newBookingsCount = bookings.filter(b => b.status === 'جديد').length;
  const cancelledBookingsCount = bookings.filter(b => b.status === 'ملغى').length;
  const totalRevenueSAR = bookings
    .filter(b => b.status !== 'ملغى')
    .reduce((acc, curr) => acc + curr.totalPriceSAR, 0);
  const avgRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);

  // Filtered Bookings
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = bookingFilterStatus === 'الكل' || b.status === bookingFilterStatus;
    const matchesSearch =
      b.customerName.includes(bookingSearchQuery) ||
      b.id.includes(bookingSearchQuery) ||
      b.serviceTitle.includes(bookingSearchQuery);
    return matchesStatus && matchesSearch;
  });

  return (
    <section id="phase12-business-portal-section" className="py-12 bg-slate-950 text-slate-100 border-t border-emerald-900/40 relative overflow-hidden dir-rtl" dir="rtl">
      
      {/* Background Emerald & Gold Ambient Lights */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Banner */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3 shadow-lg shadow-emerald-950/60"
          >
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>المرحلة 12 — بوابة المنشآت السياحية وإدارة الأعمال (Tourism Business Portal)</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            نظام إدارة وتطوير المنشآت والخدمات السياحية
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            لوحة تحكم احترافية للفنادق والمنتجعات والمطاعم والفعاليات للتحكم الكامل في الحجوزات، الخدمات، العروض، والتحليلات.
          </p>
        </div>

        {/* MANDATORY DISCLAIMER NOTICE REQUIREMENT */}
        <div className="bg-amber-950/80 border border-amber-500/60 rounded-2xl p-4 mb-8 text-center text-xs text-amber-200 shadow-2xl flex items-center justify-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="font-semibold">
            "جميع البيانات والإحصائيات والحجوزات المعروضة في هذا النموذج هي بيانات تجريبية لأغراض العرض فقط، ولا تمثل عمليات تشغيل فعلية."
          </span>
        </div>

        {/* Toast Alert Message */}
        <AnimatePresence>
          {actionSuccessMsg && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-emerald-950 border border-emerald-400/60 text-emerald-200 p-4 rounded-2xl mb-6 shadow-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{actionSuccessMsg}</span>
              </div>
              <button onClick={() => setActionSuccessMsg(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Tabs Bar for Phase 12 Tourism Business Portal */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>لوحة التحكم الرئيسية</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'profile'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>ملف المنشأة</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all relative ${
              activeTab === 'bookings'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>الحجوزات ({bookings.length})</span>
            {newBookingsCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'services'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>الخدمات ({services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'rooms'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BedDouble className="w-4 h-4" />
            <span>الغرف والمخزون</span>
          </button>

          <button
            onClick={() => setActiveTab('promotions')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'promotions'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Tag className="w-4 h-4 text-amber-300" />
            <span>العروض والخصومات</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'reviews'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Star className="w-4 h-4 text-amber-400" />
            <span>التقييمات ({avgRating})</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>تحليلات الأداء</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bot className="w-4 h-4 text-amber-300" />
            <span>المساعد الذكي AI</span>
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all relative ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>الإشعارات</span>
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'documents'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>التراخيص والتوثيق</span>
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'staff'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>فريق العمل</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>الإعدادات</span>
          </button>

        </div>

        {/* 1. BUSINESS DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950/60 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs text-emerald-400 font-mono font-bold tracking-wider uppercase block">
                  TOURISM BUSINESS OPERATOR SYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  أهلاً بك، {facilityInfo.name} 🏨
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  حالة المنشأة الآن: <span className="text-emerald-400 font-bold">{facilityInfo.verificationStatus}</span> • ترخيص السياحة: <span className="font-mono text-amber-300">{facilityInfo.tourismLicenseNo}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveTab('bookings')}
                  className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-950/60"
                >
                  <Calendar className="w-4 h-4" />
                  <span>متابعة الحجوزات اليومية</span>
                </button>

                <button
                  onClick={() => setShowAddServiceModal(true)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4 text-emerald-400" />
                  <span>إضافة خدمة جديدة</span>
                </button>
              </div>
            </div>

            {/* Dashboard Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">إجمالي الحجوزات</span>
                <div className="text-xl font-black text-white font-mono">{totalBookingsCount}</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-amber-400 font-bold block">الحجوزات الجديدة</span>
                <div className="text-xl font-black text-amber-300 font-mono">{newBookingsCount}</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-red-400 font-bold block">الحجوزات الملغاة</span>
                <div className="text-xl font-black text-red-400 font-mono">{cancelledBookingsCount}</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-emerald-400 font-bold block">نسبة الإشغال</span>
                <div className="text-xl font-black text-emerald-400 font-mono">92%</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">متوسط التقييم</span>
                <div className="text-xl font-black text-amber-300 font-mono flex items-center justify-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{avgRating}</span>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">الإيرادات التقديرية</span>
                <div className="text-lg font-black text-emerald-400 font-mono">{totalRevenueSAR.toLocaleString()} SAR</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">عدد الزوار</span>
                <div className="text-xl font-black text-slate-200 font-mono">340+</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">الخدمات المنشورة</span>
                <div className="text-xl font-black text-slate-200 font-mono">{services.length}</div>
              </div>

            </div>

            {/* Main Operational Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Recent New Bookings (2 Cols) */}
              <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>أحدث الحجوزات الواردة</span>
                  </h4>
                  <button onClick={() => setActiveTab('bookings')} className="text-xs text-emerald-400 font-bold hover:underline">
                    إدارة جميع الحجوزات
                  </button>
                </div>

                <div className="space-y-3">
                  {bookings.slice(0, 3).map(bk => (
                    <div
                      key={bk.id}
                      className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-amber-300">{bk.id}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            bk.status === 'جديد' ? 'bg-amber-950 text-amber-300 border border-amber-500/30' :
                            bk.status === 'مؤكد' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' :
                            'bg-slate-800 text-slate-400'
                          }`}>
                            {bk.status}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-white">{bk.customerName} ({bk.guestsCount} ضيوف)</h5>
                        <p className="text-xs text-slate-400">{bk.serviceTitle} • تاريخ: {bk.checkInDate}</p>
                      </div>

                      <div className="text-left shrink-0 space-y-1">
                        <span className="text-sm font-mono font-bold text-emerald-400 block">{bk.totalPriceSAR} SAR</span>
                        <div className="flex items-center gap-2">
                          {bk.status === 'جديد' && (
                            <>
                              <button
                                onClick={() => handleUpdateBookingStatus(bk.id, 'مؤكد')}
                                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-lg"
                              >
                                قبول
                              </button>
                              <button
                                onClick={() => handleUpdateBookingStatus(bk.id, 'ملغى')}
                                className="bg-red-950 text-red-300 border border-red-800 text-[11px] font-bold px-2.5 py-1 rounded-lg"
                              >
                                رفض
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => setSelectedBookingDetails(bk)}
                            className="bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700"
                          >
                            التفاصيل
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick AI & Notifications Sidebar */}
              <div className="space-y-6">
                
                {/* AI Business Insight Box */}
                <div className="bg-gradient-to-br from-slate-900 to-emerald-950/70 border border-emerald-500/40 rounded-3xl p-6 shadow-2xl space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
                    <Bot className="w-4 h-4 text-emerald-400" />
                    <span>توصية المستشار الذكي AI</span>
                  </div>
                  <h5 className="text-sm font-extrabold text-white">تحسين تسعير عطلة نهاية الأسبوع</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    نسبة الإشغال الحالية بلغت 92%. نقترح تطبيق العرض الديناميكي برفع الأسعار 12% لزيادة الإيرادات الأسبوعية.
                  </p>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-slate-950 text-xs font-black py-2 rounded-xl"
                  >
                    عرض جميع توصيات AI
                  </button>
                </div>

                {/* Notifications Preview */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <Bell className="w-4 h-4 text-amber-400" />
                      <span>الإشعارات الأخيرة</span>
                    </h5>
                    <button onClick={() => setActiveTab('notifications')} className="text-[11px] text-amber-400 hover:underline">
                      عرض الكل
                    </button>
                  </div>

                  <div className="space-y-2 text-xs">
                    {notifications.slice(0, 3).map(notif => (
                      <div key={notif.id} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-0.5">
                        <span className="font-bold text-white block">{notif.title}</span>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{notif.message}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* 2. BUSINESS PROFILE MANAGEMENT */}
        {activeTab === 'profile' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                  <span>إدارة ملف المنشأة السياحية (Business Profile)</span>
                </h3>
                <p className="text-xs text-slate-400">تحديث المعلومات الأساسية والصور وساعات العمل ووسائل التواصل</p>
              </div>

              <button
                onClick={() => triggerToast('تم حفظ التغييرات على ملف المنشأة بنجاح!')}
                className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/50"
              >
                <Check className="w-4 h-4" />
                <span>حفظ التعديلات</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
              
              {/* Media & Branding */}
              <div className="space-y-4">
                <div>
                  <label className="text-slate-300 font-bold block mb-2">صورة الغلاف الرائدة:</label>
                  <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-800">
                    <img src={facilityInfo.coverImage} alt="Cover" className="w-full h-full object-cover" />
                    <button className="absolute bottom-2 left-2 bg-slate-950/80 text-white p-2 rounded-xl text-[10px] font-bold flex items-center gap-1 backdrop-blur">
                      <Upload className="w-3.5 h-3.5" />
                      تغيير الغلاف
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-2">شعار المنشأة:</label>
                  <div className="flex items-center gap-3">
                    <img src={facilityInfo.logo} alt="Logo" className="w-16 h-16 rounded-2xl object-cover border border-slate-700" />
                    <button className="bg-slate-950 text-slate-300 border border-slate-800 p-2 rounded-xl font-bold text-[11px]">
                      تحديث اللوجو
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">فيديو تعريفي (رابط Youtube / Demo):</label>
                  <input
                    type="text"
                    defaultValue="https://youtube.com/watch?v=demo-alula-habitas"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-slate-200"
                  />
                </div>
              </div>

              {/* Basic Fields */}
              <div className="space-y-4 lg:col-span-2">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">اسم المنشأة:</label>
                    <input
                      type="text"
                      value={facilityInfo.name}
                      onChange={e => setFacilityInfo({ ...facilityInfo, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">نوع المنشأة:</label>
                    <select
                      value={facilityInfo.type}
                      onChange={e => setFacilityInfo({ ...facilityInfo, type: e.target.value as any })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-emerald-500"
                    >
                      <option value="فندق">فندق</option>
                      <option value="منتجع">منتجع</option>
                      <option value="مطعم">مطعم</option>
                      <option value="مقهى">مقهى</option>
                      <option value="شركة أنشطة">شركة أنشطة سياحية</option>
                      <option value="منظم فعاليات">منظم فعاليات</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">الوصف الشامل:</label>
                  <textarea
                    rows={3}
                    value={facilityInfo.description}
                    onChange={e => setFacilityInfo({ ...facilityInfo, description: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">المدينة:</label>
                    <input
                      type="text"
                      value={facilityInfo.city}
                      onChange={e => setFacilityInfo({ ...facilityInfo, city: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">العنوان التفصيلي:</label>
                    <input
                      type="text"
                      value={facilityInfo.address}
                      onChange={e => setFacilityInfo({ ...facilityInfo, address: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">رقم الهاتف:</label>
                    <input
                      type="text"
                      value={facilityInfo.phone}
                      onChange={e => setFacilityInfo({ ...facilityInfo, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">البريد الإلكتروني:</label>
                    <input
                      type="email"
                      value={facilityInfo.email}
                      onChange={e => setFacilityInfo({ ...facilityInfo, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">ساعات العمل:</label>
                    <input
                      type="text"
                      value={facilityInfo.workingHours}
                      onChange={e => setFacilityInfo({ ...facilityInfo, workingHours: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-2">الخدمات والمرافق المتوفرة:</label>
                  <div className="flex flex-wrap gap-2">
                    {facilityInfo.amenities.map((am, idx) => (
                      <span key={idx} className="bg-slate-950 border border-slate-800 text-emerald-300 px-3 py-1 rounded-xl flex items-center gap-1 font-bold">
                        <Check className="w-3.5 h-3.5" />
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 3. BOOKING MANAGEMENT */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            
            {/* Filter & Calendar Toggle Header */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                
                {/* Search */}
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={bookingSearchQuery}
                    onChange={e => setBookingSearchQuery(e.target.value)}
                    placeholder="بحث برقم الحجز أو اسم العميل..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-10 pl-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2 overflow-x-auto text-xs">
                  {['الكل', 'جديد', 'مؤكد', 'مكتمل', 'ملغى'].map(st => (
                    <button
                      key={st}
                      onClick={() => setBookingFilterStatus(st)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                        bookingFilterStatus === st
                          ? 'bg-emerald-400 text-slate-950 shadow-md font-black'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setBookingViewMode('list')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      bookingViewMode === 'list' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    قائمة
                  </button>
                  <button
                    onClick={() => setBookingViewMode('calendar')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      bookingViewMode === 'calendar' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    تقويم
                  </button>
                </div>

              </div>

              {/* Calendar Scope Toggles if Calendar View */}
              {bookingViewMode === 'calendar' && (
                <div className="flex items-center gap-2 pt-2 border-t border-slate-800 text-xs">
                  <span className="text-slate-400 font-bold">عرض التقويم:</span>
                  {(['daily', 'weekly', 'monthly'] as const).map(sc => (
                    <button
                      key={sc}
                      onClick={() => setCalendarScope(sc)}
                      className={`px-3 py-1 rounded-lg font-bold ${
                        calendarScope === sc ? 'bg-amber-400 text-slate-950' : 'bg-slate-950 border border-slate-800 text-slate-400'
                      }`}
                    >
                      {sc === 'daily' ? 'يومي' : sc === 'weekly' ? 'أسبوعي' : 'شهري'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bookings View: List Mode */}
            {bookingViewMode === 'list' && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                      <tr>
                        <th className="p-4">رقم الحجز</th>
                        <th className="p-4">اسم العميل والمنفذ</th>
                        <th className="p-4">الخدمة / الجناح</th>
                        <th className="p-4">التاريخ</th>
                        <th className="p-4">المبلغ SAR</th>
                        <th className="p-4">حالة الحجز</th>
                        <th className="p-4 text-center">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {filteredBookings.map(bk => (
                        <tr key={bk.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-4 font-mono font-bold text-amber-300">{bk.id}</td>
                          <td className="p-4 font-bold text-white">
                            <div>{bk.customerName}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{bk.customerPhone}</div>
                          </td>
                          <td className="p-4 text-slate-300">{bk.serviceTitle}</td>
                          <td className="p-4 font-mono text-slate-300">{bk.checkInDate}</td>
                          <td className="p-4 font-mono font-bold text-emerald-400">{bk.totalPriceSAR} SAR</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              bk.status === 'جديد' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
                              bk.status === 'مؤكد' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
                              bk.status === 'مكتمل' ? 'bg-blue-950 text-blue-300 border border-blue-500/40' :
                              'bg-red-950 text-red-300 border border-red-500/40'
                            }`}>
                              {bk.status}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              {bk.status === 'جديد' && (
                                <button
                                  onClick={() => handleUpdateBookingStatus(bk.id, 'مؤكد')}
                                  className="bg-emerald-400 text-slate-950 font-black px-2.5 py-1 rounded-lg text-[10px]"
                                >
                                  قبول
                                </button>
                              )}
                              <button
                                onClick={() => setSelectedBookingDetails(bk)}
                                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-[10px] font-bold border border-slate-700"
                              >
                                عرض
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Bookings View: Calendar View Simulation */}
            {bookingViewMode === 'calendar' && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>جدول المواعيد والإشغال ({calendarScope.toUpperCase()})</span>
                  <span>أغسطس 2026</span>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold">
                  {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day, i) => (
                    <div key={i} className="p-2 bg-slate-950 rounded-xl text-slate-400 border border-slate-800">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: 28 }).map((_, i) => {
                    const dayNum = i + 1;
                    const hasBooking = dayNum % 3 === 0;
                    return (
                      <div
                        key={i}
                        className={`h-24 p-2 rounded-xl border flex flex-col justify-between text-right text-[11px] ${
                          hasBooking
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                            : 'bg-slate-950/60 border-slate-800 text-slate-500'
                        }`}
                      >
                        <span className="font-mono font-bold">{dayNum}</span>
                        {hasBooking && (
                          <div className="bg-emerald-500 text-slate-950 p-1 rounded font-bold text-[9px] truncate">
                            حجز فيلا مؤكد
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}

        {/* 4. SERVICES MANAGEMENT */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                <span>إدارة الخدمات والتجارب السياحية ({services.length})</span>
              </h3>

              <button
                onClick={() => setShowAddServiceModal(true)}
                className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/60"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة خدمة جديدة</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(srv => (
                <div key={srv.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="relative h-44">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-slate-950/80 border border-slate-700 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur">
                        {srv.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="text-base font-extrabold text-white">{srv.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2">{srv.description}</p>

                      <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                        <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">السعر</span>
                          <span className="text-emerald-400 font-bold">{srv.priceSAR} SAR</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">الطاقة الاستيعابية</span>
                          <span className="text-slate-200 font-bold">{srv.capacity} ضيوف</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-2">
                    <span className="text-[10px] text-slate-400 font-bold">{srv.availabilityTimes}</span>
                    <button
                      onClick={() => {
                        setServices(prev => prev.filter(s => s.id !== srv.id));
                        triggerToast(`تم حذف الخدمة "${srv.title}"`);
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-bold p-1"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. ROOMS & INVENTORY */}
        {activeTab === 'rooms' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BedDouble className="w-5 h-5 text-emerald-400" />
                  <span>إدارة الغرف والمخزون الفندقي (Rooms & Inventory)</span>
                </h3>
                <p className="text-xs text-slate-400">متابعة الغرف المتاحة والأسعار والتجهيزات وسعة الحجوزات</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rooms.map(rm => (
                <div key={rm.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-3">
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-slate-800">
                    <img src={rm.image} alt={rm.roomType} className="w-full h-full object-cover" />
                    <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      rm.status === 'متاحة' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-red-950 text-red-300 border border-red-500/40'
                    }`}>
                      {rm.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-white">{rm.roomType}</h4>
                    <span className="text-xs text-emerald-400 font-mono font-bold">{rm.pricePerNightSAR} SAR / ليلة</span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">الغرف المتاحة الآن:</span>
                      <span className="font-bold text-amber-300 font-mono">{rm.availableCount} من {rm.totalCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">سعة الضيوف:</span>
                      <span className="font-bold text-slate-200">{rm.capacityGuests} أشخاص</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 text-[10px]">
                    {rm.features.map((ft, i) => (
                      <span key={i} className="bg-slate-950 border border-slate-800 text-slate-300 px-2 py-0.5 rounded">
                        • {ft}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. OFFERS & PROMOTIONS */}
        {activeTab === 'promotions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-amber-400" />
                <span>إدارة العروض والخصومات والباقات (Promotions)</span>
              </h3>

              <button
                onClick={() => setShowAddPromotionModal(true)}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-amber-950/60"
              >
                <Plus className="w-4 h-4" />
                <span>إنشاء عرض جديد</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map(p => (
                <div key={p.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold px-3 py-1 rounded-full">
                      خصم {p.discountPercentage}%
                    </span>
                    <span className="text-xs text-slate-400 font-bold">{p.status}</span>
                  </div>

                  <h4 className="text-base font-extrabold text-white">{p.title}</h4>
                  <p className="text-xs text-slate-400">{p.description}</p>

                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">كود الكوبون:</span>
                      <span className="text-amber-300 font-bold">{p.couponCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">الفترة:</span>
                      <span className="text-slate-300">{p.startDate} - {p.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">مرات الاستخدام:</span>
                      <span className="text-emerald-400 font-bold">{p.usageCount} مرات</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. REVIEWS & RATINGS */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span>تقييمات العملاء والرد المباشر ({reviews.length})</span>
                  </h3>
                  <p className="text-xs text-slate-400">تحليل رضا النزلاء والرد على الاستفسارات</p>
                </div>

                <div className="text-center">
                  <span className="text-3xl font-black text-amber-300 font-mono block">{avgRating}</span>
                  <span className="text-[10px] text-slate-400 font-bold">من أصل 5.0</span>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map(rev => (
                  <div key={rev.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{rev.customerName}</span>
                        <span className="text-xs text-slate-400">({rev.serviceTitle})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300">{rev.comment}</p>

                    {rev.ownerReply && (
                      <div className="bg-slate-900 border-r-2 border-emerald-400 p-3 rounded-l-xl text-xs text-emerald-200 mt-2 space-y-1">
                        <span className="font-bold text-emerald-400 block">رد إداري المنشأة:</span>
                        <p>{rev.ownerReply}</p>
                      </div>
                    )}

                    {!rev.ownerReply && replyReviewId !== rev.id && (
                      <button
                        onClick={() => setReplyReviewId(rev.id)}
                        className="text-amber-400 hover:underline text-xs font-bold pt-1 block"
                      >
                        + الرد على هذا التقييم
                      </button>
                    )}

                    {replyReviewId === rev.id && (
                      <div className="space-y-2 pt-2">
                        <textarea
                          rows={2}
                          value={reviewReplyText}
                          onChange={e => setReviewReplyText(e.target.value)}
                          placeholder="اكتب رد المنشأة الدبلوماسي..."
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2 text-xs text-slate-200"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setReplyReviewId(null)}
                            className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-lg"
                          >
                            إلغاء
                          </button>
                          <button
                            onClick={() => handleSendReviewReply(rev.id)}
                            className="bg-emerald-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-lg"
                          >
                            نشر الرد
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 8. BUSINESS ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-emerald-400" />
                  <span>تحليلات الأداء التشغيلي والإيرادات (Business Analytics)</span>
                </h3>
                <p className="text-xs text-slate-400">مؤشرات الحجوزات ونسب الإشغال ومعدلات النمو الشاملة</p>
              </div>

              {/* Monthly Revenue Bar Visualization */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-300 block">الإيرادات الشهرية بالريال السعودي (SAR)</span>
                <div className="space-y-2">
                  {demoMonthlyRevenueData.map(m => (
                    <div key={m.month} className="space-y-1 text-xs">
                      <div className="flex justify-between font-mono">
                        <span className="text-slate-300 font-bold">{m.month}</span>
                        <span className="text-emerald-400 font-bold">{m.revenueSAR.toLocaleString()} SAR ({m.occupancyPercent}% إشغال)</span>
                      </div>
                      <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-emerald-600 to-amber-400 h-full rounded-full transition-all duration-700"
                          style={{ width: `${(m.revenueSAR / 500000) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 9. AI BUSINESS ASSISTANT */}
        {activeTab === 'ai' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">المساعد الذكي لتنمية الأعمال السياحية (AI Advisor)</h3>
                  <p className="text-xs text-slate-400">تحليلات ديناميكية لتحسين الأسعار وزيادة نسبة الإشغال</p>
                </div>
              </div>

              {/* Notice */}
              <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-xs text-amber-300 font-bold">
                تنبيه: جميع الاقتراحات والتوصيات المعروضة تعتمد على بيانات تجريبية.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>اقتراح تحسين الأسعار (Dynamic Pricing)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    استناداً إلى إقبال زوار موسم الشتاء بالعلا، يُوصى بزيادة سعر الفلل الصخرية بنسبة 15% لعطلات نهاية الأسبوع الممتدة من أكتوبر إلى يناير.
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>توقعات المواسم المزدحمة</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    من المتوقع حدوث طفرة حجز بنسبة 100% خلال مهرجان طنطورة القادم. يفضل إغلاق الحجوزات المبكرة قبل شهر لتنظيم التدفق.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 10. NOTIFICATIONS CENTER */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <span>مركز الإشعارات والرسائل التشغيلية</span>
              </h3>

              <div className="space-y-3">
                {notifications.map(n => (
                  <div key={n.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{n.title}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{n.time}</span>
                      </div>
                      <p className="text-xs text-slate-300">{n.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 11. DOCUMENTS & VERIFICATION */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>التراخيص المستندية وتوثيق المنشأة (Verification)</span>
                  </h3>
                  <p className="text-xs text-slate-400">سجل تراخيص وزارة السياحة والسجل التجاري والدفاع المدني</p>
                </div>

                <span className="bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold px-3.5 py-1.5 rounded-full text-xs">
                  حالة التوثيق: معتمدة رسمياً
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {documents.map(doc => (
                  <div key={doc.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[10px] text-amber-300 font-bold block">{doc.type}</span>
                    <h4 className="text-sm font-bold text-white">{doc.title}</h4>
                    <div className="text-xs font-mono text-slate-400 space-y-1 pt-2">
                      <div>رقم الملف: <span className="text-slate-200">{doc.fileNumber}</span></div>
                      <div>تاريخ الانتهاء: <span className="text-emerald-400">{doc.expiryDate}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 12. STAFF MANAGEMENT */}
        {activeTab === 'staff' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span>إدارة فريق العمل والصلاحيات ({staffList.length})</span>
              </h3>

              <button
                onClick={() => setShowAddStaffModal(true)}
                className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/60"
              >
                <UserPlus className="w-4 h-4" />
                <span>إضافة موظف جديد</span>
              </button>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                  <tr>
                    <th className="p-4">اسم الموظف</th>
                    <th className="p-4">المسمى الوظيفي</th>
                    <th className="p-4">البريد والهاتف</th>
                    <th className="p-4">الحالة</th>
                    <th className="p-4 text-center">حذف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {staffList.map(stf => (
                    <tr key={stf.id} className="hover:bg-slate-800/40">
                      <td className="p-4 font-bold text-white">{stf.name}</td>
                      <td className="p-4 text-emerald-300 font-bold">{stf.role}</td>
                      <td className="p-4 font-mono text-slate-400">{stf.email}</td>
                      <td className="p-4">
                        <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded font-bold">
                          {stf.status}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => {
                            setStaffList(prev => prev.filter(s => s.id !== stf.id));
                            triggerToast(`تم استبعاد الموظف "${stf.name}"`);
                          }}
                          className="text-red-400 hover:text-red-300 font-bold"
                        >
                          إزالة
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 13. SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <Settings className="w-5 h-5 text-emerald-400" />
              <span>إعدادات حساب المنشأة والخصوصية</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <label className="text-slate-300 font-bold block">لغة الواجهة الرئيسية:</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200">
                  <option value="ar">العربية (اللغة الرسمية)</option>
                  <option value="en">English (Tourism Mode)</option>
                </select>

                <label className="text-slate-300 font-bold block pt-2">إشعارات البريد والواتساب:</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-slate-700 text-emerald-500" />
                    <span>تنبيه فوري لكل حجز جديد</span>
                  </label>
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-slate-700 text-emerald-500" />
                    <span>تقرير أسبوعي تلقائي بالإيرادات</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-slate-300 font-bold block">كلمة المرور والأمان:</label>
                <button
                  onClick={() => triggerToast('تم ارسال رابط إعادة تعيين كلمة المرور إلى البريد!')}
                  className="bg-slate-950 text-emerald-300 border border-slate-800 px-4 py-2 rounded-xl font-bold"
                >
                  تغيير كلمة المرور
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BOOKING DETAILS MODAL */}
        <AnimatePresence>
          {selectedBookingDetails && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl dir-rtl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-bold text-white">تفاصيل الحجز #{selectedBookingDetails.id}</h4>
                  <button onClick={() => setSelectedBookingDetails(null)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl">
                    <span className="text-slate-400">اسم العميل:</span>
                    <span className="font-bold text-white">{selectedBookingDetails.customerName}</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl font-mono">
                    <span className="text-slate-400">رقم التواصل:</span>
                    <span className="text-emerald-400">{selectedBookingDetails.customerPhone}</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl">
                    <span className="text-slate-400">الخدمة / الجناح:</span>
                    <span className="font-bold text-amber-300">{selectedBookingDetails.serviceTitle}</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl font-mono">
                    <span className="text-slate-400">تاريخ الوصول:</span>
                    <span className="text-slate-200">{selectedBookingDetails.checkInDate}</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-950 rounded-xl font-mono">
                    <span className="text-slate-400">إجمالي المبلغ:</span>
                    <span className="font-bold text-emerald-400">{selectedBookingDetails.totalPriceSAR} SAR</span>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => handleUpdateBookingStatus(selectedBookingDetails.id, 'مؤكد')}
                    className="bg-emerald-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs"
                  >
                    تأكيد الحجز
                  </button>
                  <button
                    onClick={() => setSelectedBookingDetails(null)}
                    className="bg-slate-800 text-slate-300 font-bold px-4 py-2 rounded-xl text-xs"
                  >
                    إغلاق
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ADD SERVICE MODAL */}
        <AnimatePresence>
          {showAddServiceModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl dir-rtl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-bold text-white">إضافة خدمة سياحية جديدة</h4>
                  <button onClick={() => setShowAddServiceModal(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateService} className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">عنوان الخدمة:</label>
                    <input
                      type="text"
                      required
                      value={newServiceForm.title}
                      onChange={e => setNewServiceForm({ ...newServiceForm, title: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      placeholder="مثال: جناح صخري ملكي"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">السعر (SAR):</label>
                      <input
                        type="number"
                        required
                        value={newServiceForm.priceSAR}
                        onChange={e => setNewServiceForm({ ...newServiceForm, priceSAR: Number(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-slate-300 font-bold block mb-1">الطاقة الاستيعابية:</label>
                      <input
                        type="number"
                        required
                        value={newServiceForm.capacity}
                        onChange={e => setNewServiceForm({ ...newServiceForm, capacity: Number(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">الوصف:</label>
                    <textarea
                      rows={2}
                      value={newServiceForm.description}
                      onChange={e => setNewServiceForm({ ...newServiceForm, description: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddServiceModal(false)}
                      className="bg-slate-800 text-slate-300 font-bold px-4 py-2 rounded-xl text-xs"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-400 text-slate-950 font-black px-5 py-2 rounded-xl text-xs"
                    >
                      حفظ ونشر
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ADD STAFF MODAL */}
        <AnimatePresence>
          {showAddStaffModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl dir-rtl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-bold text-white">إضافة موظف إلى فريق العمل</h4>
                  <button onClick={() => setShowAddStaffModal(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateStaff} className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">اسم الموظف الثلاثي:</label>
                    <input
                      type="text"
                      required
                      value={newStaffForm.name}
                      onChange={e => setNewStaffForm({ ...newStaffForm, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">المسمى الوظيفي / الدور:</label>
                    <select
                      value={newStaffForm.role}
                      onChange={e => setNewStaffForm({ ...newStaffForm, role: e.target.value as any })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    >
                      <option value="مدير عام">مدير عام</option>
                      <option value="مدير الحجوزات">مدير الحجوزات</option>
                      <option value="موظف استقبال">موظف استقبال</option>
                      <option value="مدير تسويق">مدير تسويق</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddStaffModal(false)}
                      className="bg-slate-800 text-slate-300 font-bold px-4 py-2 rounded-xl text-xs"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-400 text-slate-950 font-black px-5 py-2 rounded-xl text-xs"
                    >
                      إضافة الموظف
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ADD PROMOTION MODAL */}
        <AnimatePresence>
          {showAddPromotionModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl dir-rtl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-bold text-white">إطلاق عرض وترويج جديد</h4>
                  <button onClick={() => setShowAddPromotionModal(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreatePromotion} className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">عنوان العرض:</label>
                    <input
                      type="text"
                      required
                      value={newPromoForm.title}
                      onChange={e => setNewPromoForm({ ...newPromoForm, title: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">نسبة الخصم %:</label>
                      <input
                        type="number"
                        required
                        value={newPromoForm.discountPercentage}
                        onChange={e => setNewPromoForm({ ...newPromoForm, discountPercentage: Number(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-slate-300 font-bold block mb-1">كود الكوبون:</label>
                      <input
                        type="text"
                        required
                        value={newPromoForm.couponCode}
                        onChange={e => setNewPromoForm({ ...newPromoForm, couponCode: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddPromotionModal(false)}
                      className="bg-slate-800 text-slate-300 font-bold px-4 py-2 rounded-xl text-xs"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="bg-amber-400 text-slate-950 font-black px-5 py-2 rounded-xl text-xs"
                    >
                      إطلاق العرض
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
