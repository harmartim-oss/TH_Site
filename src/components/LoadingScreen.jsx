import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

const LoadingScreen = ({ message = "Loading Tim Harmar Legal Services..." }) => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-surface-default flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Loader2 className="w-8 h-8 text-brand-accent animate-spin" />
        </div>
        
        <h2 className="text-xl font-semibold text-brand-primary mb-2">
          {message}{dots}
        </h2>
        
        <p className="text-text-secondary max-w-sm">
          Please wait while we prepare your legal services experience.
        </p>
        
        <div className="mt-8">
          <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-accent to-brand-accent/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen