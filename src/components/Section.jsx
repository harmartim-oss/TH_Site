import React from 'react';

/**
 * Reusable Section component for consistent styling
 */
const Section = ({ 
  children, 
  className = '', 
  as: Component = 'section',
  ...props 
}) => {
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