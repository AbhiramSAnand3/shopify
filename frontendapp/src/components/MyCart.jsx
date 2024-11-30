import { useState, useEffect } from "react";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
          },
        });
        if (!response.ok) throw new Error("Failed to fetch cart items");
        const data = await response.json();
        setCartItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = async (id, increment) => {
    const item = cartItems.find((item) => item._id === id);
    if (!item) return; // Ensure item exists
    const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);

    try {
      const response = await fetch(`http://localhost:3000/cart/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      if (!response.ok) throw new Error('Failed to update quantity');

      try {
        const response = await fetch("http://localhost:3000/cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
          },
        });
        if (!response.ok) throw new Error("Failed to fetch cart items");
        const data = await response.json();
        setCartItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

      
     
      
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:3000/cart/remove/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-28">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Cart</h1>

        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800">{item.productId.title}</h2>
                  {/* Added check for price */}
                  <p className="text-gray-600">
                    Price: ₹{item.productId.price !== undefined ? item.productId.price.toFixed(2) : 'N/A'}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      onClick={() => updateQuantity(item._id, false)}
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      onClick={() => updateQuantity(item._id, true)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <button
                    className="text-red-500 hover:text-red-700 text-sm"
                    onClick={() => removeItem(item._id)}
                  >
                    Remove
                  </button>
                  {/* Added check for total price */}
                  <p className="text-gray-800 font-semibold">
                    ₹{(item.productId.price !== undefined ? (item.productId.price * item.quantity).toFixed(2) : 0)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cart Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Summary</h2>
          <div className="flex justify-between text-gray-600">
            <p>Total Items:</p>
            <p>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <p>Total Price:</p>
            <p className="text-gray-800 font-semibold">
              ₹{cartItems.reduce((sum, item) => sum + (item.productId.price !== undefined ? item.productId.price * item.quantity : 0), 0).toFixed(2)}
            </p>
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
