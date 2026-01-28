import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import CallUsModal from '../components/CallUsModal';
import { motion } from 'framer-motion';

export default function FestgeldPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCallModal, setShowCallModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const investment = user.investments.find(inv => inv.type === 'festgeld');
  if (!investment) {
    return <div>Keine Festgeld-Investition gefunden</div>;
  }

  const startDate = new Date(investment.startDate);
  const endDate = new Date(investment.endDate);
  const today = new Date();
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const remainingDays = Math.max(0, totalDays - elapsedDays);
  const progress = Math.min((elapsedDays / totalDays) * 100, 100);

  // Berechnete Zinsen basierend auf dem Zinssatz
  const expectedYearlyInterest = investment.amount * investment.interestRate / 100;
  const dailyInterest = expectedYearlyInterest / 365;
  const monthlyInterest = expectedYearlyInterest / 12;
  const bonus = investment.bonus || 0;
  const expectedTotalValue = investment.amount + expectedYearlyInterest + bonus;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm text-neutral-600 mb-6"
        >
          <button onClick={() => navigate('/dashboard')} className="hover:text-accent-gold600 transition-colors cursor-pointer">
            Dashboard
          </button>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-accent-gold600 font-semibold">Festgeld</span>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark rounded-3xl p-8 md:p-10 text-white shadow-2xl mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40"></div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="ri-safe-2-line text-4xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                    Festgeld-Anlage
                  </h1>
                  <p className="text-white/90 text-lg">
                    {investment.name}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl mb-2 shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Zinssatz</p>
                  <p className="text-2xl font-bold">{investment.interestRate}% p.a.</p>
                </div>
                <div className={`backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg ${
                  investment.status === 'pending' ? 'bg-orange-500/30' : 'bg-amber-500/30'
                }`}>
                  <p className="text-xs text-white/80 mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <p className="text-sm font-bold">
                      {investment.status === 'pending' ? 'Ausstehend' : 'Aktiv'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Investierter Betrag</p>
                <p className="text-2xl font-bold">{investment.amount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Auszahlung (12M)</p>
                <p className="text-2xl font-bold">{expectedTotalValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Erwarteter Gewinn</p>
                <p className="text-2xl font-bold text-amber-200">+{(expectedYearlyInterest + bonus).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                <p className="text-white/80 text-sm mb-2 font-medium">Verbleibende Tage</p>
                <p className="text-2xl font-bold">{remainingDays} Tage</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Laufzeit & Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary">Laufzeit & Status</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-cyan-50 to-primary/5 rounded-xl p-5 border border-amber-100">
                    <p className="text-sm text-accent-gold700 mb-2 font-medium flex items-center gap-2">
                      <i className="ri-calendar-check-line"></i>
                      Startdatum
                    </p>
                    <p className="text-xl font-bold text-accent-gold700">
                      {startDate.toLocaleDateString('de-DE')}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-5 border border-amber-100">
                    <p className="text-sm text-primary mb-2 font-medium flex items-center gap-2">
                      <i className="ri-calendar-event-line"></i>
                      Enddatum
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {endDate.toLocaleDateString('de-DE')}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-neutral-700">Fortschritt</span>
                    <span className="text-sm font-bold text-accent-gold600">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="h-4 bg-neutral-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary via-primary-dark to-primary-dark rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-neutral-600">
                    <span>{elapsedDays} Tage vergangen</span>
                    <span>{remainingDays} Tage verbleibend</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-5 border border-neutral-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600 mb-1 font-medium">Gesamtlaufzeit</p>
                      <p className="text-2xl font-bold text-primary">{totalDays} Tage</p>
                      <p className="text-sm text-neutral-500 mt-1">≈ 12 Monate</p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                      <i className="ri-calendar-2-line text-3xl text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Zinsdetails */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-percent-line text-2xl text-white"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary">Zinsdetails</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-50 to-primary/5 rounded-xl p-5 border border-amber-100">
                  <p className="text-sm text-accent-gold700 mb-2 font-medium">Täglicher Zins</p>
                  <p className="text-xl font-bold text-accent-gold700">
                    {dailyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-primary/5 rounded-xl p-5 border border-amber-100">
                  <p className="text-sm text-primary mb-2 font-medium">Monatlicher Zins</p>
                  <p className="text-xl font-bold text-primary">
                    {monthlyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 border border-green-200">
                  <p className="text-sm text-green-700 mb-2 font-medium">Gesamtzins (12M)</p>
                  <p className="text-xl font-bold text-green-700">
                    +{expectedYearlyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-6 border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="ri-information-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Auszahlung bei Fälligkeit</h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      Am {endDate.toLocaleDateString('de-DE')} erhalten Sie Ihr Kapital plus Zinsen zurück.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-neutral-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-neutral-600">Kapital:</span>
                        <span className="font-bold text-neutral-800">{investment.amount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-neutral-600">Zinsen ({investment.interestRate}% p.a.):</span>
                        <span className="font-bold text-green-600">+{expectedYearlyInterest.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
                      </div>
                      {bonus > 0 && (
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-neutral-600">Bonus:</span>
                          <span className="font-bold text-amber-600">+{bonus.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
                        </div>
                      )}
                      <div className="border-t border-neutral-200 pt-2 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-neutral-700">Auszahlung gesamt:</span>
                          <span className="text-xl font-bold text-primary">{expectedTotalValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Auszahlungsübersicht - Ihre Rendite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary via-primary-dark to-slate-900 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/20 rounded-full -mr-40 -mt-40"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                    <i className="ri-gift-line text-3xl"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold">Ihre garantierte Auszahlung</h2>
                    <p className="text-white/80">Nach 12 Monaten Laufzeit</p>
                  </div>
                </div>

                {/* Countdown Kalender */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <i className="ri-calendar-check-line text-2xl text-amber-400"></i>
                      <span className="font-semibold text-lg">Auszahlungstermin</span>
                    </div>
                    <div className="bg-amber-500 text-primary px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                      {endDate.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(12)].map((_, i) => {
                      const monthDate = new Date(startDate);
                      monthDate.setMonth(monthDate.getMonth() + i);
                      const isPast = monthDate < today;
                      const isCurrent = monthDate.getMonth() === today.getMonth() && monthDate.getFullYear() === today.getFullYear();
                      const isLast = i === 11;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          className={`relative p-3 rounded-xl text-center transition-all ${
                            isLast
                              ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-primary shadow-lg shadow-amber-500/50 ring-2 ring-amber-300'
                              : isPast
                                ? 'bg-green-500/30 border border-green-400/50'
                                : isCurrent
                                  ? 'bg-white/30 border-2 border-white animate-pulse'
                                  : 'bg-white/10 border border-white/20'
                          }`}
                        >
                          {isPast && !isLast && (
                            <i className="ri-check-line absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full text-white text-xs flex items-center justify-center"></i>
                          )}
                          {isLast && (
                            <i className="ri-gift-2-line absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full text-amber-400 text-sm flex items-center justify-center shadow-lg"></i>
                          )}
                          <p className={`text-xs mb-1 ${isLast ? 'text-primary/70' : 'text-white/70'}`}>
                            {monthDate.toLocaleDateString('de-DE', { month: 'short' })}
                          </p>
                          <p className={`font-bold ${isLast ? 'text-primary' : ''}`}>
                            {i + 1}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Auszahlungsbetrag */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-primary shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <i className="ri-bank-line text-2xl text-primary"></i>
                      </div>
                      <div>
                        <p className="text-primary/70 text-sm font-medium">Gesamtauszahlung am {endDate.toLocaleDateString('de-DE')}</p>
                        <p className="text-3xl font-bold">{(investment.amount + (investment.amount * investment.interestRate / 100) + bonus).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                      </div>
                    </div>
                  </div>

                  <div className={`grid ${bonus > 0 ? 'grid-cols-3' : 'grid-cols-2'} gap-4`}>
                    <div className="bg-primary/10 rounded-xl p-4">
                      <p className="text-primary/70 text-xs mb-1">Ihr Kapital</p>
                      <p className="text-xl font-bold">{investment.amount.toLocaleString('de-DE')} €</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4">
                      <p className="text-primary/70 text-xs mb-1">+ Zinsen ({investment.interestRate}%)</p>
                      <p className="text-xl font-bold text-green-700">+{(investment.amount * investment.interestRate / 100).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                    </div>
                    {bonus > 0 && (
                      <div className="bg-primary/10 rounded-xl p-4">
                        <p className="text-primary/70 text-xs mb-1">+ Bonus</p>
                        <p className="text-xl font-bold text-amber-600">+{bonus.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Garantie Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 flex items-center justify-center gap-4"
                >
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <i className="ri-shield-check-line text-green-400"></i>
                    <span className="text-sm font-medium">100% Kapitalgarantie</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <i className="ri-lock-line text-amber-400"></i>
                    <span className="text-sm font-medium">Garantierter Zinssatz</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Schnellübersicht */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-6"
            >
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <i className="ri-flashlight-line text-accent-gold600"></i>
                Schnellübersicht
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <span className="text-sm text-neutral-600">Investment-ID</span>
                  <span className="font-bold text-neutral-800">{investment.id}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <span className="text-sm text-neutral-600">Typ</span>
                  <span className="font-bold text-accent-gold600">Festgeld</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <span className="text-sm text-neutral-600">Laufzeit</span>
                  <span className="font-bold text-neutral-800">12 Monate</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-neutral-600">Rendite</span>
                  <span className="font-bold text-green-600">+{investment.interestRate}%</span>
                </div>
              </div>
            </motion.div>

            {/* Aktionen */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-amber-50 to-primary/5 rounded-2xl border border-amber-100 p-6"
            >
              <h3 className="text-lg font-bold text-accent-gold700 mb-4 flex items-center gap-2">
                <i className="ri-settings-3-line"></i>
                Aktionen
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark text-accent-gold700 hover:text-white py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap border border-amber-200"
                >
                  <i className="ri-customer-service-2-line text-xl"></i>
                  Beratung
                </button>
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full bg-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark text-accent-gold700 hover:text-white py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap border border-amber-200"
                >
                  <i className="ri-add-circle-line text-xl"></i>
                  Neue Investition
                </button>
              </div>
            </motion.div>

            {/* Kontoinhaberinformationen */}
            {user.spouse && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-6"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <i className="ri-group-line"></i>
                  Gemeinschaftskonto
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/60 rounded-xl p-4 border border-blue-200">
                    <p className="text-xs text-blue-700 mb-2 font-medium">Kontoinhaber</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-user-line text-blue-600"></i>
                        <span className="text-sm font-semibold text-blue-900">
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-user-heart-line text-blue-600"></i>
                        <span className="text-sm font-semibold text-blue-900">
                          {user.spouse.firstName} {user.spouse.lastName}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100/50 rounded-lg p-3">
                    <p className="text-xs text-blue-800">
                      Diese Festgeldanlage wird gemeinsam geführt. Beide Kontoinhaber haben die gleichen Rechte bezüglich dieser Investition.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Wichtige Hinweise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6"
            >
              <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
                <i className="ri-information-line"></i>
                Wichtige Hinweise
              </h3>
              <ul className="space-y-3 text-sm text-amber-900">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-600 mt-0.5 flex-shrink-0"></i>
                  <span>Festgeld ist bis zum Laufzeitende gebunden</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-600 mt-0.5 flex-shrink-0"></i>
                  <span>Zinsen werden am Ende der Laufzeit ausgezahlt</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-amber-600 mt-0.5 flex-shrink-0"></i>
                  <span>Einlagensicherung bis 100.000 € pro Kunde</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call Us Modal */}
      <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
    </div>
  );
}