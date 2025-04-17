// BlogSection.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon from react-icons

const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      title: "Retail banks wake up to digital",
      date: "25 Apr",
      image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-1.jpg",
      desc: "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, …",
    },
    {
      id: 2,
      title: "Create great WordPress theme",
      date: "25 Apr",
      image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-single.jpg",
      desc: "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, …",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 gap-6">
      {/* Blog List */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white shadow-sm border rounded overflow-hidden relative group">
            <div className="relative">
              {/* Hover Effect Container */}
              <div className="relative w-full h-48 group">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                {/* Slide Down Sky Blue Hover Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-sky-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {/* Centered React Icon (Heart) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
                    <FaHeart />
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-sky-500 text-white text-xs px-2 py-1 rounded text-center">
                {blog.date}
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-500">by admin | Blogs V1</p>
              <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{blog.desc}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
                <span>💬 0 Comments</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/3 space-y-6">
        {/* Search */}
        <div className="border p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="border p-4">
          <h3 className="font-semibold text-lg mb-2">Categories</h3>
          <p className="text-sm text-gray-600">Blogs V1</p>
        </div>

        {/* Popular Post */}
        <div className="border p-4">
          <h3 className="font-semibold text-lg mb-4">Popular Post</h3>
          <div className="flex gap-4">
            <img src="https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-1.jpg" alt="Popular" className="w-16 h-16 object-cover" />
            <div>
              <p className="text-sm font-medium">Retail banks wake up to digital</p>
              <p className="text-xs text-gray-500">April 27, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
