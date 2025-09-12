import { useEffect } from 'react'

export const usePerformanceOptimizations = (deviceInfo) => {
  useEffect(() => {
    // Reduce animations for mobile devices to improve performance
    if (deviceInfo.isMobile) {
      const style = document.createElement('style')
      style.textContent = `
        /* Mobile performance optimizations */
        @media (max-width: 768px) {
          .animate-float-enhanced {
            animation: none;
          }
          
          .animate-logo-glow {
            animation: none;
          }
          
          * {
            will-change: auto !important;
          }
          
          .service-card:hover {
            transform: translateY(-2px) scale(1.01);
          }
        }
        
        /* Optimize for touch devices */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-105:hover {
            transform: scale(1.02);
          }
          
          .hover\\:shadow-large:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          }
        }
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [deviceInfo.isMobile])

  useEffect(() => {
    // Preload critical resources
    const preloadLink = document.createElement('link')
    preloadLink.rel = 'preload'
    preloadLink.href = '/src/assets/tim_harmar_logo_updated.png'
    preloadLink.as = 'image'
    document.head.appendChild(preloadLink)

    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink)
      }
    }
  }, [])

  useEffect(() => {
    // Lazy load non-critical animations
    if (!deviceInfo.isMobile && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Enable enhanced animations for desktop when idle
        document.body.classList.add('enhanced-animations-enabled')
      })
    }
  }, [deviceInfo.isMobile])
}

export const optimizeForDevice = (deviceInfo) => {
  return {
    // Image loading strategy
    imageLoading: deviceInfo.isMobile ? 'lazy' : 'eager',
    
    // Animation preferences
    animationsEnabled: !deviceInfo.isMobile || deviceInfo.hasHover,
    
    // Touch optimizations
    touchOptimized: deviceInfo.isTouchDevice,
    
    // Performance mode
    performanceMode: deviceInfo.isMobile ? 'optimized' : 'enhanced',
  }
}