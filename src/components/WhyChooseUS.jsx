import React from "react";
import Image1 from '../assets/Frame 227.png'
import Image2 from '../assets/Frame 228.png'
import Image3 from '../assets/Frame 229.png'

const WhyChooseUs = () => {
  const services = [
    {
      title: "Fast Delivery",
      description: "Our delivery services are fast and secured",
      image: Image1, 
    },
    {
      title: "Flexible Payment",
      description: "There are multiple secured payment options",
      image: Image2, // Replace with the actual image path
    },
    {
      title: "SupportPlus",
      description: "We support our customers 24/7",
      image: Image3, // Replace with the actual image path
    },
  ];

  return (
    <div className="bg-[#E6F5EB] py-[40px] px-6 md:px-[120px]">
      <div className="max-w-[1440px] mx-auto text-center mb-6">
        <h2 className="text-[32px] text-left font-bold text-green-700 mb-8">
          Why you should choose our service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
