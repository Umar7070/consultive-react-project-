import React from "react";

const ConsultationForm = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4 relative inline-block">
        Request Free Consultation
        <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-sky-400"></span>
      </h2>

      <div className="bg-white shadow-md p-6 border border-gray-200">
        <form className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            placeholder="Your Message.."
            className="border border-gray-300 p-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400 md:row-span-3"
          ></textarea>
          <input
            type="email"
            placeholder="Your Mail*"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <select className="border border-gray-300 p-3 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400">
            <option>Select Service</option>
            <option>Web Design</option>
            <option>Development</option>
            <option>SEO</option>
          </select>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-sky-400 text-white font-semibold py-3 rounded-full hover:bg-sky-500 transition"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
