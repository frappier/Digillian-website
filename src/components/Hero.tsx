import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-gradient overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="gradient-text">Digital Presence</span> With Strategic Marketing
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                We help businesses grow through data-driven digital marketing strategies that deliver measurable results and ROI.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn btn-primary">
                Get Started
                <FiArrowRight className="ml-2" />
              </a>
              <a href="#services" className="btn btn-outline">
                Our Services
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap items-center gap-8">
                <img src="https://via.placeholder.com/120x40/e2e8f0/64748b?text=COMPANY" alt="Client logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/120x40/e2e8f0/64748b?text=BRAND" alt="Client logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/120x40/e2e8f0/64748b?text=STARTUP" alt="Client logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/120x40/e2e8f0/64748b?text=TECH" alt="Client logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Marketing Team" 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block"
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Campaign Performance</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <div className="bg-primary-light h-16 w-4 rounded-t-md"></div>
                <div className="bg-primary h-24 w-4 rounded-t-md"></div>
                <div className="bg-primary-light h-12 w-4 rounded-t-md"></div>
                <div className="bg-primary h-20 w-4 rounded-t-md"></div>
                <div className="bg-primary-light h-16 w-4 rounded-t-md"></div>
                <div className="bg-primary h-28 w-4 rounded-t-md"></div>
                <div className="bg-primary-light h-20 w-4 rounded-t-md"></div>
              </div>
              <p className="text-xs text-gray-500">+127% increase in conversions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-10 -left-10 bg-white p-4 rounded-lg shadow-lg hidden md:block"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2"/>
                    <path d="M15 9L9 15M9 9L15 15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">SEO Ranking</p>
                  <p className="text-xs text-gray-500">Top 3 positions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
