import React from "react";
import { FaArrowRight, FaFilePdf, FaFileWord } from "react-icons/fa";
import TeamAndServices from "./TeamAndServices";
import KeyBenefits from "./KeyBenefits";
import ConsultationForm from "./ConsultationForm";

const AdvancedAnalytics  = () => {
  return (
    <div>

    <div className="flex flex-col lg:flex-row p-6 gap-6">
      {/* Sidebar with Brochures */}
      <div className="w-full lg:w-1/4 bg-white border border-gray-200 flex flex-col justify-between">
        <ul>
          <li className="bg-sky-500 text-white px-4 py-3 flex justify-between items-center font-semibold">
            Business Growth <FaArrowRight />
          </li>
          {[
            "Sustainability",
            "Performance",
            "Advanced Analytics",
            "Organization",
            "Customer Insights",
          ].map((item, index) => (
            <li
              key={index}
              className="px-4 py-3 border-t border-gray-100 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Brochures Section in Sidebar */}
        <div className="p-4 border-t border-gray-200 mt-4">
          <h2 className="text-base font-semibold mb-3">Our Brochures</h2>
          <div className="space-y-3">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
              <FaFilePdf className="text-red-600" /> Download PDF
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
              <FaFileWord className="text-blue-600" /> Download DOC
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-3/4 flex flex-col gap-6">
        <img
          src="https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/05/advanced-analytics.jpg"
          alt="Business Growth"
          className="w-full object-cover"
        />

        {/* Paragraph Section */}
        <div className="text-gray-700 space-y-4 text-sm leading-6">
          <p>
            We work closely with Employers across all industry sectors to ensure
            that their internal sed Human Resource systems processes align to
            their business requirements idea of denouncing pleasure and praising
            pain was born and I will give you a complete account of the system,
            and expound the actual teachings of the great explorer of the truth.
          </p>
          <p>
            Take a 360-degree view of your situations using our seds deep
            experience, industries specialization and global reach.
          </p>
          <p>
            Ensure that their internal sed Human Resource systems processes
            align to their business requirements idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings.
          </p>
        </div>
      </div>
    </div>
    <TeamAndServices/>
    <KeyBenefits/>
    <ConsultationForm/>
    </div>

  );
};

export default AdvancedAnalytics ;
