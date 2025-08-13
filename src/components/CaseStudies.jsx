import React from 'react';
import casesData from '../content/cases.json';

const CaseStudies = () => {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#1f2937', 
          marginBottom: '1rem' 
        }}>
          Case Studies
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Recent client engagements and outcomes
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
        gap: '2rem' 
      }}>
        {casesData.map((caseStudy) => (
          <div 
            key={caseStudy.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
              transition: 'box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            tabIndex="0"
            role="article"
            aria-labelledby={`case-title-${caseStudy.id}`}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          >
            <h3 
              id={`case-title-${caseStudy.id}`}
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '0.75rem'
              }}
            >
              {caseStudy.title}
            </h3>
            
            <p style={{
              color: '#374151',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              {caseStudy.summary}
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              <p style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#059669'
              }}>
                Outcome: {caseStudy.outcome}
              </p>
            </div>

            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Industries:
              </span>
              {caseStudy.industries.map((industry, index) => (
                <span 
                  key={index}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    marginLeft: '0.5rem'
                  }}
                >
                  {industry}
                </span>
              ))}
            </div>

            <div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Services:
              </span>
              {caseStudy.services.map((service, index) => (
                <span 
                  key={index}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    marginLeft: '0.5rem'
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;