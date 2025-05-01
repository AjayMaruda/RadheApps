import React, { memo } from "react";
import Aurora from "../../ReactBits/Aurora";

const InfoCard = ({ title, description, bgColor = "bg-white", fullWidth = false }) => (
  <div 
    className={`group relative ${bgColor} ${fullWidth ? "col-span-1 sm:col-span-2" : ""} 
    rounded-2xl overflow-hidden shadow-md text-black h-64 transition-all duration-500 
    hover:shadow-xl hover:scale-[1.02] p-6`}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-24">
      <p className="text-sm mt-2">{description}</p>
    </div>
  </div>
);

const Info = memo(() => {
  const infoCards = [
    {
      title: "AI-Powered Transformation",
      description: "From predictive analytics to intelligent automation, we deploy AI to solve complex business challenges and uncover new opportunities."
    },
    {
      title: "Human-Centric Approach",
      description: "We place users at the core of our design and strategy to ensure seamless adoption and satisfaction.",
      bgColor: "bg-lime-300"
    },
    {
      title: "Future-Proof Scalability",
      description: "Our solutions are built to grow with your business, ensuring sustainability and efficiency long term.",
      bgColor: "bg-lime-300"
    },
    {
      title: "Transparent Communication & Collaboration",
      description: "We keep you in the loop at every step with collaborative workflows and crystal-clear communication.",
      fullWidth: true
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden py-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-[-1]">
        <Aurora />
      </div>

      {/* Section Header */}
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {/* First Card */}
        <InfoCard 
          title={infoCards[0].title} 
          description={infoCards[0].description} 
        />

        {/* Nested Grid for remaining cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infoCards.slice(1).map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor || "bg-white"}
              fullWidth={card.fullWidth || false}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Info;