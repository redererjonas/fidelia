import { useEffect, useState } from 'react';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('process-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Erstgespräch & Analyse',
      description: 'In einem ausführlichen Beratungsgespräch analysieren wir Ihre individuellen Anlageziele, Risikobereitschaft und Ihren Anlagehorizont. Wir nehmen uns Zeit, Ihre Situation vollständig zu verstehen.',
      icon: 'ri-discuss-line',
      image: '/images/process-01.jpg',
      details: ['Bedarfsanalyse', 'Risikoprofil', 'Zielsetzung', 'Zeitrahmen']
    },
    {
      number: '02',
      title: 'Strategieentwicklung',
      description: 'Basierend auf Ihrer Analyse entwickeln unsere Experten eine maßgeschneiderte Anlagestrategie. Wir berücksichtigen alle relevanten Faktoren und erstellen einen detaillierten Investmentplan.',
      icon: 'ri-lightbulb-line',
      image: '/images/process-02.jpg',
      details: ['Asset Allocation', 'Produktauswahl', 'Risikomanagement', 'Optimierung']
    },
    {
      number: '03',
      title: 'Umsetzung & Investition',
      description: 'Nach Ihrer Freigabe setzen wir die vereinbarte Strategie professionell um. Alle Transaktionen werden transparent dokumentiert und Sie erhalten eine vollständige Übersicht Ihrer Investments.',
      icon: 'ri-rocket-line',
      image: '/images/process-03.jpg',
      details: ['Vertragsabschluss', 'Kapitalanlage', 'Dokumentation', 'Bestätigung']
    },
    {
      number: '04',
      title: 'Monitoring & Reporting',
      description: 'Kontinuierliche Überwachung Ihrer Investments mit regelmäßigen Reports. Wir passen die Strategie bei Bedarf an und halten Sie stets über die Performance Ihrer Anlagen informiert.',
      icon: 'ri-line-chart-line',
      image: '/images/process-04.jpg',
      details: ['Performance-Tracking', 'Quartalsberichte', 'Anpassungen', 'Beratung']
    }
  ];

  return (
    <section id="process-section" className="py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent-gold/10 rounded-full px-6 py-3 mb-6">
            <i className="ri-route-line text-primary text-xl"></i>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Unser Prozess</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
            Ihr Weg zur <span className="gradient-text">erfolgreichen Anlage</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            In vier transparenten Schritten zu Ihrer individuellen Anlagestrategie
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-gold rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                      
                      {/* Number Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-accent-gold rounded-2xl blur-lg opacity-50"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-accent-gold to-accent-gold-light rounded-2xl flex items-center justify-center shadow-xl">
                            <span className="text-3xl font-bold text-white">{step.number}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    {/* Icon */}
                    <div className="relative mb-6 inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-gold rounded-2xl blur-lg opacity-20"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent-gold rounded-2xl flex items-center justify-center shadow-lg">
                        <i className={`${step.icon} text-3xl text-white`}></i>
                      </div>
                    </div>

                    <h3 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <i className="ri-check-line text-lg text-primary"></i>
                          </div>
                          <span className="text-sm font-semibold text-neutral-800">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-12">
                  <div className="w-1 h-16 bg-gradient-to-b from-primary via-accent-gold to-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
