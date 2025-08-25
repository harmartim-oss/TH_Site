import React, { useState } from 'react';
import { 
  AILegalAssistant, 
  SmartScheduler, 
  DocumentGenerator, 
  LegalNewsFeed, 
  LegalAssessment 
} from './components/CuttingEdgeFeatures';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Skip Navigation Links for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Skip to main content
      </a>
      
      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-40" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <img 
                src="/tim_harmar_logo_updated.png" 
                alt="Tim Harmar Legal & Consulting Services Logo" 
                className="h-12 w-auto md:h-16"
                loading="eager"
              />
              <div className="ml-4 hidden md:block">
                <h1 className="text-xl font-bold text-gray-900">Tim Harmar Legal & Consulting Services</h1>
                <p className="text-sm text-gray-600">Excellence in Legal Solutions</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
                aria-label="Navigate to Services section"
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
                aria-label="Navigate to About section"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
                aria-label="Navigate to Contact section"
              >
                Contact
              </a>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                aria-label="Schedule a consultation"
              >
                Schedule Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200" id="mobile-menu">
              <nav className="flex flex-col space-y-4 pt-4" role="navigation" aria-label="Mobile navigation">
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Navigate to Services section"
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Navigate to About section"
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Navigate to Contact section"
                >
                  Contact
                </a>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                  aria-label="Schedule a consultation"
                >
                  Schedule Consultation
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main id="main-content">
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32" role="banner" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
                Expert Legal Solutions for Your Business
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Specialized expertise in civil litigation, privacy law, intellectual property, 
                and economic development consulting in Sault Ste. Marie, Ontario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  aria-label="Schedule a free consultation"
                >
                  Schedule Free Consultation
                </button>
                <button 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  aria-label="Learn more about our services"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Legal Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Award-winning legal expertise with cutting-edge solutions for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" role="list">
              {[
                {
                  title: "Civil Litigation",
                  description: "Expert representation in complex civil matters with a track record of success.",
                  icon: "⚖️",
                  iconAlt: "Scales of justice icon"
                },
                {
                  title: "Privacy Law",
                  description: "Comprehensive privacy compliance and data protection strategies.",
                  icon: "🔒",
                  iconAlt: "Lock icon representing privacy and security"
                },
                {
                  title: "Intellectual Property",
                  description: "Protecting your innovations and creative assets in the digital age.",
                  icon: "💡",
                  iconAlt: "Light bulb icon representing innovation"
                },
                {
                  title: "Business Law",
                  description: "Strategic legal counsel for business growth and compliance.",
                  icon: "🏢",
                  iconAlt: "Office building icon representing business"
                },
                {
                  title: "Economic Development",
                  description: "Consulting services for community and business development initiatives.",
                  icon: "📈",
                  iconAlt: "Chart icon representing growth"
                },
                {
                  title: "Legal Consulting",
                  description: "Strategic advice and risk management for complex legal challenges.",
                  icon: "🎯",
                  iconAlt: "Target icon representing strategic focus"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-300" 
                  role="listitem"
                >
                  <div className="text-4xl mb-4" role="img" aria-label={service.iconAlt}>{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Innovative Legal Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the future of legal services with our cutting-edge tools and assessments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <LegalAssessment />
              <DocumentGenerator />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <LegalNewsFeed />
              <SmartScheduler />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet Tim J. Harmar
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With extensive experience in civil litigation, privacy law, and intellectual property, 
                  Tim Harmar brings award-winning legal expertise to Sault Ste. Marie and surrounding areas.
                </p>
                <div className="space-y-4" role="list">
                  <div className="flex items-center" role="listitem">
                    <span className="text-blue-600 mr-3" role="img" aria-label="Education icon">🎓</span>
                    <span>University of Windsor Faculty of Law</span>
                  </div>
                  <div className="flex items-center" role="listitem">
                    <span className="text-blue-600 mr-3" role="img" aria-label="Education icon">🎓</span>
                    <span>York University Osgoode Hall Law School</span>
                  </div>
                  <div className="flex items-center" role="listitem">
                    <span className="text-blue-600 mr-3" role="img" aria-label="Achievement icon">🏆</span>
                    <span>Supreme Court of Canada Experience</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Tim Harmar Legal?</h3>
                <ul className="space-y-3" role="list">
                  <li className="flex items-center" role="listitem">
                    <span className="mr-3" role="img" aria-label="Check mark">✓</span>
                    Award-winning legal expertise
                  </li>
                  <li className="flex items-center" role="listitem">
                    <span className="mr-3" role="img" aria-label="Check mark">✓</span>
                    Cutting-edge legal technology
                  </li>
                  <li className="flex items-center" role="listitem">
                    <span className="mr-3" role="img" aria-label="Check mark">✓</span>
                    Personalized service approach
                  </li>
                  <li className="flex items-center" role="listitem">
                    <span className="mr-3" role="img" aria-label="Check mark">✓</span>
                    Local expertise, global perspective
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 text-white" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Contact us today for a consultation and discover how our legal expertise can help your business thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" role="list">
              <div className="bg-gray-800 p-6 rounded-xl" role="listitem">
                <div className="text-4xl mb-4" role="img" aria-label="Email icon">📧</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:tharmar@timharmar.com" 
                  className="text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
                  aria-label="Send email to tharmar@timharmar.com"
                >
                  tharmar@timharmar.com
                </a>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl" role="listitem">
                <div className="text-4xl mb-4" role="img" aria-label="Phone icon">📞</div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a 
                  href="tel:+17059993657" 
                  className="text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-2 py-1"
                  aria-label="Call +1 (705) 999-3657"
                >
                  +1 (705) 999-3657
                </a>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl" role="listitem">
                <div className="text-4xl mb-4" role="img" aria-label="Location icon">📍</div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">
                  Sault Ste. Marie<br />
                  Ontario, Canada
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Tim Harmar Legal & Consulting Services</h3>
              <p className="text-gray-400 mb-4">
                Providing expert legal solutions in civil litigation, privacy law, intellectual property, 
                and economic development consulting.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/tim-harmar-legal-consulting-services" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-2 py-1"
                  aria-label="Visit Tim Harmar Legal & Consulting Services LinkedIn page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li role="listitem">
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-1"
                    aria-label="Learn more about Civil Litigation services"
                  >
                    Civil Litigation
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-1"
                    aria-label="Learn more about Privacy Law services"
                  >
                    Privacy Law
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-1"
                    aria-label="Learn more about Intellectual Property services"
                  >
                    Intellectual Property
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-1"
                    aria-label="Learn more about Business Law services"
                  >
                    Business Law
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li role="listitem">Sault Ste. Marie, ON</li>
                <li role="listitem">
                  <a 
                    href="tel:+17059993657"
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-1"
                    aria-label="Call +1 (705) 999-3657"
                  >
                    +1 (705) 999-3657
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="mailto:tharmar@timharmar.com"
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-1"
                    aria-label="Send email to tharmar@timharmar.com"
                  >
                    tharmar@timharmar.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tim Harmar Legal & Consulting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant Chat Widget */}
      <AILegalAssistant />
    </div>
  );
}
