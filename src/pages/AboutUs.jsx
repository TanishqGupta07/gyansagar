import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            We strive for all-round development of students through various activities
            in a disciplined atmosphere.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Academic Excellence</h2>
          <ul className="space-y-2">
            <li>Science (PCM, PCB)</li>
            <li>Commerce with Maths/IP/Eco available</li>
            <li>Teaching through CBSE pattern</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Facilities</h2>
          <ul className="space-y-2">
            <li>Fully equipped Physics Lab</li>
            <li>Modern Chemistry Lab</li>
            <li>Computer Lab with latest equipment</li>
            <li>Well-stocked Library</li>
            <li>Biology Lab</li>
            <li>Sports facilities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;