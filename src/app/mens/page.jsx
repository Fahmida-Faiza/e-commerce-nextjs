
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';


const Page = () => {
  // Access the `women` array from the `services` object
  const menData = services[0].website.men;

  return (
    <div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black w-[90%] mx-auto'>
        {menData.map((data) => (

          <div className="card bg-base-100 w-96 shadow-xl" key={data.id}>
            <div className="group relative">
              {/* Image 1 - Shown by default */}

              <figure>
                <Image
                  src={data.image} width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
              </figure>




            </div>
            <div className="card-body bg-white">
              <h2 className="card-title justify-center">{data.name}</h2>
              <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>
              <div className=''>
                <span className='text-gray-400'>Tk <del>3299</del> </span>
                <span className='text-red-500'>Tk {data.price}</span>
              </div>

              <div className="card-actions justify-center">
                <Link href={`/booking`}>
                  <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Page;
