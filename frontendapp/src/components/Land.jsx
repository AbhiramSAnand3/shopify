import land from '../assets/img/land.jpg';

const Land = () => {
  return (
    <div className='w-full lg:px-3 px-6 flex flex-col justify-center items-center lg:h-[500px] h-[480px]'>
      <div 
        className='w-full lg:px-20 px-4 space-y-4 justify-center items-start lg:h-[450px] h-[350px] bg-center bg-cover pt-16 lg:pt-28 leading-8 lg:leading-10 text-left' 
        style={{ backgroundImage: `url(${land})` }}
      >
        <h1 className='font-semibold text-lg lg:text-xl'>Limited Time Offer</h1>
        <h1 className='font-bold text-3xl lg:text-4xl'>Special Edition</h1>
        <p className='font-semibold text-sm lg:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur.<br className='hidden lg:block' /> est officiis vitae fuga impedit repellat, ipsam rerum.
        </p>
        <h1 className='font-bold text-sm lg:text-base'>Buy This T-Shirt At 20% Discount use code OFF20</h1>
        <button className='bg-white text-black rounded-sm px-3 py-2 font-semibold mt-2 lg:mt-4'>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Land;

