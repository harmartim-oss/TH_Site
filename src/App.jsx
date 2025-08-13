import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import ServiceCard, { ServiceIcons } from './components/ServiceCard.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <Section className="hero" as="section">
          <h1 className="hero-title">Tim Harmar Legal & Consulting Services</h1>
          <p className="hero-subtitle">
            Expert legal solutions in civil litigation, privacy law, intellectual property, 
            and economic development consulting in Sault Ste. Marie, Ontario.
          </p>
          <div className="hero-actions">
            <a href="mailto:tharmar@timharmar.com" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="tel:+17059993657" className="btn btn-secondary">
              Call Now
            </a>
          </div>
        </Section>

        {/* Services Section */}
        <Section as="section" aria-labelledby="services-heading">
          <h2 id="services-heading">Our Legal Services</h2>
          <div className="services-grid">
            <ServiceCard
              icon={ServiceIcons.CivilLitigation}
              title="Civil Litigation"
              description="Expert representation in complex civil disputes, from contract breaches to tort claims. We provide strategic litigation support with a focus on achieving the best outcomes for our clients."
            />
            <ServiceCard
              icon={ServiceIcons.PrivacyLaw}
              title="Privacy Law"
              description="Comprehensive privacy compliance and data protection services. We help businesses navigate privacy regulations and implement robust data governance frameworks."
            />
            <ServiceCard
              icon={ServiceIcons.IntellectualProperty}
              title="Intellectual Property"
              description="Protection and enforcement of your intellectual property rights. From trademark registration to patent disputes, we safeguard your innovations and creative works."
            />
            <ServiceCard
              icon={ServiceIcons.BusinessLaw}
              title="Business Law"
              description="Complete business legal services including corporate formation, contract drafting, compliance, and strategic legal counsel for businesses of all sizes."
            />
            <ServiceCard
              icon={ServiceIcons.EconomicDevelopment}
              title="Economic Development Consulting"
              description="Strategic consulting services to support economic growth initiatives, public-private partnerships, and community development projects."
            />
          </div>
        </Section>

        {/* About Section */}
        <Section className="about" as="section" aria-labelledby="about-heading">
          <div className="about-content">
            <div className="about-text">
              <h2 id="about-heading">About Tim Harmar</h2>
              <p>
                Tim Harmar brings decades of legal expertise and a proven track record of success 
                to serve clients across Ontario. With specialized knowledge in civil litigation, 
                privacy law, and economic development, Tim provides strategic legal counsel that 
                drives results.
              </p>
              <p>
                Our practice combines cutting-edge legal knowledge with practical business 
                understanding to deliver solutions that protect your interests and advance your goals.
              </p>
              <ul className="about-highlights">
                <li>Award-winning legal expertise</li>
                <li>Extensive litigation experience</li>
                <li>Strategic business counsel</li>
                <li>Community-focused practice</li>
                <li>Innovative legal solutions</li>
              </ul>
            </div>
            <div className="about-image">
              {/* Placeholder for future image */}
              <div style={{ 
                height: '400px', 
                backgroundColor: 'var(--bg-accent)', 
                borderRadius: 'var(--radius-2xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)'
              }}>
                Professional Photo Coming Soon
              </div>
            </div>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section as="section" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-quote">
                Tim's expertise in privacy law was invaluable in helping us navigate complex 
                compliance requirements. His strategic approach saved us both time and money.
              </p>
              <div className="testimonial-author">Sarah Mitchell</div>
              <div className="testimonial-role">CEO, Tech Innovations Inc.</div>
            </div>
            <div className="testimonial">
              <p className="testimonial-quote">
                Outstanding representation in our civil litigation matter. Tim's attention to 
                detail and courtroom presence made all the difference in achieving a favorable outcome.
              </p>
              <div className="testimonial-author">Robert Chen</div>
              <div className="testimonial-role">Business Owner</div>
            </div>
            <div className="testimonial">
              <p className="testimonial-quote">
                The economic development consulting services provided by Tim were instrumental 
                in securing funding for our community project. Highly recommended.
              </p>
              <div className="testimonial-author">Maria Rodriguez</div>
              <div className="testimonial-role">Municipal Director</div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section className="contact" as="section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Ready to Get Started?</h2>
          <p>
            Contact us today for a consultation. We're here to provide the legal expertise 
            you need to protect your interests and achieve your goals.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:tharmar@timharmar.com" className="contact-link">
                tharmar@timharmar.com
              </a>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <a href="tel:+17059993657" className="contact-link">
                +1-705-999-3657
              </a>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p className="contact-link">
                Sault Ste. Marie, Ontario, Canada
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
