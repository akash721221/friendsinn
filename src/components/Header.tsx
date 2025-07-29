import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  onAdminLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-600">Friends INN</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('rooms')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Rooms
              </button>
              <button
                onClick={() => scrollToSection('party-hall')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Party Hall
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* Admin Login Button */}
          <div className="hidden md:block">
            <button
              onClick={onAdminLogin}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
            >
              <User size={16} />
              <span>Admin Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('rooms')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base font-medium"
              >
                Rooms
              </button>
              <button
                onClick={() => scrollToSection('party-hall')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base font-medium"
              >
                Party Hall
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base font-medium"
              >
                Contact Us
              </button>
              <button
                onClick={onAdminLogin}
                className="block w-full text-left px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Admin Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;