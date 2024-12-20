import React from 'react';
import Teacher from "../assets/teachers.jpeg";
import Navratri from "../assets/navratri.jpeg";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder images */}
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={Navratri}
            alt="Navratri"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={Teacher}
            alt="Teacher's Day"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/300"
            alt="Chemistry Lab"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/300"
            alt="Computer Lab"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/300"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/300"
            alt="Sports Activities"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;