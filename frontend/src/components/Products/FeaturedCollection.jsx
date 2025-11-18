import { Link } from "react-router";
import feature from "../../assets/featured.webp";
const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* left content  */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover our collection of comfortable and stylish apparel for a
            hassle-free life.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all">
            Shop Now
          </Link>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={feature}
            alt="Featured Collection"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
