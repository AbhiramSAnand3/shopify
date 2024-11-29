import { useState } from "react";
const MyCart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Casual Shoe",
      price: 85.5,
      quantity: 1,
      img: "https://via.placeholder.com/100", // Replace with product image URL
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 45.99,
      quantity: 2,
      img: "https://via.placeholder.com/100", // Replace with product image URL
    },
  ]);

  // Function to update item quantity
  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6  mt-28">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Cart</h1>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, false)}
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, true)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button
                  className="text-red-500 hover:text-red-700 text-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
                <p className="text-gray-800 font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md items-center  justify-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Summary</h2>
          <div className="flex justify-between text-gray-600">
            <p>Total Items:</p>
            <p>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <p>Total Price:</p>
            <p className="text-gray-800 font-semibold">₹{totalPrice.toFixed(2)}</p>
          </div>
          <button className="w-full mt-4 py-3 bg-[#bf9774] text-white rounded-lg hover:bg-[#a6745d]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
