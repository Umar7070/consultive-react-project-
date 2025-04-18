// src/components/HistorySlider.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "First & Best Project",
    date: "Sep 21, 2015",
    desc: "Aenean consectetur pellentesque mi, et justo maximus eget. Integer sit amet.",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-4.jpg",
  },
  {
    title: "Join New Partner",
    date: "Jan 14, 2016",
    desc: "Integer ut nulla sed leo convallis pretium ut at dui. Integer nisi mauris et diam quis.",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/about-company.jpg",
  },
  {
    title: "Best Company Award",
    date: "Apr 28, 2016",
    desc: "Sed blandit euismod ante, vitae laoreet odio a. Duis ut lorem vel enim lacinia suscipit.",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/2-4.jpg",
  },
  {
    title: "Started at Newyork",
    date: "Aug 17, 2015",
    desc: "The Great denouncings labour pleas-urees praisings pains was born give you an accounts.",
    img: "https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-4.jpg",
  },
];

const HistorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-cyan-500 inline-block pb-2 mx-auto">
        History In Words
      </h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {events.map((event, idx) => (
            <div key={idx} className="px-3">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 text-center transition-transform duration-300 ease-in-out transform hover:scale-105 min-h-[320px] flex flex-col justify-start h-full">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-cyan-500">{event.date}</p>
                <p className="text-sm text-gray-600 mt-2">{event.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HistorySlider;
