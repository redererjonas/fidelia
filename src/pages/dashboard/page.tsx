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

  // Gesamtwert = Investiert + erwarteter Gewinn
  const totalValue = totalInvested + expectedYearlyProfit;
  const totalProfit = expectedYearlyProfit;

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
            <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <i className="ri-calendar-check-line"></i>
              <span>Nach 12 Monaten</span>
            </div>
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