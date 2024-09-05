import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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