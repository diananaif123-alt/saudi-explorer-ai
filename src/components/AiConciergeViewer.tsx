import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Sparkles, 
  Compass, 
  Search, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign, 
  Sun, 
  Hotel, 
  Utensils, 
  Trash2, 
  Plus, 
  RefreshCw, 
  Star, 
  MessageSquare, 
  Bell, 
  Info, 
  Copy, 
  Share2, 
  Sliders, 
  Check, 
  Users, 
  HelpCircle, 
  ThumbsUp, 
  ThumbsDown,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  MoveUp,
  MoveDown
} from 'lucide-react';

import { 
  AiChatMessage, 
  GeneratedTripPlan, 
  GeneratedItineraryDay,
  NlSearchResult, 
  quickPromptSuggestions, 
  initialAiChatMessages, 
  demoGeneratedPlansList, 
  sampleNlQueries, 
  aiNotificationsDemo 
} from '../data/aiConciergeData';

export const AiConciergeViewer: React.FC = () => {
  // Main Active Tab in Phase 7
  const [activeTab, setActiveTab] = useState<'concierge' | 'planner' | 'search' | 'history' | 'notifications'>('concierge');

  // --- AI CONCIERGE CHAT STATE ---
  const [messages, setMessages] = useState<AiChatMessage[]>(initialAiChatMessages);
  const [inputText, setInputText] = useState<string>('');
  const [isListeningMic, setIsListeningMic] = useState<boolean>(false);
  const [voiceSpeed, setVoiceSpeed] = useState<string>('1.0x');
  const [voiceLang, setVoiceLang] = useState<string>('ar-SA');
  const [isPlayingVoice, setIsPlayingVoice] = useState<boolean>(false);

  // --- SMART TRIP PLANNER FORM STATE ---
  const [plannerInputs, setPlannerInputs] = useState({
    cities: 'العلا',
    durationDays: 3,
    budgetCategory: 'فاخر',
    travelersCount: 2,
    kidsCount: 0,
    tripType: 'ثقافية فاخرة',
    interests: ['تراث وآثار', 'طبيعة ومناظر', 'مطاعم فاخرة']
  });

  // Current Generated Plan
  const [activePlan, setActivePlan] = useState<GeneratedTripPlan | null>(demoGeneratedPlansList[0]);
  const [plansHistory, setPlansHistory] = useState<GeneratedTripPlan[]>(demoGeneratedPlansList);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState<boolean>(false);

  // --- NATURAL LANGUAGE SEARCH STATE ---
  const [nlSearchQuery, setNlSearchQuery] = useState<string>('أريد مكانًا هادئًا للعشاء');
  const [activeNlResult, setActiveNlResult] = useState<NlSearchResult | null>(sampleNlQueries[0]);

  // --- FEEDBACK RATING STATE ---
  const [feedbackRating, setFeedbackRating] = useState<number>(0);
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  // Send Chat Message
  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: AiChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulate AI Response
    setTimeout(() => {
      const aiReply: AiChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `شكراً لسؤالك حول "${text}". بناءً على بيانات SAUDI EXPLORER AI والتحديثات المباشرة، يسعدني تقديم هذه التوصيات الذكية المصممة خصيصاً لتطلعاتك في المملكة.`,
        timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          'توليد جدول يومي مفصل',
          'عرض الخريطة التفاعلية',
          'استكشاف المطاعم الموصى بها'
        ]
      };
      setMessages(prev => [...prev, aiReply]);
    }, 1000);
  };

  // Toggle Mic Simulation
  const handleToggleMic = () => {
    if (!isListeningMic) {
      setIsListeningMic(true);
      setInputText('جاري الاستماع لصوتك... (تحدث الآن)');
      setTimeout(() => {
        setIsListeningMic(false);
        setInputText('اقترح علي رحلة عائلية لمدة 3 أيام بالرياض');
      }, 3000);
    } else {
      setIsListeningMic(false);
      setInputText('');
    }
  };

  // Generate New Trip Plan
  const handleGeneratePlan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingPlan(true);

    setTimeout(() => {
      const newPlan: GeneratedTripPlan = {
        id: `plan-${Date.now()}`,
        title: `رحلة ${plannerInputs.cities} المُولدة بالذكاء الاصطناعي (${plannerInputs.durationDays} أيام)`,
        createdAt: new Date().toISOString().split('T')[0],
        cities: [plannerInputs.cities],
        durationDays: plannerInputs.durationDays,
        totalEstimatedCost: plannerInputs.budgetCategory === 'فاخر' ? '5,200 ريال' : '2,800 ريال',
        tripType: plannerInputs.tripType,
        budgetCategory: plannerInputs.budgetCategory,
        days: demoGeneratedPlansList[0].days
      };

      setActivePlan(newPlan);
      setPlansHistory(prev => [newPlan, ...prev]);
      setIsGeneratingPlan(false);
      alert('تم إعداد وتوليد الجدول السياحي الذكي بنجاح! ⚡');
    }, 1200);
  };

  // Remove activity item from day
  const handleRemoveActivity = (dayIndex: number, slot: 'morning' | 'afternoon' | 'evening') => {
    if (!activePlan) return;
    const updatedDays = [...activePlan.days];
    updatedDays[dayIndex][slot].title = 'نشاط فارغ - انقر لإضافة نشاط بديل';
    updatedDays[dayIndex][slot].notes = 'تم حذف هذا النشاط بطلب المستخدم.';
    setActivePlan({ ...activePlan, days: updatedDays });
  };

  // Swap Hotel Recommendation
  const handleSwapHotel = (dayIndex: number) => {
    if (!activePlan) return;
    const updatedDays = [...activePlan.days];
    updatedDays[dayIndex].hotelRecommendation = {
      name: 'فندق كورت يارد ماريوت الرياض / العلا',
      stars: 4,
      pricePerNight: '950 ريال',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400'
    };
    setActivePlan({ ...activePlan, days: updatedDays });
    alert('تم استبدال التوصية بالفندق بنجاح! 🏨');
  };

  // Perform Natural Language Search
  const handlePerformNlSearch = (queryStr: string) => {
    setNlSearchQuery(queryStr);
    const found = sampleNlQueries.find(q => q.query.includes(queryStr) || queryStr.includes(q.query));
    if (found) {
      setActiveNlResult(found);
    } else {
      setActiveNlResult({
        query: queryStr,
        aiSummary: `نتائج بحث ذكية مخصصة لـ: "${queryStr}"`,
        matches: sampleNlQueries[0].matches
      });
    }
  };

  // Submit Feedback Rating
  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackRating(0);
      setFeedbackText('');
      alert('تم إرسال تقييمك لمساعد الذكاء الاصطناعي بنجاح! سيتم تحسين النتائج القادمة بناءً عليه. 🌟');
    }, 1500);
  };

  return (
    <section id="ai-services-section" className="py-12 bg-[#FAF8F5] text-slate-800 relative border-t-2 border-[#0D7A5F]/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Phase 7 Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D7A5F] to-[#064E3B] flex items-center justify-center text-white shadow-md">
                <Bot className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#0D7A5F] font-bold block">المساعد السياحي الذكي (Phase 7 AI Engine)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  خدمات الذكاء الاصطناعي والتخطيط الذكي <span className="text-[#0D7A5F]">AI Concierge & Smart Planner</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#E6F4F0] px-4 py-2 rounded-xl border border-emerald-300 text-[#0D7A5F] text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Full Interactive AI Core (Demo Simulator)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
            تحدث مع المساعد السياحي الذكي كتابةً أو صوتياً، أنشئ خطة سفر متكاملة ومولدة بالذكاء الاصطناعي، واستكشف التوصيات والبحث باستخدام اللغة الطبيعية.
          </p>

          {/* Phase 7 Sub-Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 relative z-10">
            <button
              onClick={() => setActiveTab('concierge')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'concierge' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>1. المرشد الذكي (AI Concierge & Voice)</span>
            </button>

            <button
              onClick={() => setActiveTab('planner')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'planner' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>2. تخطيط الرحلات (Smart Trip Planner)</span>
            </button>

            <button
              onClick={() => setActiveTab('search')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'search' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>3. البحث التفاعلي والتوصيات</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'history' 
                  ? 'bg-[#0D7A5F] text-white shadow-md font-black' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>4. سجل خطط الذكاء الاصطناعي ({plansHistory.length})</span>
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
              <span>5. التنبيهات الذكية (AI Alerts)</span>
            </button>
          </div>
        </div>

        {/* SUB-VIEW 1: AI CHAT CONCIERGE & VOICE ASSISTANT */}
        {activeTab === 'concierge' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            
            {/* Main Chat Interface */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl flex flex-col justify-between h-[600px]">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D7A5F] text-white flex items-center justify-center font-bold">
                    <Bot className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900">المرشد السياحي التفاعلي (SAUDI EXPLORER AI)</h3>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      متصل ومستعد لمساعدتك المباشرة
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setMessages([initialAiChatMessages[0]])}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                >
                  محادثة جديدة +
                </button>
              </div>

              {/* Chat Message Messages Stream */}
              <div className="flex-1 overflow-y-auto my-4 space-y-4 px-2">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`max-w-lg p-3.5 rounded-2xl text-xs leading-relaxed space-y-2 shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-[#0D7A5F] text-white rounded-tl-none font-bold' 
                        : 'bg-[#FAF8F5] text-slate-800 border border-slate-200 rounded-tr-none font-medium'
                    }`}>
                      <p>{msg.text}</p>

                      {/* Optional Attached Card */}
                      {msg.attachedCard && (
                        <div className="mt-2 p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center gap-3">
                          <img src={msg.attachedCard.image} alt="Recommendation" className="w-14 h-14 rounded-lg object-cover" />
                          <div className="space-y-0.5">
                            <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-black">{msg.attachedCard.type}</span>
                            <h5 className="font-black text-xs">{msg.attachedCard.title}</h5>
                            <p className="text-[10px] text-slate-500">📍 {msg.attachedCard.location} | ⭐ {msg.attachedCard.rating}</p>
                          </div>
                        </div>
                      )}

                      {/* Suggested quick action chips */}
                      {msg.suggestedActions && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {msg.suggestedActions.map((act, i) => (
                            <button
                              key={i}
                              onClick={() => handleSendMessage(act)}
                              className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-[#0D7A5F] rounded-lg text-[10px] font-black transition-all"
                            >
                              {act}
                            </button>
                          ))}
                        </div>
                      )}

                      <span className="text-[9px] opacity-60 block text-left font-mono">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="py-2 border-t border-slate-100 overflow-x-auto whitespace-nowrap flex gap-2">
                {quickPromptSuggestions.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="px-3 py-1 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#0D7A5F] rounded-full text-[11px] font-bold transition-all border border-slate-200 shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Box & Voice Controls */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleToggleMic}
                  className={`p-3 rounded-2xl transition-all shadow-sm ${
                    isListeningMic 
                      ? 'bg-rose-500 text-white animate-bounce' 
                      : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  }`}
                  title="تحدث مع المرشد السياحي صوتياً"
                >
                  {isListeningMic ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="اسأل المرشد الذكي أي سؤال عن رحلتك في المملكة..."
                  className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 bg-slate-50 text-xs font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D7A5F]"
                />

                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  className="px-5 py-3 bg-[#0D7A5F] hover:bg-[#064E3B] text-white rounded-2xl font-black text-xs shadow-md transition-all flex items-center gap-1"
                >
                  <span>إرسال</span>
                  <Send className="w-4 h-4 rotate-180" />
                </button>
              </div>

            </div>

            {/* Sidebar: Voice Assistant Demo & Audio Controls */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-[#0D7A5F] border-b border-slate-100 pb-3">
                  <Volume2 className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="font-black text-sm text-slate-900">المساعد الصوتي التجريبي (Voice Assistant)</h4>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  محاكاة القراءة الصوتية والإجابة بالصوت البشري التفاعلي.
                </p>

                {/* Voice Speed & Language Selectors */}
                <div className="space-y-3 text-xs font-bold">
                  <div className="space-y-1">
                    <label className="text-slate-700 block">سرعة القراءة الصوتية:</label>
                    <div className="flex gap-2">
                      {['0.75x', '1.0x', '1.25x', '1.5x'].map((spd) => (
                        <button
                          key={spd}
                          onClick={() => setVoiceSpeed(spd)}
                          className={`flex-1 py-1.5 rounded-lg border text-center transition-all ${
                            voiceSpeed === spd 
                              ? 'bg-[#0D7A5F] text-white font-black' 
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {spd}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-700 block">لغة الصوت التفاعلي:</label>
                    <select
                      value={voiceLang}
                      onChange={(e) => setVoiceLang(e.target.value)}
                      className="w-full p-2 rounded-xl border border-slate-300 bg-slate-50"
                    >
                      <option value="ar-SA">العربية (اللهجة السعودية الرسمية)</option>
                      <option value="en-US">English (Saudi Tourist Accent)</option>
                    </select>
                  </div>

                  {/* Play / Stop Audio Simulation Button */}
                  <button
                    type="button"
                    onClick={() => setIsPlayingVoice(!isPlayingVoice)}
                    className={`w-full py-3 rounded-2xl font-black text-xs shadow flex items-center justify-center gap-2 transition-all ${
                      isPlayingVoice 
                        ? 'bg-rose-600 text-white animate-pulse' 
                        : 'bg-[#D4AF37] text-slate-900 hover:bg-amber-400'
                    }`}
                  >
                    {isPlayingVoice ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlayingVoice ? 'إيقاف الاستماع الصوتي' : 'تشغيل الاستماع الصوتي للتوصيات'}</span>
                  </button>
                </div>
              </div>

              {/* AI Feedback Prompt */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-3 text-xs">
                <h4 className="font-black text-slate-900 flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4 text-[#0D7A5F]" />
                  <span>تقييم وتدريب الذكاء الاصطناعي:</span>
                </h4>
                <p className="text-slate-500 text-[11px]">
                  قيم دقة الإجابات لمساعدة النظام على التعلم والتأقلم مع تفضيلاتك:
                </p>

                <div className="flex gap-2 justify-center py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setFeedbackRating(star)}
                      className={`text-lg transition-all ${star <= feedbackRating ? 'text-amber-400 scale-110' : 'text-slate-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmitFeedback} className="space-y-2">
                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="ملاحظات إضافية لتحسين الاقتراحات..."
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs"
                    rows={2}
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#0D7A5F] text-white rounded-xl font-bold hover:bg-[#064E3B]"
                  >
                    إرسال التقييم
                  </button>
                </form>
              </div>

            </div>

          </div>
        )}

        {/* SUB-VIEW 2: SMART TRIP PLANNER & ITINERARY CUSTOMIZER */}
        {activeTab === 'planner' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Input Planner Generator Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">مُولّد وبرنامج الرحلات الذكي (Generate My Trip)</h3>
                  <p className="text-xs text-slate-500">أدخل معايير سفرك لبناء برنامج روزنامة يومي متكامل.</p>
                </div>

                <span className="bg-amber-100 text-amber-900 font-black px-3 py-1 rounded-full text-xs">
                  AI Travel Engine v6.0
                </span>
              </div>

              <form onSubmit={handleGeneratePlan} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-bold">
                <div className="space-y-1">
                  <label className="text-slate-700 block">المدينة المستهدفة:</label>
                  <select
                    value={plannerInputs.cities}
                    onChange={(e) => setPlannerInputs({ ...plannerInputs, cities: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  >
                    <option value="العلا">العلا (AlUla)</option>
                    <option value="الرياض">الرياض (Riyadh)</option>
                    <option value="جدة">جدة (Jeddah)</option>
                    <option value="أبها">أبها والجنوب (Abha)</option>
                    <option value="البحر الأحمر">مشروع البحر الأحمر (Red Sea)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">مدة الرحلة (بالأيام):</label>
                  <input
                    type="number"
                    min={1}
                    max={14}
                    value={plannerInputs.durationDays}
                    onChange={(e) => setPlannerInputs({ ...plannerInputs, durationDays: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">فئة الميزانية:</label>
                  <select
                    value={plannerInputs.budgetCategory}
                    onChange={(e) => setPlannerInputs({ ...plannerInputs, budgetCategory: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  >
                    <option value="اقتصادي">اقتصادي</option>
                    <option value="متوسط">متوسط</option>
                    <option value="فاخر">فاخر</option>
                    <option value="فاخر جداً">فاخر جداً (VIP)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 block">نوع الرحلة:</label>
                  <select
                    value={plannerInputs.tripType}
                    onChange={(e) => setPlannerInputs({ ...plannerInputs, tripType: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  >
                    <option value="ثقافية فاخرة">ثقافية وتاريخية</option>
                    <option value="مغامرات وطبيعة">مغامرات وطبيعة</option>
                    <option value="استجمام ورفاهية">استجمام ورفاهية</option>
                    <option value="عائلية وترفيه">عائلية وترفيه</option>
                  </select>
                </div>

                <div className="sm:col-span-2 lg:col-span-4 pt-2">
                  <button
                    type="submit"
                    disabled={isGeneratingPlan}
                    className="w-full py-4 bg-gradient-to-r from-[#0D7A5F] to-[#064E3B] text-white rounded-2xl font-black text-sm shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    <span>{isGeneratingPlan ? 'جاري بناء الخطة السياحية بالذكاء الاصطناعي...' : 'توليد الخطة السياحية الذكية (Generate My Trip) ✨'}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Generated Plan Days Showcase & Customizer */}
            {activePlan && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                
                {/* Plan Title & Summary */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-[#0D7A5F] block">الجدول المُولد بنجاح ⚡</span>
                    <h3 className="text-xl font-black text-slate-900">{activePlan.title}</h3>
                    <p className="text-xs text-slate-500">التكلفة التقديرية الإجمالية: <strong className="text-slate-900 font-mono">{activePlan.totalEstimatedCost}</strong> | الفئة: {activePlan.budgetCategory}</p>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => alert('تم نسخ الخطة السياحية إلى الحافظة! 📋')}
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الخطة</span>
                    </button>

                    <button 
                      onClick={() => alert('تم حفظ الخطة في مفضلتك 🌟')}
                      className="px-4 py-2 bg-[#0D7A5F] text-white rounded-xl text-xs font-black shadow"
                    >
                      حفظ الخطة
                    </button>
                  </div>
                </div>

                {/* Days Schedule Timeline */}
                <div className="space-y-6">
                  {activePlan.days.map((day, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-4">
                      
                      {/* Day Header */}
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#0D7A5F] text-white flex items-center justify-center font-black text-xs">
                            0{day.dayNumber}
                          </span>
                          <div>
                            <h4 className="font-black text-slate-900 text-sm">{day.date}: {day.title}</h4>
                            <span className="text-[10px] text-slate-500">الميزانية التقديرية اليومية: {day.dayEstimatedCost}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
                          <Sun className="w-4 h-4 text-amber-500" />
                          <span>الطقس المتوقع: {day.weather.temp} ({day.weather.condition})</span>
                        </div>
                      </div>

                      {/* Day Time Slots Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        
                        {/* Morning Slot */}
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 relative">
                          <div className="flex justify-between items-center text-[#0D7A5F] font-bold">
                            <span>🌅 الصباح ({day.morning.time})</span>
                            <button onClick={() => handleRemoveActivity(idx, 'morning')} className="text-rose-500 hover:underline text-[10px]">حذف</button>
                          </div>
                          <h5 className="font-black text-slate-900">{day.morning.title}</h5>
                          <p className="text-slate-500 text-[11px]">📍 {day.morning.location} | ⏱️ {day.morning.duration}</p>
                          <p className="text-slate-600 text-[11px] italic">{day.morning.notes}</p>
                        </div>

                        {/* Afternoon Slot */}
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 relative">
                          <div className="flex justify-between items-center text-amber-700 font-bold">
                            <span>☀️ الظهيرة ({day.afternoon.time})</span>
                            <button onClick={() => handleRemoveActivity(idx, 'afternoon')} className="text-rose-500 hover:underline text-[10px]">حذف</button>
                          </div>
                          <h5 className="font-black text-slate-900">{day.afternoon.title}</h5>
                          <p className="text-slate-500 text-[11px]">📍 {day.afternoon.location} | ⏱️ {day.afternoon.duration}</p>
                          <p className="text-slate-600 text-[11px] italic">{day.afternoon.notes}</p>
                        </div>

                        {/* Evening Slot */}
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 relative">
                          <div className="flex justify-between items-center text-indigo-700 font-bold">
                            <span>🌙 المساء ({day.evening.time})</span>
                            <button onClick={() => handleRemoveActivity(idx, 'evening')} className="text-rose-500 hover:underline text-[10px]">حذف</button>
                          </div>
                          <h5 className="font-black text-slate-900">{day.evening.title}</h5>
                          <p className="text-slate-500 text-[11px]">📍 {day.evening.location} | ⏱️ {day.evening.duration}</p>
                          <p className="text-slate-600 text-[11px] italic">{day.evening.notes}</p>
                        </div>

                      </div>

                      {/* Hotel & Restaurant Swap Recommendations */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 text-xs">
                        
                        <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                          <div className="flex items-center gap-2">
                            <Hotel className="w-4 h-4 text-[#0D7A5F]" />
                            <div>
                              <span className="font-bold text-slate-900 block">{day.hotelRecommendation.name}</span>
                              <span className="text-[10px] text-slate-500">⭐ {day.hotelRecommendation.stars} نجوم | {day.hotelRecommendation.pricePerNight}</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => handleSwapHotel(idx)}
                            className="px-2.5 py-1 bg-[#0D7A5F] text-white rounded-lg text-[10px] font-black"
                          >
                            استبدال الفندق
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                          <div className="flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-amber-700" />
                            <div>
                              <span className="font-bold text-slate-900 block">{day.restaurantRecommendation.name}</span>
                              <span className="text-[10px] text-slate-500">{day.restaurantRecommendation.cuisine} | {day.restaurantRecommendation.priceCategory}</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => alert('تم استبدال المطعم الموصى به! 🍽️')}
                            className="px-2.5 py-1 bg-amber-800 text-white rounded-lg text-[10px] font-black"
                          >
                            استبدال المطعم
                          </button>
                        </div>

                      </div>

                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>
        )}

        {/* SUB-VIEW 3: SMART NATURAL LANGUAGE SEARCH & RECOMMENDATIONS */}
        {activeTab === 'search' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">البحث باستخدام اللغة الطبيعية (Smart Natural Language Search)</h3>
              <p className="text-xs text-slate-500">اكتب طلبك باللغة العربية الطبيعية كما تتحدث تماماً.</p>
            </div>

            {/* Natural Language Query Bar */}
            <div className="flex gap-2">
              <input
                type="text"
                value={nlSearchQuery}
                onChange={(e) => setNlSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePerformNlSearch(nlSearchQuery)}
                placeholder="جرب البحث بـ: أريد مكانًا هادئًا للعشاء..."
                className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 bg-slate-50 text-xs font-bold text-slate-900"
              />
              <button
                type="button"
                onClick={() => handlePerformNlSearch(nlSearchQuery)}
                className="px-6 py-3 bg-[#0D7A5F] text-white rounded-2xl font-black text-xs shadow hover:bg-[#064E3B]"
              >
                بحث بالذكاء الاصطناعي ⚡
              </button>
            </div>

            {/* Quick Query Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'أريد مكانًا هادئًا للعشاء',
                'اقترح رحلة لمدة خمسة أيام',
                'أين أذهب مع الأطفال؟',
                'أفضل الأماكن للتصوير',
                'رحلة اقتصادية في الرياض'
              ].map((query, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePerformNlSearch(query)}
                  className="px-3 py-1.5 bg-[#FAF8F5] border border-slate-200 hover:border-[#0D7A5F] text-slate-700 hover:text-[#0D7A5F] rounded-xl text-xs font-bold transition-all"
                >
                  "{query}"
                </button>
              ))}
            </div>

            {/* Search Results Output */}
            {activeNlResult && (
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-[#E6F4F0] border border-emerald-300 text-xs text-[#0D7A5F] font-bold">
                  <span>🤖 تحليل الذكاء الاصطناعي: {activeNlResult.aiSummary}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeNlResult.matches.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-amber-100 text-amber-900 font-black px-2 py-0.5 rounded">{item.badge}</span>
                        <span className="text-xs font-bold text-amber-500">⭐ {item.rating}</span>
                      </div>
                      <h4 className="font-black text-slate-900 text-sm">{item.name}</h4>
                      <span className="text-[11px] text-[#0D7A5F] font-bold block">📍 {item.location} | {item.category}</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUB-VIEW 4: AI PLANS HISTORY & SUGGESTIONS LOG */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">سجل اقتراحات وخطط الذكاء الاصطناعي السابقة</h3>
            </div>

            <div className="space-y-3">
              {plansHistory.map((plan) => (
                <div key={plan.id} className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">{plan.title}</h4>
                    <p className="text-slate-500">تاريخ الإنشاء: {plan.createdAt} | التكلفة: {plan.totalEstimatedCost} | المدة: {plan.durationDays} أيام</p>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => { setActivePlan(plan); setActiveTab('planner'); }}
                      className="px-3 py-1.5 bg-[#0D7A5F] text-white rounded-xl font-bold"
                    >
                      إعادة فتح الخطة
                    </button>
                    <button 
                      onClick={() => setPlansHistory(plansHistory.filter(p => p.id !== plan.id))}
                      className="px-2.5 py-1.5 bg-rose-100 text-rose-700 rounded-xl font-bold"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-VIEW 5: AI SMART NOTIFICATIONS */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">التنبيهات والإشعارات الذكية المباشرة</h3>
            </div>

            <div className="space-y-3">
              {aiNotificationsDemo.map((notif) => (
                <div key={notif.id} className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-black text-slate-900 text-xs">{notif.title}</h4>
                      <span className="text-[10px] text-slate-400">{notif.time}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">{notif.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mandatory Prototype Notice Box */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="leading-relaxed">
            <strong>ملاحظة هامة:</strong> جميع التوصيات والنتائج المعروضة في هذا النموذج الأولي تعتمد على بيانات تجريبية لأغراض العرض فقط، وسيتم ربطها بخدمات الذكاء الاصطناعي الفعلية في مراحل التطوير المستقبلية.
          </p>
        </div>

      </div>
    </section>
  );
};
