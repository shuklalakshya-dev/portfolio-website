'use client'
import React, { useEffect, useRef } from 'react'

const Education = () => {
  // Refs for animation elements
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  
  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe heading and cards
    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Education data
  const educationData = [
    {
      level: "High School",
      institution: "Greenfields School",
      year: "2019-2020",
      marks: "89.9%",
      description: "ICSE Board",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v10" />
        </svg>
      )
    },
    {
      level: "Graduation",
      institution: "Babu Banarasi Das University",
      year: "2022-2025",
      marks: "78.9%",
      description: "Bachelor of Technology in Computer Science",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v10" />
        </svg>
      )
    },
    {
      level: "Intermediate",
      institution: "Greenfields School",
      year: "2021-2022",
      marks: "89%",
      description: "ISC Board (Science Stream)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
    
  ];

  return (
    <section id="education" className="relative bg-black py-24 overflow-hidden ">
      {/* Background animation elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-900/20 mix-blend-lighten filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/20 mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading */}
        <div 
          ref={headingRef} 
          className="opacity-0 -translate-y-10 transition-all duration-1000 mb-16 text-center"
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
         Education
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500"></div>
        </div>

        {/* Timeline connector */}
         <div className="hidden lg:block absolute left-1/2 top-[15rem] bottom-24 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-pink-500/30 z-0"></div> 
        
        {/* Education Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-15 relative">
          {educationData.map((item, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`opacity-0 transition-all  ${
                index === 0 ? '-translate-x-10 delay-300' : 
                index === 1 ? 'translate-y-10 delay-600' : 
                'translate-x-10 delay-900'
              }`}
            >
              <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl group hover:bg-gray-800/60 transition-all h-full flex flex-col">
                {/* Animated dot for timeline */}
                <div className="hidden lg:block absolute w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 left-1/2 -ml-[10px] -translate-x-1/2 top-0 -translate-y-1/2 z-10 shadow-glow"></div>
                
                {/* Card content */}
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 rounded-lg bg-gray-800/70 group-hover:bg-gray-700/70 transition-colors ">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-500 transition-all">
                      {item.level}
                    </h3>
                    <p className="text-gray-400 mt-1">{item.year}</p>
                  </div>
                </div>
                
                <div className="grow">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-200 mb-1">{item.institution}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <span className="text-sm text-gray-400">Achievement</span>
                    <div className="flex items-center mt-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                        {item.marks}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -right-3 -bottom-3 w-24 h-24 rounded-br-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline dots */}
      <div className="hidden lg:block absolute left-1/2 top-[15rem] -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 animate-pulse-slow"></div>
      <div className="hidden lg:block absolute left-1/2 bottom-24 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-400 animate-pulse-slow animation-delay-2000"></div>
    </section>
  );
};

export default Education;