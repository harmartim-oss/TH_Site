import React from 'react';
import Bio from './components/Bio';
import CaseStudies from './components/CaseStudies';
import Insights from './components/Insights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <header style={{ 
        padding: "2rem 1rem", 
        textAlign: "center", 
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          Tim Harmar Legal & Consulting Services
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Civil litigation, privacy law, intellectual property, and economic development consulting in Sault Ste. Marie, Ontario.
        </p>
      </header>

      <main>
        <Bio />
        <CaseStudies />
        <Insights />
      </main>

      <Footer />
    </div>
  );
}
