import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Navigation,
  Compass,
  Camera,
  Rotate3d,
  ZoomIn,
  ZoomOut,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Star,
  Clock,
  Car,
  Train,
  Plane,
  Bus,
  ShieldAlert,
  SlidersHorizontal,
  Info,
  CheckCircle2,
  Heart,
  Calendar,
  Layers,
  Sparkles,
  Search,
  Maximize2,
  Minimize2,
  Share2,
  ChevronRight,
  Eye,
  Fuel,
  Hospital,
  Coffee,
  Bed,
  Sparkle,
  History,
  X,
  Languages,
  Check,
  Zap,
  Users,
  Baby,
  Accessibility,
  Flame,
  Globe
} from 'lucide-react';
import {
  demoPoiLocationsList,
  saudiCitiesMapData,
  demoRouteOptionsList,
  cityWeatherMapInfo,
  MapLocationPoi,
  RouteOption
} from '../data/smartMapsData';

export const SmartMapsViewer: React.FC = () => {
  // Navigation tabs within Phase 8
  const [activeTab, setActiveTab] = useState<'map' | 'ar' | 'route' | 'weather'>('map');

  // Map Filter States
  const [selectedCity, setSelectedCity] = useState<string>('الكل');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [filterFamilyOnly, setFilterFamilyOnly] = useState<boolean>(false);
  const [filterKidsOnly, setFilterKidsOnly] = useState<boolean>(false);
  const [filterDisabledOnly, setFilterDisabledOnly] = useState<boolean>(false);

  // Map state
  const [activePoi, setActivePoi] = useState<MapLocationPoi | null>(demoPoiLocationsList[0]);
  const [favoritedPoiIds, setFavoritedPoiIds] = useState<string[]>(['poi-1']);
  const [itineraryPoiIds, setItineraryPoiIds] = useState<string[]>(['poi-2']);
  const [radarScanning, setRadarScanning] = useState<boolean>(true);

  // Route Planner state
  const [selectedRoute, setSelectedRoute] = useState<RouteOption>(demoRouteOptionsList[0]);
  const [activeRouteMode, setActiveRouteMode] = useState<'سيارة خاصة' | 'قطار الحرمين السريع' | 'طيران داخلي' | 'حافلة سياحية'>('سيارة خاصة');
  const [simulationProgress, setSimulationProgress] = useState<number>(35);

  // AR View State
  const [arModalOpen, setArModalOpen] = useState<boolean>(false);
  const [selectedArPoi, setSelectedArPoi] = useState<MapLocationPoi>(demoPoiLocationsList[0]);
  const [arReconstructionMode, setArReconstructionMode] = useState<boolean>(true);
  const [arRotationAngle, setArRotationAngle] = useState<number>(25);
  const [arZoomLevel, setArZoomLevel] = useState<number>(1);
  const [arGuidePlaying, setArGuidePlaying] = useState<boolean>(false);
  const [arGuideSpeed, setArGuideSpeed] = useState<number>(1);
  const [arGuideLanguage, setArGuideLanguage] = useState<'ar' | 'en'>('ar');
  const [arAudioProgress, setArAudioProgress] = useState<number>(40);

  // Canvas Ref for 3D AR Simulation
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Toggle Favorites
  const toggleFavorite = (id: string) => {
    setFavoritedPoiIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Toggle Itinerary
  const toggleItinerary = (id: string) => {
    setItineraryPoiIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter logic for POIs
  const filteredPois = demoPoiLocationsList.filter(poi => {
    if (selectedCity !== 'الكل' && poi.city !== selectedCity) return false;
    if (selectedCategory !== 'all' && poi.category !== selectedCategory) return false;
    if (selectedPrice !== 'all' && poi.priceLevel !== selectedPrice) return false;
    if (filterFamilyOnly && !poi.familyFriendly) return false;
    if (filterKidsOnly && !poi.kidsFriendly) return false;
    if (filterDisabledOnly && !poi.accessibleForDisabled) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        poi.name.toLowerCase().includes(q) ||
        poi.description.toLowerCase().includes(q) ||
        poi.city.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Render 3D Canvas Wireframe & Reconstructed Mesh for AR
  useEffect(() => {
    if (!canvasRef.current || !arModalOpen) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = arRotationAngle;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2 + 20;

      // Draw Grid / Ground Circle
      ctx.beginPath();
      ctx.strokeStyle = arReconstructionMode ? 'rgba(217, 119, 6, 0.4)' : 'rgba(16, 185, 129, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.ellipse(centerX, centerY + 80, 160 * arZoomLevel, 50 * arZoomLevel, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Render 3D Simulated Tomb / Palace Mesh based on angle
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);

      // Draw 3D Pyramid/Tomb Tomb Structure
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(arZoomLevel, arZoomLevel);

      // Facade Base
      ctx.beginPath();
      ctx.fillStyle = arReconstructionMode ? 'rgba(245, 158, 11, 0.25)' : 'rgba(52, 211, 153, 0.2)';
      ctx.strokeStyle = arReconstructionMode ? '#f59e0b' : '#10b981';
      ctx.lineWidth = 2;

      // 3D Box vertices projection
      const width = 120;
      const height = 150;

      const p1 = { x: -width * cos, y: -height + width * sin * 0.2 };
      const p2 = { x: width * cos, y: -height - width * sin * 0.2 };
      const p3 = { x: width * cos, y: width * sin * 0.2 };
      const p4 = { x: -width * cos, y: -width * sin * 0.2 };

      // Front Face
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Columns / Nabataean Relief Top
      if (arReconstructionMode) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(251, 191, 36, 0.4)';
        ctx.rect(-60 * cos, -height - 20, 120 * cos, 20);
        ctx.fill();
        ctx.stroke();

        // Doorway
        ctx.beginPath();
        ctx.fillStyle = 'rgba(17, 24, 39, 0.8)';
        ctx.rect(-25 * cos, -50, 50 * cos, 50);
        ctx.fill();
        ctx.stroke();
      }

      ctx.restore();

      // Rotating scanner ring
      angle += 0.5;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [arModalOpen, arRotationAngle, arZoomLevel, arReconstructionMode]);

  return (
    <section id="ai-services-section" className="py-12 bg-slate-950 text-slate-100 border-t border-emerald-900/40 relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3 shadow-lg shadow-emerald-950/50"
          >
            <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>المرحلة 8 — الخرائط الذكية والتنقل والتأثيرات AR</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            استكشاف المملكة بالواقع المعزز والخرائط التفاعلية
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            خريطة ذكية شاملة مدعومة بتوجيه ثلاثي الأبعاد، الواقع المعزز (AR)، تخطيط المسارات المباشر، وتنبيهات الطقس والازدحام المحظورة.
          </p>

          {/* Navigation Sub-Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === 'map'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>الخريطة التفاعلية والأنشطة</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('ar');
                setArModalOpen(true);
              }}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === 'ar'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-900/40 border border-amber-300'
                  : 'bg-slate-900/80 text-amber-400 border border-amber-500/30 hover:bg-slate-800'
              }`}
            >
              <Rotate3d className="w-4 h-4 animate-bounce" />
              <span>تجربة الواقع المعزز (AR)</span>
            </button>

            <button
              onClick={() => setActiveTab('route')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === 'route'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>مخطط المسارات والتنقل الذكي</span>
            </button>

            <button
              onClick={() => setActiveTab('weather')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === 'weather'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-300" />
              <span>الطقس والتوصيات المناخية</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SMART MAP & FILTERS */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                {/* Search input */}
                <div className="relative">
                  <Search className="absolute right-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن معلم، فندق، مطعم..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-9 pl-3 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* City Selector */}
                <div>
                  <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="الكل">جميع المدن السعودية</option>
                    <option value="العلا">العلا</option>
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="أبها">أبها</option>
                    <option value="الدرعية">الدرعية</option>
                  </select>
                </div>

                {/* Category Selector */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="all">جميع التصنيفات والمرافق</option>
                    <option value="historical">المواقع التاريخية والأثرية</option>
                    <option value="museum">المتاحف والثقافة</option>
                    <option value="hotel">الفنادق والمنتجعات</option>
                    <option value="restaurant">المطاعم والمقاهي</option>
                    <option value="nature">الشواطئ والجبال والحدائق</option>
                    <option value="hospital">المستشفيات والرعاية الصحّية</option>
                    <option value="gas">محطات الوقود والمواقف</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <select
                    value={selectedPrice}
                    onChange={e => setSelectedPrice(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="all">جميع مستويات الأسعار</option>
                    <option value="مجاني">مجاني</option>
                    <option value="اقتصادي">اقتصادي</option>
                    <option value="متوسط">متوسط</option>
                    <option value="فاخر">فاخر</option>
                  </select>
                </div>
              </div>

              {/* Toggle Pills */}
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400 font-semibold flex items-center gap-1 ml-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                  خصائص الفلترة:
                </span>

                <button
                  onClick={() => setFilterFamilyOnly(!filterFamilyOnly)}
                  className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                    filterFamilyOnly
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>مناسب للعائلات</span>
                </button>

                <button
                  onClick={() => setFilterKidsOnly(!filterKidsOnly)}
                  className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                    filterKidsOnly
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Baby className="w-3.5 h-3.5" />
                  <span>مناسب للأطفال</span>
                </button>

                <button
                  onClick={() => setFilterDisabledOnly(!filterDisabledOnly)}
                  className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                    filterDisabledOnly
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Accessibility className="w-3.5 h-3.5" />
                  <span>مجهز لذوي الإعاقة</span>
                </button>

                <button
                  onClick={() => setRadarScanning(!radarScanning)}
                  className="mr-auto text-xs text-amber-400 hover:underline flex items-center gap-1"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{radarScanning ? 'إيقاف مسح الرادار' : 'تفعيل مسح الرادار'}</span>
                </button>
              </div>
            </div>

            {/* MAP & SIDEBAR GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Interactive Map Visual Area (8 Cols) */}
              <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 relative overflow-hidden shadow-2xl min-h-[500px]">
                
                {/* Map Control Header */}
                <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-bold text-slate-200">الخريطة التفاعلية الموحدة للمملكة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md text-amber-300 font-mono">
                      {filteredPois.length} موقع متوفر
                    </span>
                  </div>
                </div>

                {/* Simulated Canvas Map Backdrop */}
                <div className="relative w-full h-[450px] bg-[#0c1f18] rounded-xl border border-emerald-900/50 overflow-hidden flex items-center justify-center">
                  
                  {/* Geographic Grid Lines & Decorative Vector Elements */}
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
                  
                  {/* Radar Sweep Effect */}
                  {radarScanning && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-emerald-500/20 pointer-events-none animate-pulse">
                      <div className="w-full h-full rounded-full border border-emerald-400/10" />
                    </div>
                  )}

                  {/* Saudi Kingdom Contour Outline Simulation */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 20,20 Q 40,10 70,25 Q 90,40 80,70 Q 60,95 30,85 Q 10,60 20,20 Z"
                      fill="rgba(16, 185, 129, 0.05)"
                      stroke="rgba(52, 211, 153, 0.4)"
                      strokeWidth="0.8"
                      strokeDasharray="2,2"
                    />
                  </svg>

                  {/* Render Saudi Cities Base Anchors */}
                  {saudiCitiesMapData.map(city => (
                    <div
                      key={city.id}
                      style={{ top: `${city.lat}%`, right: `${city.lng}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none z-0"
                    >
                      <span className="w-3 h-3 rounded-full bg-amber-400/30 border border-amber-300 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                      </span>
                      <span className="text-[10px] font-bold text-amber-200 bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                        {city.name}
                      </span>
                    </div>
                  ))}

                  {/* Render POIs Map Pins */}
                  {filteredPois.map(poi => {
                    const isSelected = activePoi?.id === poi.id;

                    return (
                      <motion.button
                        key={poi.id}
                        onClick={() => setActivePoi(poi)}
                        whileHover={{ scale: 1.25 }}
                        style={{ top: `${poi.lat}%`, right: `${poi.lng}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all focus:outline-none ${
                          isSelected ? 'z-30' : 'z-10'
                        }`}
                      >
                        <div className="relative group">
                          {/* Pulsing ring for selected POI */}
                          {isSelected && (
                            <span className="absolute -inset-2 rounded-full bg-amber-400/40 animate-ping" />
                          )}

                          <div
                            className={`p-2 rounded-full shadow-lg border flex items-center justify-center transition-all ${
                              isSelected
                                ? 'bg-amber-400 text-slate-950 border-white scale-125'
                                : poi.arSupported
                                ? 'bg-emerald-600 text-white border-emerald-300 hover:bg-emerald-500'
                                : 'bg-slate-900 text-emerald-400 border-emerald-500/50 hover:bg-slate-800'
                            }`}
                          >
                            <MapPin className="w-4 h-4" />
                          </div>

                          {/* Hover Tooltip */}
                          <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-40 pointer-events-none">
                            <div className="bg-slate-900 text-slate-100 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700 whitespace-nowrap shadow-xl">
                              {poi.name}
                              {poi.arSupported && (
                                <span className="mr-1 text-amber-400 font-extrabold">(AR)</span>
                              )}
                            </div>
                            <div className="w-2 h-2 bg-slate-900 border-r border-b border-slate-700 rotate-45 -mt-1" />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}

                  {/* Map Legend & AR Indicator */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/90 border border-slate-800 rounded-lg p-2.5 text-[11px] space-y-1 text-slate-300 z-20 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 font-bold text-slate-200 border-b border-slate-800 pb-1 mb-1">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>دليل رموز الخريطة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span>الموقع المحدد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span>يدعم الواقع المعزز (AR)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-emerald-500" />
                      <span>مرفق سياحي/خدمي</span>
                    </div>
                  </div>
                </div>

                {/* Nearby Category Quick Pills */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                  <span className="text-slate-400 font-bold whitespace-nowrap flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5 text-amber-400" />
                    الأماكن القريبة:
                  </span>
                  
                  <button
                    onClick={() => setSelectedCategory('restaurant')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 whitespace-nowrap flex items-center gap-1"
                  >
                    <Coffee className="w-3 h-3 text-amber-400" />
                    <span>مطاعم ومقاهي</span>
                  </button>

                  <button
                    onClick={() => setSelectedCategory('hotel')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 whitespace-nowrap flex items-center gap-1"
                  >
                    <Bed className="w-3 h-3 text-emerald-400" />
                    <span>فنادق ومنتجعات</span>
                  </button>

                  <button
                    onClick={() => setSelectedCategory('hospital')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 whitespace-nowrap flex items-center gap-1"
                  >
                    <Hospital className="w-3 h-3 text-red-400" />
                    <span>مستشفيات وصيدليات</span>
                  </button>

                  <button
                    onClick={() => setSelectedCategory('gas')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 whitespace-nowrap flex items-center gap-1"
                  >
                    <Fuel className="w-3 h-3 text-cyan-400" />
                    <span>محطات وقود ومواقف</span>
                  </button>
                </div>
              </div>

              {/* Selected Location Details Card (4 Cols) */}
              <div className="lg:col-span-4 space-y-4">
                {activePoi ? (
                  <motion.div
                    key={activePoi.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden"
                  >
                    {/* Location Image Banner */}
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4 group">
                      <img
                        src={activePoi.image}
                        alt={activePoi.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                        {activePoi.categoryLabel}
                      </div>

                      {activePoi.arSupported && (
                        <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-black px-2.5 py-1 rounded-lg text-xs flex items-center gap-1 shadow-md">
                          <Rotate3d className="w-3.5 h-3.5" />
                          <span>AR جاهز</span>
                        </div>
                      )}

                      <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white">
                        <span className="text-xs font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                          {activePoi.city}
                        </span>
                        <div className="flex items-center gap-1 bg-amber-400/90 text-slate-950 px-2 py-0.5 rounded font-black text-xs">
                          <Star className="w-3 h-3 fill-slate-950" />
                          <span>{activePoi.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Location Info */}
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {activePoi.name}
                    </h3>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      {activePoi.description}
                    </p>

                    {/* Details Badges */}
                    <div className="space-y-2 text-xs border-y border-slate-800 py-3 mb-4">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          أوقات العمل:
                        </span>
                        <span className="font-semibold text-slate-200">{activePoi.openingHours}</span>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5 text-amber-400" />
                          أفضل وقت للزيارة:
                        </span>
                        <span className="font-semibold text-amber-300">{activePoi.bestTimeToVisit}</span>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Car className="w-3.5 h-3.5 text-emerald-400" />
                          وقت الوصول المتوقع:
                        </span>
                        <span className="font-semibold text-slate-200">{activePoi.estimatedArrival}</span>
                      </div>
                    </div>

                    {/* Available Services Chips */}
                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-slate-400 mb-2">الخدمات المتوفرة بالموقع:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activePoi.services.map((srv, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-800 text-slate-300 text-[11px] px-2.5 py-1 rounded-md border border-slate-700/80 flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      {activePoi.arSupported && (
                        <button
                          onClick={() => {
                            setSelectedArPoi(activePoi);
                            setArModalOpen(true);
                          }}
                          className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 transition-all"
                        >
                          <Rotate3d className="w-4 h-4 animate-spin-slow" />
                          <span>استكشاف بالواقع المعزز (AR 3D)</span>
                        </button>
                      )}

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => toggleItinerary(activePoi.id)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                            itineraryPoiIds.includes(activePoi.id)
                              ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-500/50'
                              : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>{itineraryPoiIds.includes(activePoi.id) ? 'مضاف للرحلة' : 'إضافة للرحلة'}</span>
                        </button>

                        <button
                          onClick={() => toggleFavorite(activePoi.id)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                            favoritedPoiIds.includes(activePoi.id)
                              ? 'bg-red-950/80 text-red-300 border border-red-500/50'
                              : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${favoritedPoiIds.includes(activePoi.id) ? 'fill-red-400 text-red-400' : 'text-slate-400'}`} />
                          <span>{favoritedPoiIds.includes(activePoi.id) ? 'في المفضلة' : 'للمفضلة'}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-sm">
                    اختر موقعاً من الخريطة لعرض تفاصيله الكاملة.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AR EXPERIMENTAL SIMULATOR MODAL / VIEW */}
        {(activeTab === 'ar' || arModalOpen) && (
          <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full p-5 sm:p-6 shadow-2xl relative my-auto overflow-hidden text-slate-100"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setArModalOpen(false);
                    if (activeTab === 'ar') setActiveTab('map');
                  }}
                  className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white border border-slate-700 z-50"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* AR Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <div className="p-3 rounded-2xl bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-900/50">
                    <Rotate3d className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      مستكشف الواقع المعزز (AR 3D Interactive Simulator)
                    </h3>
                    <p className="text-xs text-slate-400">
                      محاكاة تفاعلية للكاميرا الافتراضية وإعادة التجسيد التاريخي للموقع والمعالم بـ 360 درجة.
                    </p>
                  </div>
                </div>

                {/* AR Viewfinder Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Viewfinder Screen (7 Cols) */}
                  <div className="lg:col-span-7 bg-slate-950 border border-emerald-900/60 rounded-2xl overflow-hidden relative min-h-[420px] flex flex-col justify-between p-4 shadow-inner">
                    
                    {/* Viewfinder Camera Background Simulation */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 filter contrast-125"
                      style={{ backgroundImage: `url(${selectedArPoi.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />

                    {/* Interactive 3D Canvas Overlay */}
                    <canvas
                      ref={canvasRef}
                      width={480}
                      height={320}
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    />

                    {/* Camera HUD Grid Overlay */}
                    <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-emerald-400 bg-slate-950/60 p-2 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        <span>AR LIVE STREAM [CAM-01]</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>AZIMUTH: 184° S</span>
                        <span>DEPTH: 12.4m</span>
                      </div>
                    </div>

                    {/* Center AR Pointer Target */}
                    <div className="relative z-20 my-auto text-center pointer-events-none">
                      <div className="inline-block p-4 rounded-full border border-dashed border-amber-400/80 animate-spin-slow">
                        <div className="w-16 h-16 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                          <span className="w-2 h-2 bg-amber-400 rounded-full" />
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-mono font-bold text-amber-300 bg-slate-950/80 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
                        {selectedArPoi.arModelTitle || selectedArPoi.name}
                      </div>
                    </div>

                    {/* AR Controls Overlay */}
                    <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800 backdrop-blur-md">
                      
                      {/* Rotate & Zoom Buttons */}
                      <div className="flex items-center gap-1.5 text-xs">
                        <button
                          onClick={() => setArRotationAngle(prev => (prev - 15) % 360)}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center gap-1 border border-slate-700"
                        >
                          <Rotate3d className="w-3.5 h-3.5 text-amber-400" />
                          <span>تدوير 360°</span>
                        </button>

                        <button
                          onClick={() => setArZoomLevel(prev => Math.min(prev + 0.2, 1.8))}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
                          title="تكبير"
                        >
                          <ZoomIn className="w-4 h-4 text-emerald-400" />
                        </button>

                        <button
                          onClick={() => setArZoomLevel(prev => Math.max(prev - 0.2, 0.6))}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
                          title="تصغير"
                        >
                          <ZoomOut className="w-4 h-4 text-emerald-400" />
                        </button>
                      </div>

                      {/* Mode Toggle: Reconstruction vs Current */}
                      <button
                        onClick={() => setArReconstructionMode(!arReconstructionMode)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                          arReconstructionMode
                            ? 'bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-950/50'
                            : 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                        }`}
                      >
                        <History className="w-3.5 h-3.5" />
                        <span>{arReconstructionMode ? 'إعادة التصور التاريخي مفعل' : 'الرؤية الحالية'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Historical Virtual Guide Controls (5 Cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    
                    {/* Landmark Selector Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">
                        اختر موقعاً تاريخياً للتجسيد المعزز:
                      </label>
                      <select
                        value={selectedArPoi.id}
                        onChange={e => {
                          const poi = demoPoiLocationsList.find(p => p.id === e.target.value);
                          if (poi) setSelectedArPoi(poi);
                        }}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-500"
                      >
                        {demoPoiLocationsList.filter(p => p.arSupported).map(p => (
                          <option key={p.id} value={p.id}>
                            {p.name} ({p.city})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Virtual Guide Avatar Card */}
                    <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-4 relative overflow-hidden">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-500 p-0.5 shadow-md">
                          <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-amber-300 font-black text-sm">
                            الراوي
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                            المرشد التاريخي الافتراضي (سلمان)
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          </h4>
                          <span className="text-[11px] text-emerald-400 font-semibold">شرح صوتي وتاريخي تفاعلي</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 mb-3">
                        {selectedArPoi.arHistoricalStory || selectedArPoi.description}
                      </p>

                      {/* Interactive Audio Player Controls */}
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setArGuidePlaying(!arGuidePlaying)}
                              className="p-2 rounded-full bg-amber-400 text-slate-950 font-black hover:bg-amber-300 shadow-md"
                            >
                              {arGuidePlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-0.5" />}
                            </button>
                            <span className="font-bold text-slate-200">
                              {arGuidePlaying ? 'جاري التشغيل الصوتى...' : 'استمع للشرح الصوتي'}
                            </span>
                          </div>

                          {/* Language Toggle */}
                          <button
                            onClick={() => setArGuideLanguage(arGuideLanguage === 'ar' ? 'en' : 'ar')}
                            className="text-[11px] bg-slate-800 px-2 py-1 rounded text-amber-300 border border-slate-700 flex items-center gap-1"
                          >
                            <Languages className="w-3 h-3" />
                            <span>{arGuideLanguage === 'ar' ? 'العربية' : 'English'}</span>
                          </button>
                        </div>

                        {/* Audio Progress Bar */}
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-amber-400 h-full rounded-full transition-all duration-300"
                            style={{ width: arGuidePlaying ? '70%' : `${arAudioProgress}%` }}
                          />
                        </div>

                        {/* Speed Control */}
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                          <span>سرعة القراءة:</span>
                          <div className="flex gap-1">
                            {[1, 1.25, 1.5].map(spd => (
                              <button
                                key={spd}
                                onClick={() => setArGuideSpeed(spd)}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  arGuideSpeed === spd
                                    ? 'bg-amber-400 text-slate-950'
                                    : 'bg-slate-800 text-slate-300'
                                }`}
                              >
                                {spd}x
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
        )}

        {/* TAB 3: ROUTE PLANNER & NAVIGATION */}
        {activeTab === 'route' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Route Form Controls (4 Cols) */}
              <div className="lg:col-span-4 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-amber-400" />
                  مخطط المسارات والرحلات الذكي
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">نقطة الانطلاق:</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-slate-200 focus:outline-none focus:border-emerald-500">
                    <option>الرياض (مطار الملك خالد الدولي)</option>
                    <option>جدة (مطار الملك عبدالعزيز)</option>
                    <option>مطار العلا الدولي</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">الوجهة المستهدفة:</label>
                  <select
                    value={selectedRoute.id}
                    onChange={e => {
                      const r = demoRouteOptionsList.find(opt => opt.id === e.target.value);
                      if (r) setSelectedRoute(r);
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-500"
                  >
                    {demoRouteOptionsList.map(r => (
                      <option key={r.id} value={r.id}>
                        {r.fromCity} ➔ {r.toCity}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Transport Mode Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">وسيلة النقل المفضلّة:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveRouteMode('سيارة خاصة')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        activeRouteMode === 'سيارة خاصة'
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <Car className="w-4 h-4 text-amber-400" />
                      <span>سيارة خاصة</span>
                    </button>

                    <button
                      onClick={() => setActiveRouteMode('قطار الحرمين السريع')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        activeRouteMode === 'قطار الحرمين السريع'
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <Train className="w-4 h-4 text-emerald-400" />
                      <span>قطار الحرمين</span>
                    </button>

                    <button
                      onClick={() => setActiveRouteMode('طيران داخلي')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        activeRouteMode === 'طيران داخلي'
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <Plane className="w-4 h-4 text-cyan-400" />
                      <span>طيران داخلي</span>
                    </button>

                    <button
                      onClick={() => setActiveRouteMode('حافلة سياحية')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        activeRouteMode === 'حافلة سياحية'
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <Bus className="w-4 h-4 text-purple-400" />
                      <span>حافلة سياحية</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Traffic / Smart Reroute Notice */}
                {selectedRoute.trafficAlert && (
                  <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-3 text-xs text-amber-200 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-0.5">تنبيه الملاحة المباشرة:</span>
                      {selectedRoute.trafficAlert}
                    </div>
                  </div>
                )}
              </div>

              {/* Route Visual Details (8 Cols) */}
              <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                
                {/* Route Header Metrics */}
                <div className="grid grid-cols-3 gap-3 text-center bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-[11px] text-slate-400 block">المسافة الكلية</span>
                    <span className="text-base font-black text-amber-300">{selectedRoute.distanceKm} كم</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">الوقت المتوقع</span>
                    <span className="text-base font-black text-emerald-400">{selectedRoute.estimatedTime}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">التكلفة التقريبية</span>
                    <span className="text-base font-black text-white">{selectedRoute.costEstimate}</span>
                  </div>
                </div>

                {/* Simulated Visual Route Path Diagram */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-slate-300 block">نقاط التوقف والمحطات على الطريق:</span>

                  <div className="relative flex items-center justify-between px-4 py-3">
                    {/* Path line */}
                    <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-cyan-500 -translate-y-1/2 rounded-full" />

                    {selectedRoute.waypoints.map((wp, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center">
                        <span className="w-5 h-5 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center text-[10px] font-bold text-amber-300 shadow-md">
                          {i + 1}
                        </span>
                        <span className="text-[11px] font-bold text-slate-200 mt-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {wp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {selectedRoute.recommendedStopover && (
                    <div className="bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-lg text-xs text-emerald-300 flex items-center justify-between">
                      <span className="font-semibold">استراحة موصى بها على الطريق:</span>
                      <span className="font-bold text-amber-300">{selectedRoute.recommendedStopover}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SMART WEATHER */}
        {activeTab === 'weather' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(cityWeatherMapInfo).map((w, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-white">{w.cityName}</h3>
                  <span className="text-2xl">{w.condition.includes('🌧️') ? '🌧️' : '☀️'}</span>
                </div>

                <div className="text-3xl font-black text-amber-300">
                  {w.temperature}
                </div>

                <p className="text-xs text-slate-300 font-semibold">{w.condition}</p>

                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-slate-400">
                  <div className="flex items-center gap-1">
                    <Wind className="w-3.5 h-3.5 text-cyan-400" />
                    <span>الرياح: {w.windSpeed}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5 text-blue-400" />
                    <span>الرطوبة: {w.humidity}</span>
                  </div>
                </div>

                <div className="text-xs space-y-1">
                  <span className="text-slate-400 font-bold block">أفضل وقت للزيارة:</span>
                  <p className="text-emerald-300 font-semibold">{w.bestVisitingTime}</p>
                </div>

                <div className="text-xs bg-emerald-950/40 border border-emerald-500/20 p-2.5 rounded-xl text-slate-300 leading-relaxed">
                  💡 {w.weatherAdvice}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* MANDATORY DEMO NOTICE AT BOTTOM */}
        <div className="mt-10 p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-center text-xs text-amber-300 leading-relaxed shadow-lg">
          <Info className="w-4 h-4 text-amber-400 inline-block ml-1.5 -mt-0.5" />
          "الخرائط والواقع المعزز المعروضان في هذا النموذج هما محاكاة باستخدام بيانات تجريبية، وسيتم ربطهما بالخدمات الفعلية في مراحل التطوير المستقبلية."
        </div>

      </div>
    </section>
  );
};
