import React, { useState } from 'react'
import {
  AILegalAssistant,
  SmartScheduler,
  DocumentGenerator,
  LegalNewsFeed,
  LegalAssessment,
} from './components/CuttingEdgeFeatures'
import logoImage from './assets/tim_harmar_logo_updated.png'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="Tim Harmar Legal & Consulting Services"
                className="h-12 w-auto md:h-16"
              />
              <div className="ml-4">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  Tim Harmar Legal & Consulting Services
                </h1>
                <p className="text-sm text-blue-600 font-semibold">Excellence in Legal Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-left">
                  Schedule Consultation
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Tim Harmar Legal & Consulting Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Legal Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Award-winning legal expertise from{' '}
              <strong>Tim Harmar Legal & Consulting Services</strong> - specialized in civil
              litigation, privacy law, intellectual property, and business strategy consulting in
              Sault Ste. Marie, Ontario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                onClick={() =>
                  document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Legal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Award-winning legal expertise with cutting-edge solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Civil Litigation',
                description:
                  'Expert representation in complex civil matters with a track record of success.',
                icon: '⚖️',
                detailed:
                  'Our civil litigation practice encompasses comprehensive legal representation for businesses and individuals in complex disputes. We handle contract disputes, tort claims, employment litigation, commercial disputes, and appellate matters. With extensive courtroom experience and strategic case management, we provide aggressive advocacy while exploring cost-effective resolution strategies including mediation and arbitration.',
              },
              {
                title: 'Privacy Law',
                description: 'Comprehensive privacy compliance and data protection strategies.',
                icon: '🔒',
                detailed:
                  'Navigate the complex landscape of Canadian privacy laws including PIPEDA, provincial privacy legislation, and sector-specific regulations. Our services include privacy impact assessments, data breach response protocols, privacy policy development, CASL compliance, cross-border data transfer agreements, and regulatory compliance audits for businesses of all sizes.',
              },
              {
                title: 'Intellectual Property',
                description: 'Protecting your innovations and creative assets in the digital age.',
                icon: '💡',
                detailed:
                  'Comprehensive intellectual property protection including trademark registration and enforcement, copyright matters, trade secret protection, licensing agreements, IP due diligence for mergers and acquisitions, and IP portfolio management. We help businesses protect their most valuable intangible assets and develop strategic IP licensing and monetization strategies.',
              },
              {
                title: 'Business Law',
                description: 'Strategic legal counsel for business growth and compliance.',
                icon: '🏢',
                detailed:
                  'Full-spectrum business law services including corporate formation and governance, shareholder agreements, commercial contracts, regulatory compliance, employment law matters, and corporate restructuring. We serve as outside general counsel for emerging companies and established businesses, providing strategic legal guidance for sustainable growth.',
              },
              {
                title: 'Business Start Up and Strategy',
                description:
                  'Comprehensive legal guidance for entrepreneurs and new business ventures.',
                icon: '🚀',
                detailed:
                  "End-to-end legal support for entrepreneurs launching new ventures including business entity selection and formation, founders' agreements, intellectual property strategy, regulatory compliance roadmaps, employment policies, privacy frameworks, and strategic partnerships. We help startups build solid legal foundations while remaining agile and cost-effective.",
              },
              {
                title: 'Legal Consulting',
                description: 'Strategic advice and risk management for complex legal challenges.',
                icon: '🎯',
                detailed:
                  'Strategic legal consulting for complex business challenges including regulatory compliance reviews, risk assessment and mitigation strategies, legal project management, and specialized advisory services. We provide senior-level legal expertise for organizations requiring sophisticated legal analysis and strategic guidance.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-between">
                  {service.title}
                  <span className="text-sm text-blue-600">
                    {expandedService === index ? '−' : '+'}
                  </span>
                </h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                {expandedService === index && (
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 text-sm leading-relaxed">{service.detailed}</p>
                    <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Schedule Consultation →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated legal professionals are committed to providing exceptional service and
              expertise to every client.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Tim J. Harmar - Featured prominently */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                  <span className="text-2xl">👨‍⚖️</span>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Tim J. Harmar</h3>
                  <p className="text-blue-600 font-bold text-lg">Principal Lawyer & Founder</p>
                </div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg mb-6">
                <p className="font-semibold text-lg">🏆 Award-Winning Legal Excellence</p>
                <p className="text-blue-100">
                  Supreme Court of Canada Experience • 15+ Years Practice
                </p>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Tim Harmar is a distinguished lawyer with extensive experience in civil litigation,
                privacy law, and intellectual property. As the founder of Tim Harmar Legal &
                Consulting Services, he brings award-winning legal expertise and Supreme Court of
                Canada experience to clients throughout Sault Ste. Marie and Northern Ontario. His
                practice focuses on delivering innovative legal solutions with cutting-edge
                technology integration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-lg">🎓</span>
                    <span className="text-gray-700 font-medium">
                      University of Windsor Faculty of Law
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-lg">🎓</span>
                    <span className="text-gray-700 font-medium">
                      York University Osgoode Hall Law School
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-lg">🏆</span>
                    <span className="text-gray-700 font-medium">
                      Supreme Court of Canada Experience
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-lg">⚖️</span>
                    <span className="text-gray-700 font-medium">Civil Litigation Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-lg">🔒</span>
                    <span className="text-gray-700 font-medium">Privacy Law Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-lg">💡</span>
                    <span className="text-gray-700 font-medium">IP Strategy Advisor</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Schedule with Tim
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  View Experience
                </button>
              </div>
            </div>

            {/* Kelly Burton */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 text-white p-2 rounded-lg mr-3">
                  <span className="text-xl">👩‍💼</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Kelly Burton</h3>
                  <p className="text-gray-600 font-semibold">Legal Assistant</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Kelly Burton provides dedicated support as our Legal Assistant, ensuring seamless
                client communication and efficient case management. With expertise in legal research
                and document preparation, Kelly plays a crucial role in our team's success.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-3">📋</span>
                  <span className="text-gray-700 text-sm">Legal research and case management</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-3">📝</span>
                  <span className="text-gray-700 text-sm">
                    Document preparation and coordination
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-3">⚖️</span>
                  <span className="text-gray-700 text-sm">Professional standards excellence</span>
                </div>
              </div>
              <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Kelly
              </button>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Why Choose Tim Harmar Legal?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🏆</span>
                <span className="font-semibold">Award-winning legal expertise</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">💻</span>
                <span className="font-semibold">Cutting-edge legal technology</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">👥</span>
                <span className="font-semibold">Personalized service approach</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🌐</span>
                <span className="font-semibold">Local expertise, global perspective</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Contact us today for a consultation and discover how our legal expertise can help your
              business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:kburton@timharmar.com" className="text-blue-400 hover:text-blue-300">
                kburton@timharmar.com
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+17059435049" className="text-blue-400 hover:text-blue-300">
                +1 (705) 943-5049
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">
                Sault Ste. Marie
                <br />
                Ontario, Canada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Tim Harmar Legal & Consulting Services</h3>
              <p className="text-gray-400 mb-4">
                Providing expert legal solutions in civil litigation, privacy law, intellectual
                property, and business startup consulting.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/tim-harmar-legal-consulting-services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Civil Litigation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Law
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Intellectual Property
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Business Start Up & Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sault Ste. Marie, ON</li>
                <li>+1 (705) 943-5049</li>
                <li>kburton@timharmar.com</li>
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
  )
}
