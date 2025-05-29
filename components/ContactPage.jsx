'use client'
import React, { useState, useRef, useEffect } from 'react'

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Animation refs
  const headingRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  
  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            entry.target.classList.remove('opacity-0', '-translate-y-10')
          } else if (entry.target === formRef.current) {
            entry.target.classList.remove('opacity-0', 'translate-x-10')
          } else if (entry.target === infoRef.current) {
            entry.target.classList.remove('opacity-0', 'translate-x-10')
            
            // Animate each contact method with delay
            const contactItems = entry.target.querySelectorAll('.contact-item')
            contactItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0', 'translate-y-4')
              }, index * 200)
            })
          }
        }
      })
    }, { threshold: 0.2 })
    
    if (headingRef.current) observer.observe(headingRef.current)
    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) observer.observe(infoRef.current)
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current)
      if (formRef.current) observer.unobserve(formRef.current)
      if (infoRef.current) observer.unobserve(infoRef.current)
    }
  }, [])

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace with your actual email sending logic
      // Example: using emailjs or a backend API
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
      
      // Success
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      
      // Reset error after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-black py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/5 w-72 h-72 rounded-full bg-purple-600/10 mix-blend-lighten filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-indigo-600/10 mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-cyan-600/10 mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading */}
        <div 
          ref={headingRef}
          className="opacity-0 -translate-y-10 transition-all duration-1000 mb-16 text-center"
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through the form below or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div 
            ref={formRef}
            className="lg:col-span-3 opacity-0 translate-x-10 transition-all duration-1000 delay-200"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-purple-500/5 transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name"
                    className="absolute top-3 left-4 pointer-events-none text-gray-500 transition-all duration-300 group-focus-within:text-xs group-focus-within:-translate-y-7 group-focus-within:text-purple-400"
                  >
                    Your Name
                  </label>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 w-0 group-focus-within:w-full"></div>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email"
                    className="absolute top-3 left-4 pointer-events-none text-gray-500 transition-all duration-300 group-focus-within:text-xs group-focus-within:-translate-y-7 group-focus-within:text-purple-400"
                  >
                    Your Email
                  </label>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 w-0 group-focus-within:w-full"></div>
                </div>
              </div>

              <div className="mb-6 relative group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                  placeholder=" "
                />
                <label 
                  htmlFor="subject"
                  className="absolute top-3 left-4 pointer-events-none text-gray-500 transition-all duration-300 group-focus-within:text-xs group-focus-within:-translate-y-7 group-focus-within:text-purple-400"
                >
                  Subject
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 w-0 group-focus-within:w-full"></div>
              </div>

              <div className="mb-6 relative group">
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 min-h-[150px]"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute top-3 left-4 pointer-events-none text-gray-500 transition-all duration-300 group-focus-within:text-xs group-focus-within:-translate-y-7 group-focus-within:text-purple-400"
                >
                  Your Message
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 w-0 group-focus-within:w-full"></div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative overflow-hidden w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <span className="absolute -top-full left-0 w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 transform transition-all duration-300 group-hover:top-0 opacity-30"></span>
              </button>

              {/* Success/Error messages */}
              {submitStatus && (
                <div className={`mt-4 rounded-lg p-4 text-sm ${
                  submitStatus === 'success' 
                    ? 'bg-green-900/20 border border-green-700 text-green-400' 
                    : 'bg-red-900/20 border border-red-700 text-red-400'
                }`}>
                  {submitStatus === 'success'
                    ? 'Your message has been sent successfully! I will get back to you soon.'
                    : 'There was an error sending your message. Please try again later.'}
                </div>
              )}
            </form>
          </div>

          {/* Contact information */}
          <div 
            ref={infoRef}
            className="lg:col-span-2 opacity-0 -translate-x-10 transition-all duration-1000 delay-200"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-purple-500/5 transition-all duration-500 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="contact-item opacity-0 translate-y-4 transition-all duration-700 group">
                  <a href="mailto:your.email@example.com" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      <div className="w-12 h-12 rounded-full border border-gray-700/50 bg-gray-800/50 flex items-center justify-center relative">
                        <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Email</h4>
                      <p className="text-white group-hover:text-purple-300 transition-colors duration-300">your.email@example.com</p>
                    </div>
                  </a>
                </div>

                {/* Phone */}
                <div className="contact-item opacity-0 translate-y-4 transition-all duration-700 group">
                  <a href="tel:+1234567890" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      <div className="w-12 h-12 rounded-full border border-gray-700/50 bg-gray-800/50 flex items-center justify-center relative">
                        <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Phone</h4>
                      <p className="text-white group-hover:text-cyan-300 transition-colors duration-300">+1 (234) 567-890</p>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <div className="contact-item opacity-0 translate-y-4 transition-all duration-700 group">
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      <div className="w-12 h-12 rounded-full border border-gray-700/50 bg-gray-800/50 flex items-center justify-center relative">
                        <svg className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Location</h4>
                      <p className="text-white group-hover:text-pink-300 transition-colors duration-300">Bhopal, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media links */}
              <div className="mt-12">
                <h4 className="text-gray-300 mb-4">Connect with me</h4>
                <div className="flex space-x-5">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item opacity-0 translate-y-4  w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item opacity-0 translate-y-4 transition-all w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-600 duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  
                  {/* Twitter */}
                  <a 
                    href="https://twitter.com/yourhandle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item opacity-0 translate-y-4 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/yourhandle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item opacity-0 translate-y-4 transition-allw-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;