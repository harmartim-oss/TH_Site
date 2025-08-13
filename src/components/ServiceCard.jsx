import React from 'react';

/**
 * Service card component with inline SVG icons
 */
const ServiceCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

// Pre-defined service icons (inline SVGs)
export const ServiceIcons = {
  CivilLitigation: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7v6h6"/>
      <path d="M21 17v-6h-6"/>
      <path d="M3 17l5-5 4 4 6-6 4 4"/>
      <path d="M14 13v8"/>
      <path d="M10 13v8"/>
    </svg>
  ),
  
  PrivacyLaw: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  
  IntellectualProperty: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
    </svg>
  ),
  
  BusinessLaw: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27a2 2 0 0 0 1-1.73"/>
      <path d="M3.29 7 12 12l8.71-5"/>
      <path d="M12 22V12"/>
    </svg>
  ),
  
  EconomicDevelopment: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3v18h18"/>
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
    </svg>
  )
};

export default ServiceCard;