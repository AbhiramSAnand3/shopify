/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { ProductData } from "../FeaturedProduct";
import { useEffect, useState } from "react";



const FeaturedProduct = () => {
   
  const [ProductData,setProductData] = useState([])


  useEffect(
    ()=>{

      const fetchProduct = async ()=>{
        try {
          const response = await fetch('http://localhost:3000/fetch');
          const data = await response.json();
          setProductData(data);
        } catch (err) {
          console.error('Error fetching Products:', err);
        }

      }
      fetchProduct()

    },[]
  )
  return (
    <div className="w-full lg:px-20 px-10 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[39px] font-bold">Featured Products</h1>
      <div className="w-[150px] bg-blue-500 h-2 rounded-lg"></div>
      <div className="grid lg:grid-cols-4 w-full grid-col-1 justify-center items-center gap-10">
        {
          ProductData.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-lg flex flex-col items-center">
              <img src={`http://localhost:3000${item.images[0]}`} alt={item.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <Link to={`/product/${item._id}`} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-[#bf9774]">
                Buy Now
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProduct;
