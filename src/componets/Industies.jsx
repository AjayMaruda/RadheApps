import React from "react";
import IndcustryCarousel from "../assets/IndustryCarousel";


const Industies = () => {
  return (
    <>
      <div className="py-20 px-16">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 ">
            <div className="w-2 h-2 bg-green-400 rounded-sm transform rotate-45 shadow-md" />
            <p className="text-gray-500 font-bold tracking-wider uppercase text-lg">
              Industries
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold border-black border-b-2 pb-2 text-black max-w-[80%]">
            Engineering Industry-specific Excellence With AI & Innovation
          </h1>
        </div>
      </div>
      <IndcustryCarousel />
    </>
  );
};

export default Industies;
