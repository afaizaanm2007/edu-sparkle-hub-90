import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Boomerang Learning</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="text-black hover:text-primary">Home</Link></li>
                <li><Link to="/product-offering" className="text-black hover:text-primary">Product Offering</Link></li>
                <li><Link to="/about" className="text-black hover:text-primary">About Us</Link></li>
              </ul>
            </nav>
            <Link to="/get-started">
              <Button className="bg-secondary hover:bg-secondary/90 text-white ml-4">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-black hover:text-primary">Home</Link>
              <Link to="/product-offering" className="text-black hover:text-primary">Product Offering</Link>
              <Link to="/about" className="text-black hover:text-primary">About Us</Link>
              <Link to="/get-started">
                <Button className="bg-secondary hover:bg-secondary/90 text-white w-full">Get Started</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;