import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MarketHero = () => {
  const [marketStats, setMarketStats] = useState({
    dax: { value: 17234.56, change: 0.72 },
    sp500: { value: 4912.34, change: 0.45 },
    nasdaq: { value: 15678.90, change: -0.29 },
    bitcoin: { value: 67234.56, change: 1.87 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketStats(prev => ({
        dax: { 
          value: prev.dax.value + (Math.random() - 0.5) * 50, 
          change: prev.dax.change + (Math.random() - 0.5) * 0.1 
        },
        sp500: { 
          value: prev.sp500.value + (Math.random() - 0.5) * 20, 
          change: prev.sp500.change + (Math.random() - 0.5) * 0.1 
        },
        nasdaq: { 
          value: prev.nasdaq.value + (Math.random() - 0.5) * 30, 
          change: prev.nasdaq.change + (Math.random() - 0.5) * 0.1 
        },
        bitcoin: { 
          value: prev.bitcoin.value + (Math.random() - 0.5) * 200, 
          change: prev.bitcoin.change + (Math.random() - 0.5) * 0.2 
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      name: 'DAX 40', 
      value: marketStats.dax.value.toFixed(2), 
      change: marketStats.dax.change.toFixed(2),
      icon: 'ri-stock-line',
      color: 'from-emerald-500 to-teal-600'
    },
    { 
      name: 'S&P 500', 
      value: marketStats.sp500.value.toFixed(2), 
      change: marketStats.sp500.change.toFixed(2),
      icon: 'ri-line-chart-line',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'NASDAQ', 
      value: marketStats.nasdaq.value.toFixed(2), 
      change: marketStats.nasdaq.change.toFixed(2),
      icon: 'ri-bar-chart-box-line',
      color: 'from-violet-500 to-purple-600'
    },
    { 
      name: 'Bitcoin', 
      value: `$${marketStats.bitcoin.value.toFixed(2)}`, 
      change: marketStats.bitcoin.change.toFixed(2),
      icon: 'ri-bit-coin-line',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-gold rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-gold-light rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-5"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">LIVE MARKTDATEN</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Globale Märkte<br />
            <span className="text-accent-gold">in Echtzeit</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Verfolgen Sie Aktien, Indizes, Währungen und Kryptowährungen mit professionellen Echtzeit-Daten
          </motion.p>
        </div>

        {/* Live Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 relative z-10`}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-sm font-semibold text-white/70 mb-2">{stat.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-bold ${
                  parseFloat(stat.change) >= 0 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}>
                  <i className={`${parseFloat(stat.change) >= 0 ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}`}></i>
                  <span>{parseFloat(stat.change) >= 0 ? '+' : ''}{stat.change}%</span>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-16 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent-gold hover:bg-accent-gold-light text-primary font-bold rounded-xl shadow-2xl transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center space-x-2">
              <span>Jetzt starten</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center space-x-2">
              <i className="ri-play-circle-line text-xl"></i>
              <span>Demo ansehen</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-white/60 text-sm font-medium">Scrollen Sie nach unten</span>
            <i className="ri-arrow-down-line text-white/60 text-2xl"></i>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketHero;
