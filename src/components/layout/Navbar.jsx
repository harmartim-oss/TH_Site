import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <nav style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'white'
        }}>
          <img 
            src="/src/assets/tim_harmar_logo_updated.png" 
            alt="Tim Harmar Legal" 
            style={{ height: '40px', marginRight: '12px' }}
          />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Tim Harmar Legal</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                backgroundColor: location.pathname === item.path ? '#374151' : 'transparent',
                color: location.pathname === item.path ? 'white' : '#d1d5db'
              }}
              onMouseOver={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.backgroundColor = '#374151';
                  e.target.style.color = 'white';
                }
              }}
              onMouseOut={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#d1d5db';
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;