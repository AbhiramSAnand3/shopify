
import brand1 from '../assets/img/brand1.png';
import brand2 from '../assets/img/brand2.png';
import brand3 from '../assets/img/brand3.png';
import brand4 from '../assets/img/brand4.png';
import brand5 from '../assets/img/brand5.png';

const Brand = () => {
  return (
    <div className='w-full bg-white lg:px-40 px-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-4 p-4'>
      <img className='w-[80px] sm:w-[100px] md:w-[120px] mx-auto' src={brand1} alt='Brand 1' />
      <img className='w-[80px] sm:w-[100px] md:w-[120px] mx-auto' src={brand2} alt='Brand 2' />
      <img className='w-[80px] sm:w-[100px] md:w-[120px] mx-auto' src={brand3} alt='Brand 3' />
      <img className='w-[80px] sm:w-[100px] md:w-[120px] mx-auto' src={brand4} alt='Brand 4' />
      <img className='w-[80px] sm:w-[100px] md:w-[120px] mx-auto' src={brand5} alt='Brand 5' />
    </div>
  );
};

export default Brand;

