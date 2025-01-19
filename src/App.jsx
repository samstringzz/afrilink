import CardSlider from './CardSlider';
import NewArrivals from './components/NewArrivals';
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUS';
import BlogPostSection from './components/BlogPostSection';
import ReviewSection from './components/ReviewSection';

export default function App() {
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
}