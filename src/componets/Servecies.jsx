import React, { memo } from "react";
import ServiceVertical from "./ServiceVertical";

const SectionHeader = ({ title, tagline, mainContent }) => (
  <div className="space-y-6 flex flex-col justify-center">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-400 rounded-full shadow-md" />
      <p className="text-gray-500 font-bold tracking-wider uppercase text-lg">
        {title}
      </p>
    </div>

    <h2 className="text-xl sm:text-4xl md:text-5xl font-bold leading-tight text-black max-w-3xl">
      <span className="text-gray-500">{tagline}</span>
      {mainContent}
    </h2>
  </div>
);

const Services = memo(() => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid gap-12 lg:grid-cols-2">
      {/* LEFT COLUMN - Content */}
      <div className="space-y-6 flex flex-col justify-center">
        <SectionHeader 
          title="Services"
          tagline="We Create New Solutions and Transform Existing "
          mainContent="One with New Gen Technologies To Make Your Business Future‑proof"
        />

        {/* Consultation button */}
        <button className="self-start bg-green-500 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-md transition">
          Book 30 Min C‑Level Consultation →
        </button>
      </div>

      {/* RIGHT COLUMN - Services List */}
      <div className="space-y-8">
        <ServiceVertical />
      </div>
    </section>
  );
});

export default Services;