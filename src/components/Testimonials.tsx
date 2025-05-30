import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    content: "DIGILLIAN transformed our online presence completely. Their SEO strategy helped us rank for competitive keywords, and our organic traffic has increased by 200% in just 6 months.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechVision Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "Working with DIGILLIAN has been a game-changer for our business. Their PPC campaigns delivered an ROI of 350%, and their team is responsive, professional, and truly cares about our success.",
    author: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    content: "The social media strategy DIGILLIAN developed for our brand launch exceeded all expectations. We gained over 50,000 followers in three months and saw a significant increase in website traffic.",
    author: "Emma Rodriguez",
    position: "Brand Manager",
    company: "Pure Organics",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    content: "DIGILLIAN's content marketing approach has established us as thought leaders in our industry. Their team consistently delivers high-quality content that resonates with our audience and drives conversions.",
    author: "David Wilson",
    position: "Operations Director",
    company: "Global Logistics",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-primary opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <div className="relative">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
