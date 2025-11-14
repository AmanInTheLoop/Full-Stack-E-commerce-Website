import React from 'react';
import mensCollectionImage from "../../assets/assets/mens-collection.webp";
import WomensCollectionImage from "../../assets/assets/womens-collection.webp";
import { Link } from 'react-router';

const GenderCollectionSection = () => {
  return (
    <section className="py-16">
  <div className="container mx-auto max-w-6xl px-4 lg:px-0 flex flex-col md:flex-row gap-10">

    {/* Women's Collection */}
    <div className="relative flex-1">
      <img 
        src={WomensCollectionImage} 
        alt="Women's collection" 
        className="w-full h-[700px] object-cover"
      />
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
        <h2 className="text-2xl font-bold mb-3">Women's Collection</h2>
        <Link to="/collections/all?gender=women" className="underline">Shop Now</Link>
      </div>
    </div>

    {/* Men's Collection */}
    <div className="relative flex-1">
      <img 
        src={mensCollectionImage} 
        alt="Men's collection" 
        className="w-full h-[700px] object-cover"
      />
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
        <h2 className="text-2xl font-bold mb-3">Men's Collection</h2>
        <Link to="/collections/all?gender=men" className="underline">Shop Now</Link>
      </div>
    </div>

  </div>
</section>

  );
}

export default GenderCollectionSection;
