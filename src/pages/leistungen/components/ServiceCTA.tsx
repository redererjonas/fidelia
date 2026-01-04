import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCTAProps {
  title: string;
  description: string;
}

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-neutral-200 mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/kontakt"
              className="px-8 py-4 bg-accent-gold text-primary font-semibold rounded-lg hover:bg-accent-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              to="/maerkte"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Märkte analysieren
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;