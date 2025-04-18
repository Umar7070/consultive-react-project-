import React from "react";

const cardData = [
  {
    title: "Financial Service",
    description: "Maecenas in magna sed est pharetra ipsum condimentum.",
    link: "Services V3",
    icon: "https://cdn-icons-png.flaticon.com/512/483/483361.png",
  },
  {
    title: "Manufacturing",
    description: "Maecenas in magna sed est pharetra ipsum condimentum.",
    link: "Services V3",
    icon: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
  },
  {
    title: "Health Department",
    description: "Maecenas in magna sed est pharetra ipsum condimentum.",
    link: "Services V3",
    icon: "https://cdn-icons-png.flaticon.com/512/3408/3408505.png",
  },
  {
    title: "Surface Transport",
    description: "Maecenas in magna sed est pharetra ipsum condimentum.",
    link: "Services V3",
    icon: "https://cdn-icons-png.flaticon.com/512/67/67347.png",
  },
];

const SmartApproach = () => {
  return (
    <section className="py-10 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Our Smart Approach
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-6 overflow-hidden shadow-md border hover:shadow-xl transition duration-500 transform hover:scale-105"
          >
            <div className="flex justify-center mb-4 z-10 relative">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-center z-10 relative">{card.title}</h3>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <p className="text-sm mb-2 text-center">{card.description}</p>
              <a href="#" className="text-blue-500 underline">
                {card.link}
              </a>
            </div>

            {/* Animated ring effect (inside to outside pulse) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent scale-0 group-hover:scale-110 rounded-xl transition-transform duration-500 ease-out z-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartApproach;
