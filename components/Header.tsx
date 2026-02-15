import React, { useState } from 'react';

interface HeaderProps {
  currentRoute: string;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Privacy', href: '#/privacy' },
    { name: 'Terms', href: '#/terms' },
    { name: 'Support', href: '#/support' },
  ];

  const isActive = (href: string) => currentRoute === href;

  return (
    <nav className="fixed w-full z-50 bg-huggn-bg/90 backdrop-blur-sm border-b border-huggn-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <a href="#/" className="flex items-center gap-2">
                <span className="font-bold text-2xl tracking-tight text-huggn-primary">Huggn</span>
             </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-huggn-primary font-bold'
                    : 'text-huggn-textLight hover:text-huggn-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-huggn-primary focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-huggn-bg border-b border-huggn-primary/10 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-huggn-primary bg-huggn-secondary/20'
                    : 'text-huggn-textLight hover:text-huggn-primary hover:bg-huggn-secondary/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};