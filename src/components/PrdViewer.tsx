import React, { useState } from 'react';
import { 
  FileText, 
  Target, 
  Compass, 
  AlertTriangle, 
  Users, 
  Layers, 
  Cpu, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Link2, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ChevronRight, 
  Globe, 
  Award,
  Zap,
  ArrowLeft,
  UserCheck
} from 'lucide-react';

import { 
  prdOverview, 
  executiveSummary, 
  visionAndMission, 
  objectives, 
  problemAndSolution, 
  targetAudienceList, 
  userPersonas, 
  userJourneySteps, 
  coreFeaturesList, 
  businessModel, 
  kpis, 
  riskMatrix, 
  futureIntegrations 
} from '../data/prdData';

export const PrdViewer: React.FC = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [selectedPersona, setSelectedPersona] = useState(userPersonas[0].id);

  const sections = [
    { id: 'summary', title: '1. Executive Summary', icon: FileText, label: 'الملخص التنفيذي' },
    { id: 'vision', title: '2 & 3. Vision & Mission', icon: Target, label: 'الرؤية والرسالة' },
    { id: 'objectives', title: '4. Objectives', icon: Award, label: 'الأهداف الاستراتيجية' },
    { id: 'problems', title: '5 & 6. Problem & Solution', icon: Zap, label: 'المشكلات والحلول' },
    { id: 'audience', title: '7. Target Audience', icon: Users, label: 'الفئات المستهدفة' },
    { id: 'personas', title: '8. User Personas', icon: UserCheck, label: 'شخصيات المستخدمين' },
    { id: 'journey', title: '9. User Journey', icon: Compass, label: 'رحلة المستخدم' },
    { id: 'features', title: '10. Core Features', icon: Layers, label: 'الميزات الرئيسية' },
    { id: 'business', title: '11. Business Model', icon: TrendingUp, label: 'نموذج العمل' },
    { id: 'kpis', title: '12. Success Metrics', icon: BarChart3, label: 'مؤشرات KPI' },
    { id: 'roadmap', title: '13. Future Roadmap', icon: Sparkles, label: 'خارطة المراحل' },
    { id: 'risks', title: '14. Risks & Challenges', icon: AlertTriangle, label: 'إدارة المخاطر' },
    { id: 'integrations', title: '15. Future Integrations', icon: Link2, label: 'الربط المستقبلي' },
  ];

  const currentPersona = userPersonas.find(p => p.id === selectedPersona) || userPersonas[0];

  return (
    <section id="prd-document-section" className="py-12 bg-[#0a1512] border-t border-[#c5a059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PRD Document Header Box */}
        <div className="emerald-glass rounded-2xl p-6 sm:p-8 border border-[#c5a059]/40 mb-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/40">
                  {prdOverview.documentType}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  {prdOverview.version}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white gold-gradient-text">
                وثيقة متطلبات المنتج الوطنية الشاملة (PRD)
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">
                إعداد: {prdOverview.preparedBy} • {prdOverview.date}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs space-y-1 font-mono text-gray-300">
              <p><span className="text-[#c5a059]">التصنيف:</span> {prdOverview.classification}</p>
              <p><span className="text-emerald-400">حالة النموذج:</span> Demo Data Ready (MVP Blueprint)</p>
            </div>
          </div>
        </div>

        {/* PRD Layout: Sidebar Nav + Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* PRD Navigation Sidebar */}
          <div className="lg:col-span-3 space-y-2">
            <div className="p-3 bg-[#0f1c18] border border-[#c5a059]/20 rounded-xl mb-3">
              <p className="text-xs font-bold text-[#c5a059] uppercase tracking-wider">أقسام الوثيقة (15 قسم)</p>
            </div>
            <div className="space-y-1.5 max-h-[700px] overflow-y-auto pr-1">
              {sections.map((sec) => {
                const IconComponent = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className={`w-full text-right px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#064e3b] text-white border border-[#c5a059] shadow-lg shadow-[#064e3b]/50'
                        : 'bg-[#0f1c18]/60 text-gray-400 hover:bg-[#0f1c18] hover:text-gray-200 border border-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#c5a059]' : 'text-gray-500'}`} />
                      <span>{sec.label}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-180 text-[#c5a059]' : 'text-gray-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* PRD Main Content Viewer Area */}
          <div className="lg:col-span-9 bg-[#0f1c18]/90 rounded-2xl p-6 sm:p-8 border border-[#c5a059]/30 min-h-[650px] shadow-2xl relative">
            
            {/* Section 1: Executive Summary */}
            {activeSection === 'summary' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#c5a059]" />
                    1. الملخص التنفيذي (Executive Summary)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 1 من 15</span>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-gray-200">
                  <div className="p-5 rounded-xl bg-black/40 border border-emerald-900/40">
                    <h4 className="font-bold text-[#c5a059] mb-2 text-base">عن المنصة:</h4>
                    <p>{executiveSummary.about}</p>
                  </div>

                  <div className="p-5 rounded-xl bg-black/40 border border-emerald-900/40">
                    <h4 className="font-bold text-[#c5a059] mb-2 text-base">سبب إنشاء المنصة (Why Created):</h4>
                    <p>{executiveSummary.whyCreated}</p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-[#064e3b]/50 to-[#0f1c18] border border-[#c5a059]/40">
                    <h4 className="font-bold text-[#c5a059] mb-2 text-base">القيمة المقدمة (Value Proposition):</h4>
                    <p>{executiveSummary.valueProposition}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2 & 3: Vision & Mission */}
            {activeSection === 'vision' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#c5a059]" />
                    2 & 3. الرؤية والرسالة (Vision & Mission)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 2 و 3 من 15</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="emerald-glass p-6 rounded-2xl border border-[#c5a059]/40 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                      <Target className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">2. رؤية المشروع (Vision)</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">{visionAndMission.vision}</p>
                  </div>

                  <div className="emerald-glass p-6 rounded-2xl border border-[#c5a059]/40 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">3. رسالة المشروع (Mission)</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">{visionAndMission.mission}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Objectives */}
            {activeSection === 'objectives' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#c5a059]" />
                    4. الأهداف المباشرة والاستراتيجية (Objectives)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 4 من 15</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#c5a059] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                      الأهداف قصيرة المدى (Short-Term Objectives / MVP):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {objectives.shortTerm.map((obj, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                          <p className="text-xs text-gray-200 leading-relaxed">{obj}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      الأهداف طويلة المدى (Long-Term Objectives / Vision 2030):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {objectives.longTerm.map((obj, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-black/40 border border-emerald-900/40 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="text-xs text-gray-200 leading-relaxed">{obj}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 5 & 6: Problems & Proposed Solutions */}
            {activeSection === 'problems' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#c5a059]" />
                    5 & 6. صياغة المشكلة والحلول (Problem & Proposed Solution)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 5 و 6 من 15</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-rose-400 border-b border-rose-900/40 pb-2">
                      5. المشكلات القائمة (Problem Statement):
                    </h4>
                    {problemAndSolution.problems.map((p, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/30 space-y-1">
                        <p className="text-xs font-bold text-rose-300">{p.title}</p>
                        <p className="text-xs text-gray-300">{p.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-emerald-400 border-b border-emerald-900/40 pb-2">
                      6. الحلول المبتكرة (Proposed Solution):
                    </h4>
                    {problemAndSolution.solutions.map((s, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-700/40 space-y-1">
                        <p className="text-xs font-bold text-[#c5a059]">{s.title}</p>
                        <p className="text-xs text-gray-300">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Section 7: Target Audience */}
            {activeSection === 'audience' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#c5a059]" />
                    7. الفئات المستهدفة بالكامل (Target Audience)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 7 من 15</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {targetAudienceList.map((audience) => (
                    <div key={audience.id} className="p-4 rounded-xl bg-black/40 border border-[#c5a059]/20 space-y-2 hover:border-[#c5a059] transition-all">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">{audience.title}</h4>
                        <span className="text-[10px] text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded font-mono">
                          {audience.titleEn}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">{audience.description}</p>
                      <div className="pt-2 border-t border-white/5 space-y-1">
                        <p className="text-[11px] font-bold text-[#c5a059]">المزايا المكتسبة:</p>
                        {audience.benefits.map((b, i) => (
                          <p key={i} className="text-[11px] text-gray-400 flex items-center gap-1">
                            <span className="text-[#c5a059]">•</span> {b}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 8: User Personas */}
            {activeSection === 'personas' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-[#c5a059]" />
                    8. شخصيات المستخدمين الافتراضية (User Personas)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 8 من 15</span>
                </div>

                {/* Persona Selector */}
                <div className="flex gap-2 border-b border-white/10 pb-3">
                  {userPersonas.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPersona(p.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedPersona === p.id 
                          ? 'bg-[#c5a059] text-black shadow-lg' 
                          : 'bg-black/40 text-gray-400 hover:text-white'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>

                {/* Selected Persona Detail */}
                <div className="p-6 rounded-2xl bg-black/50 border border-[#c5a059]/30 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3 text-center md:text-right">
                    <img 
                      src={currentPersona.image} 
                      alt={currentPersona.name} 
                      className="w-28 h-28 rounded-2xl object-cover border-2 border-[#c5a059] mx-auto md:mx-0 shadow-xl"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white">{currentPersona.name}</h4>
                      <p className="text-xs text-[#c5a059] font-medium">{currentPersona.role}</p>
                      <p className="text-[11px] text-gray-400">العمر: {currentPersona.age} سنة | الجنسية: {currentPersona.nationality}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#064e3b]/30 border border-emerald-800/40 text-xs italic text-emerald-200">
                      "{currentPersona.quote}"
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-4 text-xs">
                    <div>
                      <h5 className="font-bold text-[#c5a059] mb-1.5">الأهداف والتطلعات (Goals):</h5>
                      <ul className="space-y-1 text-gray-200">
                        {currentPersona.goals.map((g, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-rose-400 mb-1.5">نقاط الألم والتحديات (Pain Points):</h5>
                      <ul className="space-y-1 text-gray-200">
                        {currentPersona.painPoints.map((p, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-[11px]">
                      <span className="bg-emerald-950 px-2.5 py-1 rounded text-emerald-300 border border-emerald-800">
                        مستوى التقنية: {currentPersona.techTechLevel}
                      </span>
                      <span className="bg-[#c5a059]/20 px-2.5 py-1 rounded text-[#c5a059] border border-[#c5a059]/30">
                        الوجهات المفضلة: {currentPersona.preferredDestinations.join(' • ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 9: User Journey */}
            {activeSection === 'journey' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#c5a059]" />
                    9. رحلة المستخدم المتكاملة (User Journey)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 9 من 15</span>
                </div>

                <div className="space-y-4">
                  {userJourneySteps.map((step) => (
                    <div key={step.step} className="p-5 rounded-xl bg-black/40 border border-[#c5a059]/20 flex flex-col md:flex-row items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#c5a059] text-black font-extrabold flex items-center justify-center shrink-0 shadow-lg">
                        {step.step}
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white">{step.title}</h4>
                          <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                            شعور المستخدم: {step.emotionalState}
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">{step.description}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {step.touchpoints.map((tp, i) => (
                            <span key={i} className="text-[10px] bg-white/5 text-[#c5a059] border border-white/10 px-2 py-0.5 rounded">
                              {tp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 10: Core Features Matrix */}
            {activeSection === 'features' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#c5a059]" />
                    10. قائمة الميزات الرئيسية (Core Features Matrix)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 10 من 15</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead>
                      <tr className="border-b border-[#c5a059]/30 bg-black/50 text-[#c5a059]">
                        <th className="p-3">الميزة</th>
                        <th className="p-3">الفئة</th>
                        <th className="p-3">الوصف الوظيفي</th>
                        <th className="p-3">الأولوية</th>
                        <th className="p-3">مرحلة التنفيذ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-gray-200">
                      {coreFeaturesList.map((f) => (
                        <tr key={f.id} className="hover:bg-white/5">
                          <td className="p-3 font-bold text-white">{f.title}</td>
                          <td className="p-3 text-gray-400">{f.category}</td>
                          <td className="p-3 leading-relaxed max-w-xs">{f.description}</td>
                          <td className="p-3">
                            <span className="bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/40 px-2 py-0.5 rounded text-[10px] font-bold">
                              {f.priority}
                            </span>
                          </td>
                          <td className="p-3 font-mono text-emerald-400">{f.phase}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Section 11: Business Model */}
            {activeSection === 'business' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#c5a059]" />
                    11. نموذج العمل ومصادر الإيرادات (Business Model)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 11 من 15</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {businessModel.revenueStreams.map((rev, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-[#c5a059]/30 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <h4 className="text-sm font-bold text-white">{rev.title}</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">{rev.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 12: Success Metrics */}
            {activeSection === 'kpis' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#c5a059]" />
                    12. مؤشرات قياس النجاح (KPIs & Metrics)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 12 من 15</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {kpis.map((k, i) => (
                    <div key={i} className="p-5 rounded-xl bg-black/40 border border-emerald-800/40 space-y-2 text-center">
                      <p className="text-xs text-gray-400 font-medium">{k.metric}</p>
                      <p className="text-2xl font-black text-[#c5a059]">{k.target}</p>
                      <span className="inline-block text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                        {k.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 13: Roadmap */}
            {activeSection === 'roadmap' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#c5a059]" />
                    13. خارطة طريق التطوير المستقبلية (Roadmap Phases 1-10)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 13 من 15</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300">
                  سيتم تنفيذ المراحل خطوة بخطوة بدءاً من Phase 1 المنفذ حالياً في هذه الوثيقة وحتى الوصول لإطلاق النسخة الكاملة المنتظرة.
                </div>
              </div>
            )}

            {/* Section 14: Risks & Mitigation */}
            {activeSection === 'risks' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#c5a059]" />
                    14. تحليل المخاطر وإدارتها (Risks & Mitigation)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 14 من 15</span>
                </div>

                <div className="space-y-3">
                  {riskMatrix.map((r) => (
                    <div key={r.id} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-rose-300">{r.risk}</span>
                        <div className="flex gap-2 text-[10px]">
                          <span className="bg-white/10 px-2 py-0.5 rounded text-gray-300">فئة: {r.category}</span>
                          <span className="bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded font-bold">تأثير {r.impact}</span>
                        </div>
                      </div>
                      <p className="text-xs text-emerald-300 leading-relaxed">
                        <span className="font-bold text-[#c5a059]">خطة التخفيف (Mitigation):</span> {r.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 15: Integrations */}
            {activeSection === 'integrations' && (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-[#c5a059]/20 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-[#c5a059]" />
                    15. خطة الربط والتكامل المستقبلي (Future Integrations)
                  </h3>
                  <span className="text-xs text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded-md border border-[#c5a059]/30">القسم 15 من 15</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {futureIntegrations.map((sys, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-black/40 border border-emerald-900/40 space-y-2">
                      <h4 className="text-sm font-bold text-[#c5a059]">{sys.category}</h4>
                      <p className="text-xs text-gray-300">{sys.purpose}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {sys.systems.map((s, idx) => (
                          <span key={idx} className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
