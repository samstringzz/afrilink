import React from 'react';
import NewArrivals from '../components/NewArrivals';
import CardSlider from '../components/CardSlider';
import AboutUs from '../components/AboutUs'
import WhyChooseUs from '../components/WhyChooseUS';
import BlogPostSection from '../components/BlogPostSection';
import ReviewSection from '../components/ReviewSection';

const HomePage = () => {
  return (
    <div className="py-8">
      <CardSlider />
      <NewArrivals />
      <WhyChooseUs />
      <AboutUs />
      <BlogPostSection />
      <ReviewSection />
    </div>
  );
};

export default HomePage;
