import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="logo">
          <h1 className="logo-text">
            Tim Harmar Legal & Consulting Services
          </h1>
        </div>
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <ThemeToggle />
        </nav>
      </div>
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
    </header>
  );
};

export default Header;