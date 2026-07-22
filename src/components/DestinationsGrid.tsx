import React, { useState } from 'react';
import { 
  MapPin, 
  Star, 
  Sparkles, 
  ArrowLeft, 
  Compass, 
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';
import { sampleDestinations, Destination } from '../data/travelData';

interface DestinationsGridProps {
  onPlanDestination: (destName: string) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({ onPlanDestination }) => {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  return (
    <section id="destinations-grid-section" className="py-16 bg-[#faf8f3] relative border-t border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-emerald-900/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#047857] text-xs font-bold mb-3 border border-emerald-200 shadow-sm">
              <Compass className="w-4 h-4 text-[#047857]" />
              <span>أبرز الوجهات السعودية الساحرة • رؤية 2030</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              استكشف أروع <span className="emerald-emerald-gradient-text">معالم المملكة</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-medium leading-relaxed">
            وجهات متنوعة تجمع بين التاريخ الممتد لآلاف السنين، التضاريس الطبيعية الساحرة، والمشاريع المستقبلية الفاخرة.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleDestinations.map((dest) => (
            <div 
              key={dest.id}
              className="bg-white rounded-3xl overflow-hidden border border-emerald-900/10 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-900/10 text-amber-600 text-xs font-black shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{dest.rating}</span>
                  </div>

                  <div className="absolute bottom-3.5 right-3.5 left-3.5 text-right">
                    <span className="text-xs text-amber-300 font-black block mb-0.5">{dest.region}</span>
                    <h3 className="text-xl font-black text-white drop-shadow-md">{dest.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 text-right">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-medium">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dest.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-emerald-50 text-[#047857] border border-emerald-200 px-2.5 py-1 rounded-lg font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedDest(dest)}
                  className="text-xs text-slate-600 hover:text-[#047857] font-extrabold underline flex items-center gap-1"
                >
                  معاينة التفاصيل
                </button>

                <button
                  onClick={() => onPlanDestination(dest.name)}
                  className="px-4 py-2.5 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-extrabold text-xs shadow-md shadow-emerald-800/20 transition-all flex items-center gap-1.5 border border-emerald-400/30"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>خطط الرحلة مع AI</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Destination Details Drawer Modal */}
        {selectedDest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
            <div className="bg-white rounded-3xl border border-emerald-900/15 w-full max-w-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-right space-y-5">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <img src={selectedDest.image} alt={selectedDest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-4 right-4 text-right">
                  <span className="text-xs text-amber-300 font-black block mb-0.5">{selectedDest.region}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedDest.name}</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{selectedDest.description}</p>

              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#047857] mb-2.5">أبرز المعالم والتجارب الفاخرة:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {selectedDest.highlights.map((h, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-slate-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button 
                  onClick={() => setSelectedDest(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold border border-slate-300 hover:bg-slate-200"
                >
                  إغلاق
                </button>

                <button
                  onClick={() => {
                    const name = selectedDest.name;
                    setSelectedDest(null);
                    onPlanDestination(name);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#047857] text-white text-xs font-black flex items-center gap-2 hover:bg-[#065f46] shadow-md shadow-emerald-800/20"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>توليد جدول لهذه الوجهة الآن</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
