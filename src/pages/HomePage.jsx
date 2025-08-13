import React from 'react';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
        color: 'white',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Tim Harmar Legal & Consulting Services
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Expert legal solutions in civil litigation, privacy law, intellectual property, 
            and economic development consulting in Sault Ste. Marie, Ontario.
          </p>
          <button style={{
            backgroundColor: 'white',
            color: '#1e3a8a',
            padding: '12px 32px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
              How We Can Help
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              Comprehensive legal services tailored to your needs
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              {
                title: 'Civil Litigation',
                description: 'Expert representation in complex civil disputes with a track record of success.',
                icon: '⚖️'
              },
              {
                title: 'Privacy Law',
                description: 'Navigate complex privacy regulations with cutting-edge expertise.',
                icon: '🔒'
              },
              {
                title: 'Intellectual Property',
                description: 'Protect and enforce your intellectual property rights.',
                icon: '💡'
              },
              {
                title: 'Business Law',
                description: 'Comprehensive business legal services for companies of all sizes.',
                icon: '🏢'
              },
              {
                title: 'Economic Development',
                description: 'Strategic consulting for economic growth and development initiatives.',
                icon: '📈'
              }
            ].map((service, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.2s'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1f2937' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Advanced Legal Technology
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem' }}>
            Experience the future of legal services
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>
                🤖 AI Legal Assistant
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Get instant answers to common legal questions
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>
                📅 Smart Scheduling
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Book consultations at your convenience
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>
                📄 Document Generator
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Generate legal documents quickly and accurately
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>
                📰 Legal News Feed
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Stay updated on the latest legal developments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;