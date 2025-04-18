import React from 'react';
import { FaHeart } from 'react-icons/fa';

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
    {
      id: 3,
      title: "How to improve efficiency skills",
      date: "25 Apr",
      image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-3.jpg",
      desc: "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, …",
    },
    {
      id: 4,
      title: "Tips for successful startups",
      date: "25 Apr",
      image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-4.jpg",
      desc: "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, …",
    },
    {
      id: 5,
      title: "Services for improving your business",
      date: "25 Apr",
      image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-5.jpg",
      desc: "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, …",
    },
    {
      id: 6,
      title: "Experts open for issues money",
      date: "25 Apr",
      image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/blog-large-6.jpg",
      desc: "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, …",
    },
  ];

  const projects = blogData.map((b) => b.image);

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
      {/* Blog Grid */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white border rounded overflow-hidden relative group shadow hover:shadow-md transition">
            <div className="relative w-full h-48">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-full h-full bg-sky-500/90 -translate-y-full group-hover:translate-y-0 transition duration-300 flex justify-center items-center text-white text-3xl">
                <FaHeart />
              </div>
              <div className="absolute top-2 right-2 bg-sky-500 text-white text-xs px-2 py-1 rounded">
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
        <div className="border p-4 rounded">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="border p-4 rounded">
          <h3 className="font-semibold text-lg mb-2">Categories</h3>
          <p className="text-sm text-gray-600">Blogs V1</p>
        </div>

        {/* Popular Post */}
        <div className="border p-4 rounded">
          <h3 className="font-semibold text-lg mb-4">Popular Post</h3>
          {blogData.slice(0, 3).map((post) => (
            <div key={post.id} className="flex gap-4 mb-4">
              <img src={post.image} alt="Popular" className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="text-sm font-medium">{post.title}</p>
                <p className="text-xs text-gray-500">April 27, 2022</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Projects */}
        <div className="border p-4 rounded">
          <h3 className="font-semibold text-lg mb-4">Our Projects</h3>
          <div className="grid grid-cols-3 gap-2">
            {projects.map((img, i) => (
              <img key={i} src={img} alt={`Project ${i}`} className="w-full h-16 object-cover rounded" />
            ))}
          </div>
        </div>

        {/* Business Inquiry */}
        <div className="bg-sky-500 text-white p-6 rounded text-center space-y-2">
          <h4 className="font-bold text-lg">For Business Enquiry</h4>
          <p className="text-sm">Need help with your project? Let’s talk about it.</p>
          <button className="bg-white text-sky-600 px-4 py-2 rounded font-semibold">Send Mail</button>
        </div>

        {/* Tag Cloud */}
        <div className="border p-4 rounded">
          <h3 className="font-semibold text-lg mb-2">Tag Cloud</h3>
          <div className="flex flex-wrap gap-2">
            {["Business", "Services", "Project", "Solutions", "Support", "Marketing"].map((tag) => (
              <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full pt-8 flex justify-center items-center gap-2">
        <button className="px-3 py-1 bg-gray-200 text-sm rounded">1</button>
        <button className="px-3 py-1 bg-sky-500 text-white text-sm rounded">2</button>
        <button className="px-3 py-1 bg-gray-200 text-sm rounded">3</button>
      </div>
    </div>
  );
};

export default BlogSection;
