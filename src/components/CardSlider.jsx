import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import riceImage from '../assets/image 59.png';
import orangeJuiceImage from '../assets/juice.png';

const CardSlider = () => {
  const items = [
    {
      title: "Bag of Rice",
      discount: "35% Discount",
      originalPrice: "₦15,000",
      discountedPrice: "₦10,000",
      description: "Buy one get one free\nHurry, sale ends 14th of may 2023",
      img: riceImage,
      bgColor: "bg-[#006838]",
      labelColor: "text-[#006838]",
    },
    {
      title: "Orange juice",
      discount: "35% Discount",
      originalPrice: "₦15,000",
      discountedPrice: "₦10,000",
      description: "Buy one get one free\nHurry, sale ends 14th of may 2023",
      img: orangeJuiceImage,
      bgColor: "bg-[#CD8B02]",
      labelColor: "text-[#CD8B02]",
    },
    {
      title: "Bag of Rice",
      discount: "35% Discount",
      originalPrice: "₦15,000",
      discountedPrice: "₦10,000",
      description: "Buy one get one free\nHurry, sale ends 14th of may 2023",
      img: riceImage,
      bgColor: "bg-[#006838]",
      labelColor: "text-[#006838]",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        }
      }
    ]
  };

  return (
    <div className="max-w-[1440px] mx-auto px-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#006838]">Fresh Picks on Sales</h2>
        <a href="#" className="text-[#006838] font-medium">View More</a>
      </div>
      
      <div className="relative">
        <Slider {...settings} className="!-mx-10">
          {items.map((item, index) => (
            <div key={index} className="px-4">
              <div className={`${item.bgColor} text-white rounded-2xl p-6 relative h-[272px] w-[520px] overflow-hidden`}>
                <div className="relative z-10">
                  <div className="absolute right-0 top-0">
                    <div className="bg-white px-4 py-1.5 rounded-md">
                      <span className={`${item.labelColor} text-sm font-medium`}>{item.title}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold mb-1">{item.discount}</h3>
                    <div className="mb-1">
                      <span className="text-sm opacity-75">Price </span>
                      <span className="text-sm line-through opacity-75">{item.originalPrice}</span>
                      <span className="text-xl font-bold ml-2">{item.discountedPrice}</span>
                    </div>
                    <p className="text-sm opacity-90">Buy one get one free</p>
                    <p className="text-sm opacity-90 mb-4">Hurry, sale ends 14th of may 2023</p>
                  </div>

                  <div className="bg-white rounded-full inline-flex items-center px-4 py-2">
                    <span className={`${item.labelColor} text-sm font-medium`}>Order Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${item.labelColor} ml-2`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="absolute right-4 bottom-0 w-32">
                  <img src={item.img} alt={item.title} className="w-full h-auto" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider; 