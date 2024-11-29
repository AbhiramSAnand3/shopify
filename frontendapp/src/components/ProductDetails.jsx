import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const {id} = useParams()
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-14 py-10">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* Product Image and Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="p-6 bg-gray-50 flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400" // Replace with actual product image URL
              alt="Product"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">Product {id}</h1>
              <p className="text-lg text-gray-600 mb-4">
                A detailed description of the product goes here. Highlight its key features,
                usability, and benefits to attract customers.
              </p>
              <p className="text-2xl font-bold text-[#bf9774] mb-6">₹2,499.00</p>
            </div>

            {/* Add to Cart Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-16 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#bf9774] focus:border-[#bf9774] text-gray-700"
                />
              </div>
              <button className="w-full py-3 text-white bg-[#bf9774] rounded-lg hover:bg-[#a6745d] focus:outline-none focus:ring-2 focus:ring-[#bf9774] focus:ring-offset-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
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

