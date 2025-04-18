import React from 'react';

const cards = [
  {
    title: 'Our Mission',
    description:
      'Idea of denouncing pleasure and praising pain was born and I will give you a completed account of system expound the actual teachings.',
    image: 'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-4.jpg',
  },
  {
    title: 'Our Vision',
    description:
      'Know how to pursue pleasure rationally encounter consequences that are extremely painful nor again is there anyone or pursues.',
    image: 'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/2-4.jpg',
  },
  {
    title: 'Live Values',
    description:
      'Occasionally circumstances occur which toil & pain can procure some great pleasure to take trivialexample which of us ever.',
    image: 'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-4.jpg',
  },
];

const BusinessCards = () => {
  return (
    <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-md shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-500"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover rounded-t-md"
            />
            <div className="p-4 text-center transition-colors duration-300 hover:text-blue-600">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCards;
