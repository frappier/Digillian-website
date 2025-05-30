import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-dark text-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Digital Marketing?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get in touch with our team today for a free consultation and discover how we can help you achieve your business goals.
            </p>
            <ul className="space-y-4 mb-8">
              {['Customized strategies tailored to your business', 'Transparent reporting and communication', 'Proven results and ROI focus', 'Dedicated account manager'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-dark-light p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">Search Engine Optimization</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="web">Web Design & Development</option>
                    <option value="email">Email Marketing</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn btn-primary py-4"
                >
                  Request Free Consultation
                </button>
                
                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
