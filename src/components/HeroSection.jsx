import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-sky-400 h-[400px] flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Endless possibilities & opportunities.
      </h1>
      <p className="max-w-2xl text-sm md:text-base mb-6">
        Anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because
        occasionally circumstances occur in which toil and pain can procure him some great pleasure.
      </p>
      <button className="bg-white text-sky-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
        VIEW SERVICES
      </button>
    </div>
  );
}
