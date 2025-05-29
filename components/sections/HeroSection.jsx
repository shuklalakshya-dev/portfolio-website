'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
  const router = useRouter();
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  // Animation for floating effect with device detection
  useEffect(() => {
    // Only apply parallax effect on devices that aren't mobile
    const isMobile = window.innerWidth <= 768;
    
    const handleMouseMove = (e) => {
      if (!imageRef.current || isMobile) return;
      
      const { clientX, clientY } = e;
      const xPos = (window.innerWidth / 2 - clientX) / 30;
      const yPos = (window.innerHeight / 2 - clientY) / 30;
      
      imageRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Text reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.1 });
    
    [nameRef, roleRef, descRef, btnRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      [nameRef, roleRef, descRef, btnRef].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  const handleContactClick = (e) => {
    e.preventDefault();
    console.log("Contact link clicked, navigating programmatically");
    router.push('/contact');
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden px-3 sm:px-5">
      {/* Animated background elements - adjusted for better mobile view */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/5 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-indigo-500 mix-blend-lighten filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/5 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-pink-500 mix-blend-lighten filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-cyan-500 mix-blend-lighten filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center px-3 sm:px-10">
          {/* Content Column */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div ref={nameRef} className="opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Lakshya Shukla
              </h1>
            </div>
            
            <div ref={roleRef} className="opacity-0 translate-y-8 transition-all duration-700 delay-500">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-4 sm:mb-6">
                Frontend Developer & UI Designer
              </h2>
            </div>
            
            <div ref={descRef} className="opacity-0 translate-y-8 transition-all duration-700 delay-700">
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                Crafting beautiful digital experiences with clean code and creative design solutions. Passionate about creating responsive, accessible, and performant web applications.
              </p>
            </div>
            
            <div ref={btnRef} className="opacity-0 translate-y-8 transition-all duration-700 delay-900">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={handleContactClick}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 inline-block text-center"
                >
                  Contact Me
                </button> 
              </div> 
            </div>
          </div>
          
          {/* Image Column - improved responsive padding */}
          <div className="order-1 md:order-2 px-4 sm:px-10 md:px-16 lg:px-20 mb-8 md:mb-0">
            <div className="relative mx-auto md:mx-0 max-w-xs sm:max-w-sm md:max-w-md">
          
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-indigo-500/40 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-2 border-pink-500/40 rounded-full animate-spin-slow-reverse"></div>
              </div>
              
              {/* Floating image container - responsive sizing */}
              <div ref={imageRef} className="relative z-10 animate-float">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 transition duration-500">
                  <div className="w-full h-full relative bg-gradient-to-tr from-indigo-600 to-purple-600 p-2 rounded-3xl">
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                      <Image
                        src="/profile.jpg" 
                        alt="Lakshya Shukla - Profile" 
                        width={400} 
                        height={400}
                        className="w-full h-4/3 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements - responsive positioning */}
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-14 sm:w-20 h-14 sm:h-20 bg-pink-500 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
                <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-16 sm:w-24 h-16 sm:h-24 bg-indigo-500 rounded-full blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
                
                {/* Geometric shapes - hidden on smallest screens */}
                <div className="hidden sm:block absolute -right-12 top-1/3 w-8 h-8 border-4 border-indigo-400 rounded-lg animate-bounce-slow"></div>
                <div className="hidden sm:block absolute -left-10 bottom-1/4 w-6 h-6 bg-purple-400 rounded-full animate-bounce-slow animation-delay-1000"></div>
                <div className="hidden sm:block absolute right-1/4 -bottom-6 w-10 h-10 border-4 border-pink-400 rounded-full animate-bounce-slow animation-delay-3000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;