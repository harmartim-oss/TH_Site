import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-contact">
            <h3>Tim Harmar Legal & Consulting Services</h3>
            <p>Sault Ste. Marie, Ontario, Canada</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                <a href="mailto:tharmar@timharmar.com" className="contact-link">
                  tharmar@timharmar.com
                </a>
              </p>
              <p>
                <a href="tel:+17059993657" className="contact-link">
                  +1-705-999-3657
                </a>
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-list">
                <li>Civil Litigation</li>
                <li>Privacy Law</li>
                <li>Intellectual Property</li>
                <li>Business Law</li>
                <li>Economic Development</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tim Harmar Legal & Consulting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;