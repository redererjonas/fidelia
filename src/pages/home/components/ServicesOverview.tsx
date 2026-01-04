import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesOverview() {
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

    const element = document.getElementById('services-overview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Festgeld',
      description: 'Planbare Renditen durch feste Laufzeiten und garantierte Zinssätze. Ideal für konservative Anlagestrategien mit langfristigem Anlagehorizont.',
      icon: 'ri-safe-line',
      path: '/leistungen/festgeld',
      image: '/images/festgeld-001.jpg',
      features: ['Feste Laufzeiten', 'Garantierte Zinsen', 'Planbare Erträge', 'Hohe Sicherheit'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Flexgeld',
      description: 'Flexible Anlagelösungen mit variabler Laufzeit. Optimale Balance zwischen Rendite und Liquidität für dynamische Anlagestrategien.',
      icon: 'ri-exchange-line',
      path: '/leistungen/flexgeld',
      image: '/images/flexgeld-001.jpg',
      features: ['Variable Laufzeiten', 'Flexible Kündigungen', 'Attraktive Zinsen', 'Kontrollierte Liquidität'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Tagesgeld',
      description: 'Maximale Liquidität bei attraktiver Verzinsung. Tägliche Verfügbarkeit Ihres Kapitals ohne Kündigungsfristen oder Mindestlaufzeiten.',
      icon: 'ri-wallet-3-line',
      path: '/leistungen/tagesgeld',
      image: '/images/tagesgeld-001.jpg',
      features: ['Tägliche Verfügbarkeit', 'Keine Kündigungsfrist', 'Transparente Zinsen', 'Volle Flexibilität'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Aktien',
      description: 'Professionelles Equity-Management mit Fokus auf internationale Märkte. Selektive Strategien für langfristigen Vermögensaufbau.',
      icon: 'ri-line-chart-line',
      path: '/leistungen/aktien',
      image: '/images/aktien-001.jpg',
      features: ['Globale Märkte', 'Aktive Verwaltung', 'Risikomanagement', 'Langfristiger Fokus'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Anleihen',
      description: 'Fixed Income Strategien mit Fokus auf Stabilität. Staatsanleihen und Unternehmensanleihen für risikoadjustierte Portfolios.',
      icon: 'ri-stock-line',
      path: '/leistungen/anleihen',
      image: '/images/anleihen-001.jpg',
      features: ['Staatsanleihen', 'Unternehmensanleihen', 'Stabile Erträge', 'Diversifikation'],
      color: 'from-violet-500 to-violet-600'
    }
  ];

  return (
    <section id="services-overview" className="py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent-gold/10 rounded-full px-6 py-3 mb-6">
            <i className="ri-service-line text-primary text-xl"></i>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Unsere Anlageprodukte</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
            Maßgeschneiderte <span className="gradient-text">Anlagelösungen</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Von konservativen Festgeldanlagen bis zu dynamischen Aktienstrategien – wir bieten professionelle Lösungen für jeden Anlegertyp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={service.path}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <i className={`${service.icon} text-3xl text-primary`}></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-sm text-primary"></i>
                      </div>
                      <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-2 text-primary font-bold group-hover:text-accent-gold transition-colors duration-300"
                >
                  <span>Mehr erfahren</span>
                  <i className="ri-arrow-right-line text-lg group-hover:translate-x-2 transition-transform duration-300"></i>
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Fifth Service - Full Width */}
        <div
          className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img 
                src={services[4].image}
                alt={services[4].title}
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${services[4].color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              {/* Icon Badge */}
              <div className="absolute top-6 left-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <i className={`${services[4].icon} text-3xl text-primary`}></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-heading font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {services[4].title}
              </h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {services[4].description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services[4].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-lg text-primary"></i>
                    </div>
                    <span className="text-base text-neutral-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={services[4].path}
                className="inline-flex items-center space-x-2 text-primary font-bold text-lg group-hover:text-accent-gold transition-colors duration-300"
              >
                <span>Mehr erfahren</span>
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold rounded-3xl transition-all duration-500 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
