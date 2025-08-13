import React from 'react';

const Footer = () => {
  // Generate timestamp at build time
  const deployTime = new Date().toISOString();
  const formattedTime = new Date(deployTime).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Toronto'
  });

  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '2rem 0',
      marginTop: '4rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              Tim Harmar Legal & Consulting Services
            </h3>
            <p style={{ color: '#d1d5db' }}>
              Contact:{' '}
              <a 
                href="mailto:tharmar@timharmar.com" 
                style={{
                  color: '#60a5fa',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.target.style.color = '#93c5fd'}
                onMouseLeave={(e) => e.target.style.color = '#60a5fa'}
              >
                tharmar@timharmar.com
              </a>
              {' • '}
              <a 
                href="tel:+1-705-999-3657" 
                style={{
                  color: '#60a5fa',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.target.style.color = '#93c5fd'}
                onMouseLeave={(e) => e.target.style.color = '#60a5fa'}
              >
                +1-705-999-3657
              </a>
            </p>
          </div>
          
          <div style={{
            fontSize: '0.875rem',
            color: '#9ca3af'
          }}>
            <p>Site updated: {formattedTime}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;