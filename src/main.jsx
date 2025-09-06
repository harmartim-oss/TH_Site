import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

// Add global error handling for better deployment debugging
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

// Check if DOM is ready
const init = () => {
  const rootElement = document.getElementById('root')

  if (!rootElement) {
    console.error('Root element not found - this may indicate a deployment issue')
    document.body.innerHTML = `
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="text-align: center; padding: 2rem;">
          <h1 style="color: #0a2351; margin-bottom: 1rem;">Tim Harmar: Legal and Consulting Services</h1>
          <p style="color: #6b7280; margin-bottom: 1rem;">The application is loading. If this message persists, please contact us directly.</p>
          <p style="color: #6b7280;"><strong>Phone:</strong> +1 (705) 943-5049</p>
          <p style="color: #6b7280;"><strong>Email:</strong> kburton@timharmar.com</p>
        </div>
      </div>
    `
    return
  }

  try {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Failed to render React app:', error)
    rootElement.innerHTML = `
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="text-align: center; padding: 2rem;">
          <h1 style="color: #0a2351; margin-bottom: 1rem;">Tim Harmar: Legal and Consulting Services</h1>
          <p style="color: #6b7280; margin-bottom: 1rem;">There was an issue loading the application. Please contact us directly.</p>
          <p style="color: #6b7280;"><strong>Phone:</strong> +1 (705) 943-5049</p>
          <p style="color: #6b7280;"><strong>Email:</strong> kburton@timharmar.com</p>
        </div>
      </div>
    `
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
