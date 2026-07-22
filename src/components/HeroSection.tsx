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
  Layers,
  Menu
} from 'lucide-react';

interface HeroSectionProps {
  onSearchClick: () => void;
  onNavigateToPrd: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onOpenSidebar?: () => void;
  onOpenLoginModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchClick,
  onNavigateToPrd,
  activeNav,
  setActiveNav,
  onOpenSidebar,
  onOpenLoginModal
}) => {
  const [destination, setDestination] = useState('العلا، العلا القديمة');
  const [travelDate, setTravelDate] = useState('15 - 20 ديسمبر 2026');
  const [travelers, setTravelers] = useState('2 بالغين، 1 طفل');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoBackground, setIsVideoBackground] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'ar' | 'en'>('ar');

  // Autocomplete & Voice Search States
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [autocompleteFilter, setAutocompleteFilter] = useState('الكل');
  const [isListening, setIsListening] = useState(false);
  const [listeningText, setListeningText] = useState('');

  const autocompleteSuggestions = [
    {
      id: '1',
      title: 'العلا، العلا القديمة ومقابر الحجر',
      city: 'العلا',
      category: 'آثار وتراث',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=200',
      tags: ['جبال وصخور', 'منتجعات فاخرة', 'منطاد العلا'],
      rating: '4.9 ★'
    },
    {
      id: '2',
      title: 'حي البجيري والدرعية التاريخية',
      city: 'الدرعية والرياض',
      category: 'تراث وثقافة',
      image: 'https://images.unsplash.com/photo-1578895210405-907db48a7111?auto=format&fit=crop&q=80&w=200',
      tags: ['حي الطريف', 'مطاعم عالمية', 'متحف الدرعية'],
      rating: '4.95 ★'
    },
    {
      id: '3',
      title: 'جدة البلد والمشربيات الحجازية',
      city: 'جدة التاريخية',
      category: 'تراث وبحر',
      image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=200',
      tags: ['بيت نصيف', 'الكورنيش', 'مأكولات حجازية'],
      rating: '4.8 ★'
    },
    {
      id: '4',
      title: 'شواطئ نيوم وجزيرة سندالة الفاخرة',
      city: 'نيوم وتبوك',
      category: 'منتجعات وبحر',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=200',
      tags: ['يخوت ملكية', 'غوص مرجاني', 'سياحة حيوية'],
      rating: '5.0 ★'
    },
    {
      id: '5',
      title: 'جبال السودة وربى عسير الخضراء',
      city: 'أبها وعسير',
      category: 'طبيعة ومغامرات',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200',
      tags: ['تلفريك السودة', 'رجال ألمع', 'طقس بارد'],
      rating: '4.85 ★'
    },
    {
      id: '6',
      title: 'بوليفارد سيتي وموسم الرياض',
      city: 'الرياض',
      category: 'فعاليات وترفيه',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200',
      tags: ['عروض حية', 'تسوق فاره', 'مسارح سينما'],
      rating: '4.9 ★'
    },
    {
      id: '7',
      title: 'حافة العالم (مطل الفهرين الصحراوي)',
      city: 'الرياض',
      category: 'طبيعة ومغامرات',
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=200',
      tags: ['تخييم ليلى', 'تسلق الجبال', 'نجوم الصحراء'],
      rating: '4.9 ★'
    },
    {
      id: '8',
      title: 'وادي الديسة وعيون تبوك الطبيعية',
      city: 'تبوك',
      category: 'طبيعة ومغامرات',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=200',
      tags: ['جبال حمراء', 'عيون مائية', 'رحلات دفع رباعي'],
      rating: '4.88 ★'
    }
  ];

  // Voice Search Handler (Web Speech API or Fallback simulation)
  const handleStartVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.lang = 'ar-SA';
        recognition.interimResults = true;
        recognition.continuous = false;

        recognition.onstart = () => {
          setIsListening(true);
          setListeningText('جاري الاستماع... اتكلم الآن باسم الوجهة');
        };

        recognition.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map((result: any) => result.transcript)
            .join('');
          setDestination(transcript);
          setListeningText(`تم التقاط الصوت: "${transcript}"`);
        };

        recognition.onerror = () => {
          simulateVoiceSearch();
        };

        recognition.onend = () => {
          setIsListening(false);
          setShowAutocomplete(true);
        };

        recognition.start();
      } catch (e) {
        simulateVoiceSearch();
      }
    } else {
      simulateVoiceSearch();
    }
  };

  const simulateVoiceSearch = () => {
    setIsListening(true);
    setListeningText('🎙️ جاري تحليل نبرة الصوت وتحديد الوجهة...');
    const voicePhrases = [
      'العلا القديمة ومقابر الحجر',
      'حي البجيري والدرعية التاريخية',
      'شواطئ نيوم وسندالة الفاخرة',
      'جبال السودة وربى عسير الخضراء'
    ];
    let idx = 0;
    const interval = setInterval(() => {
      const phrase = voicePhrases[idx];
      setListeningText(`🎙️ صوت مسموع: "${phrase}"`);
      setDestination(phrase);
      idx = (idx + 1) % voicePhrases.length;
    }, 1100);

    setTimeout(() => {
      clearInterval(interval);
      setIsListening(false);
      setShowAutocomplete(true);
    }, 4400);
  };

  // Filtered autocomplete list
  const filteredSuggestions = autocompleteSuggestions.filter(item => {
    const matchesQuery = !destination || 
      item.title.toLowerCase().includes(destination.toLowerCase()) || 
      item.city.toLowerCase().includes(destination.toLowerCase()) ||
      item.category.toLowerCase().includes(destination.toLowerCase());
    
    const matchesCategory = autocompleteFilter === 'الكل' || item.category === autocompleteFilter;
    return matchesQuery && matchesCategory;
  });

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
            {onOpenSidebar && (
              <button 
                onClick={onOpenSidebar}
                className={`p-2.5 rounded-full border text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                  isScrolled 
                    ? 'bg-emerald-100 text-[#047857] border-emerald-300 hover:bg-emerald-200' 
                    : 'bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-md'
                }`}
                title="افتح القائمة الجانبية للأدوار والصفحات"
              >
                <Menu className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline font-black">القائمة</span>
              </button>
            )}

            <button 
              onClick={onOpenLoginModal}
              className={`font-black px-5 py-2.5 rounded-full shadow-lg transition-all text-xs sm:text-sm flex items-center gap-2 ${
                isScrolled 
                  ? 'bg-[#047857] hover:bg-[#065f46] text-white shadow-emerald-700/20' 
                  : 'bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 shadow-amber-500/30'
              }`}
            >
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

        {/* Large Floating Search Bar Container with Voice Search & Autocomplete */}
        <div className="relative w-full max-w-5xl bg-white/95 text-slate-800 rounded-3xl md:rounded-full p-3 sm:p-4 border border-emerald-900/10 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl mt-8">
          
          {/* Active Listening Voice Banner */}
          {isListening && (
            <div className="mb-3 p-3 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs font-black flex items-center justify-between animate-pulse shadow-sm">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-amber-600 animate-bounce" />
                <span>{listeningText || 'جاري الاستماع... تحدث الآن باللغة العربية'}</span>
              </div>
              <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                Voice AI Active 🎙️
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
            
            {/* Destination Field with Autocomplete & Voice Search Trigger */}
            <div className="relative md:col-span-4 bg-slate-50 hover:bg-slate-100 rounded-2xl md:rounded-full px-5 py-3.5 flex items-center justify-between gap-2 transition-all cursor-pointer border border-slate-200 focus-within:ring-2 focus-within:ring-[#047857]">
              
              <div className="text-right flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <label className="text-[11px] text-emerald-800 font-extrabold block">إلى أين تحلم بالسفر؟</label>
                  <span className="text-[9px] text-amber-700 font-bold bg-amber-100 px-1.5 py-0.2 rounded">إكمال تلقائي</span>
                </div>
                
                <input 
                  type="text" 
                  value={destination} 
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowAutocomplete(true);
                  }}
                  onFocus={() => setShowAutocomplete(true)}
                  className="bg-transparent text-slate-900 font-black text-xs sm:text-sm focus:outline-none w-full truncate"
                  placeholder="ابحث بالاسم، المدينة، أو النشاط..."
                />
              </div>

              {/* Voice Search Button */}
              <button
                type="button"
                onClick={handleStartVoiceSearch}
                className={`p-2 rounded-full transition-all border shrink-0 ${
                  isListening 
                    ? 'bg-amber-500 text-slate-950 border-amber-300 animate-ping' 
                    : 'bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200'
                }`}
                title="البحث الصوتي بالذكاء الاصطناعي"
              >
                <Mic className="w-4 h-4" />
              </button>

              <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#047857] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>

              {/* Autocomplete Dropdown Menu */}
              {showAutocomplete && (
                <div className="absolute top-full right-0 left-0 md:-right-4 md:w-[480px] mt-3 bg-white rounded-3xl border border-emerald-900/15 shadow-2xl z-50 p-4 text-right dir-rtl animate-fade-in max-h-[420px] overflow-y-auto">
                  
                  {/* Category Filter Pills */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <span className="text-xs font-black text-slate-900">اقتراحات البحث التلقائي (Autocomplete)</span>
                    <button 
                      onClick={() => setShowAutocomplete(false)}
                      className="text-[11px] text-slate-500 hover:text-slate-800 font-bold px-2 py-0.5 rounded bg-slate-100"
                    >
                      إغلاق ✕
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
                    {['الكل', 'آثار وتراث', 'تراث وثقافة', 'منتجعات وبحر', 'طبيعة ومغامرات', 'فعاليات وترفيه'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setAutocompleteFilter(cat)}
                        className={`px-3 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap transition-all border ${
                          autocompleteFilter === cat
                            ? 'bg-[#047857] text-white border-emerald-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Suggestions List */}
                  <div className="space-y-2">
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            setDestination(item.title);
                            setShowAutocomplete(false);
                          }}
                          className="p-2.5 rounded-2xl hover:bg-emerald-50/80 border border-slate-100 hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-12 h-12 rounded-xl object-cover border border-slate-200 group-hover:scale-105 transition-transform"
                            />
                            <div className="min-w-0 text-right">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black text-slate-900 truncate">{item.title}</span>
                                <span className="text-[10px] text-amber-700 bg-amber-50 font-bold px-1.5 rounded border border-amber-200 shrink-0">
                                  {item.rating}
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                                  {item.category}
                                </span>
                                <span className="text-[10px] font-medium text-slate-500 truncate">
                                  {item.tags.join(' • ')}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#047857] text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-slate-500 text-xs font-medium">
                        لا توجد وجهة متطابقة مع البحث. يمكنك استخدام الذكاء الاصطناعي للتخطيط المخصص.
                      </div>
                    )}
                  </div>

                  {/* Voice Search Shortcut Banner */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between bg-amber-50 p-2.5 rounded-2xl border border-amber-200">
                    <div className="flex items-center gap-2 text-amber-900 font-extrabold text-[11px]">
                      <Mic className="w-4 h-4 text-amber-600" />
                      <span>هل تفضل التحدث بصوتك؟</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleStartVoiceSearch}
                      className="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[11px] shadow-sm"
                    >
                      تحدث الآن
                    </button>
                  </div>

                </div>
              )}

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
                onClick={() => {
                  setShowAutocomplete(false);
                  onSearchClick();
                }}
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

