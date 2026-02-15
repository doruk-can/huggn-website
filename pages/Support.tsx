import React from 'react';

export const Support: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-huggn-primary mb-6 text-center">How can we help?</h1>
      <p className="text-center text-huggn-textLight mb-12 max-w-xl mx-auto">
        Experiencing an issue with the app or have a feature request? Reach out to us directly via email.
      </p>

      <div className="bg-white p-12 rounded-2xl shadow-sm border border-huggn-primary/10 text-center">
        <div className="w-16 h-16 bg-huggn-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-huggn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-huggn-primary mb-4">Email Us</h3>
        <p className="text-huggn-textLight mb-8">
          Our support team is here to help you. We typically respond within 24 hours.
        </p>
        <a 
          href="mailto:info@ryonlabs.com" 
          className="inline-block bg-black text-white font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
        >
          info@ryonlabs.com
        </a>
      </div>
    </div>
  );
};