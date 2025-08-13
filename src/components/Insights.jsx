import React from 'react';
import postsData from '../content/posts.json';

const Insights = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-CA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#1f2937', 
          marginBottom: '1rem' 
        }}>
          Insights & Posts
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Practical legal guidance and updates
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {postsData.map((post) => (
          <article 
            key={post.slug}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
              transition: 'box-shadow 0.3s ease'
            }}
            tabIndex="0"
            role="article"
            aria-labelledby={`post-title-${post.slug}`}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ flex: '1' }}>
                <h3 
                  id={`post-title-${post.slug}`}
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}
                >
                  {post.title}
                </h3>
                
                <p style={{
                  color: '#374151',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {post.summary}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#dbeafe',
                        color: '#1e40af',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ 
                marginTop: '1rem',
                flexShrink: 0,
                textAlign: 'right'
              }}>
                <time 
                  dateTime={post.date}
                  style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    fontWeight: '500'
                  }}
                >
                  {formatDate(post.date)}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Insights;