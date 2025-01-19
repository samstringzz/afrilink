import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image1 from "../assets/image.png";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Berry Freshmen",
      review:
        "I have been ordering from Afrilink for months now, and I'm impressed with the fast delivery and fresh product.",
      image: Image1,
      rating: 4,
    },
    {
      id: 2,
      name: "Olowofila Tolu",
      review:
        "The website is easy to navigate and the customer service team is responsive. Highly recommend.",
      image: Image1,
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Segun",
      review:
        "I love that Afrilink offers a wide selection of groceries, including local and international brands.",
      image: Image1,
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index}>{index < rating ? "⭐" : "☆"}</span>
      ));
  };

  return (
    <div className="max-w-[1440px] mx-auto py-[80px] px-[80px]">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Reviews</h2>
      <h3 className="text-xl font-semibold mb-6">Hear What Our Happy Customers Have to Say</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img 
              src={review.image} 
              alt={review.name} 
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-gray-700 text-center mb-2">{review.review}</p>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <hr className="w-full border-gray-300 mb-2" />
            <span className="text-sm text-green-600 font-semibold">{review.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
