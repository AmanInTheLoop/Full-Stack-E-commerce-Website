import React from "react";
import Hero from "./../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import Newarrivals from "./../components/Products/Newarrivals";
import ProductDetails from "../components/Products/ProductDetails";
<<<<<<< HEAD
import FeaturedCollection from "./../components/Products/FeaturedCollection";
import FeaturedSection from "./../components/Products/FeaturedSection";
=======
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=1"}]
  },

  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=2"}]
  },

  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=3"}]
  },
  
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=4"}]
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=5"}]
  },

  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=6"}]
  },

  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=7"}]
  },
  
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=8"}]
  },
]
>>>>>>> 8a78c8bc569a6d03ad3d72950e29ab50f63a567a

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <Newarrivals />

      {/* Best Seller  */}
      <h2 className="text-3xl text-center font-bold my-8">Best Seller</h2>
      <ProductDetails />
<<<<<<< HEAD
      <FeaturedCollection />
      <FeaturedSection />
=======
      <div className="container mx-auto"></div>
      <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
      <ProductGrid products={placeholderProducts} />
>>>>>>> 8a78c8bc569a6d03ad3d72950e29ab50f63a567a
    </div>
  );
};

export default Home;
