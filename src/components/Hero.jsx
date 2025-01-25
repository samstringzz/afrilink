import React from "react";
import Image from "../assets/image 110.png";
import Customer1 from "../assets/image (1).png";
import Customer2 from "../assets/image (2).png";
import Customer3 from "../assets/image (3).png";

const GroceryHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-[600] text-[#004015] mb-4">
          Shop fresh and healthy groceries here.
        </h1>
        <p className="text-gray-600 text-[#CC9933] text-[28px] font-[500] mb-6">
          For a healthier you and your family, shop now and nourish your body.
        </p>
        <button className="bg-green-700 text-white w-[290px] h-[56px] rounded-md font-medium hover:bg-green-800">
          Shop Now →
        </button>

        {/* Customer Review Section */}
        <div className="mt-6 flex items-center justify-center md:justify-start">
          <div className="bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-3">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src={Customer1}
                alt="customer1"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src={Customer2}
                alt="customer2"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src={Customer3}
                alt="customer3"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">
                Our Happy Customers
              </p>
              <p className="text-sm text-yellow-500 font-medium">
                ★ 4.5 (12.7k Reviews)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img className="w-full max-w-md" src={Image} alt="Groceries" />
      </div>
    </div>
  );
};

export default GroceryHero;
