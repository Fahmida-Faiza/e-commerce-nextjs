//  "use client"
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import React from 'react';
// import { services } from '@/lib/services'; // Import your services array
// function Booking() {
//   const params = useParams(); // Access dynamic route parameters
//   console.log(params)
//   const id = params.id; // Extract the 'id' from the URL

//   const menData = services[0].website.men;
//   const selectedItem = menData.find((item) => item.id === parseInt(id));

//   if (!selectedItem) {
//     return <div>Loading...</div>; // Show loading or fallback UI
//   }

//   return (
//     <div className="max-w-[84rem]">
//       <div className="hero min-h-screen bg-white">
//         <div className="hero-content flex-col lg:flex-row gap-10 justify-between text-black">
//           <Image
//             alt={selectedItem.name}
//             src={selectedItem.image}
//             width="700"
//             height="1200"
//             className=""
//           />

//           <div className="space-y-5">
//             <h1 className="text-2xl font-bold text-black">{selectedItem.name}</h1>
//             <h2 className="leading-loose">
//               Brand: {selectedItem.name} <br />
//               Product Code: {selectedItem.id} <br />
//               Availability: In stock <br />
//               Color: {selectedItem.color}
//             </h2>
//             <div className="text-3xl">
//               <span className="text-gray-400">
//                 Tk <del>3299</del>{' '}
//               </span>
//               <span className="text-red-500">Tk {selectedItem.price}</span>
//             </div>
            
//             <div className="text-red-500">
//               * PLEASE CHECK THE PRODUCT INFRONT OF DELIVERY MAN<br />
//               * Offer is only valid at batabd.com<br />
//             </div>
//             <div>* FREE SHIPPING</div>
//             <div className="text-gray-500">
//               This is a high-quality product designed for comfort and durability.
//               Perfect for daily wear, it comes in sizes {selectedItem.size.join(', ')}.
//             </div>

//             <div className="space-x-5 my-10">
//               {selectedItem.size.map((size) => (
//                 <span
//                   key={size}
//                   className="border-2 rounded-full p-3 px-4 hover:bg-black hover:text-white"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>

//             <div className="pt-5">
//               <button className="btn btn-info w-full">Add to cart</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Booking;


"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { services } from '@/lib/services'; // Import your services array
import { useSession } from 'next-auth/react';

function Booking() {

const {data} =useSession()
console.log(data)


  const params = useParams(); // Access dynamic route parameters
  const { category, id } = params; // Extract category and id from the URL

  // Fetch the relevant category data dynamically
  const categoryData = services[0].website[category]; // Access the correct category (men, women, kids)
  const selectedItem = categoryData?.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("");


  if (!selectedItem) {
    return <div>Loading...</div>; // Show loading or fallback UI
  }


  const handleAddToCart =async (event) =>{
    event.preventDefault();
    const newBooking = {
      email : data?.user?.email,
      productId: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      // size: selectedItem.size, 
      // 
      // // You might want to pass the selected size
      size: selectedSize,
      color: selectedItem.color,
       
    }
 const resp = await fetch('http://localhost:3000/booking/api/new-booking',{
method: 'POST',
body: JSON.stringify(newBooking),
headers:{
  "content-type" : "application/json"
}
 })
 console.log(resp)
  }







  return (
    <div className="max-w-[84rem]">
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row gap-10 justify-between text-black">
          <Image
            alt={selectedItem.name}
            src={selectedItem.image}
            width="700"
            height="1200"
            className=""
          />

          <div className="space-y-5">
            <h1 className="text-2xl font-bold text-black">{selectedItem.name}</h1>
            <h2 className="leading-loose">
              
              Brand: {selectedItem.name} <br />
              Product Code: {selectedItem.id} <br />
              Availability: In stock <br />
              Color: {selectedItem.color}
            </h2>
            <div className="text-3xl">
              <span className="text-gray-400">
                Tk <del>3299</del>{' '}
              </span>
              <span className="text-red-500">Tk {selectedItem.price}</span>
            </div>
            
            <div className="text-red-500">
              * PLEASE CHECK THE PRODUCT INFRONT OF DELIVERY MAN<br />
              * Offer is only valid at batabd.com<br />
            </div>
            <div>* FREE SHIPPING</div>
            <div className="text-gray-500">
              This is a high-quality product designed for comfort and durability.
              Perfect for daily wear, it comes in sizes {selectedItem.size.join(', ')}.
            </div>




  {/* Size Selection */}
  <div className="space-x-5 my-10">
              {selectedItem.size.map((size) => (
                <span
                  key={size}
                  className={`border-2 rounded-full p-3 px-4 cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setSelectedSize(size)} // Update selected size
                >
                  {size}
                </span>
              ))}
            </div>




            {/* <div className="space-x-5 my-10">
              {selectedItem.size.map((size) => (
                <span
                  key={size}
                  className="border-2 rounded-full p-3 px-4 hover:bg-black hover:text-white"
                >
                  {size}
                </span>
              ))}
            </div> */}
            


            <div className='flex space-x-2'>
              <h2>Your Email:</h2>
            <input defaultValue={data?.user?.email}
            
            type="text"
            name="email"
            className='bg-white text-red-400'
            ></input>
            </div>

            <div className="pt-5">
              <button  onClick={handleAddToCart} className="btn btn-info w-full">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
