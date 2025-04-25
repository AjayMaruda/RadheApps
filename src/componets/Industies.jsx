import React from "react";
import { slides } from "../assets/inducstrySec";

const Industies = () => {
  return (
    <>
      <div className="py-20 px-16">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-sm transform rotate-45 shadow-md" />
            <p className="text-gray-500 font-bold tracking-wider uppercase text-lg">
              Industries
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-black max-w-[80%]">
            Engineering Industry-specific Excellence With AI & Innovation
          </h1>
        </div>
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 bg-white text-black rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 p-2 bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold">{slide.title}</h2>
                {slide.items.map((item, i) => (
                  <p key={i} className="text-sm px-2 py-1 border border-white rounded-md">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle bg-white shadow-md"
          onClick={() =>
            document
              .querySelector(".overflow-x-auto")
              ?.scrollBy({ left: -300, behavior: "smooth" })
          }
        >
          ❮
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle bg-white shadow-md"
          onClick={() =>
            document
              .querySelector(".overflow-x-auto")
              ?.scrollBy({ left: 300, behavior: "smooth" })
          }
        >
          ❯
        </button>
        </div>
    </>
  );
};

export default Industies;
