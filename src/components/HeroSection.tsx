import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Search, 
  Calendar, 
  Users, 
  MapPin, 
  Sparkles, 
  Moon, 
  Sun, 
  Globe, 
  User, 
  ArrowLeft,
  ChevronDown,
  Cpu,
  Palette,
  Layout,
  ShieldCheck,
  Luggage,
  Bot,
  Rotate3d,
  Ticket,
  Wallet,
  Building2,
  UserCheck,
  Award,
  Mic,
  Globe2,
  Play,
  Volume2,
  CheckCircle2,
  Star,
  Eye,
  Sliders,
  Layers
} from 'lucide-react';

interface HeroSectionProps {
  onSearchClick: () => void;
  onNavigateToPrd: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchClick,
  onNavigateToPrd,
  activeNav,
  setActiveNav
}) => {
  const [destination, setDestination] = useState('العلا، العلا القديمة');
  const [travelDate, setTravelDate] = useState('15 - 20 ديسمبر 2026');
  const [travelers, setTravelers] = useState('2 بالغين، 1 طفل');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoBackground, setIsVideoBackground] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'ar' | 'en'>('ar');

  // Handle sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden bg-[#fcfbf7]">
      
      {/* High Quality Panoramic Background Image with Bright Natural Saudi Landscape */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isVideoBackground ? (
          <div className="absolute inset-0 bg-emerald-950/20 backdrop-blur-[1px] z-10" />
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578895210405-907db48a7111?auto=format&fit=crop&q=80&w=2400')`,
            }}
          />
        )}

        {/* Bright Natural Atmospheric Gradients - Phase 20 Saudi Light Identity */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-[#fcfbf7]" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-amber-950/30" />
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-400/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Sticky / Dynamic Official Saudi Tourism Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-emerald-900/10 py-3 px-4 sm:px-8' 
          : 'bg-gradient-to-b from-slate-900/80 to-transparent pt-4 sm:pt-6 pb-2 px-4 sm:px-8'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Action Tools (Far Left in RTL) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className={`font-black px-5 py-2.5 rounded-full shadow-lg transition-all text-xs sm:text-sm flex items-center gap-2 ${
              isScrolled 
                ? 'bg-[#047857] hover:bg-[#065f46] text-white shadow-emerald-700/20' 
                : 'bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 shadow-amber-500/30'
            }`}>
              <User className="w-4 h-4" />
              <span>تسجيل الدخول</span>
            </button>

            <button 
              onClick={() => setSelectedLanguage(prev => prev === 'ar' ? 'en' : 'ar')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-bold transition-all ${
                isScrolled 
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100' 
                  : 'bg-white/15 text-white border-white/20 hover:bg-white/25 backdrop-blur-md'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>{selectedLanguage === 'ar' ? 'العربية (AR)' : 'English (EN)'}</span>
            </button>

            <button 
              onClick={() => setIsVideoBackground(!isVideoBackground)} 
              className={`p-2 rounded-full border text-xs font-bold transition-all ${
                isScrolled 
                  ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200' 
                  : 'bg-white/15 text-white border-white/20 hover:bg-white/25 backdrop-blur-md'
              }`}
              title="خلفية الفيديو والتفاعل"
            >
              <Play className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Navigation Links Bar */}
          <nav className="hidden lg:flex items-center gap-2 overflow-x-auto py-1 px-2">
            <button 
              onClick={() => setActiveNav('home')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeNav === 'home' 
                  ? (isScrolled ? 'bg-emerald-700 text-white shadow-md' : 'bg-amber-400 text-slate-950 shadow-md') 
                  : (isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-100 hover:bg-white/10')
              }`}
            >
              الرئيسية
            </button>

            <button 
              onClick={() => setActiveNav('destinations')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeNav === 'destinations' 
                  ? (isScrolled ? 'bg-emerald-700 text-white shadow-md' : 'bg-amber-400 text-slate-950 shadow-md') 
                  : (isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-100 hover:bg-white/10')
              }`}
            >
              الوجهات
            </button>

            <button 
              onClick={() => setActiveNav('events')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeNav === 'events' 
                  ? (isScrolled ? 'bg-emerald-700 text-white shadow-md' : 'bg-amber-400 text-slate-950 shadow-md') 
                  : (isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-100 hover:bg-white/10')
              }`}
            >
              الفعاليات
            </button>

            <button 
              onClick={() => setActiveNav('hotels')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeNav === 'hotels' 
                  ? (isScrolled ? 'bg-emerald-700 text-white shadow-md' : 'bg-amber-400 text-slate-950 shadow-md') 
                  : (isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-100 hover:bg-white/10')
              }`}
            >
              الفنادق
            </button>

            <button 
              onClick={() => setActiveNav('planner')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeNav === 'planner' 
                  ? (isScrolled ? 'bg-emerald-700 text-white shadow-md' : 'bg-amber-400 text-slate-950 shadow-md') 
                  : (isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-100 hover:bg-white/10')
              }`}
            >
              خطط رحلتك
            </button>

            {/* Quick Phase Shortcut Badge */}
            <button 
              onClick={onNavigateToPrd}
              className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1 ${
                isScrolled 
                  ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100' 
                  : 'bg-amber-400/20 text-amber-300 border-amber-400/40 hover:bg-amber-400 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Phase 1 PRD</span>
            </button>

            <button 
              onClick={() => setActiveNav('phase17')}
              className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1 ${
                isScrolled 
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100' 
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 hover:bg-emerald-400 hover:text-slate-900'
              }`}
            >
              <Mic className="w-3 h-3 text-emerald-500" />
              <span>Phase 17 Voice AI</span>
            </button>

            <button 
              onClick={() => setActiveNav('phase18')}
              className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1 ${
                isScrolled 
                  ? 'bg-purple-50 text-purple-900 border-purple-300 hover:bg-purple-100' 
                  : 'bg-purple-500/20 text-purple-300 border-purple-400/40 hover:bg-purple-400 hover:text-slate-900'
              }`}
            >
              <Globe2 className="w-3 h-3 text-purple-500" />
              <span>Phase 18 Digital Twin</span>
            </button>
          </nav>

          {/* Official Saudi Tourism Brand Logo (Far Right in RTL) */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setActiveNav('home')}>
            <div className="text-right">
              <div className="flex items-center gap-1.5 justify-end">
                <span className={`text-xl sm:text-2xl font-black tracking-tight ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  SAUDI EXPLORER
                </span>
              </div>
              <p className={`text-[10px] font-black tracking-wide ${
                isScrolled ? 'text-[#047857]' : 'text-amber-400'
              }`}>
                AI ✦ وزارة السياحة السعودية • رؤية 2030
              </p>
            </div>

            <div className={`w-11 h-11 rounded-2xl border-2 flex items-center justify-center shadow-lg transition-transform hover:scale-105 ${
              isScrolled 
                ? 'bg-[#047857] border-emerald-600 text-amber-300 shadow-emerald-900/20' 
                : 'bg-emerald-900/80 border-emerald-400/60 text-amber-300 shadow-emerald-950/60'
            }`}>
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
          </div>

        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-16 text-center flex flex-col items-center justify-center my-auto w-full space-y-6">
        
        {/* Official Saudi Tourism Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-emerald-500/30 text-emerald-900 text-xs sm:text-sm font-bold shadow-xl backdrop-blur-xl animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-[#047857] animate-ping" />
          <span>منصة الذكاء السياحي الموحدة • الهوية الرسمية للوجهات السعودية</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.15] max-w-5xl font-sans drop-shadow-2xl">
          <span>Explore Saudi Arabia</span> <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
            with AI
          </span> <br />
          <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 block mt-2">
            اكتشف جمال المملكة بذكاء استثنائي
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-slate-100 text-base sm:text-xl font-medium max-w-3xl leading-relaxed text-shadow drop-shadow-md">
          رحلتك تبدأ من هنا. خطط، احجز، واستكشف أروع الوجهات السعودية بمساعدة الذكاء الاصطناعي وتجربة فاخرة بمستوى عالمي.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              const elem = document.getElementById('destinations-grid-section');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#047857] hover:bg-[#065f46] text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base flex items-center gap-2 border border-emerald-400/40"
          >
            <Compass className="w-5 h-5 text-amber-300" />
            <span>ابدأ الاستكشاف الآن (Start Exploring)</span>
          </button>

          <button
            onClick={onSearchClick}
            className="bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base flex items-center gap-2 border border-amber-300/60"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>خطط رحلتك بالذكاء الاصطناعي (Plan My Trip with AI)</span>
          </button>
        </div>

        {/* Large Floating Search Bar Container (Matching Official Saudi Tourism Search Portal) */}
        <div className="w-full max-w-5xl bg-white/95 text-slate-800 rounded-3xl md:rounded-full p-3 sm:p-4 border border-emerald-900/10 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl mt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
            
            {/* Destination Field */}
            <div className="md:col-span-4 bg-slate-50 hover:bg-slate-100 rounded-2xl md:rounded-full px-5 py-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer border border-slate-200">
              <div className="text-right flex-1 min-w-0">
                <label className="text-[11px] text-emerald-800 font-extrabold block mb-0.5">إلى أين تحلم بالسفر؟</label>
                <input 
                  type="text" 
                  value={destination} 
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-slate-900 font-black text-xs sm:text-sm focus:outline-none w-full truncate"
                  placeholder="اختر المدينة أو الوجهة..."
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#047857] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            {/* Travel Date Field */}
            <div className="md:col-span-3 bg-slate-50 hover:bg-slate-100 rounded-2xl md:rounded-full px-5 py-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer border border-slate-200">
              <div className="text-right flex-1 min-w-0">
                <label className="text-[11px] text-emerald-800 font-extrabold block mb-0.5">متى ترغب بالذهاب؟</label>
                <input 
                  type="text" 
                  value={travelDate} 
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="bg-transparent text-slate-900 font-black text-xs sm:text-sm focus:outline-none w-full truncate"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#047857] flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            {/* Travelers Field */}
            <div className="md:col-span-3 bg-slate-50 hover:bg-slate-100 rounded-2xl md:rounded-full px-5 py-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer border border-slate-200">
              <div className="text-right flex-1 min-w-0">
                <label className="text-[11px] text-emerald-800 font-extrabold block mb-0.5">عدد المسافرين</label>
                <input 
                  type="text" 
                  value={travelers} 
                  onChange={(e) => setTravelers(e.target.value)}
                  className="bg-transparent text-slate-900 font-black text-xs sm:text-sm focus:outline-none w-full truncate"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#047857] flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button 
                onClick={onSearchClick}
                className="w-full h-full min-h-[52px] bg-[#047857] hover:bg-[#065f46] text-white font-extrabold rounded-2xl md:rounded-full px-6 py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-emerald-800/30 hover:scale-[1.02] active:scale-95 transition-all text-sm sm:text-base border border-emerald-500/40"
              >
                <Search className="w-5 h-5 text-amber-300" />
                <span>ابحث الآن</span>
              </button>
            </div>

          </div>
        </div>

        {/* Quick Destinations Tags Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-200">
          <span className="text-amber-300 font-extrabold">الوجهات الشائعة:</span>
          {['العلا الآثار والتراث', 'الدرعية البجيري', 'جدة البلد والمشربيات', 'شواطئ نيوم وسندالة', 'السودة وربى عسير', 'الرياض البوليفارد'].map((tag, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDestination(tag);
                onSearchClick();
              }}
              className="px-3.5 py-1.5 rounded-full bg-slate-900/60 hover:bg-emerald-900/80 text-white border border-white/20 hover:border-emerald-400 transition-all font-bold backdrop-blur-md"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* National Key Highlights Counters & Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl pt-6">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/10 shadow-lg text-slate-800 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-[#047857] flex items-center justify-center shrink-0 font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-[#047857] block">100+</span>
              <span className="text-[11px] text-slate-600 font-bold">وجهة سياحية موثقة</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/10 shadow-lg text-slate-800 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-[#d97706] flex items-center justify-center shrink-0 font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-[#d97706] block">100M+</span>
              <span className="text-[11px] text-slate-600 font-bold">مستهدف زوار 2030</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/10 shadow-lg text-slate-800 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-[#047857] flex items-center justify-center shrink-0 font-bold">
              <Bot className="w-6 h-6" />
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-[#047857] block">24/7</span>
              <span className="text-[11px] text-slate-600 font-bold">مرشد ذكاء اصطناعي</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/10 shadow-lg text-slate-800 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-[#d97706] flex items-center justify-center shrink-0 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-[#d97706] block">100%</span>
              <span className="text-[11px] text-slate-600 font-bold">حجوزات آمنة وموثوقة</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

