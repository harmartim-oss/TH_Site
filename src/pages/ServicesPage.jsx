import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Civil Litigation',
      description: 'Expert representation in complex civil disputes, commercial litigation, and appellate matters.',
      features: [
        'Commercial Disputes',
        'Contract Litigation', 
        'Professional Negligence',
        'Appellate Advocacy',
        'Alternative Dispute Resolution'
      ]
    },
    {
      title: 'Privacy Law',
      description: 'Navigate the complex landscape of privacy regulations with cutting-edge expertise.',
      features: [
        'PIPEDA Compliance',
        'Data Breach Response',
        'Privacy Impact Assessments',
        'CASL Compliance',
        'Privacy Policy Development'
      ]
    },
    {
      title: 'Intellectual Property',
      description: 'Comprehensive IP services to protect and enforce your intellectual property rights.',
      features: [
        'Trademark Registration & Enforcement',
        'Copyright Protection',
        'Trade Secret Protection',
        'IP Licensing Agreements',
        'IP Dispute Resolution'
      ]
    },
    {
      title: 'Business Law',
      description: 'Full-service business legal support for companies at every stage of growth.',
      features: [
        'Corporate Formation & Governance',
        'Contract Drafting & Review',
        'Mergers & Acquisitions',
        'Employment Law',
        'Regulatory Compliance'
      ]
    },
    {
      title: 'Economic Development Consulting',
      description: 'Strategic consulting services to drive economic growth and development initiatives.',
      features: [
        'Economic Impact Analysis',
        'Grant Application Support',
        'Public-Private Partnerships',
        'Community Development Planning',
        'Investment Attraction Strategies'
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Legal Services</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Comprehensive legal expertise tailored to meet your specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '3rem' 
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
                  {service.title}
                </h2>
                <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>{service.description}</p>
                
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                  Key Services:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                      color: '#374151'
                    }}>
                      <span style={{ color: '#0f766e', marginRight: '0.5rem' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  marginTop: '1.5rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Contact us today to discuss your legal needs and learn how we can help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: 'white',
              color: '#1e3a8a',
              padding: '12px 32px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Schedule Consultation
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '8px',
              border: '2px solid white',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;