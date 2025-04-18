import React from "react";

const ProjectShowcase = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8 bg-white text-gray-800">
      {/* Left Section */}
      <div className="lg:w-3/4 w-full">
        <img
          src="https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/single-project.jpg"
          alt="Quality Control"
          className="w-full h-auto rounded-lg mb-4"
        />
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <div className="text-sm mb-2">
            <p><strong>Customer:</strong> John Doe</p>
            <p><strong>Live demo:</strong> <a href="#" className="text-blue-600">www.livedemo.com</a></p>
            <p><strong>Category:</strong> Finance & Legal</p>
            <p><strong>Date:</strong> 21 August, 2016</p>
            <p><strong>Tags:</strong> Financial Services</p>
          </div>
          <h2 className="text-xl font-semibold mb-2">Finance and legal work</h2>
          <p className="text-sm mb-4">
            The challenge is to bring company whose web service presence is brought up to date.
            The challenge is to ensure that when a client visits your website, they know about your projects.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Launch Project
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-1/4 w-full space-y-6">
        {/* Search */}
        <div className="flex items-center border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 outline-none"
          />
          <button className="bg-blue-600 p-2 text-white">🔍</button>
        </div>

        {/* Categories */}
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Categories</h3>
          <p className="text-sm text-blue-600">Blogs V1</p>
        </div>

        {/* Popular Posts */}
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Popular Post</h3>
          <div className="space-y-4 text-sm">
            {[
              {
                title: "Retail banks wake up to digital",
                date: "April 27, 2022",
                img: "https://via.placeholder.com/50",
              },
              {
                title: "Experts opinion for save money",
                date: "April 27, 2022",
                img: "https://via.placeholder.com/50",
              },
              {
                title: "Seminar for improve your business",
                date: "April 25, 2022",
                img: "https://via.placeholder.com/50",
              },
            ].map((post, i) => (
              <div key={i} className="flex gap-2 items-start">
                <img src={post.img} alt="thumb" className="w-12 h-12 rounded" />
                <div>
                  <p className="text-blue-600">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Projects */}
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="font-semibold">Our Projects</h3>
          {/* You can add project links or cards here */}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
