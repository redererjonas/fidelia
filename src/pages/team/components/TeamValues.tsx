export default function TeamValues() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Kontinuierliche Weiterbildung',
      description: 'Unser Team bildet sich kontinuierlich fort, um stets auf dem neuesten Stand der Kapitalmarktentwicklungen und regulatorischen Anforderungen zu sein.'
    },
    {
      icon: 'ri-team-line',
      title: 'Kollaborative Kultur',
      description: 'Wir arbeiten interdisziplinär zusammen und nutzen die Expertise aller Teammitglieder für optimale Anlageentscheidungen.'
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Mandantenfokus',
      description: 'Die Ziele und der Erfolg unserer Mandanten stehen im Mittelpunkt unseres täglichen Handelns und unserer Entscheidungen.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Ethische Standards',
      description: 'Höchste Integrität und Transparenz prägen unsere Arbeitsweise und unseren Umgang mit Mandanten und Partnern.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">
            Was uns auszeichnet
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Unsere Teamkultur basiert auf gemeinsamen Werten und dem Streben nach Exzellenz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
                <i className={`${value.icon} text-3xl text-accent-gold`}></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}