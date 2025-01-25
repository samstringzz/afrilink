import React from "react";
import Slider from "react-slick";
import MeatImage from "../assets/meat.png";
import FruitsImage from "../assets/fruits.png";
import DairyImage from "../assets/dairy.png";
import BreadImage from "../assets/bread.png";
import ToiletriesImage from "../assets/toiletries.png";
import BabyImage from "../assets/baby.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopCategories = () => {
  const categories = [
    { title: "Meat", image: MeatImage, item: "Chicken" },
    { title: "Fruits", image: FruitsImage, item: "Apples" },
    { title: "Dairy", image: DairyImage, item: "Milk" },
    { title: "Bread", image: BreadImage, item: "Wheat Loaf" },
    { title: "Toiletries", image: ToiletriesImage, item: "Soap" },
    { title: "Baby", image: BabyImage, item: "Diapers" },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white rounded-full absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-20 shadow-md"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white rounded-full absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-20 shadow-md"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3.5 } },
      { breakpoint: 768, settings: { slidesToShow: 2.5 } },
      { breakpoint: 480, settings: { slidesToShow: 1.5 } },
    ],
  };

  return (
    <div className="bg-white py-6">
      <h2 className="text-[32px] font-[700] text-[#004015] pl-12 mb-6 text-left">
        Shop Categories
      </h2>
      <div className="max-w-[1440px] mx-auto px-[20px] relative">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col items-center">
                <h3 className="text-[20px] font-bold text-[#004015] mb-6">
                  {category.title}
                </h3>
                <div className="bg-[#E6F5EB] rounded-[20px] shadow-md p-4 flex items-center justify-center w-[156.8px] h-[160]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-12 h-24"
                  />
                </div>
                <p className="text-[20px] font-[600] text-[#004015] mt-6">
                  {category.item}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopCategories;
