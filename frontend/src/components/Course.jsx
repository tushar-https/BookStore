import React from "react";
import list from "../list.json";
import Card from "./Card";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are Delighted to gave You{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white hover:bg-pink-700 rounded-md px-4 py-2 mt-5">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4">
        {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Course;
