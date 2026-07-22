import React, { useState } from 'react';
import { 
  X, 
  User, 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Luggage, 
  Key, 
  Lock, 
  Smartphone, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft,
  QrCode,
  ShieldAlert,
  Award,
  Compass
} from 'lucide-react';

interface AuthRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (roleKey: string, roleTitle: string) => void;
}

export const AuthRoleModal: React.FC<AuthRoleModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [selectedRole, setSelectedRole] = useState<'Tourist' | 'Investor' | 'Merchant' | 'TourGuide' | 'MinistryAdmin' | 'SuperAdmin'>('Tourist');
  const [loginMethod, setLoginMethod] = useState<'Nafath' | 'Credentials'>('Nafath');
  const [identityNumber, setIdentityNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nafathCode, setNafathCode] = useState('42');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  if (!isOpen) return null;

  const rolesList = [
    {
      id: 'Tourist' as const,
      navKey: 'tourist',
      title: 'سائح / مواطن',
      subtitle: 'حجوزات، مسارات، وجواز سياحي',
      icon: Luggage,
      color: 'bg-emerald-50 text-[#047857] border-emerald-300',
      badge: 'الزائر والسائح',
      desc: 'الدخول لاستكشاف الوجهات، تخطيط الرحلات بالذكاء الاصطناعي، واستعراض الجواز السياحي الرقمي.'
    },
    {
      id: 'Investor' as const,
      navKey: 'investor',
      title: 'مستثمر سياحي',
      subtitle: 'فرص، تراخيص، وحزم تمويلية',
      icon: Building2,
      color: 'bg-amber-50 text-amber-900 border-amber-300',
      badge: 'الاستثمار السياحي',
      desc: 'الوصول للفرص الاستثمارية الكبرى في العلا ونيوم والرياض وتسهيل إجراءات تراخيص المشاريع.'
    },
    {
      id: 'Merchant' as const,
      navKey: 'business',
      title: 'منشأة سياحية',
      subtitle: 'إدارة الفنادق، المطاعم، والأنشطة',
      icon: Building2,
      color: 'bg-teal-50 text-teal-900 border-teal-300',
      badge: 'أصحاب المنشآت',
      desc: 'إدارة قوائم الفنادق والمطاعم، نشر الفعاليات، ومتابعة حجوزات المنشأة وتقارير المبيعات.'
    },
    {
      id: 'TourGuide' as const,
      navKey: 'guide',
      title: 'مرشد سياحي معتمد',
      subtitle: 'جولات ثقافية، تراخيص، ورعاية',
      icon: UserCheck,
      color: 'bg-amber-50 text-amber-900 border-amber-300',
      badge: 'المرشدين السياحيين',
      desc: 'استقبال طلبات حجز المرشدين، جدولة المسارات الميدانية، وتجديد الترخيص الوطني.'
    },
    {
      id: 'MinistryAdmin' as const,
      navKey: 'ministry',
      title: 'مسؤول وزارة السياحة',
      subtitle: 'لوحة القيادة ومؤشرات رؤية 2030',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-950 border-emerald-400',
      badge: 'القطاع الحكومي',
      desc: 'الرقابة الميدانية، متابعة الإنفاق السياحي الوطني، ونسب نمو أعداد الزوار لمستهدفات 2030.'
    },
    {
      id: 'SuperAdmin' as const,
      navKey: 'superadmin',
      title: 'مدير النظام (Super Admin)',
      subtitle: 'التحكم الكامل والبيانات والأمان',
      icon: Award,
      color: 'bg-purple-50 text-purple-900 border-purple-300',
      badge: 'إدارة المنصة',
      desc: 'إدارة صلاحيات النظام، ربط نماذج الذكاء الاصطناعي، ومراقبة أمان المنصة الوطنية.'
    }
  ];

  const currentRoleObj = rolesList.find(r => r.id === selectedRole)!;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessToast(true);
      setTimeout(() => {
        onLoginSuccess(currentRoleObj.navKey, currentRoleObj.title);
        onClose();
      }, 1000);
    }, 800);
  };

  const handleQuickDemoLogin = (roleItem: typeof rolesList[0]) => {
    setSelectedRole(roleItem.id);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess(roleItem.navKey, roleItem.title);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in dir-rtl" dir="rtl">
      
      <div className="bg-white rounded-3xl border border-emerald-900/15 w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto max-h-[92vh]">
        
        {/* Right Sidebar Role Selector Column */}
        <div className="w-full md:w-5/12 bg-slate-50 border-b md:border-b-0 md:border-l border-slate-200 p-6 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#047857]">
              <Compass className="w-6 h-6 text-amber-500" />
              <div>
                <h3 className="text-base font-black text-slate-900 leading-tight">SAUDI EXPLORER AI</h3>
                <span className="text-[10px] text-emerald-800 font-bold block">تسجيل الدخول الفئوي الموحد</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              اختر الفئة التي تنتمي إليها لتسجيل الدخول إلى لوحة التحكم والخدمات الخاصة بك:
            </p>

            {/* Role Cards List */}
            <div className="space-y-2">
              {rolesList.map((r) => {
                const Icon = r.icon;
                const isSelected = selectedRole === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRole(r.id)}
                    className={`w-full p-3 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 ${
                      isSelected 
                        ? 'bg-[#047857] text-white border-emerald-600 shadow-md scale-[1.02]' 
                        : 'bg-white hover:bg-emerald-50/60 text-slate-800 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-amber-400 text-slate-950 border-amber-300 font-black' : r.color
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 text-right">
                        <span className="text-xs font-black block truncate">{r.title}</span>
                        <span className={`text-[10px] block truncate ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                          {r.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-amber-400 border-amber-300 text-slate-950' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4 fill-amber-400 text-slate-950" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 mt-4 text-center">
            <span className="text-[10px] text-slate-500 font-bold block">
              نظام نفاذ الوطني الموحد • وزارة السياحة 2026
            </span>
          </div>

        </div>

        {/* Left Column: Login Form & Demo Quick Switches */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          
          <div className="space-y-6">
            
            {/* Header Title & Close Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black border ${currentRoleObj.color}`}>
                  {currentRoleObj.badge}
                </span>
                <h3 className="text-xl font-black text-slate-900">تسجيل دخول: {currentRoleObj.title}</h3>
              </div>

              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {currentRoleObj.desc}
            </p>

            {/* Login Method Tab (Nafath vs Credentials) */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setLoginMethod('Nafath')}
                className={`flex-1 py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 ${
                  loginMethod === 'Nafath' 
                    ? 'bg-[#047857] text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-4 h-4 text-amber-300" />
                <span>النفاذ الوطني الموحد (نفاذ)</span>
              </button>

              <button
                onClick={() => setLoginMethod('Credentials')}
                className={`flex-1 py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 ${
                  loginMethod === 'Credentials' 
                    ? 'bg-[#047857] text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Key className="w-4 h-4 text-amber-300" />
                <span>اسم المستخدم وكلمة المرور</span>
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              
              {loginMethod === 'Nafath' ? (
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-4 text-right">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-xs">
                      <QrCode className="w-5 h-5 text-[#047857]" />
                      <span>تطبيق نفاذ الذكي</span>
                    </div>
                    <span className="text-[10px] bg-emerald-200 text-emerald-900 font-black px-2 py-0.5 rounded">آمن ومعتمد</span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">رقم الهوية الوطنية / الإقامة</label>
                    <input 
                      type="text" 
                      value={identityNumber}
                      onChange={(e) => setIdentityNumber(e.target.value)}
                      placeholder="10XXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-xs focus:ring-2 focus:ring-[#047857] focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-emerald-300 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 block font-bold">رمز التحقق لتطبيق نفاذ:</span>
                      <span className="text-2xl font-black text-[#047857] tracking-widest">{nafathCode}</span>
                    </div>
                    <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                      افتح تطبيق نفاذ واختر الرقم أعلاه
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">اسم المستخدم / البريد الإلكتروني</label>
                    <input 
                      type="text" 
                      value={identityNumber}
                      onChange={(e) => setIdentityNumber(e.target.value)}
                      placeholder="user@saudiexplorer.ai"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-xs focus:ring-2 focus:ring-[#047857] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">كلمة المرور</label>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-xs focus:ring-2 focus:ring-[#047857] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-[#047857] hover:bg-[#065f46] text-white font-black text-xs shadow-lg shadow-emerald-800/20 transition-all flex items-center justify-center gap-2 border border-emerald-400/30"
              >
                {isSubmitting ? (
                  <span>جاري التحقق والدخول...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-amber-300" />
                    <span>تأكيد تسجيل الدخول كـ ({currentRoleObj.title})</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Fast Login Switch Buttons for Demo */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-black text-slate-500 block">
                ⚡ تجربة سريعة للنموذج الأولي (Quick Demo Switch):
              </span>

              <div className="grid grid-cols-2 gap-2">
                {rolesList.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleQuickDemoLogin(r)}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-800 font-extrabold text-[11px] flex items-center justify-between text-right"
                  >
                    <span>دخول سريح كـ {r.title}</span>
                    <ArrowLeft className="w-3 h-3 text-[#047857]" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Success Toast Overlay */}
          {showSuccessToast && (
            <div className="mt-4 p-3 bg-emerald-600 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 animate-bounce">
              <CheckCircle2 className="w-4 h-4 text-amber-300" />
              <span>تم تسجيل الدخول بنجاح! جاري تحويلك إلى لوحة التحكم...</span>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
