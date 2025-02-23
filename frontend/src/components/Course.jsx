import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]); // State to store book data

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data); // Store API response in state
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are Delighted to have You{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white hover:bg-pink-700 rounded-md px-4 py-2 mt-5">
              Back
            </button>
          </Link>
        </div>

        {/* Display book list */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {book.length > 0 ? (
            book.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p className="text-center col-span-4">No books available</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;
