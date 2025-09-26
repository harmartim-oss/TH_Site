// Safari compatibility utilities

/**
 * Safari-compatible smooth scrolling function
 * Falls back to non-smooth scrolling in older Safari versions
 */
export const safariSmoothScroll = (element, options = {}) => {
  if (!element) return

  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
    ...options
  }

  // Check if smooth scrolling is supported
  if ('scrollBehavior' in document.documentElement.style) {
    // Modern browsers including recent Safari
    element.scrollIntoView(defaultOptions)
  } else {
    // Fallback for older Safari versions - polyfill smooth scrolling
    const start = window.pageYOffset
    const elementTop = element.offsetTop
    const elementHeight = element.offsetHeight
    const windowHeight = window.innerHeight
    const offset = elementTop - Math.max(0, (windowHeight - elementHeight) / 2)
    const distance = offset - start
    const duration = Math.min(1000, Math.abs(distance) * 0.3)
    
    let startTime = null
    
    const scroll = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function (ease-out)
      const ease = 1 - Math.pow(1 - progress, 3)
      
      window.scrollTo(0, start + (distance * ease))
      
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll)
      }
    }
    
    requestAnimationFrame(scroll)
  }
}

/**
 * Safari-compatible smooth scrolling by element ID or selector
 */
export const safariSmoothScrollTo = (selector, options = {}) => {
  const element = typeof selector === 'string' ? document.querySelector(selector) : selector
  if (element) {
    safariSmoothScroll(element, options)
  }
}

/**
 * Safari-compatible requestIdleCallback polyfill
 */
export const safariRequestIdleCallback = (callback, options = {}) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options)
  } else {
    // Safari fallback
    const timeout = options.timeout || 0
    const start = performance.now()
    
    return setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining() {
          return Math.max(0, 50 - (performance.now() - start))
        }
      })
    }, timeout || 1)
  }
}

/**
 * Safari-compatible cancelIdleCallback polyfill
 */
export const safariCancelIdleCallback = (id) => {
  if ('cancelIdleCallback' in window) {
    return window.cancelIdleCallback(id)
  } else {
    return clearTimeout(id)
  }
}

/**
 * Enhanced iOS device detection including iPad Pro in desktop mode
 */
export const isIOSDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  
  // Standard iOS detection
  if (/ipad|iphone|ipod/.test(userAgent)) {
    return true
  }
  
  // iPad Pro on iOS 13+ detection (reports as desktop)
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) {
    return true
  }
  
  // iPad in desktop mode detection
  if (/macintosh/.test(userAgent) && 'ontouchend' in document) {
    return true
  }
  
  return false
}

/**
 * Safari browser detection
 */
export const isSafariBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return /safari/.test(userAgent) && !/chrome|chromium|edge/.test(userAgent)
}
