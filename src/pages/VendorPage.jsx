import CardSlider from '../components/CardSlider';
import Hero from '../components/Hero';
import ShopCategories from '../components/ShopCategories';
import NewArrivals from '../components/NewArrivals';


const VendorPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Vendors Page</h1>
      <Hero />
      <ShopCategories />
      <CardSlider />
      <NewArrivals />
      {/* Add other vendor-related components as needed */}
    </div>
  );
};

export default VendorPage;
