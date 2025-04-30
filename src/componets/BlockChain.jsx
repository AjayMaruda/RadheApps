import React from "react";
import { Link } from "react-router-dom";
import { solutions, FAQ } from './blockchainSec';
import Footer from "./Footer";


const BlockChain = () => {
  const blockchainFeatures = [
    "Full-stack blockchain with custom L1 & L2 scalability",
    "Scalable smart contracts with auto-optimization features",
    "Enterprise-grade security with zero downtime assurance",
  ];

  return (
    <>
      {/* Navbar */}
      <div className="bg-[#ffffff] sticky top-0 z-50">
        <div className="navbar flex justify-start pl-5">
          <div className="font-bold text-xl text-black p-2 rounded-md">
            <Link to="/">
              <span className="text-[#32CD32]">RA</span>BlockChain
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div  >
        <div className="absolute inset-0 bg-[#101828] opacity-80"></div>
        <div className="relative justify-start px-6 md:px-10 md:pt-15 w-full md:w-2/5 lg:w-1/3 leading-relaxed space-y-2 mb-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Need Expert Blockchain Development Services?
          </h1>0
          <p className="text-white leading-relaxed text-sm md:text-base">
            Partner with the most trusted blockchain app development company
            delivering secure, scalable solutions for enterprises and startups
            worldwide.
          </p>
          <ul className="space-y-2 text-lg text-white relative">
            {blockchainFeatures.map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <svg
                  fill="#32CD32"
                  height="24px"
                  width="24px"
                  viewBox="-61.44 -61.44 634.88 634.88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256,5.333C114.88,5.333,0,117.76,0,256s114.88,250.667,256,250.667S512,394.24,512,256S397.12,5.333,256,5.333z M256,485.333C126.613,485.333,21.333,382.4,21.333,256S126.613,26.667,256,26.667S490.667,129.493,490.667,256 S385.387,485.333,256,485.333z" />
                  <path d="M369.28,247.467l-181.653-133.44c-4.693-3.627-11.307-2.773-14.933,1.92c-3.627,4.693-2.773,11.307,1.92,14.933 L344.96,256L175.04,380.693c-4.8,3.52-5.76,10.133-2.24,14.933c3.52,4.8,10.133,5.76,14.933,2.24L369.387,264.64c4.8-3.52,5.76-10.133,2.24-14.933C370.88,248.853,370.133,248.107,369.28,247.467z" />
                </svg>
                {text}
              </li>
            ))}
          </ul>
          <button className="mt-5 bg-[#32CD32] hover:shadow-md hover:shadow-green-300 text-black font-bold py-3 hover:translate-x-1 px-6 rounded-md flex border-2 border-white items-center gap-2">
            Start Your Blockchain Journey →
          </button>
        </div>
      </div>

      {/* Heading */}
      <div className="flex justify-center items-center">
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex flex-col">
            <span>Blockchain App Development Company</span>
            <span className="mt-2">with Industry-Leading Results</span>
          </h1>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center space-x-6 flex-wrap px-4 md:px-0 mb-10">
        {/* Stat 1 */}
        <div className="stats shadow w-full md:w-2/12 border-2">
          <div className="stat">
            <div className="stat-title font-semibold">Smart Contracts Deployed</div>
            <div className="stat-value text-xl">200+</div>
            <div className="stat-desc font-bold">On Mainnet & Testnet</div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="stats shadow w-full md:w-2/12 border-2">
          <div className="stat">
            <div className="stat-title font-semibold">Transactions Per Second</div>
            <div className="stat-value text-xl">3,000+</div>
            <div className="stat-desc font-bold">Ultra-High Throughput</div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="stats shadow w-full md:w-2/12 border-2">
          <div className="stat">
            <div className="stat-title font-semibold">Industry Use Cases</div>
            <div className="stat-value text-xl">30+</div>
            <div className="stat-desc font-bold">Across 10+ Sectors</div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="stats shadow w-full md:w-2/12 border-2">
          <div className="stat">
            <div className="stat-title font-semibold">Certified Experts</div>
            <div className="stat-value text-xl">50+</div>
            <div className="stat-desc font-bold">Blockchain Engineers</div>
          </div>
        </div>
      </div>
      <div className="bg-[#0c0f1f] text-white px-6 md:px-20 py-16">
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
            <div
              key={i}
              className={`rounded-xl border-2 p-6 bg-[url('src/images/blockchain-bg.jpg')] hover:shadow-lg transition hover:border-green-400`}
            >
              <div className="text-4xl mb-4">{sol.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
              <p className="text-gray-400 text-sm">
                {sol.linkText ? (
                  <>
                    <a
                      href={sol.linkHref}
                      className={`font-semibold ${sol.linkColor} hover:underline`}
                    >
                      {sol.linkText}
                    </a>{" "}
                    {sol.description.replace(sol.linkText, "")}
                  </>
                ) : (
                  sol.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-10 space-y-10">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">FAQ</h1>
      </div>
    <FAQ />
    </div>
    <Footer />
    </>
  );
};

export default BlockChain;
