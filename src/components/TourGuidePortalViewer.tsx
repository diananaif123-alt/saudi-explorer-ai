import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  UserCheck,
  Calendar,
  Compass,
  MessageSquare,
  Star,
  PieChart,
  Bot,
  Bell,
  ShieldCheck,
  Settings,
  Plus,
  Search,
  Filter,
  MapPin,
  Clock,
  Users,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Edit,
  Trash2,
  Send,
  Sparkles,
  Phone,
  Mail,
  Award,
  Globe,
  FileText,
  Share2,
  Camera,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
  CalendarDays,
  Tag,
  BookOpen,
  Eye,
  Sliders,
  ShieldAlert,
  ArrowUpRight,
  Smile,
  Home
} from 'lucide-react';

import {
  initialGuideProfile,
  demoGuidedTours,
  demoTourGuideBookings,
  demoTouristChatMessages,
  demoTourReviews,
  demoGuideDocuments,
  demoGuideNotifications,
  demoMonthlyGuideAnalytics,
  TourGuideProfile,
  GuidedTour,
  TourGuideBooking,
  TouristChatMessage,
  TourReview,
  TourGuideDocument,
  TourGuideNotification
} from '../data/tourGuideData';

export const TourGuidePortalViewer: React.FC = () => {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<
    | 'dashboard'
    | 'profile'
    | 'tours'
    | 'bookings'
    | 'chat'
    | 'reviews'
    | 'analytics'
    | 'ai'
    | 'notifications'
    | 'documents'
    | 'settings'
  >('dashboard');

  // State
  const [profile, setProfile] = useState<TourGuideProfile>(initialGuideProfile);
  const [tours, setTours] = useState<GuidedTour[]>(demoGuidedTours);
  const [bookings, setBookings] = useState<TourGuideBooking[]>(demoTourGuideBookings);
  const [chatMessages, setChatMessages] = useState<TouristChatMessage[]>(demoTouristChatMessages);
  const [reviews, setReviews] = useState<TourReview[]>(demoTourReviews);
  const [documents, setDocuments] = useState<TourGuideDocument[]>(demoGuideDocuments);
  const [notifications, setNotifications] = useState<TourGuideNotification[]>(demoGuideNotifications);

  // Filters & Sub-views
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>('الكل');
  const [bookingSearchQuery, setBookingSearchQuery] = useState<string>('');
  const [bookingViewMode, setBookingViewMode] = useState<'list' | 'calendar'>('list');

  // Interactive Chat State
  const [currentChatMessageInput, setCurrentChatMessageInput] = useState<string>('');

  // Modals state
  const [showAddTourModal, setShowAddTourModal] = useState<boolean>(false);
  const [selectedBookingForDetails, setSelectedBookingForDetails] = useState<TourGuideBooking | null>(null);
  const [replyReviewId, setReplyReviewId] = useState<string | null>(null);
  const [reviewReplyInput, setReviewReplyInput] = useState<string>('');

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Tour Form State
  const [newTourForm, setNewTourForm] = useState({
    title: '',
    city: 'العلا',
    category: 'تراث وثقافة' as const,
    priceSAR: 300,
    durationHours: 4,
    maxSeats: 12,
    startPoint: 'مركز الزوار الرئيسي',
    endPoint: 'البلدة القديمة',
    description: '',
    departureTime: '09:00 صباحاً',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Booking action handlers
  const handleUpdateBookingStatus = (bookingId: string, newStatus: 'مؤكد' | 'ملغى' | 'مكتمل') => {
    setBookings(prev =>
      prev.map(b => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );
    if (selectedBookingForDetails?.id === bookingId) {
      setSelectedBookingForDetails(prev => (prev ? { ...prev, status: newStatus } : null));
    }
    triggerToast(`تمت تحديث حالة طلب الحجز #${bookingId} إلى "${newStatus}" بنجاح!`);
  };

  // Add new tour handler
  const handleCreateTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTourForm.title) return;
    const tour: GuidedTour = {
      id: `tour-${Date.now()}`,
      title: newTourForm.title,
      city: newTourForm.city,
      category: newTourForm.category,
      priceSAR: Number(newTourForm.priceSAR),
      durationHours: Number(newTourForm.durationHours),
      maxSeats: Number(newTourForm.maxSeats),
      startPoint: newTourForm.startPoint,
      endPoint: newTourForm.endPoint,
      description: newTourForm.description || 'جولة ممتازة بصحبة المرشد السياحي.',
      includedItems: ['ضيافة قهوة وتمر', 'مرشد سياحي ترخيص ساري', 'معدات أمان'],
      images: [newTourForm.image],
      status: 'نشطة',
      departureTime: newTourForm.departureTime
    };
    setTours(prev => [tour, ...prev]);
    setShowAddTourModal(false);
    triggerToast(`تمت إضافة الجولة السياحية الجديدة "${newTourForm.title}" بنجاح!`);
  };

  // Delete Tour Handler
  const handleDeleteTour = (tourId: string) => {
    setTours(prev => prev.filter(t => t.id !== tourId));
    triggerToast('تم حذف الجولة السياحية من قائمتك.');
  };

  // Send Chat Message Handler
  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentChatMessageInput.trim()) return;
    const newMsg: TouristChatMessage = {
      id: `msg-${Date.now()}`,
      senderName: profile.name,
      senderAvatar: profile.photo,
      message: currentChatMessageInput,
      time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
      isGuide: true
    };
    setChatMessages(prev => [...prev, newMsg]);
    setCurrentChatMessageInput('');
    triggerToast('تم إرسال الرسالة إلى السائح بنجاح!');
  };

  // Send Location Link in Chat
  const handleSendMeetingLocation = () => {
    const locMsg: TouristChatMessage = {
      id: `msg-${Date.now()}`,
      senderName: profile.name,
      senderAvatar: profile.photo,
      message: '📍 موقع نقطة الالتقاء المعتمد للجولة:',
      time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
      isGuide: true,
      meetingPointLocation: 'العلا - مركز زوار موقع الحجر التاريخي (26.61, 37.92)'
    };
    setChatMessages(prev => [...prev, locMsg]);
    triggerToast('تمت مشاركة إحداثيات نقطة الالتقاء المعلمة في الشات!');
  };

  // Reply to Review Handler
  const handleReplyToReview = (reviewId: string) => {
    if (!reviewReplyInput) return;
    setReviews(prev =>
      prev.map(r => (r.id === reviewId ? { ...r, guideReply: reviewReplyInput } : r))
    );
    setReplyReviewId(null);
    setReviewReplyInput('');
    triggerToast('تم نشر رد المرشد السياحي على تقييم السائح!');
  };

  // Computed Metrics
  const totalBookingsCount = bookings.length;
  const newRequestsCount = bookings.filter(b => b.status === 'طلب جديد').length;
  const completedToursCount = bookings.filter(b => b.status === 'مكتمل').length;
  const totalEarningsSAR = bookings
    .filter(b => b.status !== 'ملغى')
    .reduce((acc, curr) => acc + curr.totalPriceSAR, 0);
  const avgRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);

  // Filtered Bookings
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = bookingFilterStatus === 'الكل' || b.status === bookingFilterStatus;
    const matchesSearch =
      b.touristName.includes(bookingSearchQuery) ||
      b.id.includes(bookingSearchQuery) ||
      b.tourTitle.includes(bookingSearchQuery);
    return matchesStatus && matchesSearch;
  });

  return (
    <section id="phase13-tour-guide-section" className="py-12 bg-slate-950 text-slate-100 border-t border-amber-900/40 relative overflow-hidden dir-rtl" dir="rtl">
      
      {/* Background Gold & Emerald Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Banner */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg shadow-amber-950/60"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>المرحلة 13 — بوابة المرشد السياحي وإدارة الجولات (Tour Guide Portal)</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            بوابة المرشد السياحي وتجارب الجولات الاستكشافية
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            منصة متكاملة للمرشدين السياحيين لإدارة الجولات، طلبات الحجز، المحادثة المباشرة مع السياح، وتقييم الأداء والذكاء الاصطناعي.
          </p>
        </div>

        {/* MANDATORY DISCLAIMER NOTICE REQUIREMENT */}
        <div className="bg-amber-950/80 border border-amber-500/60 rounded-2xl p-4 mb-8 text-center text-xs text-amber-200 shadow-2xl flex items-center justify-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="font-semibold">
            "جميع البيانات والحجوزات والإحصائيات المعروضة في هذا النموذج هي بيانات تجريبية لأغراض العرض فقط، وليست بيانات تشغيلية حقيقية."
          </span>
        </div>

        {/* Action Success Toast Alert */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-emerald-950 border border-emerald-400/60 text-emerald-200 p-4 rounded-2xl mb-6 shadow-2xl flex items-center justify-between"
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

        {/* Navigation Tabs Bar for Tour Guide Portal */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
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
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>ملف المرشد الشخصي</span>
          </button>

          <button
            onClick={() => setActiveTab('tours')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'tours'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>إدارة الجولات ({tours.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all relative ${
              activeTab === 'bookings'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>طلبات الحجوزات ({bookings.length})</span>
            {newRequestsCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'chat'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>محادثات السياح</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'reviews'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>التقييمات ({avgRating})</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
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
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bot className="w-4 h-4 text-amber-300" />
            <span>المساعد الذكي AI</span>
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
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
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>التراخيص والاعتماد</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>الإعدادات</span>
          </button>

        </div>

        {/* TAB 1: TOUR GUIDE DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            
            {/* Guide Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-amber-950/60 to-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-400 shadow-xl shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-xs text-amber-400 font-mono font-bold tracking-wider uppercase block">
                    CERTIFIED SAUDI TOUR GUIDE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    أهلاً بك، {profile.name} 🌴
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    رخصة السياحة: <span className="font-mono text-amber-300 font-bold">{profile.licenseNumber}</span> • الحالة: <span className="text-emerald-400 font-bold">{profile.licenseStatus}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowAddTourModal(true)}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-amber-950/60"
                >
                  <Plus className="w-4 h-4" />
                  <span>إنشاء جولة جديدة</span>
                </button>

                <button
                  onClick={() => setActiveTab('bookings')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>جدول الحجوزات اليومي</span>
                </button>
              </div>
            </div>

            {/* Metrics Overview Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-amber-400 font-bold block">الجولات القادمة</span>
                <div className="text-xl font-black text-amber-300 font-mono">3 جولات</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-emerald-400 font-bold block">الجولات المنتهية</span>
                <div className="text-xl font-black text-emerald-400 font-mono">{completedToursCount} جولات</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">إجمالي الحجوزات</span>
                <div className="text-xl font-black text-white font-mono">{totalBookingsCount}</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">متوسط التقييم</span>
                <div className="text-xl font-black text-amber-300 font-mono flex items-center justify-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{avgRating}</span>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-emerald-400 font-bold block">الأرباح التقديرية</span>
                <div className="text-lg font-black text-emerald-400 font-mono">{totalEarningsSAR.toLocaleString()} SAR</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">سنوات الخبرة</span>
                <div className="text-xl font-black text-slate-200 font-mono">{profile.experienceYears} سنوات</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 font-bold block">طلبات جديدة</span>
                <div className="text-xl font-black text-amber-300 font-mono">{newRequestsCount}</div>
              </div>

            </div>

            {/* Dashboard Operational Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Today's & Upcoming Schedule (2 Cols) */}
              <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-amber-400" />
                    <span>جدول اليوم والجولات القادمة</span>
                  </h4>
                  <button onClick={() => setActiveTab('bookings')} className="text-xs text-amber-400 font-bold hover:underline">
                    عرض جميع الحجوزات
                  </button>
                </div>

                <div className="space-y-3">
                  {bookings.map(bk => (
                    <div
                      key={bk.id}
                      className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-amber-300">{bk.id}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            bk.status === 'طلب جديد' ? 'bg-amber-950 text-amber-300 border border-amber-500/30' :
                            bk.status === 'مؤكد' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' :
                            'bg-slate-800 text-slate-400'
                          }`}>
                            {bk.status}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-white">{bk.touristName} ({bk.guestsCount} زوار)</h5>
                        <p className="text-xs text-slate-400">{bk.tourTitle} • تاريخ: {bk.tourDate}</p>
                        <p className="text-[11px] text-amber-400/90 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{bk.meetingPoint}</span>
                        </p>
                      </div>

                      <div className="text-left shrink-0 space-y-1">
                        <span className="text-sm font-mono font-bold text-emerald-400 block">{bk.totalPriceSAR} SAR</span>
                        <div className="flex items-center gap-2">
                          {bk.status === 'طلب جديد' && (
                            <>
                              <button
                                onClick={() => handleUpdateBookingStatus(bk.id, 'مؤكد')}
                                className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-lg"
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
                            onClick={() => setActiveTab('chat')}
                            className="bg-slate-800 hover:bg-slate-700 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1"
                          >
                            <MessageSquare className="w-3 h-3" />
                            محادثة
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Recommendations & Quick Notifications (1 Col) */}
              <div className="space-y-6">
                
                {/* AI Guide Assistant Insight Box */}
                <div className="bg-gradient-to-br from-slate-900 to-amber-950/60 border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-3">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                    <Bot className="w-4 h-4 text-amber-400" />
                    <span>توصية المرشد الذكي AI</span>
                  </div>
                  <h5 className="text-sm font-extrabold text-white">إضافة جولة غطاء ليلي في جبل الفيل</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    تشير بيانات البحث بالعلا إلى زيادة 35% في طلب الجولات الاستكشافية بعد الساعة 8 مساءً. يُوصى بإنشاء جولة ليلية رصدا للنجوم.
                  </p>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black py-2 rounded-xl"
                  >
                    فتح المساعد الذكي AI
                  </button>
                </div>

                {/* Notifications Preview Box */}
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

        {/* TAB 2: GUIDE PROFILE MANAGEMENT */}
        {activeTab === 'profile' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-amber-400" />
                  <span>إدارة الملف الشخصي والمهني للمرشد (Guide Profile)</span>
                </h3>
                <p className="text-xs text-slate-400">تحديث النبذة، اللغات، سنوات الخبرة، التخصصات وأوقات التوفر</p>
              </div>

              <button
                onClick={() => triggerToast('تم حفظ التعديلات على ملف المرشد السياحي بنجاح!')}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-amber-950/50"
              >
                <Check className="w-4 h-4" />
                <span>حفظ التعديلات</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
              
              {/* Photo & Identity Sidebar */}
              <div className="space-y-4 text-center">
                <div className="relative w-36 h-36 mx-auto rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl">
                  <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
                  <button className="absolute bottom-2 left-2 right-2 bg-slate-950/80 text-white p-1 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1 backdrop-blur">
                    <Camera className="w-3.5 h-3.5" />
                    تحديث الصورة
                  </button>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-right">
                  <span className="text-[10px] text-amber-400 font-bold block">حالة الاعتماد السياحي:</span>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{profile.licenseStatus}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono">رقم الرخصة: {profile.licenseNumber}</p>
                </div>
              </div>

              {/* Editable Fields */}
              <div className="space-y-4 lg:col-span-2">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">الاسم الكامل:</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={e => setProfile({ ...profile, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">المسمى المهني:</label>
                    <input
                      type="text"
                      value={profile.title}
                      onChange={e => setProfile({ ...profile, title: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">النبذة التعريفية:</label>
                  <textarea
                    rows={3}
                    value={profile.bio}
                    onChange={e => setProfile({ ...profile, bio: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">المدينة الرئيسية:</label>
                    <input
                      type="text"
                      value={profile.city}
                      onChange={e => setProfile({ ...profile, city: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">سنوات الخبرة:</label>
                    <input
                      type="number"
                      value={profile.experienceYears}
                      onChange={e => setProfile({ ...profile, experienceYears: Number(e.target.value) })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">الهاتف:</label>
                    <input
                      type="text"
                      value={profile.phone}
                      onChange={e => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-2">اللغات التي يتحدث بها:</label>
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((lang, idx) => (
                      <span key={idx} className="bg-slate-950 border border-slate-800 text-amber-300 px-3 py-1 rounded-xl flex items-center gap-1 font-bold">
                        <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-2">التخصصات والمهارات:</label>
                  <div className="flex flex-wrap gap-2">
                    {profile.specialties.map((spec, idx) => (
                      <span key={idx} className="bg-slate-950 border border-slate-800 text-slate-200 px-3 py-1 rounded-xl flex items-center gap-1 font-bold">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">أوقات وساعات التوفر:</label>
                  <input
                    type="text"
                    value={profile.availabilitySchedule}
                    onChange={e => setProfile({ ...profile, availabilitySchedule: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                  />
                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 3: TOUR MANAGEMENT */}
        {activeTab === 'tours' && (
          <div className="space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-400" />
                  <span>إدارة الجولات والمسارات السياحية (Tour Management)</span>
                </h3>
                <p className="text-xs text-slate-400">إنشاء وتحديث الجولات، تحديد الأسعار، عدد المقاعد ونقاط الانطلاق</p>
              </div>

              <button
                onClick={() => setShowAddTourModal(true)}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-amber-950/60"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة جولة جديدة</span>
              </button>
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tours.map(tour => (
                <div key={tour.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="relative h-48">
                      <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-slate-950/80 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur">
                        {tour.category}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-slate-950/90 text-emerald-400 font-mono font-black text-sm px-3 py-1 rounded-xl border border-slate-700">
                        {tour.priceSAR} SAR / شخص
                      </div>
                    </div>

                    <div className="p-6 space-y-3 text-xs">
                      <h4 className="text-base font-bold text-white">{tour.title}</h4>
                      <p className="text-slate-400 line-clamp-2 leading-relaxed">{tour.description}</p>

                      <div className="grid grid-cols-2 gap-2 text-slate-300 pt-2 border-t border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>المدة: {tour.durationHours} ساعات</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-emerald-400" />
                          <span>المقاعد: {tour.maxSeats} مقعد</span>
                        </div>

                        <div className="flex items-center gap-1.5 col-span-2">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">البداية: {tour.startPoint}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {tour.includedItems.map((inc, i) => (
                          <span key={i} className="bg-slate-950 border border-slate-800 text-emerald-300 text-[10px] px-2 py-0.5 rounded-lg">
                            ✓ {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      tour.status === 'نشطة' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {tour.status}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => triggerToast(`جاري تعديل جولة: ${tour.title}`)}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1"
                      >
                        <Edit className="w-3.5 h-3.5 text-amber-400" />
                        تعديل
                      </button>

                      <button
                        onClick={() => handleDeleteTour(tour.id)}
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

        {/* TAB 4: BOOKING MANAGEMENT */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            
            {/* Search & Status Header */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={bookingSearchQuery}
                    onChange={e => setBookingSearchQuery(e.target.value)}
                    placeholder="بحث باسم السائح، رقم الحجز أو الجولة..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-10 pl-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto text-xs">
                  {['الكل', 'طلب جديد', 'مؤكد', 'مكتمل', 'ملغى'].map(st => (
                    <button
                      key={st}
                      onClick={() => setBookingFilterStatus(st)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                        bookingFilterStatus === st
                          ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setBookingViewMode('list')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      bookingViewMode === 'list' ? 'bg-amber-400 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    قائمة
                  </button>
                  <button
                    onClick={() => setBookingViewMode('calendar')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      bookingViewMode === 'calendar' ? 'bg-amber-400 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    تقويم
                  </button>
                </div>

              </div>
            </div>

            {/* List View */}
            {bookingViewMode === 'list' && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                      <tr>
                        <th className="p-4">رقم الحجز</th>
                        <th className="p-4">اسم السائح والجنسية</th>
                        <th className="p-4">الجولة السياحية</th>
                        <th className="p-4">تاريخ الجولة</th>
                        <th className="p-4">المبلغ SAR</th>
                        <th className="p-4">حالة الطلب</th>
                        <th className="p-4 text-center">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {filteredBookings.map(bk => (
                        <tr key={bk.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-4 font-mono font-bold text-amber-300">{bk.id}</td>
                          <td className="p-4 font-bold text-white">
                            <div>{bk.touristName}</div>
                            <div className="text-[10px] text-slate-400 font-normal">{bk.touristNationality} ({bk.guestsCount} أشخاص)</div>
                          </td>
                          <td className="p-4 text-slate-300">{bk.tourTitle}</td>
                          <td className="p-4 font-mono text-slate-300">{bk.tourDate}</td>
                          <td className="p-4 font-mono font-bold text-emerald-400">{bk.totalPriceSAR} SAR</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              bk.status === 'طلب جديد' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
                              bk.status === 'مؤكد' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
                              bk.status === 'مكتمل' ? 'bg-blue-950 text-blue-300 border border-blue-500/40' :
                              'bg-red-950 text-red-300 border border-red-500/40'
                            }`}>
                              {bk.status}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              {bk.status === 'طلب جديد' && (
                                <>
                                  <button
                                    onClick={() => handleUpdateBookingStatus(bk.id, 'مؤكد')}
                                    className="bg-emerald-400 text-slate-950 font-black px-2.5 py-1 rounded-lg text-[10px]"
                                  >
                                    قبول
                                  </button>
                                  <button
                                    onClick={() => handleUpdateBookingStatus(bk.id, 'ملغى')}
                                    className="bg-red-950 text-red-300 border border-red-800 px-2 py-1 rounded-lg text-[10px]"
                                  >
                                    رفض
                                  </button>
                                </>
                              )}
                              <button
                                onClick={() => setSelectedBookingForDetails(bk)}
                                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-[10px] font-bold border border-slate-700"
                              >
                                التفاصيل
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

            {/* Calendar View Simulation */}
            {bookingViewMode === 'calendar' && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>جدول المواعيد والجولات (أغسطس 2026)</span>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold">
                  {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day, i) => (
                    <div key={i} className="p-2 bg-slate-950 rounded-xl text-slate-400 border border-slate-800">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: 28 }).map((_, i) => {
                    const dayNum = i + 1;
                    const hasBooking = dayNum === 2 || dayNum === 3 || dayNum === 18;
                    return (
                      <div
                        key={i}
                        className={`h-24 p-2 rounded-xl border flex flex-col justify-between text-right text-[11px] ${
                          hasBooking ? 'bg-slate-950 border-amber-500/60 shadow-lg' : 'bg-slate-950/40 border-slate-800/80'
                        }`}
                      >
                        <span className="font-mono text-slate-400">{dayNum}</span>
                        {hasBooking && (
                          <div className="bg-amber-950 border border-amber-500/40 p-1.5 rounded-lg space-y-0.5">
                            <span className="text-[10px] text-amber-300 font-bold block truncate">جولة أسرار الحجر</span>
                            <span className="text-[9px] text-emerald-400 block font-mono">08:00 ص</span>
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

        {/* TAB 5: TOURIST COMMUNICATION & CHAT */}
        {activeTab === 'chat' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-3 min-h-[500px]">
            
            {/* Tourists Chat List (1 Col) */}
            <div className="bg-slate-950 border-l border-slate-800 p-4 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>المحادثات النشطة مع السياح</span>
              </h4>

              <div className="space-y-2">
                <div className="bg-slate-900 p-3 rounded-2xl border border-amber-500/50 flex items-center gap-3 cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Laura"
                    className="w-10 h-10 rounded-full object-cover border border-amber-400"
                  />
                  <div className="space-y-0.5 overflow-hidden text-xs">
                    <span className="font-bold text-white block truncate">د. لورا سميث (Laura Smith)</span>
                    <span className="text-[10px] text-amber-300 block truncate">رحلة أسرار الحجر النبطية</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center gap-3 cursor-pointer opacity-70 hover:opacity-100">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs border border-slate-700">
                    م ع
                  </div>
                  <div className="space-y-0.5 overflow-hidden text-xs">
                    <span className="font-bold text-white block truncate">منصور العتيبي</span>
                    <span className="text-[10px] text-slate-400 block truncate">مسار رصد النجوم بالعلا</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Chat Box (2 Cols) */}
            <div className="md:col-span-2 flex flex-col justify-between bg-slate-900/50 p-4 sm:p-6 space-y-4">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Laura"
                    className="w-10 h-10 rounded-full object-cover border border-amber-400"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-white">د. لورا سميث (Laura Smith)</h5>
                    <span className="text-[10px] text-emerald-400">متصل الآن • حجز مؤكد #TG-BK-801</span>
                  </div>
                </div>

                <button
                  onClick={handleSendMeetingLocation}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  إرسال نقطة الالتقاء
                </button>
              </div>

              {/* Chat Message History */}
              <div className="space-y-3 overflow-y-auto max-h-[320px] p-2">
                {chatMessages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${msg.isGuide ? 'flex-row-reverse' : ''}`}
                  >
                    <img src={msg.senderAvatar} alt={msg.senderName} className="w-8 h-8 rounded-full object-cover border border-slate-700" />
                    <div className={`p-3 rounded-2xl max-w-[80%] text-xs space-y-1 ${
                      msg.isGuide ? 'bg-amber-950 text-amber-100 border border-amber-500/40' : 'bg-slate-950 text-slate-200 border border-slate-800'
                    }`}>
                      <div className="flex items-center justify-between gap-2 text-[10px] opacity-75">
                        <span className="font-bold">{msg.senderName}</span>
                        <span>{msg.time}</span>
                      </div>
                      <p className="leading-relaxed">{msg.message}</p>

                      {msg.meetingPointLocation && (
                        <div className="bg-slate-950 p-2.5 rounded-xl border border-amber-500/60 mt-2 text-[11px] text-amber-300 font-mono space-y-1">
                          <span className="font-bold block">📍 خريطة نقطة الالتقاء:</span>
                          <p>{msg.meetingPointLocation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendChatMessage} className="flex items-center gap-2 pt-3 border-t border-slate-800">
                <input
                  type="text"
                  value={currentChatMessageInput}
                  onChange={e => setCurrentChatMessageInput(e.target.value)}
                  placeholder="اكتب رسالتك للسائح..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  إرسال
                </button>
              </form>

            </div>

          </div>
        )}

        {/* TAB 6: RATINGS & REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span>تقييمات وآراء السياح (Ratings & Reviews)</span>
                  </h3>
                  <p className="text-xs text-slate-400">متوسط التقييم العام: <span className="font-bold text-amber-300">{avgRating} من 5.0</span> (من إجمالي {reviews.length} تقييم)</p>
                </div>
              </div>

              {/* Reviews Strengths Analysis Box */}
              <div className="bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 p-4 rounded-2xl border border-emerald-500/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-emerald-400 block mb-1">💪 نقاط القوة والتميز:</span>
                  <ul className="text-slate-300 space-y-1">
                    <li>• التمكن العالي من قراءة النقوش والقصص التاريخية النبطية.</li>
                    <li>• الالتزام بالمواعيد المحددة والضيافة السعودية الراقية.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-amber-400 block mb-1">💡 فرص التحسين والتطوير:</span>
                  <ul className="text-slate-300 space-y-1">
                    <li>• إضافة سماعات صوتية لاسلكية للوفود الكبيرة لضمان وضوح الشرح.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.map(rev => (
                <div key={rev.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white">{rev.touristName} ({rev.touristCountry})</h5>
                      <span className="text-[10px] text-amber-300 font-bold block">{rev.tourTitle} • بتاريخ {rev.date}</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-300 font-bold font-mono text-sm bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                      <Star className="w-4 h-4 fill-amber-300" />
                      <span>{rev.rating}.0</span>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-2xl border border-slate-800">
                    "{rev.comment}"
                  </p>

                  {rev.guideReply ? (
                    <div className="bg-amber-950/40 border border-amber-500/30 p-3 rounded-2xl text-amber-200 space-y-1">
                      <span className="font-bold text-amber-400 block text-[11px]">رد المرشد السياحي:</span>
                      <p>{rev.guideReply}</p>
                    </div>
                  ) : (
                    <div>
                      {replyReviewId === rev.id ? (
                        <div className="space-y-2 pt-2">
                          <textarea
                            rows={2}
                            value={reviewReplyInput}
                            onChange={e => setReviewReplyInput(e.target.value)}
                            placeholder="اكتب ردك اللبق على تقييم السائح..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-amber-500"
                          />
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleReplyToReview(rev.id)}
                              className="bg-amber-400 text-slate-950 font-black px-3 py-1.5 rounded-xl text-xs"
                            >
                              نشر الرد
                            </button>
                            <button
                              onClick={() => setReplyReviewId(null)}
                              className="bg-slate-800 text-slate-400 px-3 py-1.5 rounded-xl text-xs"
                            >
                              إلغاء
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setReplyReviewId(rev.id)}
                          className="text-amber-400 hover:underline font-bold text-xs"
                        >
                          + الرد على التعليق
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 7: GUIDE ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-1">
                <PieChart className="w-5 h-5 text-amber-400" />
                <span>تحليلات أداء الجولات والإيرادات (Guide Analytics)</span>
              </h3>
              <p className="text-xs text-slate-400">إحصائيات شهرية تفاعلية للنمو وعدد السياح والأرباح التقديرية</p>
            </div>

            {/* Interactive Simulated Bar Chart */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <h4 className="text-sm font-bold text-white">الأرباح التقديرية الشهرية (SAR)</h4>

              <div className="h-48 flex items-end justify-between gap-2 pt-6 pb-2 border-b border-slate-800 text-center">
                {demoMonthlyGuideAnalytics.map((item, idx) => {
                  const maxSAR = 35000;
                  const heightPercent = Math.round((item.earningsSAR / maxSAR) * 100);
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                      <span className="text-[10px] font-mono font-bold text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.earningsSAR} SAR
                      </span>
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className="w-full max-w-[36px] bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-xl transition-all group-hover:brightness-125"
                      />
                      <span className="text-[10px] text-slate-400 font-bold block truncate">{item.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-2">
                <span className="text-xs text-slate-400 block font-bold">الجولة الأكثر طلباً:</span>
                <h5 className="text-sm font-bold text-amber-300">أسرار الحجر والمقابر النبطية</h5>
                <p className="text-xs text-slate-400">حازت على 65% من إجمالي الحجوزات هذا الشهر.</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-2">
                <span className="text-xs text-slate-400 block font-bold">معدل إلغاء الحجوزات:</span>
                <h5 className="text-lg font-mono font-bold text-emerald-400">2.1% (منخفض جداً)</h5>
                <p className="text-xs text-slate-400">يعكس ثقة السياح والتزام المرشد بالمواعيد.</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-2">
                <span className="text-xs text-slate-400 block font-bold">أبرز جنسيات الزوار:</span>
                <h5 className="text-sm font-bold text-white">أمريكا، ألمانيا، الكويت، اليابان</h5>
                <p className="text-xs text-slate-400">تنوع عالي يطلب الشرح بالإنجليزية والعربية.</p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 8: AI GUIDE ASSISTANT */}
        {activeTab === 'ai' && (
          <div className="space-y-6">
            
            <div className="bg-gradient-to-r from-slate-900 via-amber-950/80 to-slate-900 border border-amber-500/50 rounded-3xl p-6 shadow-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <Bot className="w-5 h-5 text-amber-400" />
                <span>المساعد الذكي للمرشد السياحي (AI Tour Assistant)</span>
              </div>
              <h3 className="text-2xl font-black text-white">خوارزميات الذكاء الاصطناعي لاقتراح المسارات وتحسين تجربة الزائر</h3>
              <p className="text-xs text-slate-300 max-w-2xl">
                يحلل المساعد التفاعلات والطقس ومواعيد الرحلات الجوية في العلا والرياض لتقديم مقترحات ذكية لربحية أعلى ورضا أفضل.
              </p>
              <div className="text-[11px] text-amber-300/80 bg-amber-950/60 p-2 rounded-xl border border-amber-500/30 inline-block font-mono">
                ℹ️ جميع الاقتراحات والتوصيات مبنية على بيانات محاكاة تجريبية (Demo AI Engine).
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>اقتراح مسار جديد: "جولة الحرة الفلكية"</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  بناءً على طلبات حرة عويرض، نقترح إطلاق جولة غروب في المطل بمسار استكشاف صخور البركان مع تقديم العشاء النجدي.
                </p>
                <button
                  onClick={() => triggerToast('تم نسخ هيكل جولة حرة عويرض إلى مسودة الجولات!')}
                  className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs"
                >
                  اعتمد المسار وإنشاء جولة
                </button>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>تعديل أفضل وقت للانطلاق في الصيف</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  درجات الحرارة تتجاوز 40°م في منتصف النهار بالعلا. يُوصى بتأخير جولات الحجر النبطية لتنطلق في 07:30 صباحاً لراحة الزوار.
                </p>
                <button
                  onClick={() => triggerToast('تمت إعادة جدولة أوقات الجولات الصباحية بنجاح!')}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs"
                >
                  تطبيق التوقيت الموصى به
                </button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 9: NOTIFICATIONS CENTER */}
        {activeTab === 'notifications' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Bell className="w-5 h-5 text-amber-400" />
              <span>مركز الإشعارات والتنبيهات (Notifications Center)</span>
            </h3>

            <div className="space-y-3">
              {notifications.map(notif => (
                <div key={notif.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
                  <div className="p-2 bg-amber-950/80 rounded-xl border border-amber-500/30 text-amber-300 shrink-0 mt-0.5">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{notif.title}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{notif.time}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{notif.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 10: DOCUMENTS & VERIFICATION */}
        {activeTab === 'documents' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>التراخيص والاعتمادات الرسمية (Documents & Verification)</span>
              </h3>
              <p className="text-xs text-slate-400">سجل تراخيص وزارة السياحة والشهادات الصحية والإسعافات الأولية</p>
            </div>

            <div className="space-y-4">
              {documents.map(doc => (
                <div key={doc.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>{doc.title}</span>
                    </h5>
                    <p className="text-slate-400 font-mono">رقم المستند: {doc.docNumber} • تاريخ الانتهاء: {doc.expiryDate}</p>
                  </div>

                  <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-3 py-1 rounded-full">
                    ✓ {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 11: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-xs">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <Settings className="w-5 h-5 text-amber-400" />
              <span>إعدادات حساب المرشد والتفضيلات (Guide Settings)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <h5 className="font-bold text-white text-sm">إعدادات الحساب والإشعارات</h5>
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-amber-400" />
                  <span>تفعيل إشعارات طلبات الحجز الفورية عبر SMS</span>
                </label>
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-amber-400" />
                  <span>تنبيهات المساعد الذكي AI لاقتناص فرص الموسم</span>
                </label>
              </div>

              <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <h5 className="font-bold text-white text-sm">إعدادات الخصوصية والقبول</h5>
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-amber-400" />
                  <span>إبراز رقم الجوال للسياح أصحاب الحجوزات المؤكدة فقط</span>
                </label>
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-amber-400" />
                  <span>القبول التلقائي للحجوزات الفردية</span>
                </label>
              </div>

            </div>

            <button
              onClick={() => triggerToast('تم حفظ جميع إعدادات المرشد السياحي بنجاح!')}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs"
            >
              حفظ جميع الإعدادات
            </button>
          </div>
        )}

        {/* MODAL 1: ADD NEW TOUR MODAL */}
        <AnimatePresence>
          {showAddTourModal && (
            <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-amber-500/50 rounded-3xl p-6 max-w-2xl w-full shadow-2xl space-y-4 text-xs max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-amber-400" />
                    <span>إضافة جولة سياحية جديدة</span>
                  </h4>
                  <button onClick={() => setShowAddTourModal(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateTour} className="space-y-4">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">عنوان الجولة السياحية:</label>
                    <input
                      type="text"
                      required
                      value={newTourForm.title}
                      onChange={e => setNewTourForm({ ...newTourForm, title: e.target.value })}
                      placeholder="مثال: رحلة استكشاف آثار العلا والمقابر النبطية"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">المدينة:</label>
                      <input
                        type="text"
                        value={newTourForm.city}
                        onChange={e => setNewTourForm({ ...newTourForm, city: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>

                    <div>
                      <label className="text-slate-300 font-bold block mb-1">التصنيف:</label>
                      <select
                        value={newTourForm.category}
                        onChange={e => setNewTourForm({ ...newTourForm, category: e.target.value as any })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      >
                        <option value="تراث وثقافة">تراث وثقافة</option>
                        <option value="مغامرة وصحراء">مغامرة وصحراء</option>
                        <option value="سياحة بحرية">سياحة بحرية</option>
                        <option value="سياحة طعام">سياحة طعام</option>
                        <option value="طبيعة وجبال">طبيعة وجبال</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-300 font-bold block mb-1">السعر للشخص (SAR):</label>
                      <input
                        type="number"
                        value={newTourForm.priceSAR}
                        onChange={e => setNewTourForm({ ...newTourForm, priceSAR: Number(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">مدة الجولة (بالساعات):</label>
                      <input
                        type="number"
                        value={newTourForm.durationHours}
                        onChange={e => setNewTourForm({ ...newTourForm, durationHours: Number(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>

                    <div>
                      <label className="text-slate-300 font-bold block mb-1">أقصى عدد مقاعد:</label>
                      <input
                        type="number"
                        value={newTourForm.maxSeats}
                        onChange={e => setNewTourForm({ ...newTourForm, maxSeats: Number(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>

                    <div>
                      <label className="text-slate-300 font-bold block mb-1">وقت الانطلاق:</label>
                      <input
                        type="text"
                        value={newTourForm.departureTime}
                        onChange={e => setNewTourForm({ ...newTourForm, departureTime: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-300 font-bold block mb-1">نقطة البداية والالتقاء:</label>
                      <input
                        type="text"
                        value={newTourForm.startPoint}
                        onChange={e => setNewTourForm({ ...newTourForm, startPoint: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>

                    <div>
                      <label className="text-slate-300 font-bold block mb-1">نقطة النهاية:</label>
                      <input
                        type="text"
                        value={newTourForm.endPoint}
                        onChange={e => setNewTourForm({ ...newTourForm, endPoint: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">وصف الجولة والأنشطة:</label>
                    <textarea
                      rows={3}
                      value={newTourForm.description}
                      onChange={e => setNewTourForm({ ...newTourForm, description: e.target.value })}
                      placeholder="اكتب تفاصيل الرحلة والمعالم المزورة..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:border-amber-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setShowAddTourModal(false)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-4 py-2 rounded-xl"
                    >
                      إلغاء
                    </button>

                    <button
                      type="submit"
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-5 py-2 rounded-xl shadow-lg shadow-amber-950/60"
                    >
                      إطلاق الجولة
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* MODAL 2: BOOKING DETAILS MODAL */}
        <AnimatePresence>
          {selectedBookingForDetails && (
            <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-amber-500/50 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 text-xs"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-300 font-bold text-sm">#{selectedBookingForDetails.id}</span>
                    <span className="text-white font-bold">تفاصيل طلب الحجز</span>
                  </div>
                  <button onClick={() => setSelectedBookingForDetails(null)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">اسم السائح والجنسية:</span>
                    <h5 className="font-bold text-white text-sm">{selectedBookingForDetails.touristName} ({selectedBookingForDetails.touristNationality})</h5>
                    <p className="text-slate-400 font-mono">{selectedBookingForDetails.touristPhone}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-slate-300">
                    <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">تاريخ الجولة:</span>
                      <span className="font-mono font-bold text-white">{selectedBookingForDetails.tourDate}</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">عدد المرافقين:</span>
                      <span className="font-mono font-bold text-amber-300">{selectedBookingForDetails.guestsCount} زوار</span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 block">نقطة الالتقاء المحددة:</span>
                    <p className="text-emerald-300 font-bold">{selectedBookingForDetails.meetingPoint}</p>
                  </div>

                  {selectedBookingForDetails.notes && (
                    <div className="bg-amber-950/40 p-3 rounded-2xl border border-amber-500/30 text-amber-200">
                      <span className="text-[10px] font-bold block mb-0.5">ملاحظات السائح:</span>
                      <p>{selectedBookingForDetails.notes}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedBookingForDetails(null)}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-4 py-2 rounded-xl"
                  >
                    إغلاق
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
