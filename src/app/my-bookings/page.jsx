"use client";



import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const Page = () => {
    const session = useSession()
    const [bookings, setBooking] = useState([])
    const loadData = async () => {
        const resp = await fetch(`http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`)
        const data = await resp.json()
      

        setBooking(data?.myBookings);

    }
    useEffect(() => {
        loadData()
    }, [session])

   



    return (
        <div>
           
               {bookings?.map(({ _id, name, price, size }) => (
                  



                  <div className="   relative" key={_id} >
                    
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
                             
                              <p className="py-6 text-black">
                                 Brand: {name}
                              </p>
                              <h2 className=' text-black'>Price:{price}</h2>
                              <h3 className='text-black'> size: {size}</h3>
                              <div>
                                  <button className="btn btn-warning mr-2">Update</button>
                                  <button className="btn btn-error">Delete</button>
                              </div>
                          </div>
                      </div>
                  
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
                              <h3 className='card-title'>Price:{price}</h3>
                              <div className="card-actions justify-center">
                                  <button className="btn btn-primary">PROCESS TO CHECKOUT</button>
                              </div>
                          </div>


                      </div>
                  </div>


                
              </div>








               ))}

               
            



        </div>









    );
};

export default Page;
