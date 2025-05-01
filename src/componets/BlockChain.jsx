import React, { memo } from "react";
import { Link } from "react-router-dom";
import { solutions, FAQ } from './blockchainSec';
import Footer from "./Footer";

// Extract reusable components
const CheckIcon = memo(() => (
  <svg
    fill="#32CD32"
    height="24"
    width="24"
    viewBox="-61.44 -61.44 634.88 634.88"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256,5.333C114.88,5.333,0,117.76,0,256s114.88,250.667,256,250.667S512,394.24,512,256S397.12,5.333,256,5.333z M256,485.333C126.613,485.333,21.333,382.4,21.333,256S126.613,26.667,256,26.667S490.667,129.493,490.667,256 S385.387,485.333,256,485.333z" />
    <path d="M369.28,247.467l-181.653-133.44c-4.693-3.627-11.307-2.773-14.933,1.92c-3.627,4.693-2.773,11.307,1.92,14.933 L344.96,256L175.04,380.693c-4.8,3.52-5.76,10.133-2.24,14.933c3.52,4.8,10.133,5.76,14.933,2.24L369.387,264.64c4.8-3.52,5.76-10.133,2.24-14.933C370.88,248.853,370.133,248.107,369.28,247.467z" />
  </svg>
));

const StatCard = memo(({ title, value, description }) => (
  <div className="stats shadow w-full md:w-2/12 border-2">
    <div className="stat">
      <div className="stat-title font-semibold">{title}</div>
      <div className="stat-value text-xl">{value}</div>
      <div className="stat-desc font-bold">{description}</div>
    </div>
  </div>
));

const SolutionCard = memo(({ icon, title, description, linkText, linkHref, linkColor }) => (
  <div className="rounded-xl border-2 p-6 bg-[url('src/images/blockchain-bg.jpg')] hover:shadow-lg transition hover:border-green-400">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">
      {linkText ? (
        <>
          <a href={linkHref} className={`font-semibold ${linkColor} hover:underline`}>
            {linkText}
          </a>{" "}
          {description.replace(linkText, "")}
        </>
      ) : (
        description
      )}
    </p>
  </div>
));

// Constants
const BLOCKCHAIN_FEATURES = [
  "Full-stack blockchain with custom L1 & L2 scalability",
  "Scalable smart contracts with auto-optimization features",
  "Enterprise-grade security with zero downtime assurance",
];

const STATS = [
  { title: "Smart Contracts Deployed", value: "200+", description: "On Mainnet & Testnet" },
  { title: "Transactions Per Second", value: "3,000+", description: "Ultra-High Throughput" },
  { title: "Industry Use Cases", value: "30+", description: "Across 10+ Sectors" },
  { title: "Certified Experts", value: "50+", description: "Blockchain Engineers" },
];

// Main component
const BlockChain = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="navbar flex justify-start pl-5">
          <div className="font-bold text-xl text-black p-2 rounded-md">
            <Link to="/">
              <span className="text-[#32CD32]">RA</span>BlockChain
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/src/images/blockchain-bg.jpg')] opacity-80 z-0"></div>
        <div className="relative justify-start p-9 md:px-10 md:pt-15 w-full md:w-2/5 lg:w-1/3 leading-relaxed space-y-5 mb-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Need Expert Blockchain Development Services?
          </h1>
          <p className="text-white leading-relaxed text-sm md:text-base">
            Partner with the most trusted blockchain app development company
            delivering secure, scalable solutions for enterprises and startups
            worldwide.
          </p>
          <ul className="space-y-2 text-lg text-white relative">
            {BLOCKCHAIN_FEATURES.map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckIcon />
                {text}
              </li>
            ))}
          </ul>
          <button className="mt-5 bg-[#32CD32] hover:shadow-md hover:shadow-green-300 text-black font-bold py-3 hover:translate-x-1 px-6 rounded-md flex border-2 border-white items-center gap-2">
            Start Your Blockchain Journey →
          </button>
        </div>
      </section>

      {/* Heading */}
      <section className="flex justify-center items-center">
        <div className="text-center mb-12 mt-36">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex flex-col">
            <span>Blockchain App Development Company</span>
            <span className="mt-2">with Industry-Leading Results</span>
          </h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex justify-center space-x-6 flex-wrap px-4 md:px-0 mb-10">
        {STATS.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </section>

      {/* Solutions Section */}
      <section className="bg-[#0c0f1f] text-white px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Future-Ready Blockchain Solutions That Drive Business Growth
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Leverage our blockchain development services to implement powerful solutions
            that enhance security, transparency, and efficiency in your operations.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => (
              <SolutionCard key={i} {...sol} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-10 space-y-10">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold">FAQ</h1>
        </div>
        <FAQ />
      </section>

      <Footer />
    </>
  );
};

export default memo(BlockChain);