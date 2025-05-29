'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PrelineScript() {
  const path = usePathname()

  useEffect(() => {
    const loadPreline = async () => {
      // Dynamically import Preline
      await import('preline/preline')
      // Initialize Preline components
      window.HSStaticMethods.autoInit()
    }
    
    loadPreline()
  }, [path]) // Re-initialize when path changes

  return null
}