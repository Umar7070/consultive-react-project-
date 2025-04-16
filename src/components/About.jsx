import React from 'react';
// import aboutImage from '../assets/about.jpg'; 

const About = () => {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 border-b-2 border-cyan-500 inline-block">
        About Our Company
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={'https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/about-company.jpg'}
            alt="About us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            We are always looking for specific approach to each cases & Provide full solutions.
          </h3>

          <p className="text-gray-600 mb-4">
            We have built an enviable reputation in the consumer goods, heavy industry, high-tech,
            manufacturing, medical, recreational vehicle, and transportation sectors.
            Multidisciplinary team of engineering experts, who loves or pursues or desires to obtain
            pain of itself, because it is pain occasionally.
          </p>

          <h4 className="text-cyan-600 font-semibold mb-2">Reliable & Trustworthy</h4>

          <p className="text-gray-600 mb-6">
            Who loves or pursues or desires to obtain pain of itself, because it is pain, but
            because occasionally circumstances occur in which toil and pain desires to obtain pain
            of itself, because it is pain, but because occur in which toil and pain.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded shadow transition">
              READ MORE
            </button>

            <img
              src="https://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/signature.png" 
              alt="signature"
              className="h-12 mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
