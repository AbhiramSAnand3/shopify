import banner from '../assets/img/Hero.jpg'

const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center h-[100vh]'>
<div className='w-full lg:px-20 px-6 flex flex-col items-start gap-10 bg-cover bg-center h-full pt-[15rem]' style={{backgroundImage:`url(${banner})`}}>
  <h1 className='text-[50px] font-bold'>Raining Offer <br /> For Hot Summer</h1>
<div >
<button className='  bg-white px-4 py-2 rounded-lg hover:bg-slate-950 hover:text-white shadow-lg drop-shadow-xl'>SHOP NOW</button>
<button className=' ml-10 bg-transparent text-black border-2 px-4 py-2 rounded-lg hover:bg-white hover:text-slate-800 shadow-lg drop-shadow-xl'>FIND MORE</button>
</div>
</div>

    </div>
  )
}

export default Hero