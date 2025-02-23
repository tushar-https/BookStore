import React from "react";
import Navbar from "./navbar";

const Contact = () => {
  return (
<>
<Navbar/>
<div className="max-w-screen-xl mx-auto px-4 md:px-20 py-10 mt-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mt-2">
        We'd love to hear from you! Reach out for any inquiries.
      </p>

      <div className="mt-8 bg-white shadow-md p-6 rounded-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10 text-center text-gray-700">
        <p>Email: lostsamurai691@gmail.com</p>
        <p>Phone: +91 9575837469</p>
        <p>Address: 123 Bookstore Street, Dehradun, India</p>
      </div>
    </div>

</>
    
  );
};

export default Contact;
