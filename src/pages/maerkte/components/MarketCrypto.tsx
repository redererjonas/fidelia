import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Crypto {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  icon: string;
  color: string;
  bgColor: string;
  sparkline: number[];
}

// Sparkline Mini Chart Component
const SparklineChart = ({ data, positive }: { data: number[]; positive: boolean }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((value - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(' ');

  const gradientId = `crypto-gradient-${positive ? 'up' : 'down'}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg viewBox="0 0 100 60" className="w-full h-14" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={positive ? '#10b981' : '#ef4444'} stopOpacity="0.35" />
          <stop offset="100%" stopColor={positive ? '#10b981' : '#ef4444'} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,60 ${points} 100,60`}
        fill={`url(#${gradientId})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={positive ? '#10b981' : '#ef4444'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const generateSparkline = (baseValue: number, volatility: number = 0.03): number[] => {
  const points: number[] = [];
  let current = baseValue;
  for (let i = 0; i < 20; i++) {
    current = current * (1 + (Math.random() - 0.5) * volatility);
    points.push(current);
  }
  return points;
};

const MarketCrypto = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([
    { symbol: 'BTC', name: 'Bitcoin', price: 43567.89, change: 1234.56, changePercent: 2.92, icon: '₿', color: 'text-orange-500', bgColor: 'from-orange-400 to-orange-600', sparkline: generateSparkline(43567) },
    { symbol: 'ETH', name: 'Ethereum', price: 2345.67, change: -45.23, changePercent: -1.89, icon: 'Ξ', color: 'text-blue-500', bgColor: 'from-purple-400 to-blue-600', sparkline: generateSparkline(2345) },
    { symbol: 'BNB', name: 'Binance Coin', price: 312.45, change: 8.92, changePercent: 2.94, icon: '◆', color: 'text-yellow-500', bgColor: 'from-yellow-400 to-yellow-600', sparkline: generateSparkline(312) },
    { symbol: 'XRP', name: 'Ripple', price: 0.6234, change: 0.0123, changePercent: 2.01, icon: '✕', color: 'text-gray-600', bgColor: 'from-gray-500 to-blue-600', sparkline: generateSparkline(0.62, 0.04) },
    { symbol: 'ADA', name: 'Cardano', price: 0.5678, change: -0.0234, changePercent: -3.96, icon: '₳', color: 'text-blue-400', bgColor: 'from-blue-400 to-blue-600', sparkline: generateSparkline(0.56, 0.04) },
    { symbol: 'SOL', name: 'Solana', price: 98.45, change: 3.21, changePercent: 3.37, icon: '◎', color: 'text-purple-500', bgColor: 'from-purple-500 to-cyan-400', sparkline: generateSparkline(98) },
  ]);

  const [priceFlash, setPriceFlash] = useState<Record<string, 'up' | 'down' | null>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptos(prevCryptos =>
        prevCryptos.map(crypto => {
          const oldPrice = crypto.price;
          const randomChange = (Math.random() - 0.5) * (crypto.price * 0.02);
          const newPrice = crypto.price + randomChange;
          const newChange = crypto.change + randomChange;
          const newChangePercent = (newChange / crypto.price) * 100;
          const newSparkline = [...crypto.sparkline.slice(1), newPrice];

          setPriceFlash(prev => ({
            ...prev,
            [crypto.symbol]: newPrice > oldPrice ? 'up' : newPrice < oldPrice ? 'down' : null
          }));

          return {
            ...crypto,
            price: parseFloat(newPrice.toFixed(crypto.price < 1 ? 4 : 2)),
            change: parseFloat(newChange.toFixed(crypto.price < 1 ? 4 : 2)),
            changePercent: parseFloat(newChangePercent.toFixed(2)),
            sparkline: newSparkline
          };
        })
      );

      setTimeout(() => setPriceFlash({}), 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Crypto Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
              <div className="w-3 h-3 bg-green-500 rounded-full relative" />
            </div>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Live Crypto</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Kryptowährungen
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Digitale Assets im Echtzeit-Überblick mit Live-Preisaktualisierungen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptos.map((crypto, index) => (
            <motion.div
              key={crypto.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 overflow-hidden cursor-pointer ${
                priceFlash[crypto.symbol] === 'up'
                  ? 'border-green-500/50 shadow-lg shadow-green-500/20'
                  : priceFlash[crypto.symbol] === 'down'
                  ? 'border-red-500/50 shadow-lg shadow-red-500/20'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${crypto.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${crypto.bgColor} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {crypto.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {crypto.symbol}
                    </h3>
                    <p className="text-sm text-slate-400">{crypto.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-500">LIVE</span>
                </div>
              </div>

              {/* Sparkline */}
              <div className="mb-4 -mx-2">
                <SparklineChart data={crypto.sparkline} positive={crypto.changePercent >= 0} />
              </div>

              {/* Price */}
              <div className="flex items-end justify-between relative z-10">
                <div>
                  <motion.p
                    key={crypto.price}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className={`text-2xl font-bold mb-1 ${
                      priceFlash[crypto.symbol] === 'up'
                        ? 'text-green-400'
                        : priceFlash[crypto.symbol] === 'down'
                        ? 'text-red-400'
                        : 'text-white'
                    }`}
                  >
                    ${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: crypto.price < 1 ? 4 : 2 })}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-bold ${
                    crypto.changePercent >= 0
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  <span>{crypto.changePercent >= 0 ? '↑' : '↓'}</span>
                  <span>{crypto.changePercent >= 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%</span>
                </motion.div>
              </div>

              {/* 24h Change Amount */}
              <p className={`text-sm font-medium mt-2 ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {crypto.change >= 0 ? '+' : ''}${Math.abs(crypto.change).toFixed(crypto.price < 1 ? 4 : 2)} (24h)
              </p>
            </motion.div>
          ))}
        </div>

        {/* Warning Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-error-warning-line text-xl text-amber-400"></i>
            </div>
            <div>
              <h4 className="text-amber-400 font-bold mb-1">Risikohinweis</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Kryptowährungen unterliegen hohen Kursschwankungen und sind mit erheblichen Risiken verbunden.
                Diese Darstellung dient ausschließlich Informationszwecken und stellt keine Anlageempfehlung dar.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Kryptos', value: cryptos.length, icon: '🪙' },
            { label: 'Update-Rate', value: '2.5s', icon: '⚡' },
            { label: 'Gewinner', value: cryptos.filter(c => c.changePercent > 0).length, icon: '📈' },
            { label: 'Verlierer', value: cryptos.filter(c => c.changePercent < 0).length, icon: '📉' },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketCrypto;
