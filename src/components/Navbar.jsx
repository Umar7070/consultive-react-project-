import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
];

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white px-4 sm:px-10 transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-[#0B1F41]/90 z-0" />

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 z-10 p-2 border border-white"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 z-10 p-2 border border-white"
      >
        <FaArrowRight />
      </button>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Choose right solution <br /> for your business
        </h1>
        <p className="text-sm sm:text-base mt-4">
          With over 10 years of experience helping businesses to find
          comprehensive solutions.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-black font-semibold py-2 px-4 hover:bg-gray-200 transition">
            OUR COMPANY
          </button>
          <button className="bg-sky-500 text-white font-semibold py-2 px-4 hover:bg-sky-600 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
