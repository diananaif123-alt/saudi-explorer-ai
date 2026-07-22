import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { NavigationSidebar } from './components/NavigationSidebar';
import { ServicesLandingGrid } from './components/ServicesLandingGrid';
import { AuthRoleModal } from './components/AuthRoleModal';
import { PrdViewer } from './components/PrdViewer';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { BrandIdentityViewer } from './components/BrandIdentityViewer';
import { UxDesignViewer } from './components/UxDesignViewer';
import { AuthSystemViewer } from './components/AuthSystemViewer';
import { TouristPortalViewer } from './components/TouristPortalViewer';
import { AiConciergeViewer } from './components/AiConciergeViewer';
import { SmartMapsViewer } from './components/SmartMapsViewer';
import { BookingSystemViewer } from './components/BookingSystemViewer';
import { WalletPassportRewardsViewer } from './components/WalletPassportRewardsViewer';
import { InvestorPortalViewer } from './components/InvestorPortalViewer';
import { TourismBusinessPortalViewer } from './components/TourismBusinessPortalViewer';
import { TourGuidePortalViewer } from './components/TourGuidePortalViewer';
import { MinistryTourismDashboardViewer } from './components/MinistryTourismDashboardViewer';
import { SuperAdminDashboardViewer } from './components/SuperAdminDashboardViewer';
import { ProductionReadyDemoViewer } from './components/ProductionReadyDemoViewer';
import { AdvancedAiVoiceArViewer } from './components/AdvancedAiVoiceArViewer';
import { DigitalTwinOpsCenterViewer } from './components/DigitalTwinOpsCenterViewer';
import { DestinationsGrid } from './components/DestinationsGrid';
import { EventsAndHotels } from './components/EventsAndHotels';
import { AiPlannerModal } from './components/AiPlannerModal';
import { BookingDemoModal } from './components/BookingDemoModal';
import { 
  Compass, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  Globe2, 
  MapPin, 
  Calendar, 
  Building2, 
  Bot, 
  ArrowUp,
  Heart,
  Menu,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [currentActiveRole, setCurrentActiveRole] = useState('Tourist');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedCityForAi, setSelectedCityForAi] = useState('العلا');
  const [bookingItem, setBookingItem] = useState<{
    title: string;
    location: string;
    price: string;
    type: 'فندق' | 'فعالية' | 'تجربة';
  } | null>(null);

  const handleOpenAiPlanner = (city?: string) => {
    if (city) setSelectedCityForAi(city);
    setIsAiModalOpen(true);
  };

  const handleSelectNavKey = (navKey: string) => {
    setActiveNav(navKey);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleLoginRoleSuccess = (roleNavKey: string, roleTitle: string) => {
    if (roleNavKey === 'tourist') setCurrentActiveRole('Tourist');
    else if (roleNavKey === 'investor') setCurrentActiveRole('Investor');
    else if (roleNavKey === 'business') setCurrentActiveRole('Merchant');
    else if (roleNavKey === 'guide') setCurrentActiveRole('TourGuide');
    else if (roleNavKey === 'ministry') setCurrentActiveRole('MinistryAdmin');
    else if (roleNavKey === 'superadmin') setCurrentActiveRole('SuperAdmin');

    setActiveNav(roleNavKey);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleNavigatePhaseKey = (phaseKey: string) => {
    handleSelectNavKey(phaseKey);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-slate-900 font-sans selection:bg-[#f59e0b] selection:text-slate-950 dir-rtl" dir="rtl">
      
      {/* Official MVP Notice Top Bar */}
      <div className="bg-emerald-950 text-emerald-100 py-2 px-4 text-center text-xs font-bold border-b border-emerald-800/80 flex items-center justify-center gap-2 shadow-sm z-50 relative">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
        <span>هذا نموذج أولي (MVP) لأغراض العرض والتقييم. جميع البيانات والخدمات المعروضة تجريبية وغير مرتبطة بأنظمة تشغيل حقيقية.</span>
      </div>

      {/* Navigation Sidebar Drawer */}
      <NavigationSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeNav={activeNav}
        onSelectNav={(key) => handleSelectNavKey(key)}
        currentActiveRole={currentActiveRole}
        onChangeRole={(role) => setCurrentActiveRole(role)}
      />

      {/* Auth Category Role Selection Modal */}
      <AuthRoleModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginRoleSuccess}
      />

      {/* Hero Section with reference screenshot aesthetics */}
      <HeroSection 
        onSearchClick={() => handleOpenAiPlanner('العلا والرياض')}
        onNavigateToPrd={() => handleSelectNavKey('prd')}
        activeNav={activeNav}
        setActiveNav={(nav) => handleSelectNavKey(nav)}
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenLoginModal={() => setIsAuthModalOpen(true)}
      />

      {/* Sticky Category Page Filter Bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-y border-emerald-900/10 py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="px-3 py-1.5 rounded-full bg-emerald-100 text-[#047857] hover:bg-emerald-200 border border-emerald-300 font-black text-xs flex items-center gap-1.5"
            >
              <Menu className="w-3.5 h-3.5 text-amber-600" />
              <span>القائمة الجانبية</span>
            </button>
            <span className="text-slate-300 font-light">|</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-extrabold shrink-0">
            <button
              onClick={() => handleSelectNavKey('home')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'home' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              الرئيسية
            </button>

            <button
              onClick={() => handleSelectNavKey('all')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'all' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              جميع اللوحات
            </button>

            <button
              onClick={() => handleSelectNavKey('ai')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'ai' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              الذكاء الاصطناعي
            </button>

            <button
              onClick={() => handleSelectNavKey('phase17')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'phase17' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              الصوت والواقع المعزز
            </button>

            <button
              onClick={() => handleSelectNavKey('phase18')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'phase18' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              التوأم الرقمي
            </button>

            <button
              onClick={() => handleSelectNavKey('investor')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'investor' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              بوابة المستثمر
            </button>

            <button
              onClick={() => handleSelectNavKey('ministry')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'ministry' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              وزارة السياحة
            </button>

            <button
              onClick={() => handleSelectNavKey('prd')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeNav === 'prd' 
                  ? 'bg-[#047857] text-white border-emerald-600 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
              }`}
            >
              وثيقة PRD
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Return Banner when in specific view */}
      {activeNav !== 'home' && activeNav !== 'all' && (
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-black">أنت تتصفح الآن قسم: {activeNav.toUpperCase()}</span>
            </div>
            <button
              onClick={() => handleSelectNavKey('home')}
              className="px-4 py-1.5 rounded-xl bg-white text-slate-900 border border-amber-300 hover:bg-amber-100 font-extrabold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <ArrowRight className="w-4 h-4 text-[#047857]" />
              <span>العودة للصفحة الرئيسية</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Pages Render Logic */}
      <main className="space-y-6 pt-4">
        
        {/* Landing Page Mode (Default View) */}
        {activeNav === 'home' && (
          <div className="space-y-12">
            {/* Services Showcase Cards Grid */}
            <ServicesLandingGrid 
              onSelectNav={(key) => handleSelectNavKey(key)}
              onOpenAiPlanner={handleOpenAiPlanner}
            />

            {/* Destinations Grid */}
            <DestinationsGrid 
              onPlanDestination={(destName) => handleOpenAiPlanner(destName)}
            />

            {/* Events & Luxury Hotels */}
            <EventsAndHotels 
              onBookItem={(item) => setBookingItem(item)}
            />
          </div>
        )}

        {/* Individual Views or All-Views mode */}
        {(activeNav === 'phase18' || activeNav === 'all') && (
          <div id="phase18-digital-twin-section">
            <DigitalTwinOpsCenterViewer />
          </div>
        )}

        {(activeNav === 'phase17' || activeNav === 'all') && (
          <div id="phase17-advanced-ai-section">
            <AdvancedAiVoiceArViewer />
          </div>
        )}

        {(activeNav === 'demo' || activeNav === 'all') && (
          <div id="phase16-demo-section">
            <ProductionReadyDemoViewer
              onNavigatePhase={handleNavigatePhaseKey}
              currentActiveRole={currentActiveRole}
              onChangeRole={(role) => setCurrentActiveRole(role)}
            />
          </div>
        )}

        {(activeNav === 'superadmin' || activeNav === 'all') && (
          <div id="phase15-super-admin-section">
            <SuperAdminDashboardViewer />
          </div>
        )}

        {(activeNav === 'ministry' || activeNav === 'all') && (
          <div id="phase14-ministry-dashboard-section">
            <MinistryTourismDashboardViewer />
          </div>
        )}

        {(activeNav === 'guide' || activeNav === 'all') && (
          <div id="phase13-tour-guide-section">
            <TourGuidePortalViewer />
          </div>
        )}

        {(activeNav === 'business' || activeNav === 'all') && (
          <div id="phase12-business-portal-section">
            <TourismBusinessPortalViewer />
          </div>
        )}

        {(activeNav === 'investor' || activeNav === 'all') && (
          <div id="phase11-investor-section">
            <InvestorPortalViewer />
          </div>
        )}

        {(activeNav === 'wallet' || activeNav === 'all') && (
          <div id="phase10-wallet-section">
            <WalletPassportRewardsViewer />
          </div>
        )}

        {(activeNav === 'booking' || activeNav === 'all') && (
          <div id="booking-services-section">
            <BookingSystemViewer />
          </div>
        )}

        {(activeNav === 'maps' || activeNav === 'all') && (
          <div id="smart-maps-section">
            <SmartMapsViewer />
          </div>
        )}

        {(activeNav === 'ai' || activeNav === 'all') && (
          <div id="ai-services-section">
            <AiConciergeViewer />
          </div>
        )}

        {(activeNav === 'tourist' || activeNav === 'all') && (
          <div id="tourist-portal-section">
            <TouristPortalViewer />
          </div>
        )}

        {(activeNav === 'auth' || activeNav === 'all') && (
          <div id="auth-system-section">
            <AuthSystemViewer />
          </div>
        )}

        {(activeNav === 'ux' || activeNav === 'all') && (
          <div id="ux-design-section">
            <UxDesignViewer />
          </div>
        )}

        {(activeNav === 'brand' || activeNav === 'all') && (
          <div id="brand-identity-section">
            <BrandIdentityViewer />
          </div>
        )}

        {(activeNav === 'architecture' || activeNav === 'all') && (
          <div id="architecture-section">
            <ArchitectureViewer />
          </div>
        )}

        {(activeNav === 'prd' || activeNav === 'all') && (
          <div id="prd-document-section">
            <PrdViewer />
          </div>
        )}

      </main>

      {/* Modals */}
      <AiPlannerModal 
        isOpen={isAiModalOpen} 
        onClose={() => setIsAiModalOpen(false)} 
        defaultDestination={selectedCityForAi}
      />

      <BookingDemoModal 
        isOpen={!!bookingItem} 
        onClose={() => setBookingItem(null)} 
        bookingItem={bookingItem}
      />

      {/* Official Saudi Tourism Platform Footer */}
      <footer className="bg-[#022c22] text-white border-t border-emerald-500/20 pt-16 pb-12 px-4 sm:px-8 text-right font-sans mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#047857] border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-lg">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-black text-white block tracking-tight">SAUDI EXPLORER AI</span>
                <span className="text-xs text-amber-400 font-extrabold">منصة الذكاء السياحي الوطنية • رؤية 2030</span>
              </div>
            </div>

            <p className="text-xs text-emerald-100 leading-relaxed font-normal max-w-md">
              المنصة السياحية الوطنية الذكية الموحدة للمملكة العربية السعودية. نمزج التراث الثقافي العريق بالتقنيات الاستثنائية والذكاء التنبؤي لتقديم أفضل تجربة سفر وتخطيط عالمية.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-900/80 border border-emerald-700/60 text-xs text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>تحت مظلة الاستراتيجية الوطنية للسياحة 2030</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-amber-300">الوجهات والفعاليات</h4>
            <ul className="space-y-2 text-xs text-emerald-100 font-medium">
              <li><button onClick={() => handleOpenAiPlanner('العلا')} className="hover:text-amber-300 transition-colors">العلا الآثار والأجواء</button></li>
              <li><button onClick={() => handleOpenAiPlanner('الدرعية')} className="hover:text-amber-300 transition-colors">الدرعية التاريخية</button></li>
              <li><button onClick={() => handleOpenAiPlanner('جدة البلد')} className="hover:text-amber-300 transition-colors">جدة البلد عروس البحر</button></li>
              <li><button onClick={() => handleOpenAiPlanner('نيوم وسندالة')} className="hover:text-amber-300 transition-colors">نيوم وسندالة المستقبل</button></li>
              <li><button onClick={() => handleOpenAiPlanner('أبها والسودة')} className="hover:text-amber-300 transition-colors">أبها وعسير الخضراء</button></li>
            </ul>
          </div>

          {/* AI Services */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-amber-300">خدمات الذكاء</h4>
            <ul className="space-y-2 text-xs text-emerald-100 font-medium">
              <li><button onClick={() => handleSelectNavKey('phase17')} className="hover:text-amber-300 transition-colors">المساعد الصوتي Voice AI</button></li>
              <li><button onClick={() => handleSelectNavKey('phase18')} className="hover:text-amber-300 transition-colors">التوأم الرقمي Digital Twin</button></li>
              <li><button onClick={() => handleSelectNavKey('phase17')} className="hover:text-amber-300 transition-colors">المرشد الصوتي 3D Avatar</button></li>
              <li><button onClick={() => handleOpenAiPlanner()} className="hover:text-amber-300 transition-colors">مخطط الرحلات التفاعلي</button></li>
              <li><button onClick={() => handleSelectNavKey('prd')} className="hover:text-amber-300 transition-colors">وثيقة PRD Phase 1</button></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-amber-300">التواصل والدعم الفني</h4>
            <p className="text-xs text-emerald-100 leading-relaxed font-medium">
              مركز الاتصال السياحي الموحد 24/7 داخل وخارج المملكة.
            </p>
            <div className="text-xs text-amber-300 font-black">
              الهاتف الموحد: 930 • البريد: info@saudiexplorer.ai
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>جميع الحقوق محفوظة © 2026 منصة SAUDI EXPLORER AI • وزارة السياحة السعودية</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-amber-300 transition-colors">سياسة الخصوصية</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-300 transition-colors">شروط الاستخدام</a>
            <span>•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-amber-300 font-bold hover:underline flex items-center gap-1"
            >
              <span>لأعلى الصفحة</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

