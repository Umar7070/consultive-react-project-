import React from "react";
import { FaSearch } from "react-icons/fa";

const BlogLarge = () => {
  const blogPosts = [
    {
      title: "Retail banks wake up to digital",
      date: "April 27, 2022",
      img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-1.jpg",
    },
    {
      title: "Experts openion for save money",
      date: "April 27, 2022",
      img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-single.jpg",
    },
    {
      title: "Seminar for improve your business",
      date: "April 26, 2022",
      img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/photo-17-685x457-1-768x419.jpg",
    },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-16 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        Home / <span className="text-blue-500">Blog Large</span>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Blog */}
        <div className="md:col-span-2">
          <div className="bg-white shadow-md rounded overflow-hidden group relative">
            <div className="relative overflow-hidden">
              <img
                src={blogPosts[0].img}
                alt="Blog Cover"
                className="w-full h-auto object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-sky-300 opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold p-2">
                <p className="text-center leading-none">
                  27<br />Apr
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-blue-500 uppercase font-semibold mb-1">
                Blogs V1
              </p>
              <h2 className="text-xl font-bold mb-2">
                Retail banks wake up to digital
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                by admin | Apr 27, 2022 | 0 Comments
              </p>
              <p className="text-gray-700 text-sm mb-4">
                The great explorer of the truth, the master-builder of human happiness. No
                one rejects, dislikes, avoids pleasure itself...
              </p>
              <button className="text-sm px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 rounded shadow-sm"
            />
            <button className="absolute top-2 right-3 text-gray-500">
              <FaSearch />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="text-sm text-gray-700">
              <li className="hover:text-blue-500 cursor-pointer">Blogs V1</li>
            </ul>
          </div>

          {/* Popular Post */}
          <div>
            <h3 className="font-semibold mb-2">Popular Post</h3>
            <div className="space-y-4">
              {blogPosts.map((post, i) => (
                <div key={i} className="flex items-start space-x-3 group relative">
                  <div className="relative w-14 h-14 overflow-hidden rounded">
                    <img
                      src={post.img}
                      alt="post"
                      className="w-14 h-14 object-cover"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-sky-300 opacity-0 group-hover:opacity-50 transition-all duration-500 rounded"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold hover:text-blue-500 cursor-pointer">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLarge;
