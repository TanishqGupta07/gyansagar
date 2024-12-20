import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Gyan Sagar Vidya Niketan
          </Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/about" className="hover:text-gray-200">About</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
            <Link to="/gallery" className="hover:text-gray-200">Gallery</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;