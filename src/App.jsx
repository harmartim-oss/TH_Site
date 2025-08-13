import { useState } from 'react'

// Import content data
import casesData from '../content/cases.json'
import postsData from '../content/posts.json'

// Environment variables
const CLIENT_PORTAL_URL = import.meta.env.VITE_CLIENT_PORTAL_URL
const SCHEDULING_URL = import.meta.env.VITE_SCHEDULING_URL  
const SMS_NUMBER = import.meta.env.VITE_SMS_NUMBER
const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://www.timharmar.com'

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  const [intakeModalOpen, setIntakeModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: '',
    description: '',
    contactMethod: 'email',
    consent: false
  })

  // Handle intake form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.description || !formData.consent) {
      alert('Please fill in all required fields and provide consent.')
      return
    }

    // Generate mailto link
    const subject = `Legal Inquiry from ${formData.name} - ${formData.topic || 'General'}`
    const body = `Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Topic: ${formData.topic}
Preferred Contact Method: ${formData.contactMethod}

Description:
${formData.description}

This inquiry was submitted through the website intake form.`
    
    const mailtoLink = `mailto:tharmar@timharmar.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open mailto link
    window.location.href = mailtoLink
    
    // Also provide JSON for copy-paste
    const jsonData = JSON.stringify(formData, null, 2)
    navigator.clipboard.writeText(jsonData).catch(() => {})
    
    setIntakeModalOpen(false)
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      topic: '',
      description: '',
      contactMethod: 'email',
      consent: false
    })
  }

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIntakeModalOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIntakeModalOpen(false)
    }
  }

  const renderContent = () => {
    if (currentView === 'home') {
      return (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h1>Tim Harmar Legal & Consulting Services</h1>
              <p>
                Expert legal solutions in civil litigation, privacy law, intellectual property, and economic development consulting in Sault Ste. Marie, Ontario.
              </p>
              <div className="hero-actions">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => setIntakeModalOpen(true)}
                >
                  Get Legal Advice
                </button>
                {SCHEDULING_URL && (
                  <button 
                    className="btn btn-outline btn-lg"
                    onClick={() => window.open(SCHEDULING_URL, '_blank')}
                  >
                    Schedule Consultation
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Practice Areas */}
          <section id="practice-areas" className="section">
            <div className="container">
              <h2>Practice Areas</h2>
              <div className="practice-grid">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Civil Litigation</h3>
                  </div>
                  <div className="card-content">
                    <p>Complex dispute resolution, contract disputes, and commercial litigation with strategic focus on business outcomes.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Privacy Law</h3>
                  </div>
                  <div className="card-content">
                    <p>PIPEDA compliance, privacy impact assessments, data breach response, and privacy program development.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Intellectual Property</h3>
                  </div>
                  <div className="card-content">
                    <p>Patent protection, trademark registration, IP licensing, and intellectual property portfolio management.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Business Law</h3>
                  </div>
                  <div className="card-content">
                    <p>Corporate structuring, contract review, regulatory compliance, and general business advisory services.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Economic Development</h3>
                  </div>
                  <div className="card-content">
                    <p>Strategic consulting for businesses, municipalities, and organizations pursuing growth and development initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="section bg-gray">
            <div className="container">
              <h2>Case Studies</h2>
              <p className="section-subtitle">Real results for business clients</p>
              <div className="cases-grid">
                {casesData.map(caseItem => (
                  <div key={caseItem.id} className="card case-card">
                    <div className="card-header">
                      <div className="case-outcome">{caseItem.outcome}</div>
                      <h3 className="card-title case-title">{caseItem.title}</h3>
                      <div className="case-industry">{caseItem.industry}</div>
                    </div>
                    <div className="card-content">
                      <p>{caseItem.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries Served */}
          <section id="industries" className="section">
            <div className="container">
              <h2>Industries Served</h2>
              <div className="industries-grid">
                <div className="industry-item">
                  <h3>SaaS & Technology</h3>
                  <p>IP protection, privacy compliance, and regulatory guidance for tech innovators</p>
                </div>
                <div className="industry-item">
                  <h3>Manufacturing</h3>
                  <p>Supply chain contracts, compliance frameworks, and operational risk management</p>
                </div>
                <div className="industry-item">
                  <h3>Retail</h3>
                  <p>Consumer protection, privacy regulations, and commercial dispute resolution</p>
                </div>
                <div className="industry-item">
                  <h3>Professional Services</h3>
                  <p>Business expansion support, contract review, and regulatory compliance guidance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section id="resources" className="section bg-gray">
            <div className="container">
              <h2>Resources</h2>
              <p className="section-subtitle">Essential guides for business clients</p>
              <div className="resources-grid">
                <div className="card resource-card">
                  <div className="card-header">
                    <h3 className="card-title">Contract Review Checklist</h3>
                  </div>
                  <div className="card-content">
                    <p>Key points to review before signing any business contract</p>
                    <button 
                      className="btn btn-outline mt-4"
                      onClick={() => setCurrentView('contract-review')}
                    >
                      Read Guide
                    </button>
                  </div>
                </div>
                <div className="card resource-card">
                  <div className="card-header">
                    <h3 className="card-title">Hiring Compliance Starter</h3>
                  </div>
                  <div className="card-content">
                    <p>Essential compliance considerations when hiring employees</p>
                    <button 
                      className="btn btn-outline mt-4"
                      onClick={() => setCurrentView('hiring-compliance')}
                    >
                      Read Guide
                    </button>
                  </div>
                </div>
                <div className="card resource-card">
                  <div className="card-header">
                    <h3 className="card-title">Privacy Readiness</h3>
                  </div>
                  <div className="card-content">
                    <p>Steps to ensure your business is ready for privacy regulations</p>
                    <button 
                      className="btn btn-outline mt-4"
                      onClick={() => setCurrentView('privacy-readiness')}
                    >
                      Read Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="section">
            <div className="container">
              <h2>Pricing & Engagement Models</h2>
              <div className="pricing-grid">
                <div className="card pricing-card">
                  <div className="card-header">
                    <h3 className="card-title">Flat-fee Packages</h3>
                  </div>
                  <div className="card-content">
                    <p>Predictable pricing for defined scope projects like contract reviews, trademark applications, and privacy assessments.</p>
                    <button 
                      className="btn btn-primary mt-4"
                      onClick={() => setIntakeModalOpen(true)}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
                <div className="card pricing-card">
                  <div className="card-header">
                    <h3 className="card-title">Hourly Consultation</h3>
                  </div>
                  <div className="card-content">
                    <p>Flexible hourly arrangements for ongoing advice, litigation support, and project-based legal services.</p>
                    <button 
                      className="btn btn-primary mt-4"
                      onClick={() => setIntakeModalOpen(true)}
                    >
                      Schedule Call
                    </button>
                  </div>
                </div>
                <div className="card pricing-card">
                  <div className="card-header">
                    <h3 className="card-title">Fractional/Monthly Counsel</h3>
                  </div>
                  <div className="card-content">
                    <p>Ongoing legal support with monthly retainer arrangements for businesses needing regular access to legal expertise.</p>
                    <button 
                      className="btn btn-primary mt-4"
                      onClick={() => setIntakeModalOpen(true)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="pricing-disclaimer">
                <p><small>Final fees depend on project scope and complexity. Initial consultation available to discuss your specific needs.</small></p>
              </div>
            </div>
          </section>

          {/* Map and Directions */}
          <section id="location" className="section bg-gray">
            <div className="container">
              <h2>Location</h2>
              <div className="location-content">
                <div className="location-info">
                  <h3>Sault Ste. Marie, Ontario</h3>
                  <p>Serving clients throughout Ontario and beyond</p>
                  <p>
                    <strong>Address:</strong><br />
                    Sault Ste. Marie, ON P6A 4E6<br />
                    Canada
                  </p>
                  <button 
                    className="btn btn-outline mt-4"
                    onClick={() => window.open(`https://maps.apple.com/?q=46.5197,-84.3467`, '_blank')}
                  >
                    Open in Maps
                  </button>
                </div>
                <div className="static-map">
                  <div className="map-placeholder">
                    <div className="map-icon">📍</div>
                    <p>Sault Ste. Marie, ON</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Insights */}
          <section id="insights" className="section">
            <div className="container">
              <h2>Legal Insights</h2>
              <p className="section-subtitle">Latest updates and analysis</p>
              <div className="insights-grid">
                {postsData.map(post => (
                  <div key={post.slug} className="card insight-card">
                    <div className="card-header">
                      <div className="insight-meta">
                        <span className="insight-date">{new Date(post.date).toLocaleDateString()}</span>
                        <span className="insight-category">{post.category}</span>
                      </div>
                      <h3 className="card-title insight-title">
                        <button 
                          onClick={() => setCurrentView(post.slug)}
                          className="text-left hover-link"
                        >
                          {post.title}
                        </button>
                      </h3>
                    </div>
                    <div className="card-content">
                      <p>{post.summary}</p>
                      <div className="insight-tags">
                        {post.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="section bg-gray">
            <div className="container">
              <h2>Get in Touch</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Ready to discuss your legal needs?</h3>
                  <p>Contact us today for expert legal advice and strategic solutions.</p>
                  
                  <div className="contact-methods">
                    <div className="contact-method">
                      <strong>Email:</strong>
                      <a href="mailto:tharmar@timharmar.com">tharmar@timharmar.com</a>
                    </div>
                    <div className="contact-method">
                      <strong>Phone:</strong>
                      <a href="tel:+17059993657">+1-705-999-3657</a>
                    </div>
                  </div>
                </div>
                <div className="contact-actions">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => setIntakeModalOpen(true)}
                  >
                    Start Legal Assessment
                  </button>
                  {SCHEDULING_URL && (
                    <button 
                      className="btn btn-outline btn-lg"
                      onClick={() => window.open(SCHEDULING_URL, '_blank')}
                    >
                      Schedule Consultation
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )
    }
    
    // Resource pages
    if (currentView === 'contract-review') {
      return (
        <div className="resource-page">
          <div className="container">
            <button 
              className="btn btn-outline mb-6"
              onClick={() => setCurrentView('home')}
            >
              ← Back to Resources
            </button>
            <h1>Contract Review Checklist</h1>
            <div className="resource-content">
              <h2>Essential Points to Review</h2>
              <ul>
                <li><strong>Parties:</strong> Verify all parties are correctly identified with full legal names</li>
                <li><strong>Scope of Work:</strong> Ensure deliverables and expectations are clearly defined</li>
                <li><strong>Payment Terms:</strong> Review amounts, due dates, and payment methods</li>
                <li><strong>Termination Clauses:</strong> Understand how and when the contract can be ended</li>
                <li><strong>Liability Limitations:</strong> Check for caps on damages and indemnification</li>
                <li><strong>Intellectual Property:</strong> Clarify ownership of created work and materials</li>
                <li><strong>Confidentiality:</strong> Review non-disclosure and privacy protection terms</li>
                <li><strong>Dispute Resolution:</strong> Understand mediation, arbitration, or court procedures</li>
                <li><strong>Governing Law:</strong> Identify which jurisdiction's laws will apply</li>
                <li><strong>Force Majeure:</strong> Check provisions for unforeseeable circumstances</li>
              </ul>
              
              <h2>Red Flags to Watch For</h2>
              <ul>
                <li>Unusually broad indemnification clauses</li>
                <li>Automatic renewal terms without clear exit options</li>
                <li>Excessive penalties or liquidated damages</li>
                <li>Vague or ambiguous language around key obligations</li>
                <li>Limited liability for one party but not the other</li>
              </ul>
              
              <div className="cta-box">
                <p>Need help reviewing a specific contract? Our legal team can provide detailed analysis and recommendations.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIntakeModalOpen(true)}
                >
                  Get Contract Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    if (currentView === 'hiring-compliance') {
      return (
        <div className="resource-page">
          <div className="container">
            <button 
              className="btn btn-outline mb-6"
              onClick={() => setCurrentView('home')}
            >
              ← Back to Resources
            </button>
            <h1>Hiring Compliance Starter</h1>
            <div className="resource-content">
              <h2>Before Posting Jobs</h2>
              <ul>
                <li>Ensure job descriptions comply with human rights legislation</li>
                <li>Avoid discriminatory language or requirements</li>
                <li>Include only bona fide occupational requirements</li>
                <li>Consider accessibility and accommodation needs</li>
              </ul>
              
              <h2>During the Interview Process</h2>
              <ul>
                <li>Prepare legally compliant interview questions</li>
                <li>Avoid questions about protected characteristics</li>
                <li>Document the selection process consistently</li>
                <li>Conduct reference checks with proper consent</li>
              </ul>
              
              <h2>Making the Offer</h2>
              <ul>
                <li>Include all material terms in writing</li>
                <li>Specify probationary period terms clearly</li>
                <li>Address confidentiality and non-compete provisions</li>
                <li>Comply with employment standards minimums</li>
              </ul>
              
              <h2>Onboarding Requirements</h2>
              <ul>
                <li>Verify work eligibility and right to work</li>
                <li>Provide required workplace policies</li>
                <li>Set up payroll and benefit deductions properly</li>
                <li>Ensure workplace safety training is completed</li>
              </ul>
              
              <div className="cta-box">
                <p>Hiring your first employees or expanding your team? We can help ensure full compliance with employment law.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIntakeModalOpen(true)}
                >
                  Get Hiring Guidance
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    if (currentView === 'privacy-readiness') {
      return (
        <div className="resource-page">
          <div className="container">
            <button 
              className="btn btn-outline mb-6"
              onClick={() => setCurrentView('home')}
            >
              ← Back to Resources
            </button>
            <h1>Privacy Readiness Guide</h1>
            <div className="resource-content">
              <h2>Assessment Phase</h2>
              <ul>
                <li>Inventory all personal information your business collects</li>
                <li>Map data flows from collection through disposal</li>
                <li>Identify legal basis for processing personal information</li>
                <li>Review third-party data sharing arrangements</li>
              </ul>
              
              <h2>Policy Development</h2>
              <ul>
                <li>Create comprehensive privacy policy for your website</li>
                <li>Develop internal privacy procedures for staff</li>
                <li>Establish data retention and disposal schedules</li>
                <li>Design consent mechanisms that meet legal requirements</li>
              </ul>
              
              <h2>Implementation</h2>
              <ul>
                <li>Train staff on privacy obligations and procedures</li>
                <li>Implement technical and organizational safeguards</li>
                <li>Establish breach response and notification procedures</li>
                <li>Set up processes for handling access requests</li>
              </ul>
              
              <h2>Ongoing Compliance</h2>
              <ul>
                <li>Conduct regular privacy impact assessments</li>
                <li>Monitor changes in privacy legislation</li>
                <li>Update policies and procedures as business evolves</li>
                <li>Document compliance efforts and decisions</li>
              </ul>
              
              <div className="cta-box">
                <p>Ready to strengthen your privacy program? Our privacy law expertise can guide your compliance efforts.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIntakeModalOpen(true)}
                >
                  Get Privacy Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    // Individual insight posts
    const currentPost = postsData.find(post => post.slug === currentView)
    if (currentPost) {
      return (
        <div className="insight-page">
          <div className="container">
            <button 
              className="btn btn-outline mb-6"
              onClick={() => setCurrentView('home')}
            >
              ← Back to Insights
            </button>
            <div className="insight-meta">
              <span className="insight-date">{new Date(currentPost.date).toLocaleDateString()}</span>
              <span className="insight-category">{currentPost.category}</span>
            </div>
            <h1>{currentPost.title}</h1>
            <div className="insight-content">
              <p className="lead">{currentPost.summary}</p>
              
              <div className="placeholder-content">
                <p>This is a placeholder for the full article content. In a real implementation, you would have the complete article text here.</p>
                <p>The article would provide detailed analysis, practical advice, and actionable insights related to {currentPost.category.toLowerCase()}.</p>
              </div>
              
              <div className="insight-tags">
                {currentPost.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="cta-box">
              <p>Have questions about this topic? Our legal team can provide personalized guidance.</p>
              <button 
                className="btn btn-primary"
                onClick={() => setIntakeModalOpen(true)}
              >
                Discuss This Topic
              </button>
            </div>
          </div>
        </div>
      )
    }
    
    return null
  }

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <h1 className="site-logo">
              <button onClick={() => setCurrentView('home')}>
                Tim Harmar Legal & Consulting Services
              </button>
            </h1>
            <nav className="header-nav">
              {CLIENT_PORTAL_URL && (
                <button 
                  className="btn btn-outline"
                  onClick={() => window.open(CLIENT_PORTAL_URL, '_blank')}
                >
                  Client Portal
                </button>
              )}
              <button 
                className="btn btn-primary"
                onClick={() => setIntakeModalOpen(true)}
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {renderContent()}
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Tim Harmar Legal & Consulting Services</h3>
              <p>Expert legal solutions in civil litigation, privacy law, intellectual property, and economic development consulting.</p>
              <div className="footer-contact">
                <p>
                  <a href="mailto:tharmar@timharmar.com">tharmar@timharmar.com</a> •{' '}
                  <a href="tel:+17059993657">+1-705-999-3657</a>
                </p>
                <p>Sault Ste. Marie, Ontario, Canada</p>
              </div>
            </div>
            <div className="footer-actions">
              {CLIENT_PORTAL_URL && (
                <button 
                  className="btn btn-outline"
                  onClick={() => window.open(CLIENT_PORTAL_URL, '_blank')}
                >
                  Client Portal
                </button>
              )}
              <button 
                className="btn btn-primary"
                onClick={() => setIntakeModalOpen(true)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      {SMS_NUMBER && (
        <div className="sticky-mobile-bar">
          <a 
            href={`sms:${SMS_NUMBER}`}
            className="sms-button"
            aria-label="Text us"
          >
            💬 Text us
          </a>
        </div>
      )}

      {/* Intake Modal */}
      {intakeModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-header">
              <h2 id="modal-title">Legal Assessment & Intake</h2>
              <button 
                className="modal-close"
                onClick={() => setIntakeModalOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="intake-form">
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="topic">Legal Topic</label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    className="form-select"
                  >
                    <option value="">Select a topic</option>
                    <option value="Civil Litigation">Civil Litigation</option>
                    <option value="Privacy Law">Privacy Law</option>
                    <option value="Intellectual Property">Intellectual Property</option>
                    <option value="Business Law">Business Law</option>
                    <option value="Economic Development">Economic Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-method">Preferred Contact Method</label>
                  <select
                    id="contact-method"
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                    className="form-select"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>
              </div>
              
              <div className="form-field full-width">
                <label htmlFor="description">Brief Description of Legal Matter *</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  className="form-textarea"
                  rows={4}
                  placeholder="Please describe your legal matter briefly..."
                />
              </div>
              
              <div className="form-field checkbox-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    required
                  />
                  I consent to being contacted about my legal matter and understand that this does not create an attorney-client relationship. *
                </label>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => setIntakeModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">Submit Assessment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
