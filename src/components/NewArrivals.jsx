import React from 'react';
import wine from '../assets/wine.png'
import efo from '../assets/efo.png'
import beef from '../assets/soup.png'
import dried from '../assets/dried fish.png'
import egg from '../assets/egg.png'
import pepper from '../assets/pepper.png'
import fish from '../assets/fish.png'
import epo from '../assets/epo.png'

const NewArrivals = () => {
  const products = [
    {
      name: "Red Wine",
      price: "₦3",
      rating: 4.5,
      vendor: "Vendor 1",
      img: wine,
      tag: "New",
    },
    {
      name: "Canned Beef",
      price: "₦10",
      rating: 4.0,
      vendor: "Sugar Corp",
      img: beef,
      tag: "New",
    },
    {
      name: "Dried Fish",
      price: "₦12",
      rating: 4.2,
      vendor: "Vendor 3",
      img: dried,
      tag: "Sale",
    },
    {
      name: "Basket of Eggs",
      price: "₦20",
      rating: 5.0,
      vendor: "Mother's Choice",
      img: egg,
      tag: "Popular",
    },
    {
      name: "Efo",
      price: "₦12",
      rating: 4.8,
      vendor: "Veggie Hub",
      img: efo,
      tag: "Sale",
    },
    {
      name: "Fresh Tomatoes",
      price: "₦15",
      rating: 4.3,
      vendor: "Vendor 6",
      img: pepper,
      tag: "New",
    },
    {
      name: "Fish",
      price: "₦60",
      rating: 4.7,
      vendor: "Fish Market",
      img: fish,
      tag: "Popular",
    },
    {
      name: "Red Oil",
      price: "₦31",
      rating: 4.6,
      vendor: "Sunny Market",
      img: epo,
      tag: "New",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto py-8 px-8">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <h2 className="text-2xl p-6 font-bold text-gray-800">New Arrivals</h2>
          <p className="text-gray-600 pl-6 max-w-2xl">
            Exciting new arrivals have landed. Enjoy exploring the latest additions to our store.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-square">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-contain rounded-t-lg"
              />
              <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-md
                ${product.tag === 'New' ? 'bg-green-600 text-white' : 
                  product.tag === 'Sale' ? 'bg-amber-500 text-white' : 
                  'bg-gray-600 text-white'}`}>
                {product.tag}
              </span>
              <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <span className="text-lg font-bold text-green-600">{product.price}</span>
              </div>
              
              <div className="text-sm text-gray-500">Vendor: {product.vendor}</div>
              
              <div className="flex items-center mt-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
              </div>

              <button className="w-full py-2 px-4 bg-white border border-green-600 text-green-600 rounded-full text-sm font-medium hover:bg-green-50 transition-colors">
                Visit Store
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;