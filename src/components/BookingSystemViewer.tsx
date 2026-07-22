import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bed,
  Utensils,
  Calendar,
  Compass,
  Car,
  Train,
  UserCheck,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Search,
  Filter,
  CheckCircle2,
  Heart,
  Share2,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
  Baby,
  Video,
  Award,
  Phone,
  Mail,
  ChevronRight,
  X,
  CreditCard,
  Building2,
  Coffee,
  Ticket,
  Send,
  MessageSquarePlus,
  Flame,
  Globe,
  Plus
} from 'lucide-react';
import {
  demoHotelsList,
  demoRestaurantsList,
  demoEventsList,
  demoActivitiesList,
  demoCarRentalsList,
  demoTransportationList,
  demoTourGuidesList,
  demoReviewsList,
  HotelBookingItem,
  RestaurantBookingItem,
  EventBookingItem,
  ActivityBookingItem,
  CarRentalItem,
  TransportationItem,
  TourGuideItem,
  ReviewItem
} from '../data/bookingServicesData';

export const BookingSystemViewer: React.FC = () => {
  // Category Navigation Tab
  const [activeTab, setActiveTab] = useState<
    'hotels' | 'restaurants' | 'events' | 'activities' | 'cars' | 'trans' | 'guides' | 'reviews'
  >('hotels');

  // Filter States
  const [selectedCity, setSelectedCity] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Favorites & Added to Trip
  const [favoritesList, setFavoritesList] = useState<string[]>(['hotel-1', 'rest-1']);
  const [tripBookings, setTripBookings] = useState<string[]>([]);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingItemData, setBookingItemData] = useState<{
    id: string;
    title: string;
    categoryLabel: string;
    price: number;
    image: string;
    city: string;
  } | null>(null);

  // Booking Form Inputs
  const [guestName, setGuestName] = useState<string>('عبدالله الماجد');
  const [guestPhone, setGuestPhone] = useState<string>('+966 50 123 4567');
  const [bookingDate, setBookingDate] = useState<string>('2026-11-15');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'mada' | 'stc'>('apple');

  // Booking Confirmation Result State
  const [confirmedTicket, setConfirmedTicket] = useState<{
    referenceCode: string;
    title: string;
    date: string;
    priceTotal: number;
    qrCodeData: string;
  } | null>(null);

  // Review Input Form
  const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
  const [newReviewText, setNewReviewText] = useState<string>('');
  const [newReviewRating, setNewReviewRating] = useState<number>(5);
  const [reviewsState, setReviewsState] = useState<ReviewItem[]>(demoReviewsList);

  const toggleFavorite = (id: string) => {
    setFavoritesList(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const openBookingModal = (id: string, title: string, categoryLabel: string, price: number, image: string, city: string) => {
    setBookingItemData({ id, title, categoryLabel, price, image, city });
    setConfirmedTicket(null);
    setBookingModalOpen(true);
  };

  const handleProcessBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingItemData) return;

    const refCode = `SAUDI-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const total = bookingItemData.price * guestsCount;

    setConfirmedTicket({
      referenceCode: refCode,
      title: bookingItemData.title,
      date: bookingDate,
      priceTotal: total,
      qrCodeData: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${refCode}`
    });

    if (!tripBookings.includes(bookingItemData.id)) {
      setTripBookings(prev => [...prev, bookingItemData.id]);
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      userName: 'زائر سعودي إكسبلورر',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      targetName: 'خدمة سياحية وحجز موحد',
      targetCategory: 'تقييم تجربة',
      rating: newReviewRating,
      date: 'الآن',
      comment: newReviewText,
      verifiedBooking: true
    };

    setReviewsState(prev => [newRev, ...prev]);
    setNewReviewText('');
    setReviewModalOpen(false);
  };

  return (
    <section id="booking-services-section" className="py-12 bg-slate-950 text-slate-100 border-t border-emerald-900/40 relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3 shadow-lg shadow-emerald-950/50"
          >
            <Ticket className="w-4 h-4 text-amber-400" />
            <span>المرحلة 9 — الخدمات السياحية ونظام الحجوزات الموحد</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            مركز الحجوزات السياحية والتجارب الذكية
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            منصة موحدة لحجز الفنادق، المطاعم، الفعاليات، الأنشطة، تأجير السيارات، وسائل النقل، والمرشدين السياحيين المعتمدين في المملكة.
          </p>

          {/* Service Tabs Bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
            
            <button
              onClick={() => setActiveTab('hotels')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'hotels'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Bed className="w-4 h-4 text-amber-400" />
              <span>الفنادق والمنتجعات (100+)</span>
            </button>

            <button
              onClick={() => setActiveTab('restaurants')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'restaurants'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Utensils className="w-4 h-4 text-emerald-400" />
              <span>المطاعم والمقاهي (300+)</span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'events'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>الفعاليات الحية</span>
            </button>

            <button
              onClick={() => setActiveTab('activities')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'activities'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>الأنشطة والمغامرات</span>
            </button>

            <button
              onClick={() => setActiveTab('cars')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'cars'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Car className="w-4 h-4 text-amber-400" />
              <span>تأجير السيارات</span>
            </button>

            <button
              onClick={() => setActiveTab('trans')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'trans'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Train className="w-4 h-4 text-emerald-400" />
              <span>وسائل النقل والقطارات</span>
            </button>

            <button
              onClick={() => setActiveTab('guides')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'guides'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <UserCheck className="w-4 h-4 text-amber-300" />
              <span>المرشدين السياحيين</span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all ${
                activeTab === 'reviews'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-900/40 border border-amber-300'
                  : 'bg-slate-900/80 text-amber-400 border border-amber-500/30 hover:bg-slate-800'
              }`}
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>تقييمات الزوار</span>
            </button>
          </div>
        </div>

        {/* Global Filter Toolbar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-8 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Search Box */}
            <div className="relative">
              <Search className="absolute right-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث عن فندق، مطعم، فعالية، سيارة..."
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
                <option value="الكل">جميع المدن (الرياض، جدة، العلا، أبها، الدرعية)</option>
                <option value="الرياض">الرياض</option>
                <option value="جدة">جدة</option>
                <option value="العلا">العلا</option>
                <option value="أبها">أبها</option>
                <option value="الدرعية">الدرعية</option>
              </select>
            </div>

            {/* Added to Trip Status Badge */}
            <div className="flex items-center justify-end gap-3 text-xs text-slate-400">
              <span className="bg-slate-950 border border-slate-800 px-3 py-2 rounded-xl text-amber-300 font-mono font-bold flex items-center gap-1.5">
                <Ticket className="w-4 h-4 text-emerald-400" />
                الحجوزات المؤكدة في رحلتي: {tripBookings.length}
              </span>
            </div>
          </div>
        </div>

        {/* TAB 1: HOTELS & RESORTS */}
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoHotelsList
              .filter(h => selectedCity === 'الكل' || h.city === selectedCity)
              .map(hotel => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-slate-700 transition-all"
                >
                  <div>
                    {/* Hotel Header Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/30 text-amber-300 text-xs font-bold">
                        {hotel.category}
                      </div>

                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black text-xs">
                        <Star className="w-3.5 h-3.5 fill-slate-950" />
                        <span>{hotel.rating}</span>
                        <span className="text-[10px] font-normal text-slate-800">({hotel.reviewsCount})</span>
                      </div>

                      <div className="absolute bottom-3 right-3 text-white">
                        <div className="flex items-center gap-1 text-xs text-slate-300 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{hotel.location}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-snug">{hotel.name}</h3>
                      </div>
                    </div>

                    {/* Hotel Body */}
                    <div className="p-5 space-y-3">
                      <p className="text-xs text-slate-300 leading-relaxed">{hotel.description}</p>

                      <div className="flex flex-wrap gap-1.5 py-2">
                        {hotel.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-950 border border-slate-800 text-slate-300 text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 text-xs space-y-1">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-slate-400">سياسة الإلغاء:</span>
                          <span className="text-emerald-400 font-semibold">{hotel.cancellationPolicy}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-slate-400">ساعات الدخول/الخروج:</span>
                          <span className="text-slate-200 font-mono">{hotel.checkInTime} — {hotel.checkOutTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Footer & Action Buttons */}
                  <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-2">
                    <div>
                      <span className="text-[11px] text-slate-400 block">سعر الليلة يبدأ من:</span>
                      <span className="text-xl font-black text-amber-400">{hotel.pricePerNight} ريال</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleFavorite(hotel.id)}
                        className={`p-2.5 rounded-xl border transition-all ${
                          favoritesList.includes(hotel.id)
                            ? 'bg-red-950 border-red-500 text-red-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favoritesList.includes(hotel.id) ? 'fill-red-400' : ''}`} />
                      </button>

                      <button
                        onClick={() =>
                          openBookingModal(hotel.id, hotel.name, 'حجز فندق/منتجع', hotel.pricePerNight, hotel.image, hotel.city)
                        }
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/50"
                      >
                        <Ticket className="w-4 h-4 text-amber-300" />
                        <span>احجز الآن</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* TAB 2: RESTAURANTS & CAFES */}
        {activeTab === 'restaurants' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoRestaurantsList
              .filter(r => selectedCity === 'الكل' || r.city === selectedCity)
              .map(rest => (
                <motion.div
                  key={rest.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={rest.image}
                        alt={rest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                        {rest.cuisine}
                      </div>

                      <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black text-xs flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-slate-950" />
                        <span>{rest.rating}</span>
                      </div>

                      <div className="absolute bottom-3 right-3 text-white">
                        <h3 className="text-lg font-bold text-white">{rest.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{rest.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-2">
                        <span>ساعات العمل: {rest.openingHours}</span>
                        <span className="text-amber-400 font-bold">{rest.priceRange}</span>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-400 mb-2">أبرز أطباق قائمة الطعام:</h4>
                        <div className="space-y-1.5">
                          {rest.menuHighlights.map((dish, idx) => (
                            <div
                              key={idx}
                              className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-xs flex items-center justify-between"
                            >
                              <div>
                                <span className="font-bold text-slate-200 block">{dish.name}</span>
                                <span className="text-[10px] text-slate-400">{dish.desc}</span>
                              </div>
                              <span className="font-bold text-amber-400 whitespace-nowrap mr-2">{dish.price} ريال</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-2">
                    <span className="text-xs text-slate-400">متوسط الشخص: <strong className="text-amber-300">{rest.averageCostPerPerson} ريال</strong></span>

                    <button
                      onClick={() =>
                        openBookingModal(rest.id, rest.name, 'حجز طاولة مطعم', rest.averageCostPerPerson, rest.image, rest.city)
                      }
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/50"
                    >
                      <Utensils className="w-4 h-4 text-amber-300" />
                      <span>حجز طاولة</span>
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* TAB 3: EVENTS */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoEventsList
              .filter(e => selectedCity === 'الكل' || e.city === selectedCity)
              .map(evt => (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/30 text-amber-300 text-xs font-bold">
                        {evt.category}
                      </div>

                      <div className="absolute bottom-3 right-3 text-white">
                        <h3 className="text-lg font-bold text-white">{evt.title}</h3>
                        <p className="text-xs text-slate-300">{evt.location}</p>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-xs text-slate-300 leading-relaxed">{evt.description}</p>

                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1.5">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-slate-400">التاريخ والوقت:</span>
                          <span className="text-amber-300 font-bold">{evt.startDate} ({evt.time})</span>
                        </div>

                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-slate-400">المقاعد المتبقية:</span>
                          <span className="text-emerald-400 font-mono font-bold">{evt.availableSeats} تذكرة</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-2">
                    <div>
                      <span className="text-[11px] text-slate-400 block">سعر التذكرة:</span>
                      <span className="text-xl font-black text-amber-400">{evt.price} ريال</span>
                    </div>

                    <button
                      onClick={() =>
                        openBookingModal(evt.id, evt.title, 'حجز تذكرة فعالية', evt.price, evt.image, evt.city)
                      }
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-950/50"
                    >
                      <Ticket className="w-4 h-4 text-amber-300" />
                      <span>حجز التذكرة</span>
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* TAB 4: ACTIVITIES */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoActivitiesList.map(act => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative h-44 rounded-xl overflow-hidden">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-slate-950/80 px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-300">
                      {act.type}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white">{act.title}</h3>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800">المدة: {act.durationHours}</span>
                    <span className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800">المجموعة: {act.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-4">
                  <span className="text-lg font-black text-amber-400">{act.pricePerPerson} ريال / للشخص</span>

                  <button
                    onClick={() =>
                      openBookingModal(act.id, act.title, 'حجز نشاط سياحي', act.pricePerPerson, act.image, act.city)
                    }
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs"
                  >
                    حجز النشاط
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 5: CAR RENTAL */}
        {activeTab === 'cars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoCarRentalsList.map(car => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{car.model}</h3>
                    <span className="text-xs bg-slate-950 text-amber-300 px-2.5 py-1 rounded border border-slate-800">
                      {car.companyName}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                    <div>
                      <span className="text-[10px] text-slate-500 block">المقاعد</span>
                      <strong className="text-slate-200">{car.seats} ركاب</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">الناقل</span>
                      <strong className="text-slate-200">{car.transmission}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">الوقود</span>
                      <strong className="text-emerald-400">{car.fuelType}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-4">
                  <span className="text-lg font-black text-amber-400">{car.dailyPrice} ريال / يومياً</span>

                  <button
                    onClick={() =>
                      openBookingModal(car.id, `تأجير سيارة ${car.model}`, 'تأجير سيارات', car.dailyPrice, car.image, 'المملكة')
                    }
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs"
                  >
                    حجز السيارة
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 6: TRANSPORTATION */}
        {activeTab === 'trans' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoTransportationList.map(t => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <img src={t.image} alt={t.mode} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{t.mode}</h3>
                    <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                      {t.serviceStatus}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">{t.route}</p>
                  <p className="text-xs text-slate-400 font-mono">الزمن المتوقع: {t.estimatedTime}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-4">
                  <span className="text-sm font-bold text-amber-400">التكلفة: {t.cost}</span>

                  <button
                    onClick={() =>
                      openBookingModal(t.id, t.mode, 'وسيلة نقل وقاطرة', 75, t.image, 'المملكة')
                    }
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs"
                  >
                    اصدار تذكرة النقل
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 7: TOUR GUIDES */}
        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoTourGuidesList.map(guide => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <img src={guide.image} alt={guide.name} className="w-16 h-16 rounded-full object-cover border-2 border-amber-400" />
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                        {guide.name}
                        {guide.certifiedByMinistry && (
                          <Award className="w-4 h-4 text-emerald-400" title="مرشد مرخص من وزارة السياحة" />
                        )}
                      </h3>
                      <p className="text-xs text-amber-300 font-semibold">{guide.city} — خبرة {guide.experienceYears} سنوات</p>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                        <span>اللغات:</span>
                        <span className="text-slate-200">{guide.languages.join('، ')}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed">
                    {guide.bio}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-4">
                  <span className="text-sm font-bold text-amber-400">{guide.hourlyRate} ريال / ساعة</span>

                  <button
                    onClick={() =>
                      openBookingModal(guide.id, `جولة سياحية مع المرشد ${guide.name}`, 'مرشد سياحي', guide.hourlyRate * 2, guide.image, guide.city)
                    }
                    className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs"
                  >
                    طلب مرشد سياحي
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 8: USER REVIEWS SYSTEM */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <div>
                <h3 className="text-base font-bold text-white">تقييمات وانطباعات زوار المملكة</h3>
                <p className="text-xs text-slate-400">جميع التقييمات موثقة ومقترنة بحجوزات فعلية تجريبية.</p>
              </div>

              <button
                onClick={() => setReviewModalOpen(true)}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>إضافة تقييم جديد</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviewsState.map(rev => (
                <div key={rev.id} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={rev.userAvatar} alt={rev.userName} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-white">{rev.userName}</h4>
                        <span className="text-[10px] text-slate-400">{rev.targetName}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black text-xs">
                      <Star className="w-3 h-3 fill-slate-950" />
                      <span>{rev.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notice Footer Prompt Requirement */}
        <div className="mt-12 bg-amber-950/40 border border-amber-500/30 rounded-2xl p-4 text-center text-xs text-amber-200/90 shadow-xl">
          <p>
            ⚠️ <strong>ملاحظة داخل النموذج الأولّي (MVP):</strong> جميع الحجوزات وعمليات الدفع في هذا النموذج هي محاكاة باستخدام بيانات تجريبية، وسيتم ربطها بالأنظمة الفعلية في مراحل التطوير المستقبلية.
          </p>
        </div>

      </div>

      {/* BOOKING CONFIRMATION MODAL */}
      <AnimatePresence>
        {bookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-slate-100 my-auto"
            >
              <button
                onClick={() => setBookingModalOpen(false)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!confirmedTicket ? (
                /* Booking Form */
                <form onSubmit={handleProcessBooking} className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                    <div className="p-2.5 rounded-xl bg-emerald-600 text-white">
                      <Ticket className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{bookingItemData?.title}</h3>
                      <span className="text-xs text-amber-400">{bookingItemData?.categoryLabel} — {bookingItemData?.city}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">الاسم الكامل:</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">تاريخ الحجز:</label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">عدد الأشخاص/الضيوف:</label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={guestsCount}
                        onChange={e => setGuestsCount(parseInt(e.target.value) || 1)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">طريقة الدفع التجريبية:</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('apple')}
                        className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                          paymentMethod === 'apple'
                            ? 'bg-amber-400 text-slate-950 border-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        Apple Pay
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('mada')}
                        className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                          paymentMethod === 'mada'
                            ? 'bg-amber-400 text-slate-950 border-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        مدى (Mada)
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('stc')}
                        className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                          paymentMethod === 'stc'
                            ? 'bg-amber-400 text-slate-950 border-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        STC Pay
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                    <span className="text-slate-400">الإجمالي المستحق:</span>
                    <strong className="text-lg text-amber-400">
                      {(bookingItemData?.price || 0) * guestsCount} ريال
                    </strong>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-300" />
                    <span>تأكيد الحجز والدفع التجريبي</span>
                  </button>
                </form>
              ) : (
                /* Booking Success Ticket View */
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-lg font-extrabold text-white">تم تأكيد الحجز بنجاح!</h3>
                  <p className="text-xs text-slate-400">
                    رقم مرجع الحجز الرقمي الموحد: <strong className="text-amber-300 font-mono">{confirmedTicket.referenceCode}</strong>
                  </p>

                  <div className="bg-white text-slate-950 p-4 rounded-2xl space-y-3 shadow-inner">
                    <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-2">
                      <span className="font-bold">{confirmedTicket.title}</span>
                      <span className="font-mono text-emerald-700 font-black">{confirmedTicket.priceTotal} ريال</span>
                    </div>

                    <div className="flex items-center justify-center py-2">
                      <img src={confirmedTicket.qrCodeData} alt="QR Ticket" className="w-32 h-32 rounded-lg border" />
                    </div>

                    <p className="text-[11px] text-slate-500">
                      امسح الـ QR Code عند الوصول للمرفق لتأكيد الدخول المباشر.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setBookingModalOpen(false)}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 rounded-xl text-xs"
                    >
                      إغلاق والتصفح
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* NEW REVIEW MODAL */}
      <AnimatePresence>
        {reviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-slate-100"
            >
              <button
                onClick={() => setReviewModalOpen(false)}
                className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleAddReview} className="space-y-4">
                <h3 className="text-base font-bold text-white">إضافة تقييم وانطباع سياحي</h3>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">التقييم:</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setNewReviewRating(num)}
                        className={`p-2 rounded-lg border ${
                          newReviewRating >= num ? 'bg-amber-400 text-slate-950' : 'bg-slate-950 text-slate-500'
                        }`}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">تعليقك وانطباعك:</label>
                  <textarea
                    rows={3}
                    required
                    value={newReviewText}
                    onChange={e => setNewReviewText(e.target.value)}
                    placeholder="اكتب تجربتك وانطباعك..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>نشر التقييم</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
