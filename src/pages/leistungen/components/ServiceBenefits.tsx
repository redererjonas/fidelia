import { motion } from 'framer-motion';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Ihre Vorteile
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Professionelle Kapitalverwaltung mit höchsten Standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-lg p-8 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent-gold/10 rounded-lg mb-6">
                <i className={`${benefit.icon} text-2xl text-accent-gold`}></i>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;