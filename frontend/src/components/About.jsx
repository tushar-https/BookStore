import React from "react";
import Navbar from "./navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-10 mt-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600">
        About Us
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Learn more about our mission and story.
      </p>

      <div className="mt-8 bg-white shadow-md p-6 rounded-lg">
        <p className="text-gray-700 leading-7">
          Welcome to our bookstore! We are passionate about bringing the best
          books to readers of all ages. Our mission is to create a space where
          book lovers can discover new stories, authors, and perspectives.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-6">
          Our Journey
        </h2>
        <p className="text-gray-700 leading-7">
          Founded in 2023, our bookstore started as a small online shop with a
          vision to connect readers with books that inspire, educate, and
          entertain. Today, we have expanded to a thriving community of book
          lovers.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-6">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Wide collection of books from various genres.</li>
          <li>Fast and reliable delivery.</li>
          <li>Excellent customer support.</li>
          <li>Special discounts for loyal customers.</li>
        </ul>
      </div>
    </div>

    </>
    
  );
};

export default About;
