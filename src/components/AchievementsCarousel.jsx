import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/achivements-4.jpg',
  'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/achivements-3.jpg',
  'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/achivements-1.jpg',
  'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/achivements-1.jpg',
  'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/achivements-1.jpg',
  'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/achivements-1.jpg',
];

const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Looping
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevSlide = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev + 1) % images.length); // Looping
  };

  return (
    <div className="py-10 px-4 md:px-12 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold border-b-2 border-sky-400 inline-block">
          Our Achievements
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow-md hover:bg-sky-100"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-md hover:bg-sky-100"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
            width: `${images.length * 20}%`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/5 p-2 flex justify-center"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="rounded shadow-md w-[220px] h-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsCarousel;
