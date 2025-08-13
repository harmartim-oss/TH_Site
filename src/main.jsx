import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Theme initialization
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = savedTheme || (prefersDark ? 'dark' : 'light')
  
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  
  return theme
}

// Initialize theme before React renders
initializeTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
