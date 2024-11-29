import card1 from '../assets/img/card1.avif'
import card33 from '../assets/img/card33.avif'
import card3 from '../assets/img/card3.avif'
const Card = () => {
  return (
    <div className='w-full lg-:px-30 px-6 grid lg:grid-cols-3 grid-cols-1 gap-6'>
<div className='relative bg-cover bg-center h-[500px] flex items-end p-6 ' style={{ backgroundImage:`url(${card1})`}}>
<div className='bg-black/50 p-6 w-full space-y-5'>
<h1 className='text-2xl font-semibold text-white'>20% off On Tank Tops</h1>
<p className='text-lg text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quia porro earum aperiam consect.</p>
<button className='bg-white text-black px-4 py-2 rounded-sm'>SHOP NOW</button>
</div>
</div>
<div className='relative bg-cover bg-center h-[500px] flex items-end p-6' style={{ backgroundImage:`url(${card33})`}}>
<div className='bg-black/50 p-6 w-full space-y-5'>
<h1 className='text-2xl font-semibold text-white'>20% off On Tank Tops</h1>
<p className='text-lg text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quia porro earum aperiam consect.</p>
<button className='bg-white text-black px-4 py-2 rounded-sm'>SHOP NOW</button>
</div>
</div>
<div className='relative bg-cover bg-center h-[500px] flex items-end p-6' style={{ backgroundImage:`url(${card3})`}}>
<div className='bg-black/50 p-6 w-full space-y-5'>
<h1 className='text-2xl font-semibold text-white'>20% off On Tank Tops</h1>
<p className='text-lg text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quia porro earum aperiam consect.</p>
<button className='bg-white text-black px-4 py-2 rounded-sm'>SHOP NOW</button>
</div>
</div>

    </div>
  )
}

export default Card