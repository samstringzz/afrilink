import React from 'react';
import rice from "../assets/image 59.png"

const SaleCards = () => {
    const items = [
        {
            title: "Bag of Rice",
            discount: "35% Discount",
            originalPrice: "₦15,000",
            discountedPrice: "₦10,000",
            description: "Buy one get one free\nHurry, sale ends 14th of May 2023",
            img: rice,
            bgColor: "bg-green-500",
        },
        {
            title: "Orange Juice",
            discount: "35% Discount",
            originalPrice: "₦15,000",
            discountedPrice: "₦10,000",
            description: "Buy one get one free\nHurry, sale ends 14th of May 2023",
            img: "https://via.placeholder.com/150", // Replace with your image URL
            bgColor: "bg-yellow-500",
        },
    ];

    return (
        <div className="py-8 px-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-green-800">Fresh Picks on Sales</h2>
                <a href="#view-more" className="text-green-600 font-medium hover:underline">
                    View More
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl p-6 ${item.bgColor} text-white flex items-center gap-4 shadow-lg`}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div>
                            <div className="bg-white text-green-800 font-bold text-sm px-3 py-1 rounded-full inline-block mb-2">
                                {item.title}
                            </div>
                            <h3 className="text-lg font-semibold">{item.discount}</h3>
                            <p className="text-sm line-through">{item.originalPrice}</p>
                            <p className="text-xl font-bold">{item.discountedPrice}</p>
                            <p className="text-sm mt-2">{item.description}</p>
                            <button className="mt-4 px-4 py-2 bg-white text-green-800 rounded-full font-medium hover:bg-green-100">
                                Order Now →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SaleCards;