import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Friends INN</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Experience premium hospitality with comfortable accommodations and 
              exceptional service. Your home away from home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('rooms')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('party-hall')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Party Hall
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('facilities')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Hospitality Street<br />
                  City Center, State 560001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-sm">info@friendsinn.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            <div className="flex items-center mt-3">
              <input
                type="checkbox"
                id="gdpr"
                className="mr-2 rounded"
                required
              />
              <label htmlFor="gdpr" className="text-xs text-gray-400">
                I agree to receive marketing emails
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 Friends INN. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart size={16} className="text-red-500 mx-1" /> for our guests
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;