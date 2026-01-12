import Testimonials from '../../components/feature/Testimonials';
import MarketHero from './components/MarketHero';
import MarketLiveData from './components/MarketLiveData';
import MarketOverview from './components/MarketOverview';
import MarketIndices from './components/MarketIndices';
import MarketCurrencies from './components/MarketCurrencies';
import MarketCrypto from './components/MarketCrypto';

const MaerktePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <MarketHero />
        <MarketLiveData />
        <MarketOverview />
        <MarketIndices />
        <MarketCurrencies />
        <MarketCrypto />
        <Testimonials />
      </main>
    </div>
  );
};

export default MaerktePage;