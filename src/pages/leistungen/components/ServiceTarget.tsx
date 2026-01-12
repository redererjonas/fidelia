import { motion } from 'framer-motion';

interface TargetGroup {
  icon: string;
  title: string;
  description: string;
}

interface ServiceTargetProps {
  targetGroups: TargetGroup[];
}

const ServiceTarget = ({ targetGroups }: ServiceTargetProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Für wen geeignet?
          </h2>
          <p className="text-lg text-neutral-600">
            Diese Anlagelösung richtet sich an folgende Investorengruppen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-accent-gold to-amber-500 rounded-xl">
                  <i className={`${group.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {group.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTarget;
