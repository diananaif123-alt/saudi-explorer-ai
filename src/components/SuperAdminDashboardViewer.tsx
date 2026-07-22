import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Users,
  Building2,
  MapPin,
  TrendingUp,
  Settings,
  Database,
  Lock,
  Bell,
  BarChart3,
  Bot,
  FileText,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Edit,
  Trash2,
  KeyRound,
  Download,
  Plus,
  Radio,
  Sparkles,
  AlertTriangle,
  RefreshCw,
  Server,
  Globe,
  Smartphone,
  Eye,
  Sliders,
  Check,
  X,
  Layers,
  ChevronRight,
  ShieldAlert,
  UserCheck,
  Briefcase,
  Compass,
  Calendar,
  Activity,
  Award,
  FileSpreadsheet,
  Cpu,
  Zap,
  HardDrive
} from 'lucide-react';

import {
  initialSuperAdminMetrics,
  demoPlatformUsers,
  demoRoleDefinitions,
  demoContentItems,
  initialAIConfig,
  demoSystemAuditLogs,
  demoSecurityRecords,
  demoBackupsList,
  PlatformUser,
  UserRole,
  SystemRoleDefinition,
  PlatformContentItem,
  AIModelConfig,
  SystemAuditLog,
  SecurityLoginRecord,
  BackupRecord
} from '../data/superAdminData';

