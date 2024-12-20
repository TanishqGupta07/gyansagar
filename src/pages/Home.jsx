import React from 'react';
import Main from "../assets/main.jpeg"

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-center text-4xl font-bold text-red-600 mb-6">
          Welcome to Gyan Sagar Vidya Niketan
        </h1>
        <p className="text-lg mb-4 text-center">
          Located at 170-Dwarkapuri, Near Footi Kothi Indore
        </p>
        <div className="flex items-center justify-center min-h-screen">
            <img src={Main} alt="main image" className="rounded shadow-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">School Timings</h2>
            <ul className="space-y-2">
              <li>Morning shift (Class VII to XII): 7:10 AM</li>
              <li>Noon Shift (Nursery to VI): 12:15 PM</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              <li>NCERT Curriculum - English Medium</li>
              <li>Quality education at affordable fee</li>
              <li>Experienced and trained teachers</li>
              <li>Well-equipped laboratories</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;