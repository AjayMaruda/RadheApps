import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import { DEFAULT_ITEMS } from "../assets/inducstrySec";

const IndustryCarousel = () => {
  const originalItems = DEFAULT_ITEMS;
  const items = [originalItems[originalItems.length - 1], ...originalItems, originalItems[0]];
  const baseWidth = 320;
  const autoplayDelay = 3000;
  const containerPadding = 16;
  const GAP = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 due to cloning
  const [isAnimating, setIsAnimating] = useState(false);
  const x = useMotionValue(0);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    if (!isAnimating) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isAnimating]);

  const prev = () => {
    if (!isAnimating) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -50 || velocity < -300) {
      next();
    } else if (offset > 50 || velocity > 300) {
      prev();
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, autoplayDelay);
    return () => clearInterval(intervalRef.current);
  }, [next, autoplayDelay]);

  // Handle seamless loop jump
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      if (currentIndex === items.length - 1) {
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        setCurrentIndex(items.length - 2);
      }
    }, 500); // animation duration
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const getVisibleIndex = () => {
    if (currentIndex === 0) return originalItems.length - 1;
    if (currentIndex === items.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div className="relative overflow-hidden p-4 w-full">
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        ›
      </button>

      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: -trackItemOffset * (items.length - 1), right: 0 }}
        style={{ gap: `${GAP}px`, x }}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onDragEnd={handleDragEnd}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="shrink-0 relative text-white rounded-[32px] overflow-hidden border border-black bg-white"
            style={{ width: itemWidth, height: 420 }}
          >
            <div
              className="absolute inset-0 bg-white bg-center bg-cover border-black"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="relative z-10 flex flex-col h-full justify-center px-3 ">
              <h3 className="text-2xl font-bold mb-6 text-black ">{item.title}</h3>
              <div className="flex flex-col gap-3">
                {item.items.map((subItem, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 border border-black text-black rounded-full text-sm font-medium w-fit"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {originalItems.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
              getVisibleIndex() === index ? "bg-black scale-110" : "bg-green-950"
            }`}
            onClick={() => setCurrentIndex(index + 1)}
            transition={{ duration: 0.15 }}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustryCarousel;