export const SuperAdminDashboardViewer: React.FC = () => {
  // Navigation Active Tab State
  const [activeTab, setActiveTab] = useState<
    | 'executive'
    | 'users'
    | 'rbac'
    | 'content'
    | 'platform'
    | 'ai_config'
    | 'analytics'
    | 'notifications'
    | 'security'
    | 'backup'
    | 'settings'
    | 'audit_logs'
  >('executive');

  // Core Data States
  const [metrics] = useState(initialSuperAdminMetrics);
  const [users, setUsers] = useState<PlatformUser[]>(demoPlatformUsers);
  const [roles, setRoles] = useState<SystemRoleDefinition[]>(demoRoleDefinitions);
  const [contentList, setContentList] = useState<PlatformContentItem[]>(demoContentItems);
  const [aiConfig, setAiConfig] = useState<AIModelConfig>(initialAIConfig);
  const [auditLogs, setAuditLogs] = useState<SystemAuditLog[]>(demoSystemAuditLogs);
  const [loginRecords] = useState<SecurityLoginRecord[]>(demoSecurityRecords);
  const [backups, setBackups] = useState<BackupRecord[]>(demoBackupsList);

  // User Management Filters & Modals
  const [userSearch, setUserSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('الكل');
  const [selectedUserModal, setSelectedUserModal] = useState<PlatformUser | null>(null);

  // Role Creation Modal State
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRolePerms, setNewRolePerms] = useState('');

  // Notification Dispatch Form
  const [notifTarget, setNotifTarget] = useState<'جميع المستخدمين' | 'فئة محددة' | 'مدينة معينة'>('جميع المستخدمين');
  const [notifTitle, setNotifTitle] = useState('');
  const [notifBody, setNotifBody] = useState('');

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Handler: Toggle User Status
  const handleToggleUserStatus = (userId: string) => {
    setUsers(prev =>
      prev.map(u => {
        if (u.id === userId) {
          const nextStatus = u.status === 'نشط' ? 'معطل' : 'نشط';
          triggerToast(`تم تغير حالة حساب ${u.name} إلى "${nextStatus}"`);
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );
  };

  // Handler: Reset Password (Demo)
  const handleResetPassword = (userName: string) => {
    triggerToast(`تم ارسال رابط إعادة تعيين كلمة المرور إلى البريد الإلكتروني للمستخدم: ${userName}`);
  };

  // Handler: Add New Role
  const handleCreateRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoleName) return;
    const newRoleObj: SystemRoleDefinition = {
      id: `role-${Date.now()}`,
      roleName: newRoleName,
      usersAssignedCount: 0,
      permissions: newRolePerms ? newRolePerms.split('،').map(p => p.trim()) : ['صلاحيات القراءة فقط'],
      isCustomRole: true
    };
    setRoles(prev => [...prev, newRoleObj]);
    setShowAddRoleModal(false);
    setNewRoleName('');
    setNewRolePerms('');
    triggerToast(`تم إنشاء الدور الجديد "${newRoleName}" وتحديد الصلاحيات المخصصة.`);
  };

  // Handler: Send Broadcast Notification
  const handleSendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifTitle) return;
    triggerToast(`تم إرسال الإشعار العاجل بنجاح إلى (${notifTarget}): "${notifTitle}"`);
    setNotifTitle('');
    setNotifBody('');
  };

  // Handler: Create Instant Backup
  const handleCreateBackup = () => {
    const newBkp: BackupRecord = {
      id: `bkp-${Date.now()}`,
      backupName: `Full_System_Snapshot_${new Date().toISOString().slice(0, 10).replace(/-/g, '_')}_Manual.bak`,
      createdAt: new Date().toLocaleString('ar-SA'),
      fileSizeMB: 4890,
      type: 'يدوي مكتمل',
      status: 'جاهز للاستعادة'
    };
    setBackups(prev => [newBkp, ...prev]);
    triggerToast('تم إنشاء نسخة احتياطية كاملة للمنصة بنجاح وحفظها في التخزين المشفر.');
  };

  // Filtered Users
  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.includes(userSearch) || u.email.includes(userSearch) || u.city.includes(userSearch);
    const matchesRole = roleFilter === 'الكل' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <section id="phase15-super-admin-section" className="py-12 bg-slate-950 text-slate-100 border-t border-purple-900/40 relative overflow-hidden dir-rtl" dir="rtl">
      
      {/* Background Deep Violet & Gold Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Super Admin Banner Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/50 text-purple-300 text-xs font-bold mb-3 shadow-xl shadow-purple-950/80"
          >
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>المرحلة 15 — لوحة مدير النظام العليا (Super Admin & System Administration)</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center gap-3">
            <span>مركز التحكم والقيادة الشامل للمنصة</span>
            <span className="text-amber-400 text-sm font-bold bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded-full hidden sm:inline-block">
              SUPER ADMIN HQ
            </span>
          </h2>
          <p className="mt-2 text-slate-400 max-w-3xl mx-auto text-xs sm:text-sm">
            أعلى صلاحيات التحكم بالمنصة الوطنية: إدارة جميع المستخدمين والأدوار، ضبط محركات الذكاء الاصطناعي، الأمن، والنسخ الاحتياطي.
          </p>
        </div>

        {/* Global Action Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-purple-950 border border-purple-400/80 text-purple-200 p-4 rounded-2xl mb-6 shadow-2xl flex items-center justify-between z-50 relative"
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

        {/* Admin Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900/95 p-2 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <button
            onClick={() => setActiveTab('executive')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'executive'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>اللوحة التنفيذية Executive</span>
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'users'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Users className="w-4 h-4 text-amber-300" />
            <span>إدارة المستخدمين Users ({users.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('rbac')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'rbac'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>الصلاحيات RBAC ({roles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'content'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>إدارة المحتوى Content</span>
          </button>

          <button
            onClick={() => setActiveTab('platform')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'platform'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>إدارة عناصر المنصة</span>
          </button>

          <button
            onClick={() => setActiveTab('ai_config')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'ai_config'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bot className="w-4 h-4 text-amber-300" />
            <span>إعدادات الذكاء AI</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>التحليلات الشاملة</span>
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>مركز الإشعارات</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'security'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>مركز الأمان Security</span>
          </button>

          <button
            onClick={() => setActiveTab('backup')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'backup'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>النسخ الاحتياطي Backup</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>إعدادات النظام</span>
          </button>

          <button
            onClick={() => setActiveTab('audit_logs')}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'audit_logs'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-950/80 font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>سجل العمليات Audit Logs</span>
          </button>

        </div>

        {/* TAB 1: EXECUTIVE DASHBOARD OVERVIEW */}
        {activeTab === 'executive' && (
          <div className="space-y-6">
            
            <div className="bg-gradient-to-r from-slate-900 via-purple-950/60 to-slate-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-purple-300 font-mono font-bold tracking-wider">
                    SUPER ADMIN CENTRAL OVERVIEW — SYSTEM HEALTH: {metrics.systemStatus}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  مؤشرات منصة SAUDI EXPLORER AI الشاملة
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  عرض تحليلي لحظي لجميع الحسابات، النشاط التشغيلي، البنية التحتية والمحتوى الرقمي بجميع أرجاء المنصة.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => triggerToast('تم استخراج تقرير حالة المنصة الموحد بصيغة PDF')}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-purple-950/60"
                >
                  <Download className="w-4 h-4" />
                  <span>تصدير التقرير الشامل</span>
                </button>
              </div>
            </div>

            {/* 15 Comprehensive Metric Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-purple-400 font-bold block">إجمالي المسجلين</span>
                <div className="text-2xl font-black text-white font-mono">{metrics.totalUsers.toLocaleString()}</div>
                <span className="text-[10px] text-emerald-400 font-bold">▲ +18.5% شهرياً</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">السياح الدوليون</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{metrics.touristsCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">حساب سائح نشط</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-emerald-400 font-bold block">المواطنون والمقيمون</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">{metrics.citizensCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">سياحة محلية</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">المستثمرون</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{metrics.investorsCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">مستثمر معتمد</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-purple-400 font-bold block">المنشآت السياحية</span>
                <div className="text-2xl font-black text-white font-mono">{metrics.tourismFacilitiesCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">فنادق ومطاعم</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-emerald-400 font-bold block">المرشدون السياحيون</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">{metrics.tourGuidesCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">مرشد مرخص</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">مسؤولو وزارة السياحة</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{metrics.ministryUsersCount}</div>
                <span className="text-[10px] text-slate-400">حساب هيئة مخصص</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-purple-400 font-bold block">Super Admins</span>
                <div className="text-2xl font-black text-purple-300 font-mono">{metrics.superAdminCount}</div>
                <span className="text-[10px] text-emerald-400 font-bold">صلاحية قصوى</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-emerald-400 font-bold block">إجمالي الحجوزات</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">{metrics.totalBookings.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">حجز مؤكد</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">إجمالي الزيارات الرقمية</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{metrics.totalPageVisits.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">مشاهدة صفحة</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-bold block">عدد المدن المغطاة</span>
                <div className="text-2xl font-black text-white font-mono">{metrics.citiesCount} مدينة</div>
                <span className="text-[10px] text-emerald-400 font-bold">تغطية 100% للمملكة</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">الفعاليات المدرجة</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{metrics.eventsCount} فعالية</div>
                <span className="text-[10px] text-slate-400">مواسم ومهرجانات</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-bold block">الفنادق والمنتجعات</span>
                <div className="text-2xl font-black text-white font-mono">{metrics.hotelsCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">منشأة إيواء</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-emerald-400 font-bold block">المطاعم والمقاهي</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">{metrics.restaurantsCount.toLocaleString()}</div>
                <span className="text-[10px] text-slate-400">مطعم مرخص</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-1">
                <span className="text-[11px] text-amber-400 font-bold block">المعالم السياحية</span>
                <div className="text-2xl font-black text-amber-300 font-mono">{metrics.attractionsCount} موقع</div>
                <span className="text-[10px] text-emerald-400 font-bold">تراثي وطبيعي</span>
              </div>

            </div>

            {/* Infrastructure Health & Recent Admin Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-emerald-400" />
                  <span>حالة البنية التحتية والبيئة الخادمة</span>
                </h4>

                <div className="space-y-3 text-xs font-mono">
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Google Cloud Container Status:</span>
                    <span className="text-emerald-400 font-bold">● Healthy (Cloud Run Active)</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Gemini AI Models Connectivity:</span>
                    <span className="text-emerald-400 font-bold">● Latency 140ms (Gemini 1.5 Flash)</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Database & Security Shield:</span>
                    <span className="text-emerald-400 font-bold">● Protected (Zero Threat Detected)</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <span>أحدث التنبيهات الإدارية المباشرة</span>
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950 p-3 rounded-2xl border border-amber-500/30 text-amber-200 space-y-1">
                    <div className="flex justify-between font-bold">
                      <span>تنبيه أمان: محاولة دخول غير مصرح بها</span>
                      <span className="text-[10px] text-slate-400">10:14 AM</span>
                    </div>
                    <p className="text-[11px] text-slate-300">تم حظر IP مجهول حاول استخدام كلمات مرور متكررة على حساب إداري.</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-2xl border border-emerald-500/30 text-emerald-200 space-y-1">
                    <div className="flex justify-between font-bold">
                      <span>تحديث النظام: اكتمال النسخة الاحتياطية</span>
                      <span className="text-[10px] text-slate-400">03:00 AM</span>
                    </div>
                    <p className="text-[11px] text-slate-300">تمت أرشفة 4.8 GB من قواعد البيانات والمحتوى بنجاح.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: USER MANAGEMENT */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>إدارة مستخدمي المنصة الموحدة (User Management)</span>
                  </h3>
                  <p className="text-xs text-slate-400">بحث، تصفية، تعديل أدوار، تفعيل وتجميد الحسابات وإعادة تعيين كلمة المرور.</p>
                </div>

                <button
                  onClick={() => triggerToast('افتح نافذة تسجيل مستخدم جديد تجريبياً')}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-purple-950/60"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة مستخدم جديد</span>
                </button>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-wrap items-center gap-4 text-xs">
                
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                  <input
                    type="text"
                    value={userSearch}
                    onChange={e => setUserSearch(e.target.value)}
                    placeholder="ابحث باسم المستخدم، البريد، أو المدينة..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-9 pl-4 py-2.5 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-bold">تصفية حسب الدور:</span>
                  <select
                    value={roleFilter}
                    onChange={e => setRoleFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="الكل">جميع الأدوار</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Ministry of Tourism">Ministry of Tourism</option>
                    <option value="Tour Guide">Tour Guide</option>
                    <option value="Tourism Business">Tourism Business</option>
                    <option value="Investor">Investor</option>
                    <option value="Citizen">Citizen</option>
                    <option value="Tourist">Tourist</option>
                  </select>
                </div>

              </div>

              {/* Users Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">المستخدم</th>
                      <th className="p-3">الدور / الحساب</th>
                      <th className="p-3">المدينة</th>
                      <th className="p-3">الحالة</th>
                      <th className="p-3">تاريخ التسجيل</th>
                      <th className="p-3">آخر نشاط</th>
                      <th className="p-3 text-center">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredUsers.map(user => (
                      <tr key={user.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 font-bold text-white flex items-center gap-2.5">
                          <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover border border-slate-700" />
                          <div>
                            <div>{user.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{user.email}</div>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="bg-purple-950/80 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-full text-[10px] font-bold">
                            {user.role}
                          </span>
                        </td>
                        <td className="p-3 text-slate-300 font-bold">{user.city}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              user.status === 'نشط'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                                : 'bg-red-950 text-red-300 border border-red-500/40'
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="p-3 text-slate-400 font-mono">{user.registeredDate}</td>
                        <td className="p-3 text-emerald-400 font-mono">{user.lastActive}</td>
                        <td className="p-3 text-center space-x-1 space-x-reverse">
                          <button
                            onClick={() => setSelectedUserModal(user)}
                            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 py-1 rounded-lg border border-slate-700"
                            title="عرض الملف"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleToggleUserStatus(user.id)}
                            className={`px-2 py-1 rounded-lg border ${
                              user.status === 'نشط'
                                ? 'bg-amber-950 text-amber-300 border-amber-500/40'
                                : 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                            }`}
                            title={user.status === 'نشط' ? 'تعطيل الحساب' : 'تفعيل الحساب'}
                          >
                            {user.status === 'نشط' ? <XCircle className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => handleResetPassword(user.name)}
                            className="bg-slate-800 hover:bg-slate-700 text-amber-300 px-2 py-1 rounded-lg border border-slate-700"
                            title="إعادة تعيين كلمة المرور"
                          >
                            <KeyRound className="w-3.5 h-3.5" />
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

        {/* TAB 3: ROLE & PERMISSION MANAGEMENT (RBAC) */}
        {activeTab === 'rbac' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>إدارة الأدوار والصلاحيات (Role & Permission Management - RBAC)</span>
                  </h3>
                  <p className="text-xs text-slate-400">تحديد صلاحيات الحسابات السبعة الأساسية مع إمكانية إنشاء أدوار مخصصة.</p>
                </div>

                <button
                  onClick={() => setShowAddRoleModal(true)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/60"
                >
                  <Plus className="w-4 h-4" />
                  <span>إنشاء دور مخصص جديد</span>
                </button>
              </div>

              {/* Roles Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
                {roles.map(role => (
                  <div key={role.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-amber-300">{role.roleName}</h4>
                      <span className="bg-slate-900 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-800 font-mono text-[10px]">
                        {role.usersAssignedCount} مستخدم
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-400 font-bold block">مصفوفة الصلاحيات الممنوحة:</span>
                      <ul className="space-y-1 text-slate-300">
                        {role.permissions.map((perm, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{perm}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-900 flex justify-end">
                      <button
                        onClick={() => triggerToast(`تحديث صلاحيات الدور "${role.roleName}" تجريبياً`)}
                        className="text-xs text-purple-400 hover:underline font-bold"
                      >
                        تعديل الصلاحيات ←
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

        {/* TAB 4: CONTENT MANAGEMENT */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-400" />
                    <span>إدارة المحتوى الرقمي للمنصة (Content Management System)</span>
                  </h3>
                  <p className="text-xs text-slate-400">إدارة الأخبار، المقالات، البنرات، الفيديوهات والأدلة السياحية.</p>
                </div>

                <button
                  onClick={() => triggerToast('افتح نموذج إضافة عنصر محتوى جديد')}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-amber-950/60"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة محتوى جديد</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">عنوان المحتوى</th>
                      <th className="p-3">النوع</th>
                      <th className="p-3">الكاتب/المصدر</th>
                      <th className="p-3">تاريخ النشر</th>
                      <th className="p-3">المشاهدات</th>
                      <th className="p-3">الحالة</th>
                      <th className="p-3 text-center">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {contentList.map(cnt => (
                      <tr key={cnt.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 font-bold text-white">{cnt.title}</td>
                        <td className="p-3 text-amber-300 font-bold">{cnt.type}</td>
                        <td className="p-3 text-slate-300">{cnt.author}</td>
                        <td className="p-3 font-mono text-slate-400">{cnt.publishDate}</td>
                        <td className="p-3 font-mono text-emerald-400">{cnt.views.toLocaleString()}</td>
                        <td className="p-3">
                          <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-500/40">
                            {cnt.status}
                          </span>
                        </td>
                        <td className="p-3 text-center space-x-1 space-x-reverse">
                          <button
                            onClick={() => triggerToast(`تعديل عنصر المحتوى #${cnt.id}`)}
                            className="bg-slate-800 text-slate-200 px-2 py-1 rounded-lg border border-slate-700"
                          >
                            <Edit className="w-3.5 h-3.5" />
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

        {/* TAB 5: PLATFORM MANAGEMENT */}
        {activeTab === 'platform' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-400" />
                  <span>إدارة عناصر ومكونات المنصة الأساسية (Platform Entities)</span>
                </h3>
                <p className="text-xs text-slate-400">إدارة قوائم المدن، المعالم، الفنادق، المطاعم، الفعاليات ووسائل النقل.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs">
                
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-amber-300 font-bold text-sm">المدن والوجهات</div>
                  <div className="text-xl font-black text-white font-mono">24 مدينة</div>
                  <button onClick={() => triggerToast('إدارة قائمة المدن')} className="text-emerald-400 text-[11px] font-bold hover:underline">إدارة المدن ←</button>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-amber-300 font-bold text-sm">المعالم التاريخية</div>
                  <div className="text-xl font-black text-white font-mono">680 موقع</div>
                  <button onClick={() => triggerToast('إدارة قائمة المعالم')} className="text-emerald-400 text-[11px] font-bold hover:underline">إدارة المعالم ←</button>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-amber-300 font-bold text-sm">الفنادق والإيواء</div>
                  <div className="text-xl font-black text-white font-mono">1,850 فندق</div>
                  <button onClick={() => triggerToast('إدارة الفنادق')} className="text-emerald-400 text-[11px] font-bold hover:underline">إدارة الفنادق ←</button>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-amber-300 font-bold text-sm">المطاعم والمقاهي</div>
                  <div className="text-xl font-black text-white font-mono">3,200 مطعم</div>
                  <button onClick={() => triggerToast('إدارة المطاعم')} className="text-emerald-400 text-[11px] font-bold hover:underline">إدارة المطاعم ←</button>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-amber-300 font-bold text-sm">الفعاليات الوطنية</div>
                  <div className="text-xl font-black text-white font-mono">420 فعالية</div>
                  <button onClick={() => triggerToast('إدارة الفعاليات')} className="text-emerald-400 text-[11px] font-bold hover:underline">إدارة الفعاليات ←</button>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-amber-300 font-bold text-sm">شبكات النقل والرحلات</div>
                  <div className="text-xl font-black text-white font-mono">14 مسار</div>
                  <button onClick={() => triggerToast('إدارة وسائل النقل')} className="text-emerald-400 text-[11px] font-bold hover:underline">إدارة النقل ←</button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 6: AI CONFIGURATION */}
        {activeTab === 'ai_config' && (
          <div className="space-y-6">
            
            <div className="bg-gradient-to-br from-slate-900 via-purple-950/70 to-slate-900 border border-purple-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-purple-900/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-300">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">إعدادات نماذج الذكاء الاصطناعي (AI Configurations)</h3>
                    <p className="text-xs text-slate-300">ضبط محرك AI Concierge، Smart Trip Planner، النمذجة التنبؤية والتنقل بالواقع المعزز AR.</p>
                  </div>
                </div>

                <button
                  onClick={() => triggerToast('تم حفظ إعدادات معلمات نماذج الذكاء الاصطناعي بنجاح!')}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-amber-950/50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>حفظ إعدادات AI</span>
                </button>
              </div>

              {/* AI Config Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <span className="text-amber-300 font-bold block">نموذج المساعد الذكي AI Concierge:</span>
                  <input
                    type="text"
                    value={aiConfig.aiConciergeModel}
                    onChange={e => setAiConfig({ ...aiConfig, aiConciergeModel: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <span className="text-amber-300 font-bold block">محرك تخطيط الرحلات Smart Trip Planner:</span>
                  <input
                    type="text"
                    value={aiConfig.smartPlannerModel}
                    onChange={e => setAiConfig({ ...aiConfig, smartPlannerModel: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <span className="text-amber-300 font-bold block">محرك الترجمة العصبية الفورية:</span>
                  <input
                    type="text"
                    value={aiConfig.translationEngine}
                    onChange={e => setAiConfig({ ...aiConfig, translationEngine: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <span className="text-amber-300 font-bold block">وحدة الواقع المعزز AR Framework:</span>
                  <input
                    type="text"
                    value={aiConfig.arExperienceModule}
                    onChange={e => setAiConfig({ ...aiConfig, arExperienceModule: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 7: SYSTEM ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <span>التحليلات ومؤشرات الأداء الشاملة للمنصة (System Analytics)</span>
                </h3>
                <p className="text-xs text-slate-400">تحليل الأنشطة اليومية، الصفحات والخدمات الأكثر استخداماً والتوزع الجغرافي للمستخدمين.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-amber-300">أكثر الخدمات استخداماً بالمنصة</h4>
                  <div className="space-y-2 font-mono">
                    <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span>1. المرشد الذكي AI Concierge</span>
                      <span className="text-emerald-400 font-bold">42% من الاستخدام</span>
                    </div>
                    <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span>2. مخطط الرحلات الذكي Smart Planner</span>
                      <span className="text-emerald-400 font-bold">28% من الاستخدام</span>
                    </div>
                    <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span>3. حجز المرشدين السياحيين</span>
                      <span className="text-emerald-400 font-bold">18% من الاستخدام</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-amber-300">أكثر المدن والوجهات بحثاً</h4>
                  <div className="space-y-2 font-mono">
                    <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span>1. العلا والدرعية التاريخية</span>
                      <span className="text-amber-300 font-bold">380,000 بحث/شهر</span>
                    </div>
                    <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span>2. الرياض وجدة العروس</span>
                      <span className="text-amber-300 font-bold">310,000 بحث/شهر</span>
                    </div>
                    <div className="flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span>3. السودة وقمم عسير</span>
                      <span className="text-amber-300 font-bold">190,000 بحث/شهر</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 8: NOTIFICATIONS CENTER */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Bell className="w-5 h-5 text-amber-400" />
                  <span>مركز البث والإشعارات الموحد (Broadcast Notifications Center)</span>
                </h3>
                <p className="text-xs text-slate-400">إرسال إشعارات عاجلة وتحديثات موجهة لجميع المستخدمين، أو حسب الفئات والمدن.</p>
              </div>

              <form onSubmit={handleSendNotification} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-300 font-bold block">الفئة المستهدفة بالإشعار:</span>
                  <select
                    value={notifTarget}
                    onChange={e => setNotifTarget(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
                  >
                    <option value="جميع المستخدمين">جميع مستخدمي المنصة (Broadcast All)</option>
                    <option value="فئة محددة">فئة محددة (السياح فقط / المرشدون فقط / المستثمرون)</option>
                    <option value="مدينة معينة">زوار مدينة معينة (العلا / الرياض / جدة)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-300 font-bold block">عنوان الإشعار:</span>
                  <input
                    type="text"
                    required
                    value={notifTitle}
                    onChange={e => setNotifTitle(e.target.value)}
                    placeholder="مثال: انطلاق موسم طنطورة في العلا ببرامج استثنائية!"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-slate-300 font-bold block">نص الرسالة:</span>
                  <textarea
                    rows={3}
                    value={notifBody}
                    onChange={e => setNotifBody(e.target.value)}
                    placeholder="تفاصيل التنبيه العاجل..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-600 text-white font-black px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-purple-950/60"
                >
                  <Bell className="w-4 h-4" />
                  <span>إرسال الإشعار الآن</span>
                </button>
              </form>

            </div>

          </div>
        )}

        {/* TAB 9: SECURITY CENTER */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <span>مركز الأمان وجدار الحماية (Security Center)</span>
                </h3>
                <p className="text-xs text-slate-400">مراقبة الجلسات المفتوحة، سجل الدخول، محاولات الدخول الفاشلة وإدارتها.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">المستخدم</th>
                      <th className="p-3">الدور</th>
                      <th className="p-3">وقت الدخول</th>
                      <th className="p-3">الجهاز والمدينة</th>
                      <th className="p-3">عنوان IP</th>
                      <th className="p-3">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {loginRecords.map(rec => (
                      <tr key={rec.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 font-bold text-white">{rec.userName}</td>
                        <td className="p-3 text-purple-300 font-bold">{rec.role}</td>
                        <td className="p-3 font-mono text-slate-300">{rec.loginTime}</td>
                        <td className="p-3 text-slate-300">{rec.device}</td>
                        <td className="p-3 font-mono text-amber-300">{rec.ipAddress}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              rec.status === 'ناجح'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                                : 'bg-red-950 text-red-300 border border-red-500/40'
                            }`}
                          >
                            {rec.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        )}

        {/* TAB 10: BACKUP & RECOVERY */}
        {activeTab === 'backup' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-amber-400" />
                    <span>إدارة النسخ الاحتياطي والاستعادة (Backup & Recovery)</span>
                  </h3>
                  <p className="text-xs text-slate-400">إنشاء نسخ احتياطية فورية، جدولة الأرشفة واستعادة اللقطات المعتمدة.</p>
                </div>

                <button
                  onClick={handleCreateBackup}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-amber-950/60"
                >
                  <Database className="w-4 h-4" />
                  <span>إنشاء نسخة احتياطية فورية</span>
                </button>
              </div>

              <div className="space-y-3 text-xs">
                {backups.map(bkp => (
                  <div key={bkp.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono">
                    <div>
                      <div className="font-bold text-white text-sm">{bkp.backupName}</div>
                      <div className="text-slate-400 text-[11px]">{bkp.createdAt} • الحجم: {bkp.fileSizeMB} MB</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded-full text-[10px] font-bold border border-emerald-500/40">
                        {bkp.status}
                      </span>
                      <button
                        onClick={() => triggerToast(`محاكاة استعادة النسخة ${bkp.backupName} بنجاح`)}
                        className="bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold px-3 py-1.5 rounded-xl border border-slate-700 text-xs"
                      >
                        استعادة Snapshot
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

        {/* TAB 11: SYSTEM SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-400" />
                  <span>إعدادات وهوية المنصة الموحدة (System Settings)</span>
                </h3>
                <p className="text-xs text-slate-400">اسم المنصة، الهوية البصرية، اللغات، إعدادات الخرائط ومفاتيح البريد.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-amber-300 font-bold block">اسم المنصة الرسمي:</span>
                  <input
                    type="text"
                    defaultValue="SAUDI EXPLORER AI — المنصة الوطنية السياحية الذكية"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
                  />
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-amber-300 font-bold block">اللغات المدعومة:</span>
                  <input
                    type="text"
                    defaultValue="العربية (الأساسية)، العربية الفصحى، الإنجليزية، الفرنسية، الصينية، اليابانية"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
                  />
                </div>

              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => triggerToast('تم حفظ جميع إعدادات المنصة بنجاح!')}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-black px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-purple-950/60"
                >
                  <Check className="w-4 h-4" />
                  <span>حفظ التعديلات</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 12: AUDIT LOGS */}
        {activeTab === 'audit_logs' && (
          <div className="space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" />
                    <span>سجل التدقيق والعمليات الشامل (Audit Logs)</span>
                  </h3>
                  <p className="text-xs text-slate-400">تتبع دقيق لجميع العمليات والتعديلات المنفذة بالمنصة مع إمكانية التصدير.</p>
                </div>

                <button
                  onClick={() => triggerToast('تم تصدير سجل التدقيق Audit Logs بملف CSV')}
                  className="bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 border border-slate-700"
                >
                  <Download className="w-4 h-4" />
                  <span>تصدير السجل CSV</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs font-mono">
                  <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">التاريخ والوقت</th>
                      <th className="p-3">المنفذ</th>
                      <th className="p-3">نوع العملية</th>
                      <th className="p-3">المورد المستهدف</th>
                      <th className="p-3">عنوان IP</th>
                      <th className="p-3">النتيجة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {auditLogs.map(log => (
                      <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 text-slate-400">{log.timestamp}</td>
                        <td className="p-3 text-white font-bold">{log.performedBy}</td>
                        <td className="p-3 text-purple-300 font-bold">{log.actionType}</td>
                        <td className="p-3 text-slate-300">{log.targetResource}</td>
                        <td className="p-3 text-amber-300">{log.ipAddress}</td>
                        <td className="p-3">
                          <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-500/40">
                            ناجحة
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        )}

        {/* MODAL: SELECTED USER PROFILE VIEW */}
        <AnimatePresence>
          {selectedUserModal && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-purple-500/50 rounded-3xl p-6 max-w-lg w-full space-y-4 text-xs shadow-2xl relative"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    <span>الملف الشخصي للمستخدم (#{selectedUserModal.id})</span>
                  </h4>
                  <button onClick={() => setSelectedUserModal(null)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <img src={selectedUserModal.avatar} alt={selectedUserModal.name} className="w-16 h-16 rounded-full object-cover border-2 border-purple-400" />
                  <div className="space-y-1">
                    <h5 className="text-base font-bold text-white">{selectedUserModal.name}</h5>
                    <p className="text-slate-400 font-mono">{selectedUserModal.email}</p>
                    <span className="bg-purple-950 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold inline-block">
                      {selectedUserModal.role}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 font-mono">
                  <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">المدينة:</span>
                    <span className="text-white font-bold">{selectedUserModal.city}</span>
                  </div>
                  <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">تاريخ التسجيل:</span>
                    <span className="text-white font-bold">{selectedUserModal.registeredDate}</span>
                  </div>
                  <div className="flex justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">حالة الحساب:</span>
                    <span className="text-emerald-400 font-bold">{selectedUserModal.status}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      handleResetPassword(selectedUserModal.name);
                      setSelectedUserModal(null);
                    }}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs"
                  >
                    إعادة تعيين كلمة المرور
                  </button>
                  <button
                    onClick={() => setSelectedUserModal(null)}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    إغلاق
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* MODAL: CREATE NEW ROLE */}
        <AnimatePresence>
          {showAddRoleModal && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 max-w-lg w-full space-y-4 text-xs shadow-2xl relative"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>إنشاء دور مخصص جديد مع تحديد الصلاحيات</span>
                  </h4>
                  <button onClick={() => setShowAddRoleModal(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateRole} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-bold block">اسم الدور المخصص:</label>
                    <input
                      type="text"
                      required
                      value={newRoleName}
                      onChange={e => setNewRoleName(e.target.value)}
                      placeholder="مثال: مسؤول مراجعة جودة الفنادق"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300 font-bold block">الصلاحيات (افصل بينها بفصلة):</label>
                    <input
                      type="text"
                      value={newRolePerms}
                      onChange={e => setNewRolePerms(e.target.value)}
                      placeholder="مراجعة التراخيص، اعتماد التقييمات، تجميد المنشآت"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white"
                    />
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                    <button
                      type="submit"
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-5 py-2 rounded-xl text-xs"
                    >
                      حفظ الدور الجديد
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddRoleModal(false)}
                      className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-bold"
                    >
                      إلغاء
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* PROTOTYPE DEMO DISCLAIMER FOOTER NOTICE FOR PHASE 15 */}
        <div className="mt-12 bg-amber-950/80 border border-amber-500/50 p-4 rounded-2xl text-center text-xs text-amber-200 space-y-1 max-w-4xl mx-auto shadow-2xl">
          <div className="font-extrabold flex items-center justify-center gap-2 text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>تنويه إخلاء مسؤولية للنموذج الأولي — SAUDI EXPLORER AI PROTOTYPE DEMO</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            جميع البيانات، الحسابات، المؤشرات والإحصائيات المعروضة داخل لوحة مدير النظام (Phase 15 Super Admin HQ) وباقي المراحل الـ 15 هي بيانات تجريبية لأغراض العرض والتقييم واختبار تجربة المستخدم (UI/UX) فقط، وليست مرتبطة بأنظمة حقيقية أو مشغلة فعلياً في هذه المرحلة.
          </p>
        </div>

      </div>
    </section>
  );
};
