import React from "react";
import Aurora from "../../ReactBits/Aurora";

const Info = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden py-20">
      <div className="absolute inset-0 z-[-1]">
        <Aurora />
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <div className="w-2 h-2 bg-green-400 rounded-full shadow-md" />
        <p className="text-white font-bold tracking-wider uppercase text-lg">
          WHY RADHE APPS?
        </p>
      </div>

      <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white text-center mt-4">
        How We Drive Successful Digital Transformation For You?
      </h2>
      <p className="text-white text-center pt-2 font-semibold max-w-2xl mx-auto">
        We combine next-gen AI capabilities with our proven track record to
        catapult your business to new heights, offering
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-md text-white h-full"
          >
          <div className="absolute top-4 right-4">
            {/* <img src="/icons/arrow-up-right.svg" alt="Arrow Icon" className="w-4 h-4" /> */}
          </div>
          <div className="p-6 flex flex-col justify-end h-full bg-white backdrop-blur-sm">
            {/* <img src="/icons/ai.svg" alt="AI Icon" className="h-10 w-10 mb-4" /> */}
            <h3 className="text-lg font-semibold text-black">AI-Powered Transformation</h3>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative bg-lime-300 text-black rounded-2xl p-6 shadow-md">
            <div className="absolute top-4 right-4">
              {/* <img src="/icons/arrow-up-right.svg" alt="Arrow Icon" className="w-4 h-4" /> */}
            </div>
            {/* <img src="/icons/human-centric.svg" alt="Human Icon" className="h-10 w-10 mb-4" /> */}
            <h3 className="text-lg font-semibold">Human-Centric Approach</h3>
          </div>

          <div className="relative bg-lime-300 text-black rounded-2xl p-6 shadow-md">
            <div className="absolute top-4 right-4">
              {/* <img src="/icons/arrow-up-right.svg" alt="Arrow Icon" className="w-4 h-4" /> */}
            </div>
            {/* <img src="/icons/scalability.svg" alt="Scalability Icon" className="h-10 w-10 mb-4" /> */}
            <h3 className="text-lg font-semibold">Future-Proof Scalability</h3>
          </div>

          <div className="relative col-span-1 sm:col-span-2 rounded-2xl overflow-hidden shadow-md text-white"
            >
            <div className="absolute top-4 right-4">
              {/* <img src="/icons/arrow-up-right.svg" alt="Arrow Icon" className="w-4 h-4" /> */}
            </div>
            <div className="p-6 flex flex-col justify-end h-48 bg-white backdrop-blur-sm">
              {/* <img src="/icons/communication.svg" alt="Communication Icon" className="h-10 w-10 mb-4" /> */}
              <h3 className="text-lg font-semibold text-black">
                Transparent Communication & Collaboration
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
