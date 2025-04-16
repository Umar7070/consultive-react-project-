import React from "react";

export default function LatestProject() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-8 max-w-7xl mx-auto">
      {/* Latest Projects */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 inline-block">
          Latest Projects
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {[
            "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-1.jpg",
            "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-3-370x200.jpg",
            "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/5-175x150.jpg",
            "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/6-175x150.jpg",
            "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/9-175x150.jpg",
            "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-2-175x150.jpg",
          ].map((src, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="rounded shadow-md transition-all duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 inline-block">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          These are just some of the most common questions we get asked. For anything else, please contact us – we would be delighted to help.
        </p>
        <div className="space-y-4">
          <div className="bg-white border p-4 rounded shadow">
            <p className="font-medium text-gray-800">
              What is the procedure to join with your company?
            </p>
          </div>
          <div className="bg-white border p-4 rounded shadow">
            <p className="font-medium text-blue-600">
              Do you give any offer for premium customer?
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Maecenas in magna sed est pharetra euismod. Ut tortor justo, dapibus ac est sit amet, hendrerit congue ligula.
            </p>
          </div>
          <div className="bg-white border p-4 rounded shadow">
            <p className="font-medium text-gray-800">
              What makes you special from others?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
