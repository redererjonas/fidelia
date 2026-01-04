import { useState } from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceBenefits from '../components/ServiceBenefits';
import ServiceTarget from '../components/ServiceTarget';
import ServiceRisks from '../components/ServiceRisks';
import ServiceCTA from '../components/ServiceCTA';
import Testimonials from '../../../components/feature/Testimonials';

export default function AnleihenPage() {
  const [calculatorData, setCalculatorData] = useState({
    bondAmount: 100000,
    couponRate: 3.5,
    years: 5,
    purchasePrice: 100,
    bondType: 'government' // government, corporate, pfandbrief
  });

  const calculateBondReturn = () => {
    const annualCoupon = (calculatorData.bondAmount * calculatorData.couponRate) / 100;
    const totalCoupons = annualCoupon * calculatorData.years;
    const purchaseCost = (calculatorData.bondAmount * calculatorData.purchasePrice) / 100;
    const redemptionValue = calculatorData.bondAmount;
    const capitalGain = redemptionValue - purchaseCost;
    const totalReturn = totalCoupons + capitalGain;
    const yieldToMaturity = (totalReturn / purchaseCost / calculatorData.years) * 100;
    
    return {
      annualCoupon,
      totalCoupons,
      purchaseCost,
      redemptionValue,
      capitalGain,
      totalReturn,
      yieldToMaturity
    };
  };

  const result = calculateBondReturn();

  const bondTypeInfo = {
    government: { name: 'Staatsanleihe', risk: 'Sehr niedrig', color: 'from-green-500 to-green-600' },
    corporate: { name: 'Unternehmensanleihe', risk: 'Mittel', color: 'from-blue-500 to-blue-600' },
    pfandbrief: { name: 'Pfandbrief', risk: 'Niedrig', color: 'from-emerald-500 to-emerald-600' }
  };

  const heroData = {
    title: 'Anleihen',
    subtitle: 'Staatlich & unternehmerisch, risikojustiert',
    description: 'Professionelles Fixed Income Management für institutionelle Investoren. Staatsanleihen und Unternehmensanleihen mit systematischer Risikosteuerung für stabile Portfolios.',
    icon: 'ri-stock-line',
    color: 'from-rose-500 to-rose-600'
  };

  const benefits = [
    {
      icon: 'ri-money-euro-circle-line',
      title: 'Stabile Erträge',
      description: 'Regelmäßige Zinszahlungen (Kupons) bieten planbare Einkommensströme. Ideal für Investoren, die auf kontinuierliche Erträge angewiesen sind.'
    },
    {
      icon: 'ri-shield-line',
      title: 'Kapitalerhalt',
      description: 'Anleihen bieten in der Regel mehr Sicherheit als Aktien. Bei Bonitätsprüfung und Diversifikation ist das Ausfallrisiko kontrollierbar.'
    },
    {
      icon: 'ri-pie-chart-line',
      title: 'Portfolio-Diversifikation',
      description: 'Anleihen korrelieren oft negativ mit Aktien. Sie stabilisieren Portfolios und reduzieren die Gesamtvolatilität Ihrer Investments.'
    },
    {
      icon: 'ri-scales-line',
      title: 'Risikoadjustierte Rendite',
      description: 'Systematische Auswahl von Anleihen basierend auf Bonitätsanalyse, Laufzeit und Rendite-Risiko-Profil für optimale Ergebnisse.'
    },
    {
      icon: 'ri-global-line',
      title: 'Internationale Märkte',
      description: 'Zugang zu Staatsanleihen und Unternehmensanleihen aus verschiedenen Ländern und Währungsräumen für globale Diversifikation.'
    },
    {
      icon: 'ri-exchange-line',
      title: 'Liquidität',
      description: 'Viele Anleihen sind börsengehandelt und bieten gute Handelbarkeit. Bei Bedarf können Positionen vor Fälligkeit verkauft werden.'
    }
  ];

  const targetGroups = [
    {
      icon: 'ri-building-line',
      title: 'Versicherungen & Pensionskassen',
      description: 'Institutionen mit langfristigen Verpflichtungen, die auf stabile und planbare Erträge angewiesen sind.'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Stiftungen',
      description: 'Gemeinnützige Organisationen, die Kapitalerhalt mit regelmäßigen Erträgen für ihre Stiftungszwecke kombinieren möchten.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Vermögensverwalter',
      description: 'Family Offices und Vermögensverwalter, die Fixed Income als Stabilisator in diversifizierten Portfolios einsetzen.'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Konservative Anleger',
      description: 'Investoren, die Wert auf Kapitalerhalt und regelmäßige Erträge legen und moderate Risiken bevorzugen.'
    }
  ];

  const risks = [
    {
      title: 'Zinsänderungsrisiko',
      description: 'Steigende Marktzinsen führen zu fallenden Anleihekursen. Je länger die Restlaufzeit, desto stärker die Auswirkung von Zinsänderungen.',
      level: 'Mittel bis Hoch'
    },
    {
      title: 'Kreditrisiko',
      description: 'Das Risiko, dass der Emittent seine Zins- oder Tilgungszahlungen nicht leisten kann. Höhere Renditen gehen oft mit höherem Kreditrisiko einher.',
      level: 'Mittel'
    },
    {
      title: 'Währungsrisiko',
      description: 'Bei Fremdwährungsanleihen können Wechselkursschwankungen die Rendite erheblich beeinflussen – positiv wie negativ.',
      level: 'Mittel'
    },
    {
      title: 'Liquiditätsrisiko',
      description: 'Nicht alle Anleihen sind gleich gut handelbar. Bei illiquiden Anleihen können Verkäufe nur mit Abschlägen möglich sein.',
      level: 'Niedrig bis Mittel'
    },
    {
      title: 'Inflationsrisiko',
      description: 'Bei steigender Inflation verlieren feste Zinszahlungen an Kaufkraft. Die reale Rendite kann negativ werden.',
      level: 'Niedrig bis Mittel'
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <ServiceHero {...heroData} />
        
        {/* Interactive Calculator */}
        <section className="py-24 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl mb-6">
                <i className="ri-calculator-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Anleihen-Rendite-Rechner
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Berechnen Sie Kuponzahlungen, Kursgewinne und Gesamtrendite Ihrer Anleihen
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Inputs */}
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-rose-100">
                <h3 className="text-2xl font-heading font-bold text-primary mb-8">Anleihen-Parameter</h3>
                
                <div className="space-y-8">
                  {/* Bond Type Selection */}
                  <div>
                    <label className="text-sm font-semibold text-neutral-700 mb-4 block">Anleihentyp</label>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(bondTypeInfo).map(([key, info]) => (
                        <button
                          key={key}
                          onClick={() => setCalculatorData({ ...calculatorData, bondType: key })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            calculatorData.bondType === key
                              ? 'border-rose-500 bg-rose-50'
                              : 'border-neutral-200 bg-white hover:border-rose-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                              <i className="ri-stock-line text-lg text-white"></i>
                            </div>
                            <p className="text-xs font-semibold text-neutral-700">{info.name}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bond Amount */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Nominalbetrag</label>
                      <span className="text-2xl font-bold text-rose-600">{calculatorData.bondAmount.toLocaleString('de-DE')} €</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      value={calculatorData.bondAmount}
                      onChange={(e) => setCalculatorData({ ...calculatorData, bondAmount: Number(e.target.value) })}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #f43f5e 0%, #f43f5e ${((calculatorData.bondAmount - 10000) / 990000) * 100}%, #ffe4e6 ${((calculatorData.bondAmount - 10000) / 990000) * 100}%, #ffe4e6 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>10.000 €</span>
                      <span>1.000.000 €</span>
                    </div>
                  </div>

                  {/* Coupon Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Kupon (Zinssatz p.a.)</label>
                      <span className="text-2xl font-bold text-rose-600">{calculatorData.couponRate.toFixed(2)} %</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="8"
                      step="0.1"
                      value={calculatorData.couponRate}
                      onChange={(e) => setCalculatorData({ ...calculatorData, couponRate: Number(e.target.value) })}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #f43f5e 0%, #f43f5e ${((calculatorData.couponRate - 0.5) / 7.5) * 100}%, #ffe4e6 ${((calculatorData.couponRate - 0.5) / 7.5) * 100}%, #ffe4e6 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>0,5 %</span>
                      <span>8,0 %</span>
                    </div>
                  </div>

                  {/* Years to Maturity */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Restlaufzeit</label>
                      <span className="text-2xl font-bold text-rose-600">{calculatorData.years} Jahre</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={calculatorData.years}
                      onChange={(e) => setCalculatorData({ ...calculatorData, years: Number(e.target.value) })}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #f43f5e 0%, #f43f5e ${((calculatorData.years - 1) / 29) * 100}%, #ffe4e6 ${((calculatorData.years - 1) / 29) * 100}%, #ffe4e6 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>1 Jahr</span>
                      <span>30 Jahre</span>
                    </div>
                  </div>

                  {/* Purchase Price */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-semibold text-neutral-700">Kaufkurs (% vom Nennwert)</label>
                      <span className="text-2xl font-bold text-rose-600">{calculatorData.purchasePrice.toFixed(1)} %</span>
                    </div>
                    <input
                      type="range"
                      min="80"
                      max="120"
                      step="0.5"
                      value={calculatorData.purchasePrice}
                      onChange={(e) => setCalculatorData({ ...calculatorData, purchasePrice: Number(e.target.value) })}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #f43f5e 0%, #f43f5e ${((calculatorData.purchasePrice - 80) / 40) * 100}%, #ffe4e6 ${((calculatorData.purchasePrice - 80) / 40) * 100}%, #ffe4e6 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                      <span>80 % (Abschlag)</span>
                      <span>120 % (Aufschlag)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-information-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">{bondTypeInfo[calculatorData.bondType as keyof typeof bondTypeInfo].name}</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Risiko: {bondTypeInfo[calculatorData.bondType as keyof typeof bondTypeInfo].risk}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <i className="ri-money-euro-circle-line text-3xl"></i>
                      <h3 className="text-2xl font-heading font-bold">Ihre Rendite</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-rose-100 text-sm mb-2">Gesamtertrag nach {calculatorData.years} Jahren</p>
                        <p className="text-5xl font-bold">{result.totalReturn.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                      </div>
                      
                      <div className="h-px bg-white/20"></div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-rose-100 text-sm mb-2">Kuponzahlungen</p>
                          <p className="text-2xl font-bold text-green-300">+ {result.totalCoupons.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                        </div>
                        <div>
                          <p className="text-rose-100 text-sm mb-2">Kursgewinn/-verlust</p>
                          <p className={`text-2xl font-bold ${result.capitalGain >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                            {result.capitalGain >= 0 ? '+ ' : '- '}
                            {Math.abs(result.capitalGain).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                          </p>
                        </div>
                      </div>

                      <div className="h-px bg-white/20"></div>
                      
                      <div>
                        <p className="text-rose-100 text-sm mb-2">Effektivverzinsung (Yield to Maturity)</p>
                        <p className="text-3xl font-bold text-green-300">{result.yieldToMaturity.toFixed(2)} % p.a.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                      <i className="ri-calendar-check-line text-2xl text-rose-600"></i>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">Jährlicher Kupon</p>
                    <p className="text-2xl font-bold text-primary">{result.annualCoupon.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <i className="ri-money-euro-circle-line text-2xl text-green-600"></i>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">Rückzahlungswert</p>
                    <p className="text-2xl font-bold text-primary">{result.redemptionValue.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} €</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                  <h4 className="font-semibold text-neutral-800 mb-4">Investitionsübersicht</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Kaufpreis</span>
                      <span className="font-bold text-primary">{result.purchaseCost.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Nominalbetrag</span>
                      <span className="font-bold text-primary">{calculatorData.bondAmount.toLocaleString('de-DE')} €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Laufzeit</span>
                      <span className="font-bold text-primary">{calculatorData.years} Jahre</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Kupon</span>
                      <span className="font-bold text-primary">{calculatorData.couponRate.toFixed(2)} % p.a.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-lightbulb-line text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Kurs und Rendite</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {calculatorData.purchasePrice < 100 
                          ? 'Sie kaufen unter Nennwert (Disagio). Die Effektivverzinsung ist höher als der Kupon.'
                          : calculatorData.purchasePrice > 100
                          ? 'Sie kaufen über Nennwert (Agio). Die Effektivverzinsung ist niedriger als der Kupon.'
                          : 'Sie kaufen zum Nennwert (Pari). Die Effektivverzinsung entspricht dem Kupon.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bond Types */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Unser Anleihen-Universum
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Zugang zu verschiedenen Anleihekategorien für optimale Diversifikation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 border border-rose-100">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-government-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Staatsanleihen</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Anleihen von Staaten mit hoher Bonität bieten maximale Sicherheit. Deutsche Bundesanleihen, US-Treasuries und andere AAA-geratete Staatsanleihen bilden das Fundament sicherer Portfolios.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Höchste Bonität (AAA bis A)</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Maximale Sicherheit</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Hohe Liquidität</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 border border-rose-100">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-building-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Unternehmensanleihen</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Corporate Bonds von erstklassigen Unternehmen bieten höhere Renditen bei kontrolliertem Risiko. Sorgfältige Bonitätsprüfung und Diversifikation sind entscheidend.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Investment Grade (BBB+ bis AAA)</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Höhere Renditen</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Breite Diversifikation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 border border-rose-100">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-bank-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Pfandbriefe</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Deutsche Pfandbriefe gelten als besonders sichere Anleihen. Durch Immobilien oder öffentliche Kredite besichert, bieten sie attraktive Renditen bei hoher Sicherheit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Besicherte Anleihen</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Hohe Sicherheit</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Attraktive Renditen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 border border-rose-100">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-leaf-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Green Bonds</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Nachhaltige Anleihen finanzieren Umwelt- und Klimaprojekte. Kombinieren Sie finanzielle Rendite mit positivem Impact für eine nachhaltige Zukunft.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>ESG-konform</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Positive Wirkung</span>
                  </li>
                  <li className="flex items-center space-x-2 text-neutral-600">
                    <i className="ri-check-line text-rose-600"></i>
                    <span>Wachsender Markt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceBenefits benefits={benefits} />
        <ServiceTarget targetGroups={targetGroups} />
        <ServiceRisks risks={risks} />
        
        {/* Investment Strategy */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Unsere Anlagestrategie
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Systematischer Ansatz für optimale Rendite-Risiko-Profile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-search-eye-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Bonitätsanalyse</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Gründliche Prüfung der Kreditwürdigkeit aller Emittenten. Nur Anleihen mit ausreichender Bonität werden ins Portfolio aufgenommen.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-time-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Duration-Management</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Aktive Steuerung der Zinssensitivität durch gezielte Auswahl von Laufzeiten. Anpassung an Zinserwartungen und Marktbedingungen.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-pie-chart-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Diversifikation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Breite Streuung über Emittenten, Branchen, Länder und Laufzeiten. Minimierung von Klumpenrisiken für stabile Portfolios.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Interessiert an Anleihen?"
          description="Erfahren Sie mehr über unsere Fixed Income Strategien und wie wir stabile Erträge für Ihr Portfolio generieren."
        />
        <Testimonials />
      </main>
    </div>
  );
}