import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/product-offering" className="hover:text-blue-400">Product Offering</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Boomerang Learning LLC</p>
            <p>3466 Pineridge Drive</p>
            <p>Newburgh, IN 47630</p>
            <div className="mt-4">
              <a href="mailto:info@boomeranglearning.com" className="flex items-center hover:text-blue-400">
                <Mail className="w-4 h-4 mr-2" />
                info@boomeranglearning.com
              </a>
              <a href="mailto:boomeranglearning1@gmail.com" className="flex items-center hover:text-blue-400 mt-2">
                <Mail className="w-4 h-4 mr-2" />
                boomeranglearning1@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/boomerang_learning/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/boomerang-learning" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Boomerang Learning LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;