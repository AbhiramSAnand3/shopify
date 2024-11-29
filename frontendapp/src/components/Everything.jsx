import { ProductData } from "../FeaturedProduct";

const Everything = () => {
  return (
    <div className="w-full lg:px-20 px-10 flex flex-col justify-center items-center gap-4">
    <h1 className="text-[39px] font-bold">Featured Products</h1>
    <div className="w-[150px] bg-blue-500 h-2 rounded-lg"></div>
    <div className="grid lg:grid-cols-4 w-full grid-col-1 justify-center items-center gap-10">
      {
        ProductData.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg flex flex-col items-center">
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-[#bf9774]">
              Buy Now
            </button>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Everything