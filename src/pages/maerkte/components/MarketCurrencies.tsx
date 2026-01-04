import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Currency {
  pair: string;
  rate: number;
  change: number;
  changePercent: number;
  flag1: string;
  flag2: string;
}

const MarketCurrencies = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([
    { pair: 'EUR/USD', rate: 1.0845, change: 0.0023, changePercent: 0.21, flag1: '🇪🇺', flag2: '🇺🇸' },
    { pair: 'GBP/USD', rate: 1.2678, change: -0.0012, changePercent: -0.09, flag1: '🇬🇧', flag2: '🇺🇸' },
    { pair: 'USD/JPY', rate: 148.34, change: 0.45, changePercent: 0.30, flag1: '🇺🇸', flag2: '🇯🇵' },
    { pair: 'USD/CHF', rate: 0.8456, change: -0.0034, changePercent: -0.40, flag1: '🇺🇸', flag2: '🇨🇭' },
    { pair: 'EUR/GBP', rate: 0.8556, change: 0.0015, changePercent: 0.18, flag1: '🇪🇺', flag2: '🇬🇧' },
    { pair: 'AUD/USD', rate: 0.6623, change: 0.0028, changePercent: 0.42, flag1: '🇦🇺', flag2: '🇺🇸' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencies(prevCurrencies =>
        prevCurrencies.map(currency => {
          const randomChange = (Math.random() - 0.5) * 0.01;
          const newRate = currency.rate + randomChange;
          const newChange = currency.change + randomChange;
          const newChangePercent = (newChange / currency.rate) * 100;
          
          return {
            ...currency,
            rate: parseFloat(newRate.toFixed(4)),
            change: parseFloat(newChange.toFixed(4)),
            changePercent: parseFloat(newChangePercent.toFixed(2))
          };
        })
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Währungen
          </h2>
          <p className="text-lg text-neutral-600">
            Aktuelle Devisenkurse der wichtigsten Währungspaare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currencies.map((currency, index) => (
            <motion.div
              key={currency.pair}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">{currency.flag1}</span>
                  <i className="ri-arrow-right-line text-neutral-400"></i>
                  <span className="text-3xl">{currency.flag2}</span>
                </div>
                <div className={`flex items-center space-x-1 ${currency.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <i className={`${currency.change >= 0 ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}`}></i>
                  <span className="text-sm font-semibold">
                    {currency.changePercent >= 0 ? '+' : ''}{currency.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                {currency.pair}
              </h3>
              
              <p className="text-3xl font-bold text-primary mb-1">
                {currency.rate.toFixed(4)}
              </p>
              
              <p className={`text-sm font-medium ${currency.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {currency.change >= 0 ? '+' : ''}{currency.change.toFixed(4)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketCurrencies;