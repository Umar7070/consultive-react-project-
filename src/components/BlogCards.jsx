import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogData = [
  {
    title: "Tips for successful Ways to grow",
    date: "28 Apr",
    category: "Blogging",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-single.jpg",
  },
  {
    title: "How to Improve employees skills",
    date: "28 Apr",
    category: "Blogging",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-4.jpg",
  },
  {
    title: "How to Improve employees skills",
    date: "28 Apr",
    category: "Blogging",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-4-768x419.jpg",
  },
];

export default function BlogSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-lg rounded-2xl bg-white"
          >
            {/* Flex column layout */}
            <div className="flex flex-col">
              {/* Image section */}
              <div className="relative w-full h-[70%]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  {post.date}
                </div>
              </div>

              {/* Content section below the image */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-blue-500 uppercase font-semibold">
                  {post.category}
                </p>
                <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">{post.description}</p>
                <button className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white text-sm font-medium transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button className="p-2 text-gray-500 hover:text-blue-600">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm font-semibold">
          1
        </div>
        <div className="w-8 h-8 bg-gray-200 text-gray-700 flex items-center justify-center rounded-full text-sm font-semibold">
          2
        </div>
        <div className="w-8 h-8 bg-gray-200 text-gray-700 flex items-center justify-center rounded-full text-sm font-semibold">
          3
        </div>
        <button className="p-2 text-gray-500 hover:text-blue-600">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
