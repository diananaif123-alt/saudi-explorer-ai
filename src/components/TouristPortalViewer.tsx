import React, { useState } from 'react';
import { 
  Luggage, 
  User, 
  Heart, 
  Calendar, 
  Bell, 
  Clock, 
  Settings, 
  Sparkles, 
  Compass, 
  Sun, 
  Award, 
  MapPin, 
  DollarSign, 
  Users, 
  Plus, 
  Check, 
  Edit3, 
  Save, 
  Shield, 
  Lock, 
  LogOut, 
  CheckCircle2, 
  Star, 
  Building2, 
  Utensils, 
  Hotel, 
  ChevronRight, 
  Sliders, 
  Globe, 
  Moon, 
  Camera, 
  Landmark, 
  ShoppingBag, 
  Coffee, 
  Trophy, 
  Crown,
  Search,
  CheckSquare
} from 'lucide-react';

import { 
  initialTouristProfile, 
  availableInterestsList, 
  demoTripsList, 
  demoNotificationsList, 
  demoActivityLogList,
  TouristProfile,
  TripRecord,
  TouristNotification,
  ActivityLogItem
} from '../data/touristPortalData';

export const TouristPortalViewer: React.FC = () => {
  // Current Active Sub-tab inside Tourist Portal
  const [activeTab, setActiveTab] = useState<'dashboard' | 'profile' | 'interests' | 'planner' | 'favorites' | 'trips' | 'notifications' | 'activity' | 'settings'>('dashboard');

  // Interactive Tourist Profile State
  const [profile, setProfile] = useState<TouristProfile>(initialTouristProfile);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);

  // Selected Interests State
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['heritage', 'nature', 'luxury', 'dining']);

  // Selected Trip Budget Category
  const [selectedBudget, setSelectedBudget] = useState<'اقتصادي' | 'متوسط' | 'فاخر' | 'فاخر جداً'>('فاخر');

  // Trip Info Planner Form State
  const [plannerForm, setPlannerForm] = useState({
    startCity: 'الرياض',
    targetCity: 'العلا',
    daysCount: 4,
    travelersCount: 2,
    kidsCount: 0,
    arrivalDate: '2026-10-15',
    departureDate: '2026-10-19'
  });

  // Notifications State
  const [notifications, setNotifications] = useState<TouristNotification[]>(demoNotificationsList);

  // Settings State
  const [appThemeMode, setAppThemeMode] = useState<'light' | 'dark'>('light');
  const [pushNotifsEnabled, setPushNotifsEnabled] = useState<boolean>(true);
  const [emailNotifsEnabled, setEmailNotifsEnabled] = useState<boolean>(true);

  // Toggle Interest
  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  // Save Profile Changes
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
    alert('تم حفظ بيانات الملف الشخصي بنجاح! ✅');
  };

  // Mark notification read
  const markNotifRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  return (
    <section id="tourist-portal-section" className="py-12 bg-[#FAF8F5] text-slate-800 relative border-t-2 border-[#0D7A5F]/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Phase 6 Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D7A5F] to-[#064E3B] flex items-center justify-center text-white shadow-md">
                <Luggage className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#0D7A5F] font-bold block">بوابة السائح الذكي (Phase 6 Tourist Experience)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  لوحة السائح وإدارة الرحلة <span className="text-[#0D7A5F]">Smart Tourist Portal</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#E6F4F0] px-4 py-2 rounded-xl border border-emerald-300 text-[#0D7A5F] text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Full Interactive Tourist Suite (Demo Data Mode)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
            أهلاً بك في البوابة الذكية المخصصة للسياح. تتيح لك هذه الشاشة إدارة تفضيلات سفرك، ميزانية الرحلة، الجواز السياحي الرقمي، وسجل الرحلات والإشعارات التفاعلية.
          </p>

          {/* Tourist Portal Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 relative z-10">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Luggage className="w-3.5 h-3.5" />
              <span>1. لوحة التحكم (Dashboard)</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'profile' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>2. الملف الشخصي (Profile)</span>
            </button>

            <button
              onClick={() => setActiveTab('interests')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'interests' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>3. الاهتمامات ({selectedInterests.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('planner')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'planner' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>4. ميزانية ومعلومات الرحلة</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'favorites' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>5. المفضلة</span>
            </button>

            <button
              onClick={() => setActiveTab('trips')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'trips' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>6. سجل الرحلات</span>
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'notifications' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>7. الإشعارات ({notifications.filter(n=>!n.isRead).length})</span>
            </button>

            <button
              onClick={() => setActiveTab('activity')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'activity' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>8. سجل النشاط</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'settings' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>9. الإعدادات</span>
            </button>
          </div>
        </div>

        {/* SUB-VIEW 1: TOURIST DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Welcome & Digital Passport Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 flex items-center gap-4">
                <img src={profile.avatar} alt="Profile" className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0D7A5F] shadow-md" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#0D7A5F] block">أهلاً بك مجدداً في المملكة 👋</span>
                  <h3 className="text-xl font-black text-slate-900">{profile.name}</h3>
                  <p className="text-xs text-slate-500">الجنسية: {profile.nationality} | جواز السفر السياحي الرقمي: <strong className="text-slate-800 font-mono">{profile.passportNumber}</strong></p>
                  
                  <div className="flex items-center gap-3 pt-1">
                    <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-lg flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{profile.rewardPoints} نقطة مكافآت</span>
                    </span>
                    <span className="bg-emerald-100 text-[#0D7A5F] text-xs font-black px-3 py-1 rounded-lg">
                      تاريخ الوصول: {profile.arrivalDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Weather Widget Demo */}
              <div className="bg-[#E6F4F0] p-4 rounded-2xl border border-emerald-300 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#0D7A5F] font-bold">
                  <span className="flex items-center gap-1">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>الطقس المباشر في العلا</span>
                  </span>
                  <span className="font-mono font-black text-sm">28°C</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  سماء صافية ورياح خفيفة. طقس مثالي لاستكشاف جبل الفيل والحِجر اليوم.
                </p>
              </div>
            </div>

            {/* Current Active Trip Banner */}
            {demoTripsList.filter(t => t.status === 'current').map((trip) => (
              <div key={trip.id} className="bg-gradient-to-r from-[#0D7A5F] to-[#064E3B] text-white rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-right">
                  <span className="bg-[#D4AF37] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                    الرحلة الحالية المباشرة 🟢
                  </span>
                  <h4 className="text-xl font-black">{trip.title}</h4>
                  <p className="text-xs text-emerald-100 max-w-xl leading-relaxed">{trip.summary}</p>
                  <div className="flex items-center gap-4 text-xs pt-1">
                    <span>📍 المدينة: {trip.city}</span>
                    <span>📅 المدة: {trip.startDate} إلى {trip.endDate}</span>
                    <span>👥 المسافرون: {trip.travelersCount}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveTab('planner')}
                  className="px-6 py-3 bg-[#D4AF37] text-slate-900 rounded-xl font-black text-xs shadow-md hover:bg-amber-400 transition-all whitespace-nowrap"
                >
                  استعراض الخطة والأنشطة ⚡
                </button>
              </div>
            ))}

            {/* Tourist Digital Badges Showcase */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4">
              <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span>أوسمة الجواز السياحي الرقمي (Digital Passport Badges):</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {profile.passportBadges.map((badge, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs">{badge.title}</h5>
                      <span className="text-[10px] text-slate-400 block">تم الاكتساب: {badge.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* SUB-VIEW 2: PROFILE EDIT & VIEW */}
        {activeTab === 'profile' && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900">الملف الشخصي للسائح</h3>
                <p className="text-xs text-slate-500">إدارة معلوماتك الأساسية وتاريخ السفر واللغة المعتمدة.</p>
              </div>

              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="px-4 py-2 bg-[#E6F4F0] text-[#0D7A5F] rounded-xl text-xs font-black flex items-center gap-1.5 hover:bg-emerald-100 transition-all"
              >
                {isEditingProfile ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                <span>{isEditingProfile ? 'إلغاء التعديل' : 'تعديل البيانات'}</span>
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs font-bold">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-700 block">الاسم الكامل:</label>
                  <input
                    type="text"
                    disabled={!isEditingProfile}
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 disabled:opacity-80"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">البريد الإلكتروني:</label>
                  <input
                    type="email"
                    disabled={!isEditingProfile}
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 disabled:opacity-80"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">رقم الجوال:</label>
                  <input
                    type="text"
                    disabled={!isEditingProfile}
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 disabled:opacity-80"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">الجنسية:</label>
                  <input
                    type="text"
                    disabled={!isEditingProfile}
                    value={profile.nationality}
                    onChange={(e) => setProfile({ ...profile, nationality: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 disabled:opacity-80"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">تاريخ الوصول:</label>
                  <input
                    type="date"
                    disabled={!isEditingProfile}
                    value={profile.arrivalDate}
                    onChange={(e) => setProfile({ ...profile, arrivalDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 disabled:opacity-80"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">تاريخ المغادرة:</label>
                  <input
                    type="date"
                    disabled={!isEditingProfile}
                    value={profile.departureDate}
                    onChange={(e) => setProfile({ ...profile, departureDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 disabled:opacity-80"
                  />
                </div>
              </div>

              {isEditingProfile && (
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0D7A5F] text-white rounded-xl font-black text-sm shadow-md hover:bg-[#064E3B] transition-all"
                >
                  حفظ التغيرات الآن
                </button>
              )}
            </form>
          </div>
        )}

        {/* SUB-VIEW 3: INTERESTS SELECTION */}
        {activeTab === 'interests' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">اهتمامات السائح لتشغيل الذكاء الاصطناعي (Tourist Interests)</h3>
              <p className="text-xs text-slate-500">حدد اهتماماتك المفضلة لتوليد خطط سفر مخصصة بدقة عالية بواسطة الذكاء الاصطناعي.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {availableInterestsList.map((interest) => {
                const isSelected = selectedInterests.includes(interest.id);
                return (
                  <div
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected 
                        ? 'border-[#0D7A5F] bg-[#E6F4F0] text-[#0D7A5F] font-black shadow-sm ring-2 ring-emerald-200' 
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs">{interest.name}</span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${isSelected ? 'bg-[#0D7A5F] text-white' : 'border border-slate-300'}`}>
                      {isSelected ? '✓' : '+'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SUB-VIEW 4: TRIP BUDGET & DETAILS PLANNER */}
        {activeTab === 'planner' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">تحديد ميزانية ومعلومات الرحلة</h3>
              <p className="text-xs text-slate-500">تخصيص النطاق المالي وعدد الأشخاص للحصول على توصيات دقيقة.</p>
            </div>

            {/* Budget Category Selector */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-800 block">1. اختر ميزانية الرحلة (Budget Level):</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(['اقتصادي', 'متوسط', 'فاخر', 'فاخر جداً'] as const).map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      selectedBudget === budget 
                        ? 'border-[#0D7A5F] bg-[#0D7A5F] text-white font-black shadow-md' 
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs block font-bold">{budget}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Info Form */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="text-xs font-black text-slate-800 block">2. تفاصيل مدة ومكان السفر:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold">
                <div className="space-y-1">
                  <label className="text-slate-700 block">مدينة الانطلاق:</label>
                  <input
                    type="text"
                    value={plannerForm.startCity}
                    onChange={(e) => setPlannerForm({ ...plannerForm, startCity: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">المدينة المستهدفة:</label>
                  <input
                    type="text"
                    value={plannerForm.targetCity}
                    onChange={(e) => setPlannerForm({ ...plannerForm, targetCity: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">عدد الأيام:</label>
                  <input
                    type="number"
                    min={1}
                    value={plannerForm.daysCount}
                    onChange={(e) => setPlannerForm({ ...plannerForm, daysCount: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">عدد المسافرين البالغين:</label>
                  <input
                    type="number"
                    min={1}
                    value={plannerForm.travelersCount}
                    onChange={(e) => setPlannerForm({ ...plannerForm, travelersCount: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">عدد الأطفال:</label>
                  <input
                    type="number"
                    min={0}
                    value={plannerForm.kidsCount}
                    onChange={(e) => setPlannerForm({ ...plannerForm, kidsCount: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  />
                </div>
              </div>

              <button
                onClick={() => alert('تم تحديث خطة وميزانية الرحلة بنجاح! ⚡')}
                className="w-full py-3 bg-[#0D7A5F] text-white rounded-xl font-black text-xs shadow-md hover:bg-[#064E3B] transition-all mt-4"
              >
                تطبيق الإعدادات على الذكاء الاصطناعي ✨
              </button>
            </div>
          </div>
        )}

        {/* SUB-VIEW 5: FAVORITES MANAGER */}
        {activeTab === 'favorites' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">المفضلة المحفوظة (Saved Items)</h3>
              <p className="text-xs text-slate-500">الفنادق، المطاعم والفعاليات المحفوظة للعودة إليها بسهولة.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                <span className="text-[10px] bg-emerald-100 text-[#0D7A5F] font-black px-2 py-0.5 rounded">فندق فاخر</span>
                <h4 className="font-black text-slate-900 text-sm">منتجع هابيتاس العلا</h4>
                <p className="text-xs text-slate-500">العلا - وادي أشار</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                <span className="text-[10px] bg-amber-100 text-amber-900 font-black px-2 py-0.5 rounded">مطعم تراثي</span>
                <h4 className="font-black text-slate-900 text-sm">مطعم سهيل النبيل</h4>
                <p className="text-xs text-slate-500">الرياض - حي العقيق</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                <span className="text-[10px] bg-sky-100 text-sky-900 font-black px-2 py-0.5 rounded">فعالية</span>
                <h4 className="font-black text-slate-900 text-sm">مهرجان شتاء طنطورة</h4>
                <p className="text-xs text-slate-500">العلا - البلدة القديمة</p>
              </div>
            </div>
          </div>
        )}

        {/* SUB-VIEW 6: TRIPS HISTORY */}
        {activeTab === 'trips' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">سجل الرحلات (Current, Upcoming & Past Trips)</h3>
            </div>

            <div className="space-y-4">
              {demoTripsList.map((trip) => (
                <div key={trip.id} className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-4">
                    <img src={trip.image} alt={trip.title} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-black text-slate-900 text-sm">{trip.title}</h4>
                      <p className="text-slate-500">📍 {trip.city} | 📅 {trip.startDate} - {trip.endDate}</p>
                      <span className="text-[10px] font-bold text-[#0D7A5F]">فئة الميزانية: {trip.budgetCategory}</span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full font-black text-[10px] ${
                    trip.status === 'current' ? 'bg-emerald-100 text-[#0D7A5F]' :
                    trip.status === 'upcoming' ? 'bg-amber-100 text-amber-900' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {trip.status === 'current' ? 'رحلة جارية' : trip.status === 'upcoming' ? 'قادمة' : 'مكتملة'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-VIEW 7: NOTIFICATIONS */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900">مركز الإشعارات</h3>
              <button 
                onClick={() => setNotifications(notifications.map(n => ({ ...n, isRead: true })))}
                className="text-xs font-bold text-[#0D7A5F] hover:underline"
              >
                تحديد الكل كمقروء
              </button>
            </div>

            <div className="space-y-3">
              {notifications.map((notif) => (
                <div 
                  key={notif.id}
                  onClick={() => markNotifRead(notif.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    notif.isRead ? 'bg-slate-50 border-slate-200' : 'bg-[#E6F4F0] border-emerald-300 font-bold'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-black text-slate-900">{notif.title}</span>
                    <span className="text-[10px] text-slate-400">{notif.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-600">{notif.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-VIEW 8: ACTIVITY LOG */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">سجل النشاط والبحث</h3>
            </div>

            <div className="space-y-3 text-xs">
              {demoActivityLogList.map((log) => (
                <div key={log.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">{log.action}: {log.targetName}</span>
                    <span className="text-[10px] text-slate-400">{log.timestamp}</span>
                  </div>
                  <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">
                    {log.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-VIEW 9: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">إعدادات التطبيق والخصوصية</h3>
            </div>

            <div className="space-y-4 text-xs font-bold">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-slate-900 block">لغة الواجهة (App Language)</span>
                  <span className="text-[10px] text-slate-500">العربية والإنجليزية</span>
                </div>
                <button className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-slate-800">العربية (AR)</button>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-slate-900 block">إشعارات التطبيق (Push Notifications)</span>
                </div>
                <input
                  type="checkbox"
                  checked={pushNotifsEnabled}
                  onChange={(e) => setPushNotifsEnabled(e.target.checked)}
                  className="w-4 h-4 text-[#0D7A5F] rounded"
                />
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-slate-900 block">تحديثات البريد الإلكتروني</span>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotifsEnabled}
                  onChange={(e) => setEmailNotifsEnabled(e.target.checked)}
                  className="w-4 h-4 text-[#0D7A5F] rounded"
                />
              </div>

              <button 
                onClick={() => alert('تم حفظ الإعدادات بنجاح!')}
                className="w-full py-3 bg-[#0D7A5F] text-white rounded-xl font-black shadow"
              >
                حفظ الإعدادات
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
