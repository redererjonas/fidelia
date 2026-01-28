import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import PortfolioOverview from './components/PortfolioOverview';
import PerformanceChart from './components/PerformanceChart';
import CallUsModal from './components/CallUsModal';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCallModal, setShowCallModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  // Sicherheitsüberprüfung für investments
  const investments = user.investments || [];
  // Nur aktive Investitionen mit Betrag > 0 für Berechnungen
  const activeInvestments = investments.filter(inv => inv.amount > 0);
  const totalInvested = activeInvestments.reduce((sum, inv) => sum + inv.amount, 0);

  // Erwarteter Jahresgewinn basierend auf Zinssatz berechnen
  const expectedYearlyProfit = activeInvestments.reduce((sum, inv) => {
    return sum + (inv.amount * inv.interestRate / 100);
  }, 0);

  // Bonus-Summe berechnen
  const totalBonus = activeInvestments.reduce((sum, inv) => {
    return sum + (inv.bonus || 0);
  }, 0);

  // Gesamtwert = Investiert + erwarteter Gewinn + Bonus
  const totalValue = totalInvested + expectedYearlyProfit + totalBonus;
  const totalProfit = expectedYearlyProfit + totalBonus;

  // Durchschnittliche Rendite (gewichtet nach Betrag)
  const averageReturn = totalInvested > 0
    ? activeInvestments.reduce((sum, inv) => sum + (inv.interestRate * inv.amount / totalInvested), 0)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-primary via-primary-dark to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-40 -mb-40"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                      <i className="ri-hand-heart-line text-3xl"></i>
                    </div>
                    <div>
                      <p className="text-white/90 text-sm font-medium">Willkommen zurück,</p>
                      <h1 className="text-3xl md:text-4xl font-heading font-bold">
                        {user.firstName} {user.lastName}
                        {user.spouse && (
                          <span className="text-white/90"> & {user.spouse.firstName} {user.spouse.lastName}</span>
                        )}
                      </h1>
                    </div>
                  </div>
                  <p className="text-white/90 text-base md:text-lg max-w-2xl">
                    Ihr Portfolio entwickelt sich hervorragend. Hier ist Ihre aktuelle Übersicht.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowCallModal(true)}
                    className="bg-accent-gold text-primary px-6 py-3.5 rounded-xl font-semibold hover:bg-accent-gold-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <i className="ri-add-circle-line text-xl"></i>
                    Neue Investition
                  </button>
                  <button
                    onClick={() => setShowCallModal(true)}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/30 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <i className="ri-customer-service-2-line text-xl"></i>
                    Beratung
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <i className="ri-wallet-3-line text-2xl text-white"></i>
              </div>
              <div className="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full text-xs font-bold">
                Gesamt
              </div>
            </div>
            <p className="text-neutral-600 text-sm font-medium mb-2">Erwarteter Gesamtwert</p>
            <p className="text-3xl font-bold text-primary mb-1">
              {totalValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
            </p>
            <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <i className="ri-arrow-up-line"></i>
              <span>+{averageReturn.toFixed(2)}% p.a.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-money-euro-circle-line text-2xl text-white"></i>
              </div>
              <div className="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full text-xs font-bold">
                Investiert
              </div>
            </div>
            <p className="text-neutral-600 text-sm font-medium mb-2">Investiertes Kapital</p>
            <p className="text-3xl font-bold text-primary mb-1">
              {totalInvested.toLocaleString('de-DE')} €
            </p>
            <div className="flex items-center gap-1 text-neutral-500 text-sm font-semibold">
              <i className="ri-funds-line"></i>
              <span>{activeInvestments.length} Position{activeInvestments.length !== 1 ? 'en' : ''}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-line-chart-line text-2xl text-white"></i>
              </div>
              <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold">
                Gewinn
              </div>
            </div>
            <p className="text-neutral-600 text-sm font-medium mb-2">Erwarteter Gewinn</p>
            <p className="text-3xl font-bold text-green-600 mb-1">
              +{totalProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
            </p>
            {totalBonus > 0 ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-neutral-600 bg-neutral-50 rounded-lg px-2 py-1">
                  <span className="flex items-center gap-1">
                    <i className="ri-percent-line text-green-600"></i>
                    Zinsen:
                  </span>
                  <span className="font-semibold text-green-600">
                    +{expectedYearlyProfit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-amber-700 bg-amber-50 rounded-lg px-2 py-1 border border-amber-200">
                  <span className="flex items-center gap-1">
                    <i className="ri-gift-line"></i>
                    Bonus:
                  </span>
                  <span className="font-bold">
                    +{totalBonus.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                <i className="ri-calendar-check-line"></i>
                <span>Nach 12 Monaten</span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center shadow-lg shadow-lime-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-percent-line text-2xl text-white"></i>
              </div>
              <div className="bg-lime-50 text-lime-700 px-3 py-1.5 rounded-full text-xs font-bold">
                Rendite
              </div>
            </div>
            <p className="text-neutral-600 text-sm font-medium mb-2">Durchschn. Zinssatz</p>
            <p className="text-3xl font-bold text-primary mb-1">
              {averageReturn.toFixed(2)}% p.a.
            </p>
            <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <i className="ri-shield-check-line"></i>
              <span>Garantiert</span>
            </div>
          </motion.div>
        </div>

        {/* Wichtige Benachrichtigung - Nur für user-003 (Nicolas & Evagelia Madarlis) */}
        {user.id === 'user-003' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl border-2 border-red-300 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-alert-line text-3xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Wichtige Benachrichtigung zu Ihrem Konto</h3>
                    <p className="text-white/90 text-sm">Bitte beachten Sie folgende Information</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="bg-white/80 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-2xl text-orange-600"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-orange-800 mb-2 text-lg">Status Ihrer Kapitalanlage</h4>
                        <p className="text-orange-700 text-sm leading-relaxed mb-3">
                          Ihr Konto wurde auf Ihren ausdrücklichen Wunsch hin eingerichtet. Wir möchten Sie jedoch darauf hinweisen, dass die vereinbarte Kapitaleinlage in Höhe von <span className="font-bold">300.000 €</span> bislang noch nicht auf unserem Konto eingegangen ist.
                        </p>
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="ri-information-line text-orange-600"></i>
                            <span className="text-sm font-semibold text-orange-800">Aktueller Status:</span>
                          </div>
                          <p className="text-sm text-orange-700">
                            Die Kapitalüberweisung steht derzeit noch aus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50/80 rounded-xl p-6 border-2 border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-calendar-close-line text-2xl text-red-600"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-red-800 mb-2 text-lg">Wichtiger Hinweis zur Kontolaufzeit</h4>
                        <p className="text-red-700 text-sm leading-relaxed mb-3">
                          Gemäß unseren Geschäftsbedingungen und Ihrer Kontovereinbarung muss die Kapitaleinlage innerhalb von <span className="font-bold">48 Stunden nach Kontoerstellung</span> erfolgen. Sollte die Überweisung nicht innerhalb dieser Frist bei uns eingehen, sind wir leider gezwungen, Ihr Konto aus administrativen Gründen zu schließen und alle damit verbundenen Daten zu löschen.
                        </p>
                        <div className="bg-white rounded-lg p-4 border border-red-300">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-red-800">Verbleibende Zeit:</span>
                            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md">
                              <i className="ri-time-line"></i>
                              <span className="font-bold">48 Stunden</span>
                            </div>
                          </div>
                          <p className="text-xs text-red-600 italic">
                            Nach Ablauf dieser Frist wird das Konto automatisch deaktiviert und gelöscht.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-800 mb-2">Wir sind für Sie da</h4>
                        <p className="text-blue-700 text-sm mb-4">
                          Bei Fragen zur Überweisung oder wenn Sie Unterstützung benötigen, stehen wir Ihnen gerne zur Verfügung.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href="tel:+4940334668098"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                          >
                            <i className="ri-phone-line text-xl"></i>
                            +49 (0) 40 334 668098
                          </a>
                          <a
                            href="mailto:info@fidelia-kapital.com"
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border-2 border-blue-200 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
                          >
                            <i className="ri-mail-line text-xl"></i>
                            E-Mail senden
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <PerformanceChart investments={investments} />
        </motion.div>

        {/* Portfolio Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <PortfolioOverview investments={investments} />
        </motion.div>
      </div>

      {/* Call Us Modal */}
      <CallUsModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
    </div>
  );
}