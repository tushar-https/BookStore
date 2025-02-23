import React from "react";

function Card({ item }) {
  if (!item || !item.image) {
    //ye wala if zaruri nhi hai
    return <div>Error: Invalid item data</div>;
  }

  //console.log(item);
  return (
    <>
      <div className="mt-4 my-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Books"
              className="w-full h-48 object-cover rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">-100%</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className=" cursor-pointer px-2 py-1 badge badge-outline hover:bg-pink-500 hover:text-white  duration-200">
                ${item.price} Buy Now
              </div>
              <div className=" badge badge-outline  hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">
                {item.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
