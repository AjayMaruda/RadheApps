import React from "react";
import Aurora from "../../ReactBits/Aurora";

const Info = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden py-20">
      <div className="absolute inset-0 z-[-1]">
        <Aurora />
      </div>

      {/* Header */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <div className="w-2 h-2 bg-green-400 rounded-full shadow-md" />
        <p className="text-white font-bold tracking-wider uppercase text-lg">
          WHY RADHE APPS?
        </p>
      </div>

      <h2 className="text-2xl md:text-4xl font-bold text-white text-center mt-4">
        How We Drive Successful Digital Transformation For You?
      </h2>
      <p className="text-white text-center pt-2 font-semibold max-w-2xl mx-auto">
        We combine next-gen AI capabilities with our proven track record to catapult your business to new heights, offering
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">

        {/* Card 1 */}
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md text-black transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
          <div className="p-6">
            <h3 className="text-xl font-semibold">AI-Powered Transformation</h3>
            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
              <p className="text-sm mt-2">From predictive analytics to intelligent automation, we deploy AI to solve complex business challenges and uncover new opportunities.</p>
            </div>
          </div>
        </div>

        {/* Card 2 & 3 */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Card 2 */}
          <div className="group relative bg-lime-300 text-black rounded-2xl p-6 shadow-md h-64 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
            
            <h3 className="text-lg font-semibold">Human-Centric Approach</h3>
            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-24">
              <p className="text-sm mt-2">We place users at the core of our design and strategy to ensure seamless adoption and satisfaction.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-lime-300 text-black rounded-2xl p-6 shadow-md h-64 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
            <div className="absolute top-4 right-4">
              
            </div>
            
            <h3 className="text-lg font-semibold">Future-Proof Scalability</h3>
            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-24">
              <p className="text-sm mt-2">Our solutions are built to grow with your business, ensuring sustainability and efficiency long term.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative col-span-1 sm:col-span-2 rounded-2xl overflow-hidden shadow-md text-black bg-white h-64 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
            <div className="absolute inset-0 bg-white bg-opacity-40"></div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <h3 className="text-lg font-semibold text-black">Transparent Communication & Collaboration</h3>
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-24">
                <p className="text-sm mt-2">We keep you in the loop at every step with collaborative workflows and crystal-clear communication.</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
