import React from "react";
import bg from "../assets/bg.png";

const AmazingNews = () => { 
  return (
    <div className="my-5 relative">
      <img className="w-full" src={bg} alt="Background" />
      <div className="absolute inset-0 flex flex-col text-white text-center justify-center items-center p-5">
        <h2 className="text-3xl font-bold mb-5">
          Create an Amazing Newspaper
        </h2>
        <p className="mb-7">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className="btn bg-[#D72050] font-medium text-white px-5 rounded-none">Learn More</button>
      </div>
    </div>
  );
};

export default AmazingNews;
