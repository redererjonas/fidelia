import { useState } from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceBenefits from '../components/ServiceBenefits';
import ServiceTarget from '../components/ServiceTarget';
import ServiceRisks from '../components/ServiceRisks';
import ServiceCTA from '../components/ServiceCTA';
import Testimonials from '../../../components/feature/Testimonials';

export default function FlexgeldPage() {
  const [calculatorData, setCalculatorData] = useState({
    amount: 75000,
    duration: 18,
    interestRate: 3.2,
    earlyWithdrawal: false,
    withdrawalMonth: 12
  });

  const calculateReturn = () => {
    const years = calculatorData.duration / 12;
    const effectiveRate = calculatorData.earlyWithdrawal 
      ? calculatorData.interestRate * 0.7 // 30% penalty for early withdrawal
      : calculatorData.interestRate;
    
    const actualDuration = calculatorData.earlyWithdrawal 
      ? calculatorData.withdrawalMonth / 12 
      : years;
    
    const totalReturn = calculatorData.amount * Math.pow(1 + effectiveRate / 100, actualDuration);
    const profit = totalReturn - calculatorData.amount;
    const penalty = calculatorData.earlyWithdrawal 
      ? (calculatorData.amount * Math.pow(1 + calculatorData.interestRate / 100, actualDuration) - totalReturn)
      : 0;
    
    return { totalReturn, profit, penalty, effectiveRate };
  };

  const { totalReturn, profit, penalty, effectiveRate } = calculateReturn();

  const heroData = {
    title: 'Flexgeld',
    subtitle: 'Flexible Laufzeiten mit kontrollierter Liquidität',
    description: 'Die perfekte Balance zwischen Rendite und Verfügbarkeit. Flexgeld kombiniert attraktive Zinsen mit der Möglichkeit, bei Bedarf auf Ihr Kapital zuzugreifen.',
    icon: 'ri-exchange-line',
    color: 'from-emerald-500 to-emerald-600'
  };

  const benefits = [
    {
      icon: 'ri-exchange-line',
      title: 'Variable Laufzeiten',
      description: 'Wählen Sie zwischen verschiedenen Laufzeitoptionen von 3 Monaten bis 5 Jahren. Passen Sie Ihre Anlage flexibel an veränderte Bedürfnisse an.'
    },
    {
      icon: 'ri-wallet-3-line',
      title: 'Kontrollierte Liquidität',
      description: 'Im Gegensatz zu Festgeld haben Sie die Möglichkeit, unter bestimmten Bedingungen vorzeitig auf Ihr Kapital zuzugreifen – mit transparenten Konditionen.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Attraktive Zinsen',
      description: 'Profitieren Sie von Zinssätzen, die deutlich über Tagesgeld liegen, aber dennoch Flexibilität bieten. Optimales Rendite-Liquiditäts-Verhältnis.'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Anpassungsmöglichkeiten',
      description: 'Bei Laufzeitende können Sie Ihre Anlage verlängern, anpassen oder auszahlen lassen. Maximale Flexibilität für Ihre Finanzplanung.'
    },
    {
      icon: 'ri-shield-line',
      title: 'Kalkulierbare Erträge',
      description: 'Trotz Flexibilität bleiben Ihre Erträge planbar. Sie wissen jederzeit, welche Rendite Sie bei verschiedenen Szenarien erwarten können.'
    },
    {
      icon: 'ri-file-shield-line',
      title: 'Transparente Bedingungen',
      description: 'Alle Konditionen für vorzeitige Verfügungen sind klar definiert. Keine versteckten Kosten, vollständige Transparenz bei allen Optionen.'
    }
  ];

  const targetGroups = [
    {
      icon: 'ri-building-line',
      title: 'Mittelständische Unternehmen',
      description: 'Firmen, die Liquiditätsreserven rentabel anlegen möchten, aber flexibel bleiben müssen für unvorhergesehene Investitionen.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Family Offices',
      description: 'Vermögensverwaltungen, die eine Balance zwischen Rendite und Verfügbarkeit für ihre Mandanten suchen.'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Stiftungen & Vereine',
      description: 'Organisationen mit teilweise planbaren, aber auch unvorhersehbaren Liquiditätsbedürfnissen.'
    },
    {
      icon: 'ri-user-settings-line',
      title: 'Flexible Anleger',
      description: 'Investoren, die höhere Renditen als bei Tagesgeld wünschen, aber nicht vollständig auf Liquidität verzichten möchten.'
    }
  ];

  const risks = [
    {
      title: 'Zinsanpassungsrisiko',
      description: 'Bei vorzeitiger Verfügung können reduzierte Zinssätze anfallen. Die genauen Konditionen sind vertraglich festgelegt.',
      level: 'Mittel'
    },
    {
      title: 'Opportunitätsrisiko',
      description: 'Bei stark steigenden Marktzinsen während der Laufzeit können Sie möglicherweise nicht sofort von höheren Zinsen profitieren.',
      level: 'Niedrig'
    },
    {
      title: 'Liquiditätseinschränkung',
      description: 'Obwohl flexibler als Festgeld, gibt es dennoch Bedingungen für vorzeitige Verfügungen, die beachtet werden müssen.',
      level: 'Niedrig'
    },
    {
      title: 'Emittentenrisiko',
      description: 'Das Risiko der Zahlungsunfähigkeit der Bank oder Institution, bei der das Flexgeld angelegt ist.',
      level: 'Sehr Niedrig'
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <ServiceHero {...heroData} />
        
        {/* Interactive Calculator */}
        <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6">
                <i className="ri-calculator-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Flexgeld-Rechner
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Simulieren Sie verschiedene Szenarien mit vorzeitiger Verfügung
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Inputs */}
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-emerald-100">
                <h3 className="text-2xl font-heading font-bold text-primary mb-8">Ihre Anlage</h3>
                
                <div className="space-y-8">
                  {/* Amount */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Anlagebetrag</label>
                      <span className="text-2xl font-bold text-emerald-600">{calculatorData.amount.toLocaleString('de-DE')} €</span>
                    </div>
                    <input
                      type="range"
                      min="25000"
                      max="1000000"
                      step="25000"
                      value={calculatorData.amount}
                      onChange={(e) => setCalculatorData({ ...calculatorData, amount: Number(e.target.value) })}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${((calculatorData.amount - 25000) / 975000) * 100}%, #d1fae5 ${((calculatorData.amount - 25000) / 975000) * 100}%, #d1fae5 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>25.000 €</span>
                      <span>1.000.000 €</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Geplante Laufzeit</label>
                      <span className="text-2xl font-bold text-emerald-600">{calculatorData.duration} Monate</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="60"
                      step="3"
                      value={calculatorData.duration}
                      onChange={(e) => setCalculatorData({ ...calculatorData, duration: Number(e.target.value) })}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${((calculatorData.duration - 3) / 57) * 100}%, #d1fae5 ${((calculatorData.duration - 3) / 57) * 100}%, #d1fae5 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>3 Monate</span>
                      <span>5 Jahre</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Zinssatz p.a.</label>
                      <span className="text-2xl font-bold text-emerald-600">{calculatorData.interestRate.toFixed(2)} %</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="0.1"
                      value={calculatorData.interestRate}
                      onChange={(e) => setCalculatorData({ ...calculatorData, interestRate: Number(e.target.value) })}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${((calculatorData.interestRate - 1) / 4) * 100}%, #d1fae5 ${((calculatorData.interestRate - 1) / 4) * 100}%, #d1fae5 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>1,0 %</span>
                      <span>5,0 %</span>
                    </div>
                  </div>

                  {/* Early Withdrawal Toggle */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <i className="ri-time-line text-2xl text-amber-600"></i>
                        <label className="font-semibold text-neutral-700">Vorzeitige Verfügung simulieren</label>
                      </div>
                      <button
                        onClick={() => setCalculatorData({ ...calculatorData, earlyWithdrawal: !calculatorData.earlyWithdrawal })}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                          calculatorData.earlyWithdrawal ? 'bg-amber-500' : 'bg-neutral-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                            calculatorData.earlyWithdrawal ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    
                    {calculatorData.earlyWithdrawal && (
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-3">
                          <label className="text-sm font-semibold text-neutral-700">Verfügung nach</label>
                          <span className="text-xl font-bold text-amber-600">{calculatorData.withdrawalMonth} Monaten</span>
                        </div>
                        <input
                          type="range"
                          min="3"
                          max={calculatorData.duration}
                          step="1"
                          value={calculatorData.withdrawalMonth}
                          onChange={(e) => setCalculatorData({ ...calculatorData, withdrawalMonth: Number(e.target.value) })}
                          className="w-full h-3 rounded-full appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${((calculatorData.withdrawalMonth - 3) / (calculatorData.duration - 3)) * 100}%, #fed7aa ${((calculatorData.withdrawalMonth - 3) / (calculatorData.duration - 3)) * 100}%, #fed7aa 100%)`
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <i className="ri-money-euro-circle-line text-3xl"></i>
                      <h3 className="text-2xl font-heading font-bold">
                        {calculatorData.earlyWithdrawal ? 'Bei vorzeitiger Verfügung' : 'Ihre Rendite'}
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-emerald-100 text-sm mb-2">
                          Gesamtertrag nach {calculatorData.earlyWithdrawal ? calculatorData.withdrawalMonth : calculatorData.duration} Monaten
                        </p>
                        <p className="text-5xl font-bold">{totalReturn.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                      </div>
                      
                      <div className="h-px bg-white/20"></div>
                      
                      <div>
                        <p className="text-emerald-100 text-sm mb-2">Zinsgewinn</p>
                        <p className="text-3xl font-bold text-green-300">+ {profit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                      </div>

                      {calculatorData.earlyWithdrawal && penalty > 0 && (
                        <>
                          <div className="h-px bg-white/20"></div>
                          <div>
                            <p className="text-emerald-100 text-sm mb-2">Zinsabschlag (ca. 30%)</p>
                            <p className="text-2xl font-bold text-red-300">- {penalty.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <i className="ri-percent-line text-2xl text-emerald-600"></i>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">Effektiver Zinssatz</p>
                    <p className="text-2xl font-bold text-primary">{effectiveRate.toFixed(2)} %</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                      <i className="ri-calendar-line text-2xl text-teal-600"></i>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">Tatsächliche Laufzeit</p>
                    <p className="text-2xl font-bold text-primary">
                      {calculatorData.earlyWithdrawal ? calculatorData.withdrawalMonth : calculatorData.duration} Mon.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-information-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Flexibilität hat ihren Preis</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Bei vorzeitiger Verfügung wird ein reduzierter Zinssatz angewendet. Je näher Sie am Laufzeitende sind, desto geringer der Abschlag.
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
                Die Vorteile von Flexgeld
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Optimale Balance zwischen Rendite und Flexibilität
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-percent-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Flexible Zinssätze</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Attraktive Verzinsung, die sich an Ihrer gewählten Laufzeit orientiert. Je länger die Bindung, desto höher die Rendite.
                </p>
                <div className="text-emerald-600 font-semibold">Bis zu 3,8% p.a.</div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Kündigungsoptionen</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Vorzeitige Verfügung mit transparenten Konditionen möglich. Klare Regelungen für alle Szenarien.
                </p>
                <div className="text-emerald-600 font-semibold">Ab 3 Monaten Laufzeit</div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-money-euro-circle-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Mindestanlage</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Flexible Einstiegsmöglichkeiten für verschiedene Anlagebeträge. Skalierbar nach Ihren Bedürfnissen.
                </p>
                <div className="text-emerald-600 font-semibold">Ab 25.000 €</div>
              </div>
            </div>
          </div>
        </section>

        <ServiceBenefits benefits={benefits} />
        <ServiceTarget targetGroups={targetGroups} />
        <ServiceRisks risks={risks} />
        
        {/* Comparison */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Flexgeld im Vergleich
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                So positioniert sich Flexgeld zwischen Tagesgeld und Festgeld
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary to-primary-light text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-heading font-bold">Kriterium</th>
                      <th className="px-6 py-4 text-center font-heading font-bold">Tagesgeld</th>
                      <th className="px-6 py-4 text-center font-heading font-bold bg-emerald-600">Flexgeld</th>
                      <th className="px-6 py-4 text-center font-heading font-bold">Festgeld</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-neutral-700">Verfügbarkeit</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Täglich</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold bg-emerald-50">Mit Bedingungen</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Laufzeitende</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-neutral-700">Zinssatz</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Niedrig</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold bg-emerald-50">Mittel-Hoch</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Hoch</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-neutral-700">Planbarkeit</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Variabel</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold bg-emerald-50">Gut</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Sehr gut</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-neutral-700">Flexibilität</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Sehr hoch</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold bg-emerald-50">Hoch</td>
                      <td className="px-6 py-4 text-center text-neutral-600">Niedrig</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-neutral-700">Geeignet für</td>
                      <td className="px-6 py-4 text-center text-neutral-600 text-sm">Kurzfristige Liquidität</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold bg-emerald-50 text-sm">Mittelfristige Planung</td>
                      <td className="px-6 py-4 text-center text-neutral-600 text-sm">Langfristige Anlage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Interessiert an Flexgeld?"
          description="Erfahren Sie mehr über unsere flexiblen Anlagelösungen und finden Sie die optimale Balance zwischen Rendite und Verfügbarkeit."
        />
        <Testimonials />
      </main>
    </div>
  );
}