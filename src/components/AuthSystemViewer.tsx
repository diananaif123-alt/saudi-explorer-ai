import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Key, 
  Mail, 
  Smartphone, 
  Building2, 
  Luggage, 
  Flag, 
  Briefcase, 
  MapPin, 
  Landmark, 
  ArrowLeft, 
  CheckCircle2, 
  AlertOctagon, 
  Eye, 
  EyeOff, 
  RefreshCw, 
  UserPlus, 
  LogIn, 
  UserX, 
  Sparkles, 
  Globe, 
  Camera, 
  KeyRound,
  FileText,
  BadgeAlert,
  ArrowRight
} from 'lucide-react';
import { accountTypesData, demoUsersList, UserRole, AccountTypeOption, DemoUser } from '../data/authData';

export const AuthSystemViewer: React.FC = () => {
  // Current active logged in user state (default: Tourist demo user)
  const [currentUser, setCurrentUser] = useState<DemoUser | null>(demoUsersList[0]);
  
  // Auth flow step: 'select-role' | 'login' | 'register' | 'verify-otp' | 'forgot-pwd' | 'portal' | 'access-denied'
  const [authStep, setAuthStep] = useState<'select-role' | 'login' | 'register' | 'verify-otp' | 'forgot-pwd' | 'portal' | 'access-denied'>('portal');
  
  // Selected role for login/register flow
  const [selectedRole, setSelectedRole] = useState<UserRole>('tourist');
  
  // Target portal attempt for testing 403 RBAC guard
  const [targetAttemptPortal, setTargetAttemptPortal] = useState<UserRole>('tourist');

  // Form states
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [otpCode, setOtpCode] = useState<string>('5829');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(true);
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  // Dynamic Register form inputs
  const [regName, setRegName] = useState<string>('');
  const [regEmail, setRegEmail] = useState<string>('');
  const [regPhone, setRegPhone] = useState<string>('');
  const [regExtraField1, setRegExtraField1] = useState<string>('');
  const [regExtraField2, setRegExtraField2] = useState<string>('');

  // Handle quick switch to a demo account
  const handleQuickDemoSwitch = (user: DemoUser) => {
    setCurrentUser(user);
    setSelectedRole(user.role);
    setTargetAttemptPortal(user.role);
    setAuthStep('portal');
  };

  // Handle selecting a role from role selection screen
  const handleSelectRole = (role: UserRole) => {
    setSelectedRole(role);
    const demo = demoUsersList.find(u => u.role === role);
    if (demo) {
      setEmailInput(demo.email);
      setPasswordInput('Demo123456!');
    }
    setAuthStep('login');
  };

  // Handle login submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (twoFactorEnabled) {
      setAuthStep('verify-otp');
    } else {
      const demo = demoUsersList.find(u => u.role === selectedRole) || demoUsersList[0];
      setCurrentUser(demo);
      setTargetAttemptPortal(selectedRole);
      setAuthStep('portal');
    }
  };

  // Handle OTP Submit
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const demo = demoUsersList.find(u => u.role === selectedRole) || demoUsersList[0];
    setCurrentUser(demo);
    setTargetAttemptPortal(selectedRole);
    setAuthStep('portal');
  };

  // Handle Register submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: DemoUser = {
      id: `usr-custom-${Date.now()}`,
      role: selectedRole,
      name: regName || 'مستخدم جديد (Demo)',
      email: regEmail || `${selectedRole}.user@saudiexplorer.ai`,
      phone: regPhone || '+966 50 000 0000',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      nationalityOrCity: regExtraField1 || 'المملكة العربية السعودية',
      businessOrCompany: regExtraField2 || 'شركة تجريبية'
    };
    setCurrentUser(newUser);
    setTargetAttemptPortal(selectedRole);
    setAuthStep('portal');
  };

  // Simulate attempt to enter a portal
  const handleAttemptPortal = (portalRole: UserRole) => {
    if (!currentUser) {
      setSelectedRole(portalRole);
      setAuthStep('login');
      return;
    }

    const roleMeta = accountTypesData.find(a => a.id === currentUser.role);
    const isAllowed = roleMeta?.allowedPortals.includes(portalRole) || currentUser.role === 'admin';

    if (isAllowed) {
      setTargetAttemptPortal(portalRole);
      setAuthStep('portal');
    } else {
      setTargetAttemptPortal(portalRole);
      setAuthStep('access-denied');
    }
  };

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case 'tourist': return <Luggage className="w-5 h-5" />;
      case 'citizen': return <Flag className="w-5 h-5" />;
      case 'business': return <Building2 className="w-5 h-5" />;
      case 'investor': return <Briefcase className="w-5 h-5" />;
      case 'guide': return <MapPin className="w-5 h-5" />;
      case 'ministry': return <Landmark className="w-5 h-5" />;
      case 'admin': return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const activeAccountTypeMeta = accountTypesData.find(a => a.id === selectedRole) || accountTypesData[0];
  const activePortalMeta = accountTypesData.find(a => a.id === targetAttemptPortal) || accountTypesData[0];

  return (
    <section id="auth-system-section" className="py-12 bg-[#FAF8F5] text-slate-800 relative border-t-2 border-[#0D7A5F]/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D7A5F] to-[#064E3B] flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#0D7A5F] font-bold block">نظام الحسابات والصلاحيات (Phase 5 Authentication & RBAC)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  نظام تسجيل الدخول وبوابات الفئات <span className="text-[#0D7A5F]">Multi-Role Portals</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#E6F4F0] px-4 py-2 rounded-xl border border-emerald-300 text-[#0D7A5F] text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Demo Security Mode (7 Custom Role Portals)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
            قم بتجربة نظام تسجيل الدخول متعدد الفئات (السياح، المواطنون، المنشآت السياحية، المستثمرون، المرشدون، وزارة السياحة، ومدير النظام). يتيح النظام التحكم بزيارة البوابات الخاصة بمنع الوصول الصارم (Role-Based Access Control).
          </p>

          {/* Quick Demo Accounts Switcher Bar */}
          <div className="pt-2 border-t border-slate-100 relative z-10 space-y-2">
            <span className="text-xs font-black text-slate-700 block">⚡ اختر حساباً تجريبياً فورياً للتنقل بين البوابات (1-Click Demo Logins):</span>
            <div className="flex flex-wrap gap-2">
              {demoUsersList.map((user) => {
                const isSelected = currentUser?.id === user.id && authStep === 'portal';
                return (
                  <button
                    key={user.id}
                    onClick={() => handleQuickDemoSwitch(user)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      isSelected 
                        ? 'bg-[#0D7A5F] text-white shadow-md ring-2 ring-emerald-300 font-black' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {getRoleIcon(user.role)}
                    <span>{user.name.split(' ')[0]} ({accountTypesData.find(a=>a.id===user.role)?.badge})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Controls & Current Mode Status Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-bold">
          <div className="flex items-center gap-3">
            <span className="text-slate-500">الحالة الحالية:</span>
            {currentUser ? (
              <div className="flex items-center gap-2 bg-emerald-50 text-[#0D7A5F] px-3 py-1 rounded-lg border border-emerald-200">
                <img src={currentUser.avatar} alt="avatar" className="w-5 h-5 rounded-full object-cover" />
                <span>مسجل الدخول بصفة: <strong className="font-black">{currentUser.name}</strong> ({accountTypesData.find(a=>a.id===currentUser.role)?.titleAr})</span>
              </div>
            ) : (
              <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-lg border border-amber-200">غير مسجل الدخول</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAuthStep('select-role')}
              className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-all flex items-center gap-1"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#0D7A5F]" />
              <span>اختيار نوع حساب جديد</span>
            </button>
            {currentUser && (
              <button
                onClick={() => { setCurrentUser(null); setAuthStep('select-role'); }}
                className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-all flex items-center gap-1"
              >
                <UserX className="w-3.5 h-3.5" />
                <span>تسجيل الخروج</span>
              </button>
            )}
          </div>
        </div>

        {/* MAIN VIEW AREA BASED ON AUTH STEP */}

        {/* STEP 1: ROLE SELECTION SCREEN */}
        {authStep === 'select-role' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="bg-[#E6F4F0] text-[#0D7A5F] text-xs font-black px-3 py-1 rounded-full inline-block">
                الخطوة 1: تحديد الفئة
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">اختر نوع حسابك للبدء في المنصة</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                لكل فئة تجربة مخصصة وصلاحيات خاصة تضمن حصولك على أقصى فائدة من منظومة SAUDI EXPLORER AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {accountTypesData.map((type) => (
                <div
                  key={type.id}
                  onClick={() => handleSelectRole(type.id)}
                  className="bg-[#FAF8F5] hover:bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-[#0D7A5F] shadow-sm hover:shadow-lg transition-all cursor-pointer group space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0D7A5F] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {getRoleIcon(type.id)}
                    </div>
                    <span className="text-[10px] font-black bg-emerald-100 text-[#0D7A5F] px-2.5 py-0.5 rounded-full">
                      {type.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-black text-slate-900 text-sm group-hover:text-[#0D7A5F] transition-colors">{type.titleAr}</h4>
                    <span className="text-[10px] text-slate-400 font-bold block">{type.titleEn}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{type.description}</p>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0D7A5F]">
                    <span>متابعة لتسجيل الدخول</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: LOGIN FORM SCREEN */}
        {authStep === 'login' && (
          <div className="max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <button
              onClick={() => setAuthStep('select-role')}
              className="text-xs font-bold text-slate-500 hover:text-[#0D7A5F] flex items-center gap-1"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة لاختيار نوع الحساب</span>
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#E6F4F0] text-[#0D7A5F] flex items-center justify-center mx-auto shadow-sm">
                {getRoleIcon(selectedRole)}
              </div>
              <h3 className="text-xl font-black text-slate-900">تسجيل الدخول - {activeAccountTypeMeta.titleAr}</h3>
              <p className="text-xs text-slate-500">أدخل بياناتك التجريبية للوصول للبوابة الخاصة بك.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs font-bold">
              <div className="space-y-1">
                <label className="text-slate-700 block">البريد الإلكتروني:</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute right-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    className="w-full pr-9 pl-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] focus:outline-none bg-slate-50"
                    placeholder="example@saudiexplorer.ai"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 block">كلمة المرور:</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute right-3 top-3 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    required
                    className="w-full pr-9 pl-9 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] focus:outline-none bg-slate-50"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-[#0D7A5F] focus:ring-0"
                  />
                  <span>تذكرني على هذا الجهاز</span>
                </label>
                <button
                  type="button"
                  onClick={() => setAuthStep('forgot-pwd')}
                  className="text-[#0D7A5F] hover:underline"
                >
                  نسيت كلمة المرور؟
                </button>
              </div>

              <div className="p-3 bg-[#E6F4F0] rounded-xl border border-emerald-200 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[#0D7A5F] font-black block">التحقق بخطوتين (2FA Demo)</span>
                  <span className="text-[10px] text-slate-500 block">طلب رمز OTP عبر الجوال للتأمين</span>
                </div>
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  className="w-4 h-4 text-[#0D7A5F] rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0D7A5F] text-white rounded-xl font-black text-sm shadow-md hover:bg-[#064E3B] transition-all flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>تسجيل الدخول الآن</span>
              </button>

              <div className="text-center pt-2 text-slate-500">
                ليس لديك حساب؟{' '}
                <button
                  type="button"
                  onClick={() => setAuthStep('register')}
                  className="text-[#0D7A5F] font-black hover:underline"
                >
                  إنشاء حساب جديد
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: OTP VERIFICATION SCREEN */}
        {authStep === 'verify-otp' && (
          <div className="max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 text-center animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-sm">
              <Smartphone className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900">التحقق من رقم الجوال (Demo OTP)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                تم إرسال رمز التحقق المكون من 4 أرقام إلى رقم الجوال المسجل الخاص بـ {activeAccountTypeMeta.titleAr}.
              </p>
            </div>

            <form onSubmit={handleOtpSubmit} className="space-y-4 text-xs font-bold">
              <div className="flex justify-center gap-3 dir-ltr">
                {['5', '8', '2', '9'].map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    readOnly
                    className="w-12 h-12 text-center text-lg font-black border-2 border-emerald-500 bg-emerald-50 rounded-xl text-slate-900 shadow-sm"
                  />
                ))}
              </div>

              <span className="text-[11px] text-slate-400 block">رمز التجربة المعتمد: <strong>5829</strong></span>

              <button
                type="submit"
                className="w-full py-3 bg-[#0D7A5F] text-white rounded-xl font-black text-sm shadow-md hover:bg-[#064E3B] transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>تأكيد الرمز ودخول البوابة</span>
              </button>

              <button
                type="button"
                onClick={() => setAuthStep('login')}
                className="text-slate-500 hover:text-slate-700 text-xs block mx-auto"
              >
                العودة لتسجيل الدخول
              </button>
            </form>
          </div>
        )}

        {/* STEP 4: CUSTOM REGISTER FORM FOR SELECTED ROLE */}
        {authStep === 'register' && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <button
              onClick={() => setAuthStep('select-role')}
              className="text-xs font-bold text-slate-500 hover:text-[#0D7A5F] flex items-center gap-1"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة لتغيير نوع الحساب</span>
            </button>

            <div className="text-center space-y-2">
              <span className="bg-emerald-100 text-[#0D7A5F] text-[10px] font-black px-2.5 py-0.5 rounded-full">
                نموذج التسجيل المخصص لـ {activeAccountTypeMeta.titleAr}
              </span>
              <h3 className="text-xl font-black text-slate-900">إنشاء حساب جديد</h3>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs font-bold">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-700 block">الاسم الكامل / الجهة:</label>
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="مثال: عبدالله الفهد"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">البريد الإلكتروني:</label>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">رقم الجوال:</label>
                  <input
                    type="tel"
                    required
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    placeholder="+966 50 123 4567"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] bg-slate-50"
                  />
                </div>

                {/* Role Specific Dynamic Inputs */}
                {selectedRole === 'tourist' && (
                  <div className="space-y-1">
                    <label className="text-slate-700 block">الجنسية / الدولة:</label>
                    <input
                      type="text"
                      value={regExtraField1}
                      onChange={(e) => setRegExtraField1(e.target.value)}
                      placeholder="المملكة المتحدة / فرنسا"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] bg-slate-50"
                    />
                  </div>
                )}

                {selectedRole === 'business' && (
                  <div className="space-y-1">
                    <label className="text-slate-700 block">نوع النشاط (فندق/مطعم/مهرجان):</label>
                    <input
                      type="text"
                      value={regExtraField2}
                      onChange={(e) => setRegExtraField2(e.target.value)}
                      placeholder="فندق 5 نجوم / مطعم نجد"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] bg-slate-50"
                    />
                  </div>
                )}

                {selectedRole === 'guide' && (
                  <div className="space-y-1">
                    <label className="text-slate-700 block">رقم الرخصة السياحية (Demo License):</label>
                    <input
                      type="text"
                      value={regExtraField1}
                      onChange={(e) => setRegExtraField1(e.target.value)}
                      placeholder="KSA-GUIDE-2026-000"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] bg-slate-50"
                    />
                  </div>
                )}

                {selectedRole === 'investor' && (
                  <div className="space-y-1">
                    <label className="text-slate-700 block">مجال الاستثمار المستهدف:</label>
                    <input
                      type="text"
                      value={regExtraField1}
                      onChange={(e) => setRegExtraField1(e.target.value)}
                      placeholder="تطوير المنتجعات / الفنادق البيئية"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#0D7A5F] bg-slate-50"
                    />
                  </div>
                )}
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" required className="rounded text-[#0D7A5F]" />
                  <span>أوافق على الشروط والأحكام وسياسة الخصوصية الخاصة بوزارة السياحة والمنصة.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0D7A5F] text-white rounded-xl font-black text-sm shadow-md hover:bg-[#064E3B] transition-all"
              >
                إنشاء الحساب ودخول البوابة
              </button>
            </form>
          </div>
        )}

        {/* STEP 5: FORGOT PASSWORD SCREEN */}
        {authStep === 'forgot-pwd' && (
          <div className="max-w-md mx-auto bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4 text-center animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0D7A5F] flex items-center justify-center mx-auto shadow-sm">
              <KeyRound className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-black text-slate-900">استعادة كلمة المرور (Demo)</h3>
            <p className="text-xs text-slate-500">أدخل بريدك الإلكتروني لإرسال رابط إعادة الضبط التجريبي.</p>

            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50"
            />

            <button
              onClick={() => { alert('تم إرسال رابط إعادة الضبط التجريبي بنجاح!'); setAuthStep('login'); }}
              className="w-full py-2.5 bg-[#0D7A5F] text-white rounded-xl text-xs font-bold shadow"
            >
              إرسال رابط الاستعادة
            </button>

            <button
              onClick={() => setAuthStep('login')}
              className="text-xs text-slate-500 block mx-auto hover:underline"
            >
              إلغاء والعودة لتسجيل الدخول
            </button>
          </div>
        )}

        {/* STEP 6: DEDICATED ROLE PORTAL PREVIEW (WHEN LOGGED IN) */}
        {authStep === 'portal' && currentUser && (
          <div className="space-y-6 animate-fade-in">
            
            {/* User Profile Card Header */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={currentUser.avatar} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0D7A5F] shadow-sm" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900">{currentUser.name}</h3>
                    <span className="text-[10px] font-black bg-emerald-100 text-[#0D7A5F] px-2.5 py-0.5 rounded-full">
                      {activeAccountTypeMeta.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{currentUser.email} | {currentUser.phone}</p>
                  <span className="text-[11px] font-bold text-[#0D7A5F] block">{activeAccountTypeMeta.portalTitle}</span>
                </div>
              </div>

              {/* RBAC Tester Buttons */}
              <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <span className="font-black text-slate-800 block">اختبار حماية الصلاحيات (Try Accessing Portals):</span>
                <div className="flex flex-wrap gap-1.5">
                  {accountTypesData.map((pt) => (
                    <button
                      key={pt.id}
                      onClick={() => handleAttemptPortal(pt.id)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all ${
                        targetAttemptPortal === pt.id 
                          ? 'bg-[#0D7A5F] text-white font-black shadow-sm' 
                          : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      {getRoleIcon(pt.id)}
                      <span>{pt.titleAr.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* PORTAL SPECIFIC CONTENT CANVAS */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${activePortalMeta.colorClass} text-white flex items-center justify-center shadow`}>
                    {getRoleIcon(activePortalMeta.id)}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base">{activePortalMeta.portalTitle}</h3>
                    <span className="text-xs text-slate-500">منطقة الوصول الآمن بالصلاحيات المعتمدة</span>
                  </div>
                </div>

                <span className="bg-emerald-100 text-[#0D7A5F] text-xs font-bold px-3 py-1 rounded-xl">
                  حالة الجلسة: آمنة ومشفرة ✅
                </span>
              </div>

              {/* Render Custom Mock Content for Each Portal */}
              {targetAttemptPortal === 'tourist' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#E6F4F0] border border-emerald-300 space-y-2">
                    <span className="font-black text-[#0D7A5F] text-sm block">رحلاتي القادمة (Demo)</span>
                    <p className="text-slate-700">رحلة العلا - جبل الفيل (3 أيام) مجهزة ومحفوظة.</p>
                    <button className="px-3 py-1 bg-[#0D7A5F] text-white rounded-lg font-bold">تعديل الجدول بالـ AI</button>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                    <span className="font-black text-amber-900 text-sm block">المحفظة الرقمية (Demo Wallet)</span>
                    <p className="text-slate-700">الرصيد التجريبي المتاح: <strong>2,500 ريال</strong></p>
                    <button className="px-3 py-1 bg-amber-600 text-white rounded-lg font-bold">شحن الرصيد</button>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-900 text-sm block">التذاكر وبركود QR</span>
                    <p className="text-slate-600">تذكرة دخول مسرح طنطورة جاهزة للعرض.</p>
                    <button className="px-3 py-1 bg-slate-800 text-white rounded-lg font-bold">عرض الـ QR</button>
                  </div>
                </div>
              )}

              {targetAttemptPortal === 'citizen' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-2">
                    <span className="font-black text-emerald-900 text-sm block">خصومات المواطنين والمقيمين (Local Privilege)</span>
                    <p className="text-slate-700">خصم 25% على قطار الحرمين وتذاكر المواسم الثقافية الوطنية.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-900 text-sm block">برامج التطوع السياحي المحلي</span>
                    <p className="text-slate-600">انضم لمبادرة مرشدي الأحياء التاريخية بجدة والرياض.</p>
                  </div>
                </div>
              )}

              {targetAttemptPortal === 'business' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-300 space-y-2">
                    <span className="font-black text-sky-900 text-sm block">لوحة المنشأة والحجوزات</span>
                    <p className="text-slate-700">عدد الغرف المحجوزة اليوم: <strong>18 / 20 غرف</strong></p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-900 text-sm block">تأكيد الحجوزات السريعة</span>
                    <p className="text-slate-600">3 طلبات جديدة بحاجة للموافقة الفورية.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-2">
                    <span className="font-black text-[#0D7A5F] text-sm block">إضافة عرض موسم جديد</span>
                    <p className="text-slate-700">نشر باقة إقامة مخفضة في مواسم السعودية.</p>
                  </div>
                </div>
              )}

              {targetAttemptPortal === 'investor' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
                    <span className="font-black text-amber-900 text-sm block">الفرص الاستثمارية الكبرى في البحر الأحمر ونيوم</span>
                    <p className="text-slate-700">استعراض الكراسات الاستثمارية الرسمية والدراسات الجغرافية الاقتصادية.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-900 text-sm block">طلب رخصة استثمار سياحي (Demo)</span>
                    <p className="text-slate-600">تسهيل الإجراءات عبر بوابة الاستثمار الموحدة.</p>
                  </div>
                </div>
              )}

              {targetAttemptPortal === 'guide' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-teal-50 border border-teal-300 space-y-2">
                    <span className="font-black text-teal-900 text-sm block">جدول الجولات السياحية لليوم</span>
                    <p className="text-slate-700">جولة الحِجر وآثار العلا - المجموعة الساعة 4:00 مساءً.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-900 text-sm block">رخصة الإرشاد السياحي</span>
                    <p className="text-slate-600">رخصة معتمدة من وزارة السياحة رقم KSA-GUIDE-889 (سارية).</p>
                  </div>
                </div>
              )}

              {targetAttemptPortal === 'ministry' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#E6F4F0] border border-emerald-300 space-y-2">
                    <span className="font-black text-[#0D7A5F] text-sm block">مؤشر زوار المملكة المباشر</span>
                    <p className="text-slate-700">إجمالي زوار هذا الشهر: <strong>1,420,000 سائح</strong></p>
                  </div>
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-300 space-y-2">
                    <span className="font-black text-sky-900 text-sm block">رقابة جودة الضيافة والتراخيص</span>
                    <p className="text-slate-700">متابعة بلاغات التفتيش والالتزام بالمعايير.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-900 text-sm block">إصدار التراخيص الحكومية</span>
                    <p className="text-slate-600">تعتمد المنشآت والفرص في المنصة.</p>
                  </div>
                </div>
              )}

              {targetAttemptPortal === 'admin' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                    <span className="font-black text-emerald-400 text-sm block">إدارة كافة الأدوار والصلاحيات</span>
                    <p className="text-slate-300">التحكم ببيانات المستخدمين، السجلات الفنية، وحظر المنشآت المخالفة.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800 text-white space-y-2">
                    <span className="font-black text-amber-400 text-sm block">مراقبة خوادم النظام والنتاجات</span>
                    <p className="text-slate-300">معدل الاستجابة: 99.9% uptime للـ APIs والذكاء الاصطناعي.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800 text-white space-y-2">
                    <span className="font-black text-sky-400 text-sm block">إعدادات النظام العامة</span>
                    <p className="text-slate-300">تعديل المفاتيح والنصوص باللغتين العربية والإنجليزية.</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* STEP 7: 403 ACCESS DENIED SCREEN FOR RBAC GUARD TEST */}
        {authStep === 'access-denied' && (
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 border-2 border-red-200 shadow-2xl space-y-6 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-3xl bg-red-100 border border-red-300 text-red-600 flex items-center justify-center mx-auto shadow-md">
              <AlertOctagon className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="bg-red-100 text-red-700 text-xs font-black px-3 py-1 rounded-full inline-block">
                خطأ 403 - Access Denied
              </span>
              <h3 className="text-2xl font-black text-slate-900">غير مصرح بالوصول لهذه البوابة</h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                حسابك الحالي ({currentUser?.name} - صفة {accountTypesData.find(a=>a.id===currentUser?.role)?.titleAr}) لا يملك الصلاحيات الكافية لاستعراض {activePortalMeta.portalTitle}.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 text-right space-y-1">
              <span className="font-black text-slate-900 block">سبب المنع:</span>
              <p className="text-slate-600 text-[11px]">
                تطبيق سياسات الأمان الصارمة RBAC تمنع دخول أي فئة إلى البوابات الخاصة بالفئات الأخرى لضمان الخصوصية والسيادة الرقمية.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setTargetAttemptPortal(currentUser?.role || 'tourist');
                  setAuthStep('portal');
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#0D7A5F] text-white rounded-xl text-xs font-black shadow-md hover:bg-[#064E3B] transition-all"
              >
                العودة للبوابة المصرح بها ({accountTypesData.find(a=>a.id===currentUser?.role)?.titleAr})
              </button>
              <button
                onClick={() => setAuthStep('select-role')}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all"
              >
                تبديل نوع الحساب
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
