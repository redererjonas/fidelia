import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: string;
  marketCap?: string;
  high24h?: number;
  low24h?: number;
  prevClose?: number;
}

const MarketLiveData = () => {
  const [stockData, setStockData] = useState<MarketData[]>([]);
  const [cryptoData, setCryptoData] = useState<MarketData[]>([]);
  const [forexData, setForexData] = useState<MarketData[]>([]);
  const [indicesData, setIndicesData] = useState<MarketData[]>([]);
  const [activeTab, setActiveTab] = useState<'stocks' | 'crypto' | 'forex' | 'indices'>('stocks');
  const [loading, setLoading] = useState(true);
  const [priceChanges, setPriceChanges] = useState<Record<string, 'up' | 'down' | 'neutral'>>({});
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Initialize data
  useEffect(() => {
    const initData = () => {
      setStockData([
        { symbol: 'AAPL', name: 'Apple Inc.', price: 178.45, change: 2.34, changePercent: 1.33, volume: '52.3M', marketCap: '2.8T', high24h: 180.12, low24h: 176.23, prevClose: 176.11 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', price: 412.78, change: -1.23, changePercent: -0.30, volume: '28.1M', marketCap: '3.1T', high24h: 415.34, low24h: 410.45, prevClose: 414.01 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 3.45, changePercent: 2.48, volume: '31.2M', marketCap: '1.8T', high24h: 143.89, low24h: 139.11, prevClose: 139.11 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.23, change: 4.12, changePercent: 2.37, volume: '45.6M', marketCap: '1.9T', high24h: 179.45, low24h: 174.11, prevClose: 174.11 },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: 242.84, change: -5.67, changePercent: -2.28, volume: '98.4M', marketCap: '771B', high24h: 248.51, low24h: 240.23, prevClose: 248.51 },
        { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 875.28, change: 12.45, changePercent: 1.44, volume: '42.8M', marketCap: '2.2T', high24h: 878.90, low24h: 862.83, prevClose: 862.83 },
        { symbol: 'META', name: 'Meta Platforms', price: 489.12, change: 6.78, changePercent: 1.41, volume: '18.9M', marketCap: '1.3T', high24h: 492.34, low24h: 482.34, prevClose: 482.34 },
        { symbol: 'BRK.B', name: 'Berkshire Hathaway', price: 412.34, change: 1.23, changePercent: 0.30, volume: '3.2M', marketCap: '896B', high24h: 413.45, low24h: 411.11, prevClose: 411.11 }
      ]);

      setCryptoData([
        { symbol: 'BTC', name: 'Bitcoin', price: 67234.56, change: 1234.45, changePercent: 1.87, volume: '28.4B', marketCap: '1.3T', high24h: 68500.00, low24h: 66000.00, prevClose: 66000.11 },
        { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: -45.23, changePercent: -1.29, volume: '15.2B', marketCap: '415B', high24h: 3502.01, low24h: 3400.00, prevClose: 3502.01 },
        { symbol: 'BNB', name: 'Binance Coin', price: 612.34, change: 8.45, changePercent: 1.40, volume: '2.1B', marketCap: '94B', high24h: 618.90, low24h: 603.89, prevClose: 603.89 },
        { symbol: 'SOL', name: 'Solana', price: 178.92, change: 12.34, changePercent: 7.40, volume: '3.8B', marketCap: '78B', high24h: 182.45, low24h: 166.58, prevClose: 166.58 },
        { symbol: 'XRP', name: 'Ripple', price: 0.6234, change: 0.0123, changePercent: 2.01, volume: '1.9B', marketCap: '34B', high24h: 0.6345, low24h: 0.6111, prevClose: 0.6111 },
        { symbol: 'ADA', name: 'Cardano', price: 0.5678, change: -0.0234, changePercent: -3.96, volume: '845M', marketCap: '20B', high24h: 0.5912, low24h: 0.5600, prevClose: 0.5912 }
      ]);

      setForexData([
        { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0856, change: 0.0023, changePercent: 0.21, volume: '1.2T', high24h: 1.0890, low24h: 1.0833, prevClose: 1.0833 },
        { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: 1.2634, change: -0.0045, changePercent: -0.35, volume: '845B', high24h: 1.2679, low24h: 1.2620, prevClose: 1.2679 },
        { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: 149.23, change: 0.45, changePercent: 0.30, volume: '967B', high24h: 149.78, low24h: 148.78, prevClose: 148.78 },
        { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', price: 0.8734, change: 0.0012, changePercent: 0.14, volume: '234B', high24h: 0.8756, low24h: 0.8722, prevClose: 0.8722 },
        { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', price: 0.6523, change: -0.0034, changePercent: -0.52, volume: '312B', high24h: 0.6557, low24h: 0.6510, prevClose: 0.6557 },
        { symbol: 'USD/CAD', name: 'US Dollar / Canadian Dollar', price: 1.3567, change: 0.0023, changePercent: 0.17, volume: '289B', high24h: 1.3590, low24h: 1.3544, prevClose: 1.3544 }
      ]);

      setIndicesData([
        { symbol: 'DAX', name: 'DAX 40', price: 17234.56, change: 123.45, changePercent: 0.72, volume: '4.2B', high24h: 17350.00, low24h: 17111.11, prevClose: 17111.11 },
        { symbol: 'S&P500', name: 'S&P 500', price: 4912.34, change: 34.23, changePercent: 0.70, volume: '89.3B', high24h: 4930.00, low24h: 4878.11, prevClose: 4878.11 },
        { symbol: 'NASDAQ', name: 'NASDAQ Composite', price: 15678.90, change: -45.67, changePercent: -0.29, volume: '112.4B', high24h: 15724.57, low24h: 15650.00, prevClose: 15724.57 },
        { symbol: 'FTSE', name: 'FTSE 100', price: 7823.45, change: 12.34, changePercent: 0.16, volume: '3.8B', high24h: 7835.00, low24h: 7811.11, prevClose: 7811.11 },
        { symbol: 'NIKKEI', name: 'Nikkei 225', price: 38234.12, change: 234.56, changePercent: 0.62, volume: '2.9B', high24h: 38400.00, low24h: 37999.56, prevClose: 37999.56 },
        { symbol: 'EUROSTOXX', name: 'Euro Stoxx 50', price: 4567.89, change: 23.45, changePercent: 0.52, volume: '5.1B', high24h: 4590.00, low24h: 4544.44, prevClose: 4544.44 }
      ]);

      setLoading(false);
    };

    initData();
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const updateData = () => {
      const updateMarketData = (data: MarketData[]) => {
        return data.map((item) => {
          const oldPrice = item.price;
          const volatility = activeTab === 'crypto' ? 0.003 : activeTab === 'forex' ? 0.0001 : 0.002;
          const priceChange = (Math.random() - 0.5) * item.price * volatility;
          const newPrice = Math.max(0, item.price + priceChange);
          const newChange = newPrice - (item.prevClose || item.price);
          const newChangePercent = ((newChange / (item.prevClose || item.price)) * 100);

          setPriceChanges(prev => ({
            ...prev,
            [item.symbol]: newPrice > oldPrice ? 'up' : newPrice < oldPrice ? 'down' : 'neutral'
          }));

          return {
            ...item,
            price: newPrice,
            change: newChange,
            changePercent: newChangePercent,
            high24h: Math.max(item.high24h || newPrice, newPrice),
            low24h: Math.min(item.low24h || newPrice, newPrice)
          };
        });
      };

      setStockData(prev => updateMarketData(prev));
      setCryptoData(prev => updateMarketData(prev));
      setForexData(prev => updateMarketData(prev));
      setIndicesData(prev => updateMarketData(prev));
      setLastUpdate(new Date());

      setTimeout(() => {
        setPriceChanges({});
      }, 500);
    };

    const interval = setInterval(updateData, 2000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const getCurrentData = () => {
    switch (activeTab) {
      case 'stocks': return stockData;
      case 'crypto': return cryptoData;
      case 'forex': return forexData;
      case 'indices': return indicesData;
      default: return stockData;
    }
  };

  const formatPrice = (price: number) => {
    if (activeTab === 'crypto' && price > 1000) {
      return `$${price.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else if (activeTab === 'forex' || (activeTab === 'crypto' && price < 1)) {
      return price.toFixed(4);
    } else {
      return price.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  };

  const tabs = [
    { id: 'stocks' as const, label: 'Aktien', icon: 'ri-line-chart-line', color: 'from-emerald-500 to-teal-600' },
    { id: 'indices' as const, label: 'Indizes', icon: 'ri-stock-line', color: 'from-amber-500 to-orange-600' },
    { id: 'forex' as const, label: 'Währungen', icon: 'ri-exchange-dollar-line', color: 'from-cyan-500 to-blue-600' },
    { id: 'crypto' as const, label: 'Krypto', icon: 'ri-bit-coin-line', color: 'from-violet-500 to-purple-600' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-gold/20 to-accent-gold-light/20 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-primary">LIVE • Echtzeit-Daten</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
            Live-Marktdaten
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Verfolgen Sie Kursbewegungen in Echtzeit aus allen wichtigen Anlageklassen
          </p>
        </motion.div>

        {/* Enhanced Tabs */}
        <div className="flex items-center justify-center gap-4 mb-16 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden ${
                activeTab === tab.id
                  ? 'text-white shadow-2xl'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50 border-2 border-neutral-200'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className={`absolute inset-0 bg-gradient-to-r ${tab.color}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <i className={`${tab.icon} text-2xl relative z-10`}></i>
              <span className="relative z-10 text-base">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-white rounded-full relative z-10"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Modern Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex items-center space-x-3">
                  <i className="ri-loader-4-line text-3xl text-accent-gold animate-spin"></i>
                  <span className="text-lg text-neutral-600">Lade Marktdaten...</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getCurrentData().map((item, index) => (
                  <motion.div
                    key={item.symbol}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden ${
                      priceChanges[item.symbol] === 'up' ? 'border-green-200' : 
                      priceChanges[item.symbol] === 'down' ? 'border-red-200' : 'border-neutral-100'
                    }`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 ${
                      item.changePercent >= 0 ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{item.symbol}</h3>
                        <p className="text-sm text-neutral-500 font-medium">{item.name}</p>
                      </div>
                      {priceChanges[item.symbol] && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            priceChanges[item.symbol] === 'up' ? 'bg-green-100' : 'bg-red-100'
                          }`}
                        >
                          <i className={`${
                            priceChanges[item.symbol] === 'up' 
                              ? 'ri-arrow-up-line text-green-600' 
                              : 'ri-arrow-down-line text-red-600'
                          } text-xl`}></i>
                        </motion.div>
                      )}
                    </div>

                    {/* Price */}
                    <motion.div
                      key={item.price}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 relative z-10"
                    >
                      <div className="text-3xl font-bold text-primary mb-2">
                        {formatPrice(item.price)}
                      </div>
                      <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg font-bold text-sm ${
                        item.changePercent >= 0 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        <i className={`${item.changePercent >= 0 ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}`}></i>
                        <span>{item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}</span>
                        <span>({Math.abs(item.changePercent).toFixed(2)}%)</span>
                      </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500 font-medium">24h Hoch</span>
                        <span className="text-green-600 font-bold">{formatPrice(item.high24h || item.price)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500 font-medium">24h Tief</span>
                        <span className="text-red-600 font-bold">{formatPrice(item.low24h || item.price)}</span>
                      </div>
                      {item.volume && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-neutral-500 font-medium">Volumen</span>
                          <span className="text-primary font-bold">{item.volume}</span>
                        </div>
                      )}
                      {item.marketCap && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-neutral-500 font-medium">Marktkapitalisierung</span>
                          <span className="text-primary font-bold">{item.marketCap}</span>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 relative z-10">
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${((item.price - (item.low24h || item.price)) / ((item.high24h || item.price) - (item.low24h || item.price))) * 100}%` 
                          }}
                          transition={{ duration: 0.5 }}
                          className={`h-full rounded-full ${
                            item.changePercent >= 0 ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'
                          }`}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Update Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-xl shadow-md border border-green-200">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-semibold text-green-700">
              Live-Daten • Aktualisierung alle 2 Sekunden
            </span>
          </div>
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-md border border-neutral-200">
            <i className="ri-time-line text-neutral-600"></i>
            <span className="text-sm text-neutral-600">
              Letzte Aktualisierung: {lastUpdate.toLocaleTimeString('de-DE')}
            </span>
          </div>
        </motion.div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Aktive Märkte', value: getCurrentData().length, icon: 'ri-bar-chart-box-line', color: 'from-blue-500 to-blue-600' },
            { label: 'Gewinner', value: getCurrentData().filter(d => d.changePercent > 0).length, icon: 'ri-arrow-up-circle-line', color: 'from-green-500 to-green-600' },
            { label: 'Verlierer', value: getCurrentData().filter(d => d.changePercent < 0).length, icon: 'ri-arrow-down-circle-line', color: 'from-red-500 to-red-600' },
            { label: 'Stabil', value: getCurrentData().filter(d => Math.abs(d.changePercent) < 0.5).length, icon: 'ri-subtract-line', color: 'from-neutral-500 to-neutral-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketLiveData;
