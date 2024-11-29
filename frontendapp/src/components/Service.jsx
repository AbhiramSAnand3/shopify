import s1 from '../assets/img/best.png'
import s2 from '../assets/img/payment.png'
import s3 from '../assets/img/price.png'
import s4 from '../assets/img/shipping.png'

const Service = () => {
  return (
    <div>
<div className='w-full grid lg:grid-cols-4 lg:px-20 grid-cols-1 gap-10 items-center justify-center  '>
<div className="flex flex-col gap-2 justify-center   items-center bg-center bg-cover py-10">
    <img src={s4} className='w-[50px]' />
  <h1 className='font-bold'>worldwide shipping</h1>
  <p className='justify-center items-center text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>
<div className="flex flex-col gap-2 justify-center   items-center bg-center bg-cover">
    <img src={s1} className='w-[50px]' />
  <h1 className='font-bold'>Best Quality</h1>
  <p className='justify-center items-center text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>
<div className="flex flex-col gap-2 justify-center   items-center bg-center bg-cover">
    <img src={s3} className='w-[50px]' />
  <h1 className='font-bold'>Best Offers</h1>
  <p className='justify-center items-center text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>
<div className="flex flex-col gap-2 justify-center   items-center bg-center bg-cover">
    <img src={s2} className='w-[50px]' />
  <h1 className='font-bold'>Secure Payments</h1>
  <p className='justify-center items-center text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>

</div>
    </div>
  )
}

export default Service