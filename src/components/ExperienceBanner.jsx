import React from "react";

export default function ExperienceBanner() {
  return (
    <div className="bg-sky-400 text-white py-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
      <p className="text-center md:text-left text-base md:text-lg font-medium">
        Over 20 years of experience we’ll ensure you get the best guidance.
      </p>
      <button className="mt-4 md:mt-0 border border-white rounded-full px-6 py-2 text-sm font-bold hover:bg-white hover:text-sky-500 transition-colors">
        REQUEST QUOTE
      </button>
    </div>
  );
}
