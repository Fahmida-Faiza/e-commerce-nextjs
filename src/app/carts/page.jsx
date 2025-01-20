import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className="relative">
            {/* First Section with Subtotal */}
            <div className="hero w-[50%] shadow-xl relative">
                <div className="hero-content">
                    <figure className="overflow-hidden">
                        <Image
                            width={400}
                            height={400}
                            className="transition-transform duration-300 transform hover:scale-110"
                            src="/assets/women.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div>
                        <h1 className="text-5xl font-bold text-black">Box Office News!</h1>
                        <p className="py-6 text-black">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div>
                            <button className="btn btn-warning mr-2">Update</button>
                            <button className="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
                {/* Subtotal Amount Outside */}
                <div
                    className="absolute bg-gray-100 p-4 rounded-lg shadow-md"
                    style={{
                        top: '50%',
                        right: '-450px',
                        transform: 'translateY(-50%)',
                    }}
                >
                 
               <div className='text-black my-5 space-y-4'>
               <h2 className="card-title">SUBTOTAL</h2>
               <h3 className='card-title'>Price:7000tk</h3>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">PROCESS TO CHECKOUT</button>
    </div>
               </div>
  

                </div>
            </div>

            {/* Second Section without Subtotal */}
            <div className="hero w-[50%] shadow-xl ">
                <div className="hero-content">
                    <figure className="overflow-hidden">
                        <Image
                            width={400}
                            height={400}
                            className="transition-transform duration-300 transform hover:scale-110"
                            src="/assets/women.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div>
                        <h1 className="text-5xl font-bold text-black">Box Office News!</h1>
                        <p className="py-6 text-black">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div>
                            <button className="btn btn-warning mr-2">Update</button>
                            <button className="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
