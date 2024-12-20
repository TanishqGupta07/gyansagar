import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p>170-Dwarkapuri, Near Footi Kothi Indore</p>
            <p>Phone: 9644019898</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>Admission Process</li>
              <li>School Timings</li>
              <li>Facilities</li>
              <li>Academic Calendar</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <span className="cursor-pointer hover:text-gray-300">Facebook</span>
              <span className="cursor-pointer hover:text-gray-300">Twitter</span>
              <span className="cursor-pointer hover:text-gray-300">Instagram</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <p>&copy; 2024 Gyan Sagar Vidya Niketan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;