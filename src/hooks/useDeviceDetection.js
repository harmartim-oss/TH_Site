import { useState, useEffect } from 'react'

export const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouchDevice: false,
    screenSize: 'unknown',
    orientation: 'unknown',
    hasHover: false,
    userAgent: '',
    isIOSDevice: false,
    isAndroidDevice: false,
  })

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const hasHover = window.matchMedia('(hover: hover)').matches

      // Screen size detection
      const width = window.innerWidth
      const height = window.innerHeight

      let screenSize = 'mobile'
      let _isMobile = true
      let _isTablet = false
      let _isDesktop = false

      if (width >= 1024) {
        screenSize = 'desktop'
        _isDesktop = true
        _isMobile = false
      } else if (width >= 768) {
        screenSize = 'tablet'
        _isTablet = true
        _isMobile = false
      }

      // More specific mobile detection
      const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/
      const isReallyMobile = mobileKeywords.test(userAgent) || (width < 768 && isTouchDevice)

      // Final device classification
      const finalIsMobile = isReallyMobile
      const finalIsDesktop = !isReallyMobile && width >= 1024
      const finalIsTablet = !isReallyMobile && width >= 768 && width < 1024

      const orientation = height > width ? 'portrait' : 'landscape'

      // Device-specific detection
      const isIOSDevice = /ipad|iphone|ipod/.test(userAgent)
      const isAndroidDevice = /android/.test(userAgent)

      setDeviceInfo({
        isMobile: finalIsMobile,
        isTablet: finalIsTablet,
        isDesktop: finalIsDesktop,
        isTouchDevice,
        screenSize,
        orientation,
        hasHover,
        userAgent,
        isIOSDevice,
        isAndroidDevice,
      })
    }

    // Initial check
    checkDevice()

    // Listen for resize events
    const handleResize = () => {
      checkDevice()
    }

    // Listen for orientation change
    const handleOrientationChange = () => {
      setTimeout(checkDevice, 100) // Small delay to get accurate dimensions
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])

  return deviceInfo
}

// Additional utility functions for responsive behavior
export const getResponsiveClassName = (deviceInfo, classes) => {
  const { isMobile, isTablet, isDesktop, isTouchDevice } = deviceInfo

  let className = classes.base || ''

  if (isMobile && classes.mobile) {
    className += ` ${classes.mobile}`
  }

  if (isTablet && classes.tablet) {
    className += ` ${classes.tablet}`
  }

  if (isDesktop && classes.desktop) {
    className += ` ${classes.desktop}`
  }

  if (isTouchDevice && classes.touch) {
    className += ` ${classes.touch}`
  }

  if (!isTouchDevice && classes.noTouch) {
    className += ` ${classes.noTouch}`
  }

  return className.trim()
}
