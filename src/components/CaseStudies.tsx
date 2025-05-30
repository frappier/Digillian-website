import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Revenue Growth',
    category: 'SEO & PPC',
    description: 'Increased online sales by 215% for a fashion retailer through targeted SEO and PPC campaigns.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      '215% increase in online revenue',
      '180% growth in organic traffic',
      '35% reduction in cost per acquisition'
    ]
  },
  {
    id: 2,
    title: 'B2B Lead Generation',
    category: 'Content Marketing',
    description: 'Developed a content strategy that generated 450+ qualified leads for a SaaS company.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      '450+ qualified leads generated',
      '320% increase in whitepaper downloads',
      '28% conversion rate from lead to demo'
    ]
  },
  {
    id: 3,
    title: 'Brand Awareness Campaign',
    category: 'Social Media',
    description: 'Launched a viral social media campaign that reached 2M+ users for a new beverage brand.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    results: [
      '2M+ users reached',
      '300K+ social media engagements',
      '165% increase in brand mentions'
    ]
  }
]

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="case-studies" className="section bg-light-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our <span className="gradient-text">Success Stories</span></h2>
          <p className="section-subtitle">
            See how we've helped businesses like yours achieve remarkable results.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                  {study.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Key Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                View Full Case Study
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
