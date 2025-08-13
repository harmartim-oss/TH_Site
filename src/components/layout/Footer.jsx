import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
              Tim Harmar Legal & Consulting Services
            </h3>
            <p style={{ color: '#d1d5db' }}>
              Expert legal services in civil litigation, privacy law, intellectual property, 
              and economic development consulting.
            </p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#d1d5db' }}>
              <li style={{ marginBottom: '0.5rem' }}>Civil Litigation</li>
              <li style={{ marginBottom: '0.5rem' }}>Privacy Law</li>
              <li style={{ marginBottom: '0.5rem' }}>Intellectual Property</li>
              <li style={{ marginBottom: '0.5rem' }}>Business Law</li>
              <li style={{ marginBottom: '0.5rem' }}>Economic Development Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Contact</h3>
            <div style={{ color: '#d1d5db' }}>
              <p style={{ marginBottom: '0.5rem' }}>📧 tharmar@timharmar.com</p>
              <p style={{ marginBottom: '0.5rem' }}>📞 +1-705-999-3657</p>
              <p style={{ marginBottom: '0.5rem' }}>📍 Sault Ste. Marie, Ontario</p>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#d1d5db'
        }}>
          <p>&copy; 2025 Tim Harmar Legal & Consulting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;