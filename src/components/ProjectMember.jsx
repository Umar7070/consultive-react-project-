import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/9.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/8.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/6.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/4.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/7.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-2.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/2-2.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-2.jpg",
  "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/5.jpg",
];

const ITEMS_PER_PAGE = 9;

export default function ImageGridSlider() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPrevious = () => setPage((prev) => Math.max(prev - 1, 0));
  const goToNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Project Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentImages.map((img, idx) => (
          <div
            key={idx}
            className="relative w-[400px] h-[300px] bg-gray-200 shadow rounded overflow-hidden group"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-sky-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out opacity-80 z-10 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">View</span>
            </div>

            {/* Image */}
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover relative z-20"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          disabled={page === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm ${
                i === page
                  ? "bg-sky-400 text-white"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          disabled={page === totalPages - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
