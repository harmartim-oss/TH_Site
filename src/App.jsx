import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';
import './App.module.css';

export default function App() {
  const schedulingUrl = import.meta.env.VITE_SCHEDULING_URL;

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#home" className="nav-logo">Tim Harmar Legal</a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-container">
            <h1>Professional Legal Services for Business Leaders</h1>
            <p>
              Specialized expertise in civil litigation, privacy law, intellectual property, 
              and business consulting in Sault Ste. Marie, Ontario.
            </p>
            <div className="hero-ctas">
              <a href="tel:+17059993657" className="cta-button cta-primary">Call Now</a>
              <a href="mailto:tharmar@timharmar.com?subject=Consultation Request" className="cta-button cta-secondary">Book a Consultation</a>
              {schedulingUrl && (
                <a href={schedulingUrl} target="_blank" rel="noopener noreferrer" className="cta-button cta-accent">Schedule Online</a>
              )}
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section id="services" className="practice-areas">
          <div className="section-container">
            <h2>Practice Areas</h2>
            <p className="section-subtitle">Focused legal expertise for modern businesses</p>
            <div className="practice-grid">
              <div className="practice-item">
                <h3>Business Law</h3>
                <p>Corporate governance, contracts, mergers & acquisitions, and business formation guidance.</p>
              </div>
              <div className="practice-item">
                <h3>Civil Litigation</h3>
                <p>Strategic dispute resolution and courtroom advocacy for complex commercial matters.</p>
              </div>
              <div className="practice-item">
                <h3>Privacy & Data Protection</h3>
                <p>PIPEDA compliance, data breach response, and privacy policy development.</p>
              </div>
              <div className="practice-item">
                <h3>Intellectual Property & Technology</h3>
                <p>Patent strategy, trademark protection, licensing agreements, and tech transactions.</p>
              </div>
              <div className="practice-item">
                <h3>Employment (for Employers)</h3>
                <p>Employment contracts, workplace policies, and HR compliance for businesses.</p>
              </div>
              <div className="practice-item">
                <h3>Regulatory & Compliance</h3>
                <p>Navigating government regulations and ensuring business compliance across industries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="trust-signals">
          <div className="section-container">
            <h2>Trusted by Business Leaders</h2>
            <div className="trust-items">
              <div className="trust-item">✓ Supreme Court of Canada Experience</div>
              <div className="trust-item">✓ Award-winning Legal Expertise</div>
              <div className="trust-item">✓ Northern Ontario Focus</div>
              <div className="trust-item">✓ Business-first Approach</div>
              <div className="trust-item">✓ Confidential & Professional</div>
            </div>
          </div>
        </section>

        {/* Attorney Section */}
        <section id="about" className="attorney">
          <div className="section-container">
            <h2>Principal Lawyer</h2>
            <div className="attorney-content">
              <div>
                <h3>Tim J. Harmar</h3>
                <p className="attorney-title">Principal Lawyer, Sault Ste. Marie, Ontario</p>
                <p>
                  Tim Harmar brings specialized legal expertise to businesses across Northern Ontario. 
                  With experience at the Supreme Court of Canada and extensive background in civil litigation, 
                  privacy law, and intellectual property matters, Tim provides strategic legal counsel 
                  tailored to the unique needs of modern businesses.
                </p>
                <p>
                  Education includes University of Windsor Faculty of Law and York University Osgoode Hall Law School.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="faqs">
          <div className="section-container">
            <h2>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="consultations">
                <AccordionTrigger>How do consultations work?</AccordionTrigger>
                <AccordionContent>
                  Initial consultations can be conducted in person, by phone, or via secure video conference. 
                  We'll discuss your legal needs, timeline, and how we can best assist your business. 
                  All consultations are confidential.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fees">
                <AccordionTrigger>How are fees structured?</AccordionTrigger>
                <AccordionContent>
                  Fee arrangements vary based on the type and complexity of legal work. We offer hourly rates, 
                  fixed fees for specific projects, and retainer arrangements. All fees are discussed transparently 
                  during your initial consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="industries">
                <AccordionTrigger>What industries do you serve?</AccordionTrigger>
                <AccordionContent>
                  We serve businesses across various industries including technology, healthcare, manufacturing, 
                  retail, and professional services. Our focus is on providing practical legal solutions for 
                  growing businesses in Northern Ontario and beyond.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="remote">
                <AccordionTrigger>Do you handle remote meetings?</AccordionTrigger>
                <AccordionContent>
                  Yes, we regularly conduct meetings via secure video conference and phone calls. This allows us 
                  to serve clients throughout Ontario efficiently while maintaining the highest standards of 
                  confidentiality and professional service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="conflicts">
                <AccordionTrigger>How do you handle conflicts of interest?</AccordionTrigger>
                <AccordionContent>
                  We maintain strict conflict checking procedures before taking on any new matter. All potential 
                  conflicts are identified and addressed according to Law Society of Ontario rules and professional 
                  standards before any attorney-client relationship begins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="confidentiality">
                <AccordionTrigger>How is confidentiality protected?</AccordionTrigger>
                <AccordionContent>
                  All communications are protected by solicitor-client privilege. We use secure systems for document 
                  sharing and communication, and all staff are bound by strict confidentiality agreements. Your 
                  business information and legal matters remain completely confidential.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact/Footer */}
        <footer id="contact" className="footer">
          <div className="section-container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Contact</h3>
                <p>
                  <strong>Email:</strong> <a href="mailto:tharmar@timharmar.com">tharmar@timharmar.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+17059993657">+1-705-999-3657</a><br/>
                  <strong>Location:</strong> Sault Ste. Marie, Ontario
                </p>
              </div>
              <div className="footer-section">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM<br/>
                   Consultations available by appointment</p>
              </div>
            </div>
            
            <div className="disclaimer">
              <p>
                <strong>Disclaimer:</strong> This site provides general information and does not constitute legal advice. 
                Contacting us does not create a lawyer–client relationship.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Contact Bar */}
      <div className="mobile-contact-bar">
        <a href="tel:+17059993657" className="mobile-cta">Call</a>
        <a href="mailto:tharmar@timharmar.com?subject=Consultation Request" className="mobile-cta">Email</a>
        {schedulingUrl && (
          <a href={schedulingUrl} target="_blank" rel="noopener noreferrer" className="mobile-cta">Schedule</a>
        )}
      </div>
    </>
  );
}
