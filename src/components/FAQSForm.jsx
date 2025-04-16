import React from "react";

export default function FAQForm() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:py-16 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h2>
          <div className="space-y-2">
            {[
              "Do you give any offer for premium customer?",
              "What makes you special from others?",
              "Why Would a Successful Entrepreneur Hire a Coach?",
              "What kind of financial advice do you give?",
              "What makes your financial projects special?",
              "How long will take us to raise capital?",
              "Can I offer my items for free on a promotional basis?",
            ].map((q, i) => (
              <div
                key={i}
                className={`border rounded-lg p-4 cursor-pointer transition hover:shadow-sm ${
                  i === 1 ? "bg-gray-100 border-blue-500" : "bg-white"
                }`}
              >
                <p className="text-sm font-medium text-gray-800 mb-1 flex items-center">
                  <span className="text-blue-500 mr-2">+</span> {q}
                </p>
                {i === 1 && (
                  <p className="text-gray-500 text-sm mt-2">
                    Nulla fringilla convallis lorem, nec vehicula ante condimentum ut.
                    dignissim tellus imperdiet maximus fringilla.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ask Your Questions Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Ask Your Questions
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Questions..."
              className="w-full px-4 py-2 border rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
