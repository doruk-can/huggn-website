import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0e1802' }} className="bg-[#192C03] text-huggn-bg py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Huggn</h3>
            <p className="text-huggn-secondary/80 text-sm leading-relaxed max-w-xs">
              Huggn is your always-on emotional support system. Whether you're overwhelmed, anxious, or just need to talk, we’re here — anytime, anywhere.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-huggn-secondary">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/privacy" className="hover:text-huggn-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#/terms" className="hover:text-huggn-secondary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-huggn-secondary">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/support" className="hover:text-huggn-secondary transition-colors">Support Center</a></li>
              <li><a href="mailto:info@ryonlabs.com" className="hover:text-huggn-secondary transition-colors">info@ryonlabs.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-huggn-bg/10 mt-12 pt-8 text-center text-sm text-huggn-bg/60">
          <p>&copy; {year} Huggn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};