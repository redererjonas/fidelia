import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Index {
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
  icon: string;
  flag: string;
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

  const gradientId = `idx-gradient-${positive ? 'up' : 'down'}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg viewBox="0 0 100 50" className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={positive ? '#10b981' : '#ef4444'} stopOpacity="0.3" />
          <stop offset="100%" stopColor={positive ? '#10b981' : '#ef4444'} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,50 ${points} 100,50`}
        fill={`url(#${gradientId})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={positive ? '#10b981' : '#ef4444'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const generateSparkline = (baseValue: number): number[] => {
  const points: number[] = [];
  let current = baseValue;
  for (let i = 0; i < 15; i++) {
    current = current * (1 + (Math.random() - 0.5) * 0.01);
    points.push(current);
  }
  return points;
};

const MarketIndices = () => {
  const [indices, setIndices] = useState<Index[]>([
    { name: 'S&P 500', symbol: 'US500', value: 4783.45, change: 23.45, changePercent: 0.49, icon: 'ri-line-chart-line', flag: '🇺🇸', sparkline: generateSparkline(4783) },
    { name: 'Dow Jones', symbol: 'US30', value: 37689.23, change: -45.67, changePercent: -0.12, icon: 'ri-stock-line', flag: '🇺🇸', sparkline: generateSparkline(37689) },
    { name: 'NASDAQ 100', symbol: 'US100', value: 14912.34, change: 89.12, changePercent: 0.60, icon: 'ri-bar-chart-line', flag: '🇺🇸', sparkline: generateSparkline(14912) },
    { name: 'DAX 40', symbol: 'DE40', value: 16789.56, change: 112.34, changePercent: 0.67, icon: 'ri-funds-line', flag: '🇩🇪', sparkline: generateSparkline(16789) },
    { name: 'FTSE 100', symbol: 'UK100', value: 7623.45, change: -12.34, changePercent: -0.16, icon: 'ri-line-chart-line', flag: '🇬🇧', sparkline: generateSparkline(7623) },
    { name: 'Nikkei 225', symbol: 'JP225', value: 33456.78, change: 234.56, changePercent: 0.71, icon: 'ri-stock-line', flag: '🇯🇵', sparkline: generateSparkline(33456) },
    { name: 'Shanghai', symbol: 'CN50', value: 2978.34, change: -23.45, changePercent: -0.78, icon: 'ri-bar-chart-line', flag: '🇨🇳', sparkline: generateSparkline(2978) },
    { name: 'Euro Stoxx 50', symbol: 'EU50', value: 4456.23, change: 34.12, changePercent: 0.77, icon: 'ri-funds-line', flag: '🇪🇺', sparkline: generateSparkline(4456) },
  ]);

  const [priceFlash, setPriceFlash] = useState<Record<string, 'up' | 'down' | null>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(prevIndices =>
        prevIndices.map(index => {
          const oldValue = index.value;
          const randomChange = (Math.random() - 0.5) * 50;
          const newValue = index.value + randomChange;
          const newChange = index.change + randomChange;
          const newChangePercent = (newChange / index.value) * 100;
          const newSparkline = [...index.sparkline.slice(1), newValue];

          setPriceFlash(prev => ({
            ...prev,
            [index.symbol]: newValue > oldValue ? 'up' : newValue < oldValue ? 'down' : null
          }));

          return {
            ...index,
            value: parseFloat(newValue.toFixed(2)),
            change: parseFloat(newChange.toFixed(2)),
            changePercent: parseFloat(newChangePercent.toFixed(2)),
            sparkline: newSparkline
          };
        })
      );

      setTimeout(() => setPriceFlash({}), 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-accent-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 px-5 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-primary">Live-Indizes</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Globale Indizes
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Die wichtigsten Börsenindizes der Welt im Echtzeit-Überblick
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indices.map((index, idx) => (
            <motion.div
              key={index.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden ${
                priceFlash[index.symbol] === 'up'
                  ? 'border-green-300'
                  : priceFlash[index.symbol] === 'down'
                  ? 'border-red-300'
                  : 'border-neutral-100 hover:border-accent-gold/30'
              }`}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                index.changePercent >= 0 ? 'bg-green-500' : 'bg-red-500'
              }`}></div>

              {/* Header */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{index.flag}</span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary">
                      {index.name}
                    </h3>
                    <span className="text-xs text-neutral-500 font-medium">{index.symbol}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-sm font-bold ${
                  index.changePercent >= 0
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  <i className={`${index.changePercent >= 0 ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}`}></i>
                  <span>{index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%</span>
                </div>
              </div>

              {/* Sparkline */}
              <div className="mb-4 -mx-2">
                <SparklineChart data={index.sparkline} positive={index.changePercent >= 0} />
              </div>

              {/* Price */}
              <div className="relative z-10">
                <motion.p
                  key={index.value}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  className={`text-2xl font-bold mb-1 ${
                    priceFlash[index.symbol] === 'up'
                      ? 'text-green-600'
                      : priceFlash[index.symbol] === 'down'
                      ? 'text-red-600'
                      : 'text-primary'
                  }`}
                >
                  {index.value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </motion.p>

                <p className={`text-sm font-semibold ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} Punkte
                </p>
              </div>

              {/* Live Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketIndices;
