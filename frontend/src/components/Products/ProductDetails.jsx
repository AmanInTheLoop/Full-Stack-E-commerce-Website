import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from './ProductGrid';

const selectProduct = {
  name: "Stylish Jackets",
  price: 79.99,
  originalPrice: 99.99,
  description:
    "Elevate your wardrobe with our stylish jackets, perfect for any occasion.",
  brand: "FashionHub",
  material: "Leather",
  size: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Gray", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket Image 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket Image 2",
    },
  ],
};

const similarProducts = [
  
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
  }
]

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selecetdSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    if (selectProduct?.images?.length > 0) {
      setMainImage(selectProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange = (type) => {
    if (type === "plus") {
      setQuantity((prevQty) => prevQty + 1);
    }
    if (type === "minus") {
      setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
    }
  };

  const handleAddToCart = () => {
    if (!selecetdSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left Thumbnails  */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnails ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image  */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnail  */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnails ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through ">
              {selectProduct.originalPrice && `${selectProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">{selectProduct.price}</p>
            <p className="text-gray-600 mb-4">{selectProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(85%)",
                    }}></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.size.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`px-4 py-2 rounded border cursor-pointer ${
                      selecetdSize === size ? "bg-black text-white" : ""
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-3 py-1 border rounded text-lg">
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-3 py-1 border rounded text-lg">
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`w-full bg-black text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              } `}>
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Brand</td>
                    <td className="py-2">{selectProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Material</td>
                    <td className="py-2">{selectProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Product Info  */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">You may Also Like</h2>
          <ProductGrid products={similarProducts} />

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
