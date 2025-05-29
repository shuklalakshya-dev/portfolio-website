'use client'
import React, { useEffect, useRef } from 'react'

const Skills = () => {
  // Refs for animation elements
  const headingRef = useRef(null);
  const skillsContainerRef = useRef(null);
  
  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove opacity-0 and transform classes directly instead of adding a new class
          if (entry.target === headingRef.current) {
            entry.target.classList.remove('opacity-0', '-translate-y-10');
          }
          
          if (entry.target === skillsContainerRef.current) {
            // Show each category container
            const categoryContainers = entry.target.querySelectorAll('.skill-category');
            categoryContainers.forEach((container) => {
              container.classList.remove('opacity-0', 'translate-y-10');
            });
            
            // Show each skill item with delay
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0', 'translate-x-8');
              }, 100 * index);
            });
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (headingRef.current) observer.observe(headingRef.current);
    if (skillsContainerRef.current) observer.observe(skillsContainerRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (skillsContainerRef.current) observer.unobserve(skillsContainerRef.current);
    };
  }, []);

  // Skills data
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "NoSQL", "JWT Authentication"]
    },
    {
      title: "Tools & Others",
      skills: ["Git/GitHub",  "Webpack", "Vercel/Netlify",  "Java"]
    }
  ];

  return (
    <section id="skills" className="relative bg-black py-24 overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-indigo-700/10 mix-blend-lighten filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-purple-700/10 mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-cyan-700/10 mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading */}
        <div 
          ref={headingRef} 
          className="opacity-0 -translate-y-10 transition-all duration-1000 mb-16 text-center"
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500"></div>
        </div>

        {/* Skills content */}
        <div 
          ref={skillsContainerRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category opacity-0 translate-y-10 transition-all duration-1000"
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                  {category.title}
                </h3>
                
                <ul className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <li 
                      key={index}
                      className="skill-item opacity-0 translate-x-8 transition-all duration-700"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="group flex items-center">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
                          {skill}
                        </span>
                        <span className="ml-2 h-px flex-grow bg-gradient-to-r from-gray-800 to-transparent group-hover:from-purple-800 group-hover:to-transparent transition-colors duration-300"></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;