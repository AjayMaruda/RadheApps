import React, { useEffect, useRef, useState, useCallback, memo, useMemo } from "react";
import { motion, useMotionValue } from "framer-motion";
import { DEFAULT_ITEMS } from "../assets/inducstrySec";

// Constants
const AUTOPLAY_DELAY = 3000;
const CONTAINER_PADDING = 16;
const GAP = 16;
const BASE_WIDTH = 320;
const ANIMATION_DURATION = 500;

const IndustryCarousel = () => {
  // Create wrapped items array for infinite carousel effect
  // We add the last item at the beginning and the first item at the end
  // to create the illusion of an infinite loop
  const originalItems = DEFAULT_ITEMS;
  const items = useMemo(() => [
    originalItems[originalItems.length - 1], 
    ...originalItems, 
    originalItems[0]
  ], [originalItems]);

  // Calculate dimensions
  const itemWidth = BASE_WIDTH - CONTAINER_PADDING * 2;
  const trackItemOffset = itemWidth + GAP;

  // State management
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 due to cloning
  const [isAnimating, setIsAnimating] = useState(false);
  const x = useMotionValue(0);
  const intervalRef = useRef(null);

  // Navigation handlers with improved loop handling
  const next = useCallback(() => {
    if (!isAnimating) {
      // If we're at the last real item, animate to the cloned first item
      // The transition effect will handle jumping back to the real first item
      setCurrentIndex((prev) => prev + 1);
      
      // Reset autoplay timer when manually navigating
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
      }
    }
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (!isAnimating) {
      // If we're at the first real item, animate to the cloned last item
      // The transition effect will handle jumping back to the real last item
      setCurrentIndex((prev) => prev - 1);
      
      // Reset autoplay timer when manually navigating
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
      }
    }
  }, [isAnimating]);

  // Drag end handler
  const handleDragEnd = useCallback((_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (offset < -50 || velocity < -300) {
      next();
    } else if (offset > 50 || velocity > 300) {
      prev();
    }
  }, [next, prev]);

  // Set up autoplay
  useEffect(() => {
    intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  // Handle seamless loop transitions
  useEffect(() => {
    setIsAnimating(true);
    
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      
      // When we reach the cloned last item, instantly jump to the real first item without animation
      if (currentIndex === items.length - 1) {
        setCurrentIndex(1);
      } 
      // When we reach the cloned first item, instantly jump to the real last item without animation
      else if (currentIndex === 0) {
        setCurrentIndex(items.length - 2);
      }
    }, ANIMATION_DURATION);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, items.length]);

  // Get the visible index for indicators
  const getVisibleIndex = useCallback(() => {
    if (currentIndex === 0) return originalItems.length - 1;
    if (currentIndex === items.length - 1) return 0;
    return currentIndex - 1;
  }, [currentIndex, items.length, originalItems.length]);

  // Memoized carousel item component
  const CarouselItem = memo(({ item }) => (
    <motion.div
      className="shrink-0 relative text-white rounded-[32px] overflow-hidden border border-black bg-white"
      style={{ width: itemWidth, height: 420 }}
    >
      <div
        className="absolute inset-0 bg-white bg-center bg-cover border-black"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="relative z-10 flex flex-col h-full justify-center px-3">
        <h3 className="text-2xl font-bold mb-6 text-black">{item.title}</h3>
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
  ));

  // Memoized dot indicator component
  const DotIndicator = memo(({ index, isActive, onClick }) => (
    <motion.div
      className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
        isActive ? "bg-black scale-110" : "bg-green-950"
      }`}
      onClick={onClick}
      transition={{ duration: 0.15 }}
    />
  ));

  return (
    <div className="relative overflow-hidden p-4 w-full">
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Next slide"
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
          <CarouselItem key={index} item={item} />
        ))}
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {originalItems.map((_, index) => (
          <DotIndicator
            key={index}
            index={index}
            isActive={getVisibleIndex() === index}
            onClick={() => setCurrentIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(IndustryCarousel);