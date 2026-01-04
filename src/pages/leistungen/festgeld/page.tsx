import { useState } from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceBenefits from '../components/ServiceBenefits';
import ServiceTarget from '../components/ServiceTarget';
import ServiceRisks from '../components/ServiceRisks';
import ServiceCTA from '../components/ServiceCTA';
import Testimonials from '../../../components/feature/Testimonials';

export default function FestgeldPage() {
  const [calculatorData, setCalculatorData] = useState({
    amount: 50000,
    duration: 24,
    interestRate: 3.5
  });

  const calculateReturn = () => {
    const years = calculatorData.duration / 12;
    const totalReturn = calculatorData.amount * Math.pow(1 + calculatorData.interestRate / 100, years);
    const profit = totalReturn - calculatorData.amount;
    return { totalReturn, profit };
  };

  const { totalReturn, profit } = calculateReturn();

  const heroData = {
    title: 'Festgeld',
    subtitle: 'Stabile und planbare Renditen durch langfristige Kapitalbindung',
    description: 'Professionelle Festgeldanlagen für institutionelle Investoren mit höchster Sicherheit und transparenten Konditionen. Planbare Erträge bei festen Laufzeiten.',
    icon: 'ri-safe-line',
    color: 'from-blue-500 to-blue-600'
  };

  const benefits = [
    {
      icon: 'ri-lock-line',
      title: 'Höchste Sicherheit',
      description: 'Festgeld bietet maximale Planungssicherheit durch feste Zinssätze und garantierte Laufzeiten. Ihr Kapital ist während der gesamten Anlagedauer geschützt.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Planbare Erträge',
      description: 'Von Beginn an wissen Sie exakt, welche Rendite Sie am Ende der Laufzeit erhalten. Keine Überraschungen, vollständige Transparenz bei allen Konditionen.'
    },
    {
      icon: 'ri-time-line',
      title: 'Flexible Laufzeiten',
      description: 'Wählen Sie zwischen verschiedenen Laufzeiten von 1 bis 10 Jahren. Passen Sie Ihre Anlage optimal an Ihre Liquiditätsplanung und Anlageziele an.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Kapitalschutz',
      description: 'Ihr eingesetztes Kapital bleibt während der gesamten Laufzeit geschützt. Am Ende der Laufzeit erhalten Sie Ihr Kapital plus die vereinbarten Zinsen zurück.'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Transparente Konditionen',
      description: 'Alle Konditionen werden vor Vertragsabschluss klar kommuniziert. Keine versteckten Gebühren, keine unerwarteten Kosten – vollständige Transparenz.'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Attraktive Verzinsung',
      description: 'Profitieren Sie von wettbewerbsfähigen Zinssätzen, die über der Inflationsrate liegen. Je länger die Laufzeit, desto höher die Rendite.'
    }
  ];

  const targetGroups = [
    {
      icon: 'ri-building-line',
      title: 'Institutionelle Investoren',
      description: 'Versicherungen, Pensionskassen und Stiftungen, die auf stabile und planbare Erträge angewiesen sind.'
    },
    {
      icon: 'ri-government-line',
      title: 'Öffentliche Einrichtungen',
      description: 'Kommunen und öffentliche Institutionen mit langfristigem Anlagehorizont und hohen Sicherheitsanforderungen.'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Unternehmen',
      description: 'Firmen, die liquide Mittel sicher und rentabel anlegen möchten, ohne Kursrisiken einzugehen.'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Qualifizierte Anleger',
      description: 'Vermögende Privatpersonen, die konservative Anlagestrategien mit planbaren Erträgen bevorzugen.'
    }
  ];

  const risks = [
    {
      title: 'Liquiditätsrisiko',
      description: 'Während der Laufzeit ist das Kapital gebunden. Eine vorzeitige Kündigung ist in der Regel nicht oder nur mit Zinsverlusten möglich.',
      level: 'Mittel'
    },
    {
      title: 'Inflationsrisiko',
      description: 'Bei steigender Inflation kann die reale Kaufkraft der Erträge sinken, wenn die Zinsen nicht entsprechend angepasst werden.',
      level: 'Niedrig'
    },
    {
      title: 'Opportunitätsrisiko',
      description: 'Bei steigenden Marktzinsen während der Laufzeit können Sie nicht von höheren Zinsen profitieren.',
      level: 'Niedrig'
    },
    {
      title: 'Emittentenrisiko',
      description: 'Das Risiko, dass die Bank oder Institution, bei der das Festgeld angelegt ist, zahlungsunfähig wird.',
      level: 'Sehr Niedrig'
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <ServiceHero {...heroData} />
        
        {/* Interactive Calculator */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
                <i className="ri-calculator-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Festgeld-Rechner
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Berechnen Sie Ihre potenzielle Rendite mit unserem interaktiven Rechner
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Inputs */}
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-heading font-bold text-primary mb-8">Ihre Anlage</h3>
                
                <div className="space-y-8">
                  {/* Amount */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Anlagebetrag</label>
                      <span className="text-2xl font-bold text-blue-600">{calculatorData.amount.toLocaleString('de-DE')} €</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      value={calculatorData.amount}
                      onChange={(e) => setCalculatorData({ ...calculatorData, amount: Number(e.target.value) })}
                      className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((calculatorData.amount - 10000) / 990000) * 100}%, #dbeafe ${((calculatorData.amount - 10000) / 990000) * 100}%, #dbeafe 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>10.000 €</span>
                      <span>1.000.000 €</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Laufzeit</label>
                      <span className="text-2xl font-bold text-blue-600">{calculatorData.duration} Monate</span>
                    </div>
                    <input
                      type="range"
                      min="12"
                      max="120"
                      step="6"
                      value={calculatorData.duration}
                      onChange={(e) => setCalculatorData({ ...calculatorData, duration: Number(e.target.value) })}
                      className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((calculatorData.duration - 12) / 108) * 100}%, #dbeafe ${((calculatorData.duration - 12) / 108) * 100}%, #dbeafe 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>1 Jahr</span>
                      <span>10 Jahre</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Zinssatz p.a.</label>
                      <span className="text-2xl font-bold text-blue-600">{calculatorData.interestRate.toFixed(2)} %</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      step="0.1"
                      value={calculatorData.interestRate}
                      onChange={(e) => setCalculatorData({ ...calculatorData, interestRate: Number(e.target.value) })}
                      className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((calculatorData.interestRate - 1) / 5) * 100}%, #dbeafe ${((calculatorData.interestRate - 1) / 5) * 100}%, #dbeafe 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>1,0 %</span>
                      <span>6,0 %</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <i className="ri-information-line text-2xl text-blue-600"></i>
                    <h4 className="font-semibold text-neutral-700">Hinweis</h4>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Die tatsächlichen Zinssätze können je nach Marktlage und individueller Vereinbarung variieren. Kontaktieren Sie uns für ein persönliches Angebot.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <i className="ri-money-euro-circle-line text-3xl"></i>
                      <h3 className="text-2xl font-heading font-bold">Ihre Rendite</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-blue-100 text-sm mb-2">Gesamtertrag nach {calculatorData.duration} Monaten</p>
                        <p className="text-5xl font-bold">{totalReturn.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                      </div>
                      
                      <div className="h-px bg-white/20"></div>
                      
                      <div>
                        <p className="text-blue-100 text-sm mb-2">Zinsgewinn</p>
                        <p className="text-3xl font-bold text-green-300">+ {profit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <i className="ri-calendar-line text-2xl text-blue-600"></i>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">Laufzeit</p>
                    <p className="text-2xl font-bold text-primary">{(calculatorData.duration / 12).toFixed(1)} Jahre</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <i className="ri-percent-line text-2xl text-green-600"></i>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">Rendite p.a.</p>
                    <p className="text-2xl font-bold text-primary">{calculatorData.interestRate.toFixed(2)} %</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-lightbulb-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Tipp für höhere Renditen</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Je länger die Laufzeit, desto höher der Zinssatz. Bei Anlagen über 5 Jahre können Sie von besonders attraktiven Konditionen profitieren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Warum Festgeld?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Die ideale Lösung für konservative Anleger mit langfristigem Horizont
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-percent-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Feste Zinssätze</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Profitieren Sie von garantierten Zinssätzen, die für die gesamte Laufzeit festgeschrieben sind. Keine Schwankungen, keine Unsicherheiten.
                </p>
                <div className="text-blue-600 font-semibold">Bis zu 4,5% p.a.</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Einlagensicherung</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Ihre Einlagen sind durch die gesetzliche Einlagensicherung geschützt. Zusätzlicher Schutz durch institutionelle Sicherungssysteme.
                </p>
                <div className="text-blue-600 font-semibold">Bis zu 100.000 € pro Kunde</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-money-euro-circle-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Mindestanlage</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Flexible Mindestanlagebeträge ermöglichen sowohl kleinere als auch größere Investments nach Ihren individuellen Bedürfnissen.
                </p>
                <div className="text-blue-600 font-semibold">Ab 10.000 €</div>
              </div>
            </div>
          </div>
        </section>

        <ServiceBenefits benefits={benefits} />
        <ServiceTarget targetGroups={targetGroups} />
        <ServiceRisks risks={risks} />
        
        {/* Investment Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                So funktioniert Festgeld
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Einfacher Prozess von der Beratung bis zur Auszahlung
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Beratung', description: 'Persönliches Gespräch zur Ermittlung Ihrer Anlageziele und Risikobereitschaft', icon: 'ri-chat-3-line' },
                { step: '02', title: 'Konditionen', description: 'Auswahl der optimalen Laufzeit und Festlegung der Zinssätze', icon: 'ri-file-list-line' },
                { step: '03', title: 'Anlage', description: 'Einzahlung des Kapitals und Vertragsabschluss mit allen Details', icon: 'ri-bank-line' },
                { step: '04', title: 'Auszahlung', description: 'Am Laufzeitende erhalten Sie Ihr Kapital plus Zinsen zurück', icon: 'ri-money-euro-circle-line' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-heading font-bold text-white">{item.step}</span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                      <i className={`${item.icon} text-white text-sm`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Interessiert an Festgeld?"
          description="Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Experten und erfahren Sie mehr über unsere Festgeld-Lösungen."
        />
        <Testimonials />
      </main>
    </div>
  );
}