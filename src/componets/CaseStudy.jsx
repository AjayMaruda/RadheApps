import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aurora from "../../ReactBits/Aurora";
import { cardData, caseContents } from "../assets/caseStudySec";


const CaseStudy = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-0 z-[-1]">
        <Aurora />
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-sm transform rotate-45 shadow-md" />
            <p className="text-white font-bold tracking-wider uppercase text-lg">
              Case Studies
            </p>
          </div>
          <h1 className="text-3xl text-[#FFFFFF] font-bold">
            Catch Innovation in Action With Us
          </h1>
          <p className="text-white text-lg">
            Peek into the future with our cutting-edge projects that are redefining industries.
          </p>
          <div className="flex w-full gap-6">
            <div className="space-y-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`bg-black rounded-lg shadow-md p-6 w-48 cursor-pointer transition-all duration-300 hover:shadow-white ${
                    activeIndex === index ? "ring-2 ring-green-400" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <h2 className="text-xl font-semibold text-white mb-1">
                    {card.title}
                  </h2>
                  <p className="text-gray-400">{card.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card bg-white rounded-box grid h-20 flex-grow place-items-center">
              <div className="relative w-[1076px] h-[720px] rounded-[2rem] shadow-2xl overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                  {caseContents[activeIndex] && (
                    <motion.div
                      key={activeIndex}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-[#ffffff] p-6 flex flex-col gap-4 text-black rounded-[1.5rem] gap-y-12"
                    >
                      <h3 className="text-4xl font-bold ">
                        {caseContents[activeIndex].title}
                      </h3>
                      <p className="text-xl font-semibold w-6/12 capitalize">
                        {caseContents[activeIndex].description}
                      </p>
                      <div className="mt-4 flex flex-row gap-16 text-xl font-semibold rounded-md p-2 capitalize">
                        {caseContents[activeIndex].stats.map((stat, i) => (
                          <span key={i}>{stat}</span>
                        ))}
                      </div>
                      <button className="mt-6 text-black font-bold p-4  w-4/12 rounded-md hover:shadow-lg bg-green-500 transition-colors">
                        {caseContents[activeIndex].button}
                        <svg
                          className="w-4 h-4 inline-block ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CaseStudy;
