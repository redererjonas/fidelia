import HeroSection from './components/HeroSection';
import LiveMarketTicker from './components/LiveMarketTicker';
import StatsSection from './components/StatsSection';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import TrustHighlights from './components/TrustHighlights';
import Testimonials from '../../components/feature/Testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <LiveMarketTicker />
        <StatsSection />
        <TrustHighlights />
        <ServicesOverview />
        <WhyChooseUs />
        <ProcessSection />
        <Testimonials />
      </main>
    </div>
  );
}