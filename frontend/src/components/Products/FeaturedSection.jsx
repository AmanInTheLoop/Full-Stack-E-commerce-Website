import React from "react";
import {
  HiShoppingBag,
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
} from "react-icons/hi2";
const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="conainer mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="w-10 h-10" />
          </div>
          <h4 className="tracking-tighter mb-2">Fast Worldwide Shipping</h4>
          <p className="text-sm text-gray-600">On all orders over $100.00</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="w-10 h-10" />
          </div>
          <h4 className="tracking-tighter mb-2">45 Day Returns</h4>
          <p className="text-sm text-gray-600">Money back guarantee</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="w-10 h-10" />
          </div>
          <h4 className="tracking-tighter mb-2">Secure Checkout</h4>
          <p className="text-sm text-gray-600">100% secure checkout process</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
