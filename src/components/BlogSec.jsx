import React from "react";

const BlogSec = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-8">
      {/* Left Content (Main Blog) */}
      <div className="md:w-2/3 w-full group relative overflow-hidden rounded-lg">
        <div className="relative">
          <img
            src="https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/photo-17-685x457-1.jpg"
            alt="City"
            className="w-full h-80 object-cover rounded-lg"
          />

          {/* Hover Overlay for main blog */}
          <div className="absolute top-0 left-0 w-full h-80 bg-sky-300 opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:translate-y-0 -translate-y-full rounded-lg z-10" />

          <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm z-20">
            <p className="leading-none text-center">
              <span className="block text-sm font-bold">27</span>
              <span className="text-xs">Apr</span>
            </p>
          </div>
        </div>

        <div className="mt-4 z-20 relative">
          <p className="text-xs text-blue-500">BLOGS VI</p>
          <h2 className="text-xl font-semibold mt-2">
            Experts openion for save money
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            by admin | Apr 27, 2022 | 0 Comments
          </p>
          <p className="text-gray-600 text-sm mt-3">
            The great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, avoids pleasure itself...
          </p>
          <button className="mt-4 px-4 py-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
            Read More
          </button>
        </div>
      </div>

      {/* Right Content (Sidebar) */}
      <div className="md:w-1/3 w-full space-y-6">
        {/* Our Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Projects</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded"
              >
                <img
                  src="https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-single.jpg"
                  alt={`Project ${num}`}
                  className="w-full h-16 object-cover rounded"
                />
                {/* Hover Overlay for sidebar images */}
                <div className="absolute top-0 left-0 w-full h-full bg-sky-300 opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:translate-y-0 -translate-y-full z-10 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* For Business Enquiry */}
        <div className="bg-blue-100 p-4 rounded-lg text-sm">
          <h4 className="font-bold text-blue-600 mb-2">For Business Enquiry</h4>
          <p className="text-gray-700 mb-3">
            You can also send us an email and we'll get in touch shortly.
          </p>
          <p className="text-gray-700 mb-3">
            Or call Toll Free Number - (+91)-00-700-2021.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send Mail
          </button>
        </div>

        {/* Tag Cloud */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Tag Cloud</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Banks",
              "Consultive",
              "Digital",
              "Export",
              "Employees",
              "Experts",
              "Openion",
              "Success",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-3 py-1 text-xs rounded hover:bg-gray-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSec;
