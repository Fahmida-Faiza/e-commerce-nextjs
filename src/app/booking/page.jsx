import Image from 'next/image'
import React from 'react'

function Booking() {

  return (
    <div className='max-w-[84rem]'>
      <div className="hero  min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row gap-10 justify-between text-black">
          <Image alt=""
            src="/assets/sneckers_men.png" width="700" height="1200"
            className="" />

          <div className='space-y-5'>
            <h1 className="text-2xl font-bold text-black ">Hush Puppies Men&apos;s SEVENTY8 Sneaker</h1>
            <h2 className='leading-loose'>Brand: Hush Puppies<br></br>
              Product Code: 8061541<br></br>
              Availability: In stock
            </h2>
            <div className='text-3xl'>
              <span className='text-gray-400'>Tk <del>3299</del> </span>
              <span className='text-red-500'>Tk 2960</span>
            </div>
            <div className=" text-red-500">
              * PLEASE CHECK THE PRODUCT INFRONT OF DELIVERY MAN<br></br>
              * Offer is only valid at batabd.com<br></br>



            </div>
            <div>
              * FREE SHIPPING    <br></br>
            </div>
            <div className='text-gray-500'>


              Catch us courtside. The Seventy8 Collection with Bounce cushioning wins throwback athletic style. Discover the perfect footwear for the modern man - men&apos;s eco-friendly trainers! These stylish and...
            </div>

            <div className='space-x-5 my-10'>
              <span className='border-2 rounded-full p-3 px-3 hover:bg-black hover:text-white'>10</span>
              <span className='border-2 rounded-full p-3 px-4 hover:bg-black hover:text-white'>9</span>
              <span className='border-2 rounded-full p-3 px-4 hover:bg-black hover:text-white'>8</span>
              <span className='border-2 rounded-full p-3 px-4 hover:bg-black hover:text-white'>7</span>
              <span className='border-2 rounded-full p-3 px-4 hover:bg-black hover:text-white'>6</span>
            </div>

            <div className='pt-5'>
              <button className="btn btn-info w-full ">Add to cart</button>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Booking