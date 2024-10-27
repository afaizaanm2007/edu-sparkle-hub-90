import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Boomerang Learning" className="h-12 w-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-black hover:text-primary">Home</Link></li>
            <li><Link to="/product-offering" className="text-black hover:text-primary">Product Offering</Link></li>
            <li><Link to="/about" className="text-black hover:text-primary">About Us</Link></li>
          </ul>
        </nav>
        <Link to="/get-started">
          <Button className="bg-secondary hover:bg-secondary/90 text-white">Get Started</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;