import React from 'react';
import Logo from '../assets/afri.png';

const AboutUs = () => {
    return (
        <section className="bg-white py-12 mb-12">
            <div className="max-w-[1440px] mx-auto px-12 md:px-24 flex flex-col md:flex-row items-center md:items-start">
                {/* Logo Section */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <img
                        src={Logo} // Replace with your logo path
                        alt="Afrilink Market Logo"
                        className="w-48 h-auto"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-16 relative">
                    <h2 className="text-2xl md:text-[24.28px] font-bold text-green-600">
                        Welcome to Afrilink Market
                    </h2>
                    <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
                        The UK's premier e-commerce platform dedicated to connecting you
                        with authentic African and Caribbean groceries. Our mission is
                        simple: to bring the vibrant flavors and rich traditions of African
                        and Caribbean cultures straight to your doorstep, while empowering
                        small businesses within these communities.
                    </p>
                    <div className="absolute right-0 mt-8">
                        <button
                            className="flex items-center justify-center gap-2 w-[186px] h-[44px] bg-[#008B2E] text-white rounded-[16px] hover:bg-green-700 transition-colors"
                        >
                            Read More <span className="text-lg">&rarr;</span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
