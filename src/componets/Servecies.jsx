import React from "react";
import { services } from "../assets/servicesSec";

const Servecies = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid gap-12 lg:grid-cols-2">
      
      <div className="space-y-6 flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full shadow-md" />
          <p className="text-gray-500 font-bold tracking-wider uppercase text-lg">
            Services
          </p>
        </div>

        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold leading-tight text-black max-w-3xl">
          <span className="text-gray-400">
            We Create New Solutions and Transform Existing Ones{" "}
          </span>
          with New Gen Technologies To Make Your Business Future‑proof
        </h2>

        {/* Image with overlay text */}
        <div className="relative mt-6">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-lg px-4">
          </div>
        </div>

        {/* Consultation button */}
        <button className="self-start bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition">
          Book 30 Min C‑Level Consultation →
        </button>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-8">
        {services.map((svc) => (
          <div key={svc.title} className="flex flex-col">
            <h3 className="text-xl font-semibold">{svc.title}</h3>
            <p className="text-gray-600 mt-1">{svc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servecies;
