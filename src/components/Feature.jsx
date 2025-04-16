import { FaRegLightbulb, FaCertificate, FaBriefcase } from "react-icons/fa";
import React from "react";

const features = [
  {
    icon: <FaRegLightbulb className="text-cyan-400 text-3xl group-hover:text-cyan-500 transition-colors duration-300" />,
    title: "Innovative Works",
    desc: "How all this mistaken idea of denouncing pleasures and praising pain was born and we will give you a complete account of the system."
  },
  {
    icon: <FaCertificate className="text-cyan-400 text-3xl group-hover:text-cyan-500 transition-colors duration-300" />,
    title: "Certified Company",
    desc: "Ever undertakes laborious physical exercise, except to obtain some advantage from it. To find fault with a consequences."
  },
  {
    icon: <FaBriefcase className="text-cyan-400 text-3xl group-hover:text-cyan-500 transition-colors duration-300" />,
    title: "Very Experienced",
    desc: "Again is there anyone who loves or pursues desires to obtain pain of itself, because it pain, but because circumstances great pleasure."
  }
];

const Feature = () => {
  return (
    <div className="py-12 px-4 md:px-10 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-md shadow-sm p-6 hover:shadow-lg hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1 bg-white"
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
