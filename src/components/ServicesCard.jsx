import React from "react";

const cardData = [
  {
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/2-1-300x203.jpg",
    title: "About Business",
    description:
      "We have built enviable reputation in all the consumer goods, heavy industry, hightech & ...",
  },
  {
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-1.jpg",
    title: "Advanced Analytics",
    description:
      "Business analytics (BA) is the practice of iterative, methodical exploration of our organization’s data emphasis.",
  },
  {
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-1-300x203.jpg",
    title: "Customer Insights",
    description:
      "Customer Insight Analytics solutions deliver targeted and actionable customer analysis that helps financial.",
  },
  {
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-1-300x203.jpg",
    title: "Customer Insights",
    description:
      "Customer Insight Analytics solutions deliver targeted and actionable customer analysis that helps financial.",
  },
  {
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-1-300x203.jpg",
    title: "Customer Insights",
    description:
      "Customer Insight Analytics solutions deliver targeted and actionable customer analysis that helps financial.",
  },
  {
    image: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-1-300x203.jpg",
    title: "Customer Insights",
    description:
      "Customer Insight Analytics solutions deliver targeted and actionable customer analysis that helps financial.",
  },
];

const ServicesCard = () => {
  return (
    <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Welcome to the Consultive</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are experts in this industry with over 100 years experience. What that means is you are going to get the right solution. Please find our services.
        </p>
      </div> */}

      {/* Grid with 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl"
          >
            {/* Image with sliding overlay */}
            <div className="relative group h-52 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Sliding Skyblue Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-sky-300 transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 opacity-70" />
            </div>

            {/* Card Text */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
