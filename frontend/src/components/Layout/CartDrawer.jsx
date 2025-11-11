import { IoMdClose } from "react-icons/io";
import CartContents from "./../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      {/* Close Button  */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      {/* Cart contents with scrollable area */}
      <div className="flex-1 overflow-y-auto px-4">
        <h2 className="text-2xl font-medium mb-4">Shopping Cart</h2>
        {/* Component for Cart contents */}
        <CartContents />
      </div>
      {/* Checkout Button fixed at bottom  */}
      <div className="p-4 border-t bg-white">
        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
          Proceed to Checkout
        </button>
        <p className="text-center tracking-tighter text-sm text-gray-500 mt-2">
          Shipping, taxes, and discounts calculated at checkout.
        </p>
      </div>
    </div>
  );
};
export default CartDrawer;
