import React from "react";
import Logo from "../assets/rename footer.png"; // Ensure correct file path

const Footer = () => {
  return (
    <footer className="bg-[#004015] text-white py-14 px-6 md:px-16">
      <div className="container mx-auto grid md:ml-[60px] grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section - Company Info */}
        <div>
          <img src={Logo} alt="Afrilink Market Logo" className="w-[200px] mx-auto md:mx-0 mb-4" />
          <p className="text-mb mb-4">Address: 60-34 Road 23456, United Kingdom</p>
          <p className="text-md mb-4 mt-2">Phone: +44 7123 456789</p>
          <p className="text-md mb-4 mt-2">Email: Afrilink@gmail.com</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Categories</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - User Area */}
        <div>
          <h3 className="text-lg font-bold">User Area</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-yellow-400">My Account</a></li>
            <li><a href="#" className="hover:text-yellow-400">Wishlist</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Cart</a></li>
            <li><a href="#" className="hover:text-yellow-400">Login</a></li>
            <li><a href="#" className="hover:text-yellow-400">Checkout</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons & Newsletter */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Social Media Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex w-full md:w-2/3 bg-white rounded-[15px] overflow-hidden">
          <input 
            type="email" 
            placeholder="Enter Your Email Address"
            className="w-full p-3 text-black outline-none text-sm"
          />
          <button className="bg-[#CC9933] text-white px-5 md:px-10 py-3 font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-500 pt-4 text-center text-sm">
        Copyright © 2024 Afrilink Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
