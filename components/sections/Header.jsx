'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Contact', path: '/' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg backdrop-blur-sm py-4' 
          : 'bg-black py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 transition-transform hover:scale-105">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-white to-pink-300 text-transparent bg-clip-text">Portfolio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className={`relative font-medium transition-all duration-200 hover:text-cyan-500 ${
                  pathname === item.path 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300' 
                    : 'text-white'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-300 transition-all duration-300 ${
                    pathname === item.path ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <div 
        className={`md:hidden absolute w-full bg-gradient-to-b from-indigo-900 to-purple-900 shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 max-h-96 py-5' 
            : 'opacity-0 max-h-0 py-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col px-4 space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`py-2 text-center font-medium transition-colors duration-200 ${
                pathname === item.path 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header