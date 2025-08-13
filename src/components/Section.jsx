import React from 'react';

/**
 * Reusable Section component for consistent styling
 */
const Section = ({ 
  children, 
  className = '', 
  as = 'section',
  ...props 
}) => {
  const Component = as;
  
  return (
    <Component 
      className={`section ${className}`}
      {...props}
    >
      <div className="section-content">
        {children}
      </div>
    </Component>
  );
};

export default Section;