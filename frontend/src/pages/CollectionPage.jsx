import React, { useEffect, useRef, useState } from "react";

import { FaFilter } from "react-icons/fa";
import FilterSidebar from "./../components/Products/FilterSidebar";
import SortOption from "./../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    //close sidebar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    //Add Event listener for click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //Remove Event listener
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 79.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Product 1 Image",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 59.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Product 2 Image",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 49.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Product 3 Image",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 39.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Product 4 Image",
            },
          ],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 29.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Product 5 Image",
            },
          ],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 19.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Product 6 Image",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 9.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Product 7 Image",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 9.99,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Product 8 Image",
            },
          ],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" /> Filters
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* Sort Option  */}
        <SortOption />
        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
