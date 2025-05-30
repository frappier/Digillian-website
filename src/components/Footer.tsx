import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-light text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3 bg-primary rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H14M4 18H10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="18" cy="18" r="3" fill="#10B981" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="text-2xl font-bold font-heading">DIGILLIAN</span>
            </div>
            <p className="text-gray-400 mb-6">
              We help businesses grow through data-driven digital marketing strategies that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PPC Advertising</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Design & Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary" size={18} />
                <span className="text-gray-400">
                  123 Marketing Street<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-primary" size={18} />
                <a href="tel:+12345678900" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-primary" size={18} />
                <a href="mailto:info@digillian.com" className="text-gray-400 hover:text-white transition-colors">
                  info@digillian.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} DIGILLIAN. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
