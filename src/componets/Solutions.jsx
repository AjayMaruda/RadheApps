import { useState, useMemo, memo } from "react";
import { motion } from "framer-motion";
import {solutionSec} from "../assets/solutionSec";

const Solutions = memo(() => {
  const [activeId, setActiveId] = useState("startup");
  const [hoverSolId, setHoverSolId] = useState("");

  const reorderedSolutionSec = useMemo(() => {
    const order = ["startup", "studio", "apps", "intelligence", "blockchain"];
    return order.map((id) => solutionSec.find((item) => item.id === id));
  }, []);

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-100">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 mt-10">
          <div className="w-2 h-2 bg-green-400 rounded-full shadow-md" />
          <p className="text-gray-500 font-bold tracking-wider uppercase text-lg">
            Solutions
          </p>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-black">
          Full-Spectrum Of <span className="bg-blue-200 px-2">AI-Powered Solutions</span>
          <br />
          Engineered For Global Impact
        </h2>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row w-full gap-6">
        {/* Left Menu */}
        <div className="card rounded-box w-1/5 flex-grow p-6 space-y-8">
          <div className="space-y-6">
            {reorderedSolutionSec.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`cursor-pointer transition-all duration-300 p-3 rounded-lg ${
                    isActive ? "bg-white shadow-lg" : ""
                  }`}
                >
                  <h4
                    className={`text-lg font-bold ${
                      isActive ? item.color : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-sm mt-1 ${
                      isActive ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="divider lg:divider-horizontal"></div>

        {/* Right Content */}
        <div className="card bg-base-300 rounded-lg flex-grow p-6 space-y-8">
          {reorderedSolutionSec.map((item) => {
            if (item.id !== activeId) return null;
            return (
              <div key={item.id} className="space-y-16">
                <div>
                  <h2 className="text-2xl font-bold">{item.header}</h2>
                  <p className="text-lg text-gray-600 mt-2">{item.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  {item.info.map((box, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-lime-300 text-lime-600 flex items-center justify-center rounded-md">
                        {box.icon}
                      </div>
                      <span className="text-md font-medium">{box.text}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                  {item.solutions.map((sol) => (
                    <motion.div
                      key={sol.id}
                      onMouseEnter={() => setHoverSolId(sol.id)}
                      onMouseLeave={() => setHoverSolId("")}
                      className={`border rounded-lg text-center p-4 cursor-pointer transition ${
                        hoverSolId === sol.id ? "shadow-xl scale-105 bg-gray-100 border-2 border-black" : "bg-white"
                      }`}
                    >
                      <div className="flex justify-center items-center h-10"></div>
                      <h4 className="text-lg font-bold mt-2">{sol.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 font-semibold">{sol.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Solutions;
