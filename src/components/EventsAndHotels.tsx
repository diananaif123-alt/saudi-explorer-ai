import React from 'react';
import { Calendar, Building2, Star, Ticket, ArrowLeft, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { sampleEvents, sampleHotels } from '../data/travelData';

interface EventsAndHotelsProps {
  onBookItem: (item: { title: string; location: string; price: string; type: 'فندق' | 'فعالية' | 'تجربة' }) => void;
}

export const EventsAndHotels: React.FC<EventsAndHotelsProps> = ({ onBookItem }) => {
  return (
    <section className="py-16 bg-[#f8f5ed] border-t border-emerald-900/10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Events Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-emerald-900/10 gap-3">
          <div>
            <span className="text-xs text-[#d97706] font-extrabold block mb-1">الفعاليات الحية والمواسم الوطنية</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">فعاليات ومهرجانات <span className="emerald-emerald-gradient-text">المملكة 2026</span></h3>
          </div>
          <p className="text-xs text-slate-600 max-w-sm font-medium">احجز تذاكر الفعاليات والمواسم السياحية الكبرى في المملكة بنقرة واحدة بمساعدة الذكاء الاصطناعي.</p>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sampleEvents.map((ev) => (
            <div key={ev.id} className="bg-white rounded-3xl overflow-hidden border border-emerald-900/10 hover:border-emerald-500/40 transition-all duration-300 group p-5 flex flex-col justify-between shadow-xl shadow-slate-200/60 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#047857] text-xs font-black px-3 py-1 rounded-full border border-emerald-200 shadow-md">
                    {ev.category}
                  </span>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base">{ev.title}</h4>
                  <p className="text-xs text-slate-500 font-bold mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#047857]" />
                    <span>{ev.location}</span>
                  </p>
                  <p className="text-xs text-[#047857] font-extrabold mt-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>{ev.date}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">سعر التذكرة:</span>
                  <span className="text-base font-black text-[#d97706]">{ev.price}</span>
                </div>
                <button
                  onClick={() => onBookItem({ title: ev.title, location: ev.location, price: ev.price, type: 'فعالية' })}
                  className="px-4 py-2.5 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-extrabold text-xs shadow-md shadow-emerald-800/20 flex items-center gap-1.5 transition-all"
                >
                  <Ticket className="w-4 h-4 text-amber-300" />
                  <span>حجز تذكرة</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hotels Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-emerald-900/10 gap-3">
          <div>
            <span className="text-xs text-[#d97706] font-extrabold block mb-1">الفنادق والمنتجعات العالمية</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">إقامات سياحية <span className="emerald-emerald-gradient-text">فاخرة ومميزة</span></h3>
          </div>
          <p className="text-xs text-slate-600 max-w-sm font-medium">استمتع بضيافة سعودية أصيلة في أرقى فنادق ومنتجعات المملكة في العلا، نيوم، الرياض، وجدة.</p>
        </div>

        {/* Hotels Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleHotels.map((h) => (
            <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-emerald-900/10 hover:border-emerald-500/40 transition-all duration-300 group p-5 flex flex-col justify-between shadow-xl shadow-slate-200/60 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="relative h-52 rounded-2xl overflow-hidden">
                  <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/95 text-amber-600 text-xs font-black px-3 py-1 rounded-full border border-amber-200 shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{h.rating}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base">{h.name}</h4>
                  <p className="text-xs text-slate-500 font-bold mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#047857]" />
                    <span>{h.location}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {h.amenities.map((a, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-bold border border-slate-200">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">ابتداءً من:</span>
                  <span className="text-base font-black text-[#d97706]">{h.pricePerNight} <span className="text-xs text-slate-500 font-normal">/ ليلة</span></span>
                </div>
                <button
                  onClick={() => onBookItem({ title: h.name, location: h.location, price: h.pricePerNight, type: 'فندق' })}
                  className="px-4 py-2.5 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-extrabold text-xs shadow-md shadow-emerald-800/20 flex items-center gap-1.5 transition-all"
                >
                  <Building2 className="w-4 h-4 text-amber-300" />
                  <span>حجز إقامة</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
