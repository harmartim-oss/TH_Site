import React, { useState } from 'react'
import {
  AILegalAssistant,
  SmartScheduler,
  LegalResourcesLibrary,
  LegalNewsFeed,
  LegalAssessment,
} from './components/CuttingEdgeFeatures'
import {
  Scale,
  Shield,
  Lightbulb,
  Building2,
  Rocket,
  Target,
  Award,
  Monitor,
  Users,
  Globe,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText,
  UserCheck,
  User,
  ExternalLink,
} from 'lucide-react'
import logoImage from './assets/tim_harmar_logo_updated.png'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState(null)
  const [showTimBio, setShowTimBio] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-medium sticky top-0 z-40 border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="Tim Harmar: Legal and Consulting Services"
                className="h-12 w-auto md:h-16 drop-shadow-sm"
              />
              <div className="ml-4">
                <h1 className="text-xl md:text-2xl font-bold text-primary-900 font-heading">
                  Tim Harmar: Legal and Consulting Services
                </h1>
                <p className="text-sm text-accent-600 font-semibold tracking-wide">
                  Excellence in Legal Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              <a
                href="#services"
                className="text-secondary-700 hover:text-primary-800 font-medium transition-all duration-300 hover:scale-105 relative group"
                aria-label="Navigate to services section"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-secondary-700 hover:text-primary-800 font-medium transition-all duration-300 hover:scale-105 relative group"
                aria-label="Navigate to about section"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-secondary-700 hover:text-primary-800 font-medium transition-all duration-300 hover:scale-105 relative group"
                aria-label="Navigate to contact section"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 border border-accent-400"
                onClick={() =>
                  (window.location.href =
                    'mailto:kburton@timharmar.com?subject=Schedule Consultation&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
                }
                aria-label="Schedule consultation via email"
              >
                <Calendar className="inline-block w-4 h-4 mr-2" aria-hidden="true" />
                Schedule Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl text-secondary-700 hover:text-primary-800 hover:bg-primary-100 focus:outline-none transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 border-t border-primary-200 bg-gradient-to-br from-primary-50 to-white shadow-large">
              <nav className="flex flex-col space-y-2 pt-6">
                <a
                  href="#services"
                  className="text-secondary-700 hover:text-primary-800 font-medium py-3 px-4 rounded-xl hover:bg-primary-100 transition-all duration-300 mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-secondary-700 hover:text-primary-800 font-medium py-3 px-4 rounded-xl hover:bg-primary-100 transition-all duration-300 mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-secondary-700 hover:text-primary-800 font-medium py-3 px-4 rounded-xl hover:bg-primary-100 transition-all duration-300 mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 mx-2 mt-4"
                  onClick={() =>
                    (window.location.href =
                      'mailto:kburton@timharmar.com?subject=Schedule Consultation&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
                  }
                >
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Schedule Consultation
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 to-secondary-900/40"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-bounce-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-trust-500/10 rounded-full blur-3xl animate-bounce-subtle delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent-400/5 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Prominent Logo Display */}
            <div className="mb-12 flex justify-center animate-fade-in">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-glow-lg">
                <img
                  src={logoImage}
                  alt="Tim Harmar: Legal and Consulting Services Logo"
                  className="h-24 w-auto md:h-32 mx-auto mb-4 drop-shadow-sm"
                />
                <div className="text-primary-900">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-2">
                    Tim Harmar: Legal and Consulting Services
                  </h3>
                  <p className="text-accent-600 font-semibold text-lg tracking-wide">
                    Excellence in Legal Solutions
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight animate-slide-up">
              Expert Legal Solutions for Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400 drop-shadow-sm">
                {' '}
                Business
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-primary-100 animate-slide-up delay-100">
              Award-winning legal expertise specialized in civil litigation, privacy and
              cybersecurity law, intellectual property, and business strategy consulting in Sault
              Ste. Marie, Ontario.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-200">
              <button
                className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-accent-400/30 hover:border-accent-300/50 hover:shadow-glow-lg active:scale-95"
                onClick={() =>
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }
                aria-label="Navigate to contact section to schedule a free consultation"
              >
                <Calendar
                  className="inline-block w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300"
                  aria-hidden="true"
                />
                Schedule Free Consultation
              </button>
              <button
                className="group border-2 border-white/80 hover:border-accent-400 text-white hover:text-primary-900 bg-transparent hover:bg-white/90 px-10 py-5 rounded-2xl font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-glow active:scale-95"
                onClick={() =>
                  document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
                }
                aria-label="Navigate to services section to explore our legal services"
              >
                <Scale
                  className="inline-block w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300"
                  aria-hidden="true"
                />
                Explore Our Legal Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-heading">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Award-winning legal expertise with cutting-edge solutions for your business needs.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto mt-6 rounded-full shadow-glow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Civil Litigation',
                description:
                  'Expert representation in complex civil matters with a track record of success.',
                icon: Scale,
                color: 'from-primary-600 to-primary-700',
                detailed:
                  'Our civil litigation practice encompasses comprehensive legal representation for businesses and individuals in complex disputes. We handle contract disputes, tort claims, employment litigation, commercial disputes, and appellate matters. With extensive courtroom experience and strategic case management, we provide aggressive advocacy while exploring cost-effective resolution strategies including mediation and arbitration.',
              },
              {
                title: 'Privacy and Cybersecurity Law',
                description:
                  'Comprehensive privacy compliance, data protection, and cybersecurity strategies.',
                icon: Shield,
                color: 'from-trust-600 to-trust-700',
                detailed:
                  'Navigate the complex landscape of Canadian privacy and cybersecurity laws including PIPEDA, provincial privacy legislation, and sector-specific regulations. Our services include privacy impact assessments, data breach response protocols, privacy policy development, CASL compliance, cross-border data transfer agreements, cybersecurity compliance audits, incident response planning, and regulatory compliance guidance for businesses of all sizes in the digital age.',
              },
              {
                title: 'Intellectual Property',
                description: 'Protecting your innovations and creative assets in the digital age.',
                icon: Lightbulb,
                color: 'from-accent-500 to-accent-600',
                detailed:
                  'Comprehensive intellectual property protection including trademark registration and enforcement, copyright matters, trade secret protection, licensing agreements, IP due diligence for mergers and acquisitions, and IP portfolio management. We help businesses protect their most valuable intangible assets and develop strategic IP licensing and monetization strategies.',
              },
              {
                title: 'Business Law',
                description: 'Strategic legal counsel for business growth and compliance.',
                icon: Building2,
                color: 'from-secondary-600 to-secondary-700',
                detailed:
                  'Full-spectrum business law services including corporate formation and governance, shareholder agreements, commercial contracts, regulatory compliance, employment law matters, and corporate restructuring. We serve as outside general counsel for emerging companies and established businesses, providing strategic legal guidance for sustainable growth.',
              },
              {
                title: 'Business Start Up and Strategy',
                description:
                  'Comprehensive legal guidance for entrepreneurs and new business ventures.',
                icon: Rocket,
                color: 'from-primary-700 to-primary-800',
                detailed:
                  "End-to-end legal support for entrepreneurs launching new ventures including business entity selection and formation, founders' agreements, intellectual property strategy, regulatory compliance roadmaps, employment policies, privacy frameworks, and strategic partnerships. We help startups build solid legal foundations while remaining agile and cost-effective.",
              },
              {
                title: 'Legal Consulting',
                description: 'Strategic advice and risk management for complex legal challenges.',
                icon: Target,
                color: 'from-accent-600 to-accent-700',
                detailed:
                  'Strategic legal consulting for complex business challenges including regulatory compliance reviews, risk assessment and mitigation strategies, legal project management, and specialized advisory services. We provide senior-level legal expertise for organizations requiring sophisticated legal analysis and strategic guidance.',
              },
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-500 cursor-pointer border border-primary-100 hover:border-accent-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium hover:shadow-glow`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center justify-between font-heading">
                    {service.title}
                    <span className="text-accent-600 group-hover:text-accent-700 transition-colors">
                      {expandedService === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">{service.description}</p>
                  {expandedService === index && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border-l-4 border-accent-500 animate-slide-down">
                      <p className="text-secondary-700 leading-relaxed mb-4">{service.detailed}</p>
                      <button
                        className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-medium hover:shadow-glow"
                        onClick={() =>
                          (window.location.href = `mailto:kburton@timharmar.com?subject=Consultation Request - ${service.title}&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation regarding ${service.title}.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!`)
                        }
                      >
                        <Calendar className="inline-block w-4 h-4 mr-2" />
                        Schedule Consultation
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-heading">
              Innovative Legal Technology
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Experience the future of legal services with our cutting-edge tools and assessments.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto mt-4 rounded-full shadow-glow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <LegalAssessment />
            <LegalResourcesLibrary />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LegalNewsFeed />
            <SmartScheduler />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-heading">
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated legal professionals are committed to providing exceptional service and
              expertise to every client.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto mt-6 rounded-full shadow-glow"></div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
            {/* Tim J. Harmar - Featured prominently */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary-50 to-accent-50 p-10 rounded-3xl border-2 border-accent-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white p-4 rounded-xl mr-6 shadow-medium hover:shadow-glow transition-all duration-300">
                  <Scale className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-900 font-heading">
                    Tim J. Harmar
                  </h3>
                  <p className="text-accent-600 font-bold text-xl">Principal Lawyer & Founder</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-6 rounded-xl mb-8 shadow-medium hover:shadow-glow transition-all duration-300">
                <p className="font-bold text-xl flex items-center mb-2">
                  <Award className="w-6 h-6 mr-3" />
                  Award-Winning Legal Excellence
                </p>
                <p className="text-accent-100 text-lg">
                  Supreme Court of Canada Experience • 15+ Years Practice
                </p>
              </div>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Tim Harmar is a distinguished lawyer with extensive experience in civil litigation,
                privacy and cybersecurity law, and intellectual property. As the founder of Tim
                Harmar: Legal and Consulting Services, he brings award-winning legal expertise and
                Supreme Court of Canada experience to clients throughout Sault Ste. Marie and
                Northern Ontario. His practice focuses on delivering innovative legal solutions with
                cutting-edge technology integration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <GraduationCap className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      University of Windsor Faculty of Law
                    </span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <GraduationCap className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      York University Osgoode Hall Law School
                    </span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Award className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">
                      Supreme Court of Canada Experience
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Scale className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-gray-700 font-medium">Civil Litigation Specialist</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Shield className="text-primary-600 mr-3 w-5 h-5" />
                    <span className="text-secondary-700 font-medium">
                      Privacy & Cybersecurity Expert
                    </span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                    <Lightbulb className="text-accent-600 mr-3 w-5 h-5" />
                    <span className="text-secondary-700 font-medium">IP Strategy Advisor</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mb-8">
                <button
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                  onClick={() =>
                    (window.location.href =
                      'mailto:kburton@timharmar.com?subject=Schedule Consultation with Tim Harmar&body=Hello,%0D%0A%0D%0AI would like to schedule a consultation with Tim Harmar.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!')
                  }
                >
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Schedule with Tim
                </button>
                <button
                  className="border-2 border-accent-500 text-accent-600 hover:text-accent-700 px-6 py-3 rounded-xl hover:bg-accent-50 hover:border-accent-600 transition-all duration-300 font-semibold transform hover:scale-105"
                  onClick={() => setShowTimBio(!showTimBio)}
                >
                  <User className="inline-block w-4 h-4 mr-2" />
                  {showTimBio ? 'Hide Bio' : 'Read Full Bio'}
                </button>
              </div>

              {/* Expanded Bio Section */}
              {showTimBio && (
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border-2 border-accent-200 shadow-xl mb-8 animate-slide-down">
                  <div className="flex items-center mb-6">
                    <User className="w-8 h-8 text-accent-600 mr-4" />
                    <h4 className="text-2xl font-bold text-primary-900 font-heading">
                      Professional Biography - Tim J. Harmar
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          Educational Background
                        </h5>
                        <div className="space-y-3 text-gray-700">
                          <p>
                            <strong>University of Windsor Faculty of Law (J.D.)</strong>
                            <br />
                            Graduated with distinction, focusing on civil litigation and
                            constitutional law.
                          </p>
                          <p>
                            <strong>York University Osgoode Hall Law School (LL.M.)</strong>
                            <br />
                            Advanced studies in intellectual property and privacy law, with
                            specialized focus on technology law.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          Professional Recognition
                        </h5>
                        <div className="space-y-2 text-gray-700">
                          <p>• Supreme Court of Canada counsel designation</p>
                          <p>• Award-winning legal practitioner recognized for excellence</p>
                          <p>• Featured speaker at Canadian privacy law conferences</p>
                          <p>• Certified in advanced cybersecurity law frameworks</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <Scale className="w-5 h-5 mr-2" />
                          Practice Areas & Expertise
                        </h5>
                        <div className="space-y-2 text-gray-700">
                          <p>
                            <strong>Civil Litigation:</strong> Complex commercial disputes, contract
                            litigation, and appellate practice with a proven track record in both
                            trial and appellate courts.
                          </p>
                          <p>
                            <strong>Privacy & Cybersecurity Law:</strong> PIPEDA compliance, data
                            breach response, cross-border data transfers, and emerging cybersecurity
                            regulations.
                          </p>
                          <p>
                            <strong>Intellectual Property:</strong> Trademark strategy, copyright
                            protection, trade secrets, and IP licensing for technology companies.
                          </p>
                          <p>
                            <strong>Business Law:</strong> Corporate governance, regulatory
                            compliance, and strategic legal consulting for emerging businesses.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-xl font-bold text-primary-600 mb-3 flex items-center">
                          <Building2 className="w-5 h-5 mr-2" />
                          Professional Philosophy
                        </h5>
                        <p className="text-gray-700 italic">
                          "My approach combines traditional legal excellence with innovative
                          technology solutions. I believe in providing clients with not just legal
                          advice, but strategic guidance that positions them for long-term success
                          in an increasingly complex regulatory environment."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white rounded-xl border border-primary-200">
                    <h5 className="text-lg font-bold text-gray-900 mb-3">
                      Community Involvement & Leadership
                    </h5>
                    <p className="text-gray-700">
                      Tim is actively involved in the Northern Ontario legal community, serving as a
                      mentor to young lawyers and contributing to legal education initiatives. He
                      regularly provides pro bono services to local non-profits and startups,
                      demonstrating his commitment to supporting economic development in Sault Ste.
                      Marie and the surrounding region.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Kelly Burton */}
            <div className="bg-gradient-to-br from-trust-50 to-primary-50 p-8 rounded-2xl border border-trust-200 shadow-medium hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-up delay-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-trust-600 to-trust-700 text-white p-3 rounded-xl mr-4 shadow-medium hover:shadow-glow transition-all duration-300">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 font-heading">Kelly Burton</h3>
                  <p className="text-trust-600 font-semibold text-lg">Legal Assistant</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Kelly Burton provides dedicated support as our Legal Assistant, ensuring seamless
                client communication and efficient case management. With expertise in legal research
                and document preparation, Kelly plays a crucial role in our team's success.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <FileText className="text-trust-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Legal research and case management
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <FileText className="text-trust-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Document preparation and coordination
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Scale className="text-trust-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Professional standards excellence
                  </span>
                </div>
              </div>
              <button
                className="w-full bg-gradient-to-r from-trust-600 to-trust-700 hover:from-trust-700 hover:to-trust-800 text-white px-4 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                onClick={() => (window.location.href = 'mailto:kburton@timharmar.com')}
              >
                <Mail className="inline-block w-4 h-4 mr-2" />
                Contact Kelly
              </button>
            </div>

            {/* Josh Ochoa */}
            <div className="bg-gradient-to-br from-accent-50 to-secondary-50 p-8 rounded-2xl border border-accent-200 shadow-medium hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-up delay-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-accent-600 to-accent-700 text-white p-3 rounded-xl mr-4 shadow-medium hover:shadow-glow transition-all duration-300">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 font-heading">Josh Ochoa</h3>
                  <p className="text-accent-600 font-semibold text-lg">Office Administrator</p>
                </div>
              </div>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Josh Ochoa serves as our Office Administrator, providing essential administrative
                support and ensuring smooth daily operations. With expertise in office management
                and client relations, Josh maintains our high standards of professional service and
                organizational excellence.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Building2 className="text-accent-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Office operations and administration
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Phone className="text-accent-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Client relations and communication
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-soft">
                  <Monitor className="text-accent-600 mr-3 w-4 h-4" />
                  <span className="text-secondary-700 text-sm font-medium">
                    Administrative systems management
                  </span>
                </div>
              </div>
              <button
                className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-4 py-3 rounded-xl font-semibold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                onClick={() => (window.location.href = 'mailto:admin@timharmar.com')}
              >
                <Mail className="inline-block w-4 h-4 mr-2" />
                Contact Josh
              </button>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 p-10 rounded-3xl text-white text-center shadow-2xl border border-accent-500/20">
            <h3 className="text-3xl font-bold mb-8 font-heading">
              Why Choose Tim Harmar: Legal and Consulting Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-all duration-300 group-hover:scale-110 shadow-glow">
                  <Award className="text-accent-300 w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Award-winning legal expertise</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-all duration-300 group-hover:scale-110 shadow-glow">
                  <Monitor className="text-accent-300 w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Cutting-edge legal technology</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-all duration-300 group-hover:scale-110 shadow-glow">
                  <Users className="text-accent-300 w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Personalized service approach</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-200">
                  <Globe className="text-white w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">Local expertise, global perspective</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us today for a consultation and discover how our legal expertise can help your
              business thrive.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-200 backdrop-blur-sm hover:shadow-large">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Email</h3>
              <a
                href="mailto:kburton@timharmar.com"
                className="text-primary-400 hover:text-primary-300 text-lg transition-colors"
              >
                kburton@timharmar.com
              </a>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-secondary-500 transition-all duration-200 backdrop-blur-sm hover:shadow-large">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Phone</h3>
              <a
                href="tel:+17059435049"
                className="text-secondary-400 hover:text-secondary-300 text-lg transition-colors"
              >
                +1 (705) 943-5049
              </a>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-accent-500 transition-all duration-200 backdrop-blur-sm hover:shadow-large">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Location</h3>
              <p className="text-gray-300 text-lg">
                Sault Ste. Marie
                <br />
                Ontario, Canada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 font-heading">
                Tim Harmar: Legal and Consulting Services
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Providing expert legal solutions in civil litigation, privacy and cybersecurity law,
                intellectual property, and business startup consulting.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/tim-harmar-legal-consulting-services"
                  className="bg-primary-600 hover:bg-primary-700 p-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-medium"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 font-heading flex items-center">
                <Scale className="w-5 h-5 mr-2 text-primary-400" />
                Services
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-400 transition-colors flex items-center"
                  >
                    <Scale className="w-4 h-4 mr-2 text-primary-500" />
                    Civil Litigation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-400 transition-colors flex items-center"
                  >
                    <Shield className="w-4 h-4 mr-2 text-secondary-500" />
                    Privacy & Cybersecurity Law
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-400 transition-colors flex items-center"
                  >
                    <Lightbulb className="w-4 h-4 mr-2 text-accent-500" />
                    Intellectual Property
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-400 transition-colors flex items-center"
                  >
                    <Rocket className="w-4 h-4 mr-2 text-secondary-500" />
                    Business Start Up & Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 font-heading flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-400" />
                Contact Info
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-accent-500" />
                  Sault Ste. Marie, ON
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-secondary-500" />
                  +1 (705) 943-5049
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary-500" />
                  kburton@timharmar.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                &copy; 2025 Tim Harmar: Legal and Consulting Services. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Legal Notices
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Chat Widget */}
      <AILegalAssistant />
    </div>
  )
}
