import { Link } from "react-router";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4 font-semibold">
              Newsletter
            </h3>
            <p className="text-gray-500 mb-4">
              Be the first to hear about new products, exclusive events, and
              online offers.
            </p>
            <p className="font-medium text-sm text-gray-600 mb-6">
              Sign up and get 10% off your first order.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm rounded-md hover:bg-gray-800 transition-all">
                Subscribe
              </button>
            </form>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4 font-semibold">Shop</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  Men's Top wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  Women's Top wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  Men's Bottom wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  Women's Bottom wear
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4 font-semibold">
              Support
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4 font-semibold">
              Follow us
            </h3>
            <div className="flex items-center space-x-5 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600">
                <TbBrandMeta className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600">
                <IoLogoInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600">
                <RiTwitterXLine className="h-5 w-5" />
              </a>
            </div>

            <p className="text-gray-500">Call Us</p>
            <p className="text-gray-800 font-semibold mt-1">
              <FiPhoneCall className="inline-block mr-2" />
              01234-456778
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-gray-500 text-sm tracking-tighter text-center">
            © 2025, CompileTab. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
