import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">EduTech</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
          </ul>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;