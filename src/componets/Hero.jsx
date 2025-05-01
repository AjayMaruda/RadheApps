import React, { memo } from "react";
import Squares from "../../ReactBits/Squares";

const HeroListItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <svg
      width="30"
      height="30"
      viewBox="-2.5 -2.5 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.42C17.52 22.42 22 17.94 22 12.42C22 6.9 17.52 2.42 12 2.42C6.48 2.42 2 6.9 2 12.42C2 17.94 6.48 22.42 12 22.42Z"
        stroke="#000"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.56 8.42L13.62 11.29C13.78 11.43 13.9 11.61 13.99 11.8C14.08 11.99 14.12 12.21 14.12 12.42C14.12 12.63 14.08 12.84 13.99 13.04C13.9 13.23 13.78 13.41 13.62 13.55L10.56 16.42"
        stroke="#000"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {text}
  </li>
);

const Hero = memo(() => {
  const featuredPoints = [
    "Custom app development with advanced AI capabilities",
    "Generative AI solutions fueling business innovation.",
    "Top-tier data encryption with blockchain architecture.",
  ];

  return (
    <div className="relative w-full h-1/2 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-5">
        {/* Left Column - Main Heading */}
        <div className="max-w-[700px]">
          <h1 className="font-bold text-5xl sm:text-6xl font-sans text-black leading-tight">
            AI-Driven Digital Transformation Company
          </h1>
        </div>

        {/* Right Column - Features */}
        <div className="hidden md:block w-1/2 max-w-[600px] p-10 space-y-6">
          <p className="text-2xl text-black">
            We empower businesses to{" "}
            <span className="font-bold">Innovate, Optimize,</span> and{" "}
            <span className="font-bold">Scale</span>
          </p>

          <ul className="space-y-4 text-lg text-black">
            {featuredPoints.map((text, i) => (
              <HeroListItem key={i} text={text} />
            ))}
          </ul>
          
          <button className="mt-6 bg-lime-400 hover:shadow-xl text-black font-bold py-3 px-6 rounded-md flex items-center gap-2">
            Build Your Success Story
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Hero;