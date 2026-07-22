import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Layers, 
  ShieldCheck, 
  Server, 
  FolderTree, 
  Globe, 
  Code2, 
  CheckCircle2, 
  Lock, 
  Zap, 
  BarChart3, 
  Sparkles,
  Smartphone,
  Network,
  FileCode,
  LayoutGrid
} from 'lucide-react';
import { 
  techStackData, 
  systemLayers, 
  apiDesignModules, 
  securityArchitecture, 
  folderStructureDemo 
} from '../data/architectureData';

export const ArchitectureViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'arch' | 'api' | 'security' | 'folders' | 'standards'>('stack');

  return (
    <section id="architecture-section" className="py-12 bg-[#050e0c] relative border-t border-[#c5a059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header */}
        <div className="emerald-glass rounded-3xl p-6 sm:p-8 border border-[#c5a059]/40 mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c5a059] to-[#8a6d33] flex items-center justify-center text-black shadow-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#c5a059] font-bold block">التخطيط الهندسي والمعماري (Phase 2 Specification)</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  معمارية النظام <span className="gold-gradient-text">المستقبلية والتصميم التقني</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>جاهز للتطوير والتوسع القياسي (Production Ready Architecture)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            تغطي هذه الوثيقة التخطيط الهندسي الشامل لمنصة **SAUDI EXPLORER AI**، بما يضمن بناء نظام عالي الأداء، قابل للتوسع الأفقي والعمودي، ومؤمن وفق أعلى المعايير العالمية لخدمة ملايين المستخدمين والزوار بمرونة تامة.
          </p>

          {/* Tab Navigation Controls */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'stack' 
                  ? 'bg-[#c5a059] text-black shadow-lg font-black' 
                  : 'bg-black/40 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>1. التقنيات (Tech Stack)</span>
            </button>

            <button
              onClick={() => setActiveTab('arch')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'arch' 
                  ? 'bg-[#c5a059] text-black shadow-lg font-black' 
                  : 'bg-black/40 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2. معمارية النظام (System Architecture)</span>
            </button>

            <button
              onClick={() => setActiveTab('api')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'api' 
                  ? 'bg-[#c5a059] text-black shadow-lg font-black' 
                  : 'bg-black/40 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>3. تصميم الواجهات (API Design)</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'security' 
                  ? 'bg-[#c5a059] text-black shadow-lg font-black' 
                  : 'bg-black/40 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>4. الأمان والتوسع (Security & Scale)</span>
            </button>

            <button
              onClick={() => setActiveTab('folders')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'folders' 
                  ? 'bg-[#c5a059] text-black shadow-lg font-black' 
                  : 'bg-black/40 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <FolderTree className="w-4 h-4" />
              <span>5. هيكل المجلدات (Folder Structure)</span>
            </button>

            <button
              onClick={() => setActiveTab('standards')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'standards' 
                  ? 'bg-[#c5a059] text-black shadow-lg font-black' 
                  : 'bg-black/40 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>6. معايير البرمجة (Standards)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TECH STACK */}
        {activeTab === 'stack' && (
          <div className="space-y-6 animate-fade-in">
            <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30">
              <h3 className="text-lg font-bold text-[#c5a059] mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                <span>حزمة التقنيات المقترحة (Technology Stack) وأسباب الاختيار</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="border-b border-[#c5a059]/30 text-[#c5a059]">
                      <th className="py-3 px-3">الوحدة / الطبقة</th>
                      <th className="py-3 px-3">التقنية المختارة</th>
                      <th className="py-3 px-3">الإصدار / النمط</th>
                      <th className="py-3 px-3">سبب الاختيار المباشر</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {techStackData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-3 font-bold text-white whitespace-nowrap">{item.category}</td>
                        <td className="py-3 px-3 text-emerald-400 font-mono font-bold whitespace-nowrap">{item.technology}</td>
                        <td className="py-3 px-3 text-gray-400 whitespace-nowrap">{item.version}</td>
                        <td className="py-3 px-3 text-gray-300 leading-relaxed">{item.justification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEM ARCHITECTURE LAYERS */}
        {activeTab === 'arch' && (
          <div className="space-y-6 animate-fade-in">
            <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#c5a059] flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  <span>طبقات معمارية النظام الموحدة (System Layers & Flow)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {systemLayers.map((layer, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-black/50 border border-white/10 hover:border-[#c5a059]/50 transition-all space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-extrabold text-white text-base">{layer.name}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.components.map((comp, cIdx) => (
                          <span key={cIdx} className="px-2.5 py-0.5 rounded-md bg-[#064e3b] text-emerald-300 text-[11px] font-mono border border-emerald-600/40">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-300">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: API DESIGN */}
        {activeTab === 'api' && (
          <div className="space-y-6 animate-fade-in">
            <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30 space-y-4">
              <h3 className="text-lg font-bold text-[#c5a059] flex items-center gap-2">
                <Network className="w-5 h-5" />
                <span>تصميم الواجهات البرمجية (RESTful API Blueprint)</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="border-b border-[#c5a059]/30 text-[#c5a059]">
                      <th className="py-3 px-3">الوحدة (Module)</th>
                      <th className="py-3 px-3">النوع (Method)</th>
                      <th className="py-3 px-3">المسار (Endpoint Path)</th>
                      <th className="py-3 px-3">الوصف والتأثير</th>
                      <th className="py-3 px-3">مستوى الصلاحية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    {apiDesignModules.map((api, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors font-sans">
                        <td className="py-3 px-3 font-bold text-white whitespace-nowrap">{api.module}</td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            api.method === 'GET' ? 'bg-blue-900/60 text-blue-300 border border-blue-500/40' :
                            api.method === 'POST' ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40' :
                            'bg-amber-900/60 text-amber-300 border border-amber-500/40'
                          }`}>
                            {api.method}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-amber-300 font-mono font-bold whitespace-nowrap">{api.path}</td>
                        <td className="py-3 px-3 text-gray-300">{api.description}</td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 border border-white/10 text-gray-300">
                            {api.access}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SECURITY & SCALABILITY */}
        {activeTab === 'security' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Security Box */}
              <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30 space-y-4">
                <h3 className="text-lg font-bold text-[#c5a059] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>معمارية الأمان والحماية (Security Architecture)</span>
                </h3>

                <div className="space-y-3">
                  {securityArchitecture.map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">{sec.title}</h4>
                        <span className="text-[10px] text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded font-mono">
                          {sec.mechanism}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">{sec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scalability Box */}
              <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30 space-y-4">
                <h3 className="text-lg font-bold text-[#c5a059] flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-amber-400" />
                  <span>استراتيجية التوسع والموثوقية (Scalability & Load)</span>
                </h3>

                <div className="space-y-3 text-xs text-gray-300 leading-relaxed">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <h4 className="font-bold text-white">1. التوسع الذاتي الأفقي (Stateless Horizontal Scaling)</h4>
                    <p>فصل منطق التطبيق في خوادم Serverless بدون حفظ حالة محلية (Stateless)، مما يسمح بإنشاء مئات الخوادم في ثوانٍ أثناء المواسم والسياحة الفائقة.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <h4 className="font-bold text-white">2. التخزين الموزع الفائق (Redis Multi-Tier Caching)</h4>
                    <p>تخزين نتائج نماذج الذكاء الاصطناعي والجداول المتكررة في Redis لحماية واجهات Gemini وتوفير وقت الاستجابة في أقل من 50 ملي ثانية.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <h4 className="font-bold text-white">3. تقسيم وقراءة قواعد البيانات (Database Read Replicas)</h4>
                    <p>توجيه عمليات القراءة والاستعلام عن الفنادق والفعاليات إلى نسخ قراءة متوزعة (Read Replicas)، مع تخصيص النسخة الرئيسية لعمليات الحجز والتحديث فقط.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: FOLDER STRUCTURE */}
        {activeTab === 'folders' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30 space-y-3">
                <h3 className="text-sm font-bold text-[#c5a059] flex items-center gap-2">
                  <FileCode className="w-4 h-4" />
                  <span>هيكل الواجهة الأمامية المقترح (Frontend Directory Structure)</span>
                </h3>
                <pre className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                  {folderStructureDemo.frontend}
                </pre>
              </div>

              <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30 space-y-3">
                <h3 className="text-sm font-bold text-[#c5a059] flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  <span>هيكل الخلفية والمحرك المقترح (Backend Directory Structure)</span>
                </h3>
                <pre className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-amber-300 overflow-x-auto leading-relaxed">
                  {folderStructureDemo.backend}
                </pre>
              </div>

            </div>
          </div>
        )}

        {/* TAB 6: STANDARDS */}
        {activeTab === 'standards' && (
          <div className="space-y-6 animate-fade-in">
            <div className="emerald-glass rounded-2xl p-6 border border-[#c5a059]/30 space-y-4">
              <h3 className="text-lg font-bold text-[#c5a059] flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>معايير البرمجة والجودة المعتمدة (Development & Clean Code Standards)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <h4 className="font-bold text-white text-sm">Clean Architecture</h4>
                  <p className="text-gray-300">فصل واجهة المستخدم كلياً عن منطق العمل والربط مع الخوادم، لضمان استبدال أي جزء دون تداعي باقي المكونات.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <h4 className="font-bold text-white text-sm">Component Reusability</h4>
                  <p className="text-gray-300">تصميم مكونات الذكاء الاصطناعي والحجز على شكل عناصر مستقلة وعالية إعادة الاستخدام مع دعم كامل لـ TypeScript Props.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <h4 className="font-bold text-white text-sm">Strict Code Quality</h4>
                  <p className="text-gray-300">الالتزام بالقواعد القياسية لـ ESLint وPrettier وتدقيق أنواع البيانات الصارم للحد من الأخطاء أثناء وقت التجميع.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
