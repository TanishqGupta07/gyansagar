import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> 170-Dwarkapuri, Near Footi Kothi Indore
            </p>
            <p>
              <strong>Phone:</strong> 9644019898
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;