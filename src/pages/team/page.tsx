import TeamHero from './components/TeamHero';
import TeamGrid from './components/TeamGrid';
import TeamValues from './components/TeamValues';
import Testimonials from '../../components/feature/Testimonials';

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <main>
        <TeamHero />
        <TeamGrid />
        <TeamValues />
        <Testimonials />
      </main>
    </div>
  );
}