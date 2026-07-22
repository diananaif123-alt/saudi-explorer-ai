import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  RotateCcw,
  Mic,
  MicOff,
  Search,
  Compass,
  Sparkles,
  Cpu,
  Maximize2,
  Minimize2,
  Box,
  Image as ImageIcon,
  MapPin,
  Calendar,
  Building2,
  Utensils,
  Sun,
  Layers,
  Settings2,
  Activity,
  CheckCircle2,
  Info,
  Globe,
  Languages,
  Sliders,
  Eye,
  RefreshCw,
  Star,
  Zap,
  Radio,
  Share2,
  HelpCircle,
  FileText,
  ChevronLeft,
  ChevronRight,
  UserCheck
} from 'lucide-react';

import {
  saudiLandmarks3DData,
  voiceQueryPresetsData,
  futureArchitectureModules,
  Landmark3DItem,
  LandmarkGalleryImage
} from '../data/advancedAiVoiceArData';

export const AdvancedAiVoiceArViewer: React.FC = () => {
  // Selected Landmark
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark3DItem>(saudiLandmarks3DData[0]);

  // View Mode: '3d' | 'gallery' | 'panorama' | 'info'
  const [activeTab, setActiveTab] = useState<'3d' | 'gallery' | 'panorama' | 'info'>('3d');

  // Active Gallery Image
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Landmark3DItem[]>(saudiLandmarks3DData);

  // Selected Avatar: 'sara' | 'badr'
  const [selectedAvatar, setSelectedAvatar] = useState<'sara' | 'badr'>('sara');

  // Speech Synthesis (TTS) State
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>('');
  const [speechLanguage, setSpeechLanguage] = useState<'ar' | 'en'>('ar');
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [speechPitch, setSpeechPitch] = useState<number>(1.0);
  
  // Audio Playback Status
  const [speechStatus, setSpeechStatus] = useState<'stopped' | 'speaking' | 'paused'>('stopped');
  const [aiState, setAiState] = useState<'idle' | 'listening' | 'thinking' | 'speaking'>('idle');

  // Currently Spoken Text Buffer & Question
  const [currentSpeechText, setCurrentSpeechText] = useState<string>('');
  const [userCustomQuestion, setUserCustomQuestion] = useState<string>('');
  const [aiAnswerResponse, setAiAnswerResponse] = useState<string>('');

  // Speech Recognition (STT)
  const [isMicListening, setIsMicListening] = useState<boolean>(false);

  // 3D Model Viewport State
  const [rotationY, setRotationY] = useState<number>(45);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);

  // Panorama Pan State
  const [panoramaX, setPanoramaX] = useState<number>(50);

  // Toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Initialize Web Speech Synthesis Voices
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSpeechSupported(true);

      const updateVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);

        // Try to pick an Arabic voice if available
        const arVoice = availableVoices.find(v => v.lang.startsWith('ar'));
        if (arVoice) {
          setSelectedVoiceName(arVoice.name);
        } else if (availableVoices.length > 0) {
          setSelectedVoiceName(availableVoices[0].name);
        }
      };

      updateVoices();

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    } else {
      setIsSpeechSupported(false);
    }
  }, []);

  // Auto 3D Rotation Tick
  useEffect(() => {
    let timer: any = null;
    if (isAutoRotating && !isFullscreenModal) {
      timer = setInterval(() => {
        setRotationY(prev => (prev + 1) % 360);
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isAutoRotating, isFullscreenModal]);

  // Handle Search Input Filtering
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(saudiLandmarks3DData);
      return;
    }

    const q = searchQuery.trim().toLowerCase();
    const filtered = saudiLandmarks3DData.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.nameEn.toLowerCase().includes(q) ||
      item.city.toLowerCase().includes(q) ||
      item.searchKeywords.some(kw => kw.toLowerCase().includes(q))
    );

    setSearchResults(filtered);

    // If exact or single result matched, switch to it smoothly
    if (filtered.length > 0) {
      setSelectedLandmark(filtered[0]);
    }
  }, [searchQuery]);

  // Web Speech Synthesis (TTS) Reader Engine
  const speakText = (text: string, langOverride?: 'ar' | 'en') => {
    if (!isSpeechSupported || !('speechSynthesis' in window)) {
      triggerToast('عذراً، متصفحك لا يدعم قراءة النصوص صوتياً (Web Speech API).');
      return;
    }

    // Cancel ongoing speech
    window.speechSynthesis.cancel();

    const targetLang = langOverride || speechLanguage;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;
    utterance.pitch = speechPitch;
    utterance.lang = targetLang === 'ar' ? 'ar-SA' : 'en-US';

    if (selectedVoiceName && voices.length > 0) {
      const vObj = voices.find(v => v.name === selectedVoiceName);
      if (vObj) utterance.voice = vObj;
    }

    utterance.onstart = () => {
      setSpeechStatus('speaking');
      setAiState('speaking');
      setCurrentSpeechText(text);
    };

    utterance.onend = () => {
      setSpeechStatus('stopped');
      setAiState('idle');
    };

    utterance.onerror = () => {
      setSpeechStatus('stopped');
      setAiState('idle');
      triggerToast('حدث تنبيه في تشغيل المحرك الصوتي للمتصفح.');
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeechStatus('stopped');
      setAiState('idle');
    }
  };

  const pauseSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (speechStatus === 'speaking') {
        window.speechSynthesis.pause();
        setSpeechStatus('paused');
        setAiState('idle');
      } else if (speechStatus === 'paused') {
        window.speechSynthesis.resume();
        setSpeechStatus('speaking');
        setAiState('speaking');
      }
    }
  };

  // Trigger Welcome Script for Landmark
  const playWelcomeScript = (landmark: Landmark3DItem, lang: 'ar' | 'en' = 'ar') => {
    setSelectedLandmark(landmark);
    setSpeechLanguage(lang);
    const script = lang === 'ar' ? landmark.avatarWelcomeScript : landmark.avatarWelcomeScriptEn;
    setAiAnswerResponse(script);
    speakText(script, lang);
  };

  // Microphone Speech Recognition (STT)
  const toggleMicrophone = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      triggerToast('خاصية التعرف على الصوت (STT) غير مدعومة في متصفحك الحالي، يمكنك الكتابة أو اختيار أسئلة جاهزة.');
      return;
    }

    if (isMicListening) {
      setIsMicListening(false);
      setAiState('idle');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = speechLanguage === 'ar' ? 'ar-SA' : 'en-US';
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsMicListening(true);
        setAiState('listening');
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserCustomQuestion(transcript);
        setIsMicListening(false);
        handleAskQuestion(transcript);
      };

      recognition.onerror = () => {
        setIsMicListening(false);
        setAiState('idle');
        triggerToast('لم نتمكن من التقاط الصوت، يرجى التأكد من السماح للميكروفون والتحدث بوضوح.');
      };

      recognition.onend = () => {
        setIsMicListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsMicListening(false);
      setAiState('idle');
      triggerToast('تعذر بدء التقاط الميكروفون.');
    }
  };

  // Custom AI Question Handler
  const handleAskQuestion = (question: string) => {
    if (!question.trim()) return;

    setAiState('thinking');
    stopSpeech();

    setTimeout(() => {
      // Find matches in presets or generate smart response
      const matchedPreset = voiceQueryPresetsData.find(p =>
        question.includes(p.queryAr) || p.queryAr.includes(question)
      );

      let answer = '';
      if (matchedPreset) {
        answer = speechLanguage === 'ar' ? matchedPreset.answerAr : matchedPreset.answerEn;
        if (matchedPreset.actionDestinationId) {
          const matchedItem = saudiLandmarks3DData.find(item => item.id === matchedPreset.actionDestinationId);
          if (matchedItem) setSelectedLandmark(matchedItem);
        }
      } else {
        answer = speechLanguage === 'ar'
          ? `بناءً على التساؤل حول (${question}) في ${selectedLandmark.name}: أنصح بزيارة الموقع في ${selectedLandmark.bestTimeToVisit}. ${selectedLandmark.weatherRecommendation}`
          : `Regarding (${question}) at ${selectedLandmark.nameEn}: Recommended during ${selectedLandmark.bestTimeToVisit}. ${selectedLandmark.weatherRecommendation}`;
      }

      setAiAnswerResponse(answer);
      speakText(answer);
    }, 1000);
  };

  return (
    <section id="phase19-interactive-ai-section" className="py-12 bg-emerald-950/20 text-slate-100 relative overflow-hidden dir-rtl border-t border-amber-500/40" dir="rtl">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Phase Header & Interactive Fixes Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-lg">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>المرحلة 19 — تحسين المساعد الصوتي، المرشد الافتراضي 3D والتفاعل الصوتي الحقيقي</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              INTERACTIVE VOICE AI, VIRTUAL AVATAR & 3D MODEL ENGINE
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              تجربة حية تفاعلية تعتمد على محرك Web Speech API لنطق الردود باللغتين العربية والإنجليزية، مع تحريك المرشد الافتراضي ومجسمات 3D ومعارض صور عالية الدقة.
            </p>
          </div>

          {/* AI Status Indicator Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 border shadow-xl transition-all ${
              aiState === 'speaking'
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500 animate-pulse'
                : aiState === 'listening'
                ? 'bg-red-950 text-red-300 border-red-500 animate-bounce'
                : aiState === 'thinking'
                ? 'bg-amber-950 text-amber-300 border-amber-500 animate-pulse'
                : 'bg-slate-950 text-slate-300 border-slate-800'
            }`}>
              <Activity className="w-4 h-4 text-amber-400" />
              <span>
                {aiState === 'speaking' && '🗣️ Speaking (جاري النطق الصوتي)'}
                {aiState === 'listening' && '🎤 Listening (استماع الميكروفون)'}
                {aiState === 'thinking' && '🤖 Thinking (معالجة الذكاء الاصطناعي)'}
                {aiState === 'idle' && '● Ready (المرشد جاهز للتفاعل)'}
              </span>
            </div>
          </div>
        </div>

        {/* Global Toast Alert */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-900 border-2 border-amber-400 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between z-50 text-xs sm:text-sm font-bold"
            >
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{toastMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 1: SMART SEARCH BAR & PRESET DESTINATION CHIPS */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="relative w-full sm:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث فورياً: (العلا، الدرعية، نيوم، البلد، المصمك، أبها)..."
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 pr-11 pl-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 overflow-x-auto w-full sm:w-auto pb-1">
              <span className="font-bold text-slate-400 shrink-0">وجهات سريعة:</span>
              {saudiLandmarks3DData.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedLandmark(item);
                    triggerToast(`عرض بيانات ومعالم: (${item.name})`);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 text-[11px] ${
                    selectedLandmark.id === item.id
                      ? 'bg-amber-400 text-slate-950 shadow-lg'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {item.city}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* MAIN INTERACTIVE WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* COLUMN 1 & 2: 3D MODEL & GALLERY STAGE */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Stage Navigation Header */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('3d')}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
                    activeTab === '3d'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-slate-950 text-slate-300 border border-slate-800'
                  }`}
                >
                  <Box className="w-4 h-4" />
                  <span>المجسم التفاعلي 3D</span>
                </button>

                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
                    activeTab === 'gallery'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-slate-950 text-slate-300 border border-slate-800'
                  }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>معرض الصور عالية الدقة</span>
                </button>

                <button
                  onClick={() => setActiveTab('panorama')}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
                    activeTab === 'panorama'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-slate-950 text-slate-300 border border-slate-800'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>جولة بانورامية 360°</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => setIsFullscreenModal(true)}
                  className="bg-slate-950 hover:bg-slate-900 text-slate-200 border border-slate-800 p-2 rounded-xl font-bold flex items-center gap-1.5"
                >
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">ملء الشاشة</span>
                </button>
              </div>
            </div>

            {/* STAGE DISPLAY CANVAS */}
            <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl relative min-h-[420px] flex flex-col justify-between overflow-hidden">
              
              {/* TAB 1: 3D MODEL SIMULATION */}
              {activeTab === '3d' && (
                <div className="relative w-full h-[360px] flex flex-col items-center justify-center space-y-6">
                  
                  {/* Grid Lines Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

                  {/* Simulated 3D Landmark Representation Box with WebGL Aesthetics */}
                  <motion.div
                    animate={{ rotateY: rotationY }}
                    style={{ scale: zoomLevel }}
                    transition={{ ease: "linear", duration: 0.1 }}
                    className={`w-64 h-64 rounded-3xl border-2 p-4 flex flex-col items-center justify-between shadow-2xl backdrop-blur-md relative ${
                      isWireframe
                        ? 'border-emerald-400 bg-emerald-950/20 text-emerald-300 font-mono'
                        : 'border-amber-400/80 bg-slate-900/90 text-white'
                    }`}
                  >
                    <div className="w-full flex justify-between items-center text-[10px] font-mono border-b border-slate-800 pb-2">
                      <span className="text-amber-400 font-bold">3D MODEL ENGINE</span>
                      <span>ROT: {rotationY}°</span>
                    </div>

                    <div className="my-auto text-center space-y-2">
                      <Box className={`w-16 h-16 mx-auto ${isWireframe ? 'text-emerald-400 animate-spin' : 'text-amber-400'}`} />
                      <h4 className="font-black text-sm text-white">{selectedLandmark.name}</h4>
                      <p className="text-[10px] text-slate-300 max-w-xs">{selectedLandmark.historicalPeriod}</p>
                    </div>

                    <div className="w-full flex justify-between items-center text-[10px] font-mono border-t border-slate-800 pt-2">
                      <span className="text-emerald-400">FPS: 60.0</span>
                      <span>ZOOM: {zoomLevel.toFixed(1)}x</span>
                    </div>
                  </motion.div>

                  {/* 3D Canvas Interactive Controls Toolbar */}
                  <div className="relative z-10 w-full bg-slate-950/90 border border-slate-800 p-3 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 font-bold">التدوير:</span>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={rotationY}
                        onChange={e => setRotationY(Number(e.target.value))}
                        className="w-28 accent-amber-400 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsAutoRotating(!isAutoRotating)}
                        className={`px-3 py-1 rounded-xl text-[11px] font-bold ${
                          isAutoRotating ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        {isAutoRotating ? 'التدوير التلقائي: نشط' : 'التدوير التلقائي: موقف'}
                      </button>

                      <button
                        onClick={() => setIsWireframe(!isWireframe)}
                        className={`px-3 py-1 rounded-xl text-[11px] font-bold ${
                          isWireframe ? 'bg-purple-950 text-purple-300 border border-purple-500/40' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        نمط الـ Wireframe
                      </button>

                      <button
                        onClick={() => setZoomLevel(prev => (prev >= 1.5 ? 0.8 : prev + 0.2))}
                        className="bg-slate-900 text-amber-300 px-3 py-1 rounded-xl text-[11px] font-bold"
                      >
                        التكبير {zoomLevel.toFixed(1)}x
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: HIGH-RESOLUTION GALLERY */}
              {activeTab === 'gallery' && (
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden h-[300px] border border-slate-800">
                    <img
                      src={selectedLandmark.galleryImages[activeGalleryIndex].url}
                      alt={selectedLandmark.galleryImages[activeGalleryIndex].caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-xs font-bold text-white flex justify-between items-center">
                      <span>{selectedLandmark.galleryImages[activeGalleryIndex].caption}</span>
                      <span className="bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px]">
                        {selectedLandmark.galleryImages[activeGalleryIndex].type}
                      </span>
                    </div>
                  </div>

                  {/* Gallery Thumbnails */}
                  <div className="grid grid-cols-4 gap-3">
                    {selectedLandmark.galleryImages.map((img, idx) => (
                      <div
                        key={img.id}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`rounded-xl overflow-hidden h-16 border-2 cursor-pointer transition-all ${
                          activeGalleryIndex === idx ? 'border-amber-400 scale-105' : 'border-slate-800 opacity-60'
                        }`}
                      >
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: 360 PANORAMA SIMULATION */}
              {activeTab === 'panorama' && (
                <div className="space-y-4 text-center">
                  <div className="relative rounded-2xl overflow-hidden h-[300px] border border-slate-800">
                    <img
                      src={selectedLandmark.panorama360Url}
                      alt="360 Panorama"
                      style={{ transform: `scale(1.2) translateX(${(panoramaX - 50) * 0.5}%)` }}
                      className="w-full h-full object-cover transition-transform duration-200"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/90 text-amber-300 px-3 py-1 rounded-xl text-xs font-bold border border-slate-800">
                      360° Panorama View
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-bold">زاوية الرؤية البانورامية:</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={panoramaX}
                      onChange={e => setPanoramaX(Number(e.target.value))}
                      className="w-2/3 accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* LANDMARK RECONSTRUCTION TEXT */}
              <div className="mt-4 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="text-amber-400 font-bold block mb-1">الشرح التاريخي ثلاثي الأبعاد:</span>
                {selectedLandmark.historicalReconstructionText}
              </div>

            </div>

            {/* LANDMARK EXTENDED DETAILS & RECOMMENDATIONS */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 text-xs">
              
              <div className="flex flex-wrap justify-between items-center gap-3 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold">{selectedLandmark.category}</span>
                  <h3 className="text-xl font-black text-white">{selectedLandmark.name}</h3>
                </div>

                <button
                  onClick={() => playWelcomeScript(selectedLandmark, speechLanguage)}
                  className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 font-bold px-4 py-2 rounded-xl flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>تشغيل الترحيب الصوتي للمكان</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Hotels */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5 text-xs">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>أقرب الفنادق الفاخرة:</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedLandmark.nearbyHotels.map((h, i) => (
                      <li key={i} className="border-b border-slate-900 pb-1.5 flex justify-between items-center text-[11px]">
                        <span className="text-slate-200">{h.name}</span>
                        <span className="text-amber-300 font-bold">{h.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Restaurants */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5 text-xs">
                    <Utensils className="w-4 h-4 text-purple-400" />
                    <span>أشهر المطاعم المجاورة:</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedLandmark.nearbyRestaurants.map((r, i) => (
                      <li key={i} className="border-b border-slate-900 pb-1.5 flex justify-between items-center text-[11px]">
                        <span className="text-slate-200">{r.name}</span>
                        <span className="text-slate-400">{r.cuisine}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Events */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5 text-xs">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>الفعاليات المتاحة:</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedLandmark.nearbyEvents.map((e, i) => (
                      <li key={i} className="border-b border-slate-900 pb-1.5 flex justify-between items-center text-[11px]">
                        <span className="text-slate-200">{e.name}</span>
                        <span className="text-emerald-400 font-bold">{e.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>

          {/* COLUMN 3: VIRTUAL AVATAR & WEB SPEECH AI CONTROLLER */}
          <div className="space-y-6">
            
            {/* VIRTUAL AVATAR CARD */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">المرشد السياحي الافتراضي (AI Avatar)</h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setSelectedAvatar('sara')}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[10px] ${
                      selectedAvatar === 'sara' ? 'bg-amber-400 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    سارة
                  </button>
                  <button
                    onClick={() => setSelectedAvatar('badr')}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[10px] ${
                      selectedAvatar === 'badr' ? 'bg-amber-400 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    بدر
                  </button>
                </div>
              </div>

              {/* Animated Avatar Face Canvas Simulation */}
              <div className="relative bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 rounded-2xl h-[220px] p-4 flex flex-col items-center justify-center overflow-hidden shadow-inner">
                
                {/* Animated Avatar Avatar Ring */}
                <motion.div
                  animate={aiState === 'speaking' ? { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className={`relative w-28 h-28 rounded-full border-4 p-1 flex items-center justify-center shadow-2xl ${
                    aiState === 'speaking'
                      ? 'border-emerald-400 ring-4 ring-emerald-400/30'
                      : 'border-amber-400/60'
                  }`}
                >
                  <img
                    src={
                      selectedAvatar === 'sara'
                        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
                    }
                    alt="AI Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />

                  {/* Mouth Pulse / Audio Ring indicator during speech */}
                  {aiState === 'speaking' && (
                    <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping pointer-events-none" />
                  )}
                </motion.div>

                {/* Equalizer Audio Waves Spectrum */}
                {aiState === 'speaking' && (
                  <div className="flex items-center gap-1 mt-3 h-6">
                    {[0.8, 1.4, 0.6, 1.8, 1.1, 1.5, 0.9, 1.3].map((height, i) => (
                      <motion.span
                        key={i}
                        animate={{ height: [`${height * 8}px`, `${height * 20}px`, `${height * 8}px`] }}
                        transition={{ repeat: Infinity, duration: 0.4 + i * 0.1 }}
                        className="w-1 bg-emerald-400 rounded-full"
                      />
                    ))}
                  </div>
                )}

                <span className="text-xs font-bold text-white mt-2">
                  {selectedAvatar === 'sara' ? 'المرشدة: سارة (عربي / English)' : 'المرشد: بدر (عربي / English)'}
                </span>

              </div>

              {/* Response Text Display Box */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="font-bold text-amber-400">الرد المباشر للمرشد الافتراضي:</span>
                  <span>{speechLanguage === 'ar' ? 'العربية' : 'English'}</span>
                </div>
                <p className="text-slate-200 leading-relaxed font-semibold min-h-[60px]">
                  {aiAnswerResponse || selectedLandmark.avatarWelcomeScript}
                </p>
              </div>

            </div>

            {/* WEB SPEECH Synthesis (TTS) & STT AUDIO CONTROLS */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Settings2 className="w-4 h-4 text-purple-400" />
                  <span>محرك الصوت والتحدث المباشر (Web Speech Controller)</span>
                </h3>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => {
                      const newLang = speechLanguage === 'ar' ? 'en' : 'ar';
                      setSpeechLanguage(newLang);
                      playWelcomeScript(selectedLandmark, newLang);
                    }}
                    className="bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-500/40 px-2.5 py-1 rounded-xl text-[10px] font-bold"
                  >
                    اللغة: {speechLanguage === 'ar' ? 'العربية' : 'English'}
                  </button>
                </div>
              </div>

              {/* Speech Controls Toolbar */}
              <div className="grid grid-cols-4 gap-2 text-xs">
                
                <button
                  onClick={() => speakText(aiAnswerResponse || selectedLandmark.avatarWelcomeScript)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span className="text-[10px]">تشغيل</span>
                </button>

                <button
                  onClick={pauseSpeech}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md"
                >
                  <Pause className="w-4 h-4" />
                  <span className="text-[10px]">{speechStatus === 'paused' ? 'استئناف' : 'مؤقت'}</span>
                </button>

                <button
                  onClick={stopSpeech}
                  className="bg-red-950 hover:bg-red-900 text-red-200 border border-red-500/40 font-bold py-2.5 rounded-xl flex flex-col items-center justify-center gap-1"
                >
                  <Square className="w-4 h-4" />
                  <span className="text-[10px]">إيقاف</span>
                </button>

                <button
                  onClick={toggleMicrophone}
                  className={`font-bold py-2.5 rounded-xl flex flex-col items-center justify-center gap-1 border transition-all ${
                    isMicListening
                      ? 'bg-red-500 text-white border-red-400 animate-pulse'
                      : 'bg-slate-950 text-slate-200 border-slate-800'
                  }`}
                >
                  <Mic className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px]">{isMicListening ? 'استماع...' : 'ميكروفون'}</span>
                </button>

              </div>

              {/* Pitch & Speed Adjustment Sliders */}
              <div className="space-y-3 pt-2 text-xs border-t border-slate-800">
                <div className="flex justify-between items-center text-slate-300">
                  <span>سرعة القراءة (Speech Rate): <strong>{speechRate}x</strong></span>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={speechRate}
                    onChange={e => setSpeechRate(Number(e.target.value))}
                    className="w-1/2 accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>طبقة الصوت (Pitch): <strong>{speechPitch}</strong></span>
                  <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.1"
                    value={speechPitch}
                    onChange={e => setSpeechPitch(Number(e.target.value))}
                    className="w-1/2 accent-amber-400 cursor-pointer"
                  />
                </div>

                {/* Available Browser Voices Selector */}
                {voices.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[11px] block">اختيار صوت المتصفح المتاح:</span>
                    <select
                      value={selectedVoiceName}
                      onChange={e => setSelectedVoiceName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 text-xs text-white p-2 rounded-xl focus:outline-none"
                    >
                      {voices.map((v, idx) => (
                        <option key={idx} value={v.name}>
                          {v.name} ({v.lang})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

            </div>

            {/* PRESET VOICE QUESTIONS GRID */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-3">
              <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>أسئلة صوتية شائعة للذكاء الاصطناعي:</span>
              </h4>

              <div className="space-y-2 text-xs">
                {voiceQueryPresetsData.map(q => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setUserCustomQuestion(q.queryAr);
                      handleAskQuestion(q.queryAr);
                    }}
                    className="w-full text-right bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white p-2.5 rounded-xl border border-slate-800 transition-all font-bold block"
                  >
                    💬 {q.queryAr}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* FULLSCREEN MODAL OVERLAY FOR 3D STAGE */}
        {isFullscreenModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-amber-400 font-bold">{selectedLandmark.city}</span>
                <h3 className="text-2xl font-black text-white">{selectedLandmark.name} — Fullscreen 3D Stage</h3>
              </div>

              <button
                onClick={() => setIsFullscreenModal(false)}
                className="bg-amber-400 text-slate-950 font-black px-4 py-2 rounded-2xl text-xs"
              >
                إغلاق الشاشة الكاملة
              </button>
            </div>

            <div className="flex-1 my-6 flex items-center justify-center">
              <img
                src={selectedLandmark.coverImage}
                alt={selectedLandmark.name}
                className="max-h-[80vh] w-auto rounded-3xl border-2 border-amber-400/80 shadow-2xl object-cover"
              />
            </div>

            <div className="text-center text-xs text-slate-400">
              {selectedLandmark.description}
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
