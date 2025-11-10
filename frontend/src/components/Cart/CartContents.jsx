import { RiDeleteBin3Line } from "react-icons/ri";
const cartProducts = [
  {
    id: 1,
    name: "Product 1",
    color: "Red",
    size: "M",
    price: 30,
    quantity: 2,
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Product 2",
    color: "Blue",
    size: "L",
    price: 45,
    quantity: 1,
    image: "https://picsum.photos/200?random=2",
  },
];
const CartContents = () => {
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-4 border-b">
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover rounded mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">Color: {product.color}</p>
              <p className="text-gray-600">Size: {product.size}</p>
              
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium">
              ${product.price.toLocaleString()}
            </p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 text-gray-700 mt-4 hover:text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
