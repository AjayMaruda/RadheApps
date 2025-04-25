import { solutionSec, solutionSec2, infoBox } from "../assets/solutionSec";
import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

const Solutions = () => {
  const [activeId, setActiveId] = useState("blockchain");
  const [hover, setHover] = useState("");

  const handleMouseEnter = useCallback((id) => {
    setActiveId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveId("");
  }, []);

  const handleHoverEnter = useCallback((id) => {
    setHover(id);
  }, []);

  const handleHoverLeave = useCallback(() => {
    setHover("");
  }, []);

  const getMotionDivClass = useMemo(() => {
    return (solId) =>
      `border rounded-lg text-center p-4 cursor-pointer transition ${
        hover === solId
          ? "shadow-xl scale-105 bg-gray-100"
          : "bg-white"
      }`;
  }, [hover]);

  const renderedSolutionSec = useMemo(() => {
    return solutionSec.map((item) => {
      const isActive = item.id === activeId;
      return (
        <div
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer transition-all duration-300"
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
    });
  }, [solutionSec, activeId, handleMouseEnter, handleMouseLeave]);

  const renderedInfoBox = useMemo(() => {
    return infoBox.map((box, idx) => (
      <div key={idx} className="flex items-center gap-3">
        <div className="w-10 h-10 bg-lime-100 text-lime-500 flex items-center justify-center rounded-md">
          {box.icon}
        </div>
        <span className="text-md font-medium">{box.text}</span>
      </div>
    ));
  }, [infoBox]);

  const renderedSolutionSec2 = useMemo(() => {
    return solutionSec2.map((sol) => (
      <motion.div
        key={sol.id}
        onMouseEnter={() => handleHoverEnter(sol.id)}
        onMouseLeave={handleHoverLeave}
        className={getMotionDivClass(sol.id)}
      >
        <div className="flex justify-center items-center h-10">
        </div>
        <h4 className="text-lg font-bold mt-2">{sol.title}</h4>
        <p className="text-sm text-gray-500 mt-1">{sol.subtitle}</p>
      </motion.div>
    ));
  }, [solutionSec2, handleHoverEnter, handleHoverLeave, getMotionDivClass]);

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-100">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 mt-10">
          <div className="w-2 h-2 bg-green-400 rounded-full shadow-md" />
          <p className="text-gray-500 font-bold tracking-wider uppercase text-lg">
            Solutions
          </p>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-black">
          Full- Spectrum Of{" "}
          <span className="bg-blue-100 px-2">AI-Powered Solutions</span>
          <br />
          Engineered For Global Impact
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        <div className="space-y-8">
          <div className="mt-6 lg:mt-0 space-y-6">
            {renderedSolutionSec}
          </div>
        </div>
        <div className="bg-white text-black p-8 rounded-lg shadow-md space-y-8 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">Engineering Web3 Excellence</h2>
              <p className="text-lg text-gray-600 mt-2">
                Powering businesses with enhanced security, optimized efficiency, and innovative decentralized solutions.
              </p>
            </div>
            <button className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-2xl hover:scale-105 transition">
              →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {renderedInfoBox}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
            {renderedSolutionSec2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
