import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wallet,
  CreditCard,
  Award,
  FileText as Passport,
  Bell,
  Star,
  History,
  HelpCircle,
  Settings,
  Heart,
  PlusCircle,
  Download,
  QrCode,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Calendar,
  Gift,
  Tag,
  Zap,
  Clock,
  Search,
  Trash2,
  MessageSquare,
  Send,
  Lock,
  Globe,
  Sun,
  Moon,
  LogOut,
  ChevronRight,
  ChevronDown,
  X,
  Smartphone,
  DollarSign,
  User,
  Check,
  Compass,
  Utensils,
  Bed,
  Car,
  Ticket,
  LifeBuoy
} from 'lucide-react';

import {
  initialWalletBalance,
  demoSavedPaymentCards,
  demoTransactionsList,
  demoCityStamps,
  demoBadgeAchievements,
  demoRedeemableRewards,
  demoNotifications,
  demoSupportTickets,
  demoFAQsList,
  WalletBalance,
  PaymentCard,
  TransactionRecord,
  CityStamp,
  BadgeAchievement,
  RedeemableReward,
  NotificationItem,
  SupportTicket,
  FAQItem
} from '../data/walletPassportRewardsData';

export const WalletPassportRewardsViewer: React.FC = () => {
  // Main Tab Navigation
  const [activeTab, setActiveTab] = useState<
    'wallet' | 'gateway' | 'passport' | 'rewards' | 'favorites' | 'notifications' | 'history' | 'support' | 'settings'
  >('wallet');

  // Wallet & Payment States
  const [walletBalance, setWalletBalance] = useState<WalletBalance>(initialWalletBalance);
  const [transactions, setTransactions] = useState<TransactionRecord[]>(demoTransactionsList);
  const [savedCards, setSavedCards] = useState<PaymentCard[]>(demoSavedPaymentCards);
  const [showTopUpModal, setShowTopUpModal] = useState<boolean>(false);
  const [topUpAmount, setTopUpAmount] = useState<number>(500);

  // Payment Gateway Simulation State
  const [gatewayPaymentMethod, setGatewayPaymentMethod] = useState<'card' | 'apple' | 'google' | 'wallet' | 'arrival'>('apple');
  const [paymentSuccessNotice, setPaymentSuccessNotice] = useState<string | null>(null);

  // Rewards State
  const [rewardsList, setRewardsList] = useState<RedeemableReward[]>(demoRedeemableRewards);
  const [redeemedVouchers, setRedeemedVouchers] = useState<{ rewardTitle: string; code: string; date: string }[]>([
    { rewardTitle: 'خصم 25% على حجز الفندق القادم', code: 'SAUDI-VIP-25', date: '2026-07-10' }
  ]);
  const [redeemSuccessMsg, setRedeemSuccessMsg] = useState<string | null>(null);

  // Favorites State
  const [favoritesItems, setFavoritesItems] = useState<
    { id: string; title: string; category: string; city: string; image: string; rating: number }[]
  >([
    {
      id: 'fav-1',
      title: 'منتجع هابيتاس العلا البيئي',
      category: 'فنادق ومنتجعات',
      city: 'العلا',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400',
      rating: 4.9
    },
    {
      id: 'fav-2',
      title: 'مطعم سهيل النبيل النجدي',
      category: 'مطاعم تراثية',
      city: 'الرياض',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400',
      rating: 4.8
    },
    {
      id: 'fav-3',
      title: 'مهرجان شتاء طنطورة الموسيقي',
      category: 'فعاليات حية',
      city: 'العلا',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400',
      rating: 4.9
    }
  ]);
  const [favoritesSearch, setFavoritesSearch] = useState<string>('');

  // Notifications State
  const [notificationsList, setNotificationsList] = useState<NotificationItem[]>(demoNotifications);

  // Support Tickets State
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>(demoSupportTickets);
  const [newTicketSubject, setNewTicketSubject] = useState<string>('');
  const [newTicketCategory, setNewTicketCategory] = useState<SupportTicket['category']>('استفسار عن حجز');
  const [ticketCreatedSuccess, setTicketCreatedSuccess] = useState<boolean>(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('الكل');

  // Settings State
  const [selectedLanguage, setSelectedLanguage] = useState<'ar' | 'en'>('ar');
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [biometricsEnabled, setBiometricsEnabled] = useState<boolean>(true);

  // TOP UP WALLET HANDLER
  const handleExecuteTopUp = (e: React.FormEvent) => {
    e.preventDefault();
    const newTx: TransactionRecord = {
      id: `tx-${Date.now()}`,
      title: 'شحن المحفظة الرقمية (Demo Top-up)',
      category: 'شحن محفظة',
      amount: topUpAmount,
      type: 'credit',
      date: new Date().toISOString().split('T')[0],
      time: '12:00',
      referenceCode: `TOPUP-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'مكتمل'
    };

    setWalletBalance(prev => ({
      ...prev,
      currentBalance: prev.currentBalance + topUpAmount
    }));

    setTransactions(prev => [newTx, ...prev]);
    setShowTopUpModal(false);
    setPaymentSuccessNotice(`تم شحن المحفظة بقيمة ${topUpAmount} ريال بنجاح (Demo Mode)!`);
    setTimeout(() => setPaymentSuccessNotice(null), 4000);
  };

  // DEMO PAYMENT GATEWAY COMPLETE PAYMENT
  const handleSimulatePayment = () => {
    const paymentAmount = 350; // Demo purchase amount
    const newTx: TransactionRecord = {
      id: `tx-pay-${Date.now()}`,
      title: 'حجز تجربة سياحية (Demo Gateway Payment)',
      category: 'حجز فندق',
      amount: paymentAmount,
      type: 'debit',
      date: new Date().toISOString().split('T')[0],
      time: '12:05',
      referenceCode: `PAY-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'مكتمل'
    };

    setWalletBalance(prev => ({
      ...prev,
      currentBalance: Math.max(0, prev.currentBalance - paymentAmount),
      rewardsPoints: prev.rewardsPoints + 150
    }));

    setTransactions(prev => [newTx, ...prev]);
    setPaymentSuccessNotice('Payment Successful (Demo Mode) — تم تحديث المحفظة وإضافة 150 نقطة مكافآت!');
    setTimeout(() => setPaymentSuccessNotice(null), 5000);
  };

  // REDEEM REWARD HANDLER
  const handleRedeemReward = (reward: RedeemableReward) => {
    if (walletBalance.rewardsPoints < reward.pointsCost) {
      alert('عذراً، لا تمتلك نقاط كافية لاستبدال هذه المكافأة!');
      return;
    }

    setWalletBalance(prev => ({
      ...prev,
      rewardsPoints: prev.rewardsPoints - reward.pointsCost
    }));

    const voucherCode = reward.voucherCode || `SAUDI-REWARD-${Math.floor(1000 + Math.random() * 9000)}`;
    setRedeemedVouchers(prev => [
      { rewardTitle: reward.title, code: voucherCode, date: new Date().toISOString().split('T')[0] },
      ...prev
    ]);

    setRedeemSuccessMsg(`تم استبدال ${reward.pointsCost} نقطة بنجاح! كود القسيمة: ${voucherCode}`);
    setTimeout(() => setRedeemSuccessMsg(null), 5000);
  };

  // CREATE SUPPORT TICKET HANDLER
  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketSubject.trim()) return;

    const newTicket: SupportTicket = {
      id: `TICKET-${Math.floor(900 + Math.random() * 100)}`,
      subject: newTicketSubject,
      category: newTicketCategory,
      status: 'مفتوحة',
      date: new Date().toISOString().split('T')[0],
      lastResponse: 'تم استلام بلاغك وسيقوم فريق الدعم بتبسيط الرد فوراً.'
    };

    setSupportTickets(prev => [newTicket, ...prev]);
    setNewTicketSubject('');
    setTicketCreatedSuccess(true);
    setTimeout(() => setTicketCreatedSuccess(false), 4000);
  };

  // REMOVE FAVORITE HANDLER
  const handleRemoveFavorite = (id: string) => {
    setFavoritesItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section id="phase10-wallet-section" className="py-12 bg-slate-950 text-slate-100 border-t border-emerald-900/40 relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3 shadow-lg shadow-emerald-950/50"
          >
            <Wallet className="w-4 h-4 text-amber-400" />
            <span>المرحلة 10 — المحفظة الرقمية، الجواز السياحي، والمكافآت الذكية</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            مركز خدمات السائح الذكي والمحفظة الرقمية
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            إدارة كاملة للرصيد، الحجوزات، الأختام الرقمية في الجواز السياحي، استبدال النقاط، مركز الإشعارات والدعم الفني.
          </p>
        </div>

        {/* Mandatory Demo Disclaimer Banner Requirement */}
        <div className="bg-amber-950/60 border border-amber-500/40 rounded-2xl p-3.5 mb-8 text-center text-xs text-amber-200/90 shadow-xl flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            "جميع عمليات الدفع والمحفظة الرقمية في هذا النموذج هي محاكاة لأغراض العرض والتقييم فقط، ولا يوجد أي تكامل فعلي مع البنوك أو مزودي خدمات الدفع في هذه المرحلة."
          </span>
        </div>

        {/* Payment Success Toast Notification */}
        <AnimatePresence>
          {paymentSuccessNotice && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-emerald-950 border border-emerald-400/50 text-emerald-200 p-4 rounded-2xl mb-6 shadow-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{paymentSuccessNotice}</span>
              </div>
              <button onClick={() => setPaymentSuccessNotice(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 10 Primary Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <button
            onClick={() => setActiveTab('wallet')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'wallet'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Wallet className="w-4 h-4 text-amber-400" />
            <span>المحفظة الرقمية</span>
          </button>

          <button
            onClick={() => setActiveTab('gateway')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'gateway'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>بوابة الدفع (Demo)</span>
          </button>

          <button
            onClick={() => setActiveTab('passport')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'passport'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>الجواز السياحي والأختام</span>
          </button>

          <button
            onClick={() => setActiveTab('rewards')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'rewards'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Gift className="w-4 h-4 text-amber-400" />
            <span>نظام المكافآت والقسائم</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'favorites'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Heart className="w-4 h-4 text-red-400" />
            <span>المفضلة ({favoritesItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all relative ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Bell className="w-4 h-4 text-amber-300" />
            <span>الإشعارات</span>
            {notificationsList.filter(n => !n.read).length > 0 && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <History className="w-4 h-4 text-emerald-400" />
            <span>سجل الأنشطة</span>
          </button>

          <button
            onClick={() => setActiveTab('support')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'support'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <LifeBuoy className="w-4 h-4 text-amber-300" />
            <span>مركز الدعم والأسئلة</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Settings className="w-4 h-4 text-slate-300" />
            <span>الإعدادات</span>
          </button>
        </div>

        {/* TAB 1: DIGITAL WALLET */}
        {activeTab === 'wallet' && (
          <div className="space-y-6">
            
            {/* Wallet Overview Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Balance Card */}
              <div className="bg-gradient-to-br from-slate-900 via-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400">الرصيد المتاح التجريبي</span>
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Wallet className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-3xl font-black text-white tracking-tight font-mono mb-2">
                  {walletBalance.currentBalance.toLocaleString()} <span className="text-sm font-normal text-amber-400">{walletBalance.currency}</span>
                </div>

                <p className="text-[11px] text-slate-400 mb-6">متاح للاستخدام المباشر في الفنادق والفعاليات والرحلات.</p>

                <button
                  onClick={() => setShowTopUpModal(true)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
                >
                  <PlusCircle className="w-4 h-4 text-amber-300" />
                  <span>شحن الرصيد التجريبي</span>
                </button>
              </div>

              {/* Rewards Points Card */}
              <div className="bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400">نقاط المكافآت المكتسبة</span>
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-3xl font-black text-amber-400 tracking-tight font-mono mb-2">
                  {walletBalance.rewardsPoints.toLocaleString()} <span className="text-sm font-normal text-slate-300">نقطة</span>
                </div>

                <p className="text-[11px] text-slate-400 mb-6">يمكنك استبدال النقاط بخصومات وقسائم سفر VIP.</p>

                <button
                  onClick={() => setActiveTab('rewards')}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-amber-500/30"
                >
                  <Gift className="w-4 h-4" />
                  <span>تصفح قسائم الاستبدال</span>
                </button>
              </div>

              {/* Saved Cards Overview */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-400">وسائل الدفع المحفوظة (Demo)</span>
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="space-y-2">
                    {savedCards.map(card => (
                      <div key={card.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-emerald-400 uppercase">{card.type}</span>
                          <span className="font-mono text-slate-300">•••• {card.last4}</span>
                        </div>
                        {card.isDefault && (
                          <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-[10px] px-2 py-0.5 rounded">الافتراضية</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('gateway')}
                  className="w-full mt-4 bg-slate-950 hover:bg-slate-800 text-slate-300 font-bold py-2 rounded-xl text-xs border border-slate-800"
                >
                  إدارة بطاقات الدفع
                </button>
              </div>

            </div>

            {/* Transactions History Table */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <History className="w-4 h-4 text-emerald-400" />
                  <span>سجل العمليات المالية والإيصالات</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">إجمالي {transactions.length} عمليات</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">الخدمة / البيان</th>
                      <th className="p-3">التصنيف</th>
                      <th className="p-3">رقم المرجع</th>
                      <th className="p-3">التاريخ والوقت</th>
                      <th className="p-3">المبلغ</th>
                      <th className="p-3 text-center">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {transactions.map(tx => (
                      <tr key={tx.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 font-bold text-white">{tx.title}</td>
                        <td className="p-3 text-slate-400">{tx.category}</td>
                        <td className="p-3 font-mono text-amber-300">{tx.referenceCode}</td>
                        <td className="p-3 font-mono text-slate-400">{tx.date} ({tx.time})</td>
                        <td className={`p-3 font-mono font-bold ${tx.type === 'credit' ? 'text-emerald-400' : 'text-slate-200'}`}>
                          {tx.type === 'credit' ? '+' : '-'}{tx.amount} ريال
                        </td>
                        <td className="p-3 text-center">
                          <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-[10px] px-2.5 py-1 rounded-full">
                            {tx.status}
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

        {/* TAB 2: DEMO PAYMENT GATEWAY */}
        {activeTab === 'gateway' && (
          <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">صفحة الدفع التجريبية (Demo Gateway)</h3>
              <p className="text-xs text-slate-400 mt-1">اختبار عملية تنفيذ وتأكيد المدفوعات محاكاةً للأنظمة البنكية</p>
            </div>

            <div className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2">اختر طريقة الدفع المحاكية:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <button
                    onClick={() => setGatewayPaymentMethod('apple')}
                    className={`p-3 rounded-2xl text-xs font-bold border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      gatewayPaymentMethod === 'apple'
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <Smartphone className="w-5 h-5" />
                    <span>Apple Pay</span>
                  </button>

                  <button
                    onClick={() => setGatewayPaymentMethod('card')}
                    className={`p-3 rounded-2xl text-xs font-bold border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      gatewayPaymentMethod === 'card'
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>بطاقات بنكية / مدى</span>
                  </button>

                  <button
                    onClick={() => setGatewayPaymentMethod('google')}
                    className={`p-3 rounded-2xl text-xs font-bold border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      gatewayPaymentMethod === 'google'
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <Globe className="w-5 h-5" />
                    <span>Google Pay</span>
                  </button>

                  <button
                    onClick={() => setGatewayPaymentMethod('wallet')}
                    className={`p-3 rounded-2xl text-xs font-bold border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      gatewayPaymentMethod === 'wallet'
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <Wallet className="w-5 h-5" />
                    <span>المحفظة الرقمية</span>
                  </button>

                  <button
                    onClick={() => setGatewayPaymentMethod('arrival')}
                    className={`p-3 rounded-2xl text-xs font-bold border flex flex-col items-center justify-center gap-1.5 transition-all col-span-2 sm:col-span-1 ${
                      gatewayPaymentMethod === 'arrival'
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>الدفع عند الوصول</span>
                  </button>

                </div>
              </div>

              {/* Order Summary Demo Box */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>الخدمة المحددة:</span>
                  <span className="text-slate-200 font-bold">تذكرة تجربة سياحية فاخرة</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>رسوم الخدمة والضرائب:</span>
                  <span className="text-slate-200 font-mono">0 ريال (معفية)</span>
                </div>
                <div className="flex justify-between text-slate-200 pt-2 border-t border-slate-800 font-bold text-sm">
                  <span>المبلغ المستحق للدفع:</span>
                  <span className="text-amber-400 font-mono">350 ريال</span>
                </div>
              </div>

              <button
                onClick={handleSimulatePayment}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-black py-3.5 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60"
              >
                <ShieldCheck className="w-5 h-5 text-amber-300" />
                <span>إتمام الدفع التجريبي (Complete Payment)</span>
              </button>

            </div>
          </div>
        )}

        {/* TAB 3: TOURIST PASSPORT */}
        {activeTab === 'passport' && (
          <div className="space-y-6">
            
            {/* Digital Passport Card */}
            <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800/60 pb-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-3xl shadow-inner">
                    🇸🇦
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-400 font-mono font-bold tracking-widest uppercase block">
                      KINGDOM OF SAUDI ARABIA TOURIST PASSPORT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">عبدالله الماجد</h3>
                    <p className="text-xs text-emerald-300 font-semibold">مستوى 4 — رحالة خبير كبار الشخصيات VIP</p>
                  </div>
                </div>

                <div className="text-left bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-emerald-500/30">
                  <span className="text-[10px] text-slate-400 block font-mono">رقم الجواز الرقمي:</span>
                  <span className="text-sm font-black text-amber-400 font-mono">SA-EXP-2026-9810</span>
                </div>
              </div>

              {/* Passport Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mb-6">
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">المدن المزارة</span>
                  <strong className="text-lg text-emerald-400 font-mono">4 مدن</strong>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">المعالم الاستكشافية</span>
                  <strong className="text-lg text-amber-400 font-mono">23 معلماً</strong>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">الفعاليات</span>
                  <strong className="text-lg text-emerald-400 font-mono">12 فعالية</strong>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">الأيام السياحية</span>
                  <strong className="text-lg text-amber-400 font-mono">18 يوماً</strong>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block">إجمالي الرحلات</span>
                  <strong className="text-lg text-emerald-400 font-mono">8 رحلات</strong>
                </div>
              </div>

              {/* City Digital Stamps Section */}
              <div>
                <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>الأختام الرقمية المكتسبة للقرى والمدن</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {demoCityStamps.map(stamp => (
                    <div
                      key={stamp.id}
                      className={`p-3 rounded-2xl border text-center relative overflow-hidden transition-all ${
                        stamp.unlocked
                          ? 'bg-slate-950 border-emerald-500/40 text-white shadow-lg'
                          : 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60'
                      }`}
                    >
                      <div className="text-3xl mb-1">{stamp.stampBadgeIcon}</div>
                      <h5 className="text-xs font-bold text-white">{stamp.cityName}</h5>
                      <span className="text-[10px] text-slate-400 block font-mono">{stamp.visitedDate}</span>
                      {stamp.unlocked && (
                        <span className="mt-2 inline-block bg-emerald-950 text-emerald-300 text-[9px] px-2 py-0.5 rounded border border-emerald-500/30">
                          مُختَم
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badges & Achievements Grid */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>الأوسمة والإنجازات السياحية</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {demoBadgeAchievements.map(badge => (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-2xl border flex items-start gap-3 ${
                      badge.unlocked
                        ? 'bg-slate-950 border-amber-500/30 text-slate-200'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-500'
                    }`}
                  >
                    <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 border border-amber-500/30">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-white">{badge.title}</h4>
                        <span className="text-[10px] font-bold text-emerald-400 font-mono">+{badge.pointsReward} نقطة</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{badge.description}</p>
                      {badge.unlocked ? (
                        <span className="text-[10px] text-emerald-400 font-bold block">مكتمل في {badge.earnedDate}</span>
                      ) : (
                        <span className="text-[10px] text-slate-500 block">قيد الاستكشاف</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: REWARDS SYSTEM & REDEEM REWARDS */}
        {activeTab === 'rewards' && (
          <div className="space-y-6">
            
            {/* Rewards Points Header & How to Earn */}
            <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 border border-amber-500/40 rounded-3xl p-6 shadow-2xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-400 font-bold block mb-1">رصيد النقاط التفاعلي</span>
                <h3 className="text-2xl font-black text-white">{walletBalance.rewardsPoints.toLocaleString()} نقطة</h3>
                <p className="text-xs text-slate-400 mt-1">استبدل النقاط بقسائم خصم وحجوزات مجانية.</p>
              </div>

              <div className="flex items-center gap-2 text-xs bg-slate-950 p-3 rounded-2xl border border-slate-800 text-slate-300">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>طرق كسب النقاط: حجز فندق (+300) | حضور فعالية (+200) | زيارة معلم (+100)</span>
              </div>
            </div>

            {/* Redeem Success Toast */}
            {redeemSuccessMsg && (
              <div className="bg-emerald-950 border border-emerald-500 p-4 rounded-2xl text-xs text-emerald-200 font-bold">
                {redeemSuccessMsg}
              </div>
            )}

            {/* Redeemable Rewards Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rewardsList.map(reward => (
                <div key={reward.id} className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-amber-950 border border-amber-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {reward.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-400">{reward.pointsCost} نقطة</span>
                    </div>

                    <h4 className="text-base font-bold text-white">{reward.title}</h4>
                    <p className="text-xs text-slate-400">{reward.description}</p>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-300 font-bold">{reward.provider}</span>

                    <button
                      onClick={() => handleRedeemReward(reward)}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs shadow-lg shadow-amber-950/50"
                    >
                      استبدال الآن
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Redeemed Vouchers Archive */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h4 className="text-sm font-bold text-white mb-3">القسائم والأكواد المكتسبة الخاصة بك</h4>
              <div className="space-y-2">
                {redeemedVouchers.map((v, idx) => (
                  <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-200 block">{v.rewardTitle}</span>
                      <span className="text-[10px] text-slate-500 font-mono">تاريخ الاستبدال: {v.date}</span>
                    </div>
                    <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-mono font-bold px-3 py-1 rounded-lg">
                      {v.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: FAVORITES */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <span>العناصر المفضلة المحفوظة</span>
                  </h3>
                  <p className="text-xs text-slate-400">إدارة وتنظيم الفنادق والمطاعم والفعاليات المحفوظة لرحلتك</p>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={favoritesSearch}
                    onChange={e => setFavoritesSearch(e.target.value)}
                    placeholder="بحث في المفضلة..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-9 pl-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {favoritesItems.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-xs">لا توجد عناصر محفوظة في المفضلة حالياً.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {favoritesItems
                    .filter(item => item.title.includes(favoritesSearch) || item.city.includes(favoritesSearch))
                    .map(item => (
                      <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-xl" />
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-emerald-400 font-bold">{item.category}</span>
                            <span className="text-amber-300 font-bold">{item.city}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        </div>

                        <button
                          onClick={() => handleRemoveFavorite(item.id)}
                          className="w-full bg-red-950/60 hover:bg-red-900 border border-red-500/30 text-red-300 text-xs py-1.5 rounded-xl flex items-center justify-center gap-1.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>إزالة من المفضلة</span>
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 6: NOTIFICATIONS CENTER */}
        {activeTab === 'notifications' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <span>مركز الإشعارات والتنبيهات الذكية</span>
              </h3>

              <button
                onClick={() => setNotificationsList(prev => prev.map(n => ({ ...n, read: true })))}
                className="text-xs text-emerald-400 hover:underline"
              >
                تحديد الكل كـ مقروء
              </button>
            </div>

            <div className="space-y-3">
              {notificationsList.map(notif => (
                <div
                  key={notif.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    notif.read ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-950 border-emerald-500/40 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold text-white">{notif.title}</h4>
                    <span className="text-[10px] text-slate-500 font-mono">{notif.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-300">{notif.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ACTIVITY HISTORY */}
        {activeTab === 'history' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <History className="w-5 h-5 text-emerald-400" />
              <span>سجل جميع أنشطة وسلوك المستخدم (Activity Log)</span>
            </h3>

            <div className="space-y-3 border-r-2 border-emerald-500/30 pr-4">
              <div className="relative text-xs space-y-1">
                <span className="text-amber-400 font-bold block">حجز مؤكد — منتجع هابيتاس العلا</span>
                <p className="text-slate-400">تم التأكيد والدفع التجريبي بقيمة 2400 ريال عبر Apple Pay.</p>
                <span className="text-[10px] text-slate-500 font-mono">2026-07-20 14:30</span>
              </div>

              <div className="relative text-xs space-y-1 pt-3 border-t border-slate-800">
                <span className="text-emerald-400 font-bold block">كسب أختام — جواز السياحة</span>
                <p className="text-slate-400">تم تسجيل زيارة حي الطريف بالدرعية والحصول على ختم المدينة.</p>
                <span className="text-[10px] text-slate-500 font-mono">2026-07-18 18:15</span>
              </div>

              <div className="relative text-xs space-y-1 pt-3 border-t border-slate-800">
                <span className="text-amber-400 font-bold block">طاولة مطعم — مطعم سهيل النبيل النجدي</span>
                <p className="text-slate-400">تم الدفع وحجز طاولة لـ 4 أشخاص.</p>
                <span className="text-[10px] text-slate-500 font-mono">2026-07-15 21:00</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: SUPPORT CENTER & FAQS */}
        {activeTab === 'support' && (
          <div className="space-y-6">
            
            {/* Create Ticket Form */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <LifeBuoy className="w-5 h-5 text-amber-400" />
                <span>تقديم بلاغ / طلب مساعدة الدعم الفني</span>
              </h3>

              {ticketCreatedSuccess && (
                <div className="bg-emerald-950 border border-emerald-500 p-3 rounded-xl text-xs text-emerald-200 mb-4 font-bold">
                  تم تقديم البلاغ بنجاح وتوليد رقم التذكرة الموحد!
                </div>
              )}

              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">موضوع الاستفسار:</label>
                    <input
                      type="text"
                      required
                      value={newTicketSubject}
                      onChange={e => setNewTicketSubject(e.target.value)}
                      placeholder="أدخل موضوع البلاغ..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">الفئة:</label>
                    <select
                      value={newTicketCategory}
                      onChange={e => setNewTicketCategory(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="استفسار عن حجز">استفسار عن حجز</option>
                      <option value="مشكلة في الدفع">مشكلة في الدفع</option>
                      <option value="اقتراح تطوير">اقتراح تطوير</option>
                      <option value="دعم المحفظة">دعم المحفظة</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-950/50"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال البلاغ للدعم (Demo)</span>
                </button>
              </form>
            </div>

            {/* Active Tickets Tracker */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h4 className="text-sm font-bold text-white mb-3">متابعة بلاغاتك الحالية (Tickets Tracker)</h4>
              <div className="space-y-2">
                {supportTickets.map(ticket => (
                  <div key={ticket.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-200 block">{ticket.subject}</span>
                      <span className="text-[10px] text-slate-400">{ticket.lastResponse}</span>
                    </div>
                    <span className="bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded text-[10px] font-bold">
                      {ticket.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h4 className="text-sm font-bold text-white mb-3">الأسئلة الشائعة (FAQs)</h4>
              <div className="space-y-2">
                {demoFAQsList.map(faq => (
                  <div key={faq.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                    <h5 className="text-xs font-bold text-amber-300">{faq.question}</h5>
                    <p className="text-xs text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 9: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-emerald-400" />
              <span>تفضيلات الحساب وإعدادات النظام</span>
            </h3>

            <div className="space-y-4 text-xs">
              
              <div className="flex items-center justify-between bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
                <div>
                  <span className="font-bold text-slate-200 block">لغة التطبيق</span>
                  <span className="text-[10px] text-slate-400">تغيير واجهة التطبيق بين العربية والإنجليزية</span>
                </div>
                <button
                  onClick={() => setSelectedLanguage(prev => (prev === 'ar' ? 'en' : 'ar'))}
                  className="bg-emerald-950 border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-xl font-bold"
                >
                  {selectedLanguage === 'ar' ? 'العربية (AR)' : 'English (EN)'}
                </button>
              </div>

              <div className="flex items-center justify-between bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
                <div>
                  <span className="font-bold text-slate-200 block">تفعيل الإشعارات الفورية</span>
                  <span className="text-[10px] text-slate-400">تلقي تنبيهات تأكيد الحجز والعروض الفورية</span>
                </div>
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={e => setNotificationsEnabled(e.target.checked)}
                  className="w-5 h-5 accent-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
                <div>
                  <span className="font-bold text-slate-200 block">الأمان والمصادقة البيومترية</span>
                  <span className="text-[10px] text-slate-400">تأكيد عمليات المحفظة عبر بصمة الوجه FaceID</span>
                </div>
                <input
                  type="checkbox"
                  checked={biometricsEnabled}
                  onChange={e => setBiometricsEnabled(e.target.checked)}
                  className="w-5 h-5 accent-emerald-500"
                />
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between gap-3">
                <button
                  onClick={() => alert('تم تسجيل الخروج محاكاةً (Demo Logout)!')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5"
                >
                  <LogOut className="w-4 h-4" />
                  <span>تسجيل الخروج (Demo)</span>
                </button>

                <button
                  onClick={() => alert('إجراء تجريبي: تم إلغاء طلب حذف الحساب.')}
                  className="bg-red-950 hover:bg-red-900 border border-red-500/30 text-red-300 font-bold px-4 py-2 rounded-xl text-xs"
                >
                  حذف الحساب (Demo)
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* TOP UP WALLET MODAL */}
      <AnimatePresence>
        {showTopUpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-slate-100"
            >
              <button
                onClick={() => setShowTopUpModal(false)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-base font-bold text-white mb-2">شحن رصيد المحفظة الرقمية (Demo)</h3>
              <p className="text-xs text-slate-400 mb-4">حدد المبلغ المراد إضافته محاكاةً لرصيد المحفظة التجريبي:</p>

              <form onSubmit={handleExecuteTopUp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">المبلغ (بالريال السعودي):</label>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {[200, 500, 1000].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setTopUpAmount(amt)}
                        className={`p-2 rounded-xl text-xs font-bold border ${
                          topUpAmount === amt ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-300'
                        }`}
                      >
                        +{amt} ريال
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={topUpAmount}
                    onChange={e => setTopUpAmount(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>إيداع الرصيد التجريبي</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
