import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [ProductData, setProductData] = useState({
    images: [],
    title: "",
    description: "",
    price: 0,
  });
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/fetch/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProductData(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Function to handle adding to cart
  const addToCart = async () => {
    try {
      const response = await fetch('http://localhost:3000/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you use token-based authentication
        },
        body: JSON.stringify({
          productId: id,
          quantity,
        }),
      });

      if (!response.ok) throw new Error("Failed to add to cart");
      const result = await response.json();
      console.log('Item added to cart:', result);
      alert('Product added to cart successfully!');
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add product to cart. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-14 py-10">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 bg-gray-50 flex justify-center items-center">
            {ProductData.images && ProductData.images.length > 0 ? (
              <img
                src={`http://localhost:3000${ProductData.images[0]}`}
                alt={ProductData.title}
                className="rounded-lg object-cover"
              />
            ) : (
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                className="rounded-lg object-cover"
              />
            )}
          </div>

          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">{ProductData.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{ProductData.description}</p>
              <p className="text-2xl font-bold text-[#bf9774] mb-6">₹{ProductData.price}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))} // Update quantity state
                  className="w-16 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#bf9774] focus:border-[#bf9774] text-gray-700"
                />
              </div>
              <button 
                className="w-full py-3 text-white bg-[#bf9774] rounded-lg hover:bg-[#a6745d] focus:outline-none focus:ring-2 focus:ring-[#bf9774] focus:ring-offset-2"
                onClick={addToCart} // Call addToCart on button click
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specifications</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Specification 1: Detail about the product.</li>
            <li>Specification 2: Highlight another feature.</li>
            <li>Specification 3: Include dimensions, materials, etc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
