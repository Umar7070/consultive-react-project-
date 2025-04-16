import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Felicity BNovak",
    title: "Designer",
    description:
      "Occasionally circumstances occur in which toil and pain can ...",
    phone: "+789-012-3456",
    email: "Felicity@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/7-1.jpg"
  },
  {
    name: "Mark Richarson",
    title: "HR Manager",
    description:
      "Idea of denouncing pleasure and praising pain was bor ...",
    phone: "+789-012-3456",
    email: "Mark@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/4-1.jpg"
  },
  {
    name: "Jorn Caraleno",
    title: "Accountant",
    description:
      "Builder of human happiness one rejects, dislikes, or avoids ...",
    phone: "+789-012-3456",
    email: "Jorn@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/6-1.jpg"
  },
  {
    name: "Asahtan Marsh",
    title: "President",
    description:
      "Pleasure rationally encounter consequences that are painful ...",
    phone: "+789-012-3456",
    email: "Asahtan@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-5.jpg"
  },
  {
    name: "Allan Donald",
    title: "Designer",
    description:
      "Sed blandit euismod ante, vitae laoreet odio dapibus a ...",
    phone: "+789-012-3456",
    email: "Donald@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-5.jpg"
  },
  {
    name: "Rich Bairstow",
    title: "HR Manager",
    description:
      "Integer sit amet tellus ut ex consequat accumsan. Integer ...",
    phone: "+789-012-3456",
    email: "Bairstow@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/5-1.jpg"
  },
  {
    name: "Venanda Jaye",
    title: "Accountant",
    description:
      "Ut in scelerisque augue. Class aptent taciti sociosqu ...",
    phone: "+789-012-3456",
    email: "Jaye@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/8-1.jpg"
  },
  {
    name: "Atley Fletcher",
    title: "President",
    description:
      "In aliquet efficitur libero vel gravida. Cras leo risus, ...",
    phone: "+789-012-3456",
    email: "Atley@Solutions.com",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/2-5.jpg"
  }
];

const TeamMember = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white p-4 rounded-2xl shadow-md text-center transition-all group hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="relative w-full h-[150px] mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-sky-200 bg-opacity-90 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <FaFacebookF className="text-white text-xl hover:text-blue-800 cursor-pointer transition" />
                <FaLinkedinIn className="text-white text-xl hover:text-blue-800 cursor-pointer transition" />
                <FaTwitter className="text-white text-xl hover:text-blue-800 cursor-pointer transition" />
              </div>
            </div>

            {/* Info Content */}
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-blue-600 mb-2">{member.title}</p>
            <p className="text-sm text-gray-600 mb-2">{member.description}</p>
            <p className="text-xs text-gray-500">Phone: {member.phone}</p>
            <p className="text-xs text-gray-500">Email: {member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
