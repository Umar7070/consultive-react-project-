import React from 'react';
import { FaChevronLeft, FaChevronRight, FaLightbulb, FaLaptop } from 'react-icons/fa';
import { LuBriefcaseBusiness } from "react-icons/lu";

const services = [
  {
    title: 'Sustainability',
    description:
      'When it comes to sustainability & corporate responsibility, we believe the normal rules of business.',
    icon: <FaLightbulb />,
  },
  {
    title: 'Performance',
    description:
      'In a contract, performance deemed to be the fulfillment of an obligation in a manner that releases.',
    icon: <LuBriefcaseBusiness />,
  },
  {
    title: 'Organization',
    description:
      'We help business improve financial performance by ensuring the entire organization system is aligned.',
    icon: <FaLaptop />,
  },
  {
    title: 'Business Growth',
    description:
      'The process of improving some of our enterprise’s success. Business growth can be achieved.',
    icon: '📈',
  },
];

const ServicesSection = () => {
  return (
    <div className="py-12 px-4 md:px-10 lg:px-20 bg-gray-50 text-center">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 border-b-2 border-sky-500 inline-block">
          Our Services
        </h2>
        <div className="flex space-x-3 text-sky-500 text-lg md:text-xl">
          <button className="hover:text-sky-700 transition">
            <FaChevronLeft />
          </button>
          <button className="hover:text-sky-700 transition">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col h-full bg-white border border-transparent transition-all duration-2000 rounded-lg shadow-md hover:shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-sky-400 opacity-0 group-hover:opacity-60 transition-all duration-500 translate-y-[-100%] group-hover:translate-y-0 z-0"></div>

            <div className="relative z-10 py-8">
              <div className="w-20 h-20 mx-auto flex items-center justify-center text-5xl text-sky-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
            </div>

            <div className="relative z-10 p-6 flex flex-col justify-between flex-1 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white transition-all duration-300 flex-1">
                {service.description}
              </p>
              {/* Updated button with hover effect */}
              <button className="mt-4 text-sm px-4 py-2 rounded-full bg-gray-100 hover:bg-sky-500 text-gray-700 hover:text-white transition-all duration-300">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
