import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import Skills from '@/components/sections/Skills';
import SplashCursor from '@/components/SplashCursor';

import React from 'react'

const page = () => {
  return (
    <div>
      <SplashCursor/>
      <Header/>
      <HeroSection/>
      <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Services/>
    
      
    </div>
  )
}

export default page;