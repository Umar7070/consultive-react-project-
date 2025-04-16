import React from "react";

const blogs = [
  {
    id: 1,
    title: "Retail banks wake up to digital",
    author: "admin",
    category: "Blogs V1",
    date: "25 Apr",
    image:
      "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-2-370x200.jpg",
  },
  {
    id: 2,
    title: "Create great WordPress theme",
    author: "admin",
    category: "Blogs V1",
    date: "25 Apr",
    image:
      "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-3-370x200.jpg",
  },
  {
    id: 3,
    title: "How to improve employees skills",
    author: "admin",
    category: "Blogs V1",
    date: "25 Apr",
    image:
      "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-1.jpg",
  },
];

const FormBlog = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
        Latest From Blog
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 group"
          >
            <div className="relative">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute top-0 left-0 w-full h-48 bg-sky-400 opacity-0 group-hover:opacity-60 transition-all duration-500 translate-y-[-100%] group-hover:translate-y-0"></div>

              {/* Date Badge */}
              <div className="absolute top-2 right-2 bg-cyan-500 text-white text-sm px-2 py-1 rounded z-10">
                {blog.date}
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">
                by {blog.author} | {blog.category}
              </p>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                The great explorer of the truth, the master-builder of human
                happiness. No ...
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span className="hover:text-cyan-600 cursor-pointer">
                  Read More
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m3-4h4m-2-2v6"
                    />
                  </svg>
                  0 Comments
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBlog;
