import React from "react";
import Hero from "./../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import Newarrivals from "./../components/Products/Newarrivals";
import ProductDetails from "../components/Products/ProductDetails";
import FeaturedCollection from "./../components/Products/FeaturedCollection";
import FeaturedSection from "./../components/Products/FeaturedSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <Newarrivals />

      {/* Best Seller  */}
      <h2 className="text-3xl text-center font-bold my-8">Best Seller</h2>
      <ProductDetails />
      <FeaturedCollection />
      <FeaturedSection />
    </div>
  );
};

export default Home;
