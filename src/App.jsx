import { useState, useEffect } from 'react'

// Inline SVG Icons
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const ScaleIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/>
    <path d="M12 15v6"/>
    <path d="M8 18h8"/>
  </svg>
)

const ShieldIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const LightbulbIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21h6"/>
    <path d="M12 17h.01"/>
    <path d="M12 3a6 6 0 0 1 6 6c0 3-2 4.5-4 6s-2 2.5-2 4h-4c0-1.5 0-3-2-4s-4-3-4-6a6 6 0 0 1 6-6z"/>
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
    <polyline points="16,7 22,7 22,13"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    
    // Use View Transitions API if available
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
      })
    } else {
      setTheme(newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">
              <ScaleIcon />
              Tim Harmar Legal
            </a>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Expert Legal Solutions in Sault Ste. Marie</h1>
              <p>
                Specialized expertise in civil litigation, privacy law, intellectual property, 
                and economic development consulting. Award-winning legal services tailored 
                to your unique needs.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Get Consultation
                </a>
                <a href="#services" className="btn btn-ghost">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2>How We Can Help</h2>
              <p>Comprehensive legal services designed to protect and advance your interests</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <ScaleIcon />
                <h3>Civil Litigation</h3>
                <p>
                  Experienced representation in complex civil disputes, with a track record 
                  of successful outcomes in challenging cases.
                </p>
              </div>
              <div className="service-card">
                <ShieldIcon />
                <h3>Privacy Law</h3>
                <p>
                  Navigate the evolving landscape of privacy regulations and data protection 
                  with cutting-edge legal expertise.
                </p>
              </div>
              <div className="service-card">
                <LightbulbIcon />
                <h3>Intellectual Property</h3>
                <p>
                  Protect your innovations and creative works with comprehensive IP strategy 
                  and enforcement services.
                </p>
              </div>
              <div className="service-card">
                <BriefcaseIcon />
                <h3>Business Law</h3>
                <p>
                  Strategic legal counsel for businesses of all sizes, from startups 
                  to established enterprises.
                </p>
              </div>
              <div className="service-card">
                <TrendingUpIcon />
                <h3>Economic Development</h3>
                <p>
                  Specialized consulting to drive growth and development initiatives 
                  across various sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About & Callout Section */}
        <section className="two-column">
          <div className="container">
            <div className="two-column-grid">
              <div>
                <h2>About Tim Harmar</h2>
                <p>
                  <strong>Tim J. Harmar</strong> brings decades of legal expertise to serve clients 
                  throughout Ontario. With advanced training from University of Windsor Faculty of Law 
                  and York University Osgoode Hall Law School, Tim has built a reputation for 
                  delivering exceptional results in complex legal matters.
                </p>
                <p>
                  His practice focuses on cutting-edge areas of law, including privacy legislation, 
                  intellectual property protection, and strategic business counsel. Tim's experience 
                  extends to the highest levels of the Canadian legal system, including appearances 
                  before the Supreme Court of Canada.
                </p>
                <p>
                  Beyond traditional legal practice, Tim provides valuable economic development 
                  consulting, helping organizations navigate regulatory landscapes and capitalize 
                  on growth opportunities.
                </p>
              </div>
              <div className="callout">
                <h3>Why Choose Our Firm?</h3>
                <p>
                  <strong>Proven Excellence:</strong> Award-winning legal representation with 
                  a track record of successful outcomes in high-stakes litigation.
                </p>
                <p>
                  <strong>Specialized Expertise:</strong> Deep knowledge in emerging areas of 
                  law, including privacy, data protection, and intellectual property.
                </p>
                <p>
                  <strong>Strategic Approach:</strong> We don't just solve legal problems—we 
                  provide strategic counsel to help you achieve your broader objectives.
                </p>
                <p>
                  <strong>Local Presence:</strong> Based in Sault Ste. Marie with deep roots 
                  in the community, yet capable of handling matters province-wide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2>Client Testimonials</h2>
              <p>What our clients say about working with us</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p className="testimonial-quote">
                  Tim's expertise in privacy law was instrumental in helping our organization 
                  navigate complex data protection requirements. His strategic approach saved 
                  us both time and resources while ensuring full compliance.
                </p>
                <div className="testimonial-author">Sarah Mitchell</div>
                <div className="testimonial-role">Chief Technology Officer</div>
              </div>
              <div className="testimonial">
                <p className="testimonial-quote">
                  The level of professionalism and attention to detail in our intellectual 
                  property matter was exceptional. Tim's thorough understanding of IP law 
                  protected our most valuable assets.
                </p>
                <div className="testimonial-author">Michael Chen</div>
                <div className="testimonial-role">Founder & CEO</div>
              </div>
              <div className="testimonial">
                <p className="testimonial-quote">
                  Outstanding representation in a complex civil litigation matter. Tim's 
                  strategic thinking and courtroom expertise led to a favorable resolution 
                  that exceeded our expectations.
                </p>
                <div className="testimonial-author">Jennifer Adams</div>
                <div className="testimonial-role">Business Owner</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-content">
              <h2>Ready to Get Started?</h2>
              <p>
                Contact us today for a consultation. We're here to provide the expert 
                legal counsel you need to achieve your objectives.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <MailIcon />
                  <span>tharmar@timharmar.com</span>
                </div>
                <div className="contact-item">
                  <PhoneIcon />
                  <span>+1-705-999-3657</span>
                </div>
                <div className="contact-item">
                  <MapPinIcon />
                  <span>Sault Ste. Marie, Ontario</span>
                </div>
              </div>

              <div className="hero-actions">
                <a href="mailto:tharmar@timharmar.com" className="btn btn-primary">
                  <MailIcon />
                  Send Email
                </a>
                <a href="tel:+17059993657" className="btn btn-secondary">
                  <PhoneIcon />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>
              &copy; 2024 Tim Harmar Legal & Consulting Services. All rights reserved. 
              Licensed to practice law in Ontario, Canada.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
