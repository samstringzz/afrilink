import React from "react";
import Fruit1 from '../assets/fruit1.png'
import Fruit2 from '../assets/fruit2.png'
import Fruit3 from '../assets/fruit3.png'

const BlogPostSection = () => {
  const blogPosts = [
    {
      title: "5 Ways to Add More Veggies to Your Diet",
      date: "09 FEB",
      author: "kemi",
      description: "Get healthy and delicious ideas for incorporating more vegetables into your meals.",
      img: Fruit1, // Replace with your image path
    },
    {
      title: "Summer Fruit Salad Recipes to Refresh Your Day",
      date: "02 FEB",
      author: "kemi",
      description: "Beat the heat with these refreshing summer fruit salad recipes.",
      img: Fruit2, // Replace with your image path
    },
    {
      title: "8 Creative Ways to Use Herbs in Your Cooking",
      date: "03 JAN",
      author: "kemi",
      description: "Explore new flavour and ideas for using herbs in your recipes.",
      img: Fruit3, // Replace with your image path
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto py-[80px] px-[80px]">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Blogs Post</h2>
      <h3 className="text-xl font-semibold mb-6">Latest Post</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500">by {post.author}</span>
                <span className="ml-2 text-sm text-gray-500">{post.date}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{post.title}</h4>
              <p className="mt-2 text-gray-700">{post.description}</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostSection;