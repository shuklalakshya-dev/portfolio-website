'use client'
import React, { useRef, useEffect } from 'react'

const Services = () => {
  // Refs for animation elements
  const headingRef = useRef(null);
  const servicesContainerRef = useRef(null);

  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            entry.target.classList.remove('opacity-0', '-translate-y-10');
          }
          
          if (entry.target === servicesContainerRef.current) {
            const serviceCards = entry.target.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0', 'scale-95');
              }, 200 * index);
            });
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (headingRef.current) observer.observe(headingRef.current);
    if (servicesContainerRef.current) observer.observe(servicesContainerRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (servicesContainerRef.current) observer.unobserve(servicesContainerRef.current);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "UI/UX Development",
      description: "Creating visually stunning and intuitive user interfaces that captivate your audience and enhance user experience.",
      icon: (
        <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
      features: ["Responsive Design", "Interactive Elements", "Modern UI Components", "Brand Consistency"]
    },
    {
      id: 2,
      title: "Full-Stack Development",
      description: "Building complete, robust web applications with seamless front-end and back-end integration for optimal performance.",
      icon: (
        <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      features: ["API Development", "Database Integration", "Authentication Systems", "Performance Optimization"]
    },
    {
      id: 3,
      title: "Custom Web Solutions",
      description: "Tailored web solutions designed specifically for your business needs, helping you establish a strong online presence.",
      icon: (
        <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
      features: ["E-commerce Solutions", "Content Management", "SEO Optimization", "Scalable Architecture"]
    }
  ];

  return (
    <section id="services" className="relative bg-black py-28 overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-indigo-700/10 mix-blend-lighten filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-700/10 mix-blend-lighten filter blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-700/10 mix-blend-lighten filter blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading */}
        <div 
          ref={headingRef} 
          className="opacity-0 -translate-y-10 transition-all duration-1000 mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
          Services
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I help businesses establish a powerful online presence through passionate UI development and full-stack website solutions, transforming your digital vision into reality.
          </p>
        </div>

        {/* Services grid */}
        <div 
          ref={servicesContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card opacity-0 scale-95 transition-all duration-700 h-full"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 h-full group hover:translate-y-[-8px]">
                {/* Service Icon with animated gradient background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-700/50">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-500">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
       
      </div>
    </section>
  );
};

export default Services;