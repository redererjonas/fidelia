import { motion } from 'framer-motion';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'ri-map-pin-line',
      title: 'Adresse',
      content: ['Kurze Mühren 20', '20095 Hamburg', 'Deutschland']
    },
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      content: ['+49 (0) 40 334 668098']
    },
    {
      icon: 'ri-mail-line',
      title: 'E-Mail',
      content: ['info@fidelia-kvg.de']
    },
    {
      icon: 'ri-time-line',
      title: 'Geschäftszeiten',
      content: ['Montag – Freitag', '09:00 – 17:00 Uhr']
    }
  ];

  const legalInfo = [
    { label: 'BaFin-ID', value: '10146931', link: 'https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=146931' },
    { label: 'Bak Nr.', value: '146931' },
    { label: 'LEI', value: 'XXXXXXXXXXXXXXXXXXXXXX' },
    { label: 'EUID', value: 'DE.XXXXXX.XXXXXXXX' },
    { label: 'Registrierung', value: 'Nach §44 iVm §2 Abs.4 KAGB' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
          Kontaktinformationen
        </h2>
        <p className="text-neutral-600 mb-8">
          Erreichen Sie uns über folgende Kanäle. Wir freuen uns auf Ihre Kontaktaufnahme.
        </p>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-accent-gold/10 rounded-lg flex-shrink-0">
                <i className={`${detail.icon} text-xl text-accent-gold`}></i>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary mb-1">
                  {detail.title}
                </h3>
                {detail.content.map((line, idx) => (
                  <p key={idx} className="text-neutral-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-50 rounded-lg p-6">
        <h3 className="text-xl font-heading font-bold text-primary mb-4">
          Rechtliche Angaben
        </h3>
        <div className="space-y-3">
          {legalInfo.map((info, index) => (
            <div key={index} className="flex items-start justify-between border-b border-neutral-200 pb-2 last:border-0">
              <span className="text-sm font-semibold text-neutral-600">
                {info.label}
              </span>
              {'link' in info && info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-gold font-medium text-right hover:underline"
                >
                  {info.value}
                </a>
              ) : (
                <span className="text-sm text-primary font-medium text-right">
                  {info.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <i className="ri-information-line text-xl text-primary"></i>
          </div>
          <div>
            <h4 className="text-lg font-heading font-bold text-primary mb-2">
              Wichtiger Hinweis
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Die FIDELIA Kapitalverwaltungsgesellschaft mbH ist nach §44 iVm §2 Abs.4 KAGB registriert und unterliegt der Aufsicht der BaFin. Alle Anlageentscheidungen erfolgen nach strengen regulatorischen Vorgaben.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-6 text-white">
        <h4 className="text-xl font-heading font-bold mb-3">
          Persönliche Beratung gewünscht?
        </h4>
        <p className="text-neutral-200 mb-4 leading-relaxed">
          Vereinbaren Sie einen Termin mit unseren Experten für eine individuelle Beratung zu Ihren Anlagezielen.
        </p>
        <a
          href="tel:+4940334668098"
          className="inline-flex items-center space-x-2 text-accent-gold font-semibold hover:text-accent-gold/80 transition-colors duration-300 cursor-pointer"
        >
          <i className="ri-phone-line text-xl"></i>
          <span>+49 (0) 40 334 668098</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactInfo;