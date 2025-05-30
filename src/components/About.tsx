import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiTarget, FiUsers, FiTrendingUp } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="DIGILLIAN Team" 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                    <FiTrendingUp className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Client Success</p>
                    <p className="text-xl font-bold">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're a team of <span className="gradient-text">digital experts</span> passionate about results
            </h2>
            
            <p className="text-gray-600 mb-8">
              DIGILLIAN was founded in 2015 with a mission to help businesses navigate the complex digital landscape. We combine data-driven strategies with creative excellence to deliver exceptional results for our clients.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mt-1">
                  <FiTarget className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data-Driven Approach</h3>
                  <p className="text-gray-600">
                    We make decisions based on comprehensive data analysis, ensuring every strategy is optimized for maximum ROI.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mt-1">
                  <FiUsers className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Client-Centric Focus</h3>
                  <p className="text-gray-600">
                    Your success is our priority. We work closely with you to understand your goals and deliver tailored solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mt-1">
                  <FiTrendingUp className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    We stay ahead of industry trends and algorithm updates to keep your digital strategy cutting-edge.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
