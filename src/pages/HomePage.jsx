import React from 'react';
import NewArrivals from '../components/NewArrivals';
import CardSlider from '../components/CardSlider';
import AboutUs from '../components/AboutUs'
import WhyChooseUs from '../components/WhyChooseUS';
import BlogPostSection from '../components/BlogPostSection';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <CardSlider />
      <NewArrivals />
      <WhyChooseUs />
      <AboutUs />
      <BlogPostSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default HomePage;
