import React, { useState } from 'react';
import { 
  CheckCircle2, 
  QrCode, 
  X, 
  Wallet, 
  Building2, 
  Calendar, 
  Sparkles,
  Download
} from 'lucide-react';

interface BookingDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingItem: {
    title: string;
    location: string;
    price: string;
    type: 'فندق' | 'فعالية' | 'تجربة';
  } | null;
}

export const BookingDemoModal: React.FC<BookingDemoModalProps> = ({
  isOpen,
  onClose,
  bookingItem
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [walletBalance, setWalletBalance] = useState(15000); // 15,000 SAR Demo balance

  if (!isOpen || !bookingItem) return null;

  const handleConfirmBooking = () => {
    setIsConfirmed(true);
    setWalletBalance(prev => Math.max(0, prev - 1200));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="emerald-glass rounded-3xl border border-[#c5a059]/40 w-full max-w-lg overflow-hidden shadow-2xl p-6 text-right space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#c5a059]/30 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">المحفظة الرقمية للتجارب (Demo Wallet)</h3>
              <p className="text-[11px] text-gray-300">نظام حجز وتأكيد تجريبي داخل النموذج الأولي</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-black/40 text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isConfirmed ? (
          <div className="space-y-4 text-xs">
            {/* Wallet Balance Badge */}
            <div className="p-4 rounded-xl bg-black/50 border border-emerald-500/30 flex items-center justify-between">
              <span className="text-gray-300">الرصيد التجريبي المتاح بالمحفظة:</span>
              <span className="text-base font-black text-emerald-400">{walletBalance.toLocaleString()} ر.س</span>
            </div>

            {/* Item Details */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex justify-between items-center text-[#c5a059] font-bold">
                <span>{bookingItem.type}:</span>
                <span className="bg-[#c5a059]/20 px-2 py-0.5 rounded text-[10px]">{bookingItem.type}</span>
              </div>
              <p className="text-sm font-bold text-white">{bookingItem.title}</p>
              <p className="text-gray-400">الموقع: {bookingItem.location}</p>
              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-sm font-black text-[#c5a059]">
                <span>التكلفة الإجمالية:</span>
                <span>{bookingItem.price}</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400">
              * جميع عمليات الدفع والحجز تجريبية بالكامل لغرض استعراض النموذج الأولي (MVP) ولا يتم خصم أي مبالغ حقيقية.
            </p>

            <button
              onClick={handleConfirmBooking}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b38b43] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-95 transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>تأكيد الحجز خصماً من المحفظة التجريبية</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-center text-xs animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-900/50">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <h4 className="text-lg font-black text-white">تم تأكيد الحجز بنجاح!</h4>
            <p className="text-gray-300">تذكرة وحجز تجريبي مؤكد ومسجل برقم مرجعي: <span className="font-mono text-[#c5a059]">#KSA-2026-8891</span></p>

            {/* QR Code Demo Visual */}
            <div className="p-4 rounded-2xl bg-white text-black max-w-[200px] mx-auto space-y-2 border-2 border-[#c5a059]">
              <QrCode className="w-32 h-32 mx-auto text-gray-900" />
              <p className="text-[10px] font-mono font-bold text-gray-700">SCAN AT ENTRANCE</p>
            </div>

            <p className="text-[11px] text-emerald-300">تم إضافة هذا الحجز إلى محفظتك وسجل سفرك في النموذج الأولي.</p>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs"
            >
              إغلاق ومتابعة الاستكشاف
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
