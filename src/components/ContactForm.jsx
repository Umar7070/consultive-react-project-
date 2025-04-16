import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-[#1c1c1c] text-white px-4 py-10 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Left - Contact Details */}
        <div className="bg-[#2a2a2a] p-6 rounded-lg flex-1">
          <h2 className="text-xl font-semibold border-b-2 border-cyan-500 pb-2 mb-4">Contact Details</h2>
          <p className="text-sm mb-6">Please find below contact details and contact us today!</p>
          <div className="flex items-start gap-3 mb-4">
            <FaPhoneAlt className="text-cyan-400 mt-1" />
            <span>Phone: +321 456 78 901</span>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <FaEnvelope className="text-cyan-400 mt-1" />
            <span>Mailus@Consultive.com</span>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-cyan-400 mt-1" />
            <span>Apple Street, New York, USA</span>
          </div>
        </div>

        {/* Right - Callback Form */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold border-b-2 border-cyan-500 pb-2 mb-4">Request For Call Back</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#2a2a2a] text-white p-3 rounded outline-none focus:ring-2 ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email *"
              className="bg-[#2a2a2a] text-white p-3 rounded outline-none focus:ring-2 ring-cyan-500"
            />
            <input
              type="text"
              placeholder="Ph Num"
              className="bg-[#2a2a2a] text-white p-3 rounded outline-none focus:ring-2 ring-cyan-500"
            />
            <select
              className="bg-[#2a2a2a] text-white p-3 rounded outline-none focus:ring-2 ring-cyan-500"
            >
              <option>Enquiry About</option>
              <option>Consulting</option>
              <option>Support</option>
              <option>Other</option>
            </select>
            <div className="col-span-1 md:col-span-2">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded mt-2 transition duration-200">
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
