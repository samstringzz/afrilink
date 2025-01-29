import CardSlider from '../components/CardSlider';
import Hero from '../components/Hero';
import ShopCategories from '../components/ShopCategories';
import NewArrivals from '../components/NewArrivals';
import Footer from '../components/Footer';


const VendorPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Vendors Page</h1>
      <Hero />
      <ShopCategories />
      <CardSlider />
      <NewArrivals />
      <Footer />
      {/* Add other vendor-related components as needed */}
    </div>
  );
};

export default VendorPage;
