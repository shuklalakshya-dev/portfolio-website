'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  // Refs for animated elements
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const contactRef = useRef(null);
  const socialRef = useRef(null);
  
  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all animation elements
    [headingRef, bioRef, contactRef, socialRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      [headingRef, bioRef, contactRef, socialRef].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Social media profiles
  const socialProfiles = [
    { name: 'GitHub', icon: '/github.svg', url: 'https://github.com/shuklalakshya-dev' },
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://www.linkedin.com/in/lakshya-shukla-140983250' },
    { name: 'Twitter', icon: '/icons/twitter.svg', url: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: '/icons/instagram.svg', url: 'https://www.instagram.com/_shuklalakshya?igsh=eXd2N2tudDJjaGp0' },
  ];

  return (
    <section id="about" className="relative bg-black py-12 sm:py-16 md:py-24 overflow-hidden px-4 sm:px-8 md:px-12">
      {/* Background animation elements - more responsive positioning */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-24 sm:-bottom-36 md:-bottom-48 -left-24 sm:-left-36 md:-left-48 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-purple-700/20 blur-3xl"></div>
        <div className="absolute -top-24 sm:-top-36 md:-top-48 -right-24 sm:-right-36 md:-right-48 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-indigo-700/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section heading - improved responsive text sizes */}
        <div 
          ref={headingRef} 
          className="opacity-0 -translate-y-10 transition-all duration-1000 mb-8 sm:mb-10 md:mb-12 text-center"
        >
          <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-3 md:mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500"></div>
        </div>

        {/* More responsive grid with better breakpoints */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-20">
          {/* Bio section - spans full width on mobile/tablet, 2/3 on desktop */}
          <div 
            ref={bioRef} 
            className="col-span-1 lg:col-span-2 opacity-0 translate-x-10 transition-all delay-300"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-xl hover:shadow-purple-500/10 transition-all">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Who I Am</h3>
              
              {/* Responsive paragraph text sizes */}
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
               Hi, I'm Lakshya Shukla – a passionate Full Stack MERN Developer with a knack for building real-time, scalable, and user-centric web applications. I specialize in creating seamless digital experiences using MongoDB, Express.js, React.js, and Node.js, along with Tailwind CSS for modern, responsive UI design.
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                I recently built Nexora – Real-Time Application Builder, a powerful platform that provides an SDK to integrate real-time features like chat, video calling, and media sharing into any web app. This project helped me dive deep into WebSockets, media APIs, and cloud infrastructure, giving me hands-on experience with the kind of tech that powers today's most interactive platforms.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Beyond code, I'm deeply interested in problem-solving, system architecture, and crafting intuitive interfaces that enhance user experience. Whether I'm collaborating on a team or leading a feature from scratch, I thrive on turning ideas into fully functional products.
                <br className="hidden sm:block" />
                Currently, I'm looking for exciting opportunities where I can contribute to impactful projects and grow as a developer. Let's build something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Details section - adjusted for better small screen display */}
          <div className="col-span-1">
            <div 
              ref={contactRef} 
              className="opacity-0 translate-x-10 transition-all duration-1000 delay-600"
            >
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Info</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Location - improved responsive layout */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 bg-gray-800 p-1.5 sm:p-2 rounded-lg mt-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs sm:text-sm text-gray-400 font-medium">Location</span>
                      <span className="block text-sm sm:text-base text-white mt-0.5 sm:mt-1">Saripura Road, Alamnagar, Lucknow, 226017</span>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 bg-gray-800 p-1.5 sm:p-2 rounded-lg mt-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs sm:text-sm text-gray-400 font-medium">Email</span>
                      <a href="mailto:lakshyashukla31@gmail.com" className="block text-sm sm:text-base text-white mt-0.5 sm:mt-1 hover:text-cyan-400 transition-colors break-all">lakshyashukla31@gmail.com</a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 bg-gray-800 p-1.5 sm:p-2 rounded-lg mt-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs sm:text-sm text-gray-400 font-medium">Phone</span>
                      <span className="block text-sm sm:text-base text-white mt-0.5 sm:mt-1">+91 9453805716</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media - responsive grid for different screen sizes */}
            <div 
              ref={socialRef} 
              className="opacity-0 translate-x-10 transition-all duration-1000 delay-900"
            >
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-xl hover:shadow-pink-500/10 transition-all duration-500">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Connect With Me</h3>
                
                {/* Responsive grid that's 1 column on xs screens, 2 columns on sm+ */}
                <div className="grid grid-cols-2 xs:grid-cols-2 gap-2 sm:gap-4">
                  {socialProfiles.map((profile) => (
                    <Link 
                      key={profile.name} 
                      href={profile.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg sm:rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 text-gray-200">
                          {/* Custom SVG based on profile name */}
                          {profile.name === 'GitHub' && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                          )}
                          
                          {profile.name === 'LinkedIn' && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          )}
                          
                          {profile.name === 'Twitter' && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                          )}
                          
                          {profile.name === 'Instagram' && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-gray-300 font-medium text-xs sm:text-sm">{profile.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;