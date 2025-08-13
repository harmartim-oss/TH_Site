import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Tim Harmar</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Award-winning lawyer providing expert legal services in Northern Ontario
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/src/assets/tim_harmar_logo_updated.png" 
                alt="Tim Harmar"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Excellence</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Tim Harmar brings extensive legal expertise and a commitment to client service 
                  that has earned recognition throughout Ontario's legal community.
                </p>
                <p>
                  With specialized knowledge in civil litigation, privacy law, intellectual property, 
                  and economic development consulting, Tim provides comprehensive legal solutions 
                  tailored to each client's unique needs.
                </p>
                <p>
                  Based in Sault Ste. Marie, Ontario, Tim serves clients across Northern Ontario 
                  and beyond, combining deep local knowledge with cutting-edge legal technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education & Credentials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• University of Windsor Faculty of Law</li>
                <li>• York University Osgoode Hall Law School</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Memberships</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Law Society of Ontario</li>
                <li>• Canadian Bar Association</li>
                <li>• Ontario Bar Association</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Civil Litigation',
                description: 'Extensive experience in complex commercial disputes and appellate advocacy.'
              },
              {
                title: 'Privacy Law', 
                description: 'Specialized expertise in PIPEDA compliance and data protection strategies.'
              },
              {
                title: 'Intellectual Property',
                description: 'Comprehensive IP protection and enforcement across all technology sectors.'
              },
              {
                title: 'Business Law',
                description: 'Strategic legal counsel for businesses from startups to established corporations.'
              },
              {
                title: 'Economic Development',
                description: 'Innovative consulting services driving economic growth initiatives.'
              },
              {
                title: 'Technology Law',
                description: 'Cutting-edge legal solutions for emerging technology challenges.'
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-xl mb-8">
            Discover how personalized legal expertise can benefit your specific situation.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;