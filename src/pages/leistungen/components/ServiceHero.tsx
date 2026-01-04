import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const ServiceHero = ({ title, subtitle, description, icon }: ServiceHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary pt-32 pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-accent-gold/10 rounded-lg">
              <i className={`${icon} text-3xl text-accent-gold`}></i>
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white">
              {title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl lg:text-2xl text-accent-gold font-medium mb-6"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-200 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;