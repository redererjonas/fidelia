import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PerformanceChart() {
  const [timeRange, setTimeRange] = useState('1Y');

  const monthlyData = [
    { month: 'Jan 2025', value: 500000, profit: 0 },
    { month: 'Feb 2025', value: 502083, profit: 2083 },
    { month: 'Mär 2025', value: 504167, profit: 4167 },
    { month: 'Apr 2025', value: 506250, profit: 6250 },
    { month: 'Mai 2025', value: 508333, profit: 8333 },
    { month: 'Jun 2025', value: 510417, profit: 10417 },
    { month: 'Jul 2025', value: 512500, profit: 12500 },
    { month: 'Aug 2025', value: 514583, profit: 14583 },
    { month: 'Sep 2025', value: 516667, profit: 16667 },
    { month: 'Okt 2025', value: 518750, profit: 18750 },
    { month: 'Nov 2025', value: 520833, profit: 20833 },
    { month: 'Dez 2025', value: 522917, profit: 22917 },
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));
  const minValue = Math.min(...monthlyData.map(d => d.value));
  const range = maxValue - minValue;

  const timeRanges = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1J', value: '1Y' },
    { label: 'Alle', value: 'ALL' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary-dark to-slate-900 p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <i className="ri-bar-chart-box-line text-2xl"></i>
                </div>
                <h2 className="text-2xl font-heading font-bold">Performance-Entwicklung</h2>
              </div>
              <p className="text-white/90 text-base">
                Monatliche Wertentwicklung Ihres Portfolios
              </p>
            </div>

            {/* Time Range Selector */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl p-1.5 shadow-lg">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    timeRange === range.value
                      ? 'bg-accent-gold text-primary shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-amber-50 to-primary/5 rounded-xl p-5 border border-amber-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-md">
                <i className="ri-arrow-up-line text-xl text-white"></i>
              </div>
              <p className="text-sm text-primary font-medium">Höchstwert</p>
            </div>
            <p className="text-2xl font-bold text-primary">
              {maxValue.toLocaleString('de-DE')} €
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-5 border border-amber-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
                <i className="ri-line-chart-line text-xl text-white"></i>
              </div>
              <p className="text-sm text-amber-700 font-medium">Durchschnitt</p>
            </div>
            <p className="text-2xl font-bold text-amber-700">
              {((monthlyData.reduce((sum, d) => sum + d.value, 0)) / monthlyData.length).toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-5 border border-green-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                <i className="ri-trophy-line text-xl text-white"></i>
              </div>
              <p className="text-sm text-green-700 font-medium">Wachstum</p>
            </div>
            <p className="text-2xl font-bold text-green-700">
              +{((maxValue - minValue) / minValue * 100).toFixed(2)}%
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-80">
          <div className="absolute inset-0 flex items-end justify-between gap-2">
            {monthlyData.map((data, index) => {
              const height = ((data.value - minValue) / range) * 100;
              const isLast = index === monthlyData.length - 1;
              
              return (
                <motion.div
                  key={data.month}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${height}%`, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                  className="flex-1 group relative cursor-pointer"
                >
                  <div className={`h-full rounded-t-xl transition-all ${
                    isLast
                      ? 'bg-gradient-to-t from-primary to-primary-dark shadow-lg shadow-primary/30'
                      : 'bg-gradient-to-t from-neutral-200 to-neutral-300 group-hover:from-amber-400 group-hover:to-amber-500'
                  }`}>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-neutral-900 text-white px-4 py-3 rounded-xl shadow-2xl whitespace-nowrap">
                        <p className="text-xs font-medium text-neutral-300 mb-1">{data.month}</p>
                        <p className="text-sm font-bold mb-1">{data.value.toLocaleString('de-DE')} €</p>
                        <p className="text-xs text-amber-400 font-semibold">
                          +{data.profit.toLocaleString('de-DE')} € Gewinn
                        </p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Month Label */}
                  <p className="text-xs text-neutral-600 font-medium text-center mt-3 transform -rotate-45 origin-top-left">
                    {data.month.split(' ')[0]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded"></div>
              <span className="text-sm text-neutral-600 font-medium">Vergangene Monate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-primary to-primary-dark rounded shadow-md"></div>
              <span className="text-sm text-neutral-600 font-medium">Aktueller Monat</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-information-line text-accent-gold"></i>
              <span className="text-sm text-neutral-600">Hover für Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}