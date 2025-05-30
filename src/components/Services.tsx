import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSearch, FiTrendingUp, FiMessageSquare, FiBarChart2, FiMonitor, FiMail } from 'react-icons/fi'

const services = [
  {
    id: 1,
    title: 'Search Engine Optimization',
    description: 'Improve your visibility in search results and drive organic traffic to your website.',
    icon: FiSearch,
  },
  {
    id: 2,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage with your audience across social platforms.',
    icon: FiTrendingUp,
  },
  {
    id: 3,
    title: 'Content Marketing',
    description: 'Create valuable content that attracts and retains your target audience.',
    icon: FiMessageSquare,
  },
  {
    id: 4,
    title: 'PPC Advertising',
    description: 'Drive immediate traffic and conversions with targeted paid advertising campaigns.',
    icon: FiBarChart2,
  },
  {
    id: 5,
    title: 'Web Design & Development',
    description: 'Create stunning, conversion-focused websites that represent your brand.',
    icon: FiMonitor,
  },
  {
    id: 6,
    title: 'Email Marketing',
    description: 'Nurture leads and build customer loyalty with personalized email campaigns.',
    icon: FiMail,
  }
]

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="section bg-light-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">
            We offer comprehensive digital marketing solutions tailored to your business goals.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card service-card group"
            >
              <div className="mb-6 service-icon text-gray-400 transition-colors duration-300">
                <service.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  Learn more
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
