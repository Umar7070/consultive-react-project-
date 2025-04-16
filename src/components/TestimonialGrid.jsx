import React from "react";

const people = [
  {
    name: "Allen Duckeat",
    location: "Newyork",
    text: "For any types of Business task, Solutions wordpress theme is the best choice of embraced innovation to provide a superior level of excellence.",
    img: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Steve Bairstow",
    location: "California",
    text: "To take a trivial example, which of us ever undertakes laborious physical exercise works. Sed volutpat odio lectus commodo, ut suscipit nibh tempus.",
    img: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Mark Angelino",
    location: "San Jose",
    text: "Which is the same saying through shrinking from toil and pains. These cases are perfectly simple & easy to distinguish, in a free hour, when our power off we like best.",
    img: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Don Fletcher",
    location: "Detroit",
    text: "Pleasure is to be welcomed every pain avoided. But in certain claims of duty or the obligations.",
    img: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Peter Park",
    location: "California",
    text: "Phasellus pulvinar lectus quis ultrices dapibus. Aliquam non consectetur neque. Cras laoreet.",
    img: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "John Doe",
    location: "San Jose",
    text: "Cras tempus tempus nunc; id auctor est. Fusce interdum enim et orci, et volutpat eros accumsan at. Morbi porta blandit.",
    img: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    name: "Laura Fanty",
    location: "Detroit",
    text: "Donec vehicula enim eu ipsum condimentum, et mollis magna imperdiet. Donec feugiat ultricies.",
    img: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    name: "Mark Henry",
    location: "Newyork",
    text: "Maecenas in magna sed est pharetra euismod. Ut tortor justo, dapibus ac est sit amet, hendrerit congue ligula.",
    img: "https://randomuser.me/api/portraits/men/8.jpg"
  }
];

const TestimonialGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
        <h1>testimonial </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {people.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">{person.text}</p>
            <h3 className="font-semibold text-gray-900">{person.name}</h3>
            <p className="text-xs text-blue-500">{person.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
