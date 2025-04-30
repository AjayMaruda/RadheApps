import React, { useEffect, useRef, useState } from "react";
import { services } from "../assets/servicesSec";
import { motion } from "framer-motion";

const ServiceVertical = ({ autoplay = true, pauseOnHover = true }) => {
  const [scrolling, setScrolling] = useState(autoplay);
  const containerRef = useRef(null);
  const speed = 1.5; // Scroll speed in pixels per tick

  const handleMouseEnter = () => {
    if (pauseOnHover) setScrolling(false);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay) setScrolling(true);
  };

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    if (scrolling && container) {
      scrollInterval = setInterval(() => {
        if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += speed;
        }
      }, 16); // ~60fps
    }

    return () => clearInterval(scrollInterval);
  }, [scrolling, speed]);

  return (
    <div className="relative h-[700px] w-full bg-white text-black py-6">
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col gap-6 h-full px-6 scroll-smooth"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Double the content for smooth looping */}
        {[...services, ...services].map((item, index) => (
          <motion.div
            key={index}
            className="min-h-[120px] shrink-0 p-6 bg-white hover:shadow-sm rounded-md hover:bg-gray-100 transition border-2 border-black"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-black mt-2">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceVertical;
