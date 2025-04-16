import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

const faqs = [
  {
    question: 'What is the procedure to join with your company?',
    answer: '',
  },
  {
    question: 'Do you give any offer for premium customer?',
    answer:
      'Nulla fringilla convallis lorem, nec vehicula ante condimentum ut. Pellentesque dignissim tellus imperdiet maximus fringilla. Aenean consectetur pellentesque mi.',
  },
  {
    question: 'What makes you special from others?',
    answer: '',
  },
];

const KeyBenefits = () => {
  const [activeIndex, setActiveIndex] = useState(1); // initially open 2nd item

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col space-y-16 px-6 md:px-16 py-12 bg-white">

      {/* --- Key Benefits Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Benefits of the Service
          </h2>
          <div className="h-1 w-24 bg-sky-400 mb-6" />

          <p className="text-gray-600 mb-4">
            Beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble that
            are bound to ensue beguiled and demoralized.
          </p>

          <ul className="space-y-2 text-sky-600">
            <li className="flex items-start gap-2">
              <span className="text-sky-400">➤</span>
              <span>Develop new ideas and market them</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400">➤</span>
              <span>Build leadership and management skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400">➤</span>
              <span>Improve manufacturing processes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400">➤</span>
              <span>Build a business strategy and plan</span>
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="md:w-2/5 mt-10 md:mt-0 relative bg-sky-300 bg-opacity-70 rounded-md overflow-hidden">
          <img
            src="https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/video-gallery.jpg"
            alt="video thumbnail"
            className="w-full h-auto object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FaPlay className="text-sky-500 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* --- FAQ Section --- */}
      <div className="max-w-3xl mx-auto w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-t border-gray-200 py-4 cursor-pointer transition-all"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center justify-between text-gray-800 font-medium">
              <span className={`${activeIndex === index ? 'text-sky-500' : ''}`}>
                {faq.question}
              </span>
              <span className="text-sky-400 text-2xl">
                {activeIndex === index ? (
                  <IoIosRemoveCircleOutline />
                ) : (
                  <IoIosAddCircleOutline />
                )}
              </span>
            </div>
            {activeIndex === index && faq.answer && (
              <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBenefits;
