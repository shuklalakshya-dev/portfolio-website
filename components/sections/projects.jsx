'use client'
import React, { useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const headingRef = useRef(null);
  const projectsContainerRef = useRef(null);

  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            entry.target.classList.remove('opacity-0', '-translate-y-10');
          }
          
          if (entry.target === projectsContainerRef.current) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-10');
              }, 200 * index);
            });
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (headingRef.current) observer.observe(headingRef.current);
    if (projectsContainerRef.current) observer.observe(projectsContainerRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (projectsContainerRef.current) observer.unobserve(projectsContainerRef.current);
    };
  }, []);

  // Sample project data - replace with your own projects
  const projects = [
    {
      id: 1,
      name: "Nexora (Real time Application Builder)",
      description: "A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe integration.",
      image: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://nexora-bngh.vercel.app/",
      githubUrl: "https://github.com/shuklalakshya-dev/Nexora-final",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"]
    },
    {
      id: 2,
      name: "Health Care Dashboard",
      description: "An AI-powered application that generates creative content using OpenAI's API.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://healthcare-dashboard-virid-phi.vercel.app/",
      githubUrl: "https://github.com/shuklalakshya-dev/healthcare-dashboard",
      tags: ["React", "Node.js", "OpenAI API", "Express"]
    }
  ];

  return (
    <section id="projects" className="relative bg-black py-32 overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-700/10 mix-blend-lighten filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 rounded-full bg-indigo-700/10 mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-cyan-700/10 mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading */}
        <div 
          ref={headingRef} 
          className="opacity-0 -translate-y-10 transition-all duration-1000 mb-20 text-center"
        >
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
         Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Click on a project to see it live or view the source code.
          </p>
        </div>

        {/* Projects grid */}
        <div 
          ref={projectsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card opacity-0 translate-y-10 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 h-full">
                {/* Project Image with Overlay */}
                <div 
                  className="relative h-64 overflow-hidden"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                  
                  {/* Hover buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-500/80 transition-all duration-300 hover:scale-110"
                      aria-label="View live project"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-500/80 transition-all duration-300 hover:scale-110"
                      aria-label="View GitHub repository"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center mt-8">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors duration-300"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors duration-300"
                    >
                      <span>View Code</span>
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more projects button */}
        {/* <div className="text-center mt-16"> */}
          {/* <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"> */}
            {/* View More Projects */}
          {/* </button> */}
        {/* </div> */}
      </div> 
    </section>
  );
};

export default Projects;