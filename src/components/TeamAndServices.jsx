import React from "react";
import { BsFillLaptopFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { GiFlatTire } from "react-icons/gi";

const teamMembers = [
  {
    name: "ATLEY FLETCHER",
    title: "President",
    phone: "+789-012-3456",
    email: "Atley@Solutions.com",
    image:
      "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/8-1.jpg",
  },
  {
    name: "VENANDA JOYE",
    title: "Accountant",
    phone: "+789-012-3456",
    email: "Joye@Solutions.com",
    image:
      "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/7-1.jpg",
  },
];

const services = [
  {
    icon: <GiFlatTire />,
    title: "Talent & HR Analytics",
    desc: "Which of ever underte laborious physical exercised excepts.",
  },
  {
    icon: <BsFillLaptopFill />,
    title: "Fraud & Risk Analytics",
    desc: "Great explorer the master builder working human happiness.",
  },
  {
    icon: <IoMdAnalytics />,
    title: "Marketing Analytics.",
    desc: "Chooses to enjoy a pleasure that has no anoing consequences.",
  },
];

export default function TeamAndServices() {
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-6 ml-4 mr-4">
      {/* Team section */}
      <div className="bg-white shadow p-4 w-full lg:w-1/3 space-y-4 pl-4 pr-4">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex items-start gap-4 border p-4 rounded">
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-gray-800">{member.name}</h2>
              <p className="text-blue-600 text-sm">{member.title}</p>
              <p className="text-sm text-gray-600">{member.phone}</p>
              <p className="text-sm text-gray-600">{member.email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Services section */}
      <div className="w-full lg:w-2/3 pl-4 pr-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Specific Services
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border p-6 text-center rounded-lg hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <button className="text-blue-500 text-sm underline hover:text-blue-700">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
