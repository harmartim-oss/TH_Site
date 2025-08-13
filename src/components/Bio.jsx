import React from 'react';

const Bio = () => {
  return (
    <section style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1rem' }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        padding: '2rem' 
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#1f2937', 
          marginBottom: '1rem' 
        }}>
          Business counsel for Northern Ontario
        </h2>
        <h3 style={{ 
          fontSize: '1.25rem', 
          color: '#6b7280', 
          marginBottom: '1.5rem' 
        }}>
          Practical legal support for contracts, privacy, and hiring—grounded in business and engineering training.
        </h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ 
            color: '#374151', 
            lineHeight: '1.6',
            fontSize: '1.1rem' 
          }}>
            Tim J. Harmar advises owners and operators across Northern Ontario on commercial contracts, 
            privacy readiness, and hiring compliance. With BA (Hons), JD, MBA, two LLMs, and a Master of Engineering, 
            Tim brings a practical, systems‑minded approach to legal problems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#1f2937', 
              marginBottom: '0.75rem' 
            }}>
              Credentials
            </h4>
            <ul style={{ color: '#374151', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '0.5rem' }}>• BA (Hons), JD, MBA, LLM (x2), M.Eng.</li>
              <li style={{ marginBottom: '0.5rem' }}>• Sectors: SaaS/technology, manufacturing, retail, professional services</li>
              <li style={{ marginBottom: '0.5rem' }}>• Engagements: Flat‑fee packages, hourly, or fractional counsel</li>
            </ul>
          </div>

          <div>
            <h4 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#1f2937', 
              marginBottom: '0.75rem' 
            }}>
              Recent matters (anonymized)
            </h4>
            <ul style={{ color: '#374151', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <li style={{ marginBottom: '0.5rem' }}>• Streamlined MSAs/SOWs for a regional services company, reducing contract cycle time and escalations</li>
              <li style={{ marginBottom: '0.5rem' }}>• Scoped privacy readiness for a SaaS provider with a pragmatic data map and request intake</li>
              <li style={{ marginBottom: '0.5rem' }}>• Updated manufacturing supply agreements to clarify pricing adjustments and quality remedies</li>
              <li style={{ marginBottom: '0.5rem' }}>• Standardized hiring offers and onboarding to protect IP for a growing team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;