import React from "react";
import Aurora from "../../ReactBits/Aurora";
import {cardData} from "../assets/caseStudySec";  


const CaseStudy = () => { 

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-0 z-[-1]">
        <Aurora />
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-sm transform rotate-45 shadow-md" />
            <p className="text-gray-500 font-bold tracking-wider uppercase text-lg">
              Case Studies
            </p>
          </div>
          <h1 className="text-3xl text-[#FFFFFF] font-bold">
            Catch Innovation in Action With Us
          </h1>
          <p className="text-gray-400 text-lg">
            Peek into the future with our cutting-edge projects that are
            redefining industries.
          </p>
          <div className="flex w-full">
            <div className="space-y-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-black rounded-lg shadow-md p-6 w-48"
                >
                  <h2 className="text-xl font-semibold text-white mb-1">
                    {card.title}
                  </h2>
                  <p className="text-gray-400">{card.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
              <div className="relative w-[1100px] h-[700px] gap-0 ml-0">
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg gap-0" />
                <div className="relative rounded-xl overflow-hidden bg-white">
                   {/* Placeholder for the image - you'll need to handle the image source differently */}
                  <div className="w-full h-64 bg-white-800 flex items-center justify-center text-gray-400 rounded-xl"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Smart Fit
                    </h3>
                    <p className="text-black-300 text-sm">
                      Personalized nutrition and workout recommendations, backed
                      by advanced AI algorithms, machine learning, and
                      predictive analytics.
                    </p>
                    <div className="mt-3 flex items-center justify-between text-black-300 text-xs font-semibold uppercase">
                      <span>80% User Retention Rate</span>
                      <span>20K+ Meal Plans Generated</span>
                    </div>
                    <button className="mt-4 bg-green-400 text-black font-bold py-2 px-4 rounded-md hover:bg-green-500 transition-colors">
                      Download Case Study
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
