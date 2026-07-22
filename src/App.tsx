import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
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
  Heart
} from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [currentActiveRole, setCurrentActiveRole] = useState('Tourist');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
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

  const handleScrollToPrd = () => {
    setActiveNav('prd');
    const elem = document.getElementById('prd-document-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToArchitecture = () => {
    setActiveNav('architecture');
    const elem = document.getElementById('architecture-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBrand = () => {
    setActiveNav('brand');
    const elem = document.getElementById('brand-identity-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToUx = () => {
    setActiveNav('ux');
    const elem = document.getElementById('ux-design-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAuth = () => {
    setActiveNav('auth');
    const elem = document.getElementById('auth-system-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTourist = () => {
    setActiveNav('tourist');
    const elem = document.getElementById('tourist-portal-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAi = () => {
    setActiveNav('ai');
    const elem = document.getElementById('ai-services-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMaps = () => {
    setActiveNav('maps');
    const elem = document.getElementById('ai-services-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBooking = () => {
    setActiveNav('booking');
    const elem = document.getElementById('booking-services-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWallet = () => {
    setActiveNav('wallet');
    const elem = document.getElementById('phase10-wallet-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToInvestor = () => {
    setActiveNav('investor');
    const elem = document.getElementById('phase11-investor-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBusiness = () => {
    setActiveNav('business');
    const elem = document.getElementById('phase12-business-portal-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToGuide = () => {
    setActiveNav('guide');
    const elem = document.getElementById('phase13-tour-guide-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMinistry = () => {
    setActiveNav('ministry');
    const elem = document.getElementById('phase14-ministry-dashboard-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSuperAdmin = () => {
    setActiveNav('superadmin');
    const elem = document.getElementById('phase15-super-admin-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDemo = () => {
    setActiveNav('demo');
    const elem = document.getElementById('phase16-demo-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPhase17 = () => {
    setActiveNav('phase17');
    const elem = document.getElementById('phase17-advanced-ai-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPhase18 = () => {
    setActiveNav('phase18');
    const elem = document.getElementById('phase18-digital-twin-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigatePhaseKey = (phaseKey: string) => {
    if (phaseKey === 'prd') handleScrollToPrd();
    else if (phaseKey === 'architecture') handleScrollToArchitecture();
    else if (phaseKey === 'brand') handleScrollToBrand();
    else if (phaseKey === 'ux') handleScrollToUx();
    else if (phaseKey === 'auth') handleScrollToAuth();
    else if (phaseKey === 'tourist') handleScrollToTourist();
    else if (phaseKey === 'ai') handleScrollToAi();
    else if (phaseKey === 'maps') handleScrollToMaps();
    else if (phaseKey === 'booking') handleScrollToBooking();
    else if (phaseKey === 'wallet') handleScrollToWallet();
    else if (phaseKey === 'investor') handleScrollToInvestor();
    else if (phaseKey === 'business') handleScrollToBusiness();
    else if (phaseKey === 'guide') handleScrollToGuide();
    else if (phaseKey === 'ministry') handleScrollToMinistry();
    else if (phaseKey === 'superadmin') handleScrollToSuperAdmin();
    else if (phaseKey === 'demo') handleScrollToDemo();
    else if (phaseKey === 'phase17') handleScrollToPhase17();
    else if (phaseKey === 'phase18') handleScrollToPhase18();
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-slate-900 font-sans selection:bg-[#f59e0b] selection:text-slate-950 dir-rtl" dir="rtl">
      
      {/* Official MVP Notice Top Bar */}
      <div className="bg-emerald-950 text-emerald-100 py-2 px-4 text-center text-xs font-bold border-b border-emerald-800/80 flex items-center justify-center gap-2 shadow-sm z-50 relative">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
        <span>هذا نموذج أولي (MVP) لأغراض العرض والتقييم. جميع البيانات والخدمات المعروضة تجريبية وغير مرتبطة بأنظمة تشغيل حقيقية.</span>
      </div>

      {/* Hero Section with reference screenshot aesthetics */}
      <HeroSection 
        onSearchClick={() => handleOpenAiPlanner('العلا والرياض')}
        onNavigateToPrd={handleScrollToPrd}
        activeNav={activeNav}
        setActiveNav={(nav) => {
          setActiveNav(nav);
          if (nav === 'planner') {
            handleOpenAiPlanner();
          } else if (nav === 'prd') {
            handleScrollToPrd();
          } else if (nav === 'architecture') {
            handleScrollToArchitecture();
          } else if (nav === 'brand') {
            handleScrollToBrand();
          } else if (nav === 'ux') {
            handleScrollToUx();
          } else if (nav === 'auth') {
            handleScrollToAuth();
          } else if (nav === 'tourist') {
            handleScrollToTourist();
          } else if (nav === 'ai') {
            handleScrollToAi();
          } else if (nav === 'maps') {
            handleScrollToMaps();
          } else if (nav === 'booking') {
            handleScrollToBooking();
          } else if (nav === 'wallet') {
            handleScrollToWallet();
          } else if (nav === 'investor') {
            handleScrollToInvestor();
          } else if (nav === 'business') {
            handleScrollToBusiness();
          } else if (nav === 'guide') {
            handleScrollToGuide();
          } else if (nav === 'ministry') {
            handleScrollToMinistry();
          } else if (nav === 'superadmin') {
            handleScrollToSuperAdmin();
          } else if (nav === 'demo') {
            handleScrollToDemo();
          } else if (nav === 'phase17') {
            handleScrollToPhase17();
          } else if (nav === 'phase18') {
            handleScrollToPhase18();
          }
        }}
      />

      {/* Main Feature Sections based on Navigation State */}
      <main className="space-y-4">
        
        {/* Phase 18 Digital Twin, Predictive AI & National Tourism Operations Center */}
        <div id="phase18-digital-twin-section">
          <DigitalTwinOpsCenterViewer />
        </div>

        {/* Phase 17 Advanced AI, Voice Assistant, 3D Guide Avatar & Immersive AR Experience */}
        <div id="phase17-advanced-ai-section">
          <AdvancedAiVoiceArViewer />
        </div>

        {/* Phase 16 Production Ready Showcase, Demo Mode Banner & RBAC Role Simulator */}
        <div id="phase16-demo-section">
          <ProductionReadyDemoViewer
            onNavigatePhase={handleNavigatePhaseKey}
            currentActiveRole={currentActiveRole}
            onChangeRole={(role) => setCurrentActiveRole(role)}
          />
        </div>

        {/* Phase 15 Super Admin Dashboard, Platform Management & System Administration */}
        <SuperAdminDashboardViewer />

        {/* Phase 14 Ministry of Tourism Dashboard & National Tourism Intelligence Center */}
        <MinistryTourismDashboardViewer />

        {/* Phase 13 Tour Guide Portal & Guided Experience Management */}
        <TourGuidePortalViewer />

        {/* Phase 12 Tourism Business Portal & Business Management System */}
        <TourismBusinessPortalViewer />

        {/* Phase 11 Investor Portal & Investment Intelligence Dashboard */}
        <InvestorPortalViewer />

        {/* Phase 10 Digital Wallet, Tourist Passport & Rewards System */}
        <WalletPassportRewardsViewer />

        {/* Phase 9 Tourism Services & Smart Booking System */}
        <BookingSystemViewer />

        {/* Phase 8 Smart Maps, Navigation & Augmented Reality (AR) */}
        <SmartMapsViewer />

        {/* Phase 7 AI Concierge, Smart Trip Planner & Recommendations */}
        <AiConciergeViewer />

        {/* Phase 6 Tourist Portal & Smart Travel Experience */}
        <TouristPortalViewer />

        {/* Destinations Grid */}
        <DestinationsGrid 
          onPlanDestination={(destName) => handleOpenAiPlanner(destName)}
        />

        {/* Events & Luxury Hotels */}
        <EventsAndHotels 
          onBookItem={(item) => setBookingItem(item)}
        />

        {/* Phase 5 Authentication & RBAC Viewer */}
        <AuthSystemViewer />

        {/* Phase 4 UX & Wireframes Design Viewer */}
        <UxDesignViewer />

        {/* Phase 3 Brand Identity & Visual Design Viewer */}
        <BrandIdentityViewer />

        {/* Phase 2 Architecture Viewer */}
        <ArchitectureViewer />

        {/* PRD Document Viewer Section (Phase 1 Requirement) */}
        <PrdViewer />

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
      <footer className="bg-[#022c22] text-white border-t border-emerald-500/20 pt-16 pb-12 px-4 sm:px-8 text-right font-sans">
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
              <li><button onClick={handleScrollToPhase17} className="hover:text-amber-300 transition-colors">المساعد الصوتي Voice AI</button></li>
              <li><button onClick={handleScrollToPhase18} className="hover:text-amber-300 transition-colors">التوأم الرقمي Digital Twin</button></li>
              <li><button onClick={handleScrollToPhase17} className="hover:text-amber-300 transition-colors">المرشد الصوتي 3D Avatar</button></li>
              <li><button onClick={() => handleOpenAiPlanner()} className="hover:text-amber-300 transition-colors">مخطط الرحلات التفاعلي</button></li>
              <li><button onClick={handleScrollToPrd} className="hover:text-amber-300 transition-colors">وثيقة PRD Phase 1</button></li>
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
